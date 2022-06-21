
import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export function JWT(props){
    let body =  JSON.stringify({"bool" : props.correct});
    const [allUsers, setAllUsers] = useState({});
    const sendResults = async () => {
       fetch(`/api/postResults`, {
           method: "POST",
           body: body,
           headers: {"Content-Type" : "application/json"}
       }).catch((error) => ("Something went wrong"));
      }

    const getResults = async () => {
        let response;
        await Axios.get(`api/getResults`).then((response) => {
            setAllUsers(response.data);
            console.log(allUsers);

        })
    }
      useEffect(() => {
          sendResults();
          getResults();
      }, [])

      return (
          <div>TOTAL PLAYERS: {allUsers.users} TOTAL SOLVED: {allUsers.wins}</div>
      )
}