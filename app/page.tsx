
"use client"
import React, { useState, useEffect } from 'react';
async function UsersLayout() {





  const [users, setUsers] = useState([])





  const res = await fetch('https://673e00450118dbfe8609ba39.mockapi.io/baghani-second', {

    cache: "no-store",
  });
  const tasks = await res.json();
  setUsers(tasks);
  console.log(tasks)


  return (
    <>
      <h1 className="flex flex-row w-full   items-center justify-center">mock api list by baghani</h1>
      <hr />
      Users:
      {
        <ul>
          {tasks.map((user) => (
            <div>
              <li key={user.id} className="flex flex-row w-full   items-center justify-center">

            

              </li>

              <li key={user.id}  className="flex flex-row w-full   items-center justify-center">
                {user.createdAt}

                <img src={user.avatar} >

                </img>

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
