import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({props,showItems,setShowIndex})=>{
    //console.log(props)
    const handleClick = ()=>{
       setShowIndex();
    }
    return (
        <div className="w-6/12 border-b-slate-400  border-b-2 mx-auto p-4 my-6 bg-slate-100 shadow-sm rounded-lg">
            <div className="flex justify-between mx-2 cursor-pointer" onClick={handleClick}>
                <div className="font-bold text-xl">
                {props.card.card.title} ({props.card.card.itemCards.length})
                </div>
               <div className="cursor-pointer">
               {showItems?"⬆️":"⬇️"}
                </div> 
            </div>
            {/* <div>
                <ul>
                {props.data.card.card.itemCards.map((item)=>{
                 <li key={item.card.info.id}>{item.card.info.name}Hello</li>
                })}
                </ul>
                 {console.log(props.data.card.card.itemCards[0].card.info.name)} 
            </div> */}
            {showItems&&<ItemList items={props.card.card.itemCards}/>}

        </div>
    );
}

export default RestaurantCategory;