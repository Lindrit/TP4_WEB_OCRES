import React, {Component} from 'react'
import './AffichageProfil.css';
import profils from "./profils";

class AffichageProfil extends Component {

    render() {
        return (
            <div style={{backgroundColor:this.props.profil.couleur}}>
                <h1>Prenom : {this.props.profil.prenom} </h1>
                <h1>Nom : {this.props.profil.nom}</h1>
                <h1>Date de Naissance : {this.props.profil.dateNaissance}</h1>
                <img src={this.props.profil.image} width={350} height={300} alt="Logo"/>
            </div>
        )
    }
}

export default AffichageProfil;