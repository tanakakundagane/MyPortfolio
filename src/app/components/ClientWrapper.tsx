"use client";

import React, { ReactNode } from 'react';
import AudioPlayer from './AudioPlayer';

interface ClientWrapperProps {
  children: ReactNode;
}

const ClientWrapper: React.FC<ClientWrapperProps> = ({ children }) => {
  return (
    <div>
      <AudioPlayer />
      {children}
    </div>
  );
};

export default ClientWrapper;
