import Link from "next/link";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import FormRegister from "../components/shared/FormRegister";
import Image from "next/image";
import NavbarAir from '../components/shared/NavbarAir';

const Wrapper = styled.div`
  margin-top: 90px;
  background: #fbfbfb;
  margin: 0px;

  #divImage div,
  #divImage img {
    width: 100%;
  }

  .card {
    margin: 70px auto;
    padding: 20px;
    border-color: #ecedee;
    border-radius: 0px;
    min-height: 351px;
  }

  .colForm
  {
    @media (max-width: 990px) 
    {
        padding:15px !important;
    }
  }
`;



        
export default function Login() {
  return (
    <Wrapper>
      <Container className="h-100">
        <NavbarAir />
        <Row className="h-100">
          <Col lg={6} className="h-100 d-none d-lg-block" id="divImage">
            <Image
              src="/img/BgLogin.svg"
              alt="Picture of computer"
              width="80"
              height="80"
            />
          </Col>
          <Col lg={6} className="h-100 pr-0 colForm">
            <Card className="h-75">
              <FormRegister />
            </Card>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}