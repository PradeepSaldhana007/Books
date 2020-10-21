import React from "react";
import { shallow } from "enzyme";
import BookCard from "./BookCard";
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe("Executes a handler function", () => {
  it("must call the mock method with button click", () => {
    const actionAdd = "add";
    const wrapper = shallow(<BookCard action={actionAdd} />);
    const button = wrapper.find("#addButton");
    const instance = wrapper.instance();

    instance.btnClick = jest.fn(instance.btnClick);

    button.simulate("click");
    expect(instance.btnClick).toMatchSnapshot();
  });
});