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
 

const RangerMainMenu = (props) => {


  return (
    <RangerMainMenuStc>
    <div className="container">
      <div className='row mx-auto'>
            <div className='col col-lg-12 text-left tara'>
              <Title 
              texte="Aptitudes linguistiques" 
              poid_font="700"/>
              <p className='text-lg mt-4 mb-5 d-flex justify-content-lg-left'>
                  À Montréal, il vous est possible d’étudier en français et/ou en anglais. 
                  Indiquez-nous votre niveau dans ces deux langues pour nous permettre de 
                  mieux adapter notre sélection à vos capacités.</p>
              </div>

            <div className='mt-5'>
              <Title 
              texte="Niveau en français*" 
              poid_font="700"/>

                <p className='text-lg mt-4 mb-5 d-flex justify-content-lg-left'>
                Les choix de réponses sont basés sur le Cadre européen commun des références pour 
                les langues (CECRL).</p>
              </div>
            </div>

        <div className='row mx-auto mb-5'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>A1</strong></CardTitle>
                    <CardTitle tag="h3"><strong>Débutant</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre et d’utiliser des expressions simples pour 
                        répondre à des besoins concrets de la vie quotidienne</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>A2</strong></CardTitle>
                    <CardTitle tag="h3"><strong>Débutant</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre et d’utiliser des expressions simples pour 
                        répondre à des besoins concrets de la vie quotidienne</CardText>
            </Card>
        </div>
    </div>

        <div className='row mx-auto my-auto'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>B1</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Intermédiaire</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre les points essentiels quand un langage clair 
                    et standard est utilisé et qu’il s’agit de sujets familiers et d’intérêt comme le travail et 
                    les loisirs. Capacité à également s’exprimer sur ces mêmes sujets</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>B2</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Intermédiaire</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre les points essentiels quand un langage clair 
                    et standard est utilisé et qu’il s’agit de sujets familiers et d’intérêt comme le travail et 
                    les loisirs. Capacité à également s’exprimer sur ces mêmes sujets</CardText>
            </Card>
        </div>
    </div>

    <div className='row mx-auto my-6'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>C1</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Avancé</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre des textes longs et ses subtilités, de s’exprimer de façon efficace et bien structurée sur des sujets complexes, et ce, avec fluidité</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5' ><strong>C2</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Avancé</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre des textes longs et ses subtilités, de s’exprimer de façon 
                    efficace et bien structurée sur des sujets complexes, et ce, avec fluidité</CardText>
            </Card>
        </div>
    </div>

    <div className='row mx-auto py-6'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="d-flex justify-content-lg-center">
                    <FaBabyCarriage className=''/>
                    <CardTitle tag="h3" className='mt-5'><strong>Langue maternelle</strong></CardTitle>
                </Card>
        </div>

        <div className='col col-lg-6'>
            
        </div>
    </div>

    <div className='row mx-auto'>
            <div className='col col-lg-12 text-left tara'>
              <Title 
              texte="Tests de langue française effectués (le cas échéant)" 
              poid_font="700"/>
            </div>
        </div>

        <div className='row mx-auto'>
            <div className='col col-lg-6'>
             <Form>
                <InputGroup label="Selectionnez un teste de langue" id="languetest"/>
                <InputGroup label="Selectionnez un teste de langue" id="languetest"/>
                </Form>
            </div>

            <div className='col col-lg-6'>
            <Form>
                <div className="row d-inline-flex">
                    <div className="col col-lg-6">
                        <InputGroup type="select" label="Année d'obtention*" className='col col-lg-3'>
                            <select name="qsdfgh"/>
                            <select name="qsdhb"/>
                            <select name="zgthjh"/>
                        </InputGroup>
                    </div>
                    <div className="col col-lg-6">
                        <InputGroup label="Note obtenue" id="note" />
                    </div>
                </div>

                <div className="row d-inline-flex">
                    <div className="col col-lg-6">
                        <InputGroup type="select" label="Année d'obtention*" className='col col-lg-3'>
                            <select name="qsdfgh"/>
                            <select name="qsdhb"/>
                            <select name="zgthjh"/>
                        </InputGroup>
                    </div>

                    <div className="col col-lg-6">
                        <InputGroup type="select" label="Année d'obtention*" className='col col-lg-3'>
                            <select name="qsdfgh"/>
                            <select name="qsdhb"/>
                            <select name="zgthjh"/>
                        </InputGroup>
                    </div>
                </div>
                </Form>
            </div>
        </div>

        <div className='row mx-auto'>
            <div className='col col-lg-12 text-left tara'>
              <Title 
              texte="Niveau en anglais*" 
              poid_font="700"
              taille='53px'/>
              <p>
              Les choix de réponses sont basés sur le Cadre européen commun des références pour 
              les langues (CECRL).
              </p>
            </div>
        </div>

    





    <div className='row mx-auto mb-5'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>A1</strong></CardTitle>
                    <CardTitle tag="h3"><strong>Débutant</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre et d’utiliser des expressions simples pour 
                        répondre à des besoins concrets de la vie quotidienne</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>A2</strong></CardTitle>
                    <CardTitle tag="h3"><strong>Débutant</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre et d’utiliser des expressions simples pour 
                        répondre à des besoins concrets de la vie quotidienne</CardText>
            </Card>
        </div>
    </div>

        <div className='row mx-auto my-auto'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>B1</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Intermédiaire</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre les points essentiels quand un langage clair 
                    et standard est utilisé et qu’il s’agit de sujets familiers et d’intérêt comme le travail et 
                    les loisirs. Capacité à également s’exprimer sur ces mêmes sujets</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>B2</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Intermédiaire</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre les points essentiels quand un langage clair 
                    et standard est utilisé et qu’il s’agit de sujets familiers et d’intérêt comme le travail et 
                    les loisirs. Capacité à également s’exprimer sur ces mêmes sujets</CardText>
            </Card>
        </div>
    </div>

    <div className='row mx-auto my-6'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5'><strong>C1</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Avancé</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre des textes longs et ses subtilités, de s’exprimer de façon efficace et bien structurée sur des sujets complexes, et ce, avec fluidité</CardText>
                </Card>
        </div>

        <div className='col col-lg-6'>
            <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="text-center">
                    <CardTitle tag="h1" color="#da1b66" className='mt-5' ><strong>C2</strong></CardTitle>
                    <CardTitle tag="h3" className='mt-5'><strong>Avancé</strong></CardTitle>
                    <CardText className="mb-5 mt-5">capable de comprendre des textes longs et ses subtilités, de s’exprimer de façon 
                    efficace et bien structurée sur des sujets complexes, et ce, avec fluidité</CardText>
            </Card>
        </div>
    </div>

    <div className='row mx-auto py-6'>
            <div className='col col-lg-6'>
                <Card body inverse style={{ backgroundColor: '#b4afaf', borderColor: '#c33fa4' }} className="d-flex justify-content-lg-center">
                    <FaBabyCarriage className=''/>
                    <CardTitle tag="h3" className='mt-5'><strong>Langue maternelle</strong></CardTitle>
                </Card>
        </div>

        <div className='col col-lg-6'>
            
        </div>
    </div>

    <div className='row mx-auto'>
            <div className='col col-lg-12 text-left tara'>
              <Title 
              texte="Tests de langue anglaise effectués (le cas échéant)" 
              poid_font="700"
              taille='53px'/>

<div className='row mx-auto'>
            <div className='col col-lg-6'>
             <Form>
                <InputGroup label="Selectionnez un teste de langue" id="languetest"/>
                <InputGroup label="Selectionnez un teste de langue" id="languetest"/>
                </Form>
            </div>

            <div className='col col-lg-6'>
            <Form>
                <div className="row d-inline-flex">
                    <div className="col col-lg-6">
                        <InputGroup type="select" label="Année d'obtention*" className='col col-lg-3'>
                            <select name="qsdfgh"/>
                            <select name="qsdhb"/>
                            <select name="zgthjh"/>
                        </InputGroup>
                    </div>
                    <div className="col col-lg-6">
                        <InputGroup label="Note obtenue" id="note" />
                    </div>
                </div>

                <div className="row d-inline-flex">
                    <div className="col col-lg-6">
                        <InputGroup type="select" label="Année d'obtention*" className='col col-lg-3'>
                            <select name="qsdfgh"/>
                            <select name="qsdhb"/>
                            <select name="zgthjh"/>
                        </InputGroup>
                    </div>

                    <div className="col col-lg-6">
                        <InputGroup type="select" label="Année d'obtention*" className='col col-lg-3'>
                            <select name="qsdfgh"/>
                            <select name="qsdhb"/>
                            <select name="zgthjh"/>
                        </InputGroup>
                    </div>
                </div>
                </Form>
            </div>
        </div>

            <div className="col-lg-12 d-flex justify-content-between">
                <Button color="pink" className='col col-lg-2 d-flex justify-content-between'>Retour</Button>
                <Button color="secondary" className='col col-lg-2'>Suivant <AiOutlineArrowRight/></Button>
            </div>
            </div>
        </div>

</div>
</RangerMainMenuStc>
  )
}

export default RangerMainMenu;