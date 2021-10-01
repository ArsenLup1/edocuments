import Styled from "styled-components";

const HeroStc=Styled.section`
    .heroRow
    {
        margin:0px !important;
    }

    .float-right
    {
        float:right;
    }

    .defilerBtn {
        position: relative;
        transform-origin: 50% 50%;
        animation: yo-yo 1s infinite alternate;  /* Animation speed and type */
        font-weight: 600;
      }
      
      /* Animation beginning and ending */
      @keyframes yo-yo {
        from {  top: 0 }
        to {  top: 20px }
      }

      .w-75
      {
        @media (max-width: 991px)
        {
            width:100% !important;
        }
    
      }
      
`;
export default HeroStc;