import "./styles.css";
import React, { useState } from "react";
import { loginUser, registerUser } from "./Api";

export default function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>Fallout Character Creation</h1>
      <h2>Create a classic Fallout character for free!</h2>
      <div class="name">
        <fieldset>
          <label>
            <b>Name: </b>
          </label>
          <input type="text"></input>
          <label>
            <b> Age: </b>
          </label>
          <input type="text"></input>

          <label>
            <b> Gender: </b>
          </label>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </fieldset>
      </div>
      <div class="special">
        <fieldset>
          <h4>Special</h4>
          <div>
            <label>Strength </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <div>
            <label>Perception </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <div>
            <label>Endurance </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <div>
            <label>Charisma </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <div>
            <label>Intelligence </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <div>
            <label>Agility </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <div>
            <label>Luck </label>
            <input type="number" min="1" max="10"></input>
          </div>
          <p>Points must add up to 40</p>
        </fieldset>
      </div>
      <div class="traits">
        <fieldset>
          <h4>Optional Traits </h4>
          <div>
            <input type="radio"></input>
            <label> Fast Metabolism </label>
            <input type="radio"></input>
            <label> Bruiser </label>
            <input type="radio"></input>
            <label> Small Frame </label>
            <input type="radio"></input>
            <label> One Hander </label>
            <input type="radio"></input>
            <label> Finesse </label>
            <input type="radio"></input>
            <label> Kamikaze </label>
            <input type="radio"></input>
            <label> Heavy Handed </label>
            <input type="radio"></input>
            <label> Fast Shot </label>
          </div>
          <div>
            <input type="radio"></input>
            <label> Jinxed </label>
            <input type="radio"></input>
            <label> Good Natured </label>
            <input type="radio"></input>
            <label> Chem Reliant </label>
            <input type="radio"></input>
            <label> Chem Resistant </label>
            <input type="radio"></input>
            <label> Skilled </label>
            <input type="radio"></input>
            <label> Gifted </label>
          </div>
        </fieldset>
      </div>
      <div class="skills">
        <fieldset>
          <h4>Tag Skills </h4>
          <div>
            <input type="radio"></input>
            <label> Small Guns </label>
            <input type="radio"></input>
            <label> Big Guns </label>
            <input type="radio"></input>
            <label> Energy Weapons </label>
            <input type="radio"></input>
            <label> Unarmed </label>
            <input type="radio"></input>
            <label> Melee Weapons </label>
            <input type="radio"></input>
            <label> Throwing </label>
            <input type="radio"></input>
            <label> First Aid </label>
            <input type="radio"></input>
            <label> Doctor </label>
            <input type="radio"></input>
            <label> Sneak </label>
          </div>
          <div>
            <input type="radio"></input>
            <label> Lockpick </label>
            <input type="radio"></input>
            <label> Steal </label>
            <input type="radio"></input>
            <label> Traps </label>
            <input type="radio"></input>
            <label> Science </label>
            <input type="radio"></input>
            <label> Repair </label>
            <input type="radio"></input>
            <label> Speech </label>
            <input type="radio"></input>
            <label> Barter </label>
            <input type="radio"></input>
            <label> Gambling </label>
            <input type="radio"></input>
            <label> Outdoorsman </label>
          </div>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <h3>Login or Register to save and view your characters!</h3>
          <div>
            <label>
              <b>Username: </b>
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter UserName"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            ></input>
            <label>
              <b> Password: </b>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            ></input>
          </div>
          <button
            id="login"
            onClick={async (event) => {
              event.preventDefault();
              try {
                await loginUser(userName, password);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Login
          </button>
          <button
            id="register"
            onClick={async (event) => {
              event.preventDefault();
              try {
                await registerUser(userName, password);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            Register
          </button>
        </fieldset>
      </div>
    </div>
  );
}
