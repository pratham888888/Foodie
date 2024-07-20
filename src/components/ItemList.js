import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList= (items)=>{
    const dispatch= useDispatch()
    const handleAdd= (item)=>{
        dispatch(addItem(item));
    }
    console.log(items);
    return (
        <div className="p-2 m-2">
           {items.items.map((item)=>
            <div className="text-left m-4 bg-slate-50 p-3 rounded-md">
                <div className="flex justify-between m-2 p-5 ">
                    <div className="py-2 pr-3 w-9/12">
                    <div className=" font-bold text-lg">{item.card.info.name}</div>
                    <div className=" font-bold text-gray-600 text-md"> - ₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</div>
                    <p className="mt-5">{item.card.info.description}</p>
                        </div>
                <div className="w-3/12 h-auto relative object-contain flex justify-center ">
                <img className="rounded-lg" src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/>
                <button className="absolute px-3 py-1 rounded-md mt-1 bg-black text-white" onClick={()=>handleAdd(item)}>Add +</button>
                    </div>
                   
    


               
                </div>
                
            </div>

            
           )}
        </div>
    )
}

export default ItemList;