import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{
    constructor(props){
       // console.log("Child constructor")
                super(props);

        this.state= {
            count:0,
            count2:0,
            user:{
                val1:2,
                val2:7
            }
        };
    }

    componentDidMount(){
      //  console.log("Child component did mount")
    }

    render(){
       // console.log("child render")
        return( 
            <div className="user-card"> 
            <h1>{this.props.name}</h1>
            <UserContext.Consumer>
                {
                    (data)=>console.log(data)
                }
            </UserContext.Consumer>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    user:{
                        val1:15
                    }
                });
                 
            }} >Increase Counter
                </button> 
            <h2>{this.state.count}</h2>
            <h2>{this.state.count2}</h2>
            <h2>{this.state.user.val1}</h2>
            <h2></h2>
           </div>
           );
        
    }
}

export default UserClass;