import React, {useState} from "react";

export default function PostMiscal(){
    const [InvAmt,setInvAmt]=useState('1000')
    const [Rate,setRate]=useState('1')
    const [Lckper,setLckper]=useState('5')
    const [Monthincome,setMonthincome]=useState('0')
      
    
    function calculatePOMIS(){
        const Monthlyint=InvAmt*(Rate/100)/12
        setMonthincome(Monthlyint.toFixed(2));
      };
    
    function reset(){
      setInvAmt('1000')
      setRate('1')
      setLckper('5')
      setMonthincome('0')
    } 


    return(
        <div className="body">
          <section>
            <h1>Post Office <br /> MIS Calculator</h1>
            <div>
            <label htmlFor="InvAmt">Investment Amount</label><span>{InvAmt}</span>
            </div>
            <div>
            <input type="range" id="InvAmt" name="InvAmt" min="1000" max="1500000"  step="500" placeholder="investment amount" required value={InvAmt} onChange={(event)=>setInvAmt(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Rate">Interest Rate</label><span>{Rate}</span>
            </div>
            <div>
            <input type="range" id="Rate" name="Rate" min="1" max="12" step="0.1"  placeholder="enter interest rate" required value={Rate} onChange={(event)=>setRate(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Lckper">Lock In Period</label><span>{Lckper}</span>
            </div>
            <div>
            <input type="range" id="Lckper" name="Lckper" min="1" max="15" step="1" disabled placeholder="5 years (default)" value={Lckper} onChange={(event)=>setLckper(event.target.value)} />
            </div>
            <div>
                <button onClick={calculatePOMIS}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
          </section>
          <section className="output">
            <h3>Result</h3>
            <p>Monthly income</p>
            <p className="res"> ₹{Monthincome}</p>
          </section> 
          
        </div>
    )
}
