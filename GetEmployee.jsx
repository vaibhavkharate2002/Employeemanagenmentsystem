import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';


export default function GetEmployee() {
    let [employees, setEmployees] = useState([]);
  let[searchresult, setSearchresult]=useState([]);
    let[searchfristname, setSearchfirstname]=useState("");
    let[searchdept, setSearchdept]=useState("");
    let[searchdesig, setSearchdesig]=useState(""); 
    let[searchlastname, setSearchlastname]=useState(""); 

// serch by firstname 
    let searchbyfristname=()=>{
      axios.get(`http://localhost:8080/findfirstname?firstname=${searchfristname}`)
      .then((response)=>{
   setSearchresult(response.data);
   alert("Search successful")
   setSearchresult("");
      })
      .catch((e)=>{
alert("Error in search")
      })}

// search by lastname
      let searchbylastname=()=>{

        axios.get(`http://localhost:8080/findlastname?lastname=${searchlastname}`)
        .then((response)=>{
     setSearchresult(response.data);
     alert("Search successful")
     setSearchresult("");
        })
        .catch((e)=>{
  alert("Error in search")
        })
      }


// //search by dept
//       let searchbydpt=()=>{

//         axios.get(`http://localhost:8080/finddept?dept=${searchdept}`)
      
//         .then((response)=>{
//      setSearchresult(response.data);
//      alert("Search successful")
//      setSearchresult("");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
//           }).catch((e)=>{
//   alert("Error in search")
//         })}


let navigate=useNavigate();


    useEffect(()=>{
axios.get("http://localhost:8080/getempall")
.then((response)=>{
setEmployees(response.data);
})
.catch((error)=>{
alert("Error....")
})
    },[])

    
    let deleteemp=(eid)=>{
  axios.delete(`http://localhost:8080/deleteemp?eid=${eid}`)
  .then((response)=>{
    alert("Employee deleted successfully")  
  })
  .catch((error)=>{
    alert("Error in deleting employee")
      });
    
    }


 return (
    
    
<div>
   <Adminnavbar></Adminnavbar>
  <div className='container'>
    <div className='row'>

<div className='col-3'>
  <input type="text" className='form-control' placeholder='Search by firstname' value={searchfristname} onChange={(e)=>{setSearchfirstname(e.target.value)}}></input>  
  <button className='btn btn-warning ' onClick={searchbyfristname}>
  search
  </button>
</div>

<div className='col-3'>
  <input type="text" className='form-control' placeholder='Search by lastname' value={searchlastname} onChange={(e)=>{setSearchlastname(e.target.value)}}></input>  
  <button className='btn btn-warning ' onClick={searchbylastname}>search </button>
</div>


{/* <div className='col-3'>
  <input type="text" className='form-control' placeholder='Search by dpt' value={searchdept} onChange={(e)=>{setSearchdept(e.target.value)}}></input>  
  <button className='btn btn-warning ' onClick={searchbydpt}>
  search
  </button>
</div> */}

    </div>
  </div>

  





    <div className='container'>
      <div className='row'>
{
  (searchresult.length>0?searchresult:employees).map((emp)=>
  <div className="card col-4" style={{ "width": "18rem", "margin": "10px" }}>
          <img src={emp.profile} className="card-img-top" alt="profile" />
          
          <div className="card-body">
            <h5 className="card-title">
              {emp.firstname} {emp.lastname}
            </h5>

            <p className="card-text">
              <p>Department: <strong>{emp.dept}</strong></p>
              <p>Designation: <strong>{emp.designation}</strong></p>
              <p>Contact: <strong>{emp.contactno}</strong></p>
              <p>Email: <strong>{emp.email}</strong></p>
              <p>Salary: <strong>{emp.salary}</strong></p>
              <p>DOB: <strong>{emp.dob}</strong></p>
            </p>

            <button className="btn btn-danger" style={{marginRight:"10px"}} onClick={()=>{deleteemp(emp.eid)}}>Delete</button>
            <button className="btn btn-primary" onClick={()=>{navigate(`/updateemp/${emp.eid}`)}}>Update</button>
          </div>
        </div>
        

  )
}
     </div>
     </div>
     </div>
  );
}
