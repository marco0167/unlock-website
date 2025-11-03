import { useState, useRef } from 'react';

interface UseMouseFollowReturn {
  mousePosition: MousePosition;
  isHovering: boolean;
  containerRef: React.RefObject<HTMLElement | null>;
  handleMouseMove: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseEnter: (e: React.MouseEvent<HTMLElement>) => void;
  handleMouseLeave: () => void;
}

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseFollow = (): UseMouseFollowReturn => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
    if (containerRef.current && isHovering) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  interface MouseEnterEvent extends React.MouseEvent<HTMLElement> {}

  const handleMouseEnter = (e: MouseEnterEvent): void => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => setIsHovering(false);

  return {
    mousePosition,
    isHovering,
    containerRef,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave
  };
};
