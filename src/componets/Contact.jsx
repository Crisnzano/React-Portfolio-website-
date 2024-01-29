import React from "react";

export default function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                
                <h1 className="heading">Contact<span>me</span></h1>
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fas fa-envelope"></i>
                            <h3>Email</h3>
                            <p>crispus.nzano@gmail.com</p>
                        </div>
                        <div className="icons">
                            <i className="fas fa-phone"></i>
                            <h3>Phone</h3>
                            <p>+254741217070</p>
                        </div>
                        <div className="icons">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Address</h3>
                            <p>Sabaki, Nairobi(Kenya) </p>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <form>
                                <input type="text" placeholder="name" class="box"/>
                                <input type="email" placeholder="email" class="box"/>
                                <input type="number" placeholder="number" class="box"/>
                                <textarea placeholder="message" id="" cols="30" rows="10"></textarea>
                                <input type="submit" class="btn" value="send message"/>
                            </form>
                        </div>
                        

                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.597759847388!2d36.95225967352755!3d-1.4172673985693605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f75741a097c01%3A0x55315f130092d5b2!2sSunshine%20Gardens!5e0!3m2!1sen!2ske!4v1705786059989!5m2!1sen!2ske" allowfullscreen="" loading="lazy" ></iframe>
                    </div>

            </section>
        </div>


    );
}