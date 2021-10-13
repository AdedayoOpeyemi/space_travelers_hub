import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import MissionsMock from './__Mocks__/Missions.mocks';
import store from '../redux/configureStore';
import MissionsLists from '../components/MissionsList';
import { loadMissions } from '../redux/missions/Missions';
import Mission from '../components/Mission';

const renderWithRedux = (component) => ({
  ...render(
    <Provider store={store}>
      {component}
    </Provider>,
  ),
});

describe('Test Missions', () => {
  beforeEach(() => {
    store.dispatch(loadMissions(MissionsMock));
  });

  test('Store must have the missions loaded', () => {
    const storeState = store.getState().missions;
    expect(storeState.length).toBe(10);
  });

  test('test mission list', () => {
    renderWithRedux(<MissionsLists />);
    const bodyTable = document.getElementById('bodyTable');
    expect(bodyTable.childNodes.length).toBe(10);
  });

  test('', () => {
    const data = store.getState().missions[0];
    renderWithRedux(<Mission data={data} />);
    const missionName = document.getElementById('missionName');
    expect(missionName.innerHTML).toBe(data.mission_name);
    const description = document.getElementById('description');
    expect(description.innerHTML).toBe(data.description);
  });
});

// test
