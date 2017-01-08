import React from 'react';
import {Link} from 'react-router';

import $ from 'jquery';

import {fetchArticles} from '../api';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    window.$ = $
  }

  componentDidMount() {
    fetchArticles().then(response => {
      console.log(response)
      this.setState({articles: response.data})
    })
  }

  render() {
    return (
      <div>
        <section className="parallax">
          <h2>ЗА ОКНОМ</h2>
        </section>
        <section>
          <h2>
            <Link to="/articles">Articles</Link>
          </h2>
          <ul>{this.state.articles.map(article => <li key={article.id}>{article.title}</li>)}</ul>
        </section>
        <p>
          Блог <a href="https://github.com/Mironova">Ирины Мироновой</a> о всяком интересном
        </p>
      </div>
    );
  }
}

export default HomePage;