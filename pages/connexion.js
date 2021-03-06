import Link from "next/link";
import { useState } from "react";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormLogin from "../components/shared/FormLogin";
//import HelmetPage from "../components/HelmetComponent";
import NavbarAir from '../components/shared/NavbarAir';

const Wrapper = styled(Container)`
  background: #fbfbfb;
  min-height: 65vh;
  margin-top: 0px;

  .card {
    border-color: #ecedee;
    border-radius: 0px;
    padding: 20px;
    @media (min-width: 900px) {
      width: 50%;
    }
  }
`;

export default function Connexion() {
  return (
    <Wrapper fluid>
    <NavbarAir />
    <header>Connexion</header>  
    {/*description={"Page de connexion"}*/}
      <Row className="h-100">
        <Col className="h-100 d-flex align-items-center justify-content-center">
          <Card className="">
            <FormLogin useForm   />
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
}