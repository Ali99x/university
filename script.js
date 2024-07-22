// Star animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.stars').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let numStars = 100;

function initStars() {
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width
        });
    }
}

function moveStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        stars[i].z -= 2;
        if (stars[i].z <= 0) {
            stars[i].z = canvas.width;
        }

        const k = 128.0 / stars[i].z;
        const px = stars[i].x * k + canvas.width / 2;
        const py = stars[i].y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - stars[i].z / canvas.width) * 5;
            const shade = parseInt((1 - stars[i].z / canvas.width) * 255);
            ctx.fillStyle = `rgb(${shade}, ${shade}, 255)`; // Blueish stars
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    requestAnimationFrame(moveStars);
}

initStars();
moveStars();


// Sample data
const data = {
    'sulaymaniyah': {
        'جامعة السليمانية': {
            'كلية الطب': {
                'طب عام': { zankoline: 97.6, parallel: 96.6 },
                'طب اسنان': { zankoline: 96.3, parallel: 95.6 },
                'صيدلة': { zankoline: 95.6, parallel: 95.2 },
                'تمريض': { zankoline: 94, parallel: 93 },
                'طب بيطري': { zankoline: 90, parallel: 87.6 },
                'تربية رياضة': { zankoline: 55, parallel: 50 }
            }
        }
    },
    'Duhok': {
        'جامعة دهوك': {
            'كلية الطب': {
                'طب اسنان': { zankoline: 94.4, parallel: 93.71 },
                'صيدلة': { zankoline: 93.9, parallel: 93.4 },
                'طب بيطري': { zankoline: 79.1, parallel: 73.6 }
            }
        }
    }
};

// Function to update universities based on the selected city
function updateUniversities() {
    const city = document.getElementById('city').value;
    const universitySelect = document.getElementById('university');
    universitySelect.innerHTML = '<option value="">اختر جامعة</option>';
    document.getElementById('college').innerHTML = '<option value="">اختر كلية</option>';
    document.getElementById('department').innerHTML = '<option value="">اختر قسم</option>';
    document.getElementById('zankoline-grade').textContent = '';
    document.getElementById('parallel-grade').textContent = '';

    if (city && data[city]) {
        const universities = Object.keys(data[city]);
        universities.forEach(university => {
            const option = document.createElement('option');
            option.value = university;
            option.textContent = university;
            universitySelect.appendChild(option);
        });
        // Add bounce animation class for visual feedback
        universitySelect.classList.add('bounce');
        setTimeout(() => universitySelect.classList.remove('bounce'), 600); // Remove animation class after effect
    }
}

// Function to update colleges based on the selected university
function updateColleges() {
    const city = document.getElementById('city').value;
    const university = document.getElementById('university').value;
    const collegeSelect = document.getElementById('college');
    collegeSelect.innerHTML = '<option value="">اختر كلية</option>';
    document.getElementById('department').innerHTML = '<option value="">اختر قسم</option>';
    document.getElementById('zankoline-grade').textContent = '';
    document.getElementById('parallel-grade').textContent = '';

    if (city && university && data[city][university]) {
        const colleges = Object.keys(data[city][university]);
        colleges.forEach(college => {
            const option = document.createElement('option');
            option.value = college;
            option.textContent = college;
            collegeSelect.appendChild(option);
        });
        // Add bounce animation class for visual feedback
        collegeSelect.classList.add('bounce');
        setTimeout(() => collegeSelect.classList.remove('bounce'), 600); // Remove animation class after effect
    }
}

// Function to update departments based on the selected college
function updateDepartments() {
    const city = document.getElementById('city').value;
    const university = document.getElementById('university').value;
    const college = document.getElementById('college').value;
    const departmentSelect = document.getElementById('department');
    departmentSelect.innerHTML = '<option value="">اختر قسم</option>';
    document.getElementById('zankoline-grade').textContent = '';
    document.getElementById('parallel-grade').textContent = '';

    if (city && university && college && data[city][university][college]) {
        const departments = Object.keys(data[city][university][college]);
        departments.forEach(department => {
            const option = document.createElement('option');
            option.value = department;
            option.textContent = department;
            departmentSelect.appendChild(option);
        });
        // Add bounce animation class for visual feedback
        departmentSelect.classList.add('bounce');
        setTimeout(() => departmentSelect.classList.remove('bounce'), 600); // Remove animation class after effect
    }
}

// Function to display grades based on the selected department
function displayGrades() {
    const city = document.getElementById('city').value;
    const university = document.getElementById('university').value;
    const college = document.getElementById('college').value;
    const department = document.getElementById('department').value;

    if (city && university && college && department && data[city][university][college][department]) {
        const grades = data[city][university][college][department];
        document.getElementById('zankoline-grade').textContent = `معدل زانكولاين: ${grades.zankoline}`;
        document.getElementById('parallel-grade').textContent = `معدل باراليل: ${grades.parallel}`;
        
        // Add fade-in animation class for visual feedback
        const resultDiv = document.getElementById('result');
        resultDiv.classList.add('fade-in');
        setTimeout(() => resultDiv.classList.remove('fade-in'), 1000); // Remove animation class after effect
    } else {
        document.getElementById('zankoline-grade').textContent = '';
        document.getElementById('parallel-grade').textContent = '';
    }
}

// Function to display a notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Add event listeners
document.getElementById('city').addEventListener('change', updateUniversities);
document.getElementById('university').addEventListener('change', updateColleges);
document.getElementById('college').addEventListener('change', updateDepartments);
document.getElementById('department').addEventListener('change', displayGrades);
