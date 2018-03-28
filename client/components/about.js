import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap';

export function About() {
  return (
    <div>
      <h1 style={{ fontSize: '4em' }}>Who am I?</h1>
    </div>
  )
}

export default connect(null, null)(About);
