import React from 'react'

import Card from './Card'
import Middle from './Middle'





const Container = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
            <div className="flex flex-col flex-wrap sm:flex-col md:flex-row p-4 ">
                <Card title="Venues" nb={62}  />
                <Card title="Consultations" nb={77} />
                <Card title="Actes" nb={95}/>                
            </div>
            <div className="flex items-center justify-center  ml-3 mt-6 space-x-6  mr-4">
                <Middle />
            </div>
        </div>
    )
}

export default Container