// import { getValue } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { Notecard } from "./Notecard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as React from "react";
import { Warningmodal } from "./Warningmodal";
import { InputNoteBox } from "./InputNoteBox";
import { Item } from "react-bootstrap/lib/Breadcrumb";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
// import { useFormik } from "formik";
// import {
//   Formik,
//   FormikHelpers,
//   FormikProps,
//   Form,
//   Field,
//   FieldProps,
// } from "formik";

export interface MynoteProp {
  title: string;
  notebody: string;
  id: number;
}
export interface Errors {
  title?: string;
  notebody?: string;
  id?: number;
}

export const Mynote = () => {
  const NoteText: MynoteProp = {
    title: "",
    notebody: "",
    id: new Date().getTime(),
  };

  // const [noteTitle, setNoteTitle] = useState<string>();
  const [notes, setNotes] = useState(NoteText);
  const [book, setBook] = useState<MynoteProp[]>([]);
  const [ifedit, setIfedit] = useState<boolean>(false);
  // const [ifdelete, setIfdelete] = useState<boolean>(false);
  const [ifnotitle, setIfnotitle] = useState<boolean>(false);
  const [ifnobody, setIfnobody] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const [deleteItem, setDeleteitem] = useState(NoteText);
  const [isActive, setIsActive] = useState<boolean>(true);
  // const [editItem, setEditItem] = useState<MynoteProp>(NoteText);

  const handleClose = (): void => {
    setShow(false);
  };

  const handleShow = (
    item: MynoteProp,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    // else if (window.event) {
    //   window.event.cancelBubble = true;
    // }
    setShow(true);
    setDeleteitem(item);
  };

  // const handleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setNoteTitle(event.target.value);
  // };
  const handleNotes = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setNotes({ ...notes, [name]: value });
  };

  const emptyTextAlert = (): void => {
    toast("Input box must have some value can't add emty");
  };
  const arr: any = [];
  const addTobook = (values: MynoteProp): void => {
    // if (notes === NoteText || notes.title === "" || notes.notebody === "") {
    //   emptyTextAlert();
    //   if (notes.title === "") {
    //     setIfnotitle(true);
    //   }
    //   if (notes.notebody === "") {
    //     setIfnobody(true);
    //   }
    //   if (notes.title !== "") {
    //     setIfnotitle(false);
    //   }
    //   if (notes.notebody !== "") {
    //     setIfnobody(false);
    //   }
    // } else {

    // setIfnobody(false);
    // setIfnotitle(false);
    // }
    setBook([...book, values]);
  };
  console.log(book);

  const deleteNoteFromBook = (): void => {
    // let text: string = "Do you really want to delete this note";
    // if (window.confirm(text) === true) {
    //   const arr = [...book];
    //   arr.splice(index, 1);
    //   console.log(index);
    //   setBook([...arr]);
    //   console.log(book);
    //   setNotes(NoteText);
    //   setIfedit(false);
    // }

    let arr = book.filter((elem, index) => elem.id !== deleteItem.id);

    setBook([...arr]);
    console.log(book);
    // console.log(index);
    setNotes(NoteText);
    setIfedit(false);
    handleClose();
  };

  const editNoteFromBook = (item: MynoteProp) => {
    setIfedit(true);
    setNotes(item);
    // setIfnotitle(false);
    // setIfnobody(false);
    console.log(notes);
  };
  const saveEditData = (values: MynoteProp) => {
    // if (notes === NoteText || notes.title === "" || notes.notebody === "") {
    //   emptyTextAlert();
    //   if (notes.title === "") {
    //     setIfnotitle(true);
    //   }
    //   if (notes.notebody === "") {
    //     setIfnobody(true);
    //   }
    //   if (notes.title !== "") {
    //     setIfnotitle(false);
    //   }
    //   if (notes.notebody !== "") {
    //     setIfnobody(false);
    //   }
    // } else {
    let pos = book.findIndex((elem, index) => elem.id === values.id);

    console.log(pos);

    const arr = [...book];
    arr.splice(pos, 1, values);
    setBook([...arr]);
    setNotes(NoteText);
    setIfedit(false);

    // }
  };
  const handleListView = () => {
    setIsActive(false);
  };
  const handleGridView = () => {
    setIsActive(true);
  };
  // const deleteAlert = (): void => {
  //   setIfallowdel(true);
  // };
  const elements: React.ReactElement[] = [
    <ModalHeader title="Confirmation Box" />,
    <ModalBody body="Do you really want to delete !!!" />,
  ];

  const StopEventPropagation = (
    event: React.ChangeEvent<HTMLButtonElement>
  ): void => {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else if (window.event) {
      window.event.cancelBubble = true;
    }
  };

  return (
    <>
      {/* <div className="app-box row border border-2 m-2  ">
        <div className="col-3 m-auto">
          <p className="app-title fs-1">NOTE APP</p>
        </div>

        <div className="title-box col-10">
          <input
            onChange={(e) => setNotes({ ...notes, title: e.target.value })}
            value={notes.title}
            name="title"
            className="Note-title p-4 my-2"
            placeholder="Enter Title"
          />
          {ifnotitle ? (
            <Alert severity="error">
              This is an error alert — it can't be empty!
            </Alert>
          ) : (
            <></>
          )}
        </div>
        <div className="col-10">
          <textarea
            onChange={(e) => handleNotes(e)}
            value={notes.notebody}
            name="notebody"
            className="Text-area "
          />
          {ifnobody ? (
            <Alert severity="error">
              This is an error alert — it can't be empty!
            </Alert>
          ) : (
            <></>
          )}
          {ifedit ? (
            <button
              className="btn  btn-success m-2"
              onClick={() => saveEditData()}
            >
              Save
            </button>
          ) : (
            <button
              className="btn  btn-success m-2"
              onClick={() => addTobook()}
            >
              Add
            </button>
          )}
        </div>
      </div> */}

      <InputNoteBox
        ifnotitle={ifnotitle}
        ifnobody={ifnobody}
        ifedit={ifedit}
        handleNotes={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleNotes(event)}
        addTobook={addTobook}
        saveEditData={saveEditData}
        notes={notes}
        NoteText={NoteText}
        setNotes={setNotes}
        setBook={setBook}
        book={book}
      />

      <div className="row libray">
        <div>
          <button
            onClick={() => handleGridView()}
            className={
              isActive ? "hide-body " : "show-body btn m-2 btn-primary"
            }
          >
            Grid View
          </button>
          <button
            onClick={() => handleListView()}
            className={
              isActive ? " show-body btn m-2 btn-primary" : "hide-body "
            }
          >
            List view
          </button>
        </div>
        {book.length > 0 ? (
          book.map((item, index) => {
            return (
              <div className={isActive ? "col-6" : "col-12"} key={item.id}>
                <Notecard
                  title={item.title}
                  body={item.notebody}
                  // ondelFunc={() => deleteNoteFromBook(item.id)}
                  oneditFunc={() => editNoteFromBook(item)}
                  index={index}
                  item={item}
                  id={item.id}
                  handleClose={() => handleClose()}
                  handleShow={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => handleShow(item, e)}
                  show={show}
                  isActive={isActive}
                />
              </div>
            );
          })
        ) : (
          <></>
        )}
        {show === true ? (
          <>
            <Warningmodal
              elements={elements}
              handleClose={() => handleClose()}
              show={show}
              ondelFunc={() => deleteNoteFromBook()}
            />
          </>
        ) : (
          <></>
        )}

        <ToastContainer />
      </div>
    </>
  );
};
