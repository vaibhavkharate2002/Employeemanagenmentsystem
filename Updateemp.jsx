import React from 'react'
import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';


export default function Updateemp() {

let info=useParams();
let eid=info.eid;
  let navigate = useNavigate();


    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [contactno, setContactno] = useState("");
    let [gender, setGender] = useState("");
    let [dob, setDob] = useState("");
    let [adharcardno, setAdharcardno] = useState("");
    let[panno, setPanno] = useState("");
    let [joiningDate, setJoiningDate] = useState("");
    let[dept, setDept] = useState("");
    let [designation, setDesignation] = useState("");
    let [salary, setSalary] = useState("");
    let [reportingmanager, setReportingmanager] = useState("");
    let [exp, setExp] = useState("");
    let [address, setAddress] = useState("");
    let[status, setStatus] = useState("");
    let[profile, setProfile] = useState("");   // file upload
    let handleprofile=(event)=>{
    
        let file=event.target.files[0];
       let fullpath = `/img/${file.name}`;
        setProfile(fullpath);
    }

      useEffect(() => {
    axios.get(`http://localhost:8080/getempbyid?eid=${eid}`)
      .then((response) => {
        let data = response.data;

        setFirstname(data.firstname);
        setLastname(data.lastname);
        setEmail(data.email);
        setContactno(data.contactno);
        setGender(data.gender);
        setDob(data.dob);
        setAdharcardno(data.adharcardno);
        setPanno(data.panno);
        setJoiningDate(data.joiningDate);
        setDept(data.dept);
        setDesignation(data.designation);
        setSalary(data.salary);
        setReportingmanager(data.reportingmanager);
        setExp(data.exp);
        setAddress(data.address);
        setStatus(data.status);
        setProfile(data.profile);
      })
      .catch(() => {
        alert("Error loading employee data");
      });
  }, [eid]);
      
  
  
  let updateEmployee = (e) => {
    e.preventDefault(); 

    if (!validation()) return;

    let employee = {
      firstname, lastname,email,contactno,gender,dob,adharcardno,panno,
      joiningDate,dept,designation,salary,reportingmanager,exp,
       address,status, profile};

    axios.put(`http://localhost:8080/updateemp?eid=${eid}`, employee)
      .then((response) => {
        alert(response.data);
        navigate(-1); 
      })
      .catch(() => {
        alert("Update failed");
      });
  };


  let validation = () => {

  if (
    firstname === "" ||lastname === "" || email === "" ||contactno === "" ||gender === "" ||dob === "" ||dept === "" ||designation === ""
  ) {
    alert("Please fill all required fields");
    return false;
  }

  if (!/^[A-Za-z ]{2,20}$/.test(firstname)) {
    alert("First name must be alphabets (2–20 letters)");
    return false;
  }

  if (!/^[A-Za-z ]{2,20}$/.test(lastname)) {
    alert("Last name must be alphabets (2–20 letters)");
    return false;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Invalid email format");
    return false;
  }

  if (!/^\d{10}$/.test(contactno)) {
    alert("Contact number must be exactly 10 digits");
    return false;
  }

  return true;
};

  return (
    <div>
      
      <h1>update from</h1>
        <form onSubmit={updateEmployee}>

        <div className="row g-3">

          {/* First Name */}
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input type="text" name="firstname" className="form-control" required  value={firstname}  onChange={(event)=>{setFirstname(event.target.value)}}/>
          </div>

          {/* Last Name */}
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input type="text" name="lastname" className="form-control"   value={lastname} onChange={(event)=>{setLastname(event.target.value)}} />
          </div>

          {/* Email */}
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" name="email" className="form-control" required  value={email} onChange={(event)=>{setEmail(event.target.value)}} />
          </div>

          {/* Contact No */}
          <div className="col-md-6">
            <label className="form-label">Contact Number</label>
            <input type="tel" name="contactno" className="form-control" required   value={contactno} onChange={(event)=>{setContactno(event.target.value)}} />
          </div>

          {/* Gender */}
          <div className="col-md-4">
            <label className="form-label">Gender</label>
            <select name="gender" className="form-select" required  value={gender} onChange={(event)=>{setGender(event.target.value)}}>
              <option value="">Choose…</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* DOB */}
          <div className="col-md-4">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" required  value={dob} onChange={(event)=>{setDob(event.target.value)}}/>
          </div>

          {/* Aadhar */}
          <div className="col-md-4">
            <label className="form-label">Aadhar Number</label>
            <input type="number" name="aadharno" className="form-control"  value={adharcardno} onChange={(event)=>{setAdharcardno(event.target.value)}}/>
          </div>

          {/* PAN */}
          <div className="col-md-4">
            <label className="form-label">PAN Number</label>
            <input type="text" name="panno" className="form-control"  value={panno} onChange={(event)=>{setPanno(event.target.value)}}/>
          </div>

          {/* Joining Date */}
          <div className="col-md-4">
            <label className="form-label">Joining Date</label>
            <input type="date" name="JoiningDate" className="form-control"  value={joiningDate} onChange={(event)=>{setJoiningDate(event.target.value)}} />
          </div>

          {/* Department */}
          <div className="col-md-4">
            <label className="form-label">Department</label>
            <input type="text" name="dept" className="form-control"  value={dept} onChange={(event)=>{setDept(event.target.value)}}/>
          </div>

          {/* Designation */}
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input type="text" name="designation" className="form-control"  value={designation} onChange={(event)=>{setDesignation(event.target.value)}}/>
          </div>

          {/* Salary / Package */}
          <div className="col-md-6">
            <label className="form-label">Salary / Annual Package (₹)</label>
            <input type="number" step="0.01" name="salary" className="form-control" placeholder="Enter CTC"  value={salary} onChange={(event)=>{setSalary(event.target.value)}} />
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <label className="form-label">Experience (Years)</label>
            <input type="number" step="0.1" name="exp" className="form-control"  value={exp} onChange={(event)=>{setExp(event.target.value)}} />
          </div>

          {/* Reporting Manager */}
          <div className="col-md-6">
            <label className="form-label">Reporting Manager</label>
            <input type="text" name="reportingmanager" className="form-control"  value={reportingmanager} onChange={(event)=>{setReportingmanager(event.target.value)}} />
          </div>

          {/* Employment Status */}
          <div className="col-md-6">
            <label className="form-label">Status</label>
            <select name="status" className="form-select"  value={status} onChange={(event)=>{setStatus(event.target.value)}}>
              <option value="">Choose…</option>
              <option>Active</option>
              <option>Probation</option>
              <option>On Leave</option>
              <option>Resigned</option>
              <option>Terminated</option>
            </select>
          </div>

          {/* Address */}
          <div className="col-12">
            <label className="form-label">Address</label>
            <textarea className="form-control" name="address" rows="3"  value={address} onChange={(event)=>{setAddress(event.target.value)}}></textarea>
          </div>

          {/* Profile Upload */}
          <div className="col-md-6">
            <label className="form-label">Profile (Photo / Resume)</label>
            <input type="file" name="profile" className="form-control" accept="image/*,application/pdf"  onChange={handleprofile} />
          </div>

        </div>
        <div className="col-md-6">
            <label className="form-label">Preview of Profile</label>
         {profile && (
  <img src={profile} width="150" alt="Preview" />
)}
        </div>

        <div className="mt-4">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-secondary ms-2">Reset</button>
        </div>
        


      </form>
    </div>
  )
}
