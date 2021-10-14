import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import RocketsMocks from './__Mocks__/Rockets.mocks';
import store from '../redux/configureStore';
import RocketList from '../components/RocketList';
import { loadRockets } from '../redux/rockets/rockets';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});

describe('Test Rocket List', () => {
  beforeEach(() => {
    store.dispatch(loadRockets(RocketsMocks));
  });

  test('The Rocket List renders correctly', () => {
    const data = store.getState().rockets;
    renderWithRedux(<RocketList data={data} />);
    const rocketList = document.getElementById('rocket-list-container');
    expect(rocketList.childNodes.length).toBe(data.length);
  });

  test('The Rocket List renders rocket items with Reserve Rocket button', () => {
    const data = store.getState().rockets;
    renderWithRedux(<RocketList data={data} />);
    const rerservationButton = screen.getAllByRole('button');
    expect(rerservationButton[0].innerHTML).toBe('Reserve Rocket');
  });

  test('Rocket Reservations will show the user reserved rockets from rockets page', () => {
    const data = store.getState().rockets;
    const { getAllByText } = renderWithRedux(<RocketList data={data} />);
    fireEvent.click(getAllByText('Reserve Rocket')[0]);
    fireEvent.click(getAllByText('Reserve Rocket')[1]);
    expect(store.getState().rockets.filter((rocket) => rocket.reserved === true).length).toBe(2);
    expect(store.getState().rockets.filter((rocket) => rocket.reserved !== true).length).toBe(2);
  });
});
