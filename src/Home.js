import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className="w-2/5">
          <div className="h-52"></div>
          <h2 className="mb-7 mx-9">
            <a href="/" className="flex items-center font-bold text-3xl text-white">
              HACKATHON
            </a>
          </h2>
          <h3 className=" mx-9 text-zinc-50  text-3xl ">
            A hackathon, also known as a codefest, is a social coding event that
            brings computer programmers and other interested people together to
            improve upon or build a new software program.
          </h3>
          <div className="h-4"></div>
          <button
            type="button"
            className=" mx-9 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            <Link
              to="/ListHack"
              className=""
            >
              Consult Hackathon
            </Link>
          </button>
        </div>
      );
}

export default Home