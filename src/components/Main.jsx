import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Main() {
  const apiBaseUrl = "https://lanciweb.github.io/demo/api/actresses/";
  const [actresses, setActresses] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrl}`).then((res) => {
      console.log(res.data);
      const results = res.data;
      setActresses(results);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center mt-2 mb-2">
          <em>Hollywood Actresses</em>
        </h1>
        {actresses.map((actress, id) => {
          return (
            <div className="col-3 mb-3 mt-3" key={id}>
              <div
                className="card h-100"
                style={{ backgroundColor: "#939FC6" }}
              >
                <img
                  src={actress.image}
                  className="card-img-top"
                  alt={actress.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{actress.name}</h5>
                  <div className="card-text">
                    <p>
                      {actress.birth_year} - {actress.nationality}
                    </p>
                    <p>
                      <em>{actress.biography}</em>
                    </p>
                    <p>
                      <strong>{actress.awards}</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
