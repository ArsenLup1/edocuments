import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form, Alert } from "reactstrap";
import FormLoginStc from "./formLogin.stc";
import Title from "../Title";
import InputGroup from "../inputGroup";
import Bouton from "../Bouton";
//import useForm from "../../../lib/useForm";
import PropTypes from 'prop-types'
import { useState } from "react";
//import { withIronSession } from "next-iron-session";
import Image from "next/image";


/*const SIGNIN_MUTATION=gql`
mutation SIGNIN_MUTATION($identifier:String!,$password:String!)
{ 
	login(input:{identifier:$identifier,password:$password})
  { 
  	jwt
    user
    { 
    	id
      username
      email
      role
      { 
        name
      }
    }
  }
}
`;*/


const FormLogin = (props) => {
  const { texte, backgroundcolor, color, icon, errorMessage, onSubmit } = props;

  /*const {inputs,handleChange,clearForm,resetForm}=useForm({
    identifier:"",
    password:"",
  });

  const [login,{data,error,loading}] = useMutation(SIGNIN_MUTATION,{
    variables:inputs
  });

  const { mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true,
  })*/

  const [errorMsg, setErrorMsg] = useState('')

  /*async function handleSubmit(e) {
    e.preventDefault()

    const res=await login();

    if(res.data){

      const body = {
        xPatsaId:res.data.login.user.id,
        xPatsaEmail: res.data.login.user.email,
        xPatsaUsername: res.data.login.user.username,
        xPatsaPassword: inputs.password,
        xPatsaToken:res.data.login.jwt,
        xPatsaRole:res.data.login.user.role.name
        
      }
      
      try {
        await mutateUser(
          fetchJson('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
        )
      } catch (error) {
        console.error('An unexpected error happened:', error)
        setErrorMsg(error.data.message)
      }
    }
  }

  var response="";

  if(loading){
    response=<Image src="/img/load.gif" width="150" height="150" />;
}
if(error){
    response=<Alert color="danger">Utilisateur introuvable</Alert>
}*/

  return (
    <FormLoginStc>
      <Title texte="Se connecter " color="#007bff" />
      <p className="error">Saisire vos informations</p>
      <div id="divResponseFormSaveClient" className="response">
          
      </div>
      <Form>
        <InputGroup name="identifier" myClass="identifier"  typeInput="texte"  textLabel="ADRESSE E-MAIL OU NUMERO DE TELEPHONE" />
        <InputGroup name="password" myClass="password"  typeInput="password" textLabel="MOT DE PASSE" />
        <Row>
          <Col id="left" lg={6}>
            <a href="#elprofa.com">Mot de passe oublié ?</a>
          </Col>
          <Col id="right" lg={6}>
            <Bouton texte="SE CONNECTER" type="submit" on backgroundcolor="#007bff" />
          </Col>
        </Row>
      </Form>
    </FormLoginStc>
  );
};

export default FormLogin;


FormLogin.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func,
}