import Lottie from "lottie-react";
import loginAnimation from "../assets/animation/login-animation.json";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
  const navigate = useNavigate();
  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  // email password signin
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });
    //user login
    try {
      await signInUser(email, password);
      toast.success("SignIn successfull");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  // google signin
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();

      toast.success("SignIn Successfull");
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <form className="card-body pb-3" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white bg-[#ff7361] transition-all hover:bg-[#2f3239]">
                Login
              </button>
            </div>
          </form>
          <div className="mb-4 flex items-center">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-md text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* google sign-in */}
          <div
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center w-5/6 mx-auto mb-4 text-gray-600 transition-colors duration-300 transform border rounded-lg hover:bg-gray-200"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </div>
          {/* Register btn */}
          <div className="mb-4 text-center text-sm font-bold text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link to="/register" className="text-[#ff7361] hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
