import React from 'react'
import Home from './home'
import {BrowserRouter, Match, Miss} from 'react-router'


const App = (props) => {
    return (
        <BrowserRouter>
          <div>
            <Match pattern="/home" component={Home} />
            <Miss component={NoMatch}/>
          </div>
        </BrowserRouter>
    )
}
export default App

const NoMatch = ({ location }) => (
    <div>
        <h2>Whoops</h2>
        <p>Sorry but {location.pathname} didn’t match any pages</p>
    </div>
)
