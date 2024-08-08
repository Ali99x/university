// Star animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.querySelector('.stars').appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
let numStars = 100;
const starSpeed = 0.7;

function initStars() {
    stars = []; // إعادة تعيين النجوم لتجنب تراكمها
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
        stars[i].z -= starSpeed;
        if (stars[i].z <= 0) {
            stars[i].z = canvas.width;
        }

        const k = 128.0 / stars[i].z;
        const px = stars[i].x * k + canvas.width / 2;
        const py = stars[i].y * k + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const size = (1 - stars[i].z / canvas.width) * 5;
            const shade = parseInt((1 - stars[i].z / canvas.width) * 255);
            ctx.fillStyle = `rgb(${shade}, ${shade}, 255)`;
            ctx.beginPath();
            ctx.arc(px, py, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    requestAnimationFrame(moveStars);
}

initStars();
moveStars();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // إعادة تهيئة النجوم عند تغيير حجم النافذة
});


// منع النسخ
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// منع استخدام قائمة السياق (النقر بزر الفأرة الأيمن)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع تحديد النصوص
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey && e.key === 'c') || (e.ctrlKey && e.key === 'v')) {
        e.preventDefault();
    }
});



// Show the grade input popup
document.getElementById('grade-icon').addEventListener('click', () => {
    document.getElementById('grade-popup').style.display = 'block';
});

// Save grade and hide the popup
document.getElementById('save-grade-btn').addEventListener('click', () => {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    const selectedCollege = document.getElementById('college-select').value;


 const icon = document.getElementById('grade-icon');
    icon.classList.add('rotate-scale');
 // Remove the class after the animation to reset it for future clicks
    setTimeout(() => {
        icon.classList.remove('rotate-scale');
    }, 1); // Duration should match the transition time


    displayData(selectedCity, selectedUniversity, selectedCollege);
    document.getElementById('grade-popup').style.display = 'none';
});



