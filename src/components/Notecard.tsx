// import React from "react";
import { FC } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MynoteProp } from "./Mynote";
// import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import { idText } from "typescript";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Warningmodal } from "./Warningmodal";
import Modal from "react-bootstrap/Modal";
import { Item } from "react-bootstrap/lib/Breadcrumb";

type Props = {
  title: string;
  body: string;
  index: number;
  item: MynoteProp;
  // ondelFunc: (id: number) => void;
  oneditFunc: () => void;
  id: number;
  show: boolean;
  handleShow: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleClose: () => void;
  isActive: boolean;
};
export const Notecard: FC<Props> = ({
  title,
  body,
  // ondelFunc,
  index,
  item,
  oneditFunc,
  id,
  handleShow,
  handleClose,
  isActive,
  show,
}) => {
  return (
    <div>
      <Card className=" card-box  bg-white m-2 p-3 ">
        {/* <div className="fs-3 text-danger">Title:{title}</div>
        <div className="text-dark card-body">{body}</div> */}

        <Accordion
          className={isActive ? "show-body p-2 grid-box" : "hide-body"}
        >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="row"
          >
            <div className="col-10 m-2 fs-4">Title:{title} </div>
            <div className="col-2 button-box-1 ">
              <Tooltip title="Delete ">
                <IconButton
                  className=" btn-outline rounded "
                  onClick={handleShow}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit note ">
                <IconButton
                  className=" btn-outline rounded"
                  onClick={oneditFunc}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=" row fs-5">{body}</Typography>
          </AccordionDetails>
        </Accordion>
        <div
          className={
            isActive ? "hide-body" : " show-body-1 row fs-3  bg-white list-box"
          }
        >
          <div className="col-10 list-title">Title:{title}</div>
          <div className="col-2  button-box mt-0">
            <Tooltip title="Delete ">
              <IconButton
                className=" btn-outline rounded "
                onClick={handleShow}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Edit note ">
              <IconButton className=" btn-outline rounded" onClick={oneditFunc}>
                <EditIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
};
