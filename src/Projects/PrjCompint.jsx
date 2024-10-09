import React, {useState} from "react";

export default function Compdinterest(){
    const [principle,setprinciple]=useState('1000')
    const [Interest,setInterest]=useState('1')
    const [Years,setYears]=useState('1')
    const [Compint,setCompint]=useState('0')
    const [TotAmount,setTotAmount]=useState('0')

    const principleamnt = principle*1
    
    function calCompcal(){
        const Compint= principle*(1+Interest/100)**Years
        setCompint(Compint.toFixed(2));
        const Totamt = principleamnt+Compint;
        setTotAmount(Totamt.toFixed(2));
    }
    function reset(){
        setprinciple('1000')
        setInterest('1')
        setYears('1')
        setCompint('0')
        setTotAmount('0')
    } 
    return(
        <div className="body">
          <section>
            <h1>Compound <br /> Interest Calculator</h1>
            <div>
            <label htmlFor="Principle">Principle amount ($) </label><span>{principle}</span>
            </div>
            <div>
            <input  type="range" id="Principle" name="Principle" min="1000" max="10000000"  step="50000" placeholder="enter principle amount" required value={principle} onChange={(event)=>setprinciple(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Interest">Interest Rate (p.a) (%)</label><span>{Interest}</span>
            </div>
            <div>
            <input type="range" id="Interest" name="Interest" min="1" max="50" step="0.1" placeholder="enter interest rate" required value={Interest} onChange={(event)=>setInterest(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Years">Time period</label><span>{Years}</span>
            </div>
            <div>
            <input type="range" id="Years" name="Years" min="1" max="30" step="1" placeholder="enter total years" required value={Years} onChange={(event)=>setYears(event.target.value)} />
            </div>
            <div>
                <button onClick={calCompcal}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
          </section>
          <section className="output">
            <h3>Result</h3>
            <p>Principle Amount</p>
            <p className="res">₹{principle}</p>
            <p>Total interest</p>
            <p className="res">₹{Compint}</p>
            <p>Total amount</p>
            <p className="res">₹{TotAmount}</p>
          </section> 
        </div>
    )
}
















/* 
import React, { useState } from 'react';



function SimpleInterestCalculator() {

  const [principalAmount, setPrincipalAmount] = useState(0);

  const [interestRate, setInterestRate] = useState(0);

  const [timePeriod, setTimePeriod] = useState(0);

  const [simpleInterest, setSimpleInterest] = useState(0);



  const calculateSimpleInterest = () => {

    const interest = (principalAmount * interestRate * timePeriod) / 100;

    setSimpleInterest(interest.toFixed(2));

  };



  return (

    <div>

      <h1>Simple Interest Calculator</h1>

      <div>

        <label>Principal Amount (₹)</label>

        <input

          type="number"

          value={principalAmount}

          onChange={(e) => setPrincipalAmount(e.target.value)}

        />

      </div>

      <div>

        <label>Interest Rate (%)</label>

        <input

          type="number"

          value={interestRate}

          onChange={(e) => setInterestRate(e.target.value)}

        />

      </div>

      <div>

        <label>Time Period (years)</label>

        <input

          type="number"

          value={timePeriod}

          onChange={(e) => setTimePeriod(e.target.value)}

        />

      </div>

      <button onClick={calculateSimpleInterest}>Calculate</button>

      <div>

        <h2>Simple Interest: ₹{simpleInterest}</h2>

      </div>

    </div>

  );

}



export default SimpleInterestCalculator; */