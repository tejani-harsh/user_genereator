import { useEffect, useState } from "react";
import PopUpCard from "../components/Card";

function CardsPage() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    async function fetchData() {
      const userData = await fetch("https://randomuser.me/api/?results=3");
      const data = await userData.json();
      setUserData(data);
    }

    fetchData();
  }, []);

  const user: [
    {
      name: string;
      gender: string;
      age: number;
      country: string;
    }
  ] = [
    {
      name: `${userData && userData["results"][0]["name"]["first"]} ${
        userData && userData["results"][0]["name"]["last"]
      }`,
      gender: userData && userData["results"][0]["gender"],
      age: userData && userData["results"][0]["dob"]["age"],
      country: userData && userData["results"][0]["location"]["country"],
    },
    {
      name: `${userData && userData["results"][1]["name"]["first"]} ${
        userData && userData["results"][1]["name"]["last"]
      }`,
      gender: userData && userData["results"][1]["gender"],
      age: userData && userData["results"][1]["dob"]["age"],
      country: userData && userData["results"][1]["location"]["country"],
    },
    {
      name: `${userData && userData["results"][2]["name"]["first"]} ${
        userData && userData["results"][2]["name"]["last"]
      }`,
      gender: userData && userData["results"][2]["gender"],
      age: userData && userData["results"][2]["dob"]["age"],
      country: userData && userData["results"][2]["location"]["country"],
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "20px",
        }}
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div style={{ flex: 1 }}>
            <PopUpCard
              key={i}
              name={user[i].name}
              gender={user[i].gender}
              country={user[i].country}
              age={user[i].age}
            ></PopUpCard>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsPage;
