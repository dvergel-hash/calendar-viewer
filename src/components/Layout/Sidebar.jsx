import React from 'react';
import { rooms } from '../../config/rooms';
import './Sidebar.css';

const Sidebar = ({ selectedRoomId, onSelectRoom }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Salas</h2>
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
