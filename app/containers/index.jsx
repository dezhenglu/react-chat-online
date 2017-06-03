import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../components/Header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone 
                    ? this.props.children 
                    : <div>正在加载...</div>
                }                
            </div>
        )
    }
    componentDidMount() {

        // this.props.userInfoActions.update({
        //     userName: 'admin'
        // });

        // 更改状态
        this.setState({
            initDone: true
        });  
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
