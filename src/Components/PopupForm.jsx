// import { useState } from "react";

// function PopupForm({ isOpen, onClose }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     class: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Your trial request has been submitted!");
//     onClose(); // close after submit
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//           Start Free Trial
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="text"
//             name="class"
//             placeholder="Class"
//             value={formData.class}
//             onChange={handleChange}
//             required
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={formData.message}
//             onChange={handleChange}
//             className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
//             rows="3"
//           ></textarea>

//            <button
//              type="submit"
//               className="w-full bg-[#b12aff] hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group"
//             >
//               <span className="relative z-10">Submit</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PopupForm;

import { useState, useEffect } from "react";

function PopupForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });

  // Handle back button press
  useEffect(() => {
    if (isOpen) {
      // Push a new state into history so back button works
      window.history.pushState({ popup: true }, "");

      const handlePopState = (e) => {
        if (isOpen) {
          onClose(); // Close popup instead of leaving site
        }
      };

      window.addEventListener("popstate", handlePopState);

      // Cleanup when popup closes
      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state?.popup) {
          window.history.back(); // Reset history to avoid stuck states
        }
      };
    }
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your trial request has been submitted!");
    onClose(); // close after submit
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Start Free Trial
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={formData.class}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows="3"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#b12aff] hover:bg-purple-700 px-6 py-3 rounded-lg font-medium text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group"
          >
            <span className="relative z-10">Submit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
