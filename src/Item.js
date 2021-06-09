import React from 'react';
import CopyButton from './CopyButton';

class Item extends React.Component {
    getMessageInterval;
    refreshTime = 3000;
    state = { isRefresh: false, time: 3 };

    componentWillUnmount() {
        clearInterval(this.getMessageInterval);
    }

    getMessage = async (number) => {
        const { item } = this.props;
        try {
            await this.props.getMessage(number, item.message, this.callback);
        } catch (err) {
            console.log('err on item', err);
        }
    };

    callback = () => {
        clearInterval(this.getMessageInterval);
        this.setState({ isRefresh: false });
    };

    onClickGetMessage = async (number) => {
        const { isRefresh } = this.state;
        this.setState({ isRefresh: !isRefresh });

        if (isRefresh) {
            clearInterval(this.getMessageInterval);
        } else {
            this.getMessage(number);
            this.getMessageInterval = setInterval(async () => {
                const { time } = this.state;
                if (time === 0) {
                    this.setState({ time: 3 });
                } else {
                    this.setState({ time: time - 1 });
                    if (time === 1) {
                        this.getMessage(number);
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
                                this.onClickGetMessage(item.number);
                            }}
                        >
                            {isRefresh ? 'Get:' + time : 'Get'}
                        </button>
                    </div>
                </td>

                <td>
                    <CopyButton
                        onCopied={(text) => {
                            if (this.props.onCopied) {
                                this.props.onCopied(text);
                            }
                        }}
                    >{`+${item.number}`}</CopyButton>
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
