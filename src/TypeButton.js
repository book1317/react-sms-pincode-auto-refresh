import React, { Component } from 'react';

class TypeButton extends Component {
    constructor(props) {
        super(props);
        this.state = { isSelect: false };
    }

    componentDidMount() {}

    render() {
        const { params, children, type } = this.props;
        const isSelect = type === 'app' ? params.app === children : params.country === children;
        return (
            <div>
                <button style={{ backgroundColor: isSelect ? 'green' : '' }} className="typeButton" onClick={() => {}}>
                    {children}
                </button>
            </div>
        );
    }
}

export default TypeButton;
