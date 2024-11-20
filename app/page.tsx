
"use client"
import React, { useState, useEffect } from 'react';
async function UsersLayout() {





  const [users, setUsers] = useState([])





  const res = await fetch('https://673e00450118dbfe8609ba39.mockapi.io/baghani', {

    cache: "no-store",
  });
  const tasks = await res.json();
  setUsers(tasks);
  console.log(tasks)


  return (
    <>
      <h1>Users Pages Breadcrumb</h1>
      <hr />
      Users:
      {
        <ul>
          {tasks.map((user) => (
            <div>
              <li key={user.id}>{user.name}

                <img src={user.avatar} >

                </img>

              </li>

              <li key={user.id}>{user.createdAt}



              </li>
            </div>





          ))}
        </ul>
      }
      <hr />

    </>
  );
}

export default UsersLayout;
