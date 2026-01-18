
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import './Circle.css';

interface Props {
  color: string;
  isActive?: boolean;
  onClick: () => void;
  onKeyDown: (event: React.KeyboardEvent) => void;
  tabIndex: number;
}

export const Circle = forwardRef<HTMLDivElement, Props>(({
  color,
  isActive = false,
  onClick,
  onKeyDown,
  tabIndex,
}, ref) => {
  const circleClassName = classNames('circle', {
    'circle-red': color === 'red',
    'circle-orange': color === 'orange',
    'circle-green': color === 'green',
    'light--active': isActive,
  });

  return (
    <div
      ref={ref}
      tabIndex={tabIndex}
      className={circleClassName}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
    />
  );
});

Circle.displayName = 'Circle'; 
