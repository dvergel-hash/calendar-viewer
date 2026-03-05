import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './MainLayout.css';

const MainLayout = ({ children, selectedRoomId, onSelectRoom }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const handleSelectRoom = (id) => {
        onSelectRoom(id);
        closeSidebar(); // Close sidebar on mobile after selection
    };

    return (
        <div className="main-layout">
            <button className="mobile-menu-btn" onClick={toggleSidebar} aria-label="Toggle menu">
                ☰
            </button>
            {isSidebarOpen && (
                <div className="sidebar-overlay" onClick={closeSidebar}></div>
            )}
            <Sidebar
                selectedRoomId={selectedRoomId}
                onSelectRoom={handleSelectRoom}
                isOpen={isSidebarOpen}
                onClose={closeSidebar}
            />
            <main className="content-area">
                {children}
            </main>
        </div>
    );
};

export default MainLayout;
