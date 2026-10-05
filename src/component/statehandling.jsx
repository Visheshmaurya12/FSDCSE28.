
import React, { useState } from 'react'

function StateHandling(){
    const[count,setCount] = useState(100);
    const[red,setRed] = useState(255);
    const[green,setGreen] = useState(0);
    const[blue,setBlue] = useState(0);
    const[catHeight,setCatHeight] = useState(100);
    const[catWidth,setCatWidth] = useState(100);
    const[rotate, setRotate]= useState(0);

    function changeBGColor(){
        setRed(Math.floor(Math.random()*255));
        setGreen(Math.floor(Math.random()*255));
        setBlue(Math.floor(Math.random()*255));
    }
    function enhanceHeight(){
        setCatHeight(catHeight + 10);
    }
    function enhanceWidth(){
        setCatWidth(catWidth +10);
    }
    function decreaseHeight(){
        setCatHeight(catHeight - 10);
    }
    function ImageRotate(){
        setRotate(rotate +90);
    }

    return(
        <>
            <h2>Change Background Color</h2>
            <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`,border: '2px solid red',
             width: '100px', height: '100px' }}>

            <img src="src/assets/cute-cat-silhouette-vector-png-nfk77-71tuiejlvoq1xfdn.png" height={catHeight} width={catWidth} style={{ transform: `rotate(${rotate}deg)` }} />
            </div>
            
        <button onClick={changeBGColor}>Change Color</button>
            <button onClick={enhanceHeight}>Enhance Height</button>
            <button onClick={enhanceWidth}>Enhance Width</button>
            <button onClick={ImageRotate}>Rotate Image</button> 
             <button onClick={decreaseHeight}>Decreae height</button>

               

        </>
    );
}

export default StateHandling;