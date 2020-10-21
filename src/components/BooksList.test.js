import React from "react";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });
import configureMockStore from "redux-mock-store";

import BooksList from './BooksList';

const mockStore = configureMockStore();
// const store = mockStore({});

describe("Booklist Component", () => {

    let wrapper;
    let store;

    beforeEach(() => {
        const initialState = {
            cartItems: [{
                '_id': 9,
                'title': 'Java: The Complete Reference',
                'description': 'Fully updated for Java SE 8: covers new features, includes modules and lambda expressions.',
                'category': 'Java',
                'author': 'Herbert Schildt',
                'publisher': 'McGraw Hill Education',
                'price': 681,
                'isbn': '978-9339212094',
                'language': 'English',
                'pages': 1312,
                'avg_user_rating': 4.7
            }]
          };

        store = mockStore(initialState);
        wrapper = shallow(<BooksList store={store} />).dive();
    });

    it('Check the length of props added', () => {
        expect(wrapper.props().componentCartItems.length).toBe(1);
    });
});