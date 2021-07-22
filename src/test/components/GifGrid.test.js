import React from 'react';
import { shallow } from "enzyme/build";
import { GifGrid } from "../../components/GifGrid";
import '@testing-library/jest-dom';

const category = 'Dragon'

describe('debe cargar completo', () => {
    test('prueba componente < GifGrid category={ category } />', ()=> {
        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    })
});