import React from "react";
import {render} from "react-dom";
import './css/style.css';
import Header from "./components/Header";

function App() {
    return <>
        <main className='container-fluid p-0'>
            <Header className='w-100 bg-blue py-140 position-relative z-100'/>
            <div className="container articles">

            </div>
        </main>

    </>
}

render(<App />, document.querySelector("#root"));
