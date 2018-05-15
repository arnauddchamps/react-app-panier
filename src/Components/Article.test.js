import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  
  const props = {
    name: "zidane",
    price: 345355,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/280px-Zinedine_Zidane_by_Tasnim_03.jpg"
  }

  const tree = renderer
    .create(<Article {...props} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});