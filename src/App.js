import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import AllUsers from "./pages/AllUsers";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        
        <Navigation />

        {/* MAIN CONTENT */}
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/data" element={<AllUsers />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
