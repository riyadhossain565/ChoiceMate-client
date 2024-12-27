import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/error.json"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-3xl text-center mt-4">Back To <Link className='text-red-600 font-bold underline' to='/'>Home</Link></h2>
            <Lottie animationData={errorAnimation} className="w-3/5 mx-auto"/>
        </div>
    );
};

export default ErrorPage;