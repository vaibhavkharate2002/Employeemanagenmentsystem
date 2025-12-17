import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">
          About Employee Management System
        </h2>
        <p className="text-muted">
          A modern web-based solution for managing employee information
        </p>
      </div>

      {/* Description */}
      <div className="mb-4">
        <p>
          The <strong>Employee Management System</strong> is a web application
          developed using <strong>React</strong> for the frontend and
          <strong> Spring Boot</strong> for the backend. It is designed to help
          organizations efficiently manage employee records in a centralized
          system.
        </p>

        <p>
          This application allows administrators to
          <strong> add</strong>, <strong> view</strong>, <strong> update</strong>,
          and <strong> delete</strong> employee details in a secure and
          structured manner. The system reduces manual paperwork and improves
          operational efficiency.
        </p>
      </div>

      {/* Technology Stack */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-secondary mb-3">
            Technologies Used
          </h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              ⚙ React.js for frontend user interface
            </li>
            <li className="list-group-item">
              ⚙ Spring Boot for backend development
            </li>
            <li className="list-group-item">
              ⚙ RESTful API integration
            </li>
            <li className="list-group-item">
              ⚙ CRUD operations with database connectivity
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
