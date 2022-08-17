import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addStudent, deleteStudent, fetchStudent } from "../../redux/actions/studentAction";

export function useStudents() {
  //states for form input data start
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [courseName, setCourseName] = useState("");
  const [batchNo, setBatchNo] = useState("");
  //states for form input data end

  //additional decision making/loading states start
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ctaLoading, setCtaLoading] = useState(false);
  //additional decision making/loading states end

  const dispatch = useDispatch();

  // students data will be fetched automaticaly here
  useEffect(() => {
    dispatch(fetchStudent(setLoading));
  }, []);

  // getting students list from store
  const students = useSelector((store) => store.studentReducer.studentsList);

  // handler for adding new students start
  const ctaHandler = () => {
    if (
      name !== "" &&
      roll !== "" &&
      phone !== "" &&
      courseName !== "" &&
      address !== "" &&
      age !== "" &&
      batchNo !== ""
    ) {
      let studentFormData = {
        S_Id: uuidv4(),
        S_name: name,
        S_rollNo: roll,
        S_phone: phone,
        S_course: courseName,
        S_batch: batchNo,
        S_age: age,
        S_address: address,
      };

      // data passed to action 
      dispatch(addStudent(studentFormData,setCtaLoading))
      
      //Clear all inputs
      setName("");
      setRoll("");
      setAge("");
      setAddress("");
      setPhone("");
      setCourseName("");
      setBatchNo("");
    } else {
      alert("All fields are required, please fill out all inputs!");
    }
  };
  // handler for adding new students end

  //Delete Button logics
  const deleteHandler = (docID) => {
    dispatch(deleteStudent(docID,setCtaLoading))
  };

  //Update Button logics - all the data moved to input states
  const updateHandler = (studentItem) => {
    console.log("Student need to be update", studentItem);
    setName(studentItem.S_name);
    setRoll(studentItem.S_rollNo);
    setAge(studentItem.S_age);
    setAddress(studentItem.S_address);
    setPhone(studentItem.S_phone);
    setCourseName(studentItem.S_course);
    setBatchNo(studentItem.S_batch);
    setFlag(true);
  };

  // handler for updating existing student start
  const ctaUpdateHandler = () => {
    if (
      name !== "" &&
      roll !== "" &&
      phone !== "" &&
      courseName !== "" &&
      address !== "" &&
      age !== "" &&
      batchNo !== ""
    ) {
      let updatingStudent = {
        S_Id: uuidv4(),
        S_name: name,
        S_rollNo: roll,
        S_phone: phone,
        S_course: courseName,
        S_batch: batchNo,
        S_age: age,
        S_address: address,
      };

      console.log("Updating Student", updatingStudent);

      //Clear all inputs
      setName("");
      setRoll("");
      setAge("");
      setAddress("");
      setPhone("");
      setCourseName("");
      setBatchNo("");
      setFlag(false);
    } else {
      alert("All fields are required");
    }
  };
  // handler for updating existing student end
  return [
    students,
    name,
    setName,
    roll,
    setRoll,
    age,
    setAge,
    phone,
    setPhone,
    address,
    setAddress,
    courseName,
    setCourseName,
    batchNo,
    setBatchNo,
    flag,
    ctaHandler,
    deleteHandler,
    updateHandler,
    ctaUpdateHandler,
    loading,
    ctaLoading
  ];
}
