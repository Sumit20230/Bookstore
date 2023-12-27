import react, { useState } from "react";
import Modals from "./Modals";
const Card=({data})=>{
  const [selected,setSelected]=useState(false);
  const [datas,setData]=useState([]);
return (
    <>
   {
   
    data.map((item)=> <>
        <div className="card" onClick={(e)=>{setData(item);setSelected(true);}}>
        
        <img src={item.image}>

        </img>
        <div className="bottom">
            <h3 className="title">{item.title}</h3>
            <p className="amount">{item.price}</p>
        </div>
   
    </div>

    </>)
        
   }
{
    <Modals selected={selected} datas={datas}/>
}
    </>
)
}
export default Card;