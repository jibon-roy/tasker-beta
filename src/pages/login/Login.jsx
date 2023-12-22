import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../utils/hooks/useAuth";

const Login = () => {
    const { googleUser, loginUser } = useAuth()
    // console.log(data)

    const handleLogin = (e) => {
        const form = e.currentTarget
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
    }
    return (
        <div className="min-h-screen flex justify-center bg-secondary-green">
            <div>
                <div className="container px-5 justify-center h-full mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <img src="/animation.gif" className="bg-white rounded-xl w-[50%]" alt="" />
                        <h1 className="title-font text-4xl py-5 font-semibold text-gray-900">Start your next level journey with assign your task.</h1>
                        <p className="leading-relaxed mt-4 text-4xl text-white">Login now.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-primary-green text-2xl text-center font-medium title-font mb-5">Account Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input required autoComplete="on" type="email" id="email" name="email" placeholder="example@mail.com" className="w-full bg-primary-bg rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                <input required autoComplete="on" type="password" id="password" name="password" className="w-full bg-primary-bg rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-primary-green text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white w-full bg-primary-green border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Login</button>

                        </form>
                        <p className="text-base text-gray-500 mt-3">Do not have an account? <Link className="text-primary-green font-semibold" to="/register">Register</Link></p>
                        <div>
                            <button onClick={googleUser} className="w-full bg-primary-bg btn text-primary-text flex justify-center hover:bg-gray-300 border-0 py-2 px-8 focus:outline-none rounded gap-2 my-5 text-lg">Continue with<FcGoogle className="text-3xl"></FcGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;