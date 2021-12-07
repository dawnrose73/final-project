import React from 'react';
import { Outlet } from 'react-router-dom';

const style = {
  paddingTop: '100px',
  flex: '1 1 auto',
};

function Content() {
  return (
    <main className="content" style={style}>
        <Outlet />
    </main>
  );
}

export default Content;