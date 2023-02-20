import React from "react";
import styled from "styled-components";
import QR from "./assets/image-qr-code.png";

export default function Exercise() {
  return (
    <>
      <Wrapper>
        <div>
          <Img src={QR} width="270" height="270" />
          <strong>Improve your front-end skills by building projects</strong>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--Light-gray);
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 0.8rem;
    height: fit-content;
    width: 270px;
    padding: 10px;
    font-family: "Outfit", sans-serif;
  }
  div p {
    color: var(--Grayish-blue);
    font-size: 15px;
    width: 90%;
  }
  div strong {
    font-weight: bold;
    color: var(--Dark-blue);
  }
`;

const Img = styled.img`
  border-radius: 0.4rem;
`;
