import React, { PropTypes } from 'react';

export default function About(props) {
  return (
    <div>
      <h2>Об Авторе</h2>
      <p className="App-intro">
        Блог <a href="https://github.com/Mironova">Ирины Мироновой</a> о всяком интересном
      </p>
    </div>
  );
}
About.propTypes = {
};
