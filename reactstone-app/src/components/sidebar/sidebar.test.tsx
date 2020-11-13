import React from 'react';
import { shallow } from 'enzyme';
import metadata from '@mock/metadata.json'
import { Sidebar } from '@components/index';
import { ClassFilter, QualityFilter, RaceFilter, SetFilter } from '@components/filter-bar';


describe('<Sidebar />', () => {
    const component = shallow(
        <Sidebar
            classes={metadata.classes.map((item: string): IItem => ({ name: item }))}
            races={metadata.races.map((item: string): IItem => ({ name: item }))}
            sets={metadata.sets.map((item: string): IItem => ({ name: item }))}
            qualities={metadata.qualities.map((item: string): IItem => ({ name: item }))}
        />
    );
    it('should have ClassFilter', () => {
        expect(component.find(ClassFilter).exists()).toBeTruthy();
    });
    it('should have QualityFilter', () => {
        expect(component.find(QualityFilter).exists()).toBeTruthy();
    });
    it('should have RaceFilter', () => {
        expect(component.find(RaceFilter).exists()).toBeTruthy();
    });
    it('should have SetFilter', () => {
        expect(component.find(SetFilter).exists()).toBeTruthy();
    });
});
