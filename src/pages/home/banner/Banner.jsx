/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-9/12 mx-auto my-12 ">

            <div>
                <img className="lg:w-8/12" src="https://i.ibb.co/bRk9BTB/banner-photo.jpg" alt="" />
            </div>

            <div className="w-5/6 lg:w-3/6 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl mt-6 lg:mt-0 uppercase tracking-wide">Welcome to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">InsightQuest</span></h1>
                <p className="text-gray-500 leading-tight mt-4">We propose to develop "InsightQuest," an innovative online survey platform that empowers individuals and organizations to create, distribute, and analyze surveys effortlessly. The platform aims to provide users with an intuitive and feature-rich environment to collect valuable feedback and insights from respondents.</p>
            </div>

        </div>
    );
};

export default Banner;