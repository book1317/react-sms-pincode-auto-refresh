import React from 'react';

class Item extends React.Component {
    getMessageInterval;
    refreshTime = 3000;
    state = { isRefresh: false, time: 3 };

    getMessage = async (number) => {
        await this.props.getMessage(number);
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
                    <div>{item.number}</div>
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
