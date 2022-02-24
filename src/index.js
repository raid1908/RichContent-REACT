import React from "react";
import {render} from "react-dom";
import './css/style.css';
import Header from "./components/Header";
import ArticlesSection from "./components/ArticlesSection";
import SpecificationTable from "./components/SpecificationTable";
import ScrollToTop from "./components/helpers/ScrollTop";

function App() {
    return <>
        <main className='container-fluid p-0'>
            <Header className='w-100 bg-blue py-140 position-relative'/>
            <ArticlesSection className="container articles__section bg-white p-0"/>
            <SpecificationTable className="container specification__table"/>
        </main>
        <ScrollToTop />

    </>
}

render(<App />, document.querySelector("#root"));
