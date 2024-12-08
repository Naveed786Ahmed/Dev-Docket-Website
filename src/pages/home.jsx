import React from 'react'
import Header from "../components/Header"
import HeroImg from "../assets/images/hero.avif"
import { FaGithub } from "react-icons/fa";
import { SiGoogledocs } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';


const Home = () => {

    let navigate = useNavigate()

    const handleGitHubRedirect = () => {
        window.open('https://github.com/Naveed786Ahmed/DevDocket', '_blank');
    };

    function goToDocs(){
        navigate("/docs");
    }

    return (
        <>
            <div className="mainBody">
                <div className="mainContainer">
                    <Header />
                    <div className="HomeHero">
                        <div className="heroleft">
                            <h1>Dev Docket API</h1>
                            <p>Dev Docket rest API for your e-commerce or shopping website prototype</p>
                            <div className="heroButtons">
                                <div className="githubBtn" onClick={handleGitHubRedirect}>
                                    <h3>View on Github</h3>
                                    <FaGithub style={{ fontSize: "20px" }} />
                                </div>
                                <div className="docsBtn" onClick={goToDocs}>
                                    <h3>Read Docs</h3>
                                    <SiGoogledocs style={{ fontSize: "20px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="heroRight">
                            <img src={HeroImg} alt="" width={"80%"} height={"90%"} />
                        </div>
                    </div>
                    <div className="homeTextInstruction">
                        <h2>Get tired of Lorem ipsum data?!</h2>
                        <h2>Didn't you find any free e-commerce API?!</h2>
                        <p>Dev Docket is your ultimate solution for ready-to-use, pseudo-real REST APIs. No need to write server-side code or deal with boring placeholder text like "Lorem Ipsum." Instantly access product data, user details, and more with simple URLs. Perfect for testing, development, and teaching purposes — all for free! Get started now and supercharge your projects with real API data.</p>
                    </div>
                    <div className="exampleCode">
                        <h3>Example Code</h3>
                        <p className='p1'>fetch('https://dev-docket-api.vercel.app')</p>
                        <p className='p2'>.then(res ={">"} res.json())</p>
                        <p className='p2'>.then(json={">"}console.log(json))</p>
                    </div>
                    <div className="resources">
                        <h3>
                            Resources
                        </h3>
                        <p>There are 2 main resources need in shopping prototypes</p>
                        <div className="ResourcesLink">
                            <p>
                                <Link to={"https://dev-docket-api.vercel.app/womenclothes"} className='resourceLink'>WomenClothes</Link>
                                <p>25 products</p>
                            </p>
                            <p>
                                <Link to={"https://dev-docket-api.vercel.app/menclothes"} className='resourceLink'>MenClothes</Link>
                                <p>07 products</p>
                            </p>
                        </div>

                    </div>
                    <div className="resources">
                        <h3>Routes</h3>
                        <p>All HTTP methods are supported</p>
                        <div className="ResourcesLink">
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/womenclothes"} className='resourceLink'>/womenclothes</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/womenclothes/2"} className='resourceLink'>/womenclothes/2</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/womenclothes/categories/casual"} className='resourceLink'>/womenclothes/categories/casual</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/womenclothes/fabrics/cotton"} className='resourceLink'>/womenclothes/fabrics/cotton</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/menclothes"} className='resourceLink'>/menclothes</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/menclothes/2"} className='resourceLink'>/menclothes/2</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/menclothes/categories/kurta"} className='resourceLink'>/menclothes/categories/kurta</Link>
                            </p>
                            <p>
                                <p>Get</p>
                                <Link to={"https://dev-docket-api.vercel.app/menclothes/fabrics/cotton"} className='resourceLink'>/menclothes/fabrics/cotton</Link>
                            </p>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home