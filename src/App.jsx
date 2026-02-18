import React, { useState } from 'react';
import MainLayout from './components/Layout/MainLayout';
import CalendarFrame from './components/Calendar/CalendarFrame';
import { rooms } from './config/rooms';
import './styles/global.css';

function App() {
  const [selectedRoomId, setSelectedRoomId] = useState(rooms[0]?.id || null);

  const selectedRoom = rooms.find(r => r.id === selectedRoomId);

  return (
    <MainLayout selectedRoomId={selectedRoomId} onSelectRoom={setSelectedRoomId}>
      <CalendarFrame url={selectedRoom?.url} />
    </MainLayout>
  );
}

export default App;
