import React from 'react'
import Say from 'react-say';


const Speaker = () => <Say  pitch={ 1.1 }
    rate={ 1.5 }
    speak="A quick brown fox jumped over the lazy dogs."
    volume={ .8 } />;
export default Speaker;

