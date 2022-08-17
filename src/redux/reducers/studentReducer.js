import {
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_STUDENTS,
  UPDATE_STUDENT,
} from "../../constants/types";
const initiaState = {
  error: "",
  studentsList: [],
};
console.log("initiaState.studentsList",initiaState.studentsList)
function studentReducer(state = initiaState, action) {
  switch (action.type) {
    case GET_STUDENTS:
      // console.log("action.payload",action.payload)
      return({
        ...state,
        studentsList: action.payload
      }); 
    case ADD_STUDENT:
      const newStudentsList = state.studentsList;
      newStudentsList.push(action.payload)
      return ({
        ...state,
        studentsList: newStudentsList

      });

    case DELETE_STUDENT:
      let remainingStudents = state.studentsList.filter((item) => item.docID !== action.payload)
      return{
        ...state,
        studentsList: remainingStudents
      }
    case UPDATE_STUDENT:
      return;

    default:
      return state;
  }
}
export default studentReducer;
