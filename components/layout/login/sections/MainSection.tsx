import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import { handelLogin } from "../../../../helper/server/services";
import { Loading } from "../../../loading";

const MainSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await handelLogin(password, email);
    console.log(res);

    if (res.data) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("name", res.data.user.name);
      localStorage.setItem("type", res.data.user.type);
      push("/");
    } else if (res === 404) {
      toast.error("email or password is invalid");
    }
    setLoading(false);
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img className="l-img" src="/logo.png" alt="IMG" />
            <h1 className="l-h">Junkker</h1>
          </div>

          <form className="login100-form validate-form">
            <input type="hidden" />
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaEnvelope />
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <FaLock />
              </span>
            </div>
            {/* <div className="form-group row mb-0">
              <div className="col-md-8 offset-md-4">
                <span className="btn btn-link">Forgot Your Password?</span>
              </div>
            </div> */}
            <div className="container-login100-form-btn">
              <button
                onClick={(e) => handelSubmit(e)}
                className="login100-form-btn"
                disabled={loading ? true : false}
              >
                {!loading ? "Login" : <Loading className="w-14" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
