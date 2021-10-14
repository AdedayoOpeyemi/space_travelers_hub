/**
 * @jest-environment jsdom
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import RocketsMocks from './__Mocks__/Rockets.mocks';
import store from '../redux/configureStore';
import RocketList from '../components/RocketList';
import { loadRockets } from '../redux/rockets/rockets';

// import Mission from '../components/Mission';

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
});
