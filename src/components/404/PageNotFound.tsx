import React from 'react'
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className='mt-28'>
      <Link to={"/"}>
        <span className="text-blue-800 ">Back to home</span>
      </Link>
      <h1 className="text-2xl  mt-5 "> 404 Sorry This Page Not Found </h1>
    </div>
  );
}

export default PageNotFound