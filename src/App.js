import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import SideBar from "./SideBar";

import {
  Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import TabListHack from "./TabListHack";
import UpdateEmp from "./UpdateEmp";
import  Reservation from "./Reservation";
import AddHack from "./AddHack";
import ListParticipant from "./ListParticipant";
import UpdateHacaton from "./UpdateHacaton";
import ListeParticipation from "./ListeParticipation";
import Swal from "sweetalert2";
import Add from "./Add";
import ListeEmp from "./ListeEmp";
import Update from "./Update";
import Home from "./Home";
import $ from "jquery";
import { hasAuthentifcated } from "./AuthApi";
import Navbar from "./Navbar";
import Auth from "./Auth";
import LoginPage from "./LoginPage";
import ListHack from "./ListHack";
import Register from "./Register";
import TeamList from "./TeamList";
import { getUserConnected } from "./AuthApi";
import Profile from "./Profile";
import { getRoleConnected } from "./AuthApi";
import PrivateRoute from "./PrivateRoute";
import { Fragment, useContext } from "react";
import { createContext } from "react";
export const ThenmContext = createContext(null);

function App() {
  const [role, setRole] = useState("");

  const isAuthenticated = localStorage.getItem("user-info") !== null;

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Navbar />

        <Routes>
          <Route path="/Reservation/:id" element={<Reservation />} />
         
          <Route
            path="/add"
            element={
              role === "admin" ? (
                <Add />
              ) : (
                <Profile state={{ error: "matajamch tajouti l3asba" }} />
              )
            }
            isAuthenticated={isAuthenticated}
          />
          <Route
            path="/liste"
            element={
              role === "admin" ? (
                <ListeEmp />
              ) : (
                <Profile state={{ error: "tchouf l3aaaasba" }} />
              )
            }
            isAuthenticated={isAuthenticated}
          />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/AddHack" element={<AddHack />} />
          <Route path="/ListHack" element={<ListHack />} />

          <Route path="/ListParticipant" element={<ListParticipant />} />
          <Route
            path="/ListeParticipation/:id"
            element={isAuthenticated ? <ListeParticipation /> : <Navigate to="/login"></Navigate>}
          />
          <Route path="/SideBar" element={<SideBar />} />
          <Route path="/TeamList" element={isAuthenticated ? <TeamList /> : <Navigate to="/login"></Navigate>} />
          <Route path="/" element={<Home />} />
          <Route path="/TabListHack" element={<TabListHack />} />
          <Route path="/UpdateHacaton/:idHack" element={<UpdateHacaton />} />
          <Route path="/Update/:id" element={<Update />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
