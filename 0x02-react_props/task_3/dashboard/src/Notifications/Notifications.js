import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import closeicon from '../assets/close-icon.svg';

function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
                style={{ float: "right", border: 'none', background: 'transparent', position: 'absolute', right: '1.5rem', top: '1.2rem', width: '20px', height: '20px', cursor: 'pointer' }}
            >
                <img src={closeicon} alt="close-icon" />
            </button>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    );
}

export default Notifications;