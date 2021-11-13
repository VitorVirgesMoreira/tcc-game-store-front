import Modal from "@material-ui/core/Modal";
import React from "react";
import "./styles.css";

export default function SimpleModal({ message, errors }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div id="body">
      {errors?.map((error) => {
        return (
          <h3 id="errorMessage" key={error.key} value={error.message}>
            {error.message}
          </h3>
        );
      })}
    </div>
  );

  return (
    <div>
      <button id="errorButton" type="button" onClick={handleOpen}>
        {message}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
