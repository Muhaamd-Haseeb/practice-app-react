import React from 'react';
import logo from './logo.svg';
function Hi(){
 return(
   <div>
     <strong>
       Hello  World
     </strong>
     <h1>Muhammad Ahmad</h1>
     <ul>
       <li>Muhammad Abubakar</li>
       <li>Muhammad                Umer</li>
       <li>Muhammad Usman</li>
       <li>Muhammad Ali</li>
       {5+10}
       <App  name="haseeb"age="12"/>
       <MediaCard p={"Hello everyone"} h1={"now passing h1"} sorce={logo}/>


     </ul>
   </div>
 );
}
let App=({name,age})=>(
     <div>
       <h1>{name}</h1>
        <h1>{age}</h1> 

     </div>
  );

  let MediaCard=({p,h1,sorce})=>(
      <div>
        <p>{p}</p>
  <h1>{h1}</h1>
  <img src={sorce} alt="Haseeb"/>
      </div>
  )
  

export default Hi;