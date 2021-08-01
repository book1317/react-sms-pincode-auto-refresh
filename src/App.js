import React from 'react';
import { getNewNumber, getAllNumber, getMessage, getMoney } from './API';
import './App.css';
import Item from './Item';
import CopyButton from './CopyButton';
import TypeButton from './TypeButton';

class App extends React.Component {
    getNumberInterval;
    sound = new Audio('https://smspincode.com/user/plucky.mp3');
    urlParams = new URLSearchParams(window.location.search);
    copyTimeout;

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
        email: '',
        emailCount: 0,
        showCopy: false,
        isEnableAutoPlus: false,
    };

    async componentDidMount() {
        const urlParams = this.urlParams;
        const email = localStorage.getItem('email');
        const emailCount = parseInt(localStorage.getItem('emailCount')) || 0;
        const isEnableAutoPlus = parseInt(localStorage.getItem('isEnableAutoPlus')) === 1;
        // const email = urlParams.get('email') || 'ilovegrab';
        // const emailCount = parseInt(urlParams.get('emailCount')) || 0;
        const apikey = urlParams.get('key');
        const app = urlParams.get('app') || 'foodpanda';
        const country = urlParams.get('country') || 'thailand';
        const address1 = urlParams.get('address1');
        const address2 = urlParams.get('address2');
        const address3 = urlParams.get('address3');
        const params = { apikey, app, country, address1, address2, address3 };

        const money = await getMoney(params);

        await this.setState({ params, money, email, emailCount, isEnableAutoPlus });
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
            console.log('err on App');
            this.setErrorMessage(err);
        }
        await this.refresh();
        if (message) {
            callback();
            this.playSound();
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

    setParams = (key, value) => {
        this.urlParams.set(key, value);
    };

    replaceParams = () => {
        const newParams = this.urlParams.toString();
        const newURL = window.location.origin + window.location.pathname + '?' + newParams;
        window.location.replace(newURL);
    };

    onCopy = async (copyText) => {
        clearTimeout(this.copyTimeout);
        this.setState({ showCopy: true, copyText });
        this.copyTimeout = setTimeout(() => {
            this.setState({ showCopy: false });
        }, 1000);
    };

    render() {
        const {
            allNumber,
            isLoading,
            isGetNumber,
            timeGetNumber,
            params,
            lastErrorMessage,
            money,
            email,
            emailCount,
            showCopy,
            copyText,
            isEnableAutoPlus,
        } = this.state;
        const { apikey, app, country, address1, address2, address3 } = params;

        return (
            <div className="App">
                <div style={{ opacity: showCopy ? 1 : 0 }} className="copyBox">
                    Copy : {copyText}
                </div>
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
                                    <Item
                                        key={item.timestamp}
                                        item={item}
                                        getMessage={this.getMessage}
                                        onCopied={this.onCopy}
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>

                <div className="howto">
                    <div className="howtoTitle">ข้อมูล {'(กดเพื่อคัดลอก)'}</div>
                    <CopyButton onCopied={this.onCopy}>
                        {address1 || '11 ซอย ลาดพร้าว 1 Khwaeng Chom Phon Krung Thep Maha Nakhon 10900'}
                    </CopyButton>
                    <CopyButton onCopied={this.onCopy}>{address2 || 'Gladden Condo'}</CopyButton>
                    <CopyButton onCopied={this.onCopy}>
                        {address3 || 'คอนโด แกลดเดิ่น ลาดพร้าวซ. 1 ถึงแล้วโทรมาเบอร์นี้ 0884015974 ครับ'}
                    </CopyButton>
                </div>

                <div className="howto">
                    <div className="howtoTitle">โค๊ดส่วนลด</div>
                    <CopyButton onCopied={this.onCopy}>HOORAY200</CopyButton>
                    <CopyButton onCopied={this.onCopy}>MARTUP</CopyButton>
                    <CopyButton onCopied={this.onCopy}>SAIFAH30</CopyButton>
                    <CopyButton onCopied={this.onCopy}>NEWGRAB</CopyButton>
                    <CopyButton onCopied={this.onCopy}>OMG80</CopyButton>
                    <CopyButton onCopied={this.onCopy}>HALF100</CopyButton>
                    <CopyButton onCopied={this.onCopy}>GBNEW</CopyButton>
                </div>

                <div className="howto">
                    <div className="howtoTitle">Account</div>
                    <input
                        onChange={(e) => {
                            this.setState({ email: e.target.value });
                        }}
                    />
                    <span style={{ marginLeft: '3px' }}>@gmail.com</span>
                    <button
                        style={{ marginLeft: '6px' }}
                        onClick={() => {
                            if (email) {
                                localStorage.setItem('email', email);
                            } else {
                                localStorage.removeItem('email');
                            }
                            localStorage.setItem('emailCount', 0);
                            this.setState({ emailCount: 0, email });

                            // this.setParams('email', email);
                            // this.setParams('emailCount', 0);
                            // this.replaceParams();
                        }}
                    >
                        save
                    </button>
                    <div>
                        <div className={'emailCount'}>
                            <div
                                onClick={() => {
                                    if (isEnableAutoPlus) {
                                        const newEmailCount = emailCount + 1;
                                        localStorage.setItem('emailCount', newEmailCount);
                                        this.setState({ emailCount: newEmailCount });
                                    }
                                }}
                            >
                                <CopyButton onCopied={this.onCopy}>
                                    {`${email || 'ilovegrab'}${emailCount.toString().padStart(3, '0')}@gmail.com`}
                                </CopyButton>
                            </div>
                            <button
                                className={'countButton'}
                                onClick={() => {
                                    const newEmailCount = emailCount - 1;
                                    if (newEmailCount >= 0) {
                                        localStorage.setItem('emailCount', newEmailCount);
                                        this.setState({ emailCount: newEmailCount });
                                    }

                                    // this.setParams('emailCount', newEmailCount);
                                    // this.replaceParams();
                                }}
                            >
                                -
                            </button>
                            <button
                                className={'countButton'}
                                onClick={() => {
                                    const newEmailCount = emailCount + 1;
                                    localStorage.setItem('emailCount', newEmailCount);
                                    this.setState({ emailCount: newEmailCount });
                                    // this.setParams('emailCount', newEmailCount);
                                    // this.replaceParams();
                                }}
                            >
                                +
                            </button>
                            <button
                                className={'countButton'}
                                onClick={() => {
                                    localStorage.setItem('isEnableAutoPlus', !isEnableAutoPlus ? 1 : 0);
                                    this.setState({ isEnableAutoPlus: !isEnableAutoPlus });
                                }}
                            >
                                Auto + : {isEnableAutoPlus ? 'On' : 'Off'}
                            </button>
                        </div>
                    </div>
                    <CopyButton onCopied={this.onCopy}>Ilove</CopyButton>
                    <CopyButton onCopied={this.onCopy}>Foodpanda</CopyButton>
                    <CopyButton onCopied={this.onCopy}>13171317</CopyButton>
                </div>

                <div className="howto">
                    <div className="howtoTitle">ร้านอาหาร</div>
                    <CopyButton onCopied={this.onCopy}>Shinkanzen</CopyButton>
                    <CopyButton onCopied={this.onCopy}>Eat Am Are</CopyButton>
                    <CopyButton onCopied={this.onCopy}>McDonald</CopyButton>
                    <CopyButton onCopied={this.onCopy}>Bonchon</CopyButton>
                    <CopyButton onCopied={this.onCopy}>Chester</CopyButton>
                    <CopyButton onCopied={this.onCopy}>Boon Tong Kee</CopyButton>
                    <CopyButton onCopied={this.onCopy}>Khao Man Gai Chakkraphadi</CopyButton>
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

                    <a
                        style={{ marginTop: '10px', display: 'block', cursor: 'pointer' }}
                        href="https://www.foodpanda.co.th/contents/deals"
                    >
                        https://www.foodpanda.co.th/contents/deals
                    </a>
                </div>
            </div>
        );
    }
}

export default App;
