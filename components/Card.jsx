import React from 'react'


const Card = ({title, nb}) => {

    return (
        <div className="transform hover:scale-110 cursor-pointer transition delay-100 w-full md:w-4/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r from-blue-400 to-blue-300" >
            
            <p className="text-gray-200 text-xs  ">
                {title}
            </p>
            <p className="text-gray-50 text-lg  font-semibold  ">
                {nb}
            </p>
        </div>
    )
}

export default Card;