import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import SideBar from './SideBar';


const AddHack = () => {
    
    const [nomHack, setNomHack] = useState(null);
    const [descriptionHack, setDescriptionHack] = useState(null);
    const [dateDebutHack, setDateDebutHack] = useState(null);
    const [dateFinHack, setDateFinHack] = useState(null);
    const [lieuHack, setLieuHack] = useState(null);
    const [nbreEquipeHack, setNbreEquipeHack] = useState(0);
    const [nbreParticipantHack, setNbreParticipantHack] = useState(0);
    const [prixHack, setPrixHack] = useState(null);

    const handleFormSubmit = async () => {
        


        if(!nomHack || !descriptionHack || !dateDebutHack || !dateFinHack || !lieuHack || !nbreEquipeHack || !nbreParticipantHack || !prixHack) {
            alert('Veuillez remplir tous les champs')
            return
        }
        if(nbreEquipeHack < 0 || nbreParticipantHack < 0 || prixHack < 0) {
            alert('Veuillez entrer des valeurs positives')
            return
        }
        if(dateDebutHack > dateFinHack) {
            alert('La date de début doit être inférieure à la date de fin')
            return
        }
        const addHac= await axios.post('http://localhost:8090/hackathon/api/Hackaton', {
            nomHack: nomHack,
            descriptionHack: descriptionHack,
            dateDebutHack: dateDebutHack,
            dateFinHack: dateFinHack,
            lieuHack: lieuHack,
            nbreEquipeHack: nbreEquipeHack,
            nbreParticipantHack: nbreParticipantHack,
            prixHack: prixHack
        })
        if(addHac.status === 200) {
            alert('Hackathon ajouté avec succès')
            
        } else {
            alert('Erreur lors de l\'ajout du hackathon')
        }

    }

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
                      
                      onChange={(e)=>setDateDebutHack(e.target.value)}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Start date 
                  </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input
                      type="date"
                     
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

export default AddHack