import React from 'react';
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";

const MonImage=(props)=>{
  if(props.largeur && props.hauteur){
      return (
          <Image
          src={props.chemin}
          alt={props.alt}
          width={props.largeur}
          height={props.hauteur}
        />
      )
  }
  else
  {
    return (
      <Image
      src={props.chemin}
      alt={props.alt}
      layout="fill"
    />
  )
  }
}

export default MonImage;