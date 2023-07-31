import React from 'react'
import glassList from './Data.json'
import cyberLogo from "./glassesImage/Cyber.png"
import modal from "./glassesImage/model.jpg"
import './style.css'
import { useState } from 'react'

const GiaoDien = () => {

    // Tạo state:
    const [imgSrc, setImgSrc] = useState ('./glassesImage/v5.png')

    // Currying function:
    const handleImgSrc = (name) => () => {
        setImgSrc(`./glassesImage/v${name}.png`)
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card mb-4">
                            <div className="text-center">
                                <img src={cyberLogo} alt="Card image" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">
                                    CyberLearn - Học lập trình trực tuyến - Dự án thử mắt kính
                                    - Try glasses app online
                                </h4>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className='row'>
                            {
                                glassList.map((glass, index) => {
                                    return <div className='col-3 mt-3' key={glass.id}>
                                        <div className='card'>
                                            <img
                                                className='img-fluid p-2'
                                                src={glass.url}
                                                alt="..."
                                            />
                                            <div className="card-body p-1">
                                                <p className='mb-1 font-weight-bold'>{glass.name}</p>
                                                <p className='mb-1'>Price: {glass.price}</p>
                                            </div>
                                            <div className="card-footer p-1">
                                                <button 
                                                    className='btn btn-success'
                                                    onClick={handleImgSrc(index+1)}
                                                >Thử kính
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-4 img-fluid mt-3">
                        <img id='modal' src={modal} alt="Card image" />

                        <img id='glass' src={imgSrc} alt="..." />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default GiaoDien