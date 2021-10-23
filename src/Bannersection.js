import React from 'react'
import Card from './Card'
import "./banner.css"
const img="./White_Relax-crop-c0-5__0-5-450x450.png"
const imag1="./Black-crop-c0-5__0-5-450x450.png"
const imag3="./Milton_Daybed_AW_Blue_LP_fF8pxgI-crop-c0-5__0-5-450x450-70.jpg"
function Bannersection() {
    return (
        <div className="bnr">
            {/* <h2 style={{color:"red"}}>This Is the banner section </h2> */}
             <img src="./banner1.png" alt="" style={{width:"100%",marginBottom:"30px"}} />
             <h5 className="puptext">Most Popular</h5>
             <div className="row">
             <Card imag={imag1} />
             <Card margin={true} imag={img}/>
             <Card imag={imag3}/>
             </div>
        </div>
    )
}

export default Bannersection
