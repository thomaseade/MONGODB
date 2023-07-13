
const mongoose = require("mongoose");
const { Teachers, Marks } = require("./Schemas");

mongoose.connect('mongodb+srv://eadethomas:esklavos100@retomongo.0p0fsfh.mongodb.net/Codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false});







                  

//  PROFESORES


const teacher1 = {
    teacher_first_name: "Dani",
    teacher_last_name: "Codenotch"
};

const teacher2 = {
    teacher_first_name: "Menchu",
    teacher_last_name: "Codenotch"
};

const teacher3 = {
    teacher_first_name: "Joselin",
    teacher_last_name: "Rodriguez"
};

const teacher4 = {
    teacher_first_name: "Martin",
    teacher_last_name: "Osborne"
};

const teacher5 = {
    teacher_first_name: "Jack",
    teacher_last_name: "Sparrow"
};






// NOTAS


const mark1 = {
    date: "2020-12-12",
    mark: 10,
    student_first_name: "Thomas",
    student_last_name: "Eade",
    group_name: "Primero",
    subject_name: "Programacion",
    teachers: [teacher1, teacher2, teacher3]
};

const mark2 = {
    date: "2020-01-01",
    mark: 5,
    student_first_name: "Pepe",
    student_last_name: "Rodriguez",
    group_name: "Segundo",
    subject_name: "Ingles",
    teachers: [teacher3, teacher4]
};

const mark3 = {
    date: "2020-10-10",
    mark: 10,
    student_first_name: "Juan",
    student_last_name: "Perez",
    group_name: "Segundo",
    subject_name: "Educacion Fisica",
    teachers: [teacher5, teacher2, teacher3]
};

const mark4 = {
    date: "2020-05-05",
    mark: 8,
    student_first_name: "Pepito",
    student_last_name: "Gonzalez",
    group_name: "Tercero",
    subject_name: "Lengua",
    teachers: [teacher4, teacher1, teacher2]
};

const mark5 = {
    date: "2020-12-12",
    mark: 8,
    student_first_name: "Juan",
    student_last_name: "Gomez",
    group_name: "primero",
    subject_name: "Mates",
    teachers: [teacher4, teacher5, teacher1]
};

const mark6 = {
    date: "2020-12-12",
    mark: 5,
    student_first_name: "Alvaro",
    student_last_name: "Lopez",
    group_name: "segundo",
    subject_name: "Frances",
    teachers: [teacher2, teacher3, teacher4]
};

const mark7 = {
    date: "2023-05-02",
    mark: 10,
    student_first_name: "Vcitor",
    student_last_name: "Hermida",
    group_name: "tercero",
    subject_name: "Quimica",
    teachers: [teacher3, teacher2, teacher3]
};

const mark8 = {
    date: "2023-02-01",
    mark: 6,
    student_first_name: "Sandra",
    student_last_name: "Gomez",
    group_name: "tercero",
    subject_name: "Historia",
    teachers: [teacher1, teacher5, teacher1]
};

const mark9 = {
    date: "2023-01-01",
    mark: 8,
    student_first_name: "Rodrigo",
    student_last_name: "Garcia",
    group_name: "primero",
    subject_name: "Historia",
    teachers: [teacher1, teacher3, teacher2]
};

const mark10 = {
    date: "2023-07-07",
    mark: 10,
    student_first_name: "Maria",
    student_last_name: "Retamar",
    group_name: "segundo",
    subject_name: "Educacion Fisica",
    teachers: [teacher5]
};


// AÑADIR PROFESORES

// Teachers.insertMany([teacher1,teacher2,teacher3,teacher4,teacher5])
//     .then((data) => {
//         console.log(`Se han añadido ${data.length} teachers.`);
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error: " + err);
//     });



// AÑADIR NOTAS 


// Marks.insertMany([mark1,mark2,mark3,mark4,mark5,mark6,mark7,mark8,mark9,mark10])
//     .then((data) => {
//         console.log(`Se han añadido ${data.length} marks.`);
//         console.log(data);
//         mongoose.disconnect();
//     })
//     .catch((err) => {
//         console.log("Error: " + err);
//     });







// RETO 



// Calcular nota media de "Historia"


// Marks.aggregate([{$match: {subject_name: "Historia"}},
//                 {$group: {_id: null, notaMedia: {$avg: "$mark"}}}])
//                 .then((data) => {
//                     console.log(`Nota media = ${data[0].notaMedia}`);
//                     mongoose.disconnect();
//                 })
//                 .catch((err) => {
//                     console.log("Error: " + err);
//                 });







// Numero total de alumnos con repetidos)


// Marks.aggregate([{$group: {_id: null, totalAlumnos: {$sum: 1}}}])
//                 .then((data) => {
//                     console.log(`Número total de Alumnos = ${data[0].totalAlumnos}`);
//                     mongoose.disconnect();
//                 })
//                 .catch((err) => {
//                     console.log("Error: " + err);
//                 });






// Nombre y apellidos de todos los alumnos con repetidos


// Marks.aggregate([{$project: {_id: 0, student_first_name: 1, student_last_name: 1}}])
//                 .then((data) => {
//                     console.log(data);
//                     mongoose.disconnect();
//                 })
//                 .catch((err) => {
//                     console.log("Error: " + err);
//                 });






// Nombre y apellidos de todos los profesores con repetidos


// Marks.aggregate([{$project: {_id: 0, teachers: 1}}])
//                 .then((data) => {
//                     console.log('[');
//                     data.forEach((teachers) => {
//                         teachers.teachers.forEach((teacher)=>{
//                             console.log(`  { teacher_first_name: '${teacher.teacher_first_name}', teacher_last_name: '${teacher.teacher_last_name}'}`);
//                         })
//                     })
//                     console.log(']');
//                     mongoose.disconnect();
//                 })
//                 .catch((err) => {
//                     console.log("Error: " + err);
//                 });





// Numero total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto


// Marks.aggregate([{$group: {_id: "$group_name", NumeroTotalAlumnos: {$sum: 1}}},
//                 {$sort: {_id: -1}}])
//                 .then((data) => {
//                     console.log(data);
//                     mongoose.disconnect();
//                 })
//                 .catch((err) => {
//                     console.log("Error: " + err);
//                 });






// Obtener TOP 5 de las asignaturas con media mayor que 5


// Marks.aggregate([{$group: {_id: "$subject_name", Top5Media: {$avg: "$mark"}}},
//             {$match: {Top5Media: {$gt: 5}}},
//             {$sort: {Top5Media: -1}},
//             {$limit: 5}])
//               .then((data) => {
//                  console.log(data);
//                  mongoose.disconnect();
//              })
//               .catch((err) => {
//                     console.log("Error: " + err);
//               });






// Numero de profesores por asignatura, con repetidos



// Marks.aggregate([{$unwind: "$teachers"},
//                 {$group: {_id: "$subject_name", NumeroProfesores: {$sum: 1}}}])
//                 .then((data) => {
//                     console.log(data);
//                     mongoose.disconnect();
//                 })
//                 .catch((err) => {
//                     console.log("Error: " + err);
//                 });