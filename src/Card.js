import React from 'react';
import "./App.css";
// import Menu from './Api';

const Card = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((elem)=>{
     return(
        <>
  <div className='Card'>
        <div className='container'>
            <div className='mainCard'>
                <img src={elem.image}/>
                <div className='id'>{elem.id}</div>
                <h3>{elem.name}</h3>
                <div className='line'>
                <hr></hr><span>R E A D</span></div>
                <p>{elem.description}</p>
                <button>Order Now</button>
            </div>
        </div>
      
    </div>
    </>


     );

    })}
    </section>
  </>
  );
}

export default Card;
