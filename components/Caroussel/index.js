import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import CarousselStc from "./Caroussel.stc";

const Caroussel=()=>{
    return(
        <CarousselStc>
            <Flicking
                align="prev"
                circular={true}
                onMoveEnd={e => {
                    console.log(e);
                }}> 
                <div className="panel">1</div>
                <div className="panel">2</div>
                <div className="panel">3</div>
                <div className="panel">4</div>
                <div className="panel">5</div>
                <div className="panel">6</div>
            </Flicking>
        </CarousselStc>
    )
}

export default Caroussel;