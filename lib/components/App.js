import React from 'react';
import DataApi from '../api/DataApi';
import {data} from '../api/testData.json';
import ArticleList from './article/ArticleList';

const Api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: {},
      authors: {}
    };
  }

  async componentDidMount() {
    this.setState({
      articles: await Api.getArticles(),
      authors: await Api.getAuthors()
    });
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}

export default App;
