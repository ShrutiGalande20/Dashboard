import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Mba = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/add', {
      params: {
        admissionForm: 'MBA'
      }
    })
    .then(res => {
      setStudents(res.data);
    })
    .catch(() => {
      setStudents([]);
    });
  }, []);

  if (students === null) {
    return <p>...loading</p>;
  }

  return (
    <div>
      <h1>MBA Student List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{student.fullName}</td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.gender}</td>
              <td className="py-2 px-4 border-b">{student.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mba;
