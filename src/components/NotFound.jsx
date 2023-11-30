import React from "react";
import styled from "@emotion/styled";
import fallback from "../assets/404.png";
import { Button } from "@mui/material";
import colors from "../utilities/color";
import { useNavigate } from "react-router-dom";
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Set the height of the container to the full viewport height */
`;

const Info = styled.div`
  text-align: center;

  h2 {
    /* ... your existing styles ... */
  }

  p {
    width: 100%;
    /* ... your existing styles ... */
  }
`;
const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  };
  return (
    <Main>
      <div>
        <Image src={fallback} alt="" />
      </div>
      <Info>
        <p>
          The page you are looking for might be removed or is temporarily
          unavailable
        </p>
      </Info>
      <Button
        variant="contained"
        sx={{
          backgroundColor: colors.primary,
          ":hover": {
            backgroundColor: colors.primary,
          },
        }}
        onClick={handleClick}
      >
        Back Home
      </Button>
    </Main>
  );
};

export default NotFound;
