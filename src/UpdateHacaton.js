import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import SideBar from './SideBar'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'

const UpdateHacaton = () => {
    const {idHack}=useParams();
    const [hackathon, setHackathon] = useState([]);
    const [nomHack, setNomHack] = useState("");
    const [descriptionHack, setDescriptionHack] = useState("");
    const [dateDebutHack, setDateDebutHack] = useState("");
    const [dateFinHack, setDateFinHack] = useState("");
    const [lieuHack, setLieuHack] = useState("");
    const [nbreEquipeHack, setNbreEquipeHack] = useState(0);
    const [nbreParticipantHack, setNbreParticipantHack] = useState(0);
    const [prixHack, setPrixHack] = useState("");


    useEffect(() => {
        fetch(`http://localhost:8090/hackathon/api/Hackaton/${idHack}`)
          .then((response) => response.json())
          .then((data) => {
            setHackathon(data);
            setNomHack(data.nomHack);
            setDescriptionHack(data.descriptionHack);
            setDateDebutHack(data.dateDebutHack);
            setDateFinHack(data.dateFinHack);
            setLieuHack(data.lieuHack);
            setNbreEquipeHack(data.nbreEquipeHack);
            setNbreParticipantHack(data.nbreParticipantHack);
            setPrixHack(data.prixHack);

            
          });
      }, [idHack]);
    const updateHack = {
        idHack: idHack,
        nomHack: nomHack,
        dateDebutHack: dateDebutHack,
        dateFinHack: dateFinHack,
        lieuHack: lieuHack,
        nbreParticipantHack: nbreParticipantHack,
        nbreEquipeHack: nbreEquipeHack,
        descriptionHack: descriptionHack,
        
        prixHack: prixHack,
      };
      const handleFormSubmit = (e) => {
    
      fetch(`http://localhost:8090/hackathon/api/Hackaton`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(updateHack),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
        .then((data)=>window.location.href="/TabListHack");
    };

    return ( 
      <>
      <SideBar />
      
    
   
    <div className="p-4 sm:ml-64">
        <h1 className="text-center mt-7 text-3xl font-bold  text-gray-50">
            Ajouter hackathon
        </h1>
        <form className="ccc" onSubmit={handleFormSubmit}>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="text"
                    
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={nomHack}
                 
                    onChange={(e) => setNomHack(e.target.value)}
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Hackathon title :
                </label>
            </div>
  
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="textFiled"
                      
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={descriptionHack}
                       
                        onChange={(e) => setDescriptionHack(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Description : 
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={lieuHack}
                        
                        onChange={(e) => setLieuHack(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Location :
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="date"
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={dateDebutHack}
                        
                        onChange={(e)=>setDateDebutHack(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Start date 
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="date"
                        value={dateFinHack}
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        
                        onChange={(e) => setDateFinHack(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        End date
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="number"
                        value={nbreParticipantHack}
                        
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                      
                        onChange={(e) => setNbreParticipantHack(parseInt(e.target.value))}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nomber of participants 
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="number"
                        value={nbreEquipeHack}
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        
                        onChange={(e) => setNbreEquipeHack(parseInt(e.target.value))}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nomber of equipe
                    </label>
                </div>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={prixHack}
                        onChange={(e) => setPrixHack(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        recomponse
                    </label>
                </div>
           <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" />
            {/* {renderFields()} */}
        </form>
    </div>
  </>
   
      
  
  );
  }

export default UpdateHacaton