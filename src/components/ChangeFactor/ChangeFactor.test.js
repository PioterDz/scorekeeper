import React from 'react';
import { shallow, mount } from 'enzyme';
import ChangeFactor from './ChangeFactor';

it('renders without crashing', () => {
    shallow(<ChangeFactor />);
});
it('call onChangeFactor with proper value', () => {
    const onChangeFactor = jest.fn();
    const changeFactorComponent = mount(<ChangeFactor onChangeFactor={onChangeFactor} />);
    const factorInput = changeFactorComponent.find('input').first().getDOMNode();
    factorInput.value = '2';
    const factorForm = changeFactorComponent.find('form');
    factorForm.simulate('submit');
    expect(onChangeFactor).toBeCalledWith('2');
})