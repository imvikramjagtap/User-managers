import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { getUsers } from "../API/services";



export default function Userprofile(props){
    const navigate = useNavigate();
    const [displayEdit, setDisplayEdit] =useState(false)
    const [editUserInput, setEditUser] = useState({
        first_name: "",
        last_name: "",
        company_name: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        web:"",
        age:""
      });
   
     

        const displayUser = props.users.filter((user)=>{
            return user.id === props.id
        })
    
        
 
    // edit....
    const handleEditBtn =(e) =>{
        e.preventDefault();
        setEditUser(displayUser[0])
        setDisplayEdit(true)
    }

    const inputChange = (e) =>{
        setEditUser((oldValue) => {
            return{
                ...oldValue,
                [e.target.name]:e.target.value
            };
        });
    };
    
    

    const handleEditSave =(e)=>{
        e.preventDefault();
        console.log(editUserInput)
        props.users[props.id-1]={
            ...props.users[props.id-1],
            first_name: editUserInput.first_name,
            last_name: editUserInput.last_name,
            company_name: editUserInput.company_name,
            city: editUserInput.city,
            state: editUserInput.state,
            zip: editUserInput.zip,
            email: editUserInput.email,
            web:editUserInput.web,
            age:editUserInput.age,
        }
        console.log(props.users[props.id-1])
        console.log(displayUser)
        setDisplayEdit(false)
    }

    const handleLogoutBtn =(e) => {
        e.preventDefault();
        navigate("/")

    }
    
  
    
    return(
 
            <div className="container">
                <div className="d-flex flex-wrap justify-content-center row g-4 p-4">
                    <div className="text-end">
                    <button onClick={handleLogoutBtn} className="btn btn-dark">Logout</button>
                    </div>
                    
                    
                        {displayUser.map(user=>(
                        <div className="card" key={user.id} >
                             {displayEdit === true ? false : true && <form action="" key={user.id} className="mt-3 p-2" >
                                 
                                 <h2 className="text-center p-3">Hello! {user.first_name}</h2>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">First and last name</span>
                                        <input type="text" name="first_name" value={user.first_name} disabled class="form-control" />
                                        <input type="text" name="last_name" value={user.last_name} disabled class="form-control"/>
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Email:</span>
                                        <input type="text" name="email" value={user.email} disabled class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Age:</span>
                                        <input type="text" name="age" value={user.age} disabled class="form-control"/>
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Company:</span>
                                        <input type="text" name="company_name" value={user.company_name} disabled class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">City:</span>
                                        <input type="text" name="city" value={user.city} disabled class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">State:</span>
                                        <input type="text" name="state" value={user.state} disabled class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Zip:</span>
                                        <input type="number" name="zip" value={user.zip} disabled class="form-control"/>
                                        
                                    </div>
                                    
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Website:</span>
                                        <input type="text" name="web" value={user.web} disabled class="form-control"/>
                                        
                                    </div>   
                                    <button onClick={handleEditBtn} className="btn btn-dark mt-2 w-100">Edit</button>
     
                                </form>}
                             
                                {displayEdit && <form action="" className="mt-3 p-2" >
                                <h2 className="text-center p-3">Hello! {user.first_name}</h2>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">First and last name</span>
                                        <input type="text" name="first_name" value={editUserInput.first_name} onChange={inputChange} class="form-control" />
                                        <input type="text" name="last_name" value={editUserInput.last_name} onChange={inputChange} class="form-control"/>
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Email:</span>
                                        <input type="text" name="email" value={editUserInput.email} onChange={inputChange} class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Age:</span>
                                        <input type="text" name="age" value={editUserInput.age} onChange={inputChange} class="form-control"/>
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Company:</span>
                                        <input type="text" name="company_name" value={editUserInput.company_name} onChange={inputChange} class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">City:</span>
                                        <input type="text" name="city" value={editUserInput.city} onChange={inputChange} class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">State:</span>
                                        <input type="text" name="state" value={editUserInput.state} onChange={inputChange} class="form-control"/>
                                        
                                    </div>
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Zip:</span>
                                        <input type="number" name="zip" value={editUserInput.zip} onChange={inputChange} class="form-control"/>
                                        
                                    </div>
                                    
                                    <div  class="input-group mb-3">
                                        <span class="input-group-text">Website:</span>
                                        <input type="text" name="web" value={editUserInput.web} onChange={inputChange} class="form-control"/>
                                        
                                    </div>
                                    <button onClick={handleEditSave} className="btn btn-dark mt-2 w-100">Save</button>
                                </form>}
                        </div>
                        ))} 
                    
                    
                        
                </div>
            </div>
      
    );
}