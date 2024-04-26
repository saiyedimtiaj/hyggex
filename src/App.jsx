import React from 'react';
import { NavBar6 } from './Components/Navbar';
import MainSection from './Components/MainSection';
import Tabs from './Components/Tabs';
import Faq from './Components/Faq';

const App = () => {
  return (
    <div className='container mx-auto px-3'>
      <NavBar6/>
      <MainSection/>
      <Tabs/>
      <Faq/>
    </div>
  );
};

export default App;