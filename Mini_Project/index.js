let something = {
    student: {
        id: {
            1: {
                student_info: {
                    name: "Zhaxybaev Nursat",
                    course: "Computer Science",
                    student_id: 2023001,
                    grade: "A+"
                }
            },
            2: {
                student_info: {
                    name: "Bekzat Khan",
                    course: "Biology",
                    student_id: 2023002,
                    grade: "B+"
                }
            },
            3: {
                student_info: {
                    name: "Aliya Nur",
                    course: "Mathematics",
                    student_id: 2023003,
                    grade: "A"
                }
            }
        }
    }
}
function create_new_student() {
    let name = document.getElementById("name").value.trim();
    let grade = document.getElementById("grade").value.trim();
    let student_id = document.getElementById("student_id").value.trim();
    let course = document.getElementById("course").value.trim();

    if (!something.student) {
        something.student = { id: {} };
    }

    if (!something.student.id) {
        something.student.id = {};
    }

    let id_object = something.student.id;
    let keys = Object.keys(id_object).map(Number).sort((a, b) => a - b);

    let the_id = 1;
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] !== i + 1) {
            the_id = i + 1;
            break;
        }
        the_id = keys.length + 1;
    }

    something.student.id[the_id] = {
        student_info: {
            name: name,
            course: course,
            student_id: student_id,
            grade: grade
        }
    };

    let students_table = document.getElementById("lol");
    students_table.innerHTML += `<tr>
        <td>${name}</td>
        <td>${student_id}</td>
        <td>${course}</td>
        <td>${grade}</td>
    </tr>`;
}

let ok = document.getElementById("ok");

let the_text = "";

the_text = `<h2 class="mb-3">Student List</h2>
            <table class="table table-bordered table-striped">
                <thead id='lol'>
                    <tr>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>`;

for (let i in something.student.id) {
    let student = something.student.id[i].student_info;
    the_text += `<tr>
                <td>${student.name}</td>
                <td>${student.student_id}</td>
                <td>${student.course}</td>
                <td>${student.grade}</td>
            </tr>`;
}

the_text += `</tbody></table>`;
ok.innerHTML = the_text;