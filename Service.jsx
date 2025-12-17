import React from "react";

export default function Service() {
  return (
    <div className="container mt-5">
      {/* Page Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Our Services</h2>
        <p className="text-muted">
          We provide complete employee management solutions to simplify HR
          operations.
        </p>
      </div>

      {/* Services List */}
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">
              ➤ Add New Employee
            </li>
            <li className="list-group-item">
              ➤ View Employee List
            </li>
            <li className="list-group-item">
              ➤ Update Employee Details
            </li>
            <li className="list-group-item">
              ➤ Delete Employee Record
            </li>
          </ul>
        </div>

        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">
              ➤ Search Employee by First Name
            </li>
            <li className="list-group-item">
              ➤ Search Employee by Last Name
            </li>
            <li className="list-group-item">
              ➤ Search Employee by Department
            </li>
            <li className="list-group-item">
              ➤ Search Employee by Designation
            </li>
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <p className="text-center">
          Our services ensure smooth employee data management with
          <strong> fast performance</strong>, 
          <strong> secure operations</strong>, and a 
          <strong> user-friendly interface</strong>. 
          The system is designed to reduce manual work and improve productivity.
        </p>
      </div>
    </div>
  );
}
