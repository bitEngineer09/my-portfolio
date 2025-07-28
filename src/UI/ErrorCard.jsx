import React from 'react';
import styled from 'styled-components';

const ErrorCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <p className="error-message">Page Not Found</p>
        <div className="error-title">
          <div className="error-item">
            <span aria-hidden="true">4O4</span>
            <span aria-hidden="true" className="error-glitch">4O4</span>
            <span aria-hidden="true" className="error-glitch error-glitch--secondary">4O4</span>
          </div>
          <div className="error-item">
            <span aria-hidden="true">Error</span>
            <span aria-hidden="true" className="error-glitch">Error</span>
            <span aria-hidden="true" className="error-glitch error-glitch--secondary">Error</span>
          </div>
        </div>
        <div className="error-description">The requested page could not be found</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 280px;
    background: linear-gradient(135deg, #05062d, #02012a);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(0, 234, 255, 0.3);
    border-radius: 20px;
    padding: 20px;
    position: relative;
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    box-shadow:
      0 0 15px rgba(0, 234, 255, 0.2),
      0 0 30px rgba(151, 65, 252, 0.15);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 22px;
    border: 2px solid transparent;
    background: linear-gradient(
        135deg,
        rgba(0, 234, 255, 0.8),
        rgba(139, 0, 255, 0.6)
      )
      border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card:hover::before {
    opacity: 1;
    animation: pulse 2.5s infinite ease-in-out;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
  }

  .card:hover {
    transform: scale(1.03);
    box-shadow:
      0 0 20px rgba(0, 234, 255, 0.3),
      0 0 40px rgba(151, 65, 252, 0.2);
  }

  .error-message {
    font-size: 18px;
    font-weight: 600;
    color: #00eaff;
    text-transform: uppercase;
    margin-bottom: 10px;
    animation: fade-in 1.5s ease-out;
    text-shadow: 0 0 8px rgba(0, 234, 255, 0.5);
    letter-spacing: 1px;
  }

  .error-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    font-weight: 900;
    color: #ffffff;
    text-transform: uppercase;
    position: relative;
    line-height: 1;
    letter-spacing: 3px;
    margin: 15px 0;
  }

  .error-item {
    position: relative;
    margin: 5px 0;
  }

  .error-title span {
    position: relative;
    z-index: 1;
    text-shadow:
      2px 2px 0 #fded00,
      -2px -2px 0 #00eaff;
  }

  .error-title .error-glitch {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-shadow:
      2px 2px 0 #00e572,
      -2px -2px 0 #8b00ff;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    animation: glitch 2.5s infinite linear alternate;
    opacity: 0.8;
  }

  .error-title .error-glitch--secondary {
    text-shadow:
      -2px -2px 0 #ff3366,
      2px 2px 0 #00ccff;
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    animation-delay: 0.5s;
  }

  .error-title:hover .error-glitch {
    display: block;
  }

  @keyframes glitch {
    0% {
      clip-path: polygon(
        0 2%,
        100% 2%,
        100% 95%,
        95% 95%,
        95% 90%,
        85% 90%,
        85% 95%,
        8% 95%,
        0 70%
      );
    }
    2%,
    8% {
      clip-path: polygon(
        0 78%,
        100% 78%,
        100% 100%,
        95% 100%,
        95% 90%,
        85% 90%,
        85% 100%,
        8% 100%,
        0 78%
      );
      transform: translate(-5%, 0);
    }
    6% {
      clip-path: polygon(
        0 78%,
        100% 78%,
        100% 100%,
        95% 100%,
        95% 90%,
        85% 90%,
        85% 100%,
        8% 100%,
        0 78%
      );
      transform: translate(5%, 0);
    }
    9% {
      clip-path: polygon(
        0 78%,
        100% 78%,
        100% 100%,
        95% 100%,
        95% 90%,
        85% 90%,
        85% 100%,
        8% 100%,
        0 78%
      );
      transform: translate(0, 0);
    }
    25% {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        95% 0,
        95% 0,
        85% 0,
        85% 0,
        8% 0,
        0 0
      );
      transform: translate(5%, 0);
    }
    30% {
      clip-path: polygon(
        0 0,
        100% 0,
        100% 0,
        95% 0,
        95% 0,
        85% 0,
        85% 0,
        8% 0,
        0 0
      );
      transform: translate(-5%, 0);
    }
    35%,
    45% {
      clip-path: polygon(
        0 40%,
        100% 40%,
        100% 85%,
        95% 85%,
        95% 85%,
        85% 85%,
        85% 85%,
        8% 85%,
        0 70%
      );
      transform: translate(-5%);
    }
    50% {
      clip-path: polygon(
        0 40%,
        100% 40%,
        100% 85%,
        95% 85%,
        95% 85%,
        85% 85%,
        85% 85%,
        8% 85%,
        0 70%
      );
      transform: translate(0, 0);
    }
  }

  .error-description {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 15px;
    animation: fade-in 2s ease-out;
    max-width: 80%;
    line-height: 1.4;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 240px;
      height: 240px;
      padding: 15px;
    }
    .error-title {
      font-size: 36px;
    }
  }`;

export default ErrorCard;
