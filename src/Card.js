import React from 'react'
import "./card.css"

function Card(props) {
    return (
 
            
            <div className="product-card" style={{marginLeft:props.margin? "30px":null,marginRight:props.margin? "30px":null}}>
                <div className="img-parant">
                    <img className="card-img" src={props.imag} alt="" />
                    <img className="hert-icon" src="like.png" alt="" />
                    <div className="off-baner"><h5 style={{paddingRight:"2px",paddingLeft:"6px"}}>10% </h5><span style={{paddingRight:"6px",paddingLeft:"2px"}}>0ff</span></div>
                </div>
                <div className="desc">
                    <a href=""><h4>Black sofa</h4></a>
                    <a href=""><h5 className="drk-blue"><small>By</small>: Niya Timber test</h5></a>
                    <div className="deliv-icon">
                        <img src="./delivery-truck.png" alt="" style={{paddingRight:"6px",height:"14px"}} />
                    <h5 className="delivertxt">Ready to Deliver</h5>
                    </div>
                    <div className="price-div">
                    <h5 className="pricetxt">$2999.00</h5>
                   <div className="btn-div">
                   <button className="crt-btn"><img src="./shopping-cart.png" alt="" style={{width:"18px"}} /></button>
                   </div>
                    </div>
                </div>
               
            </div>
        
    )
}

export default Card
