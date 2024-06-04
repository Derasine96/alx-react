import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App renders without crashing', () => {
    const app = shallow(<App />);

    it('App renders', () => {
        expect(app).toBeDefined();
    });

    
    // it('App-header renders without errors', () => {
    //     expect(app.find('App-header')).toBeDefined();
    // });

    // it('App-body renders without errors', () => {
    //     expect(app.find('App-body')).toBeDefined();
    // });

    // it('App-footer renders without errors', () => {
    //     expect(app.find('App-footer')).toBeDefined();
    // });
});