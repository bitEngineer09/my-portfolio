import React from "react";
import styled from "styled-components";
import { skills } from "../assets/skills";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="
                containerSkillsCardParent
                grid
                grid-flow-col md:grid-flow-row
                overflow-x-auto
                md:grid-cols-3 lg:grid-cols-4 
                gap-x-[4rem] md:gap-y-[3rem] xl:gap-y-[4rem] 2xl:gap-y-[5rem]
                mt-[7rem] xl:mt-[5rem] 2xl:mt-[6rem]
                place-items-center
                ">
        {skills.map((skill) => {
          return (
            <div key={skill.id} className=" container containerSkillsCard noselect 
                                        w-[17rem] sm:w-[18rem] md:w-[20rem] xl:w-[22rem] 2xl:w-[26rem]
                                        h-[24rem] sm:h-[25rem] lg:h-[27rem] xl:h-[28rem] 2xl:h-[34rem]
                                        ">
              <div className="canvas">
                <div className="tracker tr-2"></div>
                <div className="tracker tr-3"></div>
                <div className="tracker tr-4"></div>
                <div className="tracker tr-5"></div>
                <div className="tracker tr-6"></div>
                <div className="tracker tr-1"></div>
                <div className="tracker tr-7"></div>
                <div className="tracker tr-8"></div>
                <div className="tracker tr-9"></div>
                <div id="card">
                  <div className="card-content">
                    <div className="card-glare"></div>
                    <div className="cyber-lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p id="prompt">
                      <img src={skill.logo} alt="" className="w-[6rem] sm:w-[8rem] 2xl:w-[9rem]" />
                    </p>
                    <div className="title flex flex-col items-center mt-[3rem]">
                      {skill.title}
                      <img src={skill.logo} alt="" className="w-[6rem] xs:w-[8rem] sm:w-[9rem] md:w-[10rem] lg:w-[11rem] 2xl:w-[12rem]" />
                    </div>
                    <div className="glowing-elements">
                      <div className="glow-1"></div>
                      <div className="glow-2"></div>
                      <div className="glow-3"></div>
                    </div>
                    <div className="subtitle">
                      {/* <span>INTERACTIVE</span> */}
                      <span className="highlight text-[1.9rem] 2xl:text-[2.2rem]">
                        {skill.secondaryTitle}
                      </span>
                    </div>
                    <div className="card-particles">
                      <span></span>
                      <span></span>
                      <span></span> <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="corner-elements">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="scan-line"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .containerSkillsCard {
    position: relative;
    // width: 24rem;
    // height: 29rem;
    transition: 200ms;
  }

  .containerSkillsCard:active {
    width: 180px;
    height: 245px;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    transition: 700ms;
    background: linear-gradient(45deg, #1a1a1a3c, #26262600);
    border: 2px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #prompt {
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 2px;
    transition: 300ms ease-in-out;
    position: absolute;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  }

  .title {
    opacity: 0;
    transition: 300ms ease-in-out;
    position: absolute;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: 4px;
    text-align: center;
    width: 100%;
    padding-top: 20px;
    background: linear-gradient(45deg, #00ffaa, #00a2ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 15px rgba(0, 255, 170, 0.3));
    text-shadow: 0 0 10px rgba(92, 103, 255, 0.5),
      0 0 20px rgba(92, 103, 255, 0.3);
  }

  .subtitle {
    position: absolute;
    bottom: 40px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    letter-spacing: 2px;
    transform: translateY(30px);
    color: rgba(255, 255, 255, 0.6);
  }

  .highlight {
    color: #00ffaa;
    margin-left: 5px;
    background: linear-gradient(90deg, #5c67ff, #ad51ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .glowing-elements {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .glow-1,
  .glow-2,
  .glow-3 {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: radial-gradient(
    circle at center,
    rgba(174, 28, 237, 0.3) 0%,
    rgba(0, 255, 170, 0) 70%
  );
    filter: blur(15px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .glow-1 {
    top: -20px;
    left: -20px;
  }
  .glow-2 {
    top: 50%;
    right: -30px;
    transform: translateY(-50%);
  }
  .glow-3 {
    bottom: -20px;
    left: 30%;
  }

  .card-particles span {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #00ffaa;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Hover effects */
  .tracker:hover ~ #card .title {
    opacity: 1;
    transform: translateY(-10px);
  }

  .tracker:hover ~ #card .glowing-elements div {
    opacity: 1;
  }

  .tracker:hover ~ #card .card-particles span {
    animation: particleFloat 2s infinite;
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(calc(var(--x, 0) * 30px), calc(var(--y, 0) * 30px));
      opacity: 0;
    }
  }

  /* Particle positions */
  .card-particles span:nth-child(1) {
    --x: 1;
    --y: -1;
    top: 40%;
    left: 20%;
  }
  .card-particles span:nth-child(2) {
    --x: -1;
    --y: -1;
    top: 60%;
    right: 20%;
  }
  .card-particles span:nth-child(3) {
    --x: 0.5;
    --y: 1;
    top: 20%;
    left: 40%;
  }
  .card-particles span:nth-child(4) {
    --x: -0.5;
    --y: 1;
    top: 80%;
    right: 40%;
  }
  .card-particles span:nth-child(5) {
    --x: 1;
    --y: 0.5;
    top: 30%;
    left: 60%;
  }
  .card-particles span:nth-child(6) {
    --x: -1;
    --y: 0.5;
    top: 70%;
    right: 60%;
  }

  #card::before {
    content: "";
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 170, 0.1) 0%,
      rgba(0, 162, 255, 0.05) 50%,
      transparent 100%
    );
    filter: blur(20px);
    opacity: 0;
    width: 150%;
    height: 150%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  }

  .tracker:hover ~ #card::before {
    opacity: 1;
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card #prompt {
    opacity: 0;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .container:hover #card::before {
    transition: 200ms;
    content: "";
    opacity: 80%;
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "tr-1 tr-2 tr-3 tr-4 tr-5"
      "tr-6 tr-7 tr-8 tr-9 tr-10"
      "tr-11 tr-12 tr-13 tr-14 tr-15"
      "tr-16 tr-17 tr-18 tr-19 tr-20"
      "tr-21 tr-22 tr-23 tr-24 tr-25";
  }

  .tr-1 {
    grid-area: tr-1;
  }

  .tr-2 {
    grid-area: tr-2;
  }

  .tr-3 {
    grid-area: tr-3;
  }

  .tr-4 {
    grid-area: tr-4;
  }

  .tr-5 {
    grid-area: tr-5;
  }

  .tr-6 {
    grid-area: tr-6;
  }

  .tr-7 {
    grid-area: tr-7;
  }

  .tr-8 {
    grid-area: tr-8;
  }

  .tr-9 {
    grid-area: tr-9;
  }

  .tr-10 {
    grid-area: tr-10;
  }

  .tr-11 {
    grid-area: tr-11;
  }

  .tr-12 {
    grid-area: tr-12;
  }

  .tr-13 {
    grid-area: tr-13;
  }

  .tr-14 {
    grid-area: tr-14;
  }

  .tr-15 {
    grid-area: tr-15;
  }

  .tr-16 {
    grid-area: tr-16;
  }

  .tr-17 {
    grid-area: tr-17;
  }

  .tr-18 {
    grid-area: tr-18;
  }

  .tr-19 {
    grid-area: tr-19;
  }

  .tr-20 {
    grid-area: tr-20;
  }

  .tr-21 {
    grid-area: tr-21;
  }

  .tr-22 {
    grid-area: tr-22;
  }

  .tr-23 {
    grid-area: tr-23;
  }

  .tr-24 {
    grid-area: tr-24;
  }

  .tr-25 {
    grid-area: tr-25;
  }

  .tr-1:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-2:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-3:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-4:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-5:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(20deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-6:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-7:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-8:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-9:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-10:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-11:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-12:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-13:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-14:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-15:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(0deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-16:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-17:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-18:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-19:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-20:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-10deg) rotateY(10deg) rotateZ(0deg);
  }

  .tr-21:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-10deg) rotateZ(0deg);
  }

  .tr-22:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(-5deg) rotateZ(0deg);
  }

  .tr-23:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
  }

  .tr-24:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(5deg) rotateZ(0deg);
  }

  .tr-25:hover ~ #card {
    transition: 125ms ease-in-out;
    transform: rotateX(-20deg) rotateY(10deg) rotateZ(0deg);
  }

  .noselect {
    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Old versions of Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;
    /* Non-prefixed version, currently
  									supported by Chrome, Edge, Opera and Firefox */
  }

  .card-glare {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      125deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.05) 45%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 55%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 300ms;
  }

  .cyber-lines span {
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(92, 103, 255, 0.2),
      transparent
    );
  }

  .cyber-lines span:nth-child(1) {
    top: 20%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineGrow 3s linear infinite;
  }

  .cyber-lines span:nth-child(2) {
    top: 40%;
    right: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    animation: lineGrow 3s linear infinite 1s;
  }

  .cyber-lines span:nth-child(3) {
    top: 60%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: left;
    animation: lineGrow 3s linear infinite 2s;
  }

  .cyber-lines span:nth-child(4) {
    top: 80%;
    right: 0;
    width: 100%;
    height: 1px;
    transform: scaleX(0);
    transform-origin: right;
    animation: lineGrow 3s linear infinite 1.5s;
  }

  .corner-elements span {
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(92, 103, 255, 0.3);
  }

  .corner-elements span:nth-child(1) {
    top: 10px;
    left: 10px;
    border-right: 0;
    border-bottom: 0;
  }

  .corner-elements span:nth-child(2) {
    top: 10px;
    right: 10px;
    border-left: 0;
    border-bottom: 0;
  }

  .corner-elements span:nth-child(3) {
    bottom: 10px;
    left: 10px;
    border-right: 0;
    border-top: 0;
  }

  .corner-elements span:nth-child(4) {
    bottom: 10px;
    right: 10px;
    border-left: 0;
    border-top: 0;
  }

  .scan-line {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(92, 103, 255, 0.1),
      transparent
    );
    transform: translateY(-100%);
    animation: scanMove 2s linear infinite;
  }

  @keyframes lineGrow {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1);
      opacity: 1;
    }
    100% {
      transform: scaleX(0);
      opacity: 0;
    }
  }

  @keyframes scanMove {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }

  /* Modyfikacja istniejących styli */
  #card:hover .card-glare {
    opacity: 1;
  }

  .corner-elements span {
    transition: all 0.3s ease;
  }

  #card:hover .corner-elements span {
    border-color: rgba(92, 103, 255, 0.8);
    box-shadow: 0 0 10px rgba(92, 103, 255, 0.5);
  }
`;

export default Card;
