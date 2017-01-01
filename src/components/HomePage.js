import React, { PropTypes } from 'react';

export default function HomePage(props) {
  return (
    <div>
      <div className="App-header">
        <h2>ЗА ОКНОМ</h2>
      </div>
      <p className="App-intro">
        Блог <a href="https://github.com/Mironova">Ирины Мироновой</a> о всяком интересном
      </p>
    </div>
  );
}
HomePage.propTypes = {
};
