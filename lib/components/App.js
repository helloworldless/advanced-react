import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData.json';
import ArticleList from './ArticleList';

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
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}
export default App;
