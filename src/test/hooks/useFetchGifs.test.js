import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('test al custom hook', () => {
    test('test custom hook ', async () => {
        const { result , waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading}  = result.current;

        await waitForNextUpdate();
        
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('debe retornar un array de de imagenes y el loading en false ', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        
        await waitForNextUpdate();
        
        const {data, loading}  = result.current;
        
        expect( data.length ).toEqual(10);
        expect( loading ).toBe(false);
    }, 1500);
});