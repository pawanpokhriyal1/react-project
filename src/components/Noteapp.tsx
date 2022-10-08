import React, { useState } from 'react'
import {AppName,Student} from "../Interface/Basic"

export const Noteapp = ({ name }: AppName) => {
    
    const [student, setStudent] = useState<Student>(); 
   
    const addStudent = () => {
        setStudent({
            name: "pawan miracle",
            surname: "negi",
            age:22
       })
    }
  return (
      <div>
          <h1>{name }</h1>
          <p>{student?.name} {student?.surname}</p>
          <button onClick={()=>addStudent()}>Add student</button>
      
    </div>
  )
}
