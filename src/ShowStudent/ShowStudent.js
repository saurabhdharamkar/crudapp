import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showStudents } from "../Actions/StudentAction";

export const ShowStudent = () => {

    let studAr = useSelector((store) => store.StudentReducer)
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStudents());
    }, 1000);


    return (
        <div >
            <table className="mt-3 table table-warning table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year</th>
                        
                        
                    </tr>
                </thead>
                {
                    studAr.map((student) => {

                        return (

                            <tbody >
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.department}</td>
                                    <td>{student.year}</td>
                                    <td>
                                        <NavLink to={`/student/update/${student.id}`}><button className="btn btn-warning">Update</button></NavLink>
                                        <NavLink to={`/students/delete/${student.id}`}><button className="btn btn-danger mx-2">Delete</button></NavLink>
                                    </td>
                                </tr>
                            </tbody>
                        );
                    })
                }
            </table>
        </div>
    )
}