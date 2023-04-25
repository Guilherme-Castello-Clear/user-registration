import React from "react";
import './Main.css'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}></Header>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>