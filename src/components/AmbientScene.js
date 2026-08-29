import React from 'react';

const AmbientScene = () => {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow-a" />
      <div className="ambient-glow ambient-glow-b" />
      <div className="orbital orbital-one">
        <span />
      </div>
      <div className="orbital orbital-two">
        <span />
      </div>
      <div className="floating-cube cube-one" />
      <div className="floating-cube cube-two" />
      <div className="floating-cube cube-three" />
    </div>
  );
};

export default AmbientScene;
