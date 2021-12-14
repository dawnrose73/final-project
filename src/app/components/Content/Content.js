import React from 'react';
import { Outlet } from 'react-router-dom';
import './Content.scss';

function Content() {
    return (
        <main className="content">
            <Outlet />
        </main>
    );
}

export default Content;