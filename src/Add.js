import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  redirect,
  Navigate,
  NavLink,
} from "react-router-dom";
import Swal from "sweetalert2";
import UpdateEmp from "./UpdateEmp";
import { useEffect } from "react";
import Asba from "./Reservation";
import ListeEmp from "./ListeEmp";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

function Add() {
  const navigate = useNavigate();
  <Routes>
    <Route path="/asba" element={<Asba />} />
    <Route path="/update/:id" element={<UpdateEmp />} />
    <Route path="/add" element={<Add />} />
    <Route path="/liste" element={<ListeEmp />} />
  </Routes>;

  useEffect(() => {
    fetch("http://localhost:8090/GRH/api/employe")
      .then((response) => response.json())
      .then((data) => setEmployes(data));
  }, []);
  const [employes, setEmployes] = useState([]);
  const [cin, setCin] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const handleAddEmploye = () => {
    // code to add new employe
    const newEmploye = {
      cin: cin,
      nom: nom,
      prenom: prenom,
      email: email,
      tel: tel,
    };
    fetch("http://localhost:8090/GRH/api/employe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newEmploye),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmployes([...employes, data]);
        setCin("");
        setNom("");
        setPrenom("");
        setEmail("");
        setTel("");
      })
      //i want to redirect to the list page after adding a new employe

      .then((data) => {
        navigate("/Liste");
      })

      .then((data) => {
        console.log(data);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>lets get onther emplyes</h1>
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          value={cin}
          onChange={(e) => setCin(e.target.value)}
          placeholder="cin..."
          aria-label=".form-control-lg example"
        />
        <input
          className="form-control"
          type="text"
          placeholder="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          aria-label="default input example"
        />
        <input
          className="form-control form-control-sm"
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="prenom..."
          aria-label=".form-control-sm example"
        />
        <input
          className="form-control form-control-sm"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="mail..."
          aria-label=".form-control-sm example"
        />
        <input
          className="form-control form-control-sm"
          type="text"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="telephone..."
          aria-label=".form-control-sm example"
        />

        <button className="btn btn-success" onClick={handleAddEmploye}>
          add
        </button>
      </div>
    </div>
  );
}

export default Add;
