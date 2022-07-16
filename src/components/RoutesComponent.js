import { Routes, Route } from "react-router-dom";
import { Axios } from "./Api";
import { useEffect, useState } from "react";
import Notification from "./Notification";
import Home from "../Pages/Home";
import Approved from "../Pages/Approved";
import Rejected from "../Pages/Rejected";
import Pending from "../Pages/Pending";
import Form from "./Form";
import Navbar from "./Navbar";

const RoutesComponent = () => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const resp = await Axios.get("api");
      setResponse(resp.data);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1 style={{backgroundColor: "white"}}>Loading...</h1>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home sourceData={response.data} />} />
            <Route path="form" element={<Form sourceData={response.data}/>} />
            <Route
              path="approved"
              element={<Approved sourceData={response.data} />}
            />
            <Route
              path="rejected"
              element={<Rejected sourceData={response.data} />}
            />
            <Route
              path="pending"
              element={<Pending sourceData={response.data} />}
            />
            <Route path="form/notify" element={<Notification />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default RoutesComponent;
