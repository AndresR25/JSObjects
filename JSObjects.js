let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };



function Users(users){
    for (let key in users) {
        console.log(key.toUpperCase());
        for (let i = 0; i < users[key].length; i++) {
            console.log(i+1,users[key][i].last_name,(users[key][i].last_name.length+users[key][i].first_name.length))
        }
    }
}

function Students(students){

    for(let key in students){
        console.log(students[key]);
    }
}

Students(students);

Users(users);