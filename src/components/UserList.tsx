import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const url = "https://jsonplaceholder.typicode.com/users";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [color, setColor] = useState("red");

  useEffect(() => {
    // (async () => {
    //   try {
    //     const response = await fetch(url);
    //     const users = await response.json();
    //     setUsers(users);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // })();

    fetch(url)
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);

    // Potential memory leak
    // setTimeout(() => {
    //   setUsers([]);
    //   console.log("Users updated");
    // }, 5000);
  }, []);

  const changeColor = () =>
    setColor((c) => (c === "red" ? "dodgerblue" : "red"));

  return (
    <>
      <button onClick={changeColor}>Change color</button>
      <ol style={{ color }}>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
};
