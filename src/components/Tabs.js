import React from 'react';

const Tabs = (props) => {
    return (
    //   <div style={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
      <div className="d-flex mt-5">
        {props.myTabs.map((tab, i) => {
          const labels = {
            border: "1px solid gray",
            padding: "5px 30px",
          };
  
          if (i === props.index) { 
            // if the map index (at i) is the same as the props.index
            // then we can set the property of the tab
            labels.backgroundColor = tab.backgroundColor;
            labels.color = tab.color;
            // @keyframe in App.css, the app-logo-spin already exists for the react thing
            labels.animation = "wobble .2s 2";
            // labels.animation = "App-logo-spin .1s 5"
          }
  
          return (
            <h3 key={i} style={labels}
              onClick={ () => {
                  props.myTabs[i].callback();
                  props.setIndex(i)}
                }
                  > {tab.label}
            </h3>
          );
        })}
      </div>
    );
  };

export default Tabs;