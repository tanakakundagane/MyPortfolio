"use client"; 
import React, { useRef, useState } from 'react';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="/Waltz_for_Cloudy_Days.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button 
        onClick={togglePlay} 
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-2 rounded-full shadow-lg lg:top-5 lg:bottom-auto lg:left-1/3 lg:transform lg:-translate-x-1/2 z-50 lg:w-[15%]"
      >
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  );
};

export default AudioPlayer;
