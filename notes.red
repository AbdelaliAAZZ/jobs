import React from "react";

const App = () => {

  const name = 'John';
  const today = new Date().toDateString();
  const names = ['ali','adam','taha']; 
  const isOnline = true;
  
  return (
    <>
  
  <div className="text-5xl">App {name} from {today}</div>
   <ul>
    {names.map((name,index)=> (<li className="text-2xl" key={index} style={{color : 'skyblue',fontFamily: 'monospace' }}> {name}</li>))}
   </ul>
   {/* the && in this exemple work like this if the isOnline true run the next line if not don't do anything */}
    {isOnline && <h1>You are online welcom</h1> }
    </>
  )
}

export default App;