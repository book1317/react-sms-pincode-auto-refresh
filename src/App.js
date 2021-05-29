import React from 'react';
import { getNewNumber, getAllNumber, getMessage, getMoney } from './API';
import './App.css';
import Item from './Item';
import CopyButton from './CopyButton';
import TypeButton from './TypeButton';

class App extends React.Component {
    getNumberInterval;
    sound = new Audio('https://smspincode.com/user/plucky.mp3');

    state = {
        params: {
            apikey: '',
            app: '',
            country: '',
            address1: '',
            address2: '',
            address3: '',
        },
        allNumber: [],
        isLoading: true,
        timeGetNumber: 5,
        isGetNumber: false,
        lastErrorMessage: '',
        money: '',
    };

    async componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const apikey = urlParams.get('key');
        const app = urlParams.get('app') || 'foodpanda';
        const country = urlParams.get('country') || 'thailand';
        const address1 = urlParams.get('address1');
        const address2 = urlParams.get('address2');
        const address3 = urlParams.get('address3');
        const params = { apikey, app, country, address1, address2, address3 };

        const money = await getMoney(params);

        await this.setState({ params, money });
        await this.refresh();
    }

    setErrorMessage = (err) => {
        const error = err.status + ' : ' + err.statusText;
        this.setState({ lastErrorMessage: error });
    };

    playSound = () => {
        this.sound.pause();
        this.sound.currentTime = 0;
        this.sound.play();
    };

    refresh = async () => {
        console.log('refresh');
        try {
            const { params } = this.state;

            this.setState({ isLoading: true });
            const allNumber = await getAllNumber(params);
            this.setState({ allNumber });
        } catch (err) {
            this.setErrorMessage(err);
        }
        this.setState({ isLoading: false });
    };

    getNewNumber = async () => {
        try {
            const { params } = this.state;
            const result = await getNewNumber(params);

            if (result) {
                this.setState({ isGetNumber: false });
                clearInterval(this.getNumberInterval);
                this.refresh();
                this.playSound();
            }
        } catch (err) {
            this.setErrorMessage(err);
        }
    };

    getMessage = async (number, message, callback) => {
        try {
            const { params } = this.state;
            await getMessage(params, number);
        } catch (err) {
            this.setErrorMessage(err);
        } finally {
            await this.refresh();
            if (message) {
                callback();
                this.playSound();
            }
        }
    };

    onClickGetNewNumber = async () => {
        const { isGetNumber } = this.state;
        if (isGetNumber) {
            clearInterval(this.getNumberInterval);
        } else {
            this.getNewNumber();
            this.getNumberInterval = setInterval(async () => {
                const { timeGetNumber } = this.state;
                if (timeGetNumber === 0) {
                    this.setState({ timeGetNumber: 5 });
                } else {
                    this.setState({ timeGetNumber: timeGetNumber - 1 });
                    if (timeGetNumber === 1) {
                        this.getNewNumber();
                    }
                }
            }, 1000);
        }
        this.setState({ isGetNumber: !isGetNumber });
    };

    render() {
        const { allNumber, isLoading, isGetNumber, timeGetNumber, params, lastErrorMessage, money } = this.state;
        const { apikey, app, country, address1, address2, address3 } = params;

        return (
            <div className="App">
                <div className="headerContainer">
                    <div className="leftHeader">
                        <div>
                            {/* <TypeButton params={params} type="app">
                                foodpanda
                            </TypeButton> */}
                        </div>
                    </div>

                    <div className="middleHeader">
                        <div className="title">BooKy SMS Pincode</div>
                        <div className="subTitle">
                            <div>
                                Key :{' '}
                                {apikey ? (
                                    apikey
                                ) : (
                                    <span>
                                        {'ไปใส่ APIKey ด้วย -> '}
                                        <a href="https://smspincode.com/user/settings.php">
                                            https://smspincode.com/user/settings.php
                                        </a>
                                    </span>
                                )}
                            </div>
                            <div>
                                {app} : {country}
                            </div>
                            <div className="greenText">Money : {money}$</div>
                        </div>
                        {/* <Input label="API Key" /> */}
                        <button onClick={this.onClickGetNewNumber}>
                            Get Number{isGetNumber && ':' + timeGetNumber}
                        </button>
                        <button className="refreshButton" onClick={this.refresh}>
                            Refresh
                        </button>
                        <button
                            className="refreshButton"
                            onClick={() => {
                                window.location.reload();
                            }}
                        >
                            Stop all
                        </button>
                        <span className="loading">{isLoading && 'Loading...'}</span>
                        {lastErrorMessage && <div className="errorMessage">Last Error : {lastErrorMessage}</div>}
                    </div>

                    <div className="rightHeader"></div>
                </div>

                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <td className="headTableButton"></td>
                                <td className="headTable">Number</td>
                                <td className="headTableCode">Code</td>
                                <td className="headTable">Time</td>
                                <td className="headTable">Country</td>
                                <td className="headTable">App</td>
                            </tr>
                            {allNumber.length > 0 &&
                                allNumber.map((item) => (
                                    <Item key={item.timestamp} item={item} getMessage={this.getMessage} />
                                ))}
                        </tbody>
                    </table>
                </div>

                <div className="howto">
                    <div className="howtoTitle">ข้อมูล {'(กดเพื่อคัดลอก)'}</div>
                    <CopyButton>
                        {address1 || '19 Lat Phrao 1 Alley, Lane 8 Khwaeng Chom Phon Krung Thep Maha Nakhon 10900'}
                    </CopyButton>
                    <CopyButton>{address2 || 'สมคิดแมนชั่น ตึกสีเทา'}</CopyButton>
                    <CopyButton>
                        {address3 ||
                            'ลาดพร้ว ซ.1 แยก 8 เกือบสุดซอย หน้าตึกเขียนว่าสมคิดแมนชั่น ถึงแล้วโทรมาเบอร์นี้ 0884015974 ครับ'}
                    </CopyButton>
                    <CopyButton>HOORAY100</CopyButton>
                    <CopyButton>FPDSS100</CopyButton>
                    <CopyButton>godoffood001@gmail.com</CopyButton>
                </div>

                <div className="howto">
                    <div className="howtoTitle">วิธีใช้ ใส่ลิงค์ตามนี้</div>
                    <div className="example">
                        https://book1317.github.io/react-sms-pincode-auto-refresh?key=
                        <span className="redText">{'{APIkey}'}</span>
                        {'&'}app=<span className="redText">{'{app}'}</span>
                        {'&'}country=<span className="redText">{'{country}'}</span>
                        {'&'}address1=<span className="redText">{'{address1}'}</span>
                        {'&'}address2=<span className="redText">{'{address2}'}</span>
                        {'&'}address3=<span className="redText">{'{address3}'}</span>
                    </div>
                    <div>
                        <span className="redText">APIkey</span> = 1101600d8fa7e22bxxxxxxxxxxxxxxxxxxxxxxxxx
                        {' (required)'} from{' '}
                        <a href="https://smspincode.com/user/settings.php">https://smspincode.com/user/settings.php</a>{' '}
                    </div>
                    <div>
                        <span className="redText">app</span> = foodpanda {'(defualt)'}
                    </div>
                    <div>
                        <span className="redText">country</span> = thailand {'(defualt)'}
                    </div>
                    <div>
                        <span className="redText">address1</span>
                    </div>
                    <div>
                        <span className="redText">address2</span>
                    </div>
                    <div>
                        <span className="redText">address3</span>
                    </div>

                    <div
                        style={{ marginTop: '10px', display: 'block', cursor: 'pointer' }}
                        onClick={() => {
                            window.open('https://www.foodpanda.co.th/contents/deals');
                        }}
                    >
                        https://www.foodpanda.co.th/contents/deals
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
