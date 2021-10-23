import React from 'react'
import "./header.css"

function Header() {
    const img ="https://static.cdn.tfora.in/furnoc/furnoc.svg"
    return (
        <div>
            <div className="wrapper">
                <div className="content-parent">
                    <div className="logo" style={{width:"122px",height:"28px"}}>
                        <img src={img} alt=""style={{width:"100%",height:"100%"}} />
                    </div>
                    <div className="search-box">
                        <span className="lense"><img src="./loupe.png" alt="" style={{width:"20px"}} /></span>
                        <input className='inp' type="text"placeholder="Search your most favorite" />
                    </div>
                    <div className="icon-box">
                        <div className="icons">
                          <img className="icon-size" src="heart.png" alt="" />
                          <div className="notification">0</div>  
                        </div>
                        <div className="icons">
                            <img className="icon-size" src="./ring.png" alt="" />
                            <div className="notification">0</div>
                        </div>
                        <div className="icons">
                            <img className="icon-size" src="./shopping-cart.png" alt="" />
                            <div className="notification">0</div>
                        </div>
                        <div className="more-icon">
                        <h5 style={{fontWeight:"400"}} className="more">More</h5>
                        <img  src="./down-arrow.png" alt="" style={{width:"8px",height:"10px",}} />
                        </div>
                        <button className="btn-login">LOGIN</button>
                    </div>
                </div>
            </div>
            <div className="wrapper2">
                <div className="wrap2-content">
                    <ul>
                       <a href=""> <li>Mattresses</li></a>
                        <a href=""><li>Bedroom</li></a>
                        <a href=""><li>Office</li></a>
                       <a href=""> <li>Living</li></a>
                        <a href=""><li>Study</li></a>
                        <a href=""><li>Storage</li></a>
                       <a href=""> <li>Sitout</li></a>
                       <a href=""> <li>Kids Room</li></a>
                       <a href=""> <li>Decor</li></a>
                       <a href=""> <li>Dining</li></a>
                        <a href=""><li>Lighting</li></a>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Header
