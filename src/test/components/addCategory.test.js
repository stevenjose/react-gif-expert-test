import React from "react";
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("probar el componente addCategory", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategory} />);
  const input = wrapper.find("input");
  
  beforeEach(()=>{
      jest.clearAllMocks();
      wrapper = shallow(<AddCategory setCategories={setCategory} />);
  })
  
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("probar el input ", () => {
    const value = "Simulando value text";
    input.simulate("change", { target: { value } });
  });

  test('No debe postear la informacion con submit', () => {
    input.simulate("change",{ target: { value:'' }});  
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    expect( setCategory ).not.toHaveBeenCalled();
  });

  test('debe llamar a setCategory',()=>{
    const value = "Simulando value text";
    
    wrapper.find('input').simulate('change',{ target:{value} });
    
    wrapper.find('form').simulate('submit',{preventDefault(){}});
    
    expect( setCategory ).toHaveBeenCalled();
    expect( setCategory ).toHaveBeenCalledWith( expect.any(Function));
    expect (input.prop('value').trim()).toBe('');
  })
});
