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
                "parallel": "95.697",
                "online": "96.8"
            },
            {
                "department": "طب اسنان",
                "evening": "-",
                "parallel": "95",
                "online": "95.333"
            },
            {
                "department": "صيدلة",
                "evening": "-",
                "parallel": "94.33",
                "online": "94.667"
            }
        ],
        "كلية التمريض": [
            {
                "department": "تمريض عام",
                "evening": "-",
                "parallel": "91.4",
                "online": "92"
            },
            {
                "department": "تمريض توليد",
                "evening": "-",
                "parallel": "80.8",
                "online": "85.12"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "مايكروبايلوجي طبي",
                "evening": "-",
                "parallel": "92.8",
                "online": "92.857"
            },
            {
                "department": "كيمياء سريرية",
                "evening": "-",
                "parallel": "90",
                "online": "90.891"
            },
            {
                "department": "علاج طبيعي",
                "evening": "-",
                "parallel": "87.429",
                "online": "90"
            },
            {
                "department": "صحة المجتمع",
                "evening": "-",
                "parallel": "78.286",
                "online": "83.661"
            },
            {
                "department": "التغذية والحمياة",
                "evening": "-",
                "parallel": "76.4",
                "online": "81.2"
            }
        ]
    },
    "جامعة صلاح الدين": {
        "كلية الطب": [
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "86.975",
                "online": "88"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "94.3",
                "online": "93.8"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "93.091",
                "online": "93.541"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "88.723",
                "online": "90.559"
            },
            {
                "department": "كيمياء وبترول",
                "evening": "-",
                "parallel": "82.069",
                "online": "86.68"
            },
            {
                "department": "كهرباء",
                "evening": "-",
                "parallel": "83.249",
                "online": "85.785"
            },
            {
                "department": "ميكانيك وميكاترونيك",
                "evening": "-",
                "parallel": "79.2",
                "online": "84.2"
            },
            {
                "department": "موارد المياه",
                "evening": "-",
                "parallel": "88.54",
                "online": "78.938"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "80.433",
                "online": "78.6"
            },
            {
                "department": "طيران",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايلولوجي طبي",
                "evening": "-",
                "parallel": "88.111",
                "online": "90.557"
            },
            {
                "department": "بايولوجي عام",
                "evening": "-",
                "parallel": "84.684",
                "online": "87.791"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "82.633",
                "online": "86.565"
            },
            {
                "department": "علوم الكومبيوتر",
                "evening": "-",
                "parallel": "80.251",
                "online": "84.685"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "80.26",
                "online": "83.733"
            },
            {
                "department": "فيزياء طبية",
                "evening": "-",
                "parallel": "78.146",
                "online": "82.101"
            },
            {
                "department": "فيزياء عام",
                "evening": "-",
                "parallel": "71.713",
                "online": "76.351"
            },
            {
                "department": "النفط والأرض",
                "evening": "-",
                "parallel": "62.1",
                "online": "66.1"
            },
            {
                "department": "صحة البيئة",
                "evening": "-",
                "parallel": "60.429",
                "online": "63.13"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "58.207",
                "online": "62.414"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "كافة الاقسام",
                "evening": "-",
                "parallel": "54",
                "online": "60"
            }
        ],
        "كلية العلوم السياسية": [
            {
                "department": "سياسة دبلوماسية وخارجية",
                "evening": "-",
                "parallel": "60.95",
                "online": "62.415"
            },
            {
                "department": "سياسة العامة",
                "evening": "-",
                "parallel": "58.2",
                "online": "64.2"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "79",
                "online": "81.772"
            }
        ],
        "كلية العلوم الإسلامية": [
            {
                "department": "شريعة",
                "evening": "-",
                "parallel": "57.113",
                "online": "57.955"
            },
            {
                "department": "دراسات إسلامية",
                "evening": "-",
                "parallel": "56.329",
                "online": "58.6"
            },
            {
                "department": "تربية دينية",
                "evening": "-",
                "parallel": "57.765",
                "online": "57.595"
            }
        ],
        "كلية اللغات": [
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "57.243",
                "online": "62.6"
            },
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "75.3",
                "online": "78.882"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "59.703",
                "online": "62.333"
            },
            {
                "department": "الماني",
                "evening": "-",
                "parallel": "60.337",
                "online": "64.276"
            },
            {
                "department": "فرنسي",
                "evening": "-",
                "parallel": "58.333",
                "online": "64.333"
            },
            {
                "department": "تركي",
                "evening": "-",
                "parallel": "59.8",
                "online": "62.778"
            },
            {
                "department": "فارسي",
                "evening": "-",
                "parallel": "58.1",
                "online": "62.333"
            },
            {
                "department": "صيني",
                "evening": "-",
                "parallel": "58.158",
                "online": "63.4"
            },
            {
                "department": "الترجمة",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            }
        ],
        "كلية الإدارة والاقتصاد": [
            {
                "department": "إدارة الاعمال",
                "evening": "61.8",
                "parallel": "66.152",
                "online": "71.4"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "64.581",
                "online": "68.718"
            },
            {
                "department": "إدارة منظمات سياحية",
                "evening": "-",
                "parallel": "57.6",
                "online": "64.55"
            },
            {
                "department": "اقتصاد",
                "evening": "57.92",
                "parallel": "62.5",
                "online": "64.383"
            },
            {
                "department": "علوم مالية ومصرفية",
                "evening": "-",
                "parallel": "60.957",
                "online": "60.7"
            },
            {
                "department": "الإحصاء والمعرفة",
                "evening": "-",
                "parallel": "57.6",
                "online": "58.034"
            }
        ],
        "كلية التربية": [
            {
                "department": "كوردى",
                "evening": "57.607",
                "parallel": "63.1",
                "online": "67.3"
            },
            {
                "department": "إنكليزي",
                "evening": "66.938",
                "parallel": "75.9",
                "online": "81.9"
            },
            {
                "department": "عربي",
                "evening": "57.702",
                "parallel": "65.58",
                "online": "71.58"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "69.8",
                "online": "75.8"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "67.515",
                "online": "73.532"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "65.216",
                "online": "70.303"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "63.934",
                "online": "67.119"
            },
            {
                "department": "تربية خاصة",
                "evening": "64.4",
                "parallel": "58.348",
                "online": "62.485"
            },
            {
                "department": "سرياني",
                "evening": "-",
                "parallel": "55.1",
                "online": "55"
            },
            {
                "department": "ارشاد تربوي ونفسي",
                "evening": "-",
                "parallel": "60",
                "online": "63.7"
            }
        ],
        "كلية التربية شقلاوة": [
            {
                "department": "كوردى",
                "evening": "59.3",
                "parallel": "57.5",
                "online": "62"
            },
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "69.057",
                "online": "75.057"
            },
            {
                "department": "عربي",
                "evening": "57.1",
                "parallel": "60.4",
                "online": "61.233"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "64.615",
                "online": "69.618"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "61.736",
                "online": "63.085"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "كوردى",
                "evening": "57.609",
                "parallel": "61.4",
                "online": "62.9"
            },
            {
                "department": "إنكليزي",
                "evening": "64.1",
                "parallel": "72.1",
                "online": "76.622"
            },
            {
                "department": "عربي",
                "evening": "58.078",
                "parallel": "63.337",
                "online": "67.3"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "60.079",
                "online": "62.4"
            },
            {
                "department": "علوم عامة",
                "evening": "-",
                "parallel": "62.718",
                "online": "66.349"
            },
            {
                "department": "علوم اجتماعيات",
                "evening": "60",
                "parallel": "62",
                "online": "64.616"
            },
            {
                "department": "روضة أطفال",
                "evening": "58.4",
                "parallel": "60.302",
                "online": "63.2"
            }
        ],
        "كلية الاَداب": [
            {
                "department": "تاريخ",
                "evening": "59",
                "parallel": "58",
                "online": "63.8"
            },
            {
                "department": "فلسفة",
                "evening": "-",
                "parallel": "59",
                "online": "61"
            },
            {
                "department": "جغرافيا",
                "evening": "60",
                "parallel": "58.578",
                "online": "63.147"
            },
            {
                "department": "اَثار",
                "evening": "-",
                "parallel": "59.933",
                "online": "65"
            },
            {
                "department": "علم الاجتماع",
                "evening": "-",
                "parallel": "58.6",
                "online": "65"
            },
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "58.479",
                "online": "64.2"
            },
            {
                "department": "اعلام",
                "evening": "-",
                "parallel": "58.452",
                "online": "61"
            },
            {
                "department": "الخدمة الاجتماعية",
                "evening": "-",
                "parallel": "58.4",
                "online": "63"
            }
        ]
    },
    "جامعة أربيل التقنية": {
        "كلية الصحة الطبية": [
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "90",
                "online": "91.6"
            },
            {
                "department": "علاج طبيعي",
                "evening": "-",
                "parallel": "84.909",
                "online": "88"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "أنظمة المعلومات",
                "evening": "-",
                "parallel": "88.33",
                "online": "90.055"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "85.6",
                "online": "87.28"
            },
            {
                "department": "الطرق والنقل",
                "evening": "-",
                "parallel": "0",
                "online": "79.073"
            },
            {
                "department": "ميكانيك والطاقة",
                "evening": "-",
                "parallel": "0",
                "online": "78"
            }
        ],
        "كلية التنكولوجيا": [
            {
                "department": "المعلومات والاتصالات",
                "evening": "-",
                "parallel": "69.7",
                "online": "74.6"
            },
            {
                "department": "معدات الباء",
                "evening": "-",
                "parallel": "60.48",
                "online": "65.512"
            },
            {
                "department": "صناعة السيارات",
                "evening": "-",
                "parallel": "58.696",
                "online": "62.479"
            },
            {
                "department": "الصناعات الاوتوماتيكية",
                "evening": "-",
                "parallel": "57.926",
                "online": "58.3"
            },
            {
                "department": "تقنية النفط",
                "evening": "-",
                "parallel": "58.32",
                "online": "58.608"
            },
            {
                "department": "النقل والمواصلات",
                "evening": "-",
                "parallel": "58.079",
                "online": "59.62"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "58.7",
                "online": "59.13"
            },
            {
                "department": "التعدين",
                "evening": "-",
                "parallel": "57.329",
                "online": "59.29"
            },
            {
                "department": "ميكانيك وطاقة",
                "evening": "-",
                "parallel": "58.5",
                "online": "58.29"
            }
        ],
        "الكلية التقنية شقلاوة": [
            {
                "department": "تحليلات مرضية",
                "evening": "67.571",
                "parallel": "72.74",
                "online": "76.893"
            },
            {
                "department": "طب بيطري",
                "evening": "58.287",
                "parallel": "60",
                "online": "62.687"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.6",
                "parallel": "59.03",
                "online": "60.9"
            },
            {
                "department": "تمريض",
                "evening": "68.999",
                "parallel": "73.128",
                "online": "78.286"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "57.065",
                "parallel": "60.061",
                "online": "63.899"
            },
            {
                "department": "معدات البناء",
                "evening": "53.946",
                "parallel": "56.52",
                "online": "59.707"
            },
            {
                "department": "تقني معماري",
                "evening": "55.059",
                "parallel": "56.861",
                "online": "58.242"
            },
            {
                "department": "تقني التحكم بالجودة",
                "evening": "53.946",
                "parallel": "54.87",
                "online": "60"
            },
            {
                "department": "إدارة أنظمة المعلومات",
                "evening": "54.5",
                "parallel": "55.9",
                "online": "57.7"
            },
            {
                "department": "إدارة المنظمات السياحية",
                "evening": "54.16",
                "parallel": "55.4",
                "online": "57.2"
            }
        ],
        "كلية الإدارة التقنية": [
            {
                "department": "إدارة الاعمال",
                "evening": "60.1",
                "parallel": "64.3",
                "online": "68.202"
            },
            {
                "department": "اعلام",
                "evening": "57.337",
                "parallel": "58.4",
                "online": "64.4"
            },
            {
                "department": "تسويق دولي",
                "evening": "57",
                "parallel": "62.5",
                "online": "62.1"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "63.485",
                "online": "66.417"
            }
        ],
        "معهد أربيل الطبي": [
            {
                "department": "صيدلة",
                "evening": "78.974",
                "parallel": "83.429",
                "online": "85.429"
            },
            {
                "department": "تمريض",
                "evening": "76.143",
                "parallel": "78.862",
                "online": "82.931"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "71.682",
                "parallel": "74.571",
                "online": "79.015"
            },
            {
                "department": "تخدير",
                "evening": "-",
                "parallel": "77.429",
                "online": "79.726"
            },
            {
                "department": "مساعد طبيب اسنان",
                "evening": "-",
                "parallel": "73.143",
                "online": "76"
            },
            {
                "department": "فحص العين",
                "evening": "-",
                "parallel": "71.143",
                "online": "74.536"
            },
            {
                "department": "اشعة",
                "evening": "-",
                "parallel": "71.205",
                "online": "74.146"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "65.07",
                "parallel": "68.286",
                "online": "70.427"
            }
        ],
        "معهد الإدارة التقني": [
            {
                "department": "إدارة اعمال",
                "evening": "58.749",
                "parallel": "60.4",
                "online": "62.759"
            },
            {
                "department": "إدارة قوانين",
                "evening": "58.2",
                "parallel": "59.516",
                "online": "61.94"
            },
            {
                "department": "إدارة تسويق",
                "evening": "57.408",
                "parallel": "59.2",
                "online": "58.88"
            },
            {
                "department": "إدارة منظمات سياحية",
                "evening": "55",
                "parallel": "56.838",
                "online": "57.492"
            },
            {
                "department": "إدارة أنظمة المعلومات",
                "evening": "56.4",
                "parallel": "58.4",
                "online": "58.9"
            },
            {
                "department": "الترجمة",
                "evening": "56.6",
                "parallel": "59.9",
                "online": "61.1"
            },
            {
                "department": "اعلام",
                "evening": "56.6",
                "parallel": "58.5",
                "online": "57.4"
            },
            {
                "department": "معلومات المكتبات",
                "evening": "55.3",
                "parallel": "56.6",
                "online": "57"
            },
            {
                "department": "المحاسبة",
                "evening": "57.496",
                "parallel": "59.58",
                "online": "61.355"
            }
        ],
        "معهد كويه التقني": [
            {
                "department": "تمريض",
                "evening": "66.405",
                "parallel": "69.667",
                "online": "74.857"
            },
            {
                "department": "تمريض تةقتةق",
                "evening": "65.429",
                "parallel": "68.286",
                "online": "72"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "63.756",
                "parallel": "66.857",
                "online": "70.519"
            },
            {
                "department": "تحليلات مرضية تةقتةق",
                "evening": "63.075",
                "parallel": "65.217",
                "online": "67.987"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "60.286",
                "parallel": "61.94",
                "online": "63.703"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.454",
                "parallel": "58.219",
                "online": "60.4"
            },
            {
                "department": "تھکنھلۆجای نھوت/شکاری کما",
                "evening": "53.929",
                "parallel": "56.4",
                "online": "59.4"
            },
            {
                "department": "النفط وتحليلات كيميائية",
                "evening": "53.611",
                "parallel": "56.044",
                "online": "57.698"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "55.454",
                "parallel": "58.1",
                "online": "58.157"
            },
            {
                "department": "إدارة منظمات سياحية",
                "evening": "53.57",
                "parallel": "55.2",
                "online": "0"
            }
        ],
        "الكلية التقنية سوران": [
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "69.143",
                "online": "74"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "63.143",
                "parallel": "66",
                "online": "69.749"
            },
            {
                "department": "نسائية وتوليد",
                "evening": "59.429",
                "parallel": "61.88",
                "online": "63.546"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.425",
                "parallel": "57.804",
                "online": "59.6"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.54",
                "parallel": "57.272",
                "online": "58.9"
            },
            {
                "department": "محاسبة",
                "evening": "53.715",
                "parallel": "56.684",
                "online": "57.4"
            }
        ],
        "المعهد التقني ميركةسوور": [
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "66.463",
                "online": "69.783"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "54.691",
                "parallel": "55.9",
                "online": "60"
            }
        ],
        "المعهد التقني جومان": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "56.1",
                "online": "60"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "55.807",
                "online": "59.119"
            },
            {
                "department": "إدارة مالية",
                "evening": "-",
                "parallel": "55.6",
                "online": "57.322"
            }
        ],
        "المعهد التقني خبات": [
            {
                "department": "إدارة قوانين",
                "evening": "55.768",
                "parallel": "57.408",
                "online": "58.5"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.068",
                "parallel": "56.966",
                "online": "57.343"
            },
            {
                "department": "انتاج النباتات الطبية",
                "evening": "51.956",
                "parallel": "54.064",
                "online": "0"
            },
            {
                "department": "حماية النبات",
                "evening": "51.4",
                "parallel": "54.747",
                "online": "0"
            },
            {
                "department": "امن الغذاء والجودة",
                "evening": "52.3",
                "parallel": "53.94",
                "online": "0"
            }
        ]
    },
    "جامعة كوية": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "95.56",
                "online": "96"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "91.44",
                "online": "92.533"
            },
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "91.447",
                "online": "92.28"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "84.929",
                "online": "88.093"
            },
            {
                "department": "النفط",
                "evening": "-",
                "parallel": "79.04",
                "online": "81.11"
            },
            {
                "department": "كيمياويات",
                "evening": "-",
                "parallel": "83.02",
                "online": "79.667"
            },
            {
                "department": "جيوتكنيك",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            },
            {
                "department": "الصناعة",
                "evening": "-",
                "parallel": "0",
                "online": "80"
            }
        ],
        "كلية العلوم والصحة": [
            {
                "department": "مايكروبايلوجي طبي",
                "evening": "-",
                "parallel": "89.969",
                "online": "91.377"
            },
            {
                "department": "بايولوجي عام",
                "evening": "-",
                "parallel": "78.793",
                "online": "82.8"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "72.818",
                "online": "78.107"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "74.88",
                "online": "78.1"
            },
            {
                "department": "علم النفس السريري",
                "evening": "-",
                "parallel": "64.395",
                "online": "66.327"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "59.081",
                "online": "64.3"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "57.905",
                "online": "65"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "72.33",
                "online": "75.338"
            },
            {
                "department": "إنكليزي",
                "evening": "57.765",
                "parallel": "65.2",
                "online": "70.3"
            },
            {
                "department": "إدارة اعمال",
                "evening": "56.16",
                "parallel": "59.746",
                "online": "63.695"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "57.8",
                "online": "64.4"
            }
        ],
        "كلية التربية": [
            {
                "department": "كوردى",
                "evening": "58.118",
                "parallel": "57.708",
                "online": "62"
            },
            {
                "department": "إنكليزي",
                "evening": "60.6",
                "parallel": "67.862",
                "online": "72.989"
            },
            {
                "department": "عربي",
                "evening": "58.6",
                "parallel": "58.803",
                "online": "63.2"
            },
            {
                "department": "تاريخ",
                "evening": "53.759",
                "parallel": "60.6",
                "online": "64.7"
            },
            {
                "department": "جغرافيا",
                "evening": "54.67",
                "parallel": "59.4",
                "online": "64.421"
            },
            {
                "department": "تربية اديان",
                "evening": "-",
                "parallel": "54.549",
                "online": "57"
            },
            {
                "department": "تربية وعلم النفس",
                "evening": "53.542",
                "parallel": "59.246",
                "online": "64.4"
            }
        ]
    },
    "جامعة سوران": {
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "83.133",
                "online": "87.389"
            },
            {
                "department": "مدني وبيئة",
                "evening": "-",
                "parallel": "80.2",
                "online": "79"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "0",
                "online": "79.913"
            },
            {
                "department": "النفط",
                "evening": "-",
                "parallel": "80.2",
                "online": "78.1"
            },
            {
                "department": "المعادن",
                "evening": "-",
                "parallel": "-",
                "online": "80"
            },
            {
                "department": "ميكاترونك وربوتات",
                "evening": "-",
                "parallel": "87.5",
                "online": "79.8"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "77.66",
                "online": "83.66"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "72.48",
                "online": "78.48"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "63.937",
                "online": "69.258"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "57.709",
                "online": "64.002"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "72.701",
                "online": "77.18"
            },
            {
                "department": "جيولوجي نفط",
                "evening": "-",
                "parallel": "60.635",
                "online": "65"
            }
        ],
        "كلية الاداب": [
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "58.104",
                "online": "63.16"
            },
            {
                "department": "إنكليزي",
                "evening": "57.6",
                "parallel": "67.314",
                "online": "73.314"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "59.5",
                "online": "62.1"
            },
            {
                "department": "تاريخ",
                "evening": "56.167",
                "parallel": "58.5",
                "online": "65"
            },
            {
                "department": "جغرافيا",
                "evening": "55",
                "parallel": "61.361",
                "online": "64.156"
            },
            {
                "department": "علم النفس",
                "evening": "54.646",
                "parallel": "59.2",
                "online": "64.585"
            },
            {
                "department": "علم الاجتماع",
                "evening": "53.6",
                "parallel": "57.4",
                "online": "0"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "كوردى",
                "evening": "57.395",
                "parallel": "58.045",
                "online": "63.2"
            },
            {
                "department": "إنكليزي",
                "evening": "57.712",
                "parallel": "66",
                "online": "72"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "58.4",
                "online": "62.836"
            },
            {
                "department": "روضة أطفال",
                "evening": "-",
                "parallel": "59.441",
                "online": "63.4"
            },
            {
                "department": "علوم عامة",
                "evening": "-",
                "parallel": "59.44",
                "online": "64.68"
            },
            {
                "department": "علوم الاجتماع",
                "evening": "57.713",
                "parallel": "59.7",
                "online": "63.804"
            }
        ],
        "كلية القانون والسياسة": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "70.78",
                "online": "74.6"
            },
            {
                "department": "سياسية ودبلوماسية",
                "evening": "-",
                "parallel": "58.6",
                "online": "64"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "59.5",
                "online": "62.637"
            },
            {
                "department": "المحاسبة",
                "evening": "-",
                "parallel": "57.9",
                "online": "61.959"
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
                "parallel": "96.667",
                "online": "97.667"
            },
            {
                "department": "طب اسنان",
                "evening": "-",
                "parallel": "95.667",
                "online": "96.333"
            },
            {
                "department": "صيدلة",
                "evening": "-",
                "parallel": "95.2",
                "online": "95.6"
            },
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "87.667",
                "online": "90"
            },
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "93.8",
                "online": "93.92"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "87.68",
                "online": "90.92"
            },
            {
                "department": "كهرباء",
                "evening": "-",
                "parallel": "80.513",
                "online": "85.4"
            },
            {
                "department": "موارد المياه",
                "evening": "-",
                "parallel": "0",
                "online": "78.046"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "93.6",
                "online": "93.56"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "87.371",
                "online": "90.133"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "83.86",
                "online": "86.999"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "61.8",
                "online": "67.149"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "58.471",
                "online": "63.3"
            },
            {
                "department": "جيولوجي",
                "evening": "-",
                "parallel": "58.471",
                "online": "63.048"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "809496",
                "online": "85.48"
            }
        ],
        "زمان": [
            {
                "department": "كوردى",
                "evening": "58.7",
                "parallel": "57.2",
                "online": "62.5"
            }
        ],
        "كلية اللغات": [
            {
                "department": "إنكليزي",
                "evening": "70.361",
                "parallel": "78.7",
                "online": "82.423"
            },
            {
                "department": "عربي",
                "evening": "58.8",
                "parallel": "63.6",
                "online": "66.544"
            },
            {
                "department": "فارسي",
                "evening": "60",
                "parallel": "59.553",
                "online": "63.963"
            },
            {
                "department": "الترجمة",
                "evening": "-",
                "parallel": "73.426",
                "online": "77.598"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "82.525",
                "online": "86.6"
            }
        ],
        "كلية العلوم الإسلامية": [
            {
                "department": "مبادئ الأديان",
                "evening": "-",
                "parallel": "53.9",
                "online": "58.5"
            },
            {
                "department": "تربية اديان",
                "evening": "-",
                "parallel": "54.1",
                "online": "58.4"
            },
            {
                "department": "شريعة",
                "evening": "-",
                "parallel": "56.333",
                "online": "58"
            },
            {
                "department": "دراسات إسلامية",
                "evening": "53.75",
                "parallel": "57.2",
                "online": "57.817"
            }
        ],
        "كلية السياسة": [
            {
                "department": "علوم سياسية",
                "evening": "-",
                "parallel": "59.8",
                "online": "65.373"
            },
            {
                "department": "سياسة وعلاقات دولية",
                "evening": "-",
                "parallel": "58.2",
                "online": "64"
            }
        ],
        "كلية التربية": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "72.1",
                "online": "77.8"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "69.3",
                "online": "75.3"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "64.3",
                "online": "70.441"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "63.6",
                "online": "69.6"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "كوردى",
                "evening": "58.748",
                "parallel": "62.7",
                "online": "67.387"
            },
            {
                "department": "إنكليزي",
                "evening": "68.9",
                "parallel": "75.476",
                "online": "80.5"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "61.2",
                "online": "66.109"
            },
            {
                "department": "اجتماعيات",
                "evening": "60",
                "parallel": "60.6",
                "online": "62.7"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "64.5",
                "online": "70.3"
            },
            {
                "department": "تربية خاصة",
                "evening": "57.4",
                "parallel": "59",
                "online": "63.5"
            },
            {
                "department": "روضة أطفال",
                "evening": "57.6",
                "parallel": "60.755",
                "online": "64.8"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "تاريخ",
                "evening": "63.95",
                "parallel": "59.129",
                "online": "61.336"
            },
            {
                "department": "جغرافيا",
                "evening": "0",
                "parallel": "60.4",
                "online": "63.377"
            },
            {
                "department": "اثار",
                "evening": "60",
                "parallel": "58.677",
                "online": "64.3"
            },
            {
                "department": "اعلام",
                "evening": "58.2",
                "parallel": "61",
                "online": "61.6"
            },
            {
                "department": "علم الاجتماع",
                "evening": "58.9",
                "parallel": "60.4",
                "online": "62"
            },
            {
                "department": "العمل الاجتماعي",
                "evening": "62.8",
                "parallel": "58.708",
                "online": "63.2"
            },
            {
                "department": "علاقات عامة",
                "evening": "59.1",
                "parallel": "58.98",
                "online": "64.5"
            },
            {
                "department": "فلسفة",
                "evening": "0",
                "parallel": "0",
                "online": "0"
            }
        ],
        "كلية الإدارة والاقتصاد": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "66.3",
                "online": "71.7"
            },
            {
                "department": "اقتصاد",
                "evening": "-",
                "parallel": "63.9",
                "online": "69.9"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "63.916",
                "online": "69.2"
            },
            {
                "department": "الإحصاء والمعرفة",
                "evening": "-",
                "parallel": "58.198",
                "online": "60"
            },
            {
                "department": "إدارة التسويق",
                "evening": "-",
                "parallel": "62.792",
                "online": "65.997"
            }
        ],
        "كلية التجارة": [
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "75",
                "online": "78.9"
            },
            {
                "department": "تسويق دولي",
                "evening": "-",
                "parallel": "63.286",
                "online": "67.561"
            },
            {
                "department": "محاسبة مالية",
                "evening": "-",
                "parallel": "60.5",
                "online": "65.582"
            },
            {
                "department": "علوم مالية ومصرفية",
                "evening": "-",
                "parallel": "58.9",
                "online": "62.6"
            },
            {
                "department": "سياحة وسفر",
                "evening": "60",
                "parallel": "58.712",
                "online": "65.3"
            },
            {
                "department": "إدارة المشرايع",
                "evening": "58.382",
                "parallel": "60.921",
                "online": "62.6"
            }
        ],
        "كلية العلوم الإنسانية سيدصادق": [
            {
                "department": "تاريخ",
                "evening": "53.541",
                "parallel": "61.8",
                "online": "65"
            },
            {
                "department": "جغرافيا",
                "evening": "54.025",
                "parallel": "59.1",
                "online": "0"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "حدائق",
                "evening": "-",
                "parallel": "54.5",
                "online": "60"
            },
            {
                "department": "الثروة الطبيعية",
                "evening": "-",
                "parallel": "54.7",
                "online": "60"
            },
            {
                "department": "علوم حيوانية",
                "evening": "-",
                "parallel": "54.521",
                "online": "59.3"
            },
            {
                "department": "علوم التغذية والجودة",
                "evening": "-",
                "parallel": "57",
                "online": "57.882"
            },
            {
                "department": "إدارة زراعية وتنمية",
                "evening": "-",
                "parallel": "53.772",
                "online": "0"
            },
            {
                "department": "بايوتكنولوجي وعلوم زراعة",
                "evening": "-",
                "parallel": "54.498",
                "online": "58.1"
            }
        ]
    },
    "جامعة السليمانية التقنية": {
        "كلية الصحة الطبية": [
            {
                "department": "تخدير",
                "evening": "-",
                "parallel": "95",
                "online": "94.667"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "92.4",
                "online": "93.429"
            },
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "هندسة مواصلات",
                "evening": "-",
                "parallel": "80.708",
                "online": "85.708"
            },
            {
                "department": "ميكانيك وصناعة",
                "evening": "-",
                "parallel": "79.48",
                "online": "83.36"
            },
            {
                "department": "النفط والطاقة",
                "evening": "-",
                "parallel": "80.7",
                "online": "82.92"
            },
            {
                "department": "الكهرباء",
                "evening": "-",
                "parallel": "0",
                "online": "80"
            },
            {
                "department": "تخطيط مدني",
                "evening": "-",
                "parallel": "78.4",
                "online": "77.591"
            }
        ],
        "كلية الإدارة": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "63",
                "online": "66.387"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "60.1",
                "online": "64.8"
            },
            {
                "department": "اعلام",
                "evening": "-",
                "parallel": "58.256",
                "online": "62"
            },
            {
                "department": "علاقات عامة وتسويق",
                "evening": "-",
                "parallel": "60.689",
                "online": "63.6"
            }
        ],
        "كلية المعلومات": [
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "81.16",
                "online": "86.4"
            },
            {
                "department": "تقنية قواعد البيانات",
                "evening": "-",
                "parallel": "75.76",
                "online": "80.175"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "-",
                "parallel": "73.9",
                "online": "77.767"
            }
        ],
        "الكلية التقنية كلار": [
            {
                "department": "تحليلات مرضية",
                "evening": "-",
                "parallel": "80.602",
                "online": "84.263"
            },
            {
                "department": "تمريض",
                "evening": "75.439",
                "parallel": "76.857",
                "online": "80.571"
            },
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "62.54",
                "online": "67.62"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "56.045",
                "parallel": "60.2",
                "online": "63.649"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.921",
                "parallel": "60.013",
                "online": "63"
            },
            {
                "department": "مساح",
                "evening": "53.8",
                "parallel": "58.01",
                "online": "60.7"
            },
            {
                "department": "كهرباء",
                "evening": "55",
                "parallel": "55.7",
                "online": "60"
            },
            {
                "department": "إدارة المشاريع",
                "evening": "55",
                "parallel": "53.808",
                "online": "59.2"
            }
        ],
        "كلية العلوم العملية حلبجه": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "84",
                "online": "90"
            },
            {
                "department": "إدارة مشاريع",
                "evening": "-",
                "parallel": "57.111",
                "online": "60"
            },
            {
                "department": "التغذية والجودة",
                "evening": "-",
                "parallel": "53.821",
                "online": "59.3"
            }
        ],
        "معهد الكومبيوتر التقني": [
            {
                "department": "تقنية المعلومات",
                "evening": "60.879",
                "parallel": "64.912",
                "online": "70.91"
            },
            {
                "department": "أنظمة قواعد البيانات",
                "evening": "58.3",
                "parallel": "62.1",
                "online": "67.402"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "58.394",
                "parallel": "61.92",
                "online": "66.801"
            }
        ],
        "المعهد التقني ": [
            {
                "department": "صيدلة",
                "evening": "84.857",
                "parallel": "87.429",
                "online": "89.714"
            },
            {
                "department": "تمريض",
                "evening": "78.857",
                "parallel": "81.714",
                "online": "85.714"
            },
            {
                "department": "تخدير",
                "evening": "-",
                "parallel": "82.286",
                "online": "85.143"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "74.704",
                "parallel": "79.143",
                "online": "83.714"
            },
            {
                "department": "تمريض اسنان",
                "evening": "-",
                "parallel": "74.536",
                "online": "79.429"
            },
            {
                "department": "اشعة",
                "evening": "-",
                "parallel": "74.561",
                "online": "79.143"
            },
            {
                "department": "تمريض أطفال",
                "evening": "-",
                "parallel": "73.582",
                "online": "77.429"
            },
            {
                "department": "صحة عامة",
                "evening": "69.973",
                "parallel": "72.704",
                "online": "76.587"
            },
            {
                "department": "تمريض نساء وتوليد",
                "evening": "-",
                "parallel": "71.358",
                "online": "75.583"
            },
            {
                "department": "تقني معماري",
                "evening": "-",
                "parallel": "62.911",
                "online": "68.9"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "59.7",
                "parallel": "61.5",
                "online": "64.142"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "59.584",
                "online": "63.2"
            },
            {
                "department": "محاسبة",
                "evening": "56.965",
                "parallel": "59.15",
                "online": "61.9"
            },
            {
                "department": "اعلام",
                "evening": "58.239",
                "parallel": "60.117",
                "online": "62"
            },
            {
                "department": "كهرباء",
                "evening": "55.7",
                "parallel": "58.1",
                "online": "59.4"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "58.2",
                "online": "59.1"
            }
        ],
        "المعهد التقني حلبجه": [
            {
                "department": "تمريض",
                "evening": "70.857",
                "parallel": "75.571",
                "online": "80.804"
            },
            {
                "department": "تحليلات مرضية",
                "evening": "69.289",
                "parallel": "73.143",
                "online": "78.857"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "56.4",
                "parallel": "59.266",
                "online": "61.489"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "56.7",
                "parallel": "58.847",
                "online": "60"
            },
            {
                "department": "محاسبة",
                "evening": "53.251",
                "parallel": "55.87",
                "online": "57.6"
            }
        ],
        "المعهد التقني جمجمال": [
            {
                "department": "تمريض",
                "evening": "73.143",
                "parallel": "76.433",
                "online": "80.857"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.8",
                "parallel": "58.9",
                "online": "62.6"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "56.2",
                "parallel": "58.7",
                "online": "60.117"
            },
            {
                "department": "كهرباء",
                "evening": "55",
                "parallel": "55.3",
                "online": "60"
            },
            {
                "department": "محاسبة",
                "evening": "53.5",
                "parallel": "55.919",
                "online": "58"
            }
        ],
        "المعهد التقني دربندخان ": [
            {
                "department": "تمريض",
                "evening": "70",
                "parallel": "74",
                "online": "78.286"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "54.6",
                "parallel": "57.6",
                "online": "62.1"
            },
            {
                "department": "كهرباء",
                "evening": "-",
                "parallel": "55.287",
                "online": "60"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "50",
                "parallel": "58.23",
                "online": "59.637"
            },
            {
                "department": "مساح",
                "evening": "-",
                "parallel": "54.7",
                "online": "59.4"
            },
            {
                "department": "محاسبة",
                "evening": "52.973",
                "parallel": "53.797",
                "online": "57.58"
            }
        ],
        "المعهد التقني بكرةجو ": [
            {
                "department": "زراعة",
                "evening": "-",
                "parallel": "53.899",
                "online": "60"
            },
            {
                "department": "تصميم الحدائق",
                "evening": "-",
                "parallel": "54.481",
                "online": "60"
            },
            {
                "department": "علوم النحل",
                "evening": "-",
                "parallel": "54.41",
                "online": "60"
            },
            {
                "department": "إدارة الكترونية",
                "evening": "-",
                "parallel": "56.704",
                "online": "59"
            },
            {
                "department": "التغذية والتحكم بالجودة",
                "evening": "-",
                "parallel": "55.465",
                "online": "58.478"
            }
        ],
        "المعهد التقني دوكان": [
            {
                "department": "تقنية المعلومات",
                "evening": "55.632",
                "parallel": "58.471",
                "online": "63.4"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.5",
                "parallel": "59.2",
                "online": "61.7"
            },
            {
                "department": "إدارة البنوك",
                "evening": "50",
                "parallel": "58.898",
                "online": "60"
            },
            {
                "department": "محاسبة",
                "evening": "50",
                "parallel": "56.3",
                "online": "58.3"
            },
            {
                "department": "علاقات عامة وتسويق",
                "evening": "55.215",
                "parallel": "57.8",
                "online": "57.4"
            }
        ]
    },
    "جامعة رابرين": {
        "كلية التمريض": [
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "90.6",
                "online": "92.5"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "92.1",
                "online": "92.5"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "79.9",
                "online": "84"
            }
        ],
        "كلية العلوم": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "84.6",
                "online": "90"
            },
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "80.1",
                "online": "86.1"
            },
            {
                "department": "فيزياء عامة",
                "evening": "-",
                "parallel": "58.2",
                "online": "63.7"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "كوردى",
                "evening": "58.8",
                "parallel": "57.7",
                "online": "63.4"
            },
            {
                "department": "إنكليزي",
                "evening": "58.5",
                "parallel": "68.4",
                "online": "74.4"
            },
            {
                "department": "عربي",
                "evening": "**",
                "parallel": "57",
                "online": "62.8"
            },
            {
                "department": "رياضيات",
                "evening": "**",
                "parallel": "58.4",
                "online": "62.6"
            },
            {
                "department": "روضة أطفال",
                "evening": "**",
                "parallel": "62.2",
                "online": "66.2"
            }
        ],
        "كلية التربية قةلادزى": [
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            },
            {
                "department": "كوردى",
                "evening": "60",
                "parallel": "58.4",
                "online": "62.9"
            },
            {
                "department": "إنكليزي",
                "evening": "57.2",
                "parallel": "68.7",
                "online": "74.7"
            },
            {
                "department": "عربي",
                "evening": "0",
                "parallel": "60.5",
                "online": "61.8"
            },
            {
                "department": "تربية وعلم نفس",
                "evening": "53.7",
                "parallel": "57.8",
                "online": "60.7"
            }
        ],
        "كلية العلوم الانسانية": [
            {
                "department": "قانون",
                "evening": "**",
                "parallel": "73.5",
                "online": "77.4"
            },
            {
                "department": "ادارە التسويق",
                "evening": "54.1",
                "parallel": "62",
                "online": "65.1"
            },
            {
                "department": "تاريخ",
                "evening": "**",
                "parallel": "0",
                "online": "65"
            },
            {
                "department": "ادارە التأمین",
                "evening": "**",
                "parallel": "61.3",
                "online": "65"
            },
            {
                "department": "جغرافيا",
                "evening": "**",
                "parallel": "61.8",
                "online": "65"
            },
            {
                "department": "فلسفة وتنمية بشرية",
                "evening": "-",
                "parallel": "59.8",
                "online": "0"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "حماية الحيوانات",
                "evening": "-",
                "parallel": "54.8",
                "online": "59"
            },
            {
                "department": "حدائق",
                "evening": "-",
                "parallel": "55",
                "online": "58.4"
            }
        ]
    },
    "جامعە كَةرميان": {
        "كلية الطب": [
            {
                "department": "طبعام",
                "evening": "-",
                "parallel": "96.2",
                "online": "97"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "80.367",
                "online": "78.4"
            }
        ],
        "كلية العلوم": [
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "72.74",
                "online": "78.6"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "67.1",
                "online": "72.833"
            }
        ],
        "كلية التربية": [
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "57.869",
                "online": "61"
            },
            {
                "department": "إنكليزي",
                "evening": "60.908",
                "parallel": "70.1",
                "online": "75.146"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "62.93",
                "online": "62.285"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "66.625",
                "online": "72.625"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "65.134",
                "online": "71.134"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "60.9",
                "online": "66.9"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "59.599",
                "online": "63.683"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "61.491",
                "online": "65"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "61.491",
                "online": "65"
            },
            {
                "department": "علم انفس",
                "evening": "56.2",
                "parallel": "57.8",
                "online": "62.6"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "كوردى",
                "evening": "57.5",
                "parallel": "57.9",
                "online": "62.6"
            },
            {
                "department": "عربي",
                "evening": "60",
                "parallel": "59.5",
                "online": "64.512"
            },
            {
                "department": "اجتماعيات",
                "evening": "53.742",
                "parallel": "0",
                "online": "65"
            },
            {
                "department": "روضة أطفال",
                "evening": "56.6",
                "parallel": "59.8",
                "online": "61.061"
            }
        ],
        "كلية القانون": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "73.2",
                "online": "76.927"
            }
        ],
        "كلية التكنولوجيا خانقين": [
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "57.735",
                "online": "63.2"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "-",
                "parallel": "60.491",
                "online": "63.046"
            }
        ],
        "كلية العلوم الإنسانية خانقين": [
            {
                "department": "كوردى",
                "evening": "0",
                "parallel": "0",
                "online": "65"
            },
            {
                "department": "إنكليزي",
                "evening": "57.381",
                "parallel": "58.553",
                "online": "62.3"
            },
            {
                "department": "عربي",
                "evening": "0",
                "parallel": "60.6",
                "online": "65"
            },
            {
                "department": "جغرافيا",
                "evening": "54.5",
                "parallel": "61.8",
                "online": "67.3"
            },
            {
                "department": "تاريخ",
                "evening": "53.504",
                "parallel": "64.4",
                "online": "68.8"
            },
            {
                "department": "علم النس",
                "evening": "54.204",
                "parallel": "58",
                "online": "60"
            }
        ]
    },
    "جامعة جرموو": {
        "كلية العلوم": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "82",
                "online": "88"
            },
            {
                "department": "علوم كيمياء",
                "evening": "-",
                "parallel": "71.433",
                "online": "77.7"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "66.94",
                "online": "72.94"
            },
            {
                "department": "علوم فيزياء",
                "evening": "-",
                "parallel": "59.8",
                "online": "63.904"
            }
        ],
        "كلية التربية": [
            {
                "department": "كوردى",
                "evening": "60",
                "parallel": "58",
                "online": "63.76"
            },
            {
                "department": "إنكليزي",
                "evening": "61.3",
                "parallel": "68.3",
                "online": "74.37"
            },
            {
                "department": "عربي",
                "evening": "59.9",
                "parallel": "58.6",
                "online": "64"
            },
            {
                "department": "علوم عامة",
                "evening": "-",
                "parallel": "60.52",
                "online": "65.776"
            },
            {
                "department": "تربية خاصة",
                "evening": "53.814",
                "parallel": "57.576",
                "online": "64.2"
            }
        ],
        "كلية العمل": [
            {
                "department": "إدارة النفط والطاقة",
                "evening": "-",
                "parallel": "60.4",
                "online": "64.5"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "56.6",
                "parallel": "59.9",
                "online": "64.295"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "58.9",
                "online": "62.5"
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
                "parallel": "95",
                "online": "96"
            },
            {
                "department": "طب اسنان",
                "evening": "-",
                "parallel": "93.714",
                "online": "94.4"
            },
            {
                "department": "صيدلة",
                "evening": "-",
                "parallel": "93.429",
                "online": "93.929"
            },
            {
                "department": "طب بيطري",
                "evening": "-",
                "parallel": "73.676",
                "online": "79.189"
            },
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "92.8",
                "online": "92.8"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "معماري",
                "evening": "-",
                "parallel": "92.1",
                "online": "92.96"
            },
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "90",
                "online": "91.4"
            },
            {
                "department": "كهرباء وكومبيوتر",
                "evening": "-",
                "parallel": "83.4",
                "online": "88.289"
            },
            {
                "department": "بايوميديكال",
                "evening": "-",
                "parallel": "81.33",
                "online": "81.33"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "82.567",
                "online": "80.2"
            }
        ],
        "كلية العلوم الصحية": [
            {
                "department": "التخدير",
                "evening": "-",
                "parallel": "90.768",
                "online": "92"
            },
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "90.888",
                "online": "91.888"
            }
        ],
        "كلية التخطيط المدني": [
            {
                "department": "تخطيط مدني",
                "evening": "-",
                "parallel": "64.088",
                "online": "68.466"
            },
            {
                "department": "تخطيط مكاني",
                "evening": "-",
                "parallel": "65",
                "online": "65"
            }
        ],
        "كلية العلوم": [
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "78.2",
                "online": "84.2"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "75.674",
                "online": "81.443"
            },
            {
                "department": "علوم كومبيوتر",
                "evening": "-",
                "parallel": "72.7",
                "online": "78.7"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "67.877",
                "online": "73.877"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "65.048",
                "online": "71.048"
            },
            {
                "department": "جيولوجي",
                "evening": "-",
                "parallel": "61.2",
                "online": "67.7"
            }
        ],
        "كلية اللغات": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "74.008",
                "online": "80.008"
            },
            {
                "department": "الترجمة",
                "evening": "-",
                "parallel": "71.8",
                "online": "77.8"
            },
            {
                "department": "كوردي",
                "evening": "-",
                "parallel": "61.8",
                "online": "61.9"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "70.765",
                "online": "76.3"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "66.3",
                "online": "72.3"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "65.621",
                "online": "69.8"
            },
            {
                "department": "علوم",
                "evening": "-",
                "parallel": "63.76",
                "online": "69.04"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "64.7",
                "online": "68.1"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "62.749",
                "online": "67.184"
            },
            {
                "department": "كوردى",
                "evening": "-",
                "parallel": "63.06",
                "online": "65.93"
            },
            {
                "department": "تربية دينية",
                "evening": "-",
                "parallel": "60",
                "online": "63.114"
            },
            {
                "department": "مرشد تربوي",
                "evening": "-",
                "parallel": "60.927",
                "online": "62.167"
            },
            {
                "department": "تربية خاصة",
                "evening": "-",
                "parallel": "61.662",
                "online": "61.8"
            }
        ],
        "كلية القانون والسياسة": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "79.663",
                "online": "84"
            },
            {
                "department": "علاقات دولية ودبلوماسية",
                "evening": "-",
                "parallel": "68.8",
                "online": "73.895"
            },
            {
                "department": "السياسة العامة",
                "evening": "-",
                "parallel": "66.4",
                "online": "71.412"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "64.177",
                "online": "69.392"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "63.5",
                "online": "66.4"
            },
            {
                "department": "تاريخ",
                "evening": "-",
                "parallel": "63.2",
                "online": "64.473"
            },
            {
                "department": "حقوق الانسان",
                "evening": "-",
                "parallel": "60.5",
                "online": "64.256"
            },
            {
                "department": "اثار",
                "evening": "-",
                "parallel": "60.9",
                "online": "62.449"
            },
            {
                "department": "اجتماعيات",
                "evening": "-",
                "parallel": "60.9",
                "online": "66.5"
            }
        ],
        "كلية الإدارة والاقصتاد": [
            {
                "department": "اقتصاد",
                "evening": "-",
                "parallel": "64.6",
                "online": "70.2"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "64.3",
                "online": "67.216"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "61.926",
                "online": "65.8"
            },
            {
                "department": "إدارة تسويق",
                "evening": "-",
                "parallel": "62.4",
                "online": "64"
            },
            {
                "department": "علوم مالية ومصرفية",
                "evening": "-",
                "parallel": "60.856",
                "online": "63.409"
            }
        ],
        "كلية الهندسة الزراعية": [
            {
                "department": "تربة ومياه",
                "evening": "-",
                "parallel": "53.864",
                "online": "59.864"
            },
            {
                "department": "ارشاد زراعي وريفي",
                "evening": "-",
                "parallel": "54.541",
                "online": "59.429"
            },
            {
                "department": "الإنتاج الحيواني",
                "evening": "-",
                "parallel": "54.036",
                "online": "59.27"
            },
            {
                "department": "البستنه",
                "evening": "-",
                "parallel": "53.788",
                "online": "59.1"
            },
            {
                "department": "غابات",
                "evening": "-",
                "parallel": "55.768",
                "online": "58.903"
            },
            {
                "department": "علوم وتقنية الغذاء",
                "evening": "-",
                "parallel": "56.2",
                "online": "58.782"
            },
            {
                "department": "الإنتاج الحقلي",
                "evening": "-",
                "parallel": "53.644",
                "online": "58.767"
            },
            {
                "department": "السياحة البيئية",
                "evening": "-",
                "parallel": "53.827",
                "online": "58.707"
            },
            {
                "department": "الإنتاج الحيواني",
                "evening": "-",
                "parallel": "57.103",
                "online": "62.42"
            }
        ],
        "كلية التربية الاساس ئاميدي": [
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "65.8",
                "online": "71.8"
            },
            {
                "department": "اجتماعيات",
                "evening": "-",
                "parallel": "68.9",
                "online": "64.5"
            }
        ]
    },
    "جامعة دهوك التقنية": {
        "كلية الهندسة التقنية": [
            {
                "department": "طرق وجسور",
                "evening": "-",
                "parallel": "80.6",
                "online": "83.767"
            },
            {
                "department": "هندسة كيمياء",
                "evening": "-",
                "parallel": "82.28",
                "online": "83.609"
            },
            {
                "department": "الطاقة",
                "evening": "-",
                "parallel": "0",
                "online": "80.633"
            }
        ],
        "الكلية التقنية": [
            {
                "department": "تقنية صناعة الاسنان",
                "evening": "-",
                "parallel": "91.714",
                "online": "91.449"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "66.825",
                "online": "72.3"
            },
            {
                "department": "أنظمة المعلومات الإدارية",
                "evening": "-",
                "parallel": "60.667",
                "online": "65.167"
            }
        ],
        "كلية الاعمال التقنية": [
            {
                "department": "إدارة الاعمال",
                "evening": "58.6",
                "parallel": "61.795",
                "online": "63.1"
            },
            {
                "department": "اعلام",
                "evening": "-",
                "parallel": "59.57",
                "online": "62.8"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "58.909",
                "online": "62.053"
            }
        ],
        "الكلية التقنية زاخو": [
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "59.99",
                "online": "65"
            }
        ],
        "كلية البترول والمعادن زاخو": [
            {
                "department": "جيولوجي بترول",
                "evening": "-",
                "parallel": "65.6",
                "online": "70.5"
            },
            {
                "department": "أنظمة تقنية الكومببيوتر",
                "evening": "-",
                "parallel": "62.247",
                "online": "66.365"
            }
        ],
        "الكلية الصحية شيخان": [
            {
                "department": "مختبرات طبية",
                "evening": "-",
                "parallel": "85.267",
                "online": "88.033"
            },
            {
                "department": "صحة عامة",
                "evening": "-",
                "parallel": "77.326",
                "online": "83.326"
            },
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "0",
                "online": "0"
            }
        ],
        "المعهد التقني": [
            {
                "department": "صيدلة",
                "evening": "79.937",
                "parallel": "82",
                "online": "85.143"
            },
            {
                "department": "تمريض",
                "evening": "71.788",
                "parallel": "75.143",
                "online": "80.286"
            },
            {
                "department": "مساح",
                "evening": "56.7",
                "parallel": "59.372",
                "online": "62.649"
            },
            {
                "department": "صناعات تكنولوجيا",
                "evening": "54.6",
                "parallel": "56.756",
                "online": "59.318"
            },
            {
                "department": "تكنولوجيا البناء",
                "evening": "54.1",
                "parallel": "57.927",
                "online": "58.441"
            },
            {
                "department": "تكنولوجيا الانترنيت",
                "evening": "53.9",
                "parallel": "57.6",
                "online": "57.717"
            }
        ],
        "معهد الاعمال التقني": [
            {
                "department": "إدارة القوانين",
                "evening": "58.188",
                "parallel": "59.877",
                "online": "63"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "58.4",
                "parallel": "60.3",
                "online": "62.8"
            },
            {
                "department": "انظمة المعلومات الادارية",
                "evening": "53.907",
                "parallel": "55.953",
                "online": "59.568"
            },
            {
                "department": "محاسبة",
                "evening": "53.736",
                "parallel": "57.1",
                "online": "57.911"
            }
        ],
        "المعهد التقني زاخو": [
            {
                "department": "تمريض",
                "evening": "69.736",
                "parallel": "73.714",
                "online": "78"
            },
            {
                "department": "مختبرات طبية",
                "evening": "67.8",
                "parallel": "71.3",
                "online": "75.775"
            },
            {
                "department": "نفط",
                "evening": "57.9",
                "parallel": "60.742",
                "online": "63.4"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "57.816",
                "parallel": "59.258",
                "online": "62.1"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "55.842",
                "parallel": "57.797",
                "online": "61.387"
            },
            {
                "department": "زراعة المحميات",
                "evening": "53.05",
                "parallel": "55.013",
                "online": "58.448"
            }
        ],
        "المعهد التقني ئاميدي": [
            {
                "department": "مختبرات طبية",
                "evening": "66.5",
                "parallel": "68.91",
                "online": "73"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "56.6",
                "parallel": "58.2",
                "online": "60"
            },
            {
                "department": "إدارة التسويق",
                "evening": "-",
                "parallel": "57.4",
                "online": "58.4"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "53",
                "parallel": "55.654",
                "online": "57.875"
            },
            {
                "department": "إدارة سياحية",
                "evening": "54.865",
                "parallel": "56.439",
                "online": "57"
            }
        ],
        "المعهد التقني شيخان": [
            {
                "department": "إدارة الاعمال",
                "evening": "56.97",
                "parallel": "58.4",
                "online": "60.3"
            },
            {
                "department": "محاسبة",
                "evening": "51.858",
                "parallel": "55.256",
                "online": "60"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "53.097",
                "parallel": "56.131",
                "online": "57.179"
            }
        ],
        "المعهد التقني شنكَال": [
            {
                "department": "إدارة صحية",
                "evening": "67.7",
                "parallel": "68.4",
                "online": "69.9"
            }
        ]
    },
    "جامعة ئاكرى": {
        "كلية التربية ": [
            {
                "department": "كوردى",
                "evening": "59.6",
                "parallel": "62.9",
                "online": "67.68"
            },
            {
                "department": "إنكليزي",
                "evening": "63.9",
                "parallel": "70.7",
                "online": "76.4"
            },
            {
                "department": "عربي",
                "evening": "61.9",
                "parallel": "66.4",
                "online": "72.4"
            },
            {
                "department": "احياء",
                "evening": "-",
                "parallel": "65.3",
                "online": "71.3"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "62.5",
                "online": "66.873"
            },
            {
                "department": "تاريخ",
                "evening": "62.3",
                "parallel": "64.3",
                "online": "69.1"
            },
            {
                "department": "تربية اديان",
                "evening": "59.3",
                "parallel": "61.6",
                "online": "65.1"
            }
        ],
        "الكلية التقنية": [
            {
                "department": "إدارة الاعمال",
                "evening": "59.5",
                "parallel": "61.375",
                "online": "63.739"
            },
            {
                "department": "زراعة",
                "evening": "-",
                "parallel": "55.643",
                "online": "57.749"
            }
        ],
        "كلية تقنية المعلومات": [
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "65.633",
                "online": "71.267"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "-",
                "parallel": "64.2",
                "online": "68.033"
            }
        ],
        "المعهد التقني ئاكرى": [
            {
                "department": "تمريض",
                "evening": "69.714",
                "parallel": "72.716",
                "online": "77.663"
            },
            {
                "department": "إدارة القوانين",
                "evening": "57.8",
                "parallel": "59.2",
                "online": "62"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "56.429",
                "parallel": "58.713",
                "online": "61.208"
            },
            {
                "department": "مساح",
                "evening": "55.7",
                "parallel": "58.7",
                "online": "59.847"
            }
        ],
        "المعهد التقني بردرةش": [
            {
                "department": "تمريض",
                "evening": "-",
                "parallel": "71.772",
                "online": "76.155"
            },
            {
                "department": "إدارة الاعمال",
                "evening": "-",
                "parallel": "58.8",
                "online": "61.6"
            },
            {
                "department": "شبكات الكومبيوتر",
                "evening": "-",
                "parallel": "56.2",
                "online": "60"
            },
            {
                "department": "محاسبة",
                "evening": "-",
                "parallel": "55.646",
                "online": "58.4"
            },
            {
                "department": "تقنية المعلومات",
                "evening": "-",
                "parallel": "57.1",
                "online": "58.3"
            }
        ]
    },
    "جامعة زاخو": {
        "كلية الطب": [
            {
                "department": "طب عام",
                "evening": "-",
                "parallel": "94.6",
                "online": "95.4"
            }
        ],
        "كلية الهندسة": [
            {
                "department": "هندسة نفط",
                "evening": "-",
                "parallel": "84.2",
                "online": "88.4"
            },
            {
                "department": "مدني وبيئة",
                "evening": "-",
                "parallel": "85.05",
                "online": "88.2"
            },
            {
                "department": "ميكانيك",
                "evening": "-",
                "parallel": "0",
                "online": "80.2"
            }
        ],
        "كلية العلوم": [
            {
                "department": "بايولوجي",
                "evening": "-",
                "parallel": "76.294",
                "online": "81.867"
            },
            {
                "department": "كيمياء",
                "evening": "-",
                "parallel": "73.533",
                "online": "79.533"
            },
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "70.54",
                "online": "76.1"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "66.741",
                "online": "72.741"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "63.654",
                "online": "68.73"
            }
        ],
        "كلية التربية": [
            {
                "department": "جرغفيا",
                "evening": "-",
                "parallel": "64.087",
                "online": "67.9"
            },
            {
                "department": "رياضيات",
                "evening": "-",
                "parallel": "62.036",
                "online": "65.7"
            },
            {
                "department": "علم النفس",
                "evening": "-",
                "parallel": "62.2",
                "online": "65.358"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "كوردي",
                "evening": "57.115",
                "parallel": "60.9",
                "online": "63.116"
            },
            {
                "department": "إنكليزي",
                "evening": "-",
                "parallel": "69.2",
                "online": "75.2"
            },
            {
                "department": "عربي",
                "evening": "-",
                "parallel": "65.581",
                "online": "70.1"
            },
            {
                "department": "علوم عامة",
                "evening": "-",
                "parallel": "62.6",
                "online": "66.828"
            },
            {
                "department": "علم الاجتماع",
                "evening": "59.6",
                "parallel": "61.8",
                "online": "64"
            }
        ],
        "كلية العلوم الإنسانية": [
            {
                "department": "كوردى",
                "evening": "57.405",
                "parallel": "60.865",
                "online": "61.4"
            },
            {
                "department": "إنكليزي",
                "evening": "64.5",
                "parallel": "70.5",
                "online": "76.5"
            },
            {
                "department": "عربي",
                "evening": "59.561",
                "parallel": "63.866",
                "online": "69.143"
            },
            {
                "department": "دراسات إسلامية",
                "evening": "58.4",
                "parallel": "59.4",
                "online": "62.443"
            },
            {
                "department": "تاريخ",
                "evening": "60.214",
                "parallel": "64",
                "online": "61.025"
            }
        ],
        "كلية الإدارة والاقتصاد": [
            {
                "department": "علم الاقتصاد",
                "evening": "-",
                "parallel": "63.2",
                "online": "66.1"
            },
            {
                "department": "علم المالية والمصرفية",
                "evening": "-",
                "parallel": "58.89",
                "online": "63.723"
            },
            {
                "department": "علم الإدارة",
                "evening": "60.33",
                "parallel": "61.8",
                "online": "62.8"
            }
        ]
    }


},
 "halabja": {


    "جامعة حلبجة": {
        "كلية الهندسة": [
            {
                "department": "مدني",
                "evening": "-",
                "parallel": "80.077",
                "online": "85.1"
            }
        ],
        "كلية العلوم": [
            {
                "department": "كومبيوتر",
                "evening": "-",
                "parallel": "70.567",
                "online": "76.56"
            },
            {
                "department": "فيزياء",
                "evening": "-",
                "parallel": "59.238",
                "online": "64.808"
            }
        ],
        "كلية القانون والاعمال": [
            {
                "department": "قانون",
                "evening": "-",
                "parallel": "75.1",
                "online": "79"
            },
            {
                "department": "تسويق دولي",
                "evening": "54.13",
                "parallel": "60.7",
                "online": "60.7"
            }
        ],
        "كلية التربية الأساس": [
            {
                "department": "إنكليزي",
                "evening": "62.603",
                "parallel": "69.3",
                "online": "75.3"
            },
            {
                "department": "عربي",
                "evening": "58.9",
                "parallel": "59.7",
                "online": "64.2"
            },
            {
                "department": "علوم عامة",
                "evening": "-",
                "parallel": "62.1",
                "online": "67.96"
            },
            {
                "department": "اجتماعيات",
                "evening": "-",
                "parallel": "61.2",
                "online": "0"
            }
        ],
        "كلية التربية شارةزوور": [
            {
                "department": "كوردى",
                "evening": "59.009",
                "parallel": "57.513",
                "online": "60.8"
            },
            {
                "department": "روضة أطفال",
                "evening": "54.718",
                "parallel": "58.6",
                "online": "62.297"
            },
            {
                "department": "تنمية بشرية",
                "evening": "53.6",
                "parallel": "62.2",
                "online": "0"
            }
        ],
        "كلية العلوم الانسانية": [
            {
                "department": "تاريخ",
                "evening": "53.982",
                "parallel": "59.881",
                "online": "65"
            },
            {
                "department": "سياحة وسفر",
                "evening": "53.653",
                "parallel": "61.8",
                "online": "65"
            },
            {
                "department": "اعلام",
                "evening": "53.6",
                "parallel": "58.2",
                "online": "62.8"
            },
            {
                "department": "مبادئ الأديان",
                "evening": "54.764",
                "parallel": "54.049",
                "online": "57.8"
            },
            {
                "department": "جغرافيا",
                "evening": "-",
                "parallel": "61.8",
                "online": "60"
            }
        ]
    }




}
};




document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip2');

    // Show the tooltip after 5 seconds
    setTimeout(() => {
        tooltip.classList.add('show');
        
        // Hide the tooltip after 3 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }, 25000);
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

document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');

    // Show the tooltip after 5 seconds
    setTimeout(() => {
        tooltip.classList.add('show');
        
        // Hide the tooltip after 3 seconds
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 3000);
    }, 14000);
});
