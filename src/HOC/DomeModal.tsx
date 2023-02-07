import React, { useState } from "react";
import Modal from "./Modal";

type Props = {};

export default function DomeModal({}: Props) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Modal
      </button>
      <Modal open={openModal} onClose={setOpenModal(false)} title="sdfw" />
    </div>
  );
}
