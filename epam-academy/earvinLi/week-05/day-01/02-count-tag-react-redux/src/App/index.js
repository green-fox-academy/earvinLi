// External Dependencies
import React from 'react';

// Internal Dependencies
import ComplexCounter from '../ComplexCounter';
import CounterSection from '../CounterSection';
import TagSection from '../TagSection';

// Component Definition
function App(props) {
  return (
    <>
      <CounterSection />
      <TagSection />
      <ComplexCounter />
    </>
  );
}

export default App;
