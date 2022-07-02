import "./App.css";
import Card from "./components/Cards/Card";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";

function App() {
  const dataElements = data.map((info) => {
    return <Card key={info.id} info={info} />;
  });

  return (
    <>
      <Navbar />
      <div className="card-container">{dataElements}</div>
    </>
  );
}

export default App;
