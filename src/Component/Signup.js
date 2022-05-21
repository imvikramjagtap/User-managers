import { useState } from "react"
import { Link, useNavigate} from "react-router-dom"


export default function Signup(props){

  console.log(props.users.length)
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
    const [newUser, setNewUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        age: '',
        company_name: "",
        web: "",
        city: "", 
        zip: '',
        state: "",
        id: props.users.length+1
    })

    const handleChange= (e)=>{
        setNewUser((prevValue)=>{
            return{
                ...prevValue,
            [e.target.name]:(e.target.value)
            }
        })
    }


    const handleSubmit =(e)=>{
      if(newUser.first_name === ''){
        setErr(true);
        setErrMsg("First Name");
      }else if(newUser.last_name === ""){
        setErr(true);
        setErrMsg("Last Name");
      }else if(newUser.email === ""){
        setErr(true);
        setErrMsg("Email");
      }else if(newUser.age === ""){
        setErr(true);
        setErrMsg("Age");
      }else if(newUser.company_name === ""){
        setErr(true);
        setErrMsg("Company name");
      }else if(newUser.web === ""){
        setErr(true);
        setErrMsg("Website");
      }else if(newUser.city === ""){
        setErr(true);
        setErrMsg("City name");
      }else if(newUser.zip === ""){
        setErr(true);
        setErrMsg("Zip");
      }else if(newUser.state === ""){
        setErr(true);
        setErrMsg("State");
      }else{
        e.preventDefault();
        props.users.push(newUser)
        console.log(props.users)
        setNewUser({
        first_name: "",
        last_name: "",
        email: "",
        age: '',
        company_name: "",
        web: "",
        city: "", 
        zip: '',
        state: ""
        })
        setErr(false)
        setAlert(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);}
        
    }


    return(
        <>
        <div className="container m-auto text-center">
        <div className="p-3">
          <form className="bg-light m-auto p-2 rounded-3 shadow w-md-50">
            <h2 className="">Sign up </h2>
            <div className="row p-4 g-4 ">
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="email"
                  name="email"
                //   value={newUser.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="number"
                  name="age"
                //   value={newUser.age}
                  onChange={handleChange}
                  placeholder="Age"
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="company_name"
                //   value={newUser.password}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                />
              </div>
              
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="url"
                  name="web"
                //   value={newUser.phone}
                  onChange={handleChange}
                  placeholder="Web Site"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="city"
                //   value={newUser.phone}
                  onChange={handleChange}
                  placeholder="City"
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="number"
                  name="zip"
                //   value={newUser.phone}
                  onChange={handleChange}
                  placeholder="Zip"
                  required
                />
              </div>

              <div className="col-12">
                <input
                  className="border-0 rounded p-2 w-100"
                  type="text"
                  name="state"
                //   value={newUser.address}
                  onChange={handleChange}
                  placeholder="State"
                />
              </div>
        
                <div className="mb-3 text-center">
                  <p>
                    <strong>
                      Already have have an account..? 
                       <Link to="/">LogIn now</Link>
                    </strong>
                  </p>
                </div>
              
            </div>
              {alert && (
                <p className="text-success">
                  Account created taking you to sign in page..!
                </p>
              )}
            {err && <p className="text-danger">Please enter {errMsg}</p>}
            <button
              onClick={handleSubmit}
              className="btn btn-primary px-5 text-white mt-0 mb-2 mt-0"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
        </>
    )
}