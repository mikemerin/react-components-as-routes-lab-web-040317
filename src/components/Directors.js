import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
        <h1>Directors Page</h1>
        {
          directors.map( (director, index) => (
            <div key={index}>
              <p>{director.name}</p>
              <p><ul>{director.movies.map( (m, i) => <li key={i}>{m}</li> ) }.join(" ")</ul></p>
              })
            </div>
          ))
        }
    </div>
  )
}


export default Directors
