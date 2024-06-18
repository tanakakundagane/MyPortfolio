"use client";

import React, { ReactNode } from 'react';
import AudioPlayer from './AudioPlayer';

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AudioPlayer />
      {children}
    </div>
  );
};

export default ClientWrapper;
