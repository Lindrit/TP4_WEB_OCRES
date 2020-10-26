import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import profils from "./profils";
import AffichageProfil from "./AffichageProfil";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            profil:profils[0],
            }
    }
    // Code de internet https://stackoverflow.com/questions/1484506/random-color-generator
    couleurAleatoire() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    changeProfil(profilNouveau)
    {
        this.setState(
            {profil:profilNouveau}
        )
    }
    changeCouleur()
    {
        let index=profils.indexOf(this.state.profil); // retourne l'index du profil actuel dans profils
        if (index ===-1) return; // si le profil n'est pas dans le tableau on return
        profils[index].couleur=this.couleurAleatoire(); // sinon on change la couleur dans le tableau
        this.setState(
            {profil:profils[index]}
        )
    }
    incrementeSuper()
    {
        let index=profils.indexOf(this.state.profil); // retourne l'index du profil actuel dans profils
        if (index ===-1) return; // si le profil n'est pas dans le tableau on return
        profils[index].cestSuper++; // sinon on change la couleur dans le tableau
        this.setState(
            {profil:profils[index]}
        )
    }
  renderBouttonProfil(profil) {
    return <button  onClick={() => {this.changeProfil(profil)}}> {profil.prenom} </button>;
  }
    renderBouttonStyle() {
        return <button  onClick={() => {this.changeCouleur()}}> Change Style </button>;
    }
    renderBouttonSuper() {
        return <button  onClick={() => {this.incrementeSuper()}}> C'est Super </button>;
    }
  render() {
    return (
        <div className="App">
          {this.renderBouttonProfil(profils[0])}
          {this.renderBouttonProfil(profils[1])}
          {this.renderBouttonProfil(profils[2])}

          <AffichageProfil profil={this.state.profil}></AffichageProfil>

            {this.renderBouttonStyle()}
            <div>
                <p>{this.state.profil.dernierePublication}</p>
                {this.renderBouttonSuper()}
                {this.state.profil.cestSuper}
            </div>
        </div>
    )
  }
}

export default App;