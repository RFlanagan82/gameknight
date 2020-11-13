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
import AlertContext from "./context/AlertContext";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import "./App.css";

function App() {
  const [alert, setAlert] = useState({
    message: "",
    type: "",
  });
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  }, [jwt]);

  return (
    <Router>
      <AlertContext.Provider value={{ ...alert, setAlert: setAlert }}>
      <AuthContext.Provider value={{ jwt, setJwt }}>
        <div className="d-flex flex-column min-vh-100 darkFiller">
          <Navbar jwt={jwt} setJwt={setJwt}/>
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
      </AlertContext.Provider>
    </Router>
  );
}

export default App;
