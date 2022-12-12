import React from "react"
import ReactDOM from "react-dom"

import Intro from "/components/Intro.js"
import Main from "/components/Main.js"
import Footer from "/components/Footer.js"

function App(){
    return (
        <div className="container">
            <img className="my-photo" src="/images/my-photo.jpeg" />
            <Intro />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))