import React from 'react';
import './navbar.css';
 import axios from 'axios'
 import  {useState}from 'react';
// import { useEffect } from 'react';
   function Home() {
     const [data,setData] = useState([]);
     const [heading,setheading]=useState([]);
     const  categoryHeadingG =()=>{
      axios.get ("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=7b796356135c4794ba8eff740341b198")
 .then ((response)=>{
    setData(response.data.articles);
    setheading('General');
 });
}
const  categoryHeadingE=()=>{
  axios.get ("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=7b796356135c4794ba8eff740341b198")
.then ((response)=>{
setData(response.data.articles);
setheading('Entertainment');
});
}
const  categoryHeadingSp=()=>{
  axios.get ("https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=7b796356135c4794ba8eff740341b198")
.then ((response)=>{
setData(response.data.articles);
setheading('Sports');
});
}
const  categoryHeadingH=()=>{
  axios.get ("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=7b796356135c4794ba8eff740341b198")
.then ((response)=>{
setData(response.data.articles);
setheading('Health');
});
}
const  categoryHeadingS=()=>{
  axios.get ("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=7b796356135c4794ba8eff740341b198")
.then ((response)=>{
setData(response.data.articles);
setheading('Science');
});
}
const  categoryHeadingI =()=>{
      axios.get ("https://newsapi.org/v2/top-headlines?country=in&apiKey=7b796356135c4794ba8eff740341b198")
         .then ((response)=>{
           setData(response.data.articles);
            setheading('INDIA')
         });
     }
     const  categoryHeadingU =()=>{
      axios.get ("https://newsapi.org/v2/top-headlines?country=us&apiKey=7b796356135c4794ba8eff740341b198")
         .then ((response)=>{
           setData(response.data.articles);
            setheading('USA')
         });
     }
     const  categoryHeadingC =()=>{
      axios.get ("https://newsapi.org/v2/top-headlines?country=ch&apiKey=7b796356135c4794ba8eff740341b198")
         .then ((response)=>{
           setData(response.data.articles);
            setheading('CHINA')
         });
     }
    const dataRender=data.map((value,index)=>{ 
      return(
      
        <div key={index}className="card">
          {/* <div className='card'style={{width:"15rem"}}> */}
            {/* <img src={value.urlToImage} className="card-img-top" alt="..."/> */}
            <div className='card-body'>

              <h5 className='card-title'>{value.title}</h5>
            <img src={value.urlToImage} className="card-img-top" alt="..."/>
              {/* <h6>{value.author}{value.publishedAt} </h6> */}
            {/* <img src={value.urlToImage} className="card-img-top" alt="..."/> */}
               <p className='description'>{value.description}</p>
               {/* <p >{value.description}</p> */}
              <a href={value.url}  className='btn btn-primary'>Read More</a>
              <h6>{value.author}{value.publishedAt} </h6>

             </div>
         </div>
         
        
      )      
     }) 
        return (
            <>
             <div className='bar'>
              <div className='sidebar'>
                <h1>Category</h1>
                <hr/>
                <button className='button-a'onClick={categoryHeadingG}>General</button> 
                <button className='button-a'onClick={categoryHeadingE}>Entertainment</button>
                <button className='button-a'onClick={categoryHeadingSp}>sports</button>
                <button className='button-a'onClick={categoryHeadingH}>Health</button>
                <button className='button-a'onClick={categoryHeadingS}>Science</button>
             <div className='bar-1'>
              <hr/>
              <h1>Country</h1>
            <button className='button-a'onClick={categoryHeadingI}>INDIA</button>
            <button className='button-a'onClick={categoryHeadingU}>USA</button>
            <button className='button-a'onClick={categoryHeadingC}>CHINA</button>

            </div>
            </div>
            </div>
            {/* <div className='backdrop'>
              </div> */}

         <div className='centrebox'>
          <h2>Home Page</h2>
          <div>
            <h2 className='setheading'>{heading}</h2></div>
          {dataRender}
        </div>
                
            </>
        );
    }

export default Home;