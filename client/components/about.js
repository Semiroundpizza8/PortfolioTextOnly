import React from 'react';
import { connect } from 'react-redux';

export function About() {
  return (
    <div>
      <h1>Who am I?</h1>
    </div>
  )
}

export default connect(null, null)(About);
