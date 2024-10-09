import React, {useState} from "react";

export default function SIPcal(){
    const [MonInv,setMonInv]=useState('500')
    const [Rate,setRate]=useState('1')
    const [InvPer,setInvPer]=useState('1')
    const [SIP,setSIP]=useState('0')
    const [estreturn,setestreturn]=useState('0')
    
    const RatIntst=Rate/12
    const RatInt=RatIntst/100

    const loanyears=InvPer*12
    const Totinv = MonInv*loanyears
    
    
    function calculateSIP(){
        const SIPinv=MonInv*((Math.pow((1+RatInt),loanyears)-1) /RatInt)*(1+RatInt)
        setSIP(SIPinv.toFixed(2));
        const estireturn = SIPinv-Totinv;
        setestreturn(estireturn.toFixed(2))
      };
    
    function reset(){
      setMonInv('500')
      setRate('1')
      setInvPer('1')
      setSIP('0')
      setestreturn('0')
    } 
    return(
        <div className="body">
          <section>
            <h1>SIP Calculator</h1>
            <div>
            <label htmlFor="MonInv">Monthly investment</label><span>{MonInv}</span>
            </div>
            <div>
            <input type="range" id="MonInv" name="MonInv" min="500" max="1000000"  step="500" placeholder="investment amount" required value={MonInv} onChange={(event)=>setMonInv(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Rate">Expected return rate (per.ann)</label><span>{Rate}</span>
            </div>
            <div>
            <input type="range" id="Rate" name="Rate" min="1" max="30"  step="0.1" placeholder="enter return rate" required value={Rate} onChange={(event)=>setRate(event.target.value)} />
            </div>
            <div>
            <label htmlFor="InvPer">Investment period</label><span>{InvPer}</span>
            </div>
            <div>
            <input type="range" id="InvPer" name="InvPer" min="1" max="40" step="1" placeholder="investment years" required value={InvPer} onChange={(event)=>setInvPer(event.target.value)} />
            </div>
            <div>
                <button onClick={calculateSIP}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
          </section>
          <section className="output">
            <h3>Result</h3>
            <p>Invested amount</p>
            <p className="res"> ₹{Totinv}</p>
            <p>Estimate returns</p>
            <p className="res"> ₹{estreturn} </p>
            <p>Total value</p>
            <p className="res"> ₹{SIP}</p>
          </section> 
          
        </div>
    )
}
