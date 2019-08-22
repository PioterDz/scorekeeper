import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import ChangeFactor from './components/ChangeFactor/ChangeFactor';

it('renders without crashing', () => {
  shallow(<App />);
});
it('should update player score', () => {
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoś',
      score: 0
    }
  ]
  const mockedOnScoreUpdate = jest.fn();
  const appComponent = shallow(<App onScoreUpdate={mockedOnScoreUpdate} />);
  appComponent.setState({ players });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');
  expect(playersAfterUpdate[0].score).toEqual(10);
});
it('should add new player to app state', () => {
  const appComponent = shallow(<App />);
  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');
  const players = appComponent.state('players');
  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});
it('should remove player from app state', () => {
  const players = [
    {
      name: 'Kunegunda',
      score: 5
    },
    {
      name: 'Antoś',
      score: 0
    }
  ]
  const mockedOnPlayerRemove = jest.fn();
  const appComponent = shallow(<App onPlayerRemove={mockedOnPlayerRemove} />);
  appComponent.setState({ players });
  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove(0);
  const playersAfterRemove = appComponent.state('players');
  expect(playersAfterRemove.length).toEqual(1);
  expect(playersAfterRemove[0].name).toEqual('Antoś');
});
it('should add new factor to state', () => {
  const factor = 1;
  const mockedOnChangeFactor = jest.fn();
  const appComponent = shallow(<App onChangeFactor={mockedOnChangeFactor} />);
  appComponent.setState({ factor });
  const onChangeFactor = appComponent.find(ChangeFactor).prop('onChangeFactor');
  onChangeFactor(3);
  const factorAfterChange = appComponent.state('factor');
  expect(factorAfterChange).toEqual(3);
})
it('should return old factor when new factor is not a number', () => {
  const factor = 2;
  const mockedOnChangeFactor = jest.fn();
  const appComponent = shallow(<App onChangeFactor={mockedOnChangeFactor} />);
  appComponent.setState({ factor });
  const onChangeFactor = appComponent.find(ChangeFactor).prop('onChangeFactor');
  onChangeFactor('bubu');
  const factorAfterChange = appComponent.state('factor');
  expect(factorAfterChange).toEqual(2);
})

