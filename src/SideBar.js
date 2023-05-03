import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => {

    const handellogout=()=>{
       
        localStorage.clear();
        window.location.href="/login";

      }
    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-violet-800 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 zzz">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                        <a href="/" className="flex items-center font-bold text-3xl text-white">
                            <svg viewBox="0 0 24 24" className="w-10 h-10 mr-2 fill-current">
                                <path d="M12 2c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                            </svg>
                            HACKATHON
                        </a>
                            
                        </div>
                        
                    </div>
                </div>
            </nav>

            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-violet-800 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-violet-800 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to={"/dash"}>
                            <a
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-indigo-950 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-500 transition duration-75 text-white group-hover:text-white-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                </svg>
                                
                                <span className="ml-3"  >Dashboard</span>
                            </a>
                            </Link>
                        </li>
                    
                    
                        <li>
                            <Link to='/TeamList'>
                            <a
                                
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-indigo-950 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group white dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Teams</span>
                            </a>
                            </Link>
                        </li>
                            <li>
                            <Link to='/ListParticipant'>
                            <a
                                
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-indigo-950 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group white dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Participant</span>
                            </a>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="/TabListHack"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-indigo-950 dark:hover:bg-gray-700"
                            >
                                <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/30  /null/external-hackathon-ux-and-ui-flaticons-flat-flat-icons.png"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Hackathons</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-indigo-950 dark:hover:bg-gray-700"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap" onClick={handellogout}> Logout</span>
                            </a>
                        </li>
                    
                    </ul>
                </div>
            </aside>
            
            
            
        </>
    );
}

export default SideBar