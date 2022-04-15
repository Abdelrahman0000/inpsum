import React, { useState } from "react";
import data from './data'


function App() {
const [count,setcount]=useState(0)
const [text , setText]=useState([])
const handelsubmet=(e)=>{
e.preventDefault();
let amount=parseInt(count)
if(amount<=0){
  amount=1;
}
if(amount>8){
  amount=8;
}
setText(data.slice(0,amount))

}

  return (
   <section className="section-center">
     <h3>tired from boring inpusm?</h3>
<form className="lorem-form" onSubmit={handelsubmet}>
<label htmlFor="amount">
  paragraphs:
</label>
<input type='number' id="amount" name="amount" value={count} onChange={(e)=>setcount(e.target.value)} />
<button className="btn" type="submet" >generate</button>
</form>
<article className="lorem-text">
  {text.map((item,index)=>
  {
   return( <p key={index}>{item}</p>)
})}
</article>
   </section>
  );
}

export default App;
