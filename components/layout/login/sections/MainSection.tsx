import React from "react";

const MainSection = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img
              className="l-img"
              src="https://4x4-backend.divcodes.com/img/logo.svg"
              alt="IMG"
            />
            <h1 className="l-h">4X4 MOTORS</h1>
          </div>

          <form
            method="POST"
            action="https://4x4-backend.divcodes.com/login"
            className="login100-form validate-form"
          >
            <input
              type="hidden"
              name="_token"
              value="BSKbyOyOUbsKdLpIlniKSHwA278PBXhu4dKycM2E"
            />
            <span className="login100-form-title">Dashboard Login</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                required
                className="input100 outline-none"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fas fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                required
                className="input100 outline-none"
                type="password"
                name="password"
                placeholder="Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fas fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <div className="form-group row mb-0">
              <div className="col-md-8 offset-md-4">
                <span className="btn btn-link">Forgot Your Password?</span>
              </div>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
