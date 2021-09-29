import Link from "next/link";
import { Container, Row, Col, Card } from "reactstrap";
import styled from "styled-components";
import RangerMainMenu from "../components/Sections/SectionOneMainMenu";
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



        
export default function MainMenu() {
  return (
    <Wrapper>
      <Container className="h-100">
        <NavbarAir />
        <RangerMainMenu />
      </Container>
    </Wrapper>
  );
}