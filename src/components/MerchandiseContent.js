import * as React from "react"
import Merchandise from "./Merchandise.js"
import Shirt from '../images/TCCtshirt.png'
import Sticker from '../images/TCCsticker.jpg'

const ThacherMerchandise = [
    {Name: "Shirt", Cost: "25.00", Img: Shirt},
]

const MerchandiseContent = (props) => (
    <div className="two-col-grid-wrap">
        {ThacherMerchandise.map((merch) => {
          return  <Merchandise Name={merch.Name} Cost={merch.Cost} Img={merch.Img} />
        })}
        <div className="merch-box">
            <img src={Sticker}/>
            <p style={{'text-align': 'center',}} >You will also get a cool TCC sticker with your donation!</p>
        </div>  
    </div>

)

export default MerchandiseContent