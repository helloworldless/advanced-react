import DataApi from '../api/DataApi';
import {data} from '../api/testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', async () => {
    const articles = await api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });
  it('exposes authors as an object', async () => {
    const authors = await api.getAuthors();
    const authorId = data.authors[0].id;
    const authorName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorName);
  });
});
