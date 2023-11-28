// Loader.js

import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {/* You can customize the loader appearance here */}
      <div
        style={{
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #3498db",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          animation: "spin 2s linear infinite",
        }}
      ></div>
      <p style={{ marginLeft: "10px", fontSize: "18px" }}>Loading...</p>
    </div>
  );
};

export default Loader;
