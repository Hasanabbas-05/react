import React from 'react';
import { Link } from 'react-router-dom'; // Changed from 'react-router' to 'react-router-dom'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
           <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col sm:flex-row items-center">
                {/* Left (Text Section) */}
                <div className="flex justify-center sm:justify-center  mx-20">
                    <img
                        className="w-100 rounded-4xl shadow-2xl object-cover"
                        src="src/assets/first.jpeg"
                        alt="Hasan Abbas"
                    />
                </div>
                <div className="text-center sm:text-right sm:max-w-xl">
                    <h2 className="text-3xl sm:text-5xl font-bold italic">
                        Hasan Abbas Tharadara
                    </h2>
                    <p className="text-xl sm:text-2xl font-semibold italic mt-2">
                        Frontend Developer
                    </p>
                    <p className="text-lg sm:text-xl italic mt-2">
                        HTML5 | CSS3 | BOOTSTRAP | JAVASCRIPT
                    </p>

                    <Link
                        className="mt-6 inline-flex text-white items-center px-6 py-3 font-medium bg-gray-700 rounded-lg hover:opacity-75"
                        to="/"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        &nbsp; Download Resume
                    </Link>
                </div>


                
            </div>
        </div>

            <h1 className="text-center text-xl sm:text-4xl text-white py-5 font-medium italic bg-gray-700 mx-4 sm:mx-16 rounded-2xl mt-10">
                Work on Different Projects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-20 py-10">
                <div className="flex justify-center">
                    <img
                        className="w-72 sm:w-96 rounded-2xl shadow-2xl object-cover"
                        src="src/assets/secound.jpeg"
                        alt="image2"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        className="w-72 sm:w-96 rounded-2xl shadow-2xl object-cover"
                        src="src/assets/third.jpg"
                        alt="image3"
                    />
                </div>
                <div className="flex justify-center">
                    <img
                        className="w-72 sm:w-96 rounded-2xl shadow-2xl object-cover"
                        src="src/assets/fourth.png"
                        alt="image4"
                    />
                </div>
            </div>
        </div>
    );
}
