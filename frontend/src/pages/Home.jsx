import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    GetData2();
  }, []);



  const GetData2 = () => {
    axios("https://dog.ceo/api/breeds/list")
      .then((res) => {
        setData(res.data.message);
    
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ marginLeft: "37%" }}>
      <h1>Breed List</h1>

      {Data.map((item) => {
        return (
          <>
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                width: "300px",
                margin: "10px",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "25px",
                  padding: "10px",
                }}
                to="/puppy"
              >
                {" "}
                {item}{" "}
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;