import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import NotFound from '../containers/404'
import Online from '../containers/Online'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/">
                    <IndexRoute component={Online}/>
                    <Route path="/online" component={Online}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
