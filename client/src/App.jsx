import { useState, useEffect } from "react";
import axios from "axios";
import DynamicTable from "./components/cutom-components/DynamicTable";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8801/users");
        setData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <DynamicTable data={data} />
    </div>
  );
}

export default App;
