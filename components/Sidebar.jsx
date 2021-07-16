import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';

const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400">Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <DonutLargeIcon className=" text-gray-300" />
                            <p className=" "  >Dashbord</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ClearAllIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Venues</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowUpwardIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Add Consulation</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowUpwardIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Consulations</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowDownwardIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Add Acte</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SyncAltIcon className="text-gray-300" />
                            <p className="text-gray-600  " >Actes</p>
                        </div>
                    </div>

                </div>
                            
            </div>

        </div>
    )
}

export default Sidebar