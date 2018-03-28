import React from 'react';
import { connect } from 'react-redux';
import { overlap } from './overlap.js';


export function Home() {

  return (
    <div>
      <h1 style={{ fontSize: '4em' }}>Hello you beautiful, wonderful person. I’m {overlap('Benjamin Odisho', 'yellow')} and this is my temporary site. If you want to know more about my awesome projects feel free to check out my {overlap('Github', 'cyan')} or {overlap('LinkedIn', 'cyan')} profiles. Even better, see my {overlap('About', 'pink')}, {overlap('Projects', 'pink')}, or {overlap('Contact', 'pink')} pages.</h1>
    </div>
  )
}

export default connect(null, null)(Home);
