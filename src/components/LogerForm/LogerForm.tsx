import * as React from 'react';

export const LoggerForm: React.FunctionComponent = ({}) => {
  return (
    <form method="POST">
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <button type="submit">Отправить</button>
    </form>
  );
};
