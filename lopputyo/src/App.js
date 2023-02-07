import React, { useEffect, useState } from 'react';
import Title from './Components/Title';
import AddQuote from './Components/AddQuote';



function App() {

  return (
    <div>
      <Title appname="Kanye oneliners" />
      <AddQuote />
    </div>

  );
}

export default App;
