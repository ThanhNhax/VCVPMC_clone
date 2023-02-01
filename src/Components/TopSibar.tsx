import React from "react";

type Props = {};

export default function TopSibar({}: Props) {
  return (
    <div className="top_header">
      <div className="top">
        <div className="top_content">
          <h4>Tiếng Việt</h4>
          <div className="top_logo">
            <i className="fas fa-star"></i>
          </div>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}
