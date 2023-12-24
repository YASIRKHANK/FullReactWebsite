// // SignupForm.jsx
// import React, { useState } from "react";

// const SignupForm = ({ closeForm }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phoneNumber: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your signup logic here
//     console.log("Signup logic goes here", formData);
//     // Close the form after successful signup
//     closeForm();
//   };

//   return (
//     <div className="absolute bg-white text-black mt-2 p-4 border border-gray-300 w-72">
//       <form onSubmit={handleSubmit}>
//         <label className="block mb-2">
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//           />
//         </label>
//         <label className="block mb-2">
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//           />
//         </label>
//         <label className="block mb-2">
//           Phone Number:
//           <input
//             type="tel"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full border p-2 rounded-md"
//           />
//         </label>
//         <button
//           type="submit"
//           className="bg-green-500 text-white py-2 px-4 rounded-md"
//         >
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;





// SignupForm.jsx
import React from "react";
import { FaTimes } from "react-icons/fa";

const SignupForm = ({ closeForm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 mt-36 w-96 rounded-md relative">
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-gray-600"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-4">Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-black font-semibold ">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              placeholder="Enter your name "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              placeholder="Enter your Email "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-black font-semibold">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
              placeholder="Enter your phone No "
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

