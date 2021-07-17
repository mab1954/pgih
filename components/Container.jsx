import React from 'react'

import Card from './Card'
import Middle from './Middle'





const Container = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
            <div className="flex p-4 space-x-3">
                <Card title="Venues" nb={409}  />
                <Card title="Consultations" nb={300} />
                <Card title="Actes" nb={100.0790}/>                
            </div>
            <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                <Middle />
            </div>
        </div>
    )
}

export default Container