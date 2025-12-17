import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RegistrationForm() {
  let [user, setUser] = useState({
    uid: "",
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    gender: "",
    role: "",
    eid: "",
    username: "",
    password: "",
    confirmpassword: ""
  });

  let [message, setMessage] = useState("");
  let [isSuccess, setIsSuccess] = useState(false);

  // handle input change
  let handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // submit registration form
  let handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (user.password !== user.confirmpassword) {
      setIsSuccess(false);
      setMessage("Passwords do not match ❌");
      return;
    }

    axios
      .post("http://localhost:8080/register", user)
      .then((response) => {
        setIsSuccess(true);
        setMessage("Registration successful ✅");
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Registration failed ❌");
      });
  };

  // react to message
  useEffect(() => {
    if (message !== "") {
      alert(message);
    }
  }, [message]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div>
          <label>UID</label>
          <input type="number" name="uid" value={user.uid} onChange={handleChange} required />
        </div>

        <div>
          <label>First Name</label>
          <input type="text" name="firstname" value={user.firstname} onChange={handleChange} required />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" name="lastname" value={user.lastname} onChange={handleChange} required />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={user.email} onChange={handleChange} required />
        </div>

        <div>
          <label>Contact No</label>
          <input type="tel" name="contactno" value={user.contactno} onChange={handleChange} required />
        </div>

        <div>
          <label>Gender</label>
          <select name="gender" value={user.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Role</label>
          <input type="text" name="role" value={user.role} onChange={handleChange} required />
        </div>

        <div>
          <label>EID</label>
          <input type="number" name="eid" value={user.eid} onChange={handleChange} required />
        </div>

        <div>
          <label>Username</label>
          <input type="text" name="username" value={user.username} onChange={handleChange} required />
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={user.password} onChange={handleChange} required />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleChange} required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
