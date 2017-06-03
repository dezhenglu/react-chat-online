import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import uuid from 'node-uuid';
import List from '../../components/List'
import Footer from '../../components/Footer'

class Online extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

        this.state = {
            data: [],
            message: '', 
            socket: null,
            stompClient: null,
            uuid: uuid.v4()
        };
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length 
                    ? <List data={this.state.data}/>
                    : <div>Say something...</div>
                }
                <Footer sendMessageFc={this.sendMessage.bind(this)}/>
            </div>
        )
    }

    connect() {     
        var socket =this.state.socket;
        var stompClient =this.state.stompClient;
        socket = new SockJS('/gs-guide-websocket');
        stompClient = Stomp.over(socket);
        
        // var sfc = this.showMessage

        // websocket.onmessage = (evt) => {
        //     this.props.onMessage(evt.data);
        // };

        stompClient.connect({}, (frame) =>{
            console.log('Connected: ' + frame);
            stompClient.subscribe('/say/response',
                (message) => {
                    console.log(message)
                    this.showMessage(message)
                }
            );
        });

        // stompClient.connect({}, function (frame) {
        //     // setConnected(true);
        //     console.log('Connected: ' + frame);
        //     stompClient.subscribe('/say/response',
        //          function (message) {
        //             //showGreeting(JSON.parse(greeting.body).content);
        //             console.log(message)
        //             sfc(message)
        //     });
        // });
        this.setState({
            socket: socket,
            stompClient: stompClient
        });
    }

    disconnect() {
        var stompClient =this.state.stompClient;
        if (stompClient != null) {
            stompClient.disconnect();
        }
        // setConnected(false);
        console.log("Disconnected");
    }


    sendMessage(message) {
        message.uuid = this.state.uuid
        var stompClient =this.state.stompClient;
        stompClient.send("/app/listen", {}, JSON.stringify(message));
        //this.showMessage(message)
    }
    showMessage(message) {
        console.log('list', message.body)
        var msgObj = JSON.parse(message.body)
        console.log(msgObj)
        if (msgObj.uuid !== this.state.uuid) {
            msgObj.type = "chat"
        }
        // 存储
        this.setState({
            data: this.state.data.concat(msgObj)
        });
    }
    componentDidMount() {
        console.log(this.state.uuid)
        this.connect()
    }
    componentWillUnmount() {
        this.disconnect()
    }
}

export default Online
