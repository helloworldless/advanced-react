class DataApi {
  constructor(data) {
    this.data = data;
  }
  arrayToObjectReducer(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }
  getArticles() {
    return this.data.articles.reduce(this.arrayToObjectReducer, {});
  }
  getAuthors() {
    return this.data.authors.reduce(this.arrayToObjectReducer, {});
  }
}

module.exports = DataApi;
