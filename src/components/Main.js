import react, { useState } from 'react';
import Card from './Card';
import axios from 'axios';

const Main=()=>{
    const [search,setsearch]=useState("new");
    const [book,setbook]=useState([]);
         
    const searchBook=(e)=>{
        if(e.key==="Enter")
        {
            axios(`https://api.itbook.store/1.0/search/${search}`).then(res=>setbook(res.data.books));
    
           
        }
       
    }
    return (
        <div>
            <div className="header">
                <div className="row1">
                   <h1>
                    A room without books is like <br>
                    
                    </br>
                    a body without soul.
                   </h1>
                </div>
               
                <div className="row2">
                 <h1>Find your book</h1>
                 <div className="serch">
                    <input type='text' placeholder='Enter the book name' value={search} onChange={(e)=>setsearch(e.target.value)} onKeyDown={searchBook}/>
                    <button>
                        search it
                    </button>
                 </div>
                 <img src="https://th.bing.com/th/id/OIP.4QY1_z2gNBFEvf3bv-BnvgAAAA?w=156&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
                </div>
            </div>
            <div className="container">
                {
                  
                    <Card data={book}/>
                }
              
              
               
            </div>

        </div>
    )
}
export default Main;