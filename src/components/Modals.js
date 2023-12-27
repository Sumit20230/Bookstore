import react from 'react';
import Main from './Main';
const Modals=({selected,datas})=>{
     if(!selected)
     return null;
    return (
        
        <>
       
       {/* console.log(data); */}
        
        <div className="overlay">
            <div className="overlayinner">
                <button className='close' onClick={()=>{
                    <Main/>
                return;
                }}>close</button>
                <div className="inner-box">
                    <img src={datas.image} alt=""></img>
                    <dic className="info">
                        <h1>
{
    datas.subtitle
}
                        </h1>
                        <h3>

                        </h3>
                        <h4>

                        </h4>
                    </dic>
                </div>
                <h4 className='description'>
                   {datas.title}
                </h4>
            </div>
        </div>
        </>
    )
}
export default Modals;