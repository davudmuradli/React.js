import React, { useState } from "react";

function Input() {
  const [userName, setUserName] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userClassNumber, setUserClassNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [favoriteLunch, setFavoriteLunch] = useState("");

  function handleUserInput(e) {
    const { id, value } = e.target;

    // Set the state based on the input element's id
    if (id === "firstname") {
      setUserName(value);
    } else if (id === "lastname") {
      setUserFirstName(value);
    } else if (id === "age") {
      setUserAge(value);
    } else if (id === "address") {
      setUserAddress(value);
    } else if (id === "classnumber") {
      setUserClassNumber(value);
    } else if (id === "id") {
      setUserId(value);
    }
  }

   function handleLunchOptionChange(e) {
    setFavoriteLunch(e.target.value);
  }

  return (
    <div>
      <h1>Student Data:</h1>
      <form>
        <label for="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          value={userName}
          onChange={handleUserInput}
        />
        <h4>{userName}</h4>
        <label for="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          value={userFirstName}
          onChange={handleUserInput}
        />
        <h4>{userFirstName}</h4>
        <label for="age">Age:</label>
        <input
          type="number"
          id="age"
          value={userAge}
          onChange={handleUserInput}
        />
        <h4>{userAge}</h4>
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          value={userAddress}
          onChange={handleUserInput}
        />
        <h4>{userAddress}</h4>
        <label for="classnumber">Homeroom class number:</label>
        <input
          type="text"
          id="classnumber"
          value={userClassNumber}
          onChange={handleUserInput}
        />
        <h4>{userClassNumber}</h4>
        <label for="id">Student ID:</label>
        <input type="text" id="id" value={userId} onChange={handleUserInput} />
        <h4>{userId}</h4>
        <label>Favorite Lunch:</label>
        <input
          type="radio"
          name="lunch"
          value="Pizza"
          checked={favoriteLunch === "Pizza"}
          onChange={handleLunchOptionChange}
        />
        Pizza
        <input
          type="radio"
          name="lunch"
          value="Burger"
          checked={favoriteLunch === "Burger"}
          onChange={handleLunchOptionChange}
        />
        Burger
        <input
          type="radio"
          name="lunch"
          value="Salad"
          checked={favoriteLunch === "Salad"}
          onChange={handleLunchOptionChange}
        />
        Salad
        <h4>Favorite Lunch: {favoriteLunch}</h4>
      </form>
    </div>
  );
}

export default Input;
