import React, { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs'
import Display from './components/Display'

function App() {

  
  const myTabs = [
    {
      label: "Tab 1",
      content: "Some content in Tab 1",
      color: "white",
      backgroundColor: "black",
      callback: function () {
        alert(this.label + " was selected.");
      },
    },
    {
      label: "Tab 2",
      content: "Some content in the second Tab!",
      color: "white",
      backgroundColor: "black",
      callback: function () {
        alert(this.label + " was selected.");
      },
    },
    {
      label: "Tab 3",
      content: "And here is content from tab 3!",
      color: "white",
      backgroundColor: "black",
      callback: function () {
        alert(this.label + " was selected.");
      },
    }
  ]

  const [index, setIndex] = useState(0); // here is where we pass the index to the Tabs??

  return (
    <div className="container">
      <Tabs myTabs={myTabs} index={index} setIndex={setIndex}/> 
      <Display content={myTabs[index].content}/>
    </div>
  );
}

export default App;
