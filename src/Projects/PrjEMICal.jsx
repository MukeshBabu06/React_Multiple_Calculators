import React, {useState} from "react";

export default function EMIcalculator(){
    const [Loanamt,setLoanamt]=useState('100000')
    const [Rate,setRate]=useState('1')
    const [Loantent,setLoantent]=useState('1')
    const [LEMI,setLEMI]=useState('0')
    const [Totinterest,setTotinterest]=useState('0')
    const [TotAmount,setTotAmount]=useState('0') 
    
    const RatIntst=Rate/12
    const RatInt=RatIntst/100
    const loanyears=Loantent*12
    const Loanamnt = Loanamt*1
    
    function EMIcal(){
        const homeemi= Loanamt*RatInt*((Math.pow((1+RatInt),loanyears))/((Math.pow((1+RatInt),loanyears)-1)))
        setLEMI(homeemi.toFixed(2));
        const Totint = homeemi*loanyears-Loanamt;
        setTotinterest(Totint.toFixed(2));
        const TotAmt = Loanamnt+Totint;
        setTotAmount(TotAmt.toFixed(2))
      };
    function reset(){
      setLoanamt('100000')
      setRate('1')
      setLoantent('1')
      setLEMI('0')
      setTotinterest('0')
      setTotAmount('0')
    }
    return(
        <div className="body">
          <section>
            <h1>EMI Calculator</h1>
            <div>
            <label htmlFor="Loanamt">Loan amount</label><span>{Loanamt}</span>
            </div>
            <div>
            <input type="range" id="Loanamt" name="Loanamt" min="100000" max="100000000"  step="50000" placeholder="enter amount" required value={Loanamt} onChange={(event)=>setLoanamt(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Rate">Rate of interest (p.a)</label><span>{Rate}</span>
            </div>
            <div>
            <input type="range" id="Rate" name="Rate" min="1" max="30" step="0.1" placeholder="enter interest rate" required value={Rate} onChange={(event)=>setRate(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Loantent">Loan tenture</label><span>{Loantent}</span>
            </div>
            <div>
            <input type="range" id="Loantent" name="Loantent" min="1" max="30" step="1"  placeholder="enter total years" required value={Loantent} onChange={(event)=>setLoantent(event.target.value)} />
            </div>
            <div>
                <button onClick={EMIcal}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
          </section>
          <section className="output">
            <h3>Result</h3>
            <p>Monthly EMI</p>
            <p className="res"> ₹{LEMI} </p>
            <p>Principle amount</p>
            <p className="res"> ₹{Loanamt} </p>
            <p>Total interest</p>
            <p className="res"> ₹{Totinterest} </p>
            <p>Total amount</p>
            <p className="res"> ₹{TotAmount} </p>
          </section> 
          
        </div>
    )
}
