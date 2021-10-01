import Title from '../../shared/Title';
import RangerMainMenuStc  from './SectionOneMainMenu.stc';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Card, CardTitle, CardText } from 'reactstrap';
import InputGroup from "../../shared/InputGroup";
import { FaBabyCarriage } from 'react-icons/fa'; 
import { Button } from 'reactstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoFileSubmodule } from 'react-icons/go';
import { ImProfile } from 'react-icons/im';
import { BiBuildingHouse } from 'react-icons/bi';
import { GiHospital } from 'react-icons/gi';
import { CgNotes } from 'react-icons/cg';
 

const RangerMainMenu = (props) => {


  return (
    <RangerMainMenuStc>
    <div className="container">
      <div className='row mx-auto'>
            <div className='col col-lg-12 text-center tara'>
              <Title 
              texte="Bienvenu sur Je choisis le Maroc" 
              poid_font="700"/>
              <p className='text-lg mt-4 mb-2 d-flex justify-content-lg-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>

        <div className='row mx-auto mb-2'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>FP01</strong> <IoSettingsOutline color="black"/></CardTitle>
                    <CardTitle tag="h3"><strong>Parametre du compte</strong></CardTitle>
                    <CardText className="mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. </CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>FP02</strong> <GoFileSubmodule color="black" /></CardTitle>
                    <CardTitle tag="h3"><strong>Gestion des documents d'inscription</strong></CardTitle>
                    <CardText className="mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. </CardText>
            </Card>
        </div>
    </div>

        <div className='row mx-auto my-2 mb-2 h-100'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4', height:"80%" }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>PF03</strong> <ImProfile color="black" /></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Gestion des documents de carte de séjour</strong> </CardTitle>
                    <CardText className="mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. </CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4', height:"80%" }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>FP04</strong> <BiBuildingHouse color='black'/></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Gestion des activités consulaires</strong></CardTitle>
                    <CardText className="mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</CardText>
            </Card>
        </div>
    </div>

    <div className='row mx-auto my-6'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4', height:"80%" }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>PF05</strong> <GiHospital color="black"/></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Gestion des démarches de soins médicaux</strong></CardTitle>
                    <CardText className="mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4', height:"80%" }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5' ><strong>FP07</strong> <CgNotes color="black"/></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Gestion des notes d'informations</strong></CardTitle>
                    <CardText className="mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</CardText>
            </Card>
        </div>
    </div>

  
</div>
</RangerMainMenuStc>
  )
}

export default RangerMainMenu;