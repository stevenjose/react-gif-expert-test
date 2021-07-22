import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Prueba en el componente GifGridItem', () => {

    const title = 'Jgla';
    const url = 'localhost/jgla.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={url}/>);

    test('prueba en el componente <GifGridItem /> ', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('debe contener title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe contener title', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
        
    });

    test('debe contener class', () => {
        const div = wrapper.find('div');
        expect( div.prop('className').includes('animate') ).toBe( true );
        
    });
    
});