// // import React from "react";
// import signupImg from "../assets/images/signup.gif";
// import avatar from "../assets/images/doctor-img01.png";
// // import { Link, useNavigate } from "react-router-dom";
// // import { useState } from "react";
// import uploadImageToCloudinary from "../utils/uploadCloudinary";
// // import { BASE_URL } from "../config";
// import { toast } from "react-toastify";
// import HashLoader from "react-spinners/HashLoader";


// import React, { useState, useEffect } from 'react';
// import { useNavigate ,Link} from 'react-router-dom'; 
// import '../assets/css/RegiForm.css';
// import { FaUserTie, FaLock } from 'react-icons/fa';
// import axios from 'axios';

// const BASE_URL = "http://localhost:7000"

// const Signup = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [previewURL, setPreviewURL] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: '',
//     // gender: "",
//     // role: "patient",
//     // photo: selectedFile,
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     // const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleFileInputChange = async (event) => {
//   //   const file = event.target.files[0];

//   //   const data = await uploadImageToCloudinary(file);

//   //   setSelectedFile(data.url);
//   //   setPreviewURL(data.url);
//   //   setFormData({ ...formData, photo: data.url });
//   // };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // try {
//     //   const res = await fetch(`${BASE_URL}/auth/register`, {
//     //     method: "post",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify(formData),
//     //   });

//     //   const { message } = await res.json();

//     //   if (res.status === 400) {
//     //     throw new Error(message);
//     //   }

//     try {
//       if(formData.password === formData.confirmPassword){
//           const response = await axios.post(`${BASE_URL}/regis`, formData);
          
          
//           console.log('Success:', response.data);
  
//           setLoading(false);
//           if(response.data.isOk){
//             toast.success(response.data.message);
//             navigate('/login'); 
//           }else{
//               throw new Error(response.data.message);
//           }

//       }else{
//         let msg = "Password not Matched";
//         toast.error(msg);
//       }
//       setLoading(false);
//     } catch (error) {
//       // alert("error regi ");
//       toast.error(error.message);
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="px-5 xl:px-0">
//       <div className="max-w-[1170px] mx-auto ">
//         <div className="grid grid-cols-1 lg:grid-cols-2 ">
//           {/* ============ img box ========= */}
//           <div className="hidden lg:block bg-[#1bcc20] rounded-l-lg">
//             <figure className="rounded-l-lg">
//               <img className="w-full rounded-l-lg" src={signupImg} alt="" />
//             </figure>
//           </div>

//           {/* signup */}
//           <div className="rounded-l-lg lg:pl-16 py-10">
//             <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
//               Create an <span className="text-lime-500">account</span>
//             </h3>

//             <form onSubmit={submitHandler}>
//               <div className="mb-5">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="Full Name"
//                   className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
//                   required
//                 />
//               </div>
//               <div className="mb-5">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   placeholder="Enter Your Email"
//                   className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
//                   required
//                 />
//               </div>

//               <div className="mb-5">
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
//                   required
//                 />
//               </div>

//               <div className="mb-5">
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
//                   required
//                 />
//               </div>

//               {/* <div className="mb-5 flex items-center justify-between">
//                 <label className="text-headingColor font-bold text-[16px] leading-7">
//                   Are you a:
//                   <select
//                     name="role"
//                     value={formData.role}
//                     onChange={handleInputChange}
//                     className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
//                     required
//                   >
//                     <option value="patient">Patient</option>
//                     <option value="doctor">Doctor</option>
//                   </select>
//                 </label>
//                 <label className="text-headingColor font-bold text-[16px] leading-7">
//                   Are you a:
//                   <select
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleInputChange}
//                     className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
//                     required
//                   >
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                   </select>
//                 </label>
//               </div> */}

//               {/* <div className="mb-5 flex items-center gap-3">
//                 {selectedFile && (
//                   <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-lime-500 flex items-center">
//                     <img
//                       src={previewURL}
//                       alt="Preview"
//                       className="w-full rounded-full"
//                     />
//                   </figure>
//                 )}
//                 <div className="relative w-[130px] h-[50px]">
//                   <input
//                     type="file"
//                     name="phto"
//                     id="customFile"
//                     onChange={handleFileInputChange}
//                     accept=".jpg, .png"
//                     className="custom-file-input absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
//                   />

//                   <label
//                     className="custom-file-label absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#1bcc20] text-white font-semibold rounded-lg truncate cursor-pointer"
//                     htmlFor="customFile"
//                   >
//                     {selectedFile ? selectedFile.name : "Upload photo"}
//                   </label>
//                 </div>
//               </div> */}

//               <div className="mt-7">
//                 <button
//                   disabled={loading && true}
//                   type="submit"
//                   className="w-full bg-[#1bcc20] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
//                 >
//                   {loading ? (
//                     <HashLoader siza={35} color="#ffffff" />
//                   ) : (
//                     "Sign up"
//                   )}
//                 </button>
//               </div>

//               <p className="mt-5 text-textColor text-center">
//                 Already have an account?{" "}
//                 <Link to="/login" className="text-lime-600 font-medium">
//                   Login
//                 </Link>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Signup;















// // ------------------------- below is test to make doctor panel signupopppppppppp as well----------------------------------------------------------------------------------------------------------------





import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import signupImg from "../assets/images/signup.gif";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import axios from "axios";

const BASE_URL = "http://localhost:7000";

const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient", // Added role with default as patient
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (formData.password === formData.confirmPassword) {
        const response = await axios.post(`${BASE_URL}/regis`, formData);
        setLoading(false);
        if (response.data.isOk) {
          toast.success(response.data.message);
          navigate("/login");
        } else {
          throw new Error(response.data.message);
        }
      } else {
        let msg = "Password not Matched";
        toast.error(msg);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* ============ img box ========= */}
          <div className="hidden lg:block bg-[#1bcc20] rounded-l-lg">
            <figure className="rounded-l-lg">
              <img className="w-full rounded-l-lg" src={signupImg} alt="" />
            </figure>
          </div>

          {/* signup */}
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-lime-500">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                  required
                />
              </div>

              <div className="mb-5">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#1bcc20] focus:outline-none focus:border-b-[#1bcc20] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
                  required
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full mt-1 block pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  required
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>

              <div className="mt-7">
                <button
                  disabled={loading && true}
                  type="submit"
                  className="w-full bg-[#1bcc20] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
                >
                  {loading ? (
                    <HashLoader size={35} color="#ffffff" />
                  ) : (
                    "Sign up"
                  )}
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-lime-600 font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

