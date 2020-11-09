import React from 'react';
import { shallow } from 'enzyme';
import metadata from './../../mock/metadata.json'
import Sidebar from './sidebar';
import { ClassFilter, QualityFilter, RaceFilter, SetFilter } from '../filter-bar';
 

describe('<Sidebar />', () => { 
  const component = shallow(
    <Sidebar 
      classes={metadata.classes.map((item:string):IItem => ({name: item}))}
      races={metadata.races.map((item:string):IItem => ({name: item}))}
      sets={metadata.sets.map((item:string):IItem => ({name: item}))}
      qualities={metadata.qualities.map((item:string):IItem => ({name: item}))}
    />
  );
  it('should have ClassFilter', () => {
    expect(component.children(ClassFilter).exists()).toBeTruthy;
  });
  it('should have QualityFilter', () => {
    expect(component.children(QualityFilter).exists()).toBeTruthy;
  });
  it('should have RaceFilter', () => {
    expect(component.children(RaceFilter).exists()).toBeTruthy;
  });
      it('should have SetFilter', () => {
    expect(component.children(SetFilter).exists()).toBeTruthy;
  });
});
