import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            message: '' 
        };
    }
    render() {
        return (
            <div id="footer" className="input-area">
                <div id="sengbox-bg" className="tbl-type"> 
                    <span className="tbl-cell cell01">
                        <a id="chatPanel" className="icon-smile">表情</a>
                    </span>
                    <span className="tbl-cell">
                        <input 
                            onKeyUp={this.keyUpHandle.bind(this)}
                            onChange={this.changeHandle.bind(this)} 
                            value={this.state.message}
                            type="text"
                            className="input" 
                            maxLength="360"/>
                    </span>
                    <span className="tbl-cell cell03">
                        <a onClick={this.sendHandle.bind(this)} id="sendMsg" className="btn-link">发 送</a>
                    </span>  
                </div>
            </div>
        )
    }
    changeHandle(e) {
        this.setState({
            message: e.target.value 
        });
    }
    keyUpHandle(e) {
        if (e.keyCode !== 13) {
            return
        }
        this.sendHandle()
    }
    sendHandle() {
        var msg = this.state.message
        if(msg === '') {
            return
        }
        var message = {type:'self', message: msg}
        console.log('footer', message)
        this.setState({
            message: '' 
        });
        this.props.sendMessageFc(message)
    }
}

export default Footer
