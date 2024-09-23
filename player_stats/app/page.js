'use client';

import {useState} from 'react'
import{ clearFieldsAndShowSuccess } from "./utils/formUtils.jsx"

export default function Home() {
  
  const [playerName, setPlayerName] = useState("");
  const [club, setClub] = useState("");
  const [position, setPosition] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="p-12 bg-blue-200 text-gray-800 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-start">Welcome!</h1>
      <p className="mt-4 text-lg">This is an application that displays a named player's stats.</p>

      <div className="max-w-md mx-auto mt-10">
            
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="player_name"
                id="player_name"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="player_name"
                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Player Name
              </label>
            </div>

           
            <div className="relative z-0 w-full mb-6 group">
              <select
                name="club"
                id="club"
                value={club}
                onChange={(e) => setClub(e.target.value)}
                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option value="Atletico Madrid" selected>Atletico Madrid</option>
                <option value="Arsenal">Arsenal</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Bayern Munich">Bayern Munich</option>
                <option value="Chelsea">Chelsea</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Manchester City">Manchester City</option>
                <option value="Manchester United">Manchester United</option>
                <option value="Paris Saint-Germain">Paris Saint-Germain</option>
                <option value="Real Madrid">Real Madrid</option>
                <option value="Tottenham">Tottenham</option>
              </select>
              <label
                htmlFor="club"
                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Club
              </label>
            </div>

            
           <div className="relative z-0 w-full mb-6 group">
              <select
                name="position"
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              >
                <option value="GK"selected>GK</option>
                <option value="CB">CB</option>
                <option value="LB">LB</option>
                <option value="RB">RB</option>
                <option value="DM">DM</option>
                <option value="CM">CM</option>
                <option value="AM">AM</option>
                <option value="LW">LW</option>
                <option value="RW">RW</option>
                <option value="CF">CF</option>
              </select>
              <label
                htmlFor="position"
                className="absolute text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Position
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
               
                onClick={() =>
                  clearFieldsAndShowSuccess(setPlayerName, setClub, setPosition, setSuccessMessage)
                }

              >
                View Player Stats
              </button>
            </div>

            {successMessage && (
              <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
                 {successMessage}
              </div>
            )}

          </div>

    </div>
  );
}
