import * as React from "react"

const Merchandise = (props) => (
    <div className="merch-box">
        <img src={props.Img}/>
        <button>{props.Name  + " " +  `$${props.Cost}`}</button>
    </div>

)

export default Merchandise