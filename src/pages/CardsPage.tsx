import { useEffect, useState } from "react";
import PopUpCard from "../components/Card";

function CardsPage() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    async function fetchData() {
      const userData = await fetch("https://randomuser.me/api/");
      const data = await userData.json();
      setUserData(data);
    }

    fetchData();
  }, []);

  const user: {
    name: string;
    gender: string;
    age: number;
    country: string;
  } = {
    name: `${userData && userData["results"][0]["name"]["first"]} ${
      userData && userData["results"][0]["name"]["last"]
    }`,
    gender: userData && userData["results"][0]["gender"],
    age: userData && userData["results"][0]["dob"]["age"],
    country: userData && userData["results"][0]["location"]["country"],
  };

  return (
    <>
      <PopUpCard
        name={user.name}
        gender={user.gender}
        country={user.country}
        age={user.age}
      ></PopUpCard>
    </>
  );
}

export default CardsPage;
