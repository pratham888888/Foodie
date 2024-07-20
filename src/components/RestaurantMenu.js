import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/links";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";



const RestaurantMenu = ()=>{
  
    const {resId}= useParams()
    const resInfo = useRestaurantMenu(resId);
    const onlineStatus= useOnlineStatus()
    const[showIndex, setShowIndex]= useState(null);
    //console.log(resId);


   

    if(resInfo=== null){

      return <Shimmer/>
    }

    const setShowIndexDecide= (index)=>{
        if(showIndex===index){
            setShowIndex(null);
        }else{
            setShowIndex(index); 
        }
             
        }
    

    

    const itemCards= resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    const {name, costForTwoMessage, cuisines, avgRating}= resInfo?.data?.cards[2]?.card?.card?.info;
    
    const categories= resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR?.cards?.filter((c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   console.log(categories);
    if(onlineStatus=== false){

        return (<h1>Looks like you are offline!</h1>)
    }
    return (
        <div className=" text-center">
                <h1 className="font-bold mt-6 mb-2 text-3xl">{name}</h1>
                <p className="font-semibold text-lg ">{cuisines.join(", ")}-{costForTwoMessage}</p>
                <p className="font-semibold text-lg">{"Average Rating:"+avgRating}</p>
             <ul>
             {categories.map((category,index)=><li><RestaurantCategory
              props={category}
              showItems = {index===showIndex?true:false}
              setShowIndex= {()=>setShowIndexDecide(index)}
             /></li>)}
             </ul>
             
        </div>
    )
}

export default RestaurantMenu;