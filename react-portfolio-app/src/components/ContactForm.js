import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {

    const serviceID = 'service_ID'
    const templateID = 'template_ID'
    const userID = 'user_jzKYjV448gOD2md5y78yM'
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contacts' className="contacts">
            <div className="text-center">
                <h1 className="contact-me">Get in touch!</h1>
            </div>

            <div className="container">
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <input id='name' type="text" className="form-control" name='name' placeholder='Name' />
                            <input id='phone' type="text" className="form-control" name='phone' placeholder='Phone Number' />
                            <input id='email' type="email" className="form-control" name='email' placeholder='Email ID' />
                            <input id='subject' type="text" className="form-control" name='subject' placeholder='Subject' />
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <textarea className="form-control" name="description" id="description" placeholder='Description'></textarea>
                            <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default ContactForm
