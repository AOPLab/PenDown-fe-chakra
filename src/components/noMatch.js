import React from 'react';

function NoMatch() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: 'calc(100vh - 195px)',
      }}
    >
      <h1 style={{ width: 'fit-content' }}>
        404 not found.
      </h1>
    </div>
  );
}

export default NoMatch;
