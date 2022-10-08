import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import { FC } from "react";
import { MynoteProp } from "./Mynote";
import { Errors } from "./Mynote";
import { Form } from "react-bootstrap";
import { Formik, Field, withFormik, useFormik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";

interface ChildPropsType {
  setNotes: Dispatch<SetStateAction<MynoteProp>>;
  setBook: Dispatch<SetStateAction<MynoteProp[]>>;
}

type InputProps = {
  ifnotitle: boolean;
  ifnobody: boolean;
  ifedit: boolean;
  handleNotes: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  addTobook: (notes: MynoteProp) => void;
  saveEditData: (values: MynoteProp) => void;
  notes: MynoteProp;
  NoteText: MynoteProp;
  book: MynoteProp[];
};

export const InputNoteBox: FC<InputProps & ChildPropsType> = ({
  ifnotitle,
  ifnobody,
  ifedit,
  saveEditData,
  addTobook,
  handleNotes,
  notes,
  NoteText,
  book,
  setBook,
  setNotes,
}) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: notes,
    validationSchema: Yup.object({
      title: Yup.string().max(20).min(5).trim().required("Required"),
      notebody: Yup.string().max(200).min(10).trim().required("Required"),
    }),
    onSubmit: (values) => {
      if (ifedit === true) {
        saveEditData(values);
      } else {
        addTobook(values);
      }

      formik.resetForm({
        values: notes,
      });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="app-box row border border-2 m-2  ">
        <div className="col-3 m-auto">
          <p className="app-title fs-1">NOTE APP</p>
        </div>

        <div className="title-box col-10">
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            // value={notes.title}
            name="title"
            className="Note-title p-4 my-2"
            placeholder="Enter Title"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-danger">{formik.errors.title}</div>
          ) : null}
          {/* {ifnotitle ? (
            <Alert severity="error">
              This is an error alert — it can't be empty!
            </Alert>
          ) : (
            <></>
          )} */}
        </div>
        <div className="col-10">
          <textarea
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.notebody}
            name="notebody"
            className="Text-area "
          />
          {formik.touched.notebody && formik.errors.notebody ? (
            <div className="text-danger">{formik.errors.notebody}</div>
          ) : null}
          {/* {ifnobody ? (
            <Alert severity="error">
              This is an error alert — it can't be empty!
            </Alert>
          ) : (
            <></>
          )} */}
          {ifedit ? (
            <button className="btn  btn-success m-2" type="submit">
              Save
            </button>
          ) : (
            <button className="btn  btn-success m-2" type="submit">
              Add
            </button>
          )}
        </div>
      </div>
    </Form>
  );
};
