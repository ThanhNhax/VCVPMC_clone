import React from "react";

type Props = {
  setToggle(): void;
};

export default function SibarAdminToggle({ setToggle }: Props) {
  return (
    <div
      onClick={setToggle}
      className="sibarAdminToggle"
      style={{
        width: "100%",
        height: "100vh",
        background: "#020220",
        borderRadius: "0px 24px 24px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <i className="fas fa-chevron-right" style={{ color: "#FF7506" }}></i>
    </div>
  );
}