// Data for Erbil
const data = {
    "erbil": {
"جامعة هولير الطبية": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "97.139",
                "online": "97.837"
            },
            {
                "department": "طب اسنان",
                "evening": "-",
                "parallel": "96.333",
                "online": "96.667"
            },
            {
                "department": "صيدلة",
                "evening": "-",
                "parallel": "95.667",
                "online": "96.077"
            }
        ],
        " كلية التمريض": [
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "91.281",
                "online": "92.8"
            }
        ],
        "كلية التمريض": [
            {
                "department": "توليد",
                "evening": "-",
                "parallel": "75.143",
                "online": "81.565"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "مايكروبايلوجي طبي",
                "evening": "-",
                "parallel": "95.429",
                "online": "94.571"
            },
            {
                "department": "كيمياء سريرية",
                "evening": "-",
                "parallel": "89.429",
                "online": "91.66"
            },
            {
                "department": "علاج طبيعي",
                "evening": "-",
                "parallel": "87.649",
                "online": "89.4"
            },
            {
                "department": "صحة المجتمع",
                "evening": "-",
                "parallel": "72.667",
                "online": "78.857"
            },
            {
                "department": "التغذية والحميات",
                "evening": "-",
                "parallel": "70.459",
                "online": "75.2"
            }
        ]
    },
    "جامعة صلاح الدين": {
        "كلية الطب": [
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "88.013",
                "online": "79.143"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "95.849",
                "online": "94.56"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "95.2",
                "online": "94.36"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "89.067",
                "online": "90.88"
            },
            {
                "department": "كيمياء وبتروكيمياء",
                "evening": "-",
                "parallel": "82.932",
                "online": "86.861"
            },
            {
                "department": "كهرباء",
                "evening": "-",
                "parallel": "79.466",
                "online": "81.989"
            },
            {
                "department": "طيران",
                "evening": "-",
                "parallel": "88",
                "online": "88"
            },
            {
                "department": "ميكانيك وميكاترونك",
                "evening": "-",
                "parallel": "80.6",
                "online": "79.433"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "85.52",
                "online": "79.732"
            },
            {
                "department": "مصادر المياه",
                "evening": "-",
                "parallel": "95.72",
                "online": "80.292"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي طبي",
                "evening": "-",
                "parallel": "88.013",
                "online": "89.667"
            },
            {
                "department": "بايولوجي عام",
                "evening": "-",
                "parallel": "81.2",
                "online": "85.9"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "78.281",
                "online": "80.814"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "78.281",
                "online": "83.254"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "76.936",
                "online": "80.5"
            },
            {
                "department": "فيزياء طبي",
                "evening": "-",
                "parallel": "74.489",
                "online": "79"
            },
            {
                "department": "فيزياء عام",
                "evening": "-",
                "parallel": "66.257",
                "online": "71.5"
            },
            {
                "department": "النفط والأرض",
                "evening": "-",
                "parallel": "59.701",
                "online": "62.947"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "57.35",
                "online": "62.806"
            },
            {
                "department": "صحة البيئة",
                "evening": "-",
                "parallel": "58.013",
                "online": "63.164"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "كافة الاقسام",
                "evening": "-",
                "parallel": "53.538",
                "online": "58.386"
            }
        ],
        "كلية العلوم السياسية": [
            {
                "department": "سياسة دبلوماسية وخارجية",
                "evening": "-",
                "parallel": "59.854",
                "online": "66.644"
            },
            {
                "department": "سياسة العامة",
                "evening": "-",
                "parallel": "58.1",
                "online": "64.1"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "77.6",
                "online": "81.429"
            }
        ],
        "كلية اللغات": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "73.209",
                "online": "77.4"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "60.8",
                "online": "61.6"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "57.9",
                "online": "62.3"
            },
            {
                "department": "فارسي",
                "evening": "-",
                "parallel": "60",
                "online": "65"
            },
            {
                "department": "الماني",
                "evening": "-",
                "parallel": "57.2",
                "online": "62.464"
            },
            {
                "department": "فرنسي",
                "evening": "-",
                "parallel": "58.549",
                "online": "61.997"
            },
            {
                "department": "الترجمة",
                "evening": "-",
                "parallel": "65.8",
                "online": "69.399"
            },
            {
                "department": "تركي",
                "evening": "-",
                "parallel": "65.8",
                "online": "65.2"
            }
        ],
        "كلية الأدارة والاقتصاد": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "64.3",
                "online": "69.1"
            },
            {
                "department": "اقتصاد",
                "evening": "-",
                "parallel": "62",
                "online": "64.638"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "61.8",
                "online": "61.708"
            },
            {
                "department": "علوم مالية ومصرفية",
                "evening": "-",
                "parallel": "57.6",
                "online": "64.033"
            },
            {
                "department": "الإحصاء",
                "evening": "-",
                "parallel": "57.5",
                "online": "65"
            },
            {
                "department": "إدارة المنظمات السياحية",
                "evening": "-",
                "parallel": "58.2",
                "online": "64.4"
            }
        ],
        "كلية التربية": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "74.4",
                "online": "80.8"
            },
            {
                "department": "سرياني",
                "evening": "-",
                "parallel": "55",
                "online": "55"
            },
            {
                "department": "تربية خاصة",
                "evening": "-",
                "parallel": "57",
                "online": "62.2"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "65.01",
                "online": "70.9"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "63.5",
                "online": "65.9"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "60",
                "online": "61.489"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "63.6",
                "online": "68.5"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "61.427",
                "online": "62.381"
            },
            {
                "department": "ارشاد تربوي ونفسي",
                "evening": "-",
                "parallel": "58.2",
                "online": "62.2"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "66.137",
                "online": "72.5"
            }
        ],

        "كلية التربية الاساس": [
            {
                "department": "علوم عامة",
                "evening": "-",
                "parallel": "62.506",
                "online": "62.963"
            },
            {
                "department": "علوم مجتمعات",
                "evening": "60.704",
                "parallel": "63.4",
                "online": "67.3"
            },
            {
                "department": "عربي",
                "evening": "59.3",
                "parallel": "62.6",
                "online": "67.295"
            },
            {
                "department": "كوردى",
                "evening": "60.5",
                "parallel": "62.3",
                "online": "61.4"
            },
            
               {
                "department": "إنكليزي",
                "evening": "66.5",
                "parallel": "70.121",
                "online": "75.02"
            },
            
            
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "58.165",
                "online": "63.107"
            },
            {
                "department": "روضة أطفال",
                "evening": "57.614",
                "parallel": "60.025",
                "online": "61.6"
            }
        ],
        "كلية الاَداب": [
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "58.9",
                "online": "64.5"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "57.939",
                "online": "64.414"
            },
            {
                "department": "اعلام",
                "evening": "-",
                "parallel": "57.4",
                "online": "61.6"
            },
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "58",
                "online": "62.8"
            },
            {
                "department": "اَثار",
                "evening": "-",
                "parallel": "60",
                "online": "69.1"
            },
            {
                "department": "علم الاجتماع",
                "evening": "-",
                "parallel": "58.4",
                "online": "63"
            },
            {
                "department": "فلسفة",
                "evening": "-",
                "parallel": "60",
                "online": "63.789"
            },
            {
                "department": "الخدمة الاجتماعية",
                "evening": "-",
                "parallel": "60",
                "online": "65"
            }
        ],
        "كلية التربية شقلاوة": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "68",
                "online": "72.2"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "60.63",
                "online": "64.138"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "58.465",
                "online": "64.6"
            },
            {
                "department": "عربي",
                "evening": "57.9",
                "parallel": "57.791",
                "online": "61.7"
            },
            {
                "department": "كوردى",
                "evening": "57.492",
                "parallel": "57.5",
                "online": "62.491"
            }
        ]
    },
    "جامعة أربيل التقنية": {
        "كلية الصحة الطبية": [
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "90",
                "online": "91.436"
            },
            {
                "department": "علاج طبيعي",
                "evening": "-",
                "parallel": "78.115",
                "online": "84"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "أنظمة المعلومات",
                "evening": "-",
                "parallel": "84.797",
                "online": "88.76"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "81.001",
                "online": "85.92"
            },
            {
                "department": "الطرق والنقل",
                "evening": "-",
                "parallel": "98.4",
                "online": "79.307"
            },
            {
                "department": "الطاقة",
                "evening": "-",
                "parallel": "80",
                "online": "79.733"
            }
        ],
        "الكلية التكنولوجيا": [
            {
                "department": "المعلومات والأتصالات",
                "evening": "-",
                "parallel": "64.924",
                "online": "69.535"
            },
            {
                "department": "البترول",
                "evening": "-",
                "parallel": "58",
                "online": "58.343"
            },
            {
                "department": "معدات البناء",
                "evening": "-",
                "parallel": "57.959",
                "online": "58.802"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "57.092",
                "online": "58.5"
            },
            {
                "department": "الطرق والنقل",
                "evening": "-",
                "parallel": "57.245",
                "online": "59.3"
            },
            {
                "department": "التعدين",
                "evening": "-",
                "parallel": "55.183",
                "online": "60.3"
            },
            {
                "department": "تقنية السيارات",
                "evening": "-",
                "parallel": "56.194",
                "online": "60.6"
            },
            {
                "department": "ميكانيك وطاقة",
                "evening": "-",
                "parallel": "56.2",
                "online": "59.884"
            },
            {
                "department": "صناعة السيارات",
                "evening": "-",
                "parallel": "55.492",
                "online": "61.725"
            }
        ],
        "الكلية التقنية شقلاوة": [
            {
                "department": "تمريض دبلوم",
                "evening": "68.789",
                "parallel": "72.571",
                "online": "76.286"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "66.885",
                "parallel": "70.286",
                "online": "73.714"
            },
            {
                "department": "بيطري دبلوم",
                "evening": "58.857",
                "parallel": "60.557",
                "online": "62"
            },
            {
                "department": " تقنية المعلومات دبلوم",
                "evening": "57.95",
                "parallel": "59.887",
                "online": "61.737"
            },
            {
                "department": "معماري دبلوم",
                "evening": "54.905",
                "parallel": "57.056",
                "online": "57.682"
            },
            {
                "department": "بناء دبلوم",
                "evening": "53.543",
                "parallel": "56.818",
                "online": "58.6"
            },
            {
                "department": "إدارة المعلومات دبلوم",
                "evening": "54.245",
                "parallel": "55.659",
                "online": "59.966"
            },
            {
                "department": "إدارة السياحة دبلوم",
                "evening": "53.712",
                "parallel": "54.435",
                "online": "60"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "56.547",
                "parallel": "57.793",
                "online": "58.273"
            }
        ],
        "كلية الاعمال": [
            {
                "department": "إدارة الاعمال",
                "evening": "62.6",
                "parallel": "62.2",
                "online": "65.9"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "60.853",
                "online": "64.759"
            },
            {
                "department": "التسويق الدولي",
                "evening": "57.22",
                "parallel": "59.367",
                "online": "62.702"
            },
            {
                "department": "اعلام",
                "evening": "58.2",
                "parallel": "57.837",
                "online": "62.8"
            }
        ],
        "المعهد التقني الطبي": [
            {
                "department": "صيدلة",
                "evening": "81.24",
                "parallel": "84.462",
                "online": "85.945"
            },
            {
                "department": "التمريض ",
                "evening": "77.429",
                "parallel": "78.974",
                "online": "81.429"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "72.857",
                "parallel": "74.859",
                "online": "77.752"
            },
            {
                "department": "تخدير",
                "evening": "-",
                "parallel": "73.049",
                "online": "76.969"
            },
            {
                "department": "مساعد طبيب اسنان",
                "evening": "-",
                "parallel": "71.209",
                "online": "74.395"
            },
            {
                "department": "فحص العيون",
                "evening": "-",
                "parallel": "70.286",
                "online": "72"
            },
            {
                "department": "أشعة",
                "evening": "-",
                "parallel": "69.488",
                "online": "71.225"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "65.714",
                "parallel": "67.378",
                "online": "69.049"
            }
        ],
        "المعهد التقني للأعمال": [
            {
                "department": "إدارة القوانين",
                "evening": "57.821",
                "parallel": "59.788",
                "online": "61,6"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.9",
                "parallel": "59",
                "online": "61.58"
            },
            {
                "department": "تقني ترجمة",
                "evening": "56.786",
                "parallel": "59.224",
                "online": "59.2"
            },
            {
                "department": "المحاسبة",
                "evening": "56.796",
                "parallel": "58.746",
                "online": "59"
            },
            {
                "department": "إدارة التسويق",
                "evening": "55.504",
                "parallel": "57.918",
                "online": "58"
            },
            {
                "department": "إدارة السياحة ",
                "evening": "53.573",
                "parallel": "56.016",
                "online": "57.8"
            },
            {
                "department": "اعلام",
                "evening": "55.069",
                "parallel": "57.678",
                "online": "57.2"
            },
            {
                "department": "معلومات المكتبات",
                "evening": "53.6",
                "parallel": "56.282",
                "online": "57.078"
            },
            {
                "department": "أنظمة المعلومات الإدارية",
                "evening": "54.866",
                "parallel": "57.717",
                "online": "57"
            }
        ],
        "المعهد التقني كويه": [
            {
                "department": "التمريض ",
                "evening": "65.501",
                "parallel": "69.234",
                "online": "73.129"
            },
            {
                "department": "التمريض تةقتةق",
                "evening": "64.857",
                "parallel": "67.255",
                "online": "69.714"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "64",
                "parallel": "65.449",
                "online": "68.847"
            },
            {
                "department": "تحليلات مرضية تةقتةق",
                "evening": "63.143",
                "parallel": "65.143",
                "online": "66.969"
            },
            {
                "department": "تقنية النفط",
                "evening": "54.394",
                "parallel": "56.19",
                "online": "64.717"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "60.286",
                "parallel": "61.76",
                "online": "63.173"
            },
            {
                "department": "إدارة سياحية",
                "evening": "54.2",
                "parallel": "53.722",
                "online": "62.504"
            },
            {
                "department": "إدارة الاعمل تةقتةق",
                "evening": "54.069",
                "parallel": "55.3",
                "online": "59.3"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.053",
                "parallel": "56.7",
                "online": "59.2"
            },
            {
                "department": "تقنية النفط الكيميائي",
                "evening": "53.78",
                "parallel": "57.2",
                "online": "58"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.794",
                "parallel": "57.866",
                "online": "57.1"
            }
        ],
        "الكلية التقنية سوران": [
            {
                "department": "التمريض",
                "evening": "65.865",
                "parallel": "68.283",
                "online": "72.628"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "63.36",
                "parallel": "65.953",
                "online": "68.571"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "59.807",
                "parallel": "61.562",
                "online": "63.155"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "53.8",
                "parallel": "56.571",
                "online": "59"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.581",
                "parallel": "58.223",
                "online": "58.5"
            }
        ],
        "المعهد التقني ميركةسور": [
            {
                "department": "إدارة الاعمال",
                "evening": "54",
                "parallel": "54.273",
                "online": "60"
            },
            {
                "department": "تقني ترجمة",
                "evening": "53.649",
                "parallel": "53.8",
                "online": "57.8"
            }
        ],
        "المعهد التقني جومان": [
            {
                "department": "إدارة المالية",
                "evening": "-",
                "parallel": "-",
                "online": "-"
            },
            {
                "department": "إدارة الجمارك",
                "evening": "-",
                "parallel": "54.6",
                "online": "63.1"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "54.461",
                "online": "60"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "55.73",
                "online": "58.141"
            }
        ],
        "المعهد التقني خبات": [
            {
                "department": "انتاج النباتات الطبية",
                "evening": "52.4",
                "parallel": "54.343",
                "online": "60"
            },
            {
                "department": "حماية النبات",
                "evening": "51.1",
                "parallel": "55.342",
                "online": "60"
            },
            {
                "department": "امن الغذاء والجودة",
                "evening": "53.36",
                "parallel": "54.281",
                "online": "59.08"
            },
            {
                "department": "إدارة القوانين",
                "evening": "55.35",
                "parallel": "56.976",
                "online": "58.983"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "54.596",
                "parallel": "57.3",
                "online": "58.553"
            }
        ]
    },
    "جامعة كوية": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "96.87",
                "online": "97.333"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "92.08",
                "online": "92.8"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "91.44",
                "online": "92.467"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "80.733",
                "online": "85.327"
            },
            {
                "department": "نفط",
                "evening": "-",
                "parallel": "85.507",
                "online": "79.36"
            },
            {
                "department": "كيمياويات",
                "evening": "-",
                "parallel": "80",
                "online": "81.787"
            },
            {
                "department": "جيوتكنيك",
                "evening": "-",
                "parallel": "80",
                "online": "80"
            },
            {
                "department": "الصناعة",
                "evening": "-",
                "parallel": "80",
                "online": "80"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "مايكروبايلوجي طبي",
                "evening": "-",
                "parallel": "91.667",
                "online": "92.571"
            },
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "73.984",
                "online": "80.133"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "63.984",
                "online": "67.78"
            },
            {
                "department": "علم النفس السريري",
                "evening": "-",
                "parallel": "61.196",
                "online": "65.965"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "66.9",
                "online": "64.912"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "60.051",
                "online": "65.3"
            }
        ],
        "كلية العلوم الأنسانية": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "68.6",
                "online": "73.5"
            },
            {
                "department": "إنكليزي",
                "evening": "57.127",
                "parallel": "62.66",
                "online": "66.3"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "55.853",
                "parallel": "59.393",
                "online": "63.541"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "57.962",
                "online": "64.2"
            }
        ],
        "كلية التربية": [
            {
                "department": "إنكليزي",
                "evening": "57.7",
                "parallel": "59.1",
                "online": "69.8"
            },
            {
                "department": "عربي",
                "evening": "58",
                "parallel": "59.9",
                "online": "63.819"
            },
            {
                "department": "تاريخ",
                "evening": "53.706",
                "parallel": "62",
                "online": "65.9"
            },
            {
                "department": "كوردي",
                "evening": "60",
                "parallel": "58.982",
                "online": "61.2"
            },
            {
                "department": "جغرافيا",
                "evening": "54.105",
                "parallel": "63.1",
                "online": "65.4"
            },
            {
                "department": "تربية علم النفس",
                "evening": "54.06",
                "parallel": "59",
                "online": "63.883"
            }
        ]
    },
    "جامعة سوران": {
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "80.2",
                "online": "85.16"
            },
            {
                "department": "نفط",
                "evening": "-",
                "parallel": "80",
                "online": "80.36"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "83.6",
                "online": "80.72"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "76.167",
                "online": "81.758"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "68.7",
                "online": "73.832"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "66.534",
                "online": "72.167"
            },
            {
                "department": "جيولوجي نفط",
                "evening": "-",
                "parallel": "58.9",
                "online": "65.048"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "58.477",
                "online": "65.1"
            }
        ],
        "كلية الاَداب": [
            {
                "department": "إنكليزي",
                "evening": "59.05",
                "parallel": "59.295",
                "online": "70"
            },
            {
                "department": "عربي",
                "evening": "57.6",
                "parallel": "58.2",
                "online": "64.155"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "58.901",
                "online": "66.6"
            },
            {
                "department": "كوردي",
                "evening": "-",
                "parallel": "60.2",
                "online": "61.306"
            },
            {
                "department": "جغرافيا",
                "evening": "58.215",
                "parallel": "59.4",
                "online": "64.519"
            },
            {
                "department": "علم النفس",
                "evening": "56.9",
                "parallel": "58.4",
                "online": "63.774"
            },
            {
                "department": "علم الاجتماع",
                "evening": "55.9",
                "parallel": "58.4",
                "online": "62"
            }
        ],
        "كلية التربية": [
            {
                "department": "إنكليزي",
                "evening": "58.9",
                "parallel": "61.49",
                "online": "70.1"
            },
            {
                "department": "العلوم العامة",
                "evening": "-",
                "parallel": "60.36",
                "online": "62.917"
            },
            {
                "department": "الاجتماعيات",
                "evening": "58.6",
                "parallel": "60.1",
                "online": "65"
            },
            {
                "department": "كوردى",
                "evening": "57.8",
                "parallel": "57.1",
                "online": "62.537"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "60.198",
                "online": "65.997"
            }
        ],
        "كلية الاَدارة": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "58.169",
                "online": "62.029"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "57.334",
                "online": "61.8"
            }
        ],
        "كلية القانون والسياسة": [
            {
                "department": "القانون",
                "evening": "-",
                "parallel": "70.703",
                "online": "75.7"
            },
            {
                "department": "علاقات دولية",
                "evening": "-",
                "parallel": "59.949",
                "online": "61"
            }
        ]
    

    } 
    },

 "sul": {



    "جامعة السليمانية": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "97.143",
                "online": "98.031"
            },
            {
                "department": "طب اسنان",
                "evening": "-",
                "parallel": "96.333",
                "online": "96.857"
            },
            {
                "department": "صيدلة",
                "evening": "-",
                "parallel": "95.667",
                "online": "96.286"
            },
            {
                "department": "التمريض",
                "evening": "-",
                "parallel": "94.4",
                "online": "94.286"
            },
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "86.8",
                "online": "88.4"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "96.28",
                "online": "94.48"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "90.733",
                "online": "91.96"
            },
            {
                "department": "كهرباء",
                "evening": "-",
                "parallel": "80",
                "online": "84.4"
            },
            {
                "department": "مصادر المياه",
                "evening": "-",
                "parallel": "80",
                "online": "77.992"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "89.233",
                "online": "89.837"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "83.6",
                "online": "86"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "75.433",
                "online": "81.667"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "60.6",
                "online": "64.313"
            },
            {
                "department": "جيولوجي",
                "evening": "-",
                "parallel": "60.372",
                "online": "63.539"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "59.922",
                "online": "62.526"
            }
        ],
        "كلية اللغات": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "76.5",
                "online": "81.6"
            },
            {
                "department": "الترجمة",
                "evening": "-",
                "parallel": "71.6",
                "online": "75.822"
            },
            {
                "department": "فارسي",
                "evening": "61.4",
                "parallel": "57",
                "online": "67"
            },
            {
                "department": "عربي",
                "evening": "57.3",
                "parallel": "60.8",
                "online": "64.1"
            },
            {
                "department": "كوردي",
                "evening": "64.9",
                "parallel": "57.481",
                "online": "62.2"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "84.8",
                "online": "89.2"
            }
        ],
        "كلية العلوم السياسية": [
            {
                "department": "علوم سياسية",
                "evening": "-",
                "parallel": "58.7",
                "online": "63.2"
            },
            {
                "department": "سياسة ودبلوماسية",
                "evening": "-",
                "parallel": "59.7",
                "online": "61.6"
            }
        ],
        "كلية التربية": [
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "69.524",
                "online": "75.9"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "64.281",
                "online": "70.431"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "61.5",
                "online": "66.26"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "57.9",
                "online": "63.8"
            }
        ],
        "كلية التربية الاساس": [
            {
                "department": "إنكليزي",
                "evening": "69",
                "parallel": "74.8",
                "online": "80"
            },
            {
                "department": "كوردى",
                "evening": "58",
                "parallel": "63.04",
                "online": "67.5"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "62.9",
                "online": "66.8"
            },
            {
                "department": "روضة أطفال",
                "evening": "57.8",
                "parallel": "61.8",
                "online": "66.6"
            },
            {
                "department": "علوم اجتماعيات",
                "evening": "60.7",
                "parallel": "59.4",
                "online": "65.8"
            },
            {
                "department": "تربية خاصة",
                "evening": "57.2",
                "parallel": "58.8",
                "online": "65"
            },
            {
                "department": "علوم رياضيات",
                "evening": "-",
                "parallel": "58.4",
                "online": "62.236"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "تاريخ",
                "evening": "61.2",
                "parallel": "63.2",
                "online": "66.9"
            },
            {
                "department": "علاقات عامة",
                "evening": "-",
                "parallel": "57.876",
                "online": "66.7"
            },
            {
                "department": "اثار",
                "evening": "-",
                "parallel": "60.8",
                "online": "65.837"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "61.569",
                "online": "64.2"
            },
            {
                "department": "علم الاجتماع",
                "evening": "-",
                "parallel": "57.8",
                "online": "63.478"
            },
            {
                "department": "فلسفة",
                "evening": "-",
                "parallel": "60",
                "online": "62.4"
            },
            {
                "department": "اعلام",
                "evening": "-",
                "parallel": "57.252",
                "online": "61.6"
            },
            {
                "department": "العمل الاجتماعي",
                "evening": "-",
                "parallel": "58",
                "online": "61"
            }
        ],
     
        "كلية الادارة و الاقتصاد": [
  {
                "department": "إدارة الاعمال",
                "evening": "61.2",
                "parallel": "66",
                "online": "72.3"
            },


            
            {
                "department": "اقتصاد",
                "evening": "59",
                "parallel": "65.9",
                "online": "71.9"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "62.858",
                "online": "67.3"
            },
            {
                "department": "الإحصاء والمعلومات",
                "evening": "-",
                "parallel": "59.5",
                "online": "63.804"
            },
            {
                "department": "إدارة التسويق",
                "evening": "58.7",
                "parallel": "58.8",
                "online": "62.8"
            }
        ],
        "كلية التجارة": [
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "67.7",
                "online": "74"
            },
            {
                "department": "علوم مالية ومصرفية",
                "evening": "-",
                "parallel": "58.4",
                "online": "64"
            },
            {
                "department": "سياحة وسفر",
                "evening": "63.2",
                "parallel": "60.2",
                "online": "63.035"
            },
            {
                "department": "تسويق دولي",
                "evening": "-",
                "parallel": "59",
                "online": "62.8"
            },
            {
                "department": "ادارة المشاريع",
                "evening": "58.8",
                "parallel": "58.6",
                "online": "61.8"
            },
            {
                "department": "محاسبة مالية",
                "evening": "-",
                "parallel": "60.2",
                "online": "61.541"
            }
        ],
        "كلية التربية والعلوم": [
            {
                "department": "تاريخ",
                "evening": "54.903",
                "parallel": "60",
                "online": "65.3"
            },
            {
                "department": "جغرافيا",
                "evening": "54",
                "parallel": "60.093",
                "online": "64.775"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "بايوتكنولوجي وعلوم زراعية",
                "evening": "-",
                "parallel": "61",
                "online": "61"
            },
            {
                "department": "علوم حيوانية",
                "evening": "-",
                "parallel": "63.205",
                "online": "60.67"
            },
            {
                "department": "علوم التغذية والجودة",
                "evening": "-",
                "parallel": "56.465",
                "online": "59.174"
            },
            {
                "department": "إدارة زراعية وتنمية",
                "evening": "-",
                "parallel": "55.2",
                "online": "58.8"
            },
            {
                "department": "الثروة الطبيعية",
                "evening": "-",
                "parallel": "54.007",
                "online": "58.744"
            },
            {
                "department": "البستنة",
                "evening": "-",
                "parallel": "60.23",
                "online": "60.23"
            }
        ]
    },
    "جامعة رابرين": {
        "كلية التمريض": [
            {
                "department": "التمريض",
                "evening": "-",
                "parallel": "90.296",
                "online": "92.667"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "الكومبيوتر",
                "evening": "-",
                "parallel": "-",
                "online": "-"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "85.3",
                "online": "80.707"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "78.22",
                "online": "84.6"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "60.1",
                "online": "65.4"
            },
            {
                "department": "فيزياء عامة",
                "evening": "-",
                "parallel": "62.2",
                "online": "63.6"
            },
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "87",
                "online": "90"
            }
        ],
        "كلية العلومە الإنسانية": [
            {
                "department": "القانون",
                "evening": "-",
                "parallel": "73.9",
                "online": "78.814"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "59.257",
                "parallel": "60.2",
                "online": "65.079"
            },
            {
                "department": "الجغرافيا",
                "evening": "57",
                "parallel": "60.7",
                "online": "64.4"
            },
            {
                "department": "تاريخ",
                "evening": "53.814",
                "parallel": "61.2",
                "online": "67.6"
            },
            {
                "department": "فلسفة",
                "evening": "-",
                "parallel": "60",
                "online": "71"
            }
        ],
        "كلية التربية قەڵادزێ": [
            {
                "department": "کوردى",
                "evening": "60.6",
                "parallel": "58.3",
                "online": "64.1"
            },
            {
                "department": "تربية وعلم نفس",
                "evening": "-",
                "parallel": "58.8",
                "online": "62.6"
            },
            {
                "department": "عربي",
                "evening": "57.75",
                "parallel": "59.947",
                "online": "64.2"
            },
            {
                "department": "إنكليزي",
                "evening": "58.1",
                "parallel": "67.4",
                "online": "73.7"
            }
        ],
        "كلية التربية الاساس": [
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "60.7",
                "online": "64.389"
            },
            {
                "department": "عربي",
                "evening": "60.317",
                "parallel": "59.3",
                "online": "61.588"
            },
            {
                "department": "كوردى",
                "evening": "59.055",
                "parallel": "58.1",
                "online": "62.5"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "61.1",
                "online": "62.2"
            },
            {
                "department": "إنكليزي",
                "evening": "58.051",
                "parallel": "66.2",
                "online": "71.6"
            },
            {
                "department": "روضة أطفال",
                "evening": "-",
                "parallel": "58.515",
                "online": "64.2"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "بستنة",
                "evening": "-",
                "parallel": "54.141",
                "online": "59.2"
            },
            {
                "department": "الثروة الحيوانية",
                "evening": "-",
                "parallel": "54.2",
                "online": "59.863"
            }
        ]
    },
    "جامعة كَةرميان": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "96.937",
                "online": "97.667"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "81.967",
                "online": "79"
            }
        ],
        "كلية العلوم": [
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "57.851",
                "online": "63.137"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "59.561",
                "online": "62.7"
            }
        ],
        "كلية التربية": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "58.918",
                "online": "62.662"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "59.171",
                "online": "65.171"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "59.9",
                "online": "66.7"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "59.317",
                "online": "65.905"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "59.317",
                "online": "66.4"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "60.2",
                "online": "68.3"
            },
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "59.464",
                "online": "62.8"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "59.7",
                "online": "61.528"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "60.2",
                "online": "63.3"
            },
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "67.3",
                "online": "73.506"
            }
        ],
        "كلية التربية الاساس": [
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "57.2",
                "online": "65.4"
            },
            {
                "department": "اجتماعيات",
                "evening": "-",
                "parallel": "60.9",
                "online": "65"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "58.586",
                "online": "63.3"
            },
            {
                "department": "روضة أطفال",
                "evening": "-",
                "parallel": "58.8",
                "online": "61.4"
            }
        ],
        "كلية العلوم الإنسانية خانقين": [
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "60",
                "online": "65"
            },
            {
                "department": "علم النفس",
                "evening": "54.14",
                "parallel": "60.309",
                "online": "65"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "60.17",
                "online": "65.803"
            },
            {
                "department": "عربي",
                "evening": "60",
                "parallel": "60.037",
                "online": "64.731"
            },
            {
                "department": "إنكليزي",
                "evening": "58.1",
                "parallel": "58",
                "online": "62"
            }
        ],
        "كلية الكومبيوتر والتكنولوجيا": [
            {
                "department": "شبكات ",
                "evening": "-",
                "parallel": "59.316",
                "online": "68.9"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "57.7",
                "online": "62.344"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "الثروة الحيوانية",
                "evening": "-",
                "parallel": "55.798",
                "online": "59.9"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "74.8",
                "online": "79.5"
            }
        ]
    },
    "جامعة چەرموو": {
        "كلية العلوم الطبية": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "77.667",
                "online": "84.01"
            },
            {
                "department": "كيمياء الادوية",
                "evening": "-",
                "parallel": "65.102",
                "online": "71.35"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "59.5",
                "online": "63.8"
            },
            {
                "department": "فيزياء طبية",
                "evening": "-",
                "parallel": "60.272",
                "online": "62.586"
            },
            {
                "department": "كيمياء النانو",
                "evening": "-",
                "parallel": "61.303",
                "online": "62.517"
            }
        ],
        "كلية اللغات ": [
            {
                "department": "إنكليزي",
                "evening": "57.9",
                "parallel": "63.7",
                "online": "69.7"
            }
        ],
        "كلية اللغات": [
            {
                "department": "عربي",
                "evening": "57.485",
                "parallel": "61.2",
                "online": "66.2"
            }
        ],
        "كلية الاعمال": [
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "60.1",
                "online": "69.455"
            },
            {
                "department": "إدارة النفط والطاقة",
                "evening": "-",
                "parallel": "58.4",
                "online": "64.6"
            },
            {
                "department": "إدارة لاعمال",
                "evening": "55.7",
                "parallel": "58.899",
                "online": "63.5"
            }
        ]
    },
    " جامعة السليمانية التقنية": {
        "كلية الصحة الطبية": [
            {
                "department": "التخدير",
                "evening": "-",
                "parallel": "96",
                "online": "95"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "94.667",
                "online": "94"
            },
            {
                "department": "التمريض",
                "evening": "-",
                "parallel": "92",
                "online": "93"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "النفط",
                "evening": "-",
                "parallel": "80.5",
                "online": "81.2"
            },
            {
                "department": "النفط والطاقة",
                "evening": "-",
                "parallel": "80",
                "online": "80.96"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "83.867",
                "online": "79.495"
            },
            {
                "department": "الكهرباء",
                "evening": "-",
                "parallel": "80",
                "online": "78.933"
            },
            {
                "department": "تخطيط مدني",
                "evening": "-",
                "parallel": "84.633",
                "online": "76"
            }
        ],
        "كلية الإدارة التقنية": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "61.01",
                "online": "65.3"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "57.8",
                "online": "62.7"
            },
            {
                "department": "اعلام",
                "evening": "-",
                "parallel": "58.8",
                "online": "62.4"
            },
            {
                "department": "علاقات عامة وتسويق",
                "evening": "-",
                "parallel": "59.33",
                "online": "61.2"
            }
        ],
        "كلية المعلومات": [
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "78.4",
                "online": "84.4"
            },
            {
                "department": "تقنية أنظمة البيانات",
                "evening": "-",
                "parallel": "66.8",
                "online": "73"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "-",
                "parallel": "62.733",
                "online": "69.069"
            }
        ],
        "الكلية التقنية كةلار": [
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "76",
                "online": "82.389"
            },
            {
                "department": "تمريض دبلوم",
                "evening": "74.286",
                "parallel": "75.143",
                "online": "77.478"
            },
            {
                "department": "تقنية المعلومات دبلوم",
                "evening": "57",
                "parallel": "59.5",
                "online": "61.1"
            },
            {
                "department": "كهرباء دبلوم",
                "evening": "-",
                "parallel": "54.483",
                "online": "60.8"
            },
            {
                "department": "ادارة الاعمال دبلوم",
                "evening": "56.2",
                "parallel": "58.369",
                "online": "60.5"
            },
            {
                "department": "طب بيطري دبلوم",
                "evening": "-",
                "parallel": "60",
                "online": "60.286"
            },
            {
                "department": "مساح دبلوم",
                "evening": "-",
                "parallel": "57.9",
                "online": "59.6"
            },
            {
                "department": "إدارة مشاريع دبلوم",
                "evening": "54.191",
                "parallel": "54.2",
                "online": "59.42"
            }
        ],
        "كلية العلوم العملية حلبجة": [
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "81.595",
                "online": "88"
            },
            {
                "department": "إدارة المشاريع",
                "evening": "-",
                "parallel": "54.104",
                "online": "67.03"
            },
            {
                "department": "التغذية والجودة",
                "evening": "-",
                "parallel": "53.6",
                "online": "62.8"
            }
        ],
        "المعهد التقني للكومبيوتر": [
            {
                "department": "تقنية المعلومات",
                "evening": "59.572",
                "parallel": "64",
                "online": "68.2"
            },
            {
                "department": "أنظمة قواعد البيانات",
                "evening": "57.3",
                "parallel": "60.7",
                "online": "63.8"
            },
            {
                "department": "شبكات",
                "evening": "57.167",
                "parallel": "60.1",
                "online": "62.9"
            }
        ],
        "المعهد التقني": [
            {
                "department": "صيدلة",
                "evening": "86.857",
                "parallel": "88.286",
                "online": "89.714"
            },
            {
                "department": "التمريض",
                "evening": "77.143",
                "parallel": "80.85",
                "online": "84.286"
            },
            {
                "department": "التخدير",
                "evening": "-",
                "parallel": "80.875",
                "online": "83.907"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "74.044",
                "parallel": "79.704",
                "online": "82.857"
            },
            {
                "department": "تمريض اسنان",
                "evening": "-",
                "parallel": "73.714",
                "online": "78.857"
            },
            {
                "department": "اشعة",
                "evening": "-",
                "parallel": "73.429",
                "online": "77.143"
            },
            {
                "department": "تمريض أطفال",
                "evening": "-",
                "parallel": "71.286",
                "online": "74.571"
            },
            {
                "department": "صحة عامة",
                "evening": "69.429",
                "parallel": "71.143",
                "online": "74.557"
            },
            {
                "department": "تمريض نساء وتوليد",
                "evening": "-",
                "parallel": "69.004",
                "online": "72.857"
            },
            {
                "department": "تقني معماري",
                "evening": "-",
                "parallel": "61.2",
                "online": "65.4"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "59.1",
                "parallel": "61.3",
                "online": "63.8"
            },
            {
                "department": "مساح ",
                "evening": "-",
                "parallel": "58.625",
                "online": "61.14"
            },
            {
                "department": "المحاسبة",
                "evening": "56",
                "parallel": "58.1",
                "online": "60.5"
            },
            {
                "department": "تقني اعلام",
                "evening": "57.444",
                "parallel": "58.987",
                "online": "60.4"
            },
            {
                "department": "تقني كهرباء",
                "evening": "55.175",
                "parallel": "57.171",
                "online": "59.43"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "56.586",
                "online": "58.3"
            }
        ],
        "المعهد التقني حلبجة": [
            {
                "department": "كلية التمريض",
                "evening": "71.429",
                "parallel": "74",
                "online": "78.571"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "69.319",
                "parallel": "71.143",
                "online": "74.874"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "54.998",
                "parallel": "58.4",
                "online": "61.4"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.789",
                "parallel": "57.73",
                "online": "59.6"
            },
            {
                "department": "المحاسبة",
                "evening": "52.933",
                "parallel": "55.38",
                "online": "57.8"
            }
        ],
        "المعهد التقني جمجمال": [
            {
                "department": "التمريض",
                "evening": "74.714",
                "parallel": "77.143",
                "online": "80.286"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "54.918",
                "parallel": "58.4",
                "online": "62.7"
            },
            {
                "department": "تقني كهرباء",
                "evening": "55",
                "parallel": "54.592",
                "online": "60.491"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "55.8",
                "parallel": "57.8",
                "online": "58"
            },
            {
                "department": "المحاسبة",
                "evening": "53.3",
                "parallel": "56",
                "online": "58"
            }
        ],
        "المعهد التقني دربندخان": [
            {
                "department": "التمريض",
                "evening": "70.571",
                "parallel": "72.286",
                "online": "76"
            },
            {
                "department": "تقني كهرباء",
                "evening": "-",
                "parallel": "54.469",
                "online": "73.298"
            },
            {
                "department": "المحاسبة",
                "evening": "52.41",
                "parallel": "53.8",
                "online": "58.6"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "56.068",
                "online": "58.319"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "54.063",
                "parallel": "57.2",
                "online": "58.193"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.414",
                "parallel": "56.7",
                "online": "58.1"
            }
        ],
        "المعهد التقني بكرةجو": [
            {
                "department": "زراعة",
                "evening": "-",
                "parallel": "53.8",
                "online": "61.148"
            },
            {
                "department": "إدارة الالكترونيات",
                "evening": "-",
                "parallel": "55.2",
                "online": "60.5"
            },
            {
                "department": "تصميم حدائق",
                "evening": "-",
                "parallel": "54.086",
                "online": "60.038"
            },
            {
                "department": "التغذية والتحكم بالجودة",
                "evening": "-",
                "parallel": "56",
                "online": "58.4"
            },
            {
                "department": "علوم النحل",
                "evening": "-",
                "parallel": "-",
                "online": "-"
            }
        ]
    

    } 
 



},
 "duhok": {




    "جامعة دهوك": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "95.143",
                "online": "96.8"
            },
            {
                "department": "طب اسنان",
                "evening": "-",
                "parallel": "94",
                "online": "94.754"
            },
            {
                "department": "صيدلة",
                "evening": "-",
                "parallel": "93.296",
                "online": "94"
            },
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "87.6",
                "online": "91.667"
            },
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "67.429",
                "online": "72.333"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "90.333",
                "online": "91.276"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "92.8",
                "online": "92.5"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "83.6",
                "online": "88.392"
            },
            {
                "department": "كهرباء وكومبيوتر",
                "evening": "-",
                "parallel": "78.033",
                "online": "82.455"
            },
            {
                "department": "بايومديكال",
                "evening": "-",
                "parallel": "80.333",
                "online": "80.333"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "80",
                "online": "78.4"
            },
            {
                "department": "التخطيط",
                "evening": "-",
                "parallel": "75",
                "online": "75"
            }
        ],
        "كلية العلوم": [
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "76.567",
                "online": "82.2"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "72.371",
                "online": "78.567"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "66.6",
                "online": "73.02"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "64.234",
                "online": "67.834"
            },
            {
                "department": "جيولوحي",
                "evening": "-",
                "parallel": "58.853",
                "online": "64.354"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "61",
                "online": "62.9"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "79.457",
                "online": "84.006"
            }
        ],
        "كلية العلوم السياسية": [
            {
                "department": "علاقات دولية ودبلوماسية",
                "evening": "-",
                "parallel": "65.8",
                "online": "70.7"
            },
            {
                "department": "سياسة عامة",
                "evening": "-",
                "parallel": "63.8",
                "online": "66"
            }
        ],
        "كلية اللغات": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "70.6",
                "online": "76.9"
            },
            {
                "department": "الترجمة",
                "evening": "-",
                "parallel": "69.2",
                "online": "74.4"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "58.497",
                "online": "60.9"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "اثار",
                "evening": "-",
                "parallel": "58.689",
                "online": "66"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "63",
                "online": "64.608"
            },
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "62.699",
                "online": "64.6"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "62",
                "online": "63.766"
            },
            {
                "department": "حقوق الانسان",
                "evening": "-",
                "parallel": "59.558",
                "online": "63.6"
            },
            {
                "department": "اجتماعيات",
                "evening": "-",
                "parallel": "57.6",
                "online": "62"
            },
            {
                "department": "اديان",
                "evening": "-",
                "parallel": "59",
                "online": "61.375"
            }
        ],
        "كلية التربية الاساس": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "68.574",
                "online": "72.778"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "64.1",
                "online": "68.3"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "64",
                "online": "67.6"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "64",
                "online": "67"
            },
            {
                "department": "العلوم",
                "evening": "-",
                "parallel": "60.424",
                "online": "63.212"
            },
            {
                "department": "تربية خاصة",
                "evening": "-",
                "parallel": "57.6",
                "online": "62.6"
            },
            {
                "department": "القيادة التربوية",
                "evening": "-",
                "parallel": "57.8",
                "online": "62.4"
            },
            {
                "department": "كوردي",
                "evening": "-",
                "parallel": "59.6",
                "online": "61.2"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "57.775",
                "online": "61.1"
            }
        ],
        "كلية الادارة و الاقتصاد": [
            {
                "department": "علوم مالية ومصرفية",
                "evening": "-",
                "parallel": "59.752",
                "online": "64.9"
            },
            {
                "department": "اقتصاد",
                "evening": "-",
                "parallel": "62.925",
                "online": "64.8"
            },
            {
                "department": "إحصاء",
                "evening": "-",
                "parallel": "60",
                "online": "64.526"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "58.11",
                "online": "63.7"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "62.5",
                "online": "63.396"
            },
            {
                "department": "إدارة السياحة والفنادق",
                "evening": "-",
                "parallel": "57.422",
                "online": "62.2"
            }
        ],
        "كلية التربية ئاكرى": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "66.5",
                "online": "72.756"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "62.2",
                "online": "67.4"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "63.01",
                "online": "66.7"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "61.2",
                "online": "65.2"
            },
            {
                "department": "كوردي",
                "evening": "-",
                "parallel": "59.8",
                "online": "63.5"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "59.955",
                "online": "62.6"
            },
            {
                "department": "تربية دينية",
                "evening": "-",
                "parallel": "59.6",
                "online": "62.2"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "الاستثمار والمجتمع الريفي",
                "evening": "-",
                "parallel": "53.645",
                "online": "62.588"
            },
            {
                "department": "تربة ومياه",
                "evening": "-",
                "parallel": "55.298",
                "online": "60.4"
            },
            {
                "department": "ثروة حيوانية",
                "evening": "-",
                "parallel": "55.414",
                "online": "60.296"
            },
            {
                "department": "غابات",
                "evening": "-",
                "parallel": "54.235",
                "online": "59.7"
            },
            {
                "department": "الارشاد الزراعي",
                "evening": "-",
                "parallel": "55.576",
                "online": "59.197"
            },
            {
                "department": "السياحة البيئية",
                "evening": "-",
                "parallel": "54.334",
                "online": "59"
            },
            {
                "department": "المنتجات الحيوانية",
                "evening": "-",
                "parallel": "57.1",
                "online": "58.214"
            },
            {
                "department": "الحدائق",
                "evening": "-",
                "parallel": "56.541",
                "online": "58.149"
            },
            {
                "department": "تكنولوجيا الغذاء",
                "evening": "-",
                "parallel": "54.656",
                "online": "58"
            }
        ],
        "كلية التربية الأساس ئاميدى": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "63",
                "online": "66.8"
            },
            {
                "department": "اجتماعيات",
                "evening": "-",
                "parallel": "59.032",
                "online": "65.715"
            }
        ]
    },
    "جامعة دهوك التقنية": {
        "كلية العلوم الصحية شيخان": [
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "82.653",
                "online": "88.537"
            },
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "80.333",
                "online": "86.667"
            },
            {
                "department": "صحة عامة",
                "evening": "-",
                "parallel": "77.058",
                "online": "81.714"
            }
        ],
        "كلية الهندسة التقنية": [
            {
                "department": "الطاقة",
                "evening": "-",
                "parallel": "80",
                "online": "80.2"
            },
            {
                "department": "طرق وجسور",
                "evening": "-",
                "parallel": "80",
                "online": "79.455"
            },
            {
                "department": "كيمياويات",
                "evening": "-",
                "parallel": "80",
                "online": "78.245"
            }
        ],
        "كلية النفط والمعادن زاخو": [
            {
                "department": "جيولوجي نفط",
                "evening": "-",
                "parallel": "62",
                "online": "63.745"
            }
        ],
        "كلية الإدارة التقنية": [
            {
                "department": "إدارة الاعمال",
                "evening": "58.9",
                "parallel": "59.3",
                "online": "65.6"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "58.1",
                "online": "65"
            },
            {
                "department": "المعرفة الإدارية",
                "evening": "-",
                "parallel": "58.9",
                "online": "62.6"
            }
        ],
        "الكلية التقنية ئاكرى": [
            {
                "department": "إدارة الاعمال",
                "evening": "58.8",
                "parallel": "59.1",
                "online": "65"
            },
            {
                "department": "الزراعة",
                "evening": "-",
                "parallel": "55.1",
                "online": "59.3"
            }
        ],
        "معهد دهوك التقني": [
            {
                "department": "صيدلة",
                "evening": "79.143",
                "parallel": "81.089",
                "online": "84"
            },
            {
                "department": "تمريض",
                "evening": "70.857",
                "parallel": "74.036",
                "online": "78.321"
            },
            {
                "department": "علاج طبيعي",
                "evening": "-",
                "parallel": "67.143",
                "online": "67.957"
            },
            {
                "department": "مساح",
                "evening": "57.4",
                "parallel": "59.204",
                "online": "60.5"
            },
            {
                "department": "التصنيع التكنولوجيا",
                "evening": "54.375",
                "parallel": "57.046",
                "online": "59"
            },
            {
                "department": "تقنية الانترنيت",
                "evening": "54.976",
                "parallel": "58.182",
                "online": "58.833"
            },
            {
                "department": "تقنية البناء",
                "evening": "53.6",
                "parallel": "57.9",
                "online": "58.19"
            }
        ],
        "معهد دهوك التقني الاداري": [
            {
                "department": "إدارة الاعمال",
                "evening": "60.33",
                "parallel": "62.3",
                "online": "62.303"
            },
            {
                "department": "المحاسبة",
                "evening": "54.074",
                "parallel": "56.763",
                "online": "58.4"
            },
            {
                "department": "أنظمة معلومات الإدارة",
                "evening": "53.612",
                "parallel": "56.8",
                "online": "57.921"
            }
        ],
        "المعهد التقني ئاكرى": [
            {
                "department": "تمريض",
                "evening": "68.553",
                "parallel": "70.857",
                "online": "74.873"
            },
            {
                "department": "إدارة القوانين",
                "evening": "56.7",
                "parallel": "59",
                "online": "61.6"
            },
            {
                "department": "مساح",
                "evening": "55.1",
                "parallel": "53.104",
                "online": "58.6"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "54.6",
                "parallel": "57.6",
                "online": "58.2"
            }
        ],
        "المعهد التقني زاخو": [
            {
                "department": "تميض",
                "evening": "69.429",
                "parallel": "71.714",
                "online": "75.714"
            },
            {
                "department": "مختبرات طبية",
                "evening": "67.489",
                "parallel": "69.3",
                "online": "73.008"
            },
            {
                "department": "نفط",
                "evening": "59.5",
                "parallel": "60.91",
                "online": "62.961"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.6",
                "parallel": "58.67",
                "online": "61.36"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "57.429",
                "parallel": "58.828",
                "online": "60.468"
            },
            {
                "department": "زراعة محمية",
                "evening": "54.175",
                "parallel": "55.894",
                "online": "57.748"
            }
        ],
        "المعهد التقني ئاميدى": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "67.8",
                "online": "69.956"
            },
            {
                "department": "إدارة تسويق",
                "evening": "-",
                "parallel": "55.665",
                "online": "59.281"
            },
            {
                "department": "إدارة السياحة",
                "evening": "53.546",
                "parallel": "55.6",
                "online": "58.2"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "53.669",
                "parallel": "56.45",
                "online": "58.018"
            },
            {
                "department": "إدارة العمال",
                "evening": "54.855",
                "parallel": "57.2",
                "online": "57.7"
            }
        ],
        "المعهد التقني بةردةرةش": [
            {
                "department": "تمريض",
                "evening": "68.283",
                "parallel": "70",
                "online": "72.694"
            },
            {
                "department": "محاسبة",
                "evening": "52.188",
                "parallel": "53.737",
                "online": "58.496"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.555",
                "parallel": "56.744",
                "online": "58.4"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "57.282",
                "parallel": "53.954",
                "online": "57.548"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "53.636",
                "parallel": "57.806",
                "online": "57.304"
            }
        ],
        "المعهد التقني شيخان": [
            {
                "department": "إدارة اعمال",
                "evening": "55.351",
                "parallel": "57.405",
                "online": "57.8"
            },
            {
                "department": "محاسبة",
                "evening": "52.543",
                "parallel": "54",
                "online": "57.6"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "53.918",
                "parallel": "56.414",
                "online": "57.284"
            }
        ],
        "المعهد التقني شنكَال": [
            {
                "department": "إدارة مراكز صحية",
                "evening": "71.367",
                "parallel": "67.933",
                "online": "68.1"
            },
            {
                "department": "المحاسبة",
                "evening": "51.667",
                "parallel": "53.842",
                "online": "57.966"
            }
        ]
    },
    "جامعة زاخو": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "94.667",
                "online": "96"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "هندسة نفط",
                "evening": "-",
                "parallel": "83.12",
                "online": "86.433"
            },
            {
                "department": "مدني وبيئة",
                "evening": "-",
                "parallel": "79.533",
                "online": "83.733"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "80",
                "online": "80.6"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "72.38",
                "online": "78.602"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "69.167",
                "online": "74.967"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "64.553",
                "online": "67.942"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "61.469",
                "online": "65.294"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "57.804",
                "online": "61.097"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "65.9",
                "online": "71.575"
            },
            {
                "department": "كوردى",
                "evening": "58.6",
                "parallel": "58.018",
                "online": "65.4"
            },
            {
                "department": "تاريخ",
                "evening": "60.6",
                "parallel": "59.7",
                "online": "64.419"
            },
            {
                "department": "عربي",
                "evening": "58.342",
                "parallel": "61.685",
                "online": "61.5"
            },
            {
                "department": "دراسات إسلامية",
                "evening": "57.1",
                "parallel": "58.5",
                "online": "60.9"
            }
        ],
        "كلية التربية": [
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "62.9",
                "online": "63.9"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "57.264",
                "online": "61.8"
            },
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "61.4",
                "online": "61.4"
            }
        ],
        "كلية التربية الاساس": [
            {
                "department": "انكليزي",
                "evening": "63.1",
                "parallel": "65.319",
                "online": "70.5"
            },
            {
                "department": "علوم اجتماع",
                "evening": "59.294",
                "parallel": "58.2",
                "online": "65"
            },
            {
                "department": "عربي",
                "evening": "58.55",
                "parallel": "61.6",
                "online": "64.3"
            },
            {
                "department": "علوم",
                "evening": "-",
                "parallel": "59.112",
                "online": "62.787"
            },
            {
                "department": "كوردى",
                "evening": "58.317",
                "parallel": "57.5",
                "online": "62.3"
            }
        ],
        "كلية الادارة و الاقتصاد": [
            {
                "department": "علم الاقتصاد",
                "evening": "-",
                "parallel": "58.7",
                "online": "66.1"
            },
            {
                "department": "علم المالية والمصرفية",
                "evening": "-",
                "parallel": "60.165",
                "online": "65.477"
            },
            {
                "department": "علم إدارة الاعمال",
                "evening": "-",
                "parallel": "59.959",
                "online": "64.7"
           }
        ]
    

    } 
 





},
 "halabja": {


    "جامعة حلبجه": {
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "81.433",
                "online": "78.6"
            }
        ],
        "كلية العلوم": [
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "62.219",
                "online": "67.4"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "61.133",
                "online": "62.9"
            }
        ],
        "كلية القانون والإدارة": [
            {
                "department": "كلية القانون",
                "evening": "-",
                "parallel": "76.9",
                "online": "81.6"
            },
            {
                "department": "تسويق دولي",
                "evening": "53.8",
                "parallel": "59.3",
                "online": "62.4"
            },
            {
                "department": "سياسة ودبلوماسية",
                "evening": "-",
                "parallel": "57.3",
                "online": "61.5"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "63.4",
                "online": "70.359"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "60",
                "online": "67.2"
            },
            {
                "department": "سياحة وسفر",
                "evening": "-",
                "parallel": "60",
                "online": "66.1"
            },
            {
                "department": "اعلام",
                "evening": "53.6",
                "parallel": "60",
                "online": "63.8"
            },
            {
                "department": "مبادئ الأديان",
                "evening": "-",
                "parallel": "53.627",
                "online": "58.3"
            }
        ],
        "كلية التربية الاساس": [
            {
                "department": "إنكليزي",
                "evening": "59",
                "parallel": "63.928",
                "online": "72.3"
            },
            {
                "department": "علوم الاجتماعيات",
                "evening": "-",
                "parallel": "63.1",
                "online": "64.639"
            },
            {
                "department": "عربي",
                "evening": "57.2",
                "parallel": "57.921",
                "online": "61.4"
            }
        ],
        "كلية التربية شارةزور": [
            {
                "department": "التنمية البشرية",
                "evening": "53.8",
                "parallel": "60",
                "online": "70.039"
            },
            {
                "department": "كوردى",
                "evening": "57.7",
                "parallel": "60.1",
                "online": "62.5"
            },
            {
                "department": "روضة أطفال",
                "evening": "56",
                "parallel": "58.8",
                "online": "62.285"
            }
        ]
 }





}
};




