import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import FooterStc from "./Footer.stc";
//import SousTitre from "../../shared/SousTitre";
import MonImage from "../../shared/MonImage";
import ElementMenu from "../../shared/ItemMenu";
import Title from "../../shared/Title";

const Menus = [
  { lien: "/elprofa", texte: "Liste-Etablissements" },
  { lien: "/elprofa", texte: "Procedures/Documents" },
  { lien: "/elprofa", texte: "Listes-haupitaux" },
  { lien: "/elprofa", texte: "Notes-Consulaire" },
  { lien: "/elprofa", texte: "Contact-nous" },
];

const Footer = (props) => {
  return (
    <FooterStc>
      <Container>
        <Row>
          <Col md={3}>
            <MonImage chemin="/img/BgLogin.svg" largeur="200" hauteur="200" />
            
            <p
              color="aliceblue"
              marge_bas="10px"
              alignement="left"
              marge_haut="20px"
            >
              DUBAI AGENGY est une agence digitale,Une agence digitale est
              spécialisée dans la création de contenus digitaux pour les
              entreprises, les institutions. C’est une agence de communication
              capable de créer des sites internet et de proposer toutes les
              prestations liées au webmarketing.
            </p>
          </Col>
          <Col md={6}>
            <MonImage chemin="/img/BgLogin.svg" />
          </Col>
          <Col md={3} className="divMenu">
              <Title
              marge_bas="20px" 
              couleur="#fff" 
              taille="30px" 
              poid_font="600"
              alignement="right"
               texte={
                <><br/>Menu</>
            }/>
            <ul>
              {Menus.map((menu, index) => (
                <ElementMenu
                  couleur="#fff"
                  key={index}
                  taille="17px"
                  marge_bas="40px"
                  marge_haut="15px"
                  texte={menu.texte}
                  lien={menu.lien}
                />
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <p color="#fff" alignement="left">
              © Dubani Agency 2021 Mabbly, LLC. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <p color="#fff" alignement="Right">
              Privacy policy
            </p>
          </Col>
        </Row>
      </Container>
    </FooterStc>
  );
};

export default Footer;