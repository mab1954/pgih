import React from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PeopleIcon from "@material-ui/icons/People";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
      <div className="p-4 space-y-14">
        <div className="space-y-4">
          <h1 className="text-gray-400">Menu</h1>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <DonutLargeIcon className=" text-gray-300" />
              <p className=" ">Dashbord</p>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <PeopleIcon className="text-gray-300" />
              <Link href="/venues">
                <a className="text-gray-600  ">Venues</a>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <LocalHospitalIcon className="text-gray-300" />
              <Link href="/consultation">
                <a className="text-gray-600  ">Add Consulation</a>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <ArrowUpwardIcon className="text-gray-300" />
              <Link href="/consultations">
                <a className="text-gray-600  ">Consulations</a>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <ArrowDownwardIcon className="text-gray-300" />
              <Link href="/acte">
                <a className="text-gray-600  ">Add Acte</a>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
              <SyncAltIcon className="text-gray-300" />
              <Link href="/actes">
                <a className="text-gray-600  ">Actes</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
