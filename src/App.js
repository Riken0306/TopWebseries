import React from 'react';
import Card from './Card';
import Sdata from "./Sdata"


function App() {
  return (
    <>
      <h1 className="heading">Top {Sdata.length} WebSeries to Watch</h1>
      <div className="cards">
      {Sdata.map((val)=>{
            return(
            <Card 
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
          );
      })}  

      </div>
    </>
  );
}

export default App;