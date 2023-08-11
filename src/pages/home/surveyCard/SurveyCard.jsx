/* eslint-disable react/no-unescaped-entities */


const SurveyCard = () => {
    return (
        <div>
            <div className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                <h1 className="text-3xl lg:text-5xl font-bold uppercase">Our Website Service</h1>
                <p className="font-light text-lg leading-tight lg:text-2xl tracking-wide">Let's see some most provided services in our website</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 w-10/12 gap-6 mx-auto text-center my-12">
                <div className="flex flex-col justify-center  items-center border border-blue-500 hover:bg-gradient-to-r from-cyan-100 to-blue-100 rounded-md p-8">
                    <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/354/354637.png" alt="" />
                    <div className="mt-6">
                        <h1 className="text-3xl font-bold">Student Survey</h1>
                        <p>Build a course evaluation survey for academic institutions to collect feedback from students about their courses. </p>
                    </div>
                </div>
                <div className="flex flex-col hover:bg-gradient-to-r from-cyan-100 to-blue-100 justify-center  items-center border border-blue-500 rounded-md p-8">
                    <img className="h-20" src="https://icon-library.com/images/volunteer-icon-png/volunteer-icon-png-6.jpg" alt="" />
                    <div>
                        <h1 className="text-3xl font-bold">Volunteer Survey</h1>
                        <p>Create a volunteer feedback survey for non-profit organizations to gather feedback from volunteers about their experiences.</p>
                    </div>
                </div>
                <div className="flex flex-col hover:bg-gradient-to-r from-cyan-100 to-blue-100  justify-center items-center border border-blue-500 rounded-md p-8">
                    <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/6471/6471995.png" alt="" />
                    <div>
                        <h1 className="text-3xl font-bold">Website Survey</h1>
                        <p>evaluation survey for academic institutions to collect feedback from students about their courses and instructors.</p>
                    </div>
                </div>

                <div className="flex flex-col hover:bg-gradient-to-r from-cyan-100 to-blue-100  justify-center items-center border border-blue-500 rounded-md p-8">
                    <img className="h-20" src="https://cdn-icons-png.flaticon.com/512/912/912267.png" alt="" />
                    <div>
                        <h1 className="text-3xl font-bold">Employee Survey</h1>
                        <p>Develop an employee engagement survey for human resources departments to assess employee satisfaction.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SurveyCard;