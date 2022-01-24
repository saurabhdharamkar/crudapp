import Student from './Student'


export default class StudOperations {

    studArray = new Set();
    constructor() {
        this.studArray.add(new Student(111, 'Rahul', 'Java', 'SY'));
        this.studArray.add(new Student(112, 'Saurabh', 'PYTHON', 'SY'));
        this.studArray.add(new Student(113, 'Ganesh', 'SQL', 'FY'));
    }
    getAllStudents() {
        //console.log(this.studArray);
        return [...this.studArray];
    }

    addStudent(stud) {
        let studnt = new Student(parseInt(stud.id), stud.name, stud.department, stud.year);
        console.log(studnt);
        this.studArray.add(studnt);
        return [...this.studArray];
    }

    searchStudent(stdId) {

        return [...this.studArray].find((student) => student.id === stdId);
    }

    updateStudent(stdnt) {
        console.log("in update Method");
        let student = this.searchStudent(parseInt(stdnt.id));
        console.log(student);
        this.studArray.delete(student);
        let studnt = new Student(parseInt(stdnt.id), stdnt.name, stdnt.department, stdnt.year);
        this.studArray.add(studnt);
        console.log([...this.studArray]);
        return [...this.studArray];


    }
    deleteStudent(id) {
        console.log("in delete Method");
        let student = this.searchStudent(id);
        console.log(student);
        this.studArray.delete(student);
        console.log([...this.studArray]);
        return [...this.studArray];


    }
}