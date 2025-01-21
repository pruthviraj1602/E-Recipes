import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <img src="/src/assets/img.jpg" alt="" className='' style={{width: '100%',height:'100%'}}/>
                    </div>
                    <div className="contact-form col-md-6 mx-auto border rounded-3">
                        <h3 className="text-center mb-4">Contact Us</h3>
                        <form id='contact-Us'>
                            <div className="mb-3">
                                <input type="text" className="form-control border-top-0 border-start-0 border-end-0 shadow" id="name" placeholder="Your Name"  required />
                            </div>
                            <div className="mb-3">
                                
                                <input type="email" className="form-control border-top-0 border-start-0 border-end-0 shadow" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                
                                <input type="text" className="form-control border-top-0 border-start-0 border-end-0 shadow" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control border-top-0 border-start-0 border-end-0 shadow" id="message" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-outline-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
