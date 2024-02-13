import { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="bg-green-400 h-screen flex items-center justify-center">
        <div className="flex gap-4">
          {data?.map((item) => (
            <div className="bg-white p-4" key={item.id}>
              <div>
                <h1 className="text-3xl">{item.username}</h1>
                <p>{item.email}</p>
                <p>{item.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
