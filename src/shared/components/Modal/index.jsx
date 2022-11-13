import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import InputMask from "react-input-mask";
import { contentService } from "../../services/content.service";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.is,
};

const contentTypes = ["Live", "Livro", "Vídeo", "Curso", "Artigo", "Glossário"];

export default function CustomizedDialogs() {
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  const [created, setCreated] = useState(false);
  const [data, setData] = useState({
    id: null,
    title: "",
    author: "",
    duration: "",
    link: "",
    type: "",
    category: "",
    idTrail: null,
  });
  
  const clearData = () => {
    setData({
      ...data,
      id: null,
      title: "",
      author: "",
      duration: "",
      link: "",
      type: "",
      category: "",
    });
  }

  const submitData = (id) => {
    const trailId = searchParams.get("id");

    if (!id) {
      if (data.category !== "initial") {
        setData({ ...data, idTrail: trailId });
      }
      contentService
        .createContent(data)
        .then((res) => {
          if (res.data) {
            clearData();
            setCreated(true);
            // setTimeout(() => location.reload(), 700)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClickOpen = () => (setOpen(true));
  const handleClose = () => {
    clearData();
    setOpen(false);
    setCreated(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        NOVO CONTEÚDO
      </Button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Adicionar conteúdo
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <TextField
            id="title"
            label="Título"
            type="text"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            sx={{ width: "100%" }}
          />
          <TextField
            id="author"
            label="Conteúdo por"
            type="text"
            value={data.author}
            onChange={(e) => setData({ ...data, author: e.target.value })}
            sx={{ width: "100%", marginTop: "20px" }}
          />
          <InputMask
            mask="99:99:99"
            value={data.duration}
            maskChar={null}
            onChange={(e) => setData({ ...data, duration: e.target.value })}
          >
            {() => (
              <TextField
                id="duration"
                label="Duração"
                type="text"
                sx={{ width: "100%", marginTop: "20px" }}
              />
            )}
          </InputMask>

          <TextField
            id="link"
            label="Link"
            type="text"
            value={data.link}
            onChange={(e) => setData({ ...data, link: e.target.value })}
            sx={{ width: "100%", marginTop: "20px" }}
          />
          <Typography sx={{ marginTop: "20px" }}>
            Selecione a categoria do conteúdo que você deseja cadastrar:
          </Typography>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={data.category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          >
            <FormControlLabel
              value="initial"
              control={<Radio />}
              label="Inicial"
            />
            <FormControlLabel
              value="basicConcepts"
              control={<Radio />}
              label="Conceitos básicos"
            />
            <FormControlLabel
              value="optional"
              control={<Radio />}
              label="Opcional"
            />
          </RadioGroup>

          <Typography sx={{ marginTop: "20px" }}>
            Selecione o tipo de conteúdo que você deseja cadastrar:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "25px",
              marginTop: "20px",
            }}
          >
            {contentTypes.map((type) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: type !== data.type ? "#9E9FA0" : "#1976D2",
                    padding: "6px 10px 6px 10px",
                    borderRadius: "20px",
                    color: "#ffff",
                    cursor: "pointer",
                  }}
                  onClick={(e) =>
                    setData({ ...data, type: e.target.innerText })
                  }
                >
                  <Typography>{type}</Typography>
                </Box>
              );
            })}
          </Box>
          {created && (
            <Alert sx={{ marginTop: "30px" }} severity="success">
              Conteúdo criado com sucesso!
            </Alert>
          )}
        </DialogContent>
        <DialogActions
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Button
            autoFocus
            onClick={(e) => submitData(data.id)}
            variant="contained"
          >
            Adicionar
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
