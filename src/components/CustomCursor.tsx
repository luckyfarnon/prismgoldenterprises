import { useEffect, useState } from 'react';

interface CustomCursorProps {
  color?: string;
}

const CustomCursor = ({ color = '#000' }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: color,
        opacity: 0.5,
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;
