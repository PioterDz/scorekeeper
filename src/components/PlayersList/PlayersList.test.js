import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});
it('renders correct number of players', () => {
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
    const playerComponent = shallow(<PlayersList players={players} />);
    console.log(playerComponent.debug());
    const expectedPlayersNumber = playerComponent.find(Player).length;
    expect(expectedPlayersNumber).toEqual(2);
});
it('should call onScoreUpdate', () => {
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
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const secondPlayer = playerComponent.find(Player).last();
    const onPlayerScoreChange = secondPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);
    expect(mockedOnScoreUpdate).toBeCalledWith(1, 10);
});
it('should call onPlayerRemove with correct values', () => {
    const mockedOnPlayerRemove = jest.fn();
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
    const playersListComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
    const player = playersListComponent.find(Player).first();
    const onPlayerRemove = player.prop('onPlayerRemove');
    onPlayerRemove();
    expect(mockedOnPlayerRemove).toBeCalledWith(0);
});