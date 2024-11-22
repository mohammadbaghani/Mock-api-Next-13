
"use client";
import React, { useState, useEffect } from 'react';
async function UsersLayout() {





  const [users, setUsers] = useState([])





  const res = await fetch('https://673e00450118dbfe8609ba39.mockapi.io/baghani-second');
  const tasks = await res.json();
  setUsers(tasks);
  console.log(tasks)


  return (
    <>
      <h1 className="flex flex-row w-full   items-center justify-center relative top-8">mock api list by baghani</h1>
  

      {
        <ul>
          {tasks.map((user) => (
            <div className="flex flex-row w-full relative w-1/4 items-center justify-center bg-gray-400 h-6/6 me-auto ms-auto top-10 mt-4 rounded-xl rounded-lg" key={user.id} >

              <li className="flex flex-row w-full  items-center bg-gray-500 bg-opacity-10 w-80 ms-8 me-8  h-1/6 border-red-300 top-7 text-white pt-2 pb-2 justify-center rounded-md mt-2 mb-2 text-sm">

                {user.name}

                <li className="flex    w-full  items-center bg-gray-600 w-10  border-red-300  text-white justify-center rounded-full  text-sm pt-2 pb-2 me-5 ms-unset  bg-opacity-10 ">
                  {user.id}


                </li>





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
