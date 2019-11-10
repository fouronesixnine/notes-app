import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigator from './Navigator-view';
import NavigatorItem from '../NavigatorItem';
import NewNoteButton from '../NewNoteButton';
import uuid from 'uuid/v4';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    notesList: {
      [uuid()]: {
        title: '',
        preview: '',
        active: true,
      },
    },
  };
  const wrapper = shallow(<Navigator {...props} />);

  return { props, wrapper };
}

describe('Navigator component', () => {
  it('should render new note button and list of items', () => {
    const { props, wrapper } = setup();
    expect(wrapper.exists(NewNoteButton)).toEqual(true);
    expect(wrapper.find(NavigatorItem)).toHaveLength(
      Object.keys(props.notesList).length
    );
  });
});
