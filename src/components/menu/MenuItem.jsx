import React from 'react';
import './menuItem.scss';

function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`menu-item ${size}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop now</span>
      </div>
    </div>
  );
}

export default MenuItem;
