import React from 'react';
import CopyButton from './CopyButton';

class Item extends React.Component {
    getMessageInterval;
    refreshTime = 3000;
    state = { isRefresh: false, time: 3 };

    componentWillUnmount() {
        clearInterval(this.getMessageInterval);
    }

    getMessage = async (number, message) => {
        await this.props.getMessage(number, message, this.callback);
    };

    callback = () => {
        clearInterval(this.getMessageInterval);
        this.setState({ isRefresh: false });
    };

    onClickGetMessage = async (number, message) => {
        const { isRefresh } = this.state;
        this.setState({ isRefresh: !isRefresh });

        if (isRefresh) {
            clearInterval(this.getMessageInterval);
        } else {
            this.getMessage(number, message);
            this.getMessageInterval = setInterval(async () => {
                const { time } = this.state;
                if (time === 0) {
                    this.setState({ time: 3 });
                } else {
                    this.setState({ time: time - 1 });
                    if (time === 1) {
                        this.getMessage(number, message);
                    }
                }
            }, 1000);
        }
    };

    render() {
        const { isRefresh, time } = this.state;
        const { item } = this.props;
        return (
            <tr>
                <td>
                    <div className="getButton">
                        <button
                            className="getButton"
                            onClick={() => {
                                this.onClickGetMessage(item.number, item.message);
                            }}
                        >
                            {isRefresh ? 'Get:' + time : 'Get'}
                        </button>
                    </div>
                </td>

                <td>
                    <CopyButton>{`+${item.number}`}</CopyButton>
                </td>
                <td className="itemCode">
                    <div>{item.message}</div>
                </td>
                <td>
                    <div>{item.timestamp}</div>
                </td>
                <td>
                    <div>{item.country_name}</div>
                </td>
                <td>
                    <div>{item.app_name}</div>
                </td>
            </tr>
        );
    }
}

export default Item;
