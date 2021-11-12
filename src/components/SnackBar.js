import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

export default function SnackBar({ open, close, severity, message, duration }) {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div>
      <Snackbar open={open} autoHideDuration={duration} onClose={close}>
        <Alert onClose={close} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
