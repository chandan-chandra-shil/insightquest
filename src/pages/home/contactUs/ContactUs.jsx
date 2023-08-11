import React from 'react';
import emailjs from '@emailjs/browser';
import image from '../../../assets/8690678_3969587-removebg-preview.png'
const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ivnxb8', 'template_emp9mt7', e.target, 'vAYtHAxSWXPuXwhw1')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.log('Error sending email:', error.text);
            });

        e.target.reset();
    };

    return (
        <div className="grid md:grid-cols-2 gap-4 mx-auto items-center bg-gray-200">
            <div className="flex flex-col  items-center justify-center md:mr-4 p-5">
               
                <img src={image} alt="" />
            </div>
            <div className='p-5'>
                <form onSubmit={handleSubmit} className=" rounded-lg shadow-sm p-2">
                    <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">Let’s chat and get a quote!</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
                        <input type="text" name="name" id="name" required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
                        <input type="email" name="email" id="email" required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
                        <textarea name="message" id="message" rows="4" required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Send Message</button>
                </form>
            </div>
        </div>

    );
};

export default ContactUs;