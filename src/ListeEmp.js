import { useEffect } from "react"
import { useState } from "react"
import Swal from "sweetalert2"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { Navigate } from "react-router-dom"



export default function ListeEmp() {
    function deleteemp(id) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:8090/GRH/api/employe/${id}`, {
          method: 'DELETE'
        })
        .then(() => {
          setEmployes(employes.filter((employe) => employe.id !== id));
        });
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }

    const [employes, setEmployes] = useState([]);

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('user-info') !== null;

      if (!isAuthenticated) {
        return <Navigate to="/login" />;
      }
        fetch('http://localhost:8090/GRH/api/employe')
            .then((response) => response.json())
            .then((data) => setEmployes(data));
    }, []);

    return (
        <div>
            <h1>les employes</h1>
        
         <table className="table">
         <thead>
           <tr>
             <th scope="col">#</th>
             <th scope="col">cin</th>
             <th scope="col">nom</th>
             <th scope="col">prenom</th>
             <th scope="col">mail</th>
             <th scope="col">tel</th>
             <th scope="col">action</th>
           </tr>
         </thead>
         <tbody>
           {employes.map((employe, index) => (
             <tr key={index}>
               <th scope="row">{employe.id}</th>
               <td>{employe.cin}</td>
               <td>{employe.nom}</td>
               <td>{employe.prenom}</td>
               <td>{employe.email}</td>
               <td>{employe.tel}</td>
               <td>
                
                 <button className="btn btn-danger" onClick={() => deleteemp(employe.id)}>delete</button>
                  <Link to={`/update/${employe.id}`} className="btn btn-primary">Update</Link>

                 
                  
                
                 
 
               </td>
 
             </tr>
           ))}
         </tbody>
       </table>
        </div>

    )
}