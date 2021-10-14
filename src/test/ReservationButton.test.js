import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import RocketsMocks from './__Mocks__/Rockets.mocks';
import store from '../redux/configureStore';
import Button from '../components/ReserveButton';
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

  test('The Reservation button renders correctly', () => {
    const data = store.getState().rockets;
    const rocketDetails = data[0];
    const reserved = true;
    renderWithRedux(<Button id={rocketDetails.id} reserved={reserved} />);
    const button = document.querySelector('button').innerHTML;
    expect(button).toBe('Cancel Reservation');
  });
});
