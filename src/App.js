import React  from "react";
import ProfilePage from "./Page/profilePage";
import Form from "./Page/form";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";




function App() {
  return(
    <div>
      <Router>
       {/* Letakkan AuthProvider di sekitar seluruh aplikasi */}
          <div>
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </div>
      </Router>
    </div>
  );
  
}

export default App;