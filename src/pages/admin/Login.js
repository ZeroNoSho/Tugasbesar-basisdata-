import React from "react";
import { Link } from "react-router-dom";
import Parret from "../../lotif2.json";
import Lottie from "lottie-react";
import "../../App.css";

function LoginAdmin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-6">
          <Lottie loop={true} animationData={Parret}></Lottie>
        </div>
        <div className="col col1">
          <div className="py-4">
            <h1 className="text-center txt-login">LOGIN ADMIN</h1>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input placeholder="Enter email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>

            <Link type="submit" className="btn btn-primary kuros1 full mt-5" to="/AdminPage">
              Submit
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
