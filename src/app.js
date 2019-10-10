// import '@babel/polyfill'
import React, {Component} from 'react'
import ReactDom from 'react-dom'

import { add } from './math'

class App extends Component {
    render() {
        return <div>Hello World</div>
    }
}

ReactDom.render(<App />, document.getElementById('root'))

add(1, 2)
