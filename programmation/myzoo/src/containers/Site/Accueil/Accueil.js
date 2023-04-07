import React, {Component} from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import banderole from "../../../asset/images/banderole.png";
import logo from "../../../asset/images/logo.png";

class Accueil extends Component {

    componentDidMount = () => {
        document.title = "parc d'attraction MyZoo";
    }

    render() {
        return (
            <div>
                <img src={banderole} alt="banderole" className="img-fluid"/>
                <TitreH1 bgColor="bg-success">Venez visiter le parc d'animaux MyZoo !!!</TitreH1>

                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid, 
                        deleniti blanditiis architecto facilis consequatur qui aspernatur, eligendi 
                        maxime itaque quisquam aut, beatae libero. Laborum quibusdam tenetur consequuntur 
                        molestiae error.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid, 
                        deleniti blanditiis architecto facilis consequatur qui aspernatur, eligendi 
                        maxime itaque quisquam aut, beatae libero. Laborum quibusdam tenetur consequuntur 
                        molestiae error.
                    </p>
                    
                    <div className="row no-gutters align-items-center">
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo du site" className="img-fluid"/>
                        </div>
                        <div className="col-12 col-md-6">
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid, 
                            deleniti blanditiis architecto facilis consequatur qui aspernatur, eligendi 
                            maxime itaque quisquam aut, beatae libero. Laborum quibusdam tenetur consequuntur 
                            molestiae error.
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid, 
                            deleniti blanditiis architecto facilis consequatur qui aspernatur, eligendi 
                            maxime itaque quisquam aut, beatae libero. Laborum quibusdam tenetur consequuntur 
                            molestiae error.
                        </div>

                        <div className="col-12 col-md-6">
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid, 
                            deleniti blanditiis architecto facilis consequatur qui aspernatur, eligendi 
                            maxime itaque quisquam aut, beatae libero. Laborum quibusdam tenetur consequuntur 
                            molestiae error.
                            lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid, 
                            deleniti blanditiis architecto facilis consequatur qui aspernatur, eligendi 
                            maxime itaque quisquam aut, beatae libero. Laborum quibusdam tenetur consequuntur 
                            molestiae error.
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={logo} alt="logo du site" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Accueil;
