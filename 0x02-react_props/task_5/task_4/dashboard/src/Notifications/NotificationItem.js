import React from 'react';

const NotificationItem = ({ type, value, html }) => {
  if (html) {
    return <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return <li data-notification-type={type}>{value}</li>;
};

export default NotificationItem;
