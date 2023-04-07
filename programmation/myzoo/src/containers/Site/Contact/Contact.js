import React,{Component} from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import Formulaire from "./Formulaire/Formulaire";
import axios from "axios";

class Contact extends Component {
    componentDidMount = () => {
        document.title = "Page de contact";
    }

    handleEnvoiMail = (message) => {
        axios.post(`http://localhost/React/Site_Animaux/SERVEURANIMAUX/front/sendMessage`,message)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <>
                 <TitreH1 bgColor="bg-success">Contacter-nous !</TitreH1>
                 <div className="container">
                    <h2>Adresse :</h2>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    <h2>Téléphone :</h2>
                    00 00 00 00 00 
                    <h2>Vous préférez nous écrire</h2>
                    <Formulaire sendMail={this.handleEnvoiMail}/>
                 </div>
            </>
        );
    }
}

export default Contact;