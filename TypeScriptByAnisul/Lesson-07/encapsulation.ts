class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;

    }
    display(): void {
        console.log('Hello');
    };
}

class Student extends User {
    constructor(userName: string, age: number, studentId: number)
    super(userName, age);
this.studentId = StudentId;
}
display(): void {
    console.log(`userName:${this.userName},age:${this.age},id:${this.studentId}`)
}

let student1 = new Student("Amit", 51, 22235103283);
student1.display();
