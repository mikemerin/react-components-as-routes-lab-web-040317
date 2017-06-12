import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
        <h1>Actors Page</h1>
        {
          actors.map( (actor, index) => (
            <div key={index}>
              <p>{actor.name}</p>
              <p><ul>{actor.movies.map( (m, i) => <li key={i}>{m}</li> ) }.join(" ")</ul></p>
              })
            </div>
          ))
        }
    </div>
  )
}

export default Actors;
