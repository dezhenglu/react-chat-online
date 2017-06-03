import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class ChatItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <li>
                <div className="service">
                    <div>
                        <span className="h-portrait">
                            <img alt="" width="40" height="40" src="//static.360buyimg.com/im//m_web/images/chat/02.png"/>
                        </span>
                        <span className="dialog-box">
                            <span className="cont"><div>{this.props.message}</div></span>
                            <span className="icon-arr"></span>
                        </span>
                    </div>
                </div>
            </li>
        )
    }
}

export default ChatItem
