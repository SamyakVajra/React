import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="grid md:grid-cols-5 bg-slate-700 text-white">
        <div className="col-span-1 text-center font-bold hover:text-yellow-500 text-2xl hover:underline cursor-pointer">
          Brand Name
        </div>
        <div className="md:col-span-3">Search Bar</div>
        <div className="col-span-1 flex justify-evenly py-1">
          <Link to={"/login"}>
            {" "}
            <i className="bi bi-box-arrow-in-left"></i>
          </Link>
          <Link to={"/register"}>
            <i className="bi bi-person-plus"></i>
          </Link>
          <Link to={"/cart"}>
            {" "}
            <i className="bi bi-cart"></i>
          </Link>
        </div>
      </div>

      <div className="bg-slate-400 flex justify-evenly text-white">
        <Link to="/">
          Home <i className="bi bi-house"></i>
        </Link>
        <Link to="/products">
          Products <i className="bi bi-grid"></i>
        </Link>
        <Link to="/services">
          Services <i className="bi bi-gear"></i>
        </Link>
        <Link to="/blogs">
          Blogs <i className="bi bi-copy"></i>
        </Link>
        <Link to="/contact">
          Contact <i className="bi bi-person"></i>
        </Link>
      </div>
    </>
  );
};

export default Header;
