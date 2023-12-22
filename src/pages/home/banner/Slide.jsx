import { Link } from "react-router-dom"

export const Slide1 = () => {
    return <div className="hero max-md:h-[90vh] bg-primary-green min-h-[60vh]">
        <div className="hero-content  text-center">
            <div className="max-w-md">
                <h1 className="text-3xl font-medium text-white">Hello Everyone</h1>
                <p className="py-6 text-5xl font-bold">Welcome to</p>
                <div className="bg-white my-5 shadow-inner rounded-xl">
                    <img src="/logo.png" alt="" />
                </div>
                <Link to='/login'>
                    <button className="btn bg-primary-bg">Let’s Explore</button>
                </Link>
            </div>
        </div>
    </div>
}

export const Slide2 = () => {
    return <div className="hero max-md:h-[90vh] min-h-[60vh] bg-primary-green">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="bg-white my-5 shadow-inner rounded-xl">
                <img src="/logo.png" alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white">Tasker Beta</h1>
                <p className="py-6 text-4xl font-bold">Make your daily plan</p>
                <Link to='/login'>
                    <button className="btn bg-primary-bg">Let’s Explore</button>
                </Link>
            </div>
        </div>
    </div>
}

export const Slide3 = () => {
    return <div className="hero max-md:h-[90vh] min-h-[60vh] bg-primary-green">
        <div className="hero-content flex-col lg:flex-row">
            <div className="bg-white my-5 shadow-inner rounded-xl">
                <img src="/logo.png" alt="" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white">Tasker Beta</h1>
                <p className="py-6 text-4xl font-bold">Make your life easy</p>
                <Link to='/login'>
                    <button className="btn bg-primary-bg">Let&#39;s Explore</button>
                </Link>
            </div>
        </div>
    </div>
}