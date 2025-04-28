import "./App.css";
import icon from "./assets/icon";
import Info from "./assets/info/info";
import UserCard from "./assets/users/user";

function App() {
  return (
    <>
      <h2>User Card</h2>
      <div className="users container">
        <UserCard
          user={{
            bg: true,
            img: icon.emily,
            name: "Emily Johnson",
            job1: "Product Manager",
            job2: "Product Development",
          }}
        />
        <UserCard
          user={{
            bg: true,
            img: icon.arjun,
            name: "Arjun Patel",
            job1: "Software Engineer",
            job2: "Technology",
          }}
        />
        <UserCard
          user={{
            bg: true,
            img: icon.carlos,
            name: "Carlos Hernández",
            job1: "UI Designer",
            job2: "Design",
          }}
        />
        <UserCard
          user={{
            bg: true,
            img: icon.amina,
            name: "Amina Idris",
            job1: "Marketing Specialist",
            job2: "Marketing",
          }}
        />
        <UserCard
          user={{
            bg: false,
            img: icon.takumi,
            name: "Takumi Sato",
            job1: "HR Specialist",
            job2: "Human Resources",
          }}
        />
        <UserCard
          user={{
            bg: false,
            img: icon.chen,
            name: "Chen Wei",
            job1: "Data Analyst",
            job2: "Data Science",
          }}
        />
        <UserCard
          user={{
            bg: false,
            img: icon.emma,
            name: "Emma Dubois",
            job1: "Sales Manager",
            job2: "Sales",
          }}
        />
        <UserCard
          user={{
            bg: false,
            img: icon.igor,
            name: "Igor Sokolov",
            job1: "Quality Assurance",
            job2: "Quality Control",
          }}
        />
      </div>
      <h2>Info Card</h2>
      <div className="info container">
        <Info
          info={{
            img: icon.ocean,
            title: "Unraveling the Mysteries of the Ocean",
            description:
              "From the mesmerizing marine life that inhabits the coral reefs to the vast and uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration.",
          }}
        />
        <Info
          info={{
            img: icon.mountain,
            title: "Discovering the World of Mountains",
            description:
              "In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration.",
          }}
        />
        <Info
          info={{
            img: icon.mountain,
            title: "Discovering the World of Mountains",
            description:
              "In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration.",
          }}
        />
        <Info
          info={{
            img: icon.mountain,
            title: "Discovering the World of Mountains",
            description:
              "In this awe-inspiring exploration, we set out to uncover the beauty and allure of mountains, those ancient giants that tower over the landscape and evoke a sense of wonder and admiration.",
          }}
        />
        <Info
          info={{
            img: icon.forest,
            title: "Exploring the Secrets of the Forest",
            description:
              "Step into the mesmerizing realm of the forest, a sanctuary of life teeming with a symphony of sounds, scents, and vibrant green hues.",
          }}
        />
      </div>
    </>
  );
}

export default App;
