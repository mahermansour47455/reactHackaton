import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function Reservation(){
  const [nbrPlace, setNbrPlace] = useState(0);
  const [hackathon, setHackathon] = useState([]);
  const [nbrTeamavailable, setNbrTeamavailable] = useState(0);
  const [TeamDescription, setTeamDescription] = useState('');
  const { id } = useParams();
  console.log("id",id);
  useEffect(() => {
    fetch(`http://localhost:8090/hackathon/api/Hackaton/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHackathon(data);
        setNbrPlace(data.nbreParticipantHack);
      });
  }, [id]);
 

  console.log("nbrPlace",nbrPlace);
  
    const [PlayerData, setPlayerData] = useState({ names: [], emails: [], birthdates: [] });
    const [teamName, setTeamName] = useState('');
    const [playerNames, setPlayerNames] = useState([]);
    const [PlayerDateNasin, setPlayerDateNasin] = useState([]);
    const [PlayerEmail, setPlayerEmail] = useState([]);
    const [team,setTeam]=useState([]);
  
    const handleTeamNameChange = (e) => {
      setTeamName(e.target.value);
    };
    const handleTeamDescriptionChange = (e) => {

        setTeamDescription(e.target.value);
      };
  
    const handlePlayerNameChange = (e, index) => {
      const newPlayerNames = [...playerNames];
      newPlayerNames[index] = e.target.value;
      setPlayerNames(newPlayerNames);
    };
    const handlePlayerDateChange = (e, index) => {
        const newPlayerDateNasin = [...PlayerDateNasin];
        newPlayerDateNasin[index] = e.target.value;
        setPlayerDateNasin(newPlayerDateNasin);
        };
        const handlePlayerEmailChange = (e, index) => {

            const newPlayerEmail = [...PlayerEmail];
            newPlayerEmail[index] = e.target.value;
            setPlayerEmail(newPlayerEmail);
            };

  
    const handleAddPlayer = () => {
      setPlayerNames([...playerNames,'']);
      setPlayerDateNasin([...PlayerDateNasin,'']);
      setPlayerEmail([...PlayerEmail,'']);
    };
  
    const handleRemovePlayer = (index) => {
      const newPlayerNames = [...playerNames];
      newPlayerNames.splice(index, 1);
      setPlayerNames(newPlayerNames);
    };
  
    const handleAddTeam = async () => {
         try {
           
         const teamResponse = await axios.post('http://localhost:8090/hackathon/api/Team', {
           teamName: teamName,
           teamDescription: TeamDescription
           });
           setTeam(teamResponse.data);
            
           
          



        //ajouter une participation
        const participation = {
          dateParticipation: new Date(),
          note: 0,
          classement: 0,
          team: teamResponse.data,
          hackaton: hackathon,
        };
        console.log(participation);
        const participationResponse = await axios.post('http://localhost:8090/hackathon/api/participation', participation);
        console.log(participationResponse.data);

      
        const updateHack = {
          idHack: hackathon.idHack,
          nomHack: hackathon.nomHack,
          dateDebutHack: hackathon.dateDebutHack,
          dateFinHack: hackathon.dateFinHack,
          lieuHack: hackathon.lieuHack,
          nbreParticipantHack: hackathon.nbreParticipantHack,
          nbreEquipeHack: hackathon.nbreEquipeHack-1,
          descriptionHack: hackathon.descriptionHack,
          descriptionHack: hackathon.descriptionHack,
          prixHack: hackathon.prixHack,
        };
      
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
          
          
     
       
    
       
      
          // Ensuite, ajoutez les joueurs à l'équipe
          
      
          for (let i = 0; i < playerNames.length; i++) {
            const name = playerNames[i];
            const email = PlayerEmail[i];
            const birthdate = PlayerDateNasin[i];
          
      
           await axios.post('http://localhost:8090/hackathon/api/Participant', {
            teamName: teamResponse.data,
            nomPar: name,
            emailPar:email,
            dateNaissancePar:birthdate
            });
          }
      
          console.log('Team and players added successfully');
          setTeamName('');
          setPlayerData({ names: [], emails: [], birthdates: [] });
        } catch (error) {
          console.error(error);
        }

       
     
      


        
      };


    
    
    
    

    return(
      <>
      <h1 className="text-center mt-7 text-3xl font-bold  text-gray-50">
          Register Team
      </h1>
      <form className="aaa">
          <div className="relative z-0 w-full mb-6 group">
              <input
                  type="name"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleTeamNameChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Team Name
              </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input
                  type="name"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  onChange={handleTeamDescriptionChange}
              />
              <label className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  About Your Team
              </label>
          </div>
          {playerNames.map((name, index) => (
          <div key={index}>

          <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => handlePlayerNameChange(e, index)}
                      
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      First name
                  </label>
              </div>
             
              
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                  <input
                      type="date"
                      name="floating_date"
                      id="floating_date"
                      className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => handlePlayerDateChange(e, index)}                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Birth date
                  </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-white  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      onChange={(e) => handlePlayerEmailChange(e, index)}
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                      Email
                  </label>
              </div>
          </div>
          </div>
          ))
          };
           <div className="button-container flex justify-between">
          
          {playerNames.length < nbrPlace && (
  <button onClick={handleAddPlayer} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add Player</button>
)}
<div className="button-container flex justify-between">
  <button onClick={handleAddTeam} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add Team</button>
</div>
</div>



         
          
          
      </form>
  </>
);
        }


export default Reservation;

