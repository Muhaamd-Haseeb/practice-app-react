import React, { useState } from 'react';
import './light.css';



function RoomLight(){
 let [currentNumber,setNumber]=useState(0);
 let [isLight , setLight]=useState(!true);
 let light;
 if(isLight){
     light="Light";
 }
 else{
  light="Dark";   
 }
    return(
        <div className={`Room ${light} `}>
            <div className="wholealign">
        <p >Appearance of Page {light} </p>
            <button onClick={()=>setLight(!isLight)}>Change Color</button>
            
    <p>Temprature is {light?"22":"56"}<sup>c</sup></p>
   
           <h3>IF YOU ARE FREE YOU CAN PLAY THE GAME OF NUMBERS.</h3>
    <h1>Number is {currentNumber}</h1>
    <button onClick={()=>setNumber(++currentNumber)}>Increase Number</button>
    <button className='numberbdecrease' onClick={()=>setNumber(--currentNumber)}>Decrease Number</button>

             
   </div>
    </div>

    );

}
export default RoomLight;