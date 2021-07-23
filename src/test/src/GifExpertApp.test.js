import React from "react";
import { shallow } from "enzyme/build";
import { GifExpertApp } from "../../GifExpertApp";
import "@testing-library/jest-dom";
import { AddCategory } from "../../components/AddCategory";

jest.mock("../../components/AddCategory");
const wrapper = shallow(<GifExpertApp />);

describe("pruebas en el componente gitexpert", () => {
  test("pruebas con el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("exista el componente AddCategory", () => {
    expect(wrapper.find('AddCategory').exists()).toBe(true);
  });

  test('probar componente GifGrid', () => {
    expect(wrapper.find('GifGrid').length).toBe(1);
  });
});
