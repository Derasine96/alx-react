import React from 'react';
import './Notifications.css';
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
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;