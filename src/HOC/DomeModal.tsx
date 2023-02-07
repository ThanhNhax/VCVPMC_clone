import React, { useState } from "react";
import Modal from "./Modal";

type Props = {};

export default function DomeModal({}: Props) {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal((wasModal) => !wasModal);
  };
  return (
    <div>
      <button>Show modal</button>
      <Modal />
    </div>
  );
}
