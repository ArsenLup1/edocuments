import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import TitleStc from './title.stc';

const Title =(props)=>{
    return (
        <TitleStc className="titre" 
                  marge_bas={props.marge_bas} 
                  couleur={props.couleur} 
                  taille={props.taille} 
                  poid_font={props.poid_font}
                  alignement={props.alignement}>
            {props.texte}
        </TitleStc>
    )
}

export default Title;