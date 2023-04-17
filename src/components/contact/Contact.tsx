import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { currentPageNumber } from "../../store/slice/home";
import Arrow from "../arrow/Arrow";
import MotionBtn from "../buttons/MotionBtn";

const Contact = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentPageNumber(3));
  }, []);

  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center relative "
    >
      <h1 className="text-2xl font-bold mb-3 pt-24 hidden md:block ">
        Contact
      </h1>
      <div className="grid h-screen  pt-24 md:pt-0 ">
        <div>
          <form action="" className="flex md:w-1/2 flex-wrap">
            <div className="mb-5 w-full md:w-1/2 md:pr-5">
              <div>
                <label htmlFor="firstName">First Name</label>
              </div>
              <input
                id="firstName"
                type="text"
                className="border border-black w-full  p-2 rounded focus:outline-blue-500"
                placeholder="First name"
              />
            </div>

            <div className="mb-5 w-full md:w-1/2">
              <div>
                <label htmlFor="lastName">Last Name</label>
              </div>
              <input
                id="lastName"
                type="text"
                className="border border-black w-full  p-2 rounded  focus:outline-blue-500"
                placeholder="Last name"
              />
            </div>
            <div className="mb-5 w-full">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <input
                id="email"
                type="email"
                className="border border-black w-full  p-2 rounded focus:outline-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="mb-5 w-full">
              <div>
                <label htmlFor="message">Message</label>
              </div>
              <textarea
                id="message"
                className="border border-black w-full p-2 rounded h-44 md:h-52 focus:outline-blue-500"
                placeholder="Message"
              />
            </div>

            <div className="w-full">
              <MotionBtn name="Send" bg="bg-black" text="text-white" font="" padding="p-3" />
            </div>
          </form>
          <div className="mt-5 md:mt-0 ">
            <Arrow navigate="/" arrow="arrow_upward" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
