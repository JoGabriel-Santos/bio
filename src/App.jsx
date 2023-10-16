import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Product from "./pages/Product";
import Account from "./pages/Account";

function App() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/detalhes-do-produto" exact component={Details}/>
                    <Route path="/novo-produto" exact component={Product}/>
                    <Route path="/configuracao-de-conta" exact component={Account}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;