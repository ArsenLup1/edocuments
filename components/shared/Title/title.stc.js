import Styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

const TitleStc=Styled.h1`

    color:${(props)=>props.couleur || "#fff"};
    font-size:${(props)=>props.taille || "40px"};
    margin-bottom:${(props)=>props.marge_bas || "auto"};
    margin-top:${(props)=>props.marge_haut || "auto"};
    font-weight:${(props)=>props.poid_font || "600"};
    text-align:${(props)=>props.alignement || "left"};

`;
export default TitleStc;