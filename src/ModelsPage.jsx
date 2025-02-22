import React from 'react';
import ThreeViewer from './ThreeViewer';

const ModelsPage = () => {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      backgroundColor: '#2c2c2c',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '800px',
        height: '600px',
        position: 'relative'
      }}>
        <ThreeViewer />
      </div>
    </div>
  );
};

export default ModelsPage;