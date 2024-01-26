import React, { useState } from 'react'; 
import darkLogo from '../../assets/images/amazondarklogo.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link } from "react-router-dom";

function Signin() {
  const [email,setEmail] = useState("");
  const [password,setpassword] = useState("");
  const [emailErr ,setEmailErr] = useState("");
  const [passwordErr ,setPasswordErr] = useState("");

  const handleEmail = (e)=>{
    setEmail(e.target.value)
    setEmailErr("");
  }
  const handlePassword =(e)=>{
    setpassword(e.target.value);
    setPasswordErr("");
  }

  const emailValidation = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
  }

  const handleSubmitForm =(e)=>{
    e.preventDefault();
    if(!email){
      setEmailErr("Enter your Email")
    }else{
      if(!emailValidation){
        setEmailErr("Enter valid email")
      }
    }
    if(!password){
      setPasswordErr("Enter your password")
    }else{
      if(password.length <6 ){
        setPasswordErr("Password not matched")
      }
    }
    if(email && password){
      console.log(email,password);
      setEmail("");setpassword("");
    }
  }
  return (
    <div className='w-full'>
      <div className='w-full pb-10'>
      <form className='w-[350px] mx-auto flex flex-col items-center'>
        <img className='w-40 mx-auto mt-0' src={darkLogo} alt="darkLogo" />
        <div className='w-full border border-zinc-200 rounded-lg p-6'>
          <h2 className='font-titleFont text-3xl font-medium mb-4'>Sign in</h2>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Email or mobile phone number</p>
              <input value={email} onChange={handleEmail} className='w-full lowercase  py-1 border border-zink-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type="email" required/>
              {
                emailErr && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{emailErr }</p>
                )
              }
            </div>
            <div className='flex flex-col gap-2 '>
              <p className='text-sm font-medium'>Password</p>
              <input value={password} onChange={handlePassword} className='w-full lowercase py-1 border border-zink-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput duration-100' type='password' required/>
              {
                passwordErr && (
                  <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'><span className='italic font-titleFont font-extrabold text-base'>!</span>{passwordErr}</p>
                )
              }
            </div>
            <div className='flex flex-col gap-2'>
            <button onClick={handleSubmitForm}  className='w-full mt-4 bg-yellow-400 rounded-md cursor-pointer py-1.5 hover:bg-yellow-500 active:bg-yellow-700'>Continue</button>
            </div>
            <p className='text-xs text-black mt-4 leading-4'>By continuing, you agree to Amazon's <span className='text-blue-600'>Conditions of Use</span> and <span className='text-blue-600'>Privacy Notice.</span></p>
            <p className='text-xs text-gray-600 mt-4 cursor-pointer group'><ArrowRightIcon/><span className='text-blue-600 group-hover:text-orange-600 group-hover:underline'>Need help?</span></p>
             <span class="border-t border-gray-400 my-8 mt-2"></span>
             <p className='font-semibold text-xs mt-0'>Buying for work?</p>
             <p className='text-blue-600 text-xs mt-2 hover:text-orange-600' >Shop on Amazon Business</p>
          </div>
        </div>
        <p className='w-full text-xs text-gray-600 flex mt-4 items-center'>
          <span className='w-1/3 h-[1px] bg-zinc-300 inline-flex'></span>
          <span className='w-1/3 text-center'>New to Amazon?</span>
          <span className='w-1/3 h-[1px] bg-zinc-300 inline-flex'></span>
        </p>
        <Link to='/register' className='w-full'>
        <button type='button' className='w-full py-1.5 rounded mt-4 text-sm font-normal border active:border-yellow-800 hover:bg-gradient-to-b border-zinc-400 bg-gradient-to-t from-slate-200 to-slate-100 active:amazonInput'>Create your Amazon Account</button>
        </Link>
      </form>
      </div>
    </div>
  )
};

export default Signin
