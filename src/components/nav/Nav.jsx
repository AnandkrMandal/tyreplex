import React from "react";

function Nav() {
  return (
    <div>
      <div className="navbar bg-[#100C08] text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button"  className="btn btn-ghost lg:hidden ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#100C08]  text-white rounded-lg  z-50 mt-3 w-60 p-5 shadow"
            >
              <li>
                <a>Car Tyres</a>
              </li>
              <li>
              <details >
                <summary>Bike Tyres</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>MRF Tyre</a>
                  </li>
                  <li>
                    <a>CEAT Tyre</a>
                  </li>
                </ul>
              </details>
              </li>
              <li>
              <a>Tyre Pressure</a>
              </li>
              <li>
              <a>Commercial Tyres</a>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 w-40" >
                  <li>
                    <a>Cashback Offer</a>
                  </li>
                  <li>
                    <a>Find Tyre Dealer</a>
                  </li>
                  <li>
                    <a>Campare Tyre</a>
                  </li>
                </ul>
              </details>
            </li>
            </ul>
          </div>
          <a className="bg-white p-2 rounded-lg"><img src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo.png?tr=w-150,q-60"  alt="TyrePlex"   /></a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal z-50 px-1 ">
            <li>
              <a>Car Tyres</a>
            </li>
            <li>
              <details >
                <summary>Bike Tyres</summary>
                <ul className="p-2 w-40">
                  <li>
                    <a>MRF Tyre</a>
                  </li>
                  <li>
                    <a>CEAT Tyre</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Tyre Pressure</a>
            </li>
            <li>
              <a>Commercial Tyres</a>
            </li>
            <li>
              <details>
                <summary>More</summary>
                <ul className="p-2 w-40" >
                  <li>
                    <a>Cashback Offer</a>
                  </li>
                  <li>
                    <a>Find Tyre Dealer</a>
                  </li>
                  <li>
                    <a>Campare Tyre</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end pr-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
        </svg>
          <a>Login</a> 
        </div>
      </div>
    </div>
  );
}

export default Nav;
