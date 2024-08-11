import React, { useState } from 'react';
import axios from 'axios';

const Online = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    motherName: '',
    fatherName: '',
    gender: '',
    nationality: '',
    address: '',
    mobile: '',
    admissionForm: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    try {
      
      const url = 'http://localhost:5000/api/v1/add';
  
      axios.post(url, formData )
      .then(ressponse => {
        console.log("response:". ressponse.data).catch((error)=> {
          console.log("error")
        })
      })
      console.log(formData);
      alert("submitted")
    } catch (error) {
      console.log(error, "error submiting");
      console.log("error in submiting")
      
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Online Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.motherName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.fatherName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Nationality</label>
          <input
            type="text"
            name="nationality"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Home Address</label>
          <input
            type="text"
            name="address"
            placeholder="Full Address"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile</label>
          <input
            type="tel"
            name="mobile"
            placeholder="### ### ####"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Admission Form</label>
          <select
            name="admissionForm"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={formData.admissionForm}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Engineering">Engineering</option>
            <option value="MBA">MBA</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Online;
