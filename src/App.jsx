// App.js

import React from 'react';
import Tabs from './components/Tabs';
import './App.css'

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: <div>This is tab 1 content</div> },
    { title: 'Tab 2', content: <div>This is tab 2 content</div> },
    { title: 'Tab 3', content: <div>This is tab 3 content</div> },
  ];

  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
