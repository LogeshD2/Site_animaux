import React, {Component} from "react";
import Navbar from "../../components/UI/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Application from "./Application/Application";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Contact from "./Contact/Contact";


class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <Navbar/>
                    <Routes>
                        <Route exact path="/animaux" element={<Application/>}/>
                        <Route exact path="/" element={<Accueil/>}/>
                        <Route exact path="/contact" element={<Contact/>}/>
                        <Route path="*" element={<Error type="404">La page n'existe pas</Error>}/>
                    </Routes>
                    <div className="minSite"></div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Site;