import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class TimeItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <li>
                <p className="time">{this.props.message}</p>
            </li>
        )
    }
}

export default TimeItem