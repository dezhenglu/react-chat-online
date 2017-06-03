import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SelfItem from './SelfItem'
import ChatItem from './ChatItem'
import TimeItem from './TimeItem'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data
        return (
            <div className="content">
                <ul className="im-chat-list">
                    {data.map((item,index) => {
                        if (item.type === 'self') {
                            return <SelfItem key={index} message={item.message}/>
                        } else if (item.type === 'chat') {
                            return <ChatItem key={index} message={item.message}/>
                        } else if (item.type === 'time') {
                            return <TimeItem key={index} message={item.message}/>
                        } else {
                            ''
                        } 
                    })}
                </ul>
            </div>
        )
    }
}

export default List
