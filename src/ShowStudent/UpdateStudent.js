import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom"
import { showStudents, updateStudents } from "../Actions/StudentAction";
import Student from "../StudentData/Student";

export let UpdateStudent = () => {
    let { id } = useParams();
    let [flag, setFlag] = useState(false);

    const [student, setStudent] = useState(new Student());

    const setDetail = (e) => {
        e.preventDefault();
        setStudent({ ...studentfound, [e.target.name]: e.target.value });
    }

    const test = (e) => {
        e.preventDefault();
        console.log(student);
        dispatch(updateStudents(student));
        setFlag(true);

    }
    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(showStudents())
        setStudent(studentfound);
    }, 1000);

    let ii = parseInt(id);
    let searchStud = (i) => {
        return studAr.find((student) => student.id === i)
    }
    let studentfound = searchStud(ii);
    return (
        <>
            <div className="container bg-secondary mt-5 p-5 border border-secondary border-5  d-flex justify-content-center">
                {
                    flag === false ?
                        <form className="form-group w-50">
                            <label>ID</label>
                            <input type="number" disabled className="form-control border border-dark" name="id" value={student.id} onChange={setDetail} />

                            <label>Enter Name</label>
                            <input type="text" className="form-control border border-dark" name="name" value={student.name} onChange={setDetail} />

                            <label>Enter Department</label>
                            <input type="text" className="form-control border border-dark" name="department" value={student.department} onChange={setDetail} />

                            <label>Enter year</label>
                            <input type="text" className="form-control border border-dark" name="year" value={student.year} onChange={setDetail} />

                            <input type="submit" onClick={test} className="mt-2 btn btn-success" placeholder="Update" /><input type="reset" className="mx-3 mt-2 btn btn-danger" placeholder="Reset" />
                        </form> : <Navigate to="/student/showall" />
                }
            </div>
        </>
    )
}