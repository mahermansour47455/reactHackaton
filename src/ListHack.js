import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'

const ListHack = () => {
    const [nomHack, setNomHack] = useState(null);
    const [descriptionHack, setDescriptionHack] = useState(null);
    const [dateDebutHack, setDateDebutHack] = useState(null);
    const [dateFinHack, setDateFinHack] = useState(null);
    const [lieuHack, setLieuHack] = useState(null);
    const [nbreEquipeHack, setNbreEquipeHack] = useState(0);
    const [nbreParticipantHack, setNbreParticipantHack] = useState(0);
    const [prixHack, setPrixHack] = useState(null);
    const [hackathons, setHackathons] = useState([]);
    useEffect(() => {
        
            const hackathons =  fetch('http://localhost:8090/hackathon/api/Hackaton')
            .then(response => response.json())
            .then(data => setHackathons(data))
            .catch(error => console.log(error))

        
    }, []);
    return (
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {hackathons.map((hackathon, index) => (
            <div className="max-w-sm mt-6 ml-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img
                    className="rounded-t-lg"
                    src="https://cdn.dribbble.com/users/376111/screenshots/6186726/hackathon2midloop2.gif"
                    alt=""
                />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {hackathon.nomHack}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {hackathon.descriptionHack}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                     De  :{hackathon.dateDebutHack} jusqu'a {hackathon.dateFinHack}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Localistaion:{hackathon.lieuHack}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Nombre d'equipe:{hackathon.nbreEquipeHack}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Nombre de participant:{hackathon.nbreParticipantHack}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">

                    Prix:{hackathon.prixHack}
                </p>
                <div className="button-container ">
                <Link
    to={`/reservation/${hackathon.idHack}`}
    className={`btn btn-primary text-white bg-blue-300 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${hackathon.nbreEquipeHack > 0? '' : ' disabled'}`}
    >
                        Register your team
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </Link>
 
</div>

            </div>
        </div>
          ))}
      </div>
  );
}

export default ListHack;