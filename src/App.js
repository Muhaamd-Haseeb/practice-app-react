import React  from 'react';

function App(){
  return(
     <LightHooking />
  );
}
let LightHooking= ()=>{
  const [isLit, setLit] = React.useState(true);
  let ch;
       if(isLit){
         ch=<h1>true</h1>   
       }
       else{
         ch=<h1>
           false
         </h1>
       }
       return(
        <div>
       <h1>the light is {ch}</h1>
       <button onClick={() => setLit(!isLit)} >click</button>
       </div>
       
       );
                 
}

export default App;