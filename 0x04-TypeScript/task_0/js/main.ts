interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const stud1: Student = {
    firstName: 'Nathy',
    lastName: 'Girma',
    age: 25,
    location: "shashamane"
}

const stud2: Student = {
    firstName: 'Abdisa',
    lastName: 'Gemechu',
    age: 25,
    location: "shashamane"

}

const studentsList: Student[] = [stud1, stud2];

let table = document.createElement('table');
document.body.appendChild(table); // Drew the main table node on the document

for (let i = 0; i < 2; i++) {
    let trElement = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
    trElement.innerHTML = studentsList[i].firstName;
    table.appendChild(trElement); // Append to <table> node


}