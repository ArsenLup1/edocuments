import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link'
import ElementMenuStc from './ItemMenu.stc'

const ElementMenu=(props)=>{

    return (
        <ElementMenuStc couleur={props.couleur} marge_bas={props.marge_bas} marge_haut={props.marge_haut} taille={props.taille}>
             <Link href={props.lien}>
                <a>{props.texte}</a>
            </Link>
        </ElementMenuStc>
    )
}

export default ElementMenu;