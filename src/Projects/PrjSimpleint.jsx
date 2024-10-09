import React, {useState} from "react";

export default function Simplinterest(){
    const [principle,setprinciple]=useState('1000')
    const [Interest,setInterest]=useState('1')
    const [Years,setYears]=useState('1')
    const [simpleint,setsimpleint]=useState('0')
    const [TotAmount,setTotAmount]=useState('0')


    const principleamnt = principle*1

    function calsimplecal(){
        const Simpint=(principle*Interest*Years)/100;
        setsimpleint(Simpint.toFixed(2));
        const TotAmt = principleamnt+Simpint;
        setTotAmount(parseFloat(TotAmt).toFixed(2))
    };
    function reset(){
        setprinciple('1000')
        setInterest('1')
        setYears('1')
        setsimpleint('0')
        setTotAmount('0')
    }    
    
    return(
        <div className="body">
        <section>
            <h1>Simple <br /> Interest Calculator</h1>
            <div>
            <label htmlFor="Principle">Principle Amount (₹) </label><span>{principle}</span>
            </div>
            <div>
            <input type="range" id="Principle" name="Principle" min="1000" max="10000000"  step="1000" placeholder="enter investment amount" required value={principle} onChange={(event)=>setprinciple(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Interest">Annual Interest Rate (%) </label><span>{Interest}</span>
            </div>
            <div>
            <input type="range" id="Interest" name="Interest" min="1" max="50" step="0.1" placeholder="enter interest rate" required value={Interest} onChange={(event)=>setInterest(event.target.value)} />
            </div>
            <div>
            <label htmlFor="Years">Number of Years </label><span>{Years}</span>
            </div>
            <div>
            <input type="range" id="Years" name="Years" min="1" max="30" step="1" placeholder="enter total years" required value={Years} onChange={(event)=>setYears(event.target.value)} />
            </div>
            <div>
                <button onClick={calsimplecal}>Calculate</button>
                <button onClick={reset}>Reset</button>
            </div>
        </section>
        <section className="output">
            <h3>Result</h3>
            <p>Principle Amount</p>
            <p className="res"> ₹{principle}</p>
            <p>Total Interest</p>
            <p className="res"> ₹{simpleint}</p>
            <p>Total Amount</p>
            <p className="res"> ₹{TotAmount}</p>
        </section>
        </div>
    )
}

