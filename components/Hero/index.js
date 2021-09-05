import React from "react";
//import HeroScroll from "../HeroScroll";
import Wrapper from "../Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import BackgroundImage from "../BackgroundImage";
import HeroStc from "./Hero.stc";
import BgImage from "../BackgroundImage";
import Title from "../shared/Title";
import { CgScrollV } from "react-icons/cg";

const Hero = () => {
  return (
    <HeroStc >
      <div className="row heroRow">
        <div className="col-lg-6 align-self-center">
          <div className=" w-75 float-right">
            <Title texte={
                <>Le portail des étudiants vers <br/>Le Maroc</>
            }/>
            <p className="py-0 py-md-3">
            Pour tout savoir sur les études, la vie, 
            le travail et les soins médicaux dans le Royaume
            </p>
            <button type="button" class="btn btn-default my-0 my-md-5 defilerBtn"><CgScrollV />Défiler</button>
          </div>
        </div>
        <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block  ">
          <BgImage />
        </div>
      </div>
    </HeroStc>
  );
};

export default Hero;