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
                    style={{ color: isCopy ? '#D3D3D3' : '' }}
                    className={'copyButton'}
                    onClick={() => {
                        this.setState({ isCopy: true });
                        if (this.props.onCopied) {
                            this.props.onCopied(children);
                        }
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
