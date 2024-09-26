import React from 'react';
import { BrowserRouter as Router, Routes,Route,  Link, useLocation } from 'react-router-dom';
import Home from './screens/home';
// import Example_1 from './screens/Example_1';
// import Example_2 from './screens/Example_2';
// import Example_3 from './screens/Example_3';
import Hooks from './screens/hooks/hooks';
import Economy from './screens/economy/economy';


const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
       <Router>
      <nav className='px-24'>
        <ul className="flex items-center space-x-6">
        <h1 className="text-3xl text-red-500">Pages:</h1>
        <div className='text-lime-600 flex flex-row space-x-9 px-10'>
        <li><Link to="/"> Home</Link> </li>
        <li> <Link to="/hooks"> Hooks</Link> </li>
        <li> <Link to="/economy"> Economy</Link> </li>
        </div>


        </ul>
      </nav>
      <hr className="border-t-2 border-gray-300 my-4" />

      <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/hooks" element={<Hooks />} />
      <Route path="/economy" element={<Economy />} />

       
      </Routes>
    </Router>
    </div>
   
    
  );
};

export default App;
