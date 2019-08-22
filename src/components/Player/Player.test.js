import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Player />);
});
it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);
    const playerNameRendered = playerComponent.find('.Player__name').text();
    expect(playerNameRendered).toEqual(playerNamePassed);
});
it('renders correct score', () => {
    const scorePassed = 5;
    const playerComponent = shallow(<Player score={scorePassed} />);
    const scoreRendered = playerComponent.find('.Player__score').text();
    const scoreParsed = Number(scoreRendered);
    expect(scoreParsed).toEqual(scorePassed);
});
it('should call onPlayerScoreChange when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
    const plusButton = playerComponent.find('.Player__button').first();
    plusButton.simulate('click');
    expect(mockedOnPlayerScoreChange).toBeCalled();
});
it('should call onPlayerScoreChange when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);
    const minusButton = playerComponent.find('.Minus__button');
    minusButton.simulate('click');
    expect(mockedOnPlayerScoreChange).toBeCalled();
});
it('should call onPlayerRemove when button is clicked', () => {
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);
    const removeButton = playerComponent.find('.Remove__button');
    removeButton.simulate('click');
    expect(mockedOnPlayerRemove).toBeCalled();
});