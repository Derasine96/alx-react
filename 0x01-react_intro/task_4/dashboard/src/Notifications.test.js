import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

describe('Notification renders without crashing', () => {
    const Notification = shallow(<Notifications />);

    it('Notification renders', () => {
        expect(Notification).toBeDefined();
    });

    it('Notification renders ul without error', () => {
        expect(Notification.find('ul')).toBeDefined();
    });

    it('Notification renders three li elements without error', () => {
        expect(Notification.find('li')).toHaveLength(3);
    });

    it('Notification renders the paragraph', () => {
        expect(Notification.find('p')).toBeDefined();
    })
});