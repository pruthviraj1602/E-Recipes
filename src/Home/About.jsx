import React from 'react'

const About = () => {
    return (
        <div>
            <div className="container-fluid mt-5 " id='about-Us'>
                <div className="row ">
                
                    <div className="col-md-12">
                        <div className="card mb-3 border-0 shadow" style={{maxWidth: '540px;'}} >
                            <div className="row g-0">
                                <div className="col-md-4 p-4">
                                    <img src="/src/assets/photo-1532980400857-e8d9d275d858.jpg" className="img-fluid rounded-start" alt="..." style={{height:'50vh',width:'100%'}}/>
                                </div>
                                <div className="col-md-8 p-4">
                                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                        <h2 className="card-title">About-Us</h2>
                                        <p className="card-text fw-bold"> we believe that cooking is not just about making food—it’s about creating memories, exploring flavors, and sharing moments with loved ones. Whether you’re an experienced chef or just starting your culinary journey, we’re here to guide you every step of the way.</p>
                                        <p className="card-text fw-bold"> Our mission is to make cooking accessible, enjoyable, and adventurous for everyone. We aim to inspire home cooks to try new recipes, discover global cuisines, and unlock their creativity in the kitchen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
