import React from  "react";
import Card from "./Card";
import { useState } from "react";
import Menu from "./Api";



const Restaurent = () => {
    const[menuData,setMenuData]=useState(Menu);
    const FilterItem =((category)=>{
        const updatelist =Menu.filter((elem)=>{
             return elem.category===category;
        });
        setMenuData(updatelist);
    });
  return (
    <>
    <div className="navbar">
       <button className="btn_item" onClick={()=>FilterItem("breakfast")}>Breakfast</button>
       <button className="btn_item" onClick={()=>FilterItem("lunch")}>lunch</button>
       <button className="btn_item" onClick={()=>FilterItem("evening")}>evening</button>
       <button className="btn_item" onClick={()=>FilterItem("dinner")}>dinner</button>
    </div>
    <Card menuData={menuData}/>
    </>
  )
}

export default Restaurent;
