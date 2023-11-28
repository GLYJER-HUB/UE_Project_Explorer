import React from "react";
import styled from "@emotion/styled";


// import ImageScarecrow from "../assets/img/Scarecrow.png";

const Main = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 120px;
  margin: 64px 0;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    grid-gap: 60px;
  }
`;

const Info = styled.div`
  h2 {
    font-family: "Space Mono";
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 95px;
    letter-spacing: -0.035em;
    color: #333333;
    margin: 0 0 36px 0;

    @media (max-width: 768px) {
      font-size: 48px;
      line-height: 71px;
      margin: 0 0 29px 0;
    }
    @media (max-width: 400px) {
      letter-spacing: -0.05em;
    }
  }

  p {
    display: block;
    width: 65%;
    font-family: "Space Mono";
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.035em;
    color: #4f4f4f;
    margin: 0 0 64px 0;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0 20px 0 0;
      font-size: 18px;
      line-height: 27px;
    }
  }
`;



const NotFound = () => {
  return (
    <Main>
      
      <Info>
        <h2>404</h2>
        <p>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
      </Info>
    </Main>
  );
};

export default NotFound;
