// @flow
import React from 'react';
import { expect } from 'chai';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import Articles from '../../src/components/Articles/Articles';

const mockStore = configureMockStore();
configure({ adapter: new Adapter() });

describe('Articles component', () => {
  const articles = [{
    id: '101',
    parent_Id: '-1',
    timestamp: '2019-02-18',
    title: 'Jest',
    shortDescription: 'Jest: Unit test framework',
    fullDescription: 'Jest: React unit test framework',
    userId: 'user-1',
    numberOfLikes: '1',
  }, {
    id: '102',
    parent_Id: '-1',
    timestamp: '2019-02-18',
    title: 'Jest',
    shortDescription: 'Jest: Unit test framework',
    fullDescription: 'Jest: React unit test framework',
    userId: 'user-1',
    numberOfLikes: '1',
  }];

  it('renders article list', () => {
    const initialState = {
      articles: articles
    };
    const store = mockStore(initialState);

    const wrapper = mount(<Articles store={store} articles={articles}/>);
    expect(wrapper.props().articles).to.deep.equal(articles);

    expect(wrapper.find('.list-articles').get(0).type).to.be.equal('div');
    expect(wrapper.find('.article')).to.have.lengthOf(articles.length);
    expect(wrapper.find('.article').get(0).props.article).to.deep.equal(articles[0]);
    expect(wrapper.find('.article').get(1).props.article).to.deep.equal(articles[1]);
  });

  describe('when no article', () => {
    it('renders empty message', () => {
      const initialState = {
        articles: []
      };
      const store = mockStore(initialState);

      const wrapper = mount(<Articles store={store} articles={[]}/>);

      expect(wrapper.props().articles).to.have.lengthOf(0);
      expect(wrapper.find('.empty-message').get(0).type).to.be.equal('span');
      expect(wrapper.find('.empty-message').get(0).props.children).to.be.equal('No articles to display');
    });
  });
});
