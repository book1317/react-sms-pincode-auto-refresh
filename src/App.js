import React from 'react';
import { getNewNumber, getAllNumber, getMessage } from './API';
import './App.css';
import Item from './Item';

class App extends React.Component {
    getNumberInterval;
    sound = new Audio('https://smspincode.com/user/plucky.mp3');

    state = {
        params: {
            apikey: '',
            app: '',
            country: '',
        },
        allNumber: [],
        isLoading: true,
        timeGetNumber: 5,
        isGetNumber: false,
        lastErrorMessage: '',
    };

    async componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const apikey = urlParams.get('key');
        const app = urlParams.get('app') || 'foodpanda';
        const country = urlParams.get('country') || 'thailand';
        const params = { apikey, app, country };

        await this.setState({ params });
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
            await getNewNumber(params);
            this.playSound();
        } catch (err) {
            this.setErrorMessage(err);
        }
        this.refresh();
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

    getMessage = async (number) => {
        try {
            const { params } = this.state;
            await getMessage(params, number);
            this.playSound();
        } catch (err) {
            this.setErrorMessage(err);
        }
        this.refresh();
    };

    render() {
        const { allNumber, isLoading, isGetNumber, timeGetNumber, params, lastErrorMessage } = this.state;
        const { apikey, app, country } = params;

        return (
            <div className="App">
                <div className="title">BooKy SMS Pincode</div>
                <div className="subTitle">
                    <div>Key : {apikey}</div>
                    <div>
                        {app} : {country}
                    </div>
                </div>
                {/* <Input label="API Key" /> */}
                <button onClick={this.onClickGetNewNumber}>Get Number{isGetNumber && ':' + timeGetNumber}</button>
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
                                allNumber.map((item, index) => (
                                    <Item key={index} item={item} getMessage={this.getMessage} />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
