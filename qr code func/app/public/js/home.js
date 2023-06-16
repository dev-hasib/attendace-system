
const students = [{
    id: 'b4be5fe3-d8b3-4bd0-89f6-e8e1d1d5c118',
    roll: '435450',
    name: 'Abdullah Al Hasib',
    shift: '1st',
    tech: 'Electronics',
    semester: '7th',
    attendedToday: false,
    attendRate: '90',
    studentType: 'Good',
    TeacherResRate: '50',
}, {
    id: '68cfc047-8017-4ca4-9265-d16f4925ad71',
    roll: '435471',
    name: 'Al Hasib',
    shift: '1st',
    tech: 'Electronics',
    semester: '7th',
    attendedToday: false,
    attendRate: '85',
    studentType: 'Average',
    TeacherResRate: '80',
}, {
    id: 'ddb0e7a7-e069-4a5b-b6be-efabc1f599af',
    roll: '435457',
    name: 'Soumoyadev Shaha',
    shift: '1st',
    tech: 'Electronics',
    semester: '7th',
    attendedToday: false,
    attendRate: '80',
    studentType: 'Very Good',
    TeacherResRate: '30',
},]

let scanner = new Instascan.Scanner({
    video: document.getElementById('preview')
});

const attended = [];

let makeUl = document.querySelector('#makeUl');

function clearDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        while (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            array.splice(array.lastIndexOf(array[i]), 1);
        }
    }

    return array;
}

function findStudent(id) {
    const a = students.find(st => st.id === id)
    return a === undefined ? false : true
}




function getStudent(id) {
    if (attended.includes(id)) {
        alert('You have already attended');
    } else if (!findStudent(id)) {
        alert('You are not our student');
    }
    else {
        students.forEach((v) => {
            if (v.id === id) {
                makeUl.innerHTML += `
                <li class="list-group-item">
                    <a target='__blank' href="/${v.name + '/' + v.roll + '/' + v.attendRate + '/' + v.studentType + '/' + v.TeacherResRate}"><h5 style="display: inline;">${v.name}</h5></a>
                    <img width="20px" class="text-success float-end" src="./icons/tick.svg">
                </li>
    `
            }
        })
    }

}


const bip = document.getElementById('bip');
scanner.addListener('scan', (id) => {
    bip.play()
    getStudent(id);
    attended.push(id)
    clearDuplicates(attended);
})



Instascan.Camera.getCameras()
    .then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (e) {
        console.error(e);
    });

