import {
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_STUDENTS,
  UPDATE_STUDENT,
} from "../../constants/types";

import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

//Network Requests/fetching will be only done in actions

//fetching data from firebase in action
export const fetchStudent = (setLoading) => async (dispatch, prevState) => {
  setLoading(true);
  try {
    let snapshot = await getDocs(collection(db, "students"));
    let students = [];
    snapshot.forEach((doc) => {
      students.push({
        docID: doc.id,
        ...doc.data(),
      });
      console.log(students);
    });
    dispatch({
      type: GET_STUDENTS,
      payload: students,
    });
  } catch (error) {
    console.log("ERROR IN FETCHING STUDENTS FROM FIREBASE", error);
  } finally {
    setLoading(false);
  }
};

//adding a student from front end to firestore action
export const addStudent = (data, setLoading) => async (dispatch, prevState) => {
  try {
    setLoading(true);
    await addDoc(collection(db, "students"), {
      S_Id: data.S_Id,
      S_name: data.S_name,
      S_rollNo: data.S_rollNo,
      S_phone: data.S_phone,
      S_course: data.S_course,
      S_batch: data.S_batch,
      S_age: data.S_age,
      S_address: data.S_address,
      DateCreated: new Date()
    });
    dispatch({
      type: ADD_STUDENT,
      payload: data,
    });
  } catch (error) {
    console.log("Error while adding data tto firestore", error);
  } finally {
    setLoading(false);
  }
};

export const updateStudent = (data) => {
  return {
    type: UPDATE_STUDENT,
    payload: data,
  };
};
export const deleteStudent = (docID,setLoading) =>async (dispatch,prevState)=> {
  setLoading(true)
  try{
    await deleteDoc(doc(db, "students",docID));
    dispatch( {
      type: DELETE_STUDENT,
      payload: docID,
    });
  }catch(error){

    console.log("ERROR WHILE DELETING DATA FROM FIREBSE",error)
  }
  finally{
    setLoading(false)
  }
};
