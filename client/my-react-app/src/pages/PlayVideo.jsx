import React, { useState } from "react";

const PlayVideo = () => {
    let vdscr = "https://www.youtube.com/embed/xNRJwmlRBNU?si=COm_qVAHzj2dSv4R";

    // State to manage the visibility of each dropdown
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Handle the toggle of dropdowns
    const handleDropdownToggle = (reference) => {
        // If the clicked reference is already active, close it, otherwise open it
        setActiveDropdown(activeDropdown === reference ? null : reference);
    };

    return (
        <div style={{ padding: "15px" }}>
            {/* Use a div with Bootstrap container class */}
            <div className="container" style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "flex-start" }}>

                {/* Bootstrap 5 Video Embed with aspect ratio */}
                <div className="ratio ratio-16x9" style={{ maxWidth: "800px", width: "100%" }}>
                    <iframe
                        src={vdscr}
                        title="video"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Course Content Sidebar (Now on the right side) */}
                <div className="w-full md:w-1/3 bg-white p-4 overflow-y-auto flex flex-col justify-between" style={{ marginLeft: "20px" }}>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Course Content</h2>

                    {/* Section 1 */}
                    <div className="mb-4">
                        <button className="w-full text-left bg-gray-200 px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-300">
                            Lessons <span className="text-sm text-gray-500">(6/6 | 26m)</span>
                        </button>
                        <ul className="mt-2 ml-4 border-l-2 border-gray-300 pl-4">
                            <li className="mb-2 text-gray-600 hover:text-gray-800 cursor-pointer">Welcome</li>
                            <li className="mb-2 text-gray-600 hover:text-gray-800 cursor-pointer">Overview</li>
                            <li className="mb-2 text-gray-600 hover:text-gray-800 cursor-pointer">Course Objectives</li>
                            <li className="mb-2 text-gray-600 hover:text-gray-800 cursor-pointer">Meet the Instructor</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-4">
                        <button className="w-full text-left bg-gray-200 px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-gray-300">
                            References
                        </button>
                        <ul className="mt-2 ml-4 border-l-2 border-gray-300 pl-4">
                            {[{
                                label: "Utility-First Example",
                                link: "https://example.com/utility-first"
                            }, {
                                label: "Working with Colors",
                                link: "https://example.com/colors"
                            }, {
                                label: "Container & Spacing",
                                link: "https://example.com/container-spacing"
                            }, {
                                label: "Typography",
                                link: "https://example.com/typography"
                            }, {
                                label: "Width & Height",
                                link: "https://example.com/width-height"
                            }].map((item) => (
                                <li
                                    key={item.link}
                                    className="mb-2 flex-column text-gray-600 hover:text-gray-800 cursor-pointer flex  justify-between"
                                    onClick={() => handleDropdownToggle(item.link)}
                                >
                                    <div className="flex  justify-between">
                                        <span>{item.label}</span>
                                        <span className={`transform transition-transform ${activeDropdown === item.link ? "rotate-180" : "rotate-0"}`}>
                                            ▼
                                        </span>
                                    </div>

                                    {activeDropdown === item.link && (
                                        <div className="mt-2 text-blue-600">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                Click here to view the reference
                                            </a>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Centered Test Button */}
                    <div className="flex justify-center items-center mt-6">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
                            TEST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayVideo;
