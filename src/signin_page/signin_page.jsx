import React, { useState,useContext } from "react";
import "./signin_page.css";
import { useNavigate } from "react-router-dom";
import Footer1 from "../Footer/footer1";
import SigninHeader from "../Header/sign_in_header";
import Footer2 from "../Footer/footer2";
import Footer3 from "../Footer/footer3";
const URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const SigninPage = () => {
 
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [passErrorMsg, setPassErrorMsg] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // const data = useRef();
  const blurHandler = () => {
    setErrorMsg("");
    setMessage("");
  };

  const emailChangeHandler = (e) => {
    setData({ ...data, email: e.target.value });
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setErrorMsg("please enter a valid Email");
    } else {
      setErrorMsg("");
    }
  };

  const passChangeHandler = (e) => {
    setData({ ...data, password: e.target.value });
    if (e.target.value.match(/[^a-zA-Z0-9]/) || e.target.value.length < 6) {
      setPassErrorMsg("Must be atleast 6 characters");
    } else {
      setPassErrorMsg("");
    }
  };
// handle signin and routing to home page
  const submitHandler =async (e) => {
    e.preventDefault();
    const { email, password } = data;
    await fetch(`/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.user);
        if (data.status === "Failed") {
          setMessage(data.message);
        } else {
          const token = data.token;
          const user=JSON.stringify( data.user);
          localStorage.setItem('token',token)
          localStorage.setItem('userData',user)
          navigate("/home");
        }
      })
      .catch((e) => {
        console.log(e);
        setMessage("Server down. try after sometime !!");
      });
  };
  return (
    <>
    <SigninHeader></SigninHeader>
    <div className="container">
      <section className="section-1">
        <section className="section-1-content">
        <h1 className="section1_title">Laundry Service</h1>
        <h4 className="section1_para">Doorstep Wash & Dryclean Service</h4>
        <p className="section1_para1">Don't Have An Account?</p>
        <div  className="section1-btn" onClick={()=>{navigate("/")}}>
          Register
        </div>
        </section>
      </section>
      <section className="section-2">
        <h1 className="section2_title">SIGN IN</h1>
        <form className="section2_form" onSubmit={submitHandler}>
          <div id="float-label">
            <input
              type="text"
              onBlur={blurHandler}
              onChange={emailChangeHandler}
              required
            />
            <label htmlFor="email">Mobile/Email</label>
            <p className="section2_error_message">{errorMsg}</p>
          </div>
          <div id="float-label">
            <input
              type="password"
              required
              onBlur={blurHandler}
              onChange={passChangeHandler}
              name="password field"
            />
            <label htmlFor="email">Password</label>
          </div>
          <p className="section2_error_message">{passErrorMsg}</p>
          <p className="section2_forget">forget password ?</p>
          <p className="section2_error_message">{message}</p>
          <button className="section2_btn" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </div>
    <Footer1></Footer1>
    <Footer2></Footer2>
    <Footer3></Footer3>
    </>
  );
};

export default SigninPage;
