import React from 'react';
import renderer from 'react-test-renderer';
import ArticleList from '../../../components/article/ArticleList';

describe('ArticleList', () => {

  const mockData = {
    articles: {
      abc: {id: 'abc'},
      def: {id: 'def'}
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  const tree = renderer.create(
    <ArticleList {...mockData} />
  ).toJSON();

  it('matches snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  it('has expect number of children', () => {
    expect(tree.children.length).toBe(2);
  });

});
