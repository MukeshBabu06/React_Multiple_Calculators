import React from 'react';
import { Routes, Route } from "react-router-dom";

//Projects Folder
import Compinterest from './Projects/PrjCompint.jsx';
import Homeloancal from './Projects/PrjHomeLoan.jsx';
import SIPcal from './Projects/PrjSipcal.jsx';
import PostMiscal from './Projects/PrjMiscal.jsx'
import EMIcalculator from './Projects/PrjEMICal.jsx';
import PPFCalculator from './Projects/PrjPPFcal.jsx';
import Simpleinterest from './Projects/PrjSimpleint.jsx';
import Myhome from './Projects/Home.jsx';
import Nopage from './Projects/Nopage.jsx';

function App() {
  return (
     <div className="App">
        <Routes>
        <Route path="/" element={<Myhome />}>
          <Route path="/PrjSimpleint" element={<Simpleinterest />} />
          <Route path="/PrjCompint" element={<Compinterest />} />
          <Route path="/PrjHomeLoan" element={<Homeloancal />} />
          <Route path="/PrjEMICal" element={<EMIcalculator />} />
          <Route path="/PrjMiscal" element={<PostMiscal />} />
          <Route path="/PrjPPFcal" element={<PPFCalculator />} />
          <Route path="/PrjSipcal" element={<SIPcal />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
