class DataApi {
  constructor(data) {
    this.data = data;
  }
  arrayToObjectReducer(acc, cur) {
    acc[cur.id] = cur;
    return acc;
  }
  getArticles() {
    const articlesObj = this.data.articles.reduce(this.arrayToObjectReducer, {});
    return new Promise((resolve) => {
      setTimeout(() => resolve(articlesObj), 1000);
    });
  }
  getAuthors() {
    const authorsObj = this.data.authors.reduce(this.arrayToObjectReducer, {});
    return new Promise((resolve) => {
      setTimeout(() => resolve(authorsObj), 1000);
    });
  }
}

module.exports = DataApi;
