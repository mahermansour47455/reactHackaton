import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';


const Update = () => {

    const [participation, setParticipation] = useState([]);
    const [dateParticipation, setDateParticipation] = useState("");
    const [hack, setHack] = useState("");
    const [team, setTeam] = useState("");
    
    const [classement, setClassement] = useState("");
    const [note, setNote] = useState("");


     
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8090/hackathon/api/participation/${id}`)
            .then((response) => {
                setParticipation(response.data);
                setDateParticipation(response.data.dateParticipation);
                setHack(response.data.hackaton.nomHack);
                setTeam(response.data.team.teamName);
                setClassement(response.data.classement);
                setNote(response.data.note);

            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    const datee='2023-05-01T22:45:45.000+00:00'
    console.log("participation", participation)
    const handelformsubmit=(e)=>{
        e.preventDefault();
        
        const data={
            id:id,
            dateParticipation:datee,
            note:note,
            classement:classement,
            team:participation.team,
            hackaton:participation.hackaton


        }
        console.log(data)
        fetch(`http://localhost:8090/hackathon/api/participation`,{
            method:"PUT",
            
           
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                },
                
            body:JSON.stringify(data)
        }).then((response)=>response.json())
        .then((data)=>console.log(data))
        .then((date) => window.location.href = `/ListeParticipation/${data.hackaton.idHack}`)
        .catch((error)=>console.log(error))
      
    }

  return (
    
    <>
      <SideBar />
      
    
   
    <div className="p-4 sm:ml-64">
        <h1 className="text-center mt-7 text-3xl font-bold  text-gray-50">
            Ajouter hackathon
        </h1>
        <form className="ccc"  onSubmit={handelformsubmit}>
            <div className="relative z-0 w-full mb-6 group">
                <input
                    type="date"
                    
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    value={dateParticipation && new Date(dateParticipation).toISOString().slice(0,10)}
                 
                    onChange={(e) => setDateParticipation(e.target.value)}
                />
                <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Date de participation :
                </label>
            </div>
  
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="number"
                      
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={note}
                       
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Note : 
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="number"
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={classement}
                        
                        onChange={(e) => setClassement(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Classement :
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        value={team}
                        
                        onChange={(e)=>setTeam(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Team :
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        value={hack}
                       
                        className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        
                        onChange={(e) => setHack(e.target.value)}
                    />
                    <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Hack :
                    </label>
                </div>
            </div>
            
           <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" />
            {/* {renderFields()} */}
        </form>
    </div>
  </>
   
      
  
  );
}

export default Update