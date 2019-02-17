// @flow
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Article from '../../src/components/Article/Article';

configure({ adapter: new Adapter() });
describe('Article component', () => {
  const article = {
    id: '101',
    parent_Id: '-1',
    timestamp: '2019-02-18',
    title: 'Jest',
    shortDescription: 'Jest: Unit test framework',
    fullDescription: 'Jest: React unit test framework',
    userId: 'user-1',
    numberOfLikes: '1',
  };

  it('renders article without crashing', () => {
    const wrapper = shallow(<Article article={article} />);

    const articleDiv = wrapper.find('.single-article').get(0);
    expect(articleDiv.type).equal('div');

    expect(articleDiv.props.children).to.have.lengthOf(2);

    expect(articleDiv.props.children[0].type).equal('h4');
    expect(articleDiv.props.children[0].props.className).equal('article-title');
    expect(articleDiv.props.children[0].props.children).equal(article.title);

    expect(articleDiv.props.children[1].type).equal('p');
    expect(articleDiv.props.children[1].props.className).equal('article-short-description');
    expect(articleDiv.props.children[1].props.children).equal(article.shortDescription);
  });
});
