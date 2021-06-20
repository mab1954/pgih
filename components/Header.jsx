import React, { useState } from "react";
import Link from "next/link";

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between p-4">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="pl-4 flex items-center">
              <a
                className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <svg
                  className="h-8 fill-current inline"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512.005 512.005"
                >
                  <rect
                    fill="#2a2a31"
                    x="16.539"
                    y="425.626"
                    width="479.767"
                    height="50.502"
                    transform="matrix(1,0,0,1,0,0)"
                  />
                  <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                  />
                </svg>
                PGIH
              </a>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto mt-2 p-4">
              <li className="nav-item mt-4">
                <Link href="/consultation">
                  <button className="px-8 text-white">Consultation</button>
                </Link>
              </li>

              <li className="nav-item  mt-4">
                <a
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  href="#pablo"
                >
                  <span className="ml-2">Inscription</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