document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');

    // Show the tooltip after 5 seconds
    setTimeout(() => {
        tooltip.classList.add('show');
        
        // Hide the tooltip after 3 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }, 5000);
});












// Populate universities based on city
function populateUniversities(city) {
    const universitySelect = document.getElementById('university-select');
    universitySelect.innerHTML = '<option value="">-- اختر جامعة --</option>';
    if (city && data[city]) {
        Object.keys(data[city]).forEach(university => {
            const option = document.createElement('option');
            option.value = university;
            option.textContent = university;
            universitySelect.appendChild(option);
        });
        universitySelect.disabled = false;
    } else {
        universitySelect.disabled = true;
    }
    document.getElementById('college-select').disabled = true;
    document.getElementById('show-data-btn').disabled = true;
    document.getElementById('data-table-container').style.display = 'none';
}

// Populate colleges based on university
function populateColleges(city, university) {
    const collegeSelect = document.getElementById('college-select');
    collegeSelect.innerHTML = '<option value="">-- اختر كلية --</option>';
    if (city && university && data[city][university]) {
        Object.keys(data[city][university]).forEach(college => {
            const option = document.createElement('option');
            option.value = college;
            option.textContent = college;
            collegeSelect.appendChild(option);
        });
        collegeSelect.disabled = false;
    } else {
        collegeSelect.disabled = true;
    }
    document.getElementById('show-data-btn').disabled = true;
    document.getElementById('data-table-container').style.display = 'none';
}

