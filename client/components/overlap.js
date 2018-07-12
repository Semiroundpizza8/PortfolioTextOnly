import React from 'react';

export const overlap = (word, color, direction) => {
  const colors = [
    'lightblue',
    'yellow',
    'pink',
    'lightgreen',
    'aqua',
    'aquamarine',
    'greenyellow',
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
    right: direction === 'right' ? '-3px' : '3px',
    userSelect: 'none'
  }

  let words = word.split(' ')
  words = words.map(singleWord => {
    return singleWord !== words[words.length - 1] ? singleWord + ' ' : singleWord;
  })
  return (
    <span key={Math.random() * 40000}>
      {words.map(singleWord => (
        <span key={singleWord}>
          <span style={firstStyle}>{singleWord}</span>
          <span style={secondStyle}>{singleWord}</span>
        </span>
      ))}

    </span >
  );
}

export const gradate = (sentence, color, direction) => {
  color = color === 'light' ? 'linear-gradient(to right, #92fe9d, #00c9ff)' : 'linear-gradient(to right, #f46b45, #eea849)'
  return (
    <span style={{ background: 'none', position: 'relative'}}>
      {sentence}
      <span style={{ width: '95%', height: '60%', background: color, position: 'absolute', zIndex: '-10', right: '.6em', bottom: '-.1em'}} />
    </span>
  );
}

// background: linear-gradient(to right,#f15b2a 0,#e80a89 100%);
// width: 100%;
// height: 61%;
// position: absolute;
// left: .15em;
// bottom: 0;
// right: 0;
// z-index: -1;