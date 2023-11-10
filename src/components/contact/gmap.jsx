import React from 'react';

const MapComponent = () => {
  return (
    <div>
     
      <div>
        <iframe
          width="100%"
          height="300px"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCW2rD1iN9Jt7LP0N5R4t2NE5L9QME1bFg&q=Al+qaizi+building,Dubai&zoom=17"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