// Display data in table based on city, university, and college
function displayData(city, university, college) {
    const tbody = document.getElementById('data-body');
    tbody.innerHTML = '';

    const inputGrade = parseFloat(document.getElementById('grade-input').value);

    if (city && university && college && data[city] && data[city][university] && data[city][university][college]) {
        data[city][university][college].forEach(entry => {
            const row = document.createElement('tr');

            // Check if the input grade is less than the department's grade
            const onlineGrade = entry.online !== "-" ? parseFloat(entry.online) : null;
            const parallelGrade = entry.parallel !== "-" ? parseFloat(entry.parallel) : null;
            const eveningGrade = entry.evening !== "-" ? parseFloat(entry.evening) : null;

            // Apply highlight class based on comparison
            const onlineClass = (onlineGrade && inputGrade < onlineGrade) ? 'highlight-red' : '';
            const parallelClass = (parallelGrade && inputGrade < parallelGrade) ? 'highlight-red' : '';
            const eveningClass = (eveningGrade && inputGrade < eveningGrade) ? 'highlight-red' : '';

            row.innerHTML = `
                <td>${entry.department}</td>
                <td class="${onlineClass}">${entry.online !== "-" ? parseFloat(entry.online).toFixed(1) : entry.online}</td>
                <td class="${parallelClass}">${entry.parallel !== "-" ? parseFloat(entry.parallel).toFixed(1) : entry.parallel}</td>
                <td class="${eveningClass}">${entry.evening !== "-" ? parseFloat(entry.evening).toFixed(1) : entry.evening}</td>
            `;
            tbody.appendChild(row);
        });
        document.getElementById('data-table-container').style.display = 'block';
    } else {
        document.getElementById('data-table-container').style.display = 'none';
    }
}


