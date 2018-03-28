import React from 'react';

export let overlap = (word, color) => {
  const colors = [
    'lightblue',
    'yellow',
    'pink',
    'lightgreen',
    'aqua',
    'aquamarine',
    'greenyellow',
    'mediumspringgreen',
    'tomato',
  ]

  const firstStyle = {
    position: 'absolute',
    color: 'transparent',
    zIndex: '3',
    WebkitTextStroke: 'black .5px'
  }

  const secondStyle = {
    color: color ? color : colors[Math.floor(Math.random() * colors.length)],
    position: 'relative',
    zIndex: '-3',
    top: '3px',
    right: '3px',
    userSelect: 'none'
  }

  let words = word.split(' ')
  words = words.map(singleWord => {
    return singleWord !== words[words.length - 1] ? singleWord + ' ' : singleWord;
  })
  return (
    <span>
      {words.map(singleWord => (
        <span key={singleWord}>
          <span style={firstStyle}>{singleWord}</span>
          <span style={secondStyle}>{singleWord}</span>
           
        </span>
      ))}

    </span >
  );
}