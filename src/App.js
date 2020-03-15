import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employees from './pages/Employees'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Wrapper from "./components/wrapper";


//This is the code for the App.js which renders the given page based on the components delivered in the <Route/> in the below Navbar
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/employee" component={Employees} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
