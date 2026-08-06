const students = [];

function addStudent(name, rollNo, age, email) {

    if (!name || name.trim() === "") {
        return "Name Required";
    }

    if (!rollNo) {
        return "Roll Number Required";
    }

    if (age < 18) {
        return "Student must be 18+";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return "Invalid Email";
    }

    const student = students.find(s => s.rollNo === rollNo);

    if (student) {
        return "Roll Number Already Exists";
    }

    students.push({
        name,
        rollNo,
        age,
        email
    });

    return "Student Added Successfully";
}

module.exports = {
    addStudent
};