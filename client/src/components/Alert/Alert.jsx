import React, { useContext, useEffect } from "react";
import AlertContext from "../../context/AlertContext";

const Alert = () => {
  const { message, type, setAlert } = useContext(AlertContext);

    useEffect(() => {
      if (message.length) {
        setTimeout(() => {
          setAlert({ message: "", type: "" });
        }, 5000);
      }
    }, [message]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          {message && (
            <div className={`alert alert-${type || "primary"}`} role="alert">
              {message}{" "}
              <span
                style={{ float: "right" }}
                onClick={() => {
                  setAlert({ message: "", type: "" });
                }}
              >
                x
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;