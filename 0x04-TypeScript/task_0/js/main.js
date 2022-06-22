var stud1 = {
    firstName: 'Nathy',
    lastName: 'Girma',
    age: 25,
    location: "shashamane"
};
var stud2 = {
    firstName: 'Abdisa',
    lastName: 'Gemechu',
    age: 25,
    location: "shashamane"
};
var studentsList = [stud1, stud2];
var table = document.createElement('table');
document.body.appendChild(table); // Drew the main table node on the document
for (var i = 0; i < 2; i++) {
    var trElement = document.createElement('tr'); //Create 3 <tr> elements assigned to a unique variable BUT need a working alternative for 'tr[i]'
    trElement.innerHTML = studentsList[i].firstName;
    table.appendChild(trElement); // Append to <table> node
}
