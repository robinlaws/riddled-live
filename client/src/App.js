import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import { Home } from "./pages/Home";
import { Rules } from "./pages/Rules";
import { Stats } from "./pages/Stats";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Nav } from './components/nav.js';
import { Footer } from './components/footer.js';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [riddle, setRiddle] = useState({});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };

  resizeOps();
  window.addEventListener("resize", resizeOps);

  const getRiddle = async () => {
    Axios.get(`/api/getRiddle`).then((response) => {
      console.log(response.data);
      setRiddle(response.data)});
  }

  useEffect(() => {
    if (!user){
      setUser( {
        gamesPlayed : 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        wins: 0,
        datePlayed: new Date('2000-01-01').toISOString()
      })
    }
    window.localStorage.setItem('user', JSON.stringify(user));
    console.log(user);
  }, []);

  useEffect(() => {
    setLoading(true);
    getRiddle();
    setLoading(false);
}, []);

  if (loading){ return (<div>Loading...</div>)}
  
  return (
    <div className="App">
      <Nav />
        <Routes>
            <Route exact path="/" element={<Home riddle={riddle} user={user}/>}/>
            <Route exact path="/rules" element={<Rules/>}/>
            <Route exact path="/stats" element={<Stats user={user}/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;