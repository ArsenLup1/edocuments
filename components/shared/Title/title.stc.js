import Styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.min.css";

const TitleStc=Styled.h1`

    color:${(props)=>props.couleur || "#333333"};
    font-size:${(props)=>props.taille || "40px"};
    margin-bottom:${(props)=>props.marge_bas || "auto"};
    font-weight:${(props)=>props.poid_font || "600"};

`;
export default TitleStc;