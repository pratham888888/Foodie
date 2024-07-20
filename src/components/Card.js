import { RES_IMAGE_LINK } from "../utils/links";
const Card =(props) =>{
    // name of resData should be same as passed in the props
    const {resData}= props;
    //destructuring the object and getting only those parameters that we need. Also name should be same as in the object
    const {cuisines,name,avgRatingString,cloudinaryImageId}= resData?.info;
    return (  
           
        <div className="p-4 m-4 bg-slate-100 h-96 w-72 rounded-lg relative">
            <img className="w-64 h-52 rounded-lg" src={RES_IMAGE_LINK+cloudinaryImageId}/>
           <div className="font-bold pt-4"> <h3>{name}</h3>
            </div>
           {
            cuisines.length>=2?(
                <h2>{cuisines[0]+", "+cuisines[1]}</h2>
            ):
            <h2>{cuisines[0]}</h2>
           }
            <h4></h4>
           <h4 className='bg-green-300 h-6 w-8 text-center absolute bottom-4 left-4 rounded-md'>{avgRatingString}</h4>
        </div>
    );
}

export const CardPromoted = (Card)=>{
    return (props) =>{

    return(
        <div>
        <label className="absolute bg-black bg-opacity-70 text-white m-4 p-2 z-10 rounded-lg">Promoted</label>
        <Card {...props}/>
    </div>
    );
   
    } 
}

export default Card;