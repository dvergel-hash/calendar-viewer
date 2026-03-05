import React from 'react';
import { rooms } from '../../config/rooms';
import './Sidebar.css';

const Sidebar = ({ selectedRoomId, onSelectRoom, isOpen, onClose }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Salas</h2>
                <button className="mobile-close-btn" onClick={onClose} aria-label="Close menu">
                    &times;
                </button>
            </div>
            <ul className="room-list">
                {rooms.map((room) => (
                    <li
                        key={room.id}
                        className={`room-item ${selectedRoomId === room.id ? 'active' : ''}`}
                        onClick={() => onSelectRoom(room.id)}
                    >
                        {room.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
