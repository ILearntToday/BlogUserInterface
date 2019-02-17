// @flow
import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../src/components/App/App';

configure({ adapter: new Adapter() });
describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    const appDiv = wrapper.find('.app').get(0);
    expect(appDiv.type).equal('div');

    const headerElement = appDiv.props.children;
    expect(headerElement.type).equal('header');
    expect(headerElement.props.className).equal('app-header');

    expect(headerElement.props.children).to.have.lengthOf(2);
    expect(headerElement.props.children[0].type).equal('p');
    expect(headerElement.props.children[0].props.children).equal('I Learnt Today');
    expect(headerElement.props.children[1].type.displayName).equal('Connect(Articles)');
  });
});
