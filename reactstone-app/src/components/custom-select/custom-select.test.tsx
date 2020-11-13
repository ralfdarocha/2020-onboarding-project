import React from 'react';
import { shallow } from 'enzyme';
import { CustomSelect } from '@components/index';

describe('Empty <CustomSelect />', () => {
    it('should have the "No options" message when an empty array of options are passed', () => {
        const component = shallow(<CustomSelect
            options={[]}
        />);
        expect(component.find('.no-options').exists()).toBe(true);
    });
});

describe('<CustomSelect />', () => {
    const mockCallBack = jest.fn();

    const label = "Select an option";
    const nonSelectedLabel = "Select...";
    const options: IItem[] = [
        { name: 'Option A' },
        { name: 'Option B' },
        { name: 'Option C' },
    ];
    const lastOption = options[options.length - 1];

    const fullComponent = shallow(<CustomSelect
        options={options}
        onSelect={mockCallBack}
        label={label}
        selected={options[0]}
        nonSelectedLabel={nonSelectedLabel}
    />);

    it('should have 3 options', () => {
        expect(fullComponent.find('.select-portal-options').find('li')).toHaveLength(3);
    });

    it('should contains the label', () => {
        expect(fullComponent.find('.select-dialog-label').children('span').text()).toBe(label);
    });

    it('should have the first option selected', () => {
        expect(fullComponent.find('.select-button').children('span').text()).toBe(options[0].name);
    });

    it('should add class show when user clicks on the select', () => {
        fullComponent.find('.select-button').simulate('click');
        expect(fullComponent.find('.select-portal').hasClass('show')).toBeTruthy();
    });

    it('should call onSelect callback', () => {
        fullComponent.find('.select-portal-options').find('li').last().simulate('click');
        expect(mockCallBack).toBeCalledWith(lastOption);
    });

    it('should have the last option selected', () => {
        expect(fullComponent.find('.select-button').children('span').text()).toBe(lastOption.name);
    });

    it('should render the reset button', () => {
        expect(fullComponent.find('.select-reset').exists()).toBeTruthy();
    });

    it('should reset the selected option', () => {
        fullComponent.find('.select-reset').simulate('click', {
            stopPropagation: () => { }
        });
        expect(mockCallBack).toBeCalledWith(null);
    });

    it('should not render the reset button', () => {
        expect(fullComponent.find('.select-reset').exists()).toBeFalsy();
    });

    it('should contains the nonSelectedLabel again', () => {
        expect(fullComponent.find('.select-button').children('span').text()).toBe(nonSelectedLabel);
    });

});
