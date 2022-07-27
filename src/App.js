import './App.css';
import {useEffect, useState} from 'react';
import Particle from "react-particles-js";
import particlesConfig from "./assets/particlesConfig.json";
const App = ()=> {
  // const [selectedFile, setSelectedFile] = useState('');
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [coordsFinal, setCoordsFinal] = useState({x: 0, y: 0});
  const [coordsFinal2, setCoordsFinal2] = useState({x: 0, y: 0});

  const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0});
  const [imageLink, setImageLink] = useState('');
  const [size, setSize] = useState('');
  const [html, sethtml] = useState('');
  const [i, setindex] = useState(0);
  const [css, setCss] = useState('');
  const [font, setFont] = useState('');
  const [fsize, setFsize] = useState('');
  const [color, setcolor] = useState('');
  const [fsize2, setFsize2] = useState('');
  const [color2, setcolor2] = useState('');

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };
  const handleMouseMovechoice = event => {
   
   i===0?setindex(1):setindex(0)
    console.log(i);
    if(i===0){
      setCoordsFinal({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop,
      });
    }else{
      setCoordsFinal2({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop,
      });
    }
    
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageLink(URL.createObjectURL(event.target.files[0]));
      
    }
   }
  const onwidthChange = (event) => {
    console.error(event.target.value)
    setSize({...size,width:event.target.value + 'px'});
      
    
   }
   
  const onheigthChange = (event) => {
    console.log(size)
    setSize({...size,height:event.target.value + 'px'});

   }
  const generate = (event) => {
    setImageLink(null)

    console.log(size)
    sethtml(
      `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="./style.css">
       <title>Document</title>
   </head>
   <body>
   
       <div class="image">
   
           <img class="image144" src="https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
     
           <p class="text1">Text you want to display over the image</p>
           <p class="text2">Text you want to display over the image2</p>
     
     </div>
   </body>
   </html>`)


   setCss(
    `
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Sans+Pro:wght@600&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap');
    .image { position: relative; 
      width: 100%;
   }
   .image144{
    width: ${size.width}; /* for IE 6 */
    height: ${size.height}; /* for IE 6 */
   }
   
   
   .text1 { 
      position: absolute; 
      top: ${coordsFinal.y-20}px;
      left: ${coordsFinal.x}px; 
      width: 100%;
      color:${color};
      font-family:${font};
      font-size:${fsize}px;

   }
   .text2 { 
      position: absolute; 
      top: ${coordsFinal2.y-20}px;
      left: ${coordsFinal2.x}px; 
      width: 100%;
      color:${color2};
      font-family:${font};
      font-size:${fsize2}px;
   }`)

   }
   
  const change = (event) => {
    
  }
  const onFontChange = (event) => {
    console.log(event.target.value)
    setFont(event.target.value);
  }
  const onsizeChange = (event) => {
    console.log(event.target.value)
    setFsize(event.target.value);
  }
  const onColorChange = (event) => {
    console.log(event.target.value)
    setcolor(event.target.value);
  }
  const onsizeChange2 = (event) => {
    console.log(event.target.value)
    setFsize2(event.target.value);
  }
  const onColorChange2 = (event) => {
    console.log(event.target.value)
    setcolor2(event.target.value);
  }
 

  return (
    <>
    <Particle  params={particlesConfig} className="App-particles__container" />

    <div className="App">

      <p className="title">get text coordinates</p>
     
     {(imageLink && size.width && size.height) && <img alt='fff' onClick={handleMouseMovechoice}
        onMouseMove={handleMouseMove} style={{width:size.width,height:size.height}}
      id="target" 
      src={imageLink}/>} 

      
      <form>
<div className="container">
<div className="row">
<div className="col-6 areaQuery"><p>width</p>
      <input type="text"  style={{width:'100%',borderRadius:'10px'}}
      onChange={onwidthChange} /></div>
  <div className="col-6 areaQuery" > <p>height</p>
      <input type="text" style={{width:'100%',borderRadius:'10px'}}
      onChange={onheigthChange} /></div>
</div>

<div className="row">
<div className="areaQuery" > 
  <p>choose your file</p>
      <input type="file" 
      onChange={onImageChange} 
      className="filetype " 
      id="group_image"/>
</div>

</div>

<div className="row">
<div className="areaQuery" >
  <div className='container'>
  <div className="row">
  <div className="col-6">
  <p>color</p>
<input type="text"  style={{width:'100%',borderRadius:'10px'}}
      onChange={onColorChange} />
  </div>
  <div className="col-6">
  <p>color2</p>
<input type="text"  style={{width:'100%',borderRadius:'10px'}}
      onChange={onColorChange2} />
  </div>
  </div>
  

  </div>
  <div className='container'>
  <div className="row">
  <div className="col-6">
  <p>size (px)</p>
<input type="text"  style={{width:'100%',borderRadius:'10px'}}
      onChange={onsizeChange} />
  </div>
  <div className="col-6">
  <p>size 2 (px)</p>
<input type="text"  style={{width:'100%',borderRadius:'10px'}}
      onChange={onsizeChange2} />
  </div>
  </div>
  </div>
  <div className="col-sm">
  <p>Font</p>
  <select class="form-select" aria-label="Default select example" onChange={onFontChange}>
  
  <option value="sans-serif">sans-serif</option>
  <option value="fantasy">fantasy</option>
  <option value='"Times New Roman", Times, serif'>"Times New Roman", Times, serif</option>
  <option value="Arial, Helvetica, sans-serif">Arial, Helvetica, sans-serif</option>
  <option value='"Lucida Console", "Courier New", monospace'>"Lucida Console", "Courier New", monospace</option>
  <option value="'Edu VIC WA NT Beginner', cursive">'Edu VIC WA NT Beginner', cursive</option>
  <option value= "'Rubik', sans-serif">'Rubik', sans-serif</option>
  <option value= "'Roboto', sans-serif">'Roboto', sans-serif</option>
  <option value= "'Source Sans Pro', sans-serif">'Source Sans Pro', sans-serif</option>
</select>

  </div>
 
</div>
</div>


</div>




      
      

      

      </form>
      <br/>
      <br/>
      <button type="button" class="btn btn-primary btn-lg" onClick={generate}>Generate</button>
      <br/>
      <br/>
      <div>
      
      <div
        
        style={{padding: '1rem', backgroundColor: 'rgba(0,0,0,0.5)'}}
      >
        <h2 style={{color:'white'}}>
          Coords: {coords.x} {coords.y}
        </h2>
        <h2 style={{color:'white'}}>
          final Coords: {coordsFinal.x} {coordsFinal.y}
        </h2>
        <h2 style={{color:'white'}}>
          final Coords 2 : {coordsFinal2.x} {coordsFinal2.y}
        </h2>
      </div>

      <hr />

      <h2 style={{color:'red'}}> 
        Global coords: {globalCoords.x} {globalCoords.y}
      </h2>
    </div>
    <div className="container">
<div className="row">
<div className="col-6">
  <p>html</p>
<textarea class="areaQuery" id="val1" type="text"  rows="5"  value={html} onChange={change}> </textarea>
</div>
<div className="col-6">
  <p>css</p>
<textarea class="areaQuery" id="val2" type="text"  rows="5" value={css} onChange={change} > </textarea>
</div>
</div>
</div>
      <br/>
      <br/>
    </div>
    </>
  );
}

export default App;
