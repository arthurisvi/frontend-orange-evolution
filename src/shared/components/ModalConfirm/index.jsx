import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { contentService } from "../../services/content.service";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const deleteContent = (id) => {
    contentService
      .deleteContent(id)
      .then((res) => {
        setOpen(false);
        location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickOpen = () => (setOpen(true));
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <DeleteOutlineIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Não</Button>
          <Button
            onClick={(e) => {
              deleteContent(props.id);
            }}
            autoFocus
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
