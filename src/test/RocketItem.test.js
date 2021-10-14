import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import RocketsMocks from './__Mocks__/Rockets.mocks';
import store from '../redux/configureStore';
import Rocket from '../components/RocketItem';
import { loadRockets } from '../redux/rockets/rockets';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});

describe('Test Rocket Item', () => {
  beforeEach(() => {
    store.dispatch(loadRockets(RocketsMocks));
  });

  test('The Rocket Item renders with the correct rocket name', () => {
    const data = store.getState().rockets;
    const rocketDetails = data[0];
    renderWithRedux(<Rocket key={rocketDetails.id} data={rocketDetails} />);
    const rocketname = document.querySelector('H5').innerHTML;
    expect(rocketname).toBe(rocketDetails.rocket_name);
  });

  test('The Rocket item renders with the correct rocket description', () => {
    const data = store.getState().rockets;
    const rocketDetails = data[0];
    renderWithRedux(<Rocket key={rocketDetails.id} data={rocketDetails} />);
    const rocketDescription = document.querySelector('p').innerHTML;
    expect(rocketDescription).toBe(rocketDetails.description);
  });

  test('The Rocket item renders and has an alt text for image', () => {
    const data = store.getState().rockets;
    const rocketDetails = data[0];
    renderWithRedux(<Rocket key={rocketDetails.id} data={rocketDetails} />);
    const rocketImgAlt = screen.queryByAltText(rocketDetails.rocket_name).alt;
    expect(rocketImgAlt).toBe(rocketDetails.rocket_name);
  });

  test('The Rocket item renders with a button', () => {
    const data = store.getState().rockets;
    const rocketDetails = data[0];
    renderWithRedux(<Rocket key={rocketDetails.id} data={rocketDetails} />);
    const rerservationButton = screen.getByRole('button');
    expect(rerservationButton.innerHTML).toBe('Reserve Rocket');
  });
});
