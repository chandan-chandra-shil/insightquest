import { FaPhoneAlt, FaHome, FaInbox, FaSkype, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                <div className="footer max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <span className="footer-title">About Us</span>
                        <h1>A small company providing land surveying services</h1>
                        <h1>Using time saving methods and technologies.</h1>
                        <p>One way to check your property lines is to look at the deed of the property. As a legal document about your property, the deed should have a worded description of your land’s boundaries.</p>
                    </div>
                    <div>
                        <span className="footer-title">Contact info</span>
                        <h1>Please feel free to contact us via phone, email, or this form! We respect your privacy and will never share this information with a third party. If you’d like a walk-in appointment, kindly call ahead to schedule. Thank you!</h1>
                        <h1 className='flex'><FaHome className='mr-2 mt-1' /> Bohoddarhat, Chittagong, Bangladesh.</h1>
                        <p className='flex'><FaPhoneAlt className='mr-2 mt-1' /> Telephone: +0123456789</p>
                        <p className='flex'><FaInbox className='mr-2 mt-1' /> Email: info@insightquest.com</p>
                        <p className='flex'><FaSkype className='mr-2 mt-1' /> Skype name: InsightQuest</p>
                    </div>
                    <div>
                        <span className="footer-title">Latest tweet</span>
                    </div>
                </div>
            </footer>
            <footer className="px-10 py-4 border-t bg-gray-500 text-white border-base-300">
                <div className="footer max-w-7xl mx-auto">
                    <div className="items-center grid-flow-col">
                        <p>Copyright © 2023 - All right reserved by InsightQuest</p>
                    </div>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a href='https://www.facebook.com/'><FaFacebook></FaFacebook></a>
                            <a href='https://www.linkedin.com/'><FaLinkedin></FaLinkedin></a>
                            <a href='https://twitter.com/'><FaTwitter></FaTwitter></a>
                            <a href='https://www.instagram.com/'><FaInstagram></FaInstagram></a>
                            <a href="https://youtube.com/"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;