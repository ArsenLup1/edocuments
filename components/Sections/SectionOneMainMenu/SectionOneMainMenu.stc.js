import Styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const RangerMainMenuStcStc = Styled.section`

    font-weight: 400;
    font-family: radnika;
    font-size: 2.125rem;
    margin-bottom: .25rem;
    text-align: justify;
  
  .tara {
    margin-bottom: 3rem;
}

.card {
    background-color: rgba(255,255,255,var(--bg-opacity));
    --border-opacity: 1;
    border-color: #fff;
    border-color: rgba(255,255,255,var(--border-opacity));
    border-width: 2px;
    border-radius: .5rem;
    overflow: hidden;
    box-shadow: 0 0 20px 2px rgba(18, 7, 0, 0.29);
    transition: background-color .2s,border-color .2s;
    margin-bottom: 3rem;
    height: auto;

}
.card:hover{
  border-color: #000;
  cursor: pointer;

}
    
    /*padding-left: 5rem;
    padding-right: 5rem;*/
  



`;
export default RangerMainMenuStcStc;