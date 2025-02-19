import React, { useState } from "react";
import { AiFillMessage, AiOutlineClose } from "react-icons/ai";

import img from "../../assets/contact.png";

const Contact = () => {
  const [contactActive, setContactActive] = useState(false);

  function openContactForm() {
    setContactActive(true);
  }

  function closeContactForm() {
    setContactActive(false);
  }
  return (
    <>
      <div
        id="floating-btn"
        className="fixed bottom-20 right-5 z-[100] flex flex-col items-center justify-center md:bottom-10 "
      >
        <span
          className={`w-[70px] flex flex-col items-center justify-center p-[12px] bg-dark-400 rounded-[50%]  transition-all scale-[.80] hover:scale-[.95] cursor-pointer `}
        >
          {/* <AiFillMessage
            className="text-[30px] text-[#854ce6]"
            onClick={openContactForm}
          /> */}
          <img src={img} alt="" onClick={openContactForm} />
        </span>
      </div>

      <div className="w-screen ">
        <div
          className={`w-[380px] ${
            contactActive ? "h-[100vh]" : "h-0 overflow-hidden"
          } max-h-[450px] bg-dark-300 shadow-xl z-[999] fixed bottom-[90px] right-1 px-3 rounded-md transition-all md:right-5 md:bottom-[20px] md:w-[350px]`}
          id="form"
        >
          <div
            id="head"
            className="w-full flex flex-row items-start justify-start"
          >
            <h1 className="text-[20px] py-4 text-white font-light">
              Contact Me
            </h1>
            <AiOutlineClose
              className={`p-2 text-[35px] absolute top-[-16px] right-[-5px] text-red-200 bg-red-900 rounded-[50%] cursor-pointer ${
                contactActive ? "flex" : "hidden"
              } `}
              onClick={closeContactForm}
            />
          </div>

          {/* form  */}
          <div
            id="inputs"
            className="w-full flex flex-col items-start justify-start font-light"
          >
            <input
              type="text"
              name="name"
              className="w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none "
              placeholder="Full Name"
            />

            <input
              type="mail"
              name="email"
              className="w-full px-2 py-[12px] mb-4 rounded-md bg-dark-100 border-[2px] border-none outline-none "
              placeholder="johndoe@gmail.com"
            />

            <textarea
              cols="30"
              rows="5"
              name="message"
              className="w-full h-full bg-dark-100 resize-none rounded-md outline-none px-2 py-2 mb-3"
              placeholder="Message"
            ></textarea>
            <button className="w-full px-2 py-3  text-white text-center transition-all bg-dark-200 rounded-md hover:bg-dark-400">
              Send Message
            </button>
            {/* <button
              className="w-full px-2 py-3 text-center transition-all bg-dark-200 rounded-md hover:bg-dark-400"
              onClick={sendMessage}
            >
              {loading ? (
                <span className="text-green-200">Sending Message..</span>
              ) : (
                "Send Message"
              )}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
