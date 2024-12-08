import React from 'react'
import Header from '../components/Header'
import HeroImg from "../assets/images/hero.avif"
import Footer from '../components/Footer'

const Docs = () => {
    return (
        <>
            <div className="mainBody">
                <div className="mainContainer">
                    <Header />
                    <div className="DocsHero">
                        <div className="Docsleft">
                            <h1>How to use it</h1>
                            <p>DevDocket Api can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
                        </div>
                        <div className="heroRight">
                            <img src={HeroImg} alt="" width={"80%"} height={"90%"} />
                        </div>
                    </div>
                    <div className="exampleCode">
                        <h3>Get All Products</h3>
                        <p className='p1'>fetch('https://dev-docket-api.vercel.app/womenclothes')</p>
                        <p className='p2'>.then(res ={">"} res.json())</p>
                        <p className='p2'>.then(json={">"}console.log(json))</p>
                    </div>
                    <div className="exampleCode">
                        <h3>Get a Single Products</h3>
                        <p className='p1'>fetch('https://dev-docket-api.vercel.app/womenclothes/1')</p>
                        <p className='p2'>.then(res ={">"} res.json())</p>
                        <p className='p2'>.then(json={">"}console.log(json))</p>
                    </div>
                    <div className="exampleCode">
                        <h3>Get a Products by Category</h3>
                        <p className='p1'>fetch('https://dev-docket-api.vercel.app/womenclothes/categories/formal')</p>
                        <p className='p2'>.then(res ={">"} res.json())</p>
                        <p className='p2'>.then(json={">"}console.log(json))</p>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default Docs