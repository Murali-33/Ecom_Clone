import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { darkLogo } from "../../assets/images/index";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

function Registraction() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPassword, setClientPassword] = useState("");
  const [clientRePwd, setClientRePwd] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucessMess, setSucessMsg] = useState("");

  const [clientNameErr, setClientNameErr] = useState("");
  const [clientEmailErr, setClientEmailErr] = useState("");
  const [clientPwdErr, setClientPwdErr] = useState("");
  const [clientRePwdErr, setClientRePwdErr] = useState("");

  //handle function start
  const handleName = (e) => {
    setClientName(e.target.value);
    setClientNameErr("");
  };

  const handleEmail = (e) => {
    setClientEmail(e.target.value);
    setClientEmailErr("");
    setEmailError("");
  };
  const handlePassword = (e) => {
    setClientPassword(e.target.value);
    setClientPwdErr("");
  };

  const handleRepassword = (e) => {
    setClientRePwd(e.target.value);
    setClientRePwdErr("");
  };
  //handle function start end here

  //Emailvalidation

  const emailvalidation = (clientEmail) => {
    return String(clientEmail)
      .toLowerCase()
      .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);
  };

  const handleRegForm = (e) => {
    e.preventDefault();
    if (!clientName) {
      setClientNameErr("Enter your name");
    }
    if (!clientEmail) {
      setClientEmailErr("Enter your email");
    } else {
      if (!emailvalidation) {
        setClientEmailErr("Enter valid email");
      }
    }
    if (clientPassword.length < 6) {
      setClientPwdErr("Password must be atleast 6 characters");
    }
    if (!clientRePwd) {
      setClientPwdErr("Confirm your password");
    } else {
      if (clientRePwd !== clientPassword) {
        setClientPwdErr("Password not matched");
      }
    }
    if (
      clientName &&
      clientEmail &&
      clientPassword &&
      clientRePwd &&
      clientPassword === clientRePwd
    ) {
      // console.log(clientName,clientEmail,clientPassword);
      setLoading(true);
      createUserWithEmailAndPassword(auth, clientEmail, clientPassword)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: clientName,
            photoURL:
              "https://pixabay.com/vectors/avatar-people-person-business-user-3680134/",
          });
          // Signed up
          // const user = userCredential.user;
          setLoading(false);
          setSucessMsg("you have login sucessfully");
          setTimeout(() => {
            navigate("/signin");
          }, 1000);
          // console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailError("Email already in use, please use different one");
          }
          // ..
        });

      setClientName("");
      setClientPassword("");
      setClientRePwd("");
      setClientEmail("");
    }
  };
  return (
    <div className="w-full">
      <div className="w-full pb-10">
        <form className="w-[350px] mx-auto flex flex-col items-center">
          <img className="w-40 mx-auto mt-0" src={darkLogo} alt="" />
          <div className="w-full border border-zinc-200 rounded-lg p-6">
            <h2 className="font-sans text-3xl font-medium mb-4">
              Create Account
            </h2>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Your name</p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full  py-1 border border-zink-600 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="text"
                  required
                />
                {clientNameErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {clientNameErr}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium mt-2">
                  Email or Mobile number
                </p>
                <input
                  onChange={handleEmail}
                  value={clientEmail}
                  className="w-full lowercase py-1 border border-zink-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100 font-Arial"
                  type="email"
                  required
                />
                {clientEmailErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {clientEmailErr}
                  </p>
                )}
                {emailError && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {emailError}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">Password</p>
                <input
                  onChange={handlePassword}
                  value={clientPassword}
                  className="w-full py-1 border border-zink-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  required
                />
                {clientPwdErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {clientPwdErr}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2 ">
                <p className="text-sm font-medium">Re-enter Password</p>
                <input
                  onChange={handleRepassword}
                  value={clientRePwd}
                  className="w-full py-1 border border-zink-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100"
                  type="password"
                  required
                />
                {clientRePwdErr && (
                  <p className="text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5">
                    <span className="italic font-titleFont font-extrabold text-base">
                      !
                    </span>
                    {clientRePwdErr}
                  </p>
                )}
                {/* <p className='text-sm text-gray-900 mt-3'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p> */}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="w-full mt-4 bg-yellow-400 rounded-md cursor-pointer py-1.5 hover:bg-yellow-500 active:bg-yellow-700"
                  type="button"
                  onClick={handleRegForm}
                >
                  Continue
                </button>
                {loading && (
                  <div className="flex justify-center">
                    <RotatingLines
                      visible={true}
                      height="50"
                      width="50"
                      color="#fedb69"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                )}
                {sucessMess && (
                  <div>
                    <p class=" bg-green-300 text-green-600 border border-green-600 px-4 py-2 rounded">
                      {sucessMess}
                    </p>
                  </div>
                )}
              </div>
              <p className="font-semibold text-xs mt-6">Buying for work?</p>
              <p className="text-blue-600 text-xs mt-2 hover:text-orange-600">
                Shop on Amazon Business
              </p>
              <Link to="/signin">
                <Link to="/signin">
                  <p className="text-xs text-gray-600 mt-4 cursor-pointer group">
                    <span className="text-xs font-semibold text-black">
                      Already have an account?
                    </span>{" "}
                    <ArrowRightIcon />
                    <span className="text-blue-600 group-hover:text-orange-600 group-hover:underline">
                      Sign in?
                    </span>
                  </p>
                </Link>
              </Link>
              <p className="text-xs text-black mt-4 leading-4">
                By continuing, you agree to Amazon's{" "}
                <span className="text-blue-600">Conditions of Use</span> and{" "}
                <span className="text-blue-600">Privacy Notice.</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registraction;
