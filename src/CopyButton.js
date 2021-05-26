import React, { Component } from 'react';

class CopyButton extends Component {
    constructor(props) {
        super(props);
        this.state = { isCopy: false };
    }

    render() {
        const { children } = this.props;
        const { isCopy } = this.state;
        return (
            <div>
                <div
                    style={{ color: isCopy ? 'green' : '' }}
                    className="copyButton"
                    onClick={() => {
                        this.setState({ isCopy: true });
                        navigator.clipboard.writeText(children);
                    }}
                >
                    {children}
                </div>
            </div>
        );
    }
}

export default CopyButton;
