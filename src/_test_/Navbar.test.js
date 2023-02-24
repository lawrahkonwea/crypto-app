import { MemoryRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navbar';

it('Renders navbar component', () => {
  const tree = renderer
    .create(
      <Router>
        <Navigation />
      </Router>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
