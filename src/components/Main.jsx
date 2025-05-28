import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Main() {
  const apiBaseUrlActresses = "https://lanciweb.github.io/demo/api/actresses/";
  const [actresses, setActresses] = useState([]);

  const apiBaseUrlActors = "https://lanciweb.github.io/demo/api/actors/";
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get(`${apiBaseUrlActresses}`).then((res) => {
      console.log(res.data);
      const results = res.data;
      setActresses(results);
    });
  }, []);

  useEffect(() => {
    axios.get(`${apiBaseUrlActors}`).then((res) => {
      console.log(res.data);
      const results = res.data;
      setActors(results);
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

        <hr />

        <h1 className="text-center mt-2 mb-2">
          <em>Hollywood Actors</em>
        </h1>
        {actors.map((actor, id) => {
          return (
            <div className="col-3 mb-3 mt-3" key={id}>
              <div
                className="card h-100"
                style={{ backgroundColor: "#939FC6" }}
              >
                <img
                  src={actor.image}
                  className="card-img-top"
                  alt={actor.name}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{actor.name}</h5>
                  <div className="card-text">
                    <p>
                      {actor.birth_year} - {actor.nationality}
                    </p>
                    <p>
                      <em>{actor.biography}</em>
                    </p>
                    <p>
                      <strong>{actor.awards}</strong>
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
