import BtnLoader from "../loader/BtnLoader";
import Loader from "../loader/Loader";
import StudentList from "../studentsList/StudentList";
import { useStudents } from "./useStudents";

function Students() {
  const [
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
    ctaLoading,
  ] = useStudents();
  return (
    <>
      {/* //inputs Section */}
      <div className="container">
        <h3 className="text-center pt-4 fw-bold">Add New Student</h3>

        <div className="row g-3  m-auto">
          <div className="col-md-6 col-sm-12 col ">
            <label for="Name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Jhon Smith"
              id="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <label for="Roll#" className="form-label">
              Roll no.
            </label>
            <input
              type="text"
              className="form-control"
              id="Roll"
              value={roll}
              placeholder="e.g. 1234"
              onChange={(e) => {
                setRoll(e.target.value);
              }}
            />
          </div>
          <div className="col-12 col-sm-12 ">
            <label for="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="Address"
              placeholder="1234 Main St"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <label for="Phone#" className="form-label">
              Phone no.
            </label>
            <input
              type="number"
              placeholder="+92XXXXXXXXXX"
              value={phone}
              className="form-control"
              id="Phone#"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <label for="Course" className="form-label">
              Course Name
            </label>
            <select
              value={courseName}
              id="Course"
              className="form-select"
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            >
              <option value="" selected disabled>
                Choose...
              </option>
              <option>Web & Mobile App Development</option>
              <option>API Development</option>
              <option>Machine Learning</option>
              <option>Artificial Intelligence</option>
              <option>Cloud Computing</option>
              <option>IOT</option>
            </select>
          </div>
          <div className="col-md-4 col-sm-12">
            <label for="Batch#" className="form-label">
              Batch no.
            </label>
            <select
              value={batchNo}
              id="Batch#"
              className="form-select"
              onChange={(e) => {
                setBatchNo(e.target.value);
              }}
            >
              <option value="" selected disabled>
                Choose...
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="col-md-4 col-sm-12">
            <label for="Age" className="form-label">
              Age
            </label>
            <input
              type="number"
              value={age}
              placeholder="Years"
              className="form-control"
              id="Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>

          <div className="col-12">
            {flag ? (
              <button
                type="submit"
                className="btn btn-success"
                onClick={ctaUpdateHandler}
              >
                {ctaLoading ? <BtnLoader /> : "Update"}
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-success"
                onClick={ctaHandler}
              >
                {ctaLoading ? <BtnLoader /> : "Submit"}
              </button>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* //List of Students */}
      <div>
        <h3 className="text-center pb-2 fw-bold ">List Of Students</h3>
        <div className="table-responsive">

       
        <table className="table table-striped table-hover tableList ">
          <thead className="table-dark">
            <tr>
              <th scope="col">Sr.</th>
              <th scope="col">Name</th>
              <th scope="col">Roll no.</th>
              <th scope="col">Course Name</th>
              <th scope="col">Batch no.</th>
              <th scope="col">Age (Year)</th>
              <th scope="col">Phone no.</th>
              <th scope="col">Address</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="pb-5">
          <>

            {students.length === 0 ? (
              <p style={{ textAlign: "center", width: "100vw" }}>
                No Students Found
              </p>
            ) : (
              students.map((studentItem, i) => {
                return (
                  <StudentList
                    index={i}
                    data={studentItem}
                    deleteHandler={deleteHandler}
                    updateHandler={updateHandler}
                  />
                );
              })
            )}
          </>
          </tbody>
        </table> </div>
          {loading && <Loader />}
      </div>
    </>
  );
}

export default Students;
