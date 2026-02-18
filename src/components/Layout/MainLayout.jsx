import React from 'react';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children, selectedRoomId, onSelectRoom }) => {
    return (
        <div className="main-layout">
            <Sidebar selectedRoomId={selectedRoomId} onSelectRoom={onSelectRoom} />
            <main className="content-area">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
