/* eslint-disable react/no-unescaped-entities */
import './Form.css'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from 'react-icons/md'

const Form = () => {
    return (
        <div className='formBg p-6 my-12'>
            <div className="lg:w-9/12 mx-auto my-12 h-4/6">

<div className="text-center text-white">
    <h1 className="text-3xl lg:text-5xl font-bold uppercase">Satisfaction Survey</h1>
    <p className="font-light text-lg leading-tight lg:text-2xl tracking-wide">Help us to improve our service and customer satisfaction.</p>
</div>
<form className="bg-white shadow-md rounded mb-4 flex flex-col my-6">

<div className='flex flex-col items-center gap-2 justify-center pt-4 py-4 bg-gray-100'>
        <h2 className='uppercase font-bold text-sm text-gray-500'>Progress</h2>
        <p className='w-9/12 bg-white h-6'></p>
    </div>
    
    <div className="-mx-3 md:flex px-8 pt-6 pb-8 mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">

            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="First Name" name="firstName" />
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Last Name" name="lastName" />
            <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Your Email" name="email" />
        </div>
        <div className="md:w-1/2 px-3">

            <div className="relative">
                <select className="block w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded mb-3" id="grid-state" name="country">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Bangladesh</option>
                    <option>Peru</option>
                </select>

            </div>

            <div className="-mx-3 md:flex items-center mb-2">

                <div className=" px-3">
                    <input className=" block  bg-grey-lighter text-grey-darker border border-grey-lighter rounded mb-3 py-3 px-4" id="grid-zip" type="number" name="increment" placeholder="None" />
                </div>
                <p>Your incrementer</p>
            </div>
            <div className="-mx-3 md:flex items-center mb-2">

                <div className=" px-3">
                    <input className=" block  bg-grey-lighter text-grey-darker border border-grey-lighter rounded mb-3 py-3 px-4" id="grid-zip" type="text" name="age" placeholder="Age" />
                </div>
                <div className="flex gap-5">
                    <input type="radio" name="male" className="radio-md radio-secondary" checked />
                    <p>Male</p>
                    <input type="radio" name="female" className="radio-md radio-secondary" />
                    <p>Female</p>
                </div>
            </div>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center gap-4 mt-4'>
        <p className="text-center font-bold">Do you accept <a className="btn-link text-blue-600" href="#">terms and conditions</a> ?</p>
        <input id="chck" type="checkbox"/>
            <label htmlFor="chck" className="check-trail">
                <span className="check-handler"></span>
            </label>

    </div>
    <div className='flex gap-2 justify-center mt-4 py-4 bg-gray-100'>
        <button className='btn btn-sm text-white hover:bg-[#1abc9c] hover:text-white border-0 rounded-none bg-gray-400 px-6'> <MdOutlineKeyboardArrowLeft/> backward</button>
        <button className='btn btn-sm text-white hover:bg-[#1abc9c] hover:text-white border-0 rounded-none bg-gray-400 px-6'>Forward <MdOutlineKeyboardArrowRight/></button>
    </div>
</form>



</div>
        </div>
    );
};

export default Form;