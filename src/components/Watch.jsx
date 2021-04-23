import React from 'react'
import './Watch.css';
 
const Watch = () => {
   
    var liveTimeEle = new Date().toLocaleTimeString();
  
    var time1 = new Date();                                    
    time1 = time1.getHours();
    
    let wish = ' ';
    const colorText = { };
    
    if(time1>=1 && time1<12){
        wish = 'Good Morning';
        colorText.color = "#FFE577";
    }
      else if(time1>=12 && time1<17){
        wish = 'Good Afternoon';
        colorText.color = "#FFFFFF";
      }
     else if(time1>=17 && time1<20){
        wish = 'Good Evening';
        colorText.color = "#e6be8a";
      }
     else{
        wish = 'Good Night';
        colorText.color = "#FFA54C";
     }
    return (
        <div> 
             <div className="container1">
                <div className="containerBody">
                    <h1 style={colorText}>{liveTimeEle}</h1>
                    <h2 className="h2margin">
                        <span style={colorText}>{wish}</span>,
                        <span className="helloText"> Hello Sanny</span>
                    </h2>
                </div>
            </div>
        </div>
    )
  }
   
export default Watch;
