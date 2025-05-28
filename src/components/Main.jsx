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
        {actresses.map((actress, id) => {
          return (
            <div className="col-4" key={id}>
              <div className="card h-100">
                <img
                  src={actress.image}
                  className="card-img-top"
                  alt={actress.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{actress.name}</h5>
                  <div className="card-text">
                    <ul>
                      <li>
                        {actress.birth_year} - {actress.nationality}
                      </li>
                      <li>{actress.biography}</li>
                      <li>{actress.awards}</li>
                    </ul>
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
