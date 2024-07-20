import UserClass from "./UserClass";

const User= (props)=>{
    const {name}= props; 
    return (
        <div className="user-card">
        <h1>{name}</h1>
        <UserClass name="Prath"/>
       </div>
    )

}

export default User;