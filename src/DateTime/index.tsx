import React from 'react';

function DateTime() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  return <div>{date.getFullYear()}</div>;
}

export default DateTime;
