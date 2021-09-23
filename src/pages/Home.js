import React , { useState } from 'react'
import axios from 'axios'
import Cat from '../components/Cat'
import '../assets/css/global.css'


function Home() {
    return (
        <>
            <div className="d-flex justify-content-center mt-3 w-100">
                <div className="d-flex flex-column h-100">
                    <Cat/>
                </div>

            </div>

        </>
        )
}


export default Home;
