import { Content } from "antd/es/layout/layout";
import React from "react";

type Props = {};

export default function Modal({}: Props) {
  return (
    <div className="overlay">
      <div className="modal_container">
        <div className="modal-title"></div>
        <div className="modal-boby">
          <Content />
        </div>
      </div>
    </div>
  );
}
