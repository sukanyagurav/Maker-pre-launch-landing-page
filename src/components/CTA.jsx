import React, { useRef, useState } from "react";

const CTA = () => {
  const emailRef = useRef();
  const [validateMessage, setMessage] = useState("");
  function handleEmailValdiation(e) {
    e.preventDefault();
    if (emailRef.current.value === "") {
      setMessage({type:"error",message:"Please enter your email"});
    } else if (
      emailRef.current.value
        .trim()
        .match(
          /^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/
        )
    ) {
      setMessage({type:"success",message:"Thank you for subscribing!"});

    } else {
      setMessage({type:"error",message:"Please enter a valid email address"});
    }
  }


  return (
    <section className=" relative bg-style flex flex-col items-center justify-center p-4 h-[400px]">
      <h2 className="text-center   text-white text-3xl font-semibold my-8">
        Get notified when we launch
      </h2>
      <form className="flex gap-8  w-full max-w-[600px] mx-auto flex-col md:flex-row relative pb-8">
        <input
          type="email"
          placeholder="Email address"
          className={`bg-[#093E67] py-4 px-5 rounded-full  text-white font-semibold md:flex-1 ${validateMessage.type==='error' && "border-2 border-red-500 animate-wiggle"}`}
          required
          ref={emailRef}
        />
        <button
          className="p-3 bg-[#3EEAE7] rounded-full md:flex-[0.4] transition-all duration-300 hover:scale-[1.05] "
          onClick={handleEmailValdiation}
        >
          {" "}
          Get notified
        </button>
        <span className={`text-white absolute bottom-0 block left-4 ${validateMessage.type === "success" ? "!text-[#3EEAE7] animate-bounce" : "!text-red-500"}`}>{validateMessage.message}</span>
      </form>
    
    </section>
  );
};

export default CTA;
