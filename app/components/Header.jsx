import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <header classname="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
       
          <form className="d-flex w-75">
            <input
              className="form-control me-2 border-"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="">
            <div className="d-flex align-items-center gap-4 position-relative">
              {/* cart */}
              <div className="cart  position-relative" current-count="8">
                <FaShoppingCart className="cart-icon"></FaShoppingCart>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-danger ">
                  99+
                  <span class="visually-hidden">unread messages</span>
                </span>
              </div>
              {/* cart */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
