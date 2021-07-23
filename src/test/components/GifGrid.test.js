import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from "enzyme/build";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

const category = 'Dragon'

describe('debe cargar completo', () => {
    test('prueba componente < GifGrid category={ category } />', ()=> {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar item cuando se carga imagenes useFetchGifs', ()=>{
        useFetchGifs.mockReturnValue({
            data: [{
                'id': '1789',
                'title': 'jgla',
                'url': 'localhost/jgla.png'
            }],
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(1);
    })
});