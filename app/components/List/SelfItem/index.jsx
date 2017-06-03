import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SelfItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <li>
                <div className="customer">
                    <span className="err" style={{display: 'none'}}></span>
                    <span className="h-portrait">
                        <img alt="" width="40" height="40" 
                            src="http://static.360buyimg.com/im/m_web/images/chat/03.png"/>  
                    </span>
                    <span className="dialog-box">
                        <span className="cont"><div>{this.props.message}</div></span>
                        <span className="icon-arr"></span>
                    </span>
                </div>
            </li>
        )
    }
}

export default SelfItem
