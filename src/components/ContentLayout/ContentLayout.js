import React from 'react';
import { Outlet } from 'react-router-dom';
import './ContentLayout.scss';

function ContentLayout() {
  return (
      <div className="content">
          <Outlet />
      </div>
  );
}

export default ContentLayout;