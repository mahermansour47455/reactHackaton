import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

const TeamList = () => {
  const [teamList, setTeamList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = teamList.slice(firstIndex, lastIndex);
    const npages = Math.ceil(teamList.length / recordsPerPage);
    const numbers=[...Array(npages+1).keys()].slice(1);

    function prePgae() {
        if(currentPage !==firstIndex)
        {
            setCurrentPage(currentPage-1)
        }
    }
    function nextPage() {
        if(currentPage !==npages) 
        
        {
            setCurrentPage(currentPage+1)
        }
    }
    function changePage(id) {
       setCurrentPage(id)
    }



  const fetchTeams = async () => {
    try {
      const response = await axios.get('http://localhost:8090/hackathon/api/Team');
      setTeamList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTeam = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8090/hackathon/api/Team/${id}`);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const searchTeams = async (event) => {
    setSearchValue(event.target.value);
    if (event.target.value === "") {
        setTeamList(teamList);
        return;
      }
   

    try {
      const response = await axios.get(`http://localhost:8090/hackathon/api/Team/${event.target.value}`);
      setTeamList(response.data);
    } catch (error) {
      console.log(error);
    }
 
    };

  useEffect(() => {
    fetchTeams();
  }, []);
  const NoserchTeams =() =>{
    
    fetchTeams();
    setSearchValue("");
    setTeamList(teamList);

    
   
    };


  return (
    <>
      <SideBar />
      <div className="p-4 sm:ml-64">
        <div className="flex justify-between">
          <div className="relative mb-4 w-1/4">
            <input
              type="text"
              placeholder="Search by name"
              value={searchValue}
              onChange={searchTeams}
              onBlur={NoserchTeams}
              className="border border-gray-300 rounded-md py-2 px-3 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full pr-10"
            />

                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 2a7 7 0 015.932 9.986l4.023 4.023a1 1 0 11-1.414 1.414l-4.023-4.023A7 7 0 119 2zm0 2a5 5 0 100 10A5 5 0 009 4z"
                                    clipRule="evenodd"
                                    onClick={NoserchTeams}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                ID
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Description
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Delete
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Edit
                            </th>
                            

                           
                            

                            
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                        {records.map((team) => (
                            <tr key={team.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.teamName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.teamDescription}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                   
                                    <button onClick={() => deleteTeam(team.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <Link to={`/team/${team.id}`} className="btn btn-primary">
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}

                        

                        {/* add more rows here */}
                    </tbody>
                </table>
                <nav>
                    <ul className="pagination">
                        <li className="page-link">
                            <a
                                href="#"
                                className="page-link"
                                aria-label="Previous"
                                onClick={prePgae}
                                >
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                                </li>
                                {numbers.map((n,i) => (
                                    <li key={i} className="page-link">
                                        <a href="#" className="page-link" onClick={()=>changePage(n)}>
                                            {n}
                                        </a>
                                    </li>
                                ))}
                                <li className="page-link">
                                    <a
                                        href="#"
                                        className="page-link"
                                        aria-label="Next"
                                        onClick={nextPage}
                                    >
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>





                </nav>
                

                
            </div>
        </>
    );
}

export default TeamList

