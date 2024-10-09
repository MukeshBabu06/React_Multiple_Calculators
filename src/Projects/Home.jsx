import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Prj.css'

export default function Myhome (){

    return(
        <main>
            <article>
                <h1>Calculators</h1>
                <div><Link className="linkstyle" to="/PrjSimpleint">Simple Interest Calculator</Link></div>
                <div><Link className="linkstyle" to="/PrjCompint">Compound Interest Calculator</Link></div>
                <div><Link className="linkstyle" to="/PrjHomeLoan">Home loan EMI Calculator</Link></div>
                <div><Link className="linkstyle" to="/PrjEMICal">EMI Calculator</Link></div>
                <div><Link className="linkstyle" to="/PrjMiscal">Post Office Mis Calculator</Link></div>
                <div><Link className="linkstyle" to="/PrjPPFcal">PPF Calculator</Link></div>
                <div><Link className="linkstyle" to="/PrjSipcal">SIP Calculator</Link></div>
            </article>
            <Outlet/>
        </main>
    )
}
