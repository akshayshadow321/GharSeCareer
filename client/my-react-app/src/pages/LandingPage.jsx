import LandingFeatureSection from "../components/LandingFeatureSection"
import LandingNavbar from "../components/LandingNavbar"
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <LandingNavbar></LandingNavbar>
            <div className="container mx-auto mt-15 p-10 text-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                    <div className="text-left">
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">
                            The <span className="text-orange-500">Smart</span> Choice For{" "}
                            <span className="text-blue-500">Future</span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                        "Empowering housewives through online courses to develop new skills and enhance existing ones. Explore a variety of educational resources tailored to your needs. Find flexible, work-from-home job opportunities with companies looking for skilled workers."
                        </p>
                        <div>
                            <img
                                className="rounded-lg w-[150px] h-[150px] pl-10"
                                src="./Home logo.jpeg" // Adjusted path
                                alt="About us"
                            />
                        </div>
                        <Link to="/user-path"> {/* Adjusted path for the link */}
                            <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-900">
                                Get Started as user
                            </button>
                        </Link>
                        <Link to="/employee-path"> {/* Adjusted path for the link */}
                            <button className="mt-4 bg-purple-500 text-white px-6 py-2 rounded hover:bg-purple-900">
                                Get started as employee
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}