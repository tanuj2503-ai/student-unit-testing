const { addStudent } = require("./student");

test("Valid Student", () => {
    expect(addStudent("Rahul",101,20,"rahul@gmail.com"))
        .toBe("Student Added Successfully");
});

test("Empty Name", () => {
    expect(addStudent("",102,20,"abc@gmail.com"))
        .toBe("Name Required");
});

test("Age Validation", () => {
    expect(addStudent("Amit",103,15,"amit@gmail.com"))
        .toBe("Student must be 18+");
});

test("Invalid Email", () => {
    expect(addStudent("Raj",104,20,"rajgmail.com"))
        .toBe("Invalid Email");
});

test("Duplicate Roll Number", () => {

    addStudent("John",105,21,"john@gmail.com");

    expect(addStudent("Peter",105,22,"peter@gmail.com"))
        .toBe("Roll Number Already Exists");
});