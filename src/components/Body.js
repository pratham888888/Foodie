import Card,{CardPromoted} from "./Card";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserClass from "./UserClass";

const Body =() =>{
    let [resList, setResList]= useState([]);
    let [inputValue, setInputValue]= useState([]);
    let [filteredRes, setFilteredRes]= useState([]);
    let [buttonText, setButtonText]= useState(["Top Rated Restaurants"]);
     let onlineStatus= useOnlineStatus()
    //use effect will be executed as soon as the page is rendered
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const apiData= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
         
        const jsonData= await apiData.json();

        setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
             
        } 
             console.log(filteredRes);
        const CardPromoted1 = CardPromoted(Card)

        if(onlineStatus=== false){

            return (<h1>Looks like you are offline!</h1>)
        }
    
    return resList.length===0?<Shimmer/>: (
        <div className='body'>
            <div className='filter-result'>
              
                <input  type="text" className="border border-solid border-black p-1 mx-4" value={inputValue} onChange={
                    (e)=>{
                       setInputValue(e.target.value);
                    }
                }/>

                <button className=" bg-green-400 px-4 py-2 rounded-lg" onClick={()=>{
                    //filter doesnt update the list but provides a new list with filtered results
                    setFilteredRes(resList.filter((res)=> res.info.name.toLowerCase().includes(inputValue.toLowerCase()) )) 
                }}>Search</button>

                   <button className=" bg-violet-300 px-4 py-2 rounded-lg m-4" onClick={()=>{
                    
                    if(buttonText==="Top Rated Restaurants"){
                        setFilteredRes(resList.filter((res)=> res.info.avgRating > 4.5));
                        setButtonText("Show all Restaurants")
                    }else{
                        setFilteredRes(resList);
                        setButtonText("Top Rated Restaurants")
                    }
                  
                }}>{buttonText}</button>
            </div>
            <div className="flex flex-wrap">
                 
                {filteredRes.map((restaurant)=>(<Link key= {restaurant.info.id} 
              to={"/restaurants/"+restaurant.info.id}>
                 {restaurant.info.id>25000?< CardPromoted1 resData= {restaurant}/>:<Card resData= {restaurant}/>}              
                </Link>
                ))

            }
            <UserClass/>
            </div>
           

        </div>
    )
}

export default Body;