// Event listener for button click
// تعديل الحدث المرتبط بزر عرض البيانات
document.getElementById('show-data-btn').addEventListener('click', function() {
    const selectedCollege = document.getElementById('college-select').value;
    if (selectedCollege) {
        showNotification(selectedCollege);
    }
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    displayData(selectedCity, selectedUniversity, selectedCollege);
});

// Event listeners
document.getElementById('city-select').addEventListener('change', function() {
    const selectedCity = this.value;
    populateUniversities(selectedCity);
});

document.getElementById('university-select').addEventListener('change', function() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = this.value;
    populateColleges(selectedCity, selectedUniversity);
});

document.getElementById('college-select').addEventListener('change', function() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    const selectedCollege = this.value;
    document.getElementById('show-data-btn').disabled = !(selectedCity && selectedUniversity && selectedCollege);
});

document.getElementById('show-data-btn').addEventListener('click', function() {
    const selectedCity = document.getElementById('city-select').value;
    const selectedUniversity = document.getElementById('university-select').value;
    const selectedCollege = document.getElementById('college-select').value;
    displayData(selectedCity, selectedUniversity, selectedCollege);
});



// script.js
document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    setTimeout(() => {
        overlay.classList.add('show');
    }, 400);

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('show');
        }
    });
});








const menuButton = document.getElementById('menu-button');
const sideMenu = document.getElementById('side-menu');

// فتح القائمة الجانبية عند الضغط على زر القائمة
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    menuButton.classList.toggle('clicked'); // إضافة أو إزالة الفئة لإحداث الحركة
});

// إغلاق القائمة الجانبية عند النقر في أي مكان داخل الموقع
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && e.target !== menuButton) {
        sideMenu.classList.remove('open');
        menuButton.classList.remove('clicked'); // إزالة الفئة عند إغلاق القائمة
    }
});

    // دالة لفتح صفحات الويب عند النقر على أزرار القائمة
    function openPage(url) {
        window.open(url, '_blank');
    }

    // استماع لحدث النقر على أزرار القائمة وفتح الصفحات المناسبة
    sideMenu.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            const url = button.dataset.url;
            if (url) {
                openPage(url);
            }
        });
 

 });
function openPage(url) {
    window.location.href = url;
}

document.getElementById('grade-icon').addEventListener('click', function() {
    this.classList.toggle('rotate-scale');
   
});
















function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 500); // Match the duration of the slideUp animation
    }, 2000); // Display for 2 seconds
}


