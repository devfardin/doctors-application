import React from 'react'
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
    return (
        <div className='text-center flex justify-center items-center h-screen w-full'>

            <ScaleLoader
                color="#36d7b7"
                radius={3}
                speedMultiplier={1}
                width={5}/>

        </div>
    )
}

export default Loading