import { Content } from "antd/es/layout/layout";
import React from "react";

type Props = {
  open: boolean;

  title: string;
  onClose: void;
};

export default function Modal({ open, onClose, title }: Props) {
  console.log({ onClose });
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modal_container">
        <div className="modal-title">{title}</div>
        <div className="modal-boby">
          <Content />
        </div>
      </div>
    </div>
  );
}
