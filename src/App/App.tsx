
import React, { useState, useRef, useEffect, useCallback } from 'react';
import './App.css';
import { Circle } from './Circle/Circle';

const colors = ['red', 'orange', 'green'];

function App() {
  const [activeLightIndex, setActiveLightIndex] = useState(0);
  const lightRefs = useRef<(HTMLDivElement | null)[]>([]);

  const focusLight = useCallback((index: number) => {
    lightRefs.current[index]?.focus();
  }, []);

  useEffect(() => {
    focusLight(activeLightIndex);
  }, [activeLightIndex, focusLight]);

  useEffect(() => {
    focusLight(0);
  }, [focusLight]);

  const handleLightActivate = useCallback((index: number) => {
    setActiveLightIndex(index);
  }, []);

  return (
    <div className="semaphore-container">
      {colors.map((color, index) => (
        <div className="semaphore-item" key={color}>
          <Circle
            ref={(el) => (lightRefs.current[index] = el)}
            tabIndex={activeLightIndex === index ? 0 : -1}
            color={color}
            isActive={activeLightIndex === index}
            onClick={() => handleLightActivate(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleLightActivate(index);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
