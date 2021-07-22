import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe('probar el componente addCategory', () => {
    const setCategory = () => {};
    const wrapper = shallow( <AddCategory setCategories={setCategory}/>);
    
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});