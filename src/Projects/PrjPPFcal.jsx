import React, {useState} from "react";

export default function PPFCalculator(){
    const [investment,setinvestment]=useState('500')
    const [time,settime]=useState('15')
    const [rate,setrate]=useState('7.1')
    const [TotInt,setTotInt]=useState('0')
    const [TotAmt,setTotAmt]=useState('0')

    const interest=rate/100
    const totalinvestment= investment*time 

    function calculatePPF(){
        const maturity= investment*(((Math.pow((1+interest),time)-1)/interest)*(1+interest)); 
        setTotAmt(maturity.toFixed(2));
        const Totintrst= maturity-totalinvestment;
        setTotInt(Totintrst.toFixed(2)); 
        
    }
    function reset(){
        setinvestment('500')
        settime('15')
        setrate('7.1')
        setTotInt('0')
        setTotAmt('0')
    } 
    return(
        <div className="body">
          <section>
            <h1>PPF Calculator</h1>
            <div>
            <label htmlFor="investment">Yearly investment</label><span>{investment}</span>
            </div>
            <div>
            <input type="range" id="investment" name="investment" min="500" max="150000"  step="500" placeholder="enter investment amount" required value={investment} onChange={(event)=>setinvestment(event.target.value)} />
            </div>
            <div>
            <label htmlFor="time">Time Period(in years)</label><span>{time}</span>
            </div>
            <div>
            <input type="range" id="time" name="time" min="15" max="50" step="1"  placeholder="enter years" required value={time} onChange={(event)=>settime(event.target.value)} />
            </div>
            <div>
            <label htmlFor="rate">Rate of interest</label><span>{rate}</span>
            </div>
            <div>
            <input type="range" id="rate" name="rate" min="1" max="15" step="1" placeholder="enter interest rate" disabled value={rate} onChange={(event)=>setrate
                (event.target.value)} />
            </div>
            <div>
                <button onClick={calculatePPF}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
          </section>
          <section className="output">
            <h3>Results</h3>
            <p>Invested amount</p>
            <p className="res"> ₹{totalinvestment} </p>
            <p>Interest earned</p>
            <p className="res"> ₹{TotInt} </p>
            <p>Maturity value</p>
            <p className="res"> ₹{TotAmt} </p>
          </section> 
          
        </div>
    )
}
