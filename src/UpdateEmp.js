import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UpdateEmp() {
  const { id } = useParams(); // Get the employee ID from the URL params

  const [cin, setCin] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8090/GRH/api/employe/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCin(data.cin);
        setNom(data.nom);
        setPrenom(data.prenom);
      });
  }, [id]);

  const handleUpdateEmp = () => {
    const updatedEmp = {
      id: id,
      cin: cin,
      nom: nom,
      prenom: prenom,
    };
  
    fetch(`http://localhost:8090/GRH/api/employe`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(updatedEmp),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
      .then((data)=>window.location.href="/liste");
      
  };

  return (
    <div>
      <h1>Update Employee</h1>
      <form>
        <div>
          <label>CIN</label>
          <input type="text" value={cin} onChange={(e) => setCin(e.target.value)} />
        </div>
        <div>
          <label>Nom</label>
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </div>
        <div>
          <label>Prenom</label>
          <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
        </div>
        <button type="button" onClick={handleUpdateEmp}>Update</button>
      </form>
    </div>
  );
}


export default UpdateEmp;
