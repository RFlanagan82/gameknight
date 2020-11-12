import React from "react";
const AlertContext = React.createContext({
  message: "",
  type: "",
  setAlert: () => {},
});

export default AlertContext;