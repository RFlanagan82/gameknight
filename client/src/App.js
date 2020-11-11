import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import LoginCreateAccount from "./pages/LoginCreateAccount/LoginCreateAccount";
import CreateEditEvent from "./pages/CreateEditEvent/CreateEditEvent";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Footer from "./components/Footer/Footer";
import AuthContext from "./context/AuthContext";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt)
      console.log(jwt);
    }
  }, [jwt]);

  return (
    <Router>
      <AuthContext.Provider value={{ jwt, setJwt }}>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={LoginCreateAccount} />
            <ProtectedRoute exact path="/create-event" component={CreateEditEvent} />
            <Route exact path="/events" component={Events} />
            <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
            <Route path="/" component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
