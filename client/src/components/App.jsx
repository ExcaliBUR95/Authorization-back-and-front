import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  // const token = useSelector((state) => state.application.token);
  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <Routes>

  //         <Navigate to="/signin" element={<SigninPage />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
// import React from "react";
// import { useSelector } from "react-redux";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import SigninPage from "./pages/SigninPage";
// import SignupPage from "./pages/SignupPage";

// const App = () => {
//   const token = useSelector((state) => state.application.token);
//   if (!token) {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/signin" element={<SigninPage />} />
//           <Route render={() => <Navigate  to="/signin" />} />
//           {/* <Navigate to="/signin" element={<SigninPage />} /> */}
//         </Routes>
//       </BrowserRouter>
//     );
//   }
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//                <Route render={() => <Navigate  to="/signin" />} />

//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
