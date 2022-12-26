import React from "react";
import { Link } from "react-router-dom";
import Parret from "../../lotif2.json";
import Lottie from "lottie-react";
import "../../App.css";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-6">
          <Lottie loop={true} animationData={Parret}></Lottie>
        </div>
        <div className="col col1">
          <div className="py-4">
            <h1 className="text-center txt-login">LOGIN</h1>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input placeholder="Enter email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input placeholder="Password" type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary kuros1">
              <Link className="kuros" to="/home">
                Submit
              </Link>
            </button>
          </form>
          <div className="py-4">
            <p className="text-center">
              Don't have an account ? <Link to="/register">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
