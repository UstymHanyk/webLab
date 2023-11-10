import React from 'react';

const GradientAnimatedBackdrop = () =>{
    return (
        <div id="bg-wrap" style={{position:"absolute",width:"100%", height:"100%", zIndex:"-1"}}>
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
    <defs>
      <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
        <animate attributeName="fx" dur="136s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
        <animate attributeName="fx" dur="94s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
        <animate attributeName="fx" dur="86s" values="0%;3%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5">
        <animate attributeName="fx" dur="92s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop>
        <stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5">
        <animate attributeName="fx" dur="98s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop>
        <stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop>
      </radialGradient>
      <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5">
        <animate attributeName="fx" dur="102s" values="0%;5%;0%" repeatCount="indefinite"></animate>
        <stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop>
        <stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop>
      </radialGradient>
    </defs>

    <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient6)" transform="rotate(334.41 50 50)">
      <animate attributeName="x" dur="30s" values="25%;0%;25%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="34s" values="0%;25%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite"></animateTransform>
    </rect>
    
    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(139.903 50 50)">
      <animate attributeName="x" dur="50s" values="-25%;0%;-25%" repeatCount="indefinite"></animate>
      <animate attributeName="y" dur="28s" values="0%;50%;0%" repeatCount="indefinite"></animate>
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="36s" repeatCount="indefinite"></animateTransform>
    </rect>

    <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)">
  <animate attributeName="x" dur="60s" values="0%;25%;0%" repeatCount="indefinite"></animate>
  <animate attributeName="y" dur="30s" values="0%;25%;0%" repeatCount="indefinite"></animate>
  <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="20s" repeatCount="indefinite"></animateTransform>
    </rect>

  </svg>
</div>
    )
}

export default GradientAnimatedBackdrop;