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


// Sample data
const data = {
'sulaymaniyah': {
        'جامعة السليمانية': {
            'كلية الطب': {
                'طب عام': { zankoline: 97.6, parallel: 96.6 },
                'طب اسنان': { zankoline: 96.3, parallel: 95.6 },
                'صيدلة': { zankoline: 95.6, parallel: 95.2 },
                'تمريض': { zankoline: 94, parallel: 93 },
                'طب بيطري': { zankoline: 90, parallel: 87.6 }
            },
            'كلية الهندسة': {
                'هندسة مدني': { zankoline: 90.9, parallel: 87.6 },
                'هندسة معماري': { zankoline: 93.9, parallel: 93.8 },
                'هندسة كومبيوتر': { zankoline: 93.5, parallel: 93.6 },
                'هندسة كهرباء': { zankoline: 85.4, parallel: 80.5 },
                'هندسة موارد المياه': { zankoline: 78, parallel: 78 }
            },
            'كلية العلوم': {
                'علوم بايولوجي': { zankoline: 90.1, parallel: 87.3 },
                'علوم كيمياء': { zankoline: 86.9, parallel: 84 },
                'علوم كومبيوتر': { zankoline: 85.4, parallel: 80.5 },
                'علوم جيولوجي': { zankoline: 63, parallel: 59.4 },
                'علوم فيزياء': { zankoline: 67.2, parallel: 61.8 },
                'علوم رياضيات': { zankoline: 63.3, parallel: 58.4 }
            },
            'كلية القانون': {
                'قانون': { zankoline: 86.6, parallel: 82.5 },
                'سياسية وعلاقات دولية': { zankoline: 64, parallel:58.2 },
                'علوم سياسية': { zankoline: 65, parallel: 59.8 }
            },
            'كلية الإدارة والاقتصاد': {
                'اقتصاد': { zankoline: 69.9, parallel: 63.9 },
                'إحصاء': { zankoline: 60.6, parallel: 58.2 },
                'إدارة الأعمال': { zankoline: 71.7, parallel: 66.3 },
                'المحاسبة': { zankoline: 69.2, parallel: 63.9 },
                'إدارة التسويق': { zankoline: 65.9, parallel: 62.7 }
            },

  'كلية التجارة': {
                'ادارة المشاريع': { zankoline: 62.2, parallel: 60.9 },
                'علوم مالية ومصرفية': { zankoline: 62.6, parallel: 58.9 },
                'تجارة دولية': { zankoline: 67.5, parallel: 63.2 },
                'تكنولوجيا المعلومات': { zankoline: 78.9, parallel: 75 },
                'السياحة والسفر': { zankoline: 65, parallel: 58.7 }
            },


            
            'كلية اللغات': {
                'اللغة الكوردية': { zankoline: 62.5, parallel: 57.3 },
                'اللغة العربية': { zankoline: 66.5, parallel: 63.6 },
                'اللغة الإنجليزية': { zankoline: 82.4, parallel: 78.7 },
                'الترجمة': { zankoline: 77.5, parallel: 73.4 },
                'اللغة الفارسية': { zankoline: 63.9, parallel: 59.5 }
            },
            'كلية الآداب والعلوم الانسانية': {
                'آداب تاريخ': { zankoline: 61.3, parallel: 59.1 },
                'آداب جغرافيا': { zankoline: 63.3, parallel: 60.4 },
                'آداب علم الاجتماع': { zankoline: 62, parallel: 60.4 },
                'آداب آثار': { zankoline: 64.3, parallel: 59.7 },
                'آداب فلسفة': { zankoline: 74, parallel: 74 }
            },
            'كلية التربية': {
                'تربية فيزياء': { zankoline: 70.4, parallel: 64.7 },
                'تربية رياضيات': { zankoline: 69.6, parallel: 63.9 },
                'تربية كيمياء': { zankoline: 75.3, parallel: 69.5 },
                'تربية أحياء': { zankoline: 77.8, parallel: 72.1 }
            },
            'كلية التربية الأساسية': {
                'تربية أساس علوم مجتمع': { zankoline: 62.7, parallel: 60.6 },
                'تربية أساس إنجليزي': { zankoline: 80.5, parallel: 75.4 },
                'تربية أساس كوردي': { zankoline: 67.5, parallel: 62.7 },
                'تربية أساس تربية خاصة': { zankoline: 63.6, parallel: 59 },
                'تربية أساس روضة أطفال': { zankoline: 64.8, parallel: 60.7 },
                'تربية أساس رياضيات': { zankoline: 68.1, parallel: 61.2 },
                'تربية أساس كمبيوتر': { zankoline: 70.3, parallel: 64.5 }
            },
            'كلية العلوم الإسلامية': {
                'علوم إسلامية': { zankoline: 57, parallel: 57.2 },
                'شريعة': { zankoline: 58, parallel: 56.3 }
            }
        },
        'جامعة السليمانية التقنية': {
            'كلية الصحة التقنية': {
                'تحليلات مرضية': { zankoline: 93.4, parallel: 92.4 },
                'التخدير': { zankoline: 94.6, parallel: 95 },
                'التمريض': { zankoline: 93, parallel: 92 }
            },
            'كلية انفورماتك التقنية': {
                'تكنلوجيا الداتا بيس': { zankoline: 80.2, parallel: 75.7 },
                'شبكات الكومبيوتر': { zankoline: 77.7, parallel: 73.9 },
                'تقنية المعلومات': { zankoline: 86.4, parallel: 81.1 }
            },
            'كلية الهندسة التقنية': {
                'هندسة ميكانيك': { zankoline: 83.3, parallel: 79.4 },
                'هندسة الاتصالات': { zankoline: 85.7, parallel: 80.7 },
                'هندسة التخطيط المدني': { zankoline: 77.5, parallel: 78.4 },
                'هندسة النفط والطاقة': { zankoline: 82.8, parallel: 80.7 },
                'هندسة الطاقة والسيطرة': { zankoline: 80, parallel: 80 }
            },
            'كلية الإدارة التقنية': {
                'إدارة الاعمال': { zankoline: 66.3, parallel: 63 },
                'المحاسبة': { zankoline: 64.8, parallel: 60.1 },
                'تقنية الاعلام': { zankoline: 62, parallel: 58.3 },
                'العلاقات العامة والتسويق': { zankoline: 63.6, parallel: 60.6 }
            },
            'المعهد التقني': {
                'التمريض': { zankoline: 85.7, parallel: 81.7 },
                'تمريض النساء والولادة': { zankoline: 75.5, parallel: 71.3 },
                'اشعة': { zankoline: 79.1, parallel: 74.5 },
                'التخدير': { zankoline: 85.1, parallel: 82.2 },
                'صيدلة': { zankoline: 89.7, parallel: 87.4 },
                'تحليلات مرضية': { zankoline: 83.7, parallel: 79.1 },
                'تمريض اسنان': { zankoline: 79.4, parallel: 74.5 },
                'تمريض أطفال': { zankoline: 77.4, parallel: 73.5 },
                'الصحة العامة': { zankoline: 76.8, parallel: 72.7 },
                'تقنية الاعلام': { zankoline: 60, parallel: 60.1 },
                'إدارة الاعمال': { zankoline: 64.1, parallel: 61.5 },
                'المحاسبة': { zankoline: 61.9, parallel: 59.1 },
                'ميكانيك': { zankoline: 59.1, parallel: 58.2 },
                'تقنية كهرباء': { zankoline: 59.4, parallel: 58.1 },
                'تقني معماري': { zankoline: 68.9, parallel: 62.9 },
                'إدارة الالكترونيات': { zankoline: 59, parallel: 56.7 },
                'الزراعة': { zankoline: 60, parallel: 53.9 },
                'مساح': { zankoline: 63.2, parallel: 59.5 },
                'علوم الطعام ومراقبة الجودة': { zankoline: 58.4, parallel: 55.4 },
                'علوم تربية النحل': { zankoline: 60, parallel: 54.4 },
                'أنظمة الداتا بيس': { zankoline: 67.4, parallel: 62.1 },
                'نيت وورك شبكات': { zankoline: 66.8, parallel: 61.9 },
                'تقنية المعلومات': { zankoline: 70.9, parallel: 64.9 }
            }
        
        },
            
            // بيانات جامعة كَرميان التقنية
        'جامعة كَرميان التقنية': {
            'الكلية التقنية – كلار': {
                'تحليلات مرضية': { zankoline: 84.2, parallel: 80.6 },
                'تمريض – دبلوم فقط': { zankoline: 80.5, parallel: 76.8 },
                'تقني بيطري – دبلوم فقط': { zankoline: 67.6, parallel: 62.5 },
                'إدارة أعمال – دبلوم فقط': { zankoline: 63, parallel: 60 },
                'مساح – دبلوم فقط': { zankoline: 60.7, parallel: 58 },
                'تقنية معلومات – دبلوم فقط': { zankoline: 63.6, parallel: 60.2 },
                'كهرباء – دبلوم فقط': { zankoline: 60, parallel: 55.7 }
            },
            'المعهد التقني – حلبجة': {
                'تحليلات مرضية': { zankoline: 78.8, parallel: 73.1 },
                'تمريض': { zankoline: 80.8, parallel: 75.5 },
                'إدارة أعمال': { zankoline: 60, parallel: 58.8 },
                'محاسبة': { zankoline: 57.6, parallel: 55.8 },
                'تقنية معلومات أي تي': { zankoline: 64.4, parallel: 59.2 }
            },
            ' المعهد التقني – جمجمال': {
                'تقني كهرباء': { zankoline: 60, parallel: 55.3 },
                'تقنية المعلومات': { zankoline: 62.6, parallel: 58.9 },
                'إدارة أعمال': { zankoline: 60.1, parallel: 58.7 }
            },
            'المعهد التقني – دربندخان': {
                'تمريض': { zankoline: 82.2, parallel: 74 },
                'تقني كهرباء': { zankoline: 50, parallel: 55.2 },
                'مساح': { zankoline: 59.4, parallel: 54.7 },
                'محاسبة': { zankoline: 57.5, parallel: 53.7 },
                'إدارة أعمال': { zankoline: 59.6, parallel: 58.3 },
                'علوم كومبيوتر': { zankoline: 62.1, parallel: 57.6 }
            },
            'المعهد التقني – دووكان': {
                'علاقات عامة وتسويق': { zankoline: 57.4, parallel: 57.8 },
                'إدارة أعمال': { zankoline: 61.7, parallel: 59.2 },
                'محاسبة': { zankoline: 58.3, parallel: 56.3 },
                'تقنية معلومات أي تي': { zankoline: 63.4, parallel: 58.4 }
            }
            
        },
            
            
               // بيانات جامعة رابرين
        'جامعة رابرين': {
            'كلية التمريض': {
                'تمريض': { zankoline: 0.0, parallel: 0.0 }
            },
            'كلية الهندسة': {
                'هندسة مدني': { zankoline: 83.9, parallel: 79.9 },
                'هندسة البرمجيات والمعلومات': { zankoline: 92.5, parallel: 92.1 }
            },
            'كلية العلوم': {
                'علوم مختبرات طبية': { zankoline: 90.6, parallel: 84.6 },
                'فيزياء عامة': { zankoline: 63.7, parallel: 58.2 },
                'بايولوجي': { zankoline: 86.1, parallel: 80.1 }
            },
            'كلية التربية أساس': {
                'لغة إنكليزية': { zankoline: 74.4, parallel: 68.4 },
                'لغة عربية': { zankoline: 62.8, parallel: 57 }
            },
            'كلية التربية – قلادزى': {
                'لغة عربية': { zankoline: 61.8, parallel: 60.5 },
                'لغة إنكليزي': { zankoline: 74.7, parallel: 68.7 },
                'لغة كوردية': { zankoline: 62.9, parallel: 58.4 },
                'تربية وعلم النفس': { zankoline: 60.7, parallel: 57.8 }
            },
            'كلية التربية أساس': {
                'رياضيات': { zankoline: 62.6, parallel: 58.4 },
                'لغة كوردية': { zankoline: 63.4, parallel: 57.7 },
                'علوم كومبيوتر': { zankoline: 0.0, parallel: 0.0 },
                'روضة أطفال': { zankoline: 66.2, parallel: 62.2 }
            },
            'كلية الزراعة الهندسية': {
                'حدائق': { zankoline: 58.4, parallel: 54.8 },
                'الثروة الحيوانية': { zankoline: 59, parallel: 55 }
            },
            'كلية القانون': {
                'قانون': { zankoline: 77.4, parallel: 73.5 }
            },
            'كلية العلوم الإنسانية': {
                'فلسفة وتطوير نفس': { zankoline: 0.0, parallel: 59.8 },
                'تاريخ': { zankoline: 65, parallel: 0.0 },
                'جغرافيا': { zankoline: 65, parallel: 61.8 },
                'إدارة الاعمال – باللغة الإنكليزية': { zankoline: 65.1, parallel: 62 },
                'إدارة التأمين – باللغة الإنكليزية': { zankoline: 65, parallel: 61.3 }
            }
        },
        
        // بيانات جامعة كَرميان
        'جامعة كَرميان': {
            'كلية الطب': {
                'طب عام': { zankoline: 97, parallel: 96.2 }
            },
            'كلية الهندسة': {
                'هندسة مدني': { zankoline: 78.4, parallel: 80.3 }
            },
            'كلية العلوم': {
                'كومبيوتر': { zankoline: 72.8, parallel: 67.1 },
                'كيمياء': { zankoline: 78.5, parallel: 72.7 }
            },
            'كلية القانون': {
                'قانون': { zankoline: 76.9, parallel: 73.2 }
            },
            'كلية الكومبيوتر والتكنولوجيا': {
                'تقنية المعلومات أي أي': { zankoline: 63.2, parallel: 57.7 },
                'شبكات': { zankoline: 63, parallel: 60.4 }
            },
            'كلية التربية': {
                'بايولوجي': { zankoline: 72.6, parallel: 66.6 },
                'كيمياء': { zankoline: 71.1, parallel: 65.1 },
                'فيزياء': { zankoline: 66.9, parallel: 60.9 },
                'رياضيات': { zankoline: 63.6, parallel: 59.5 },
                'جغرافيا': { zankoline: 65, parallel: 61.4 },
                'لغة إنكليزي': { zankoline: 75.1, parallel: 70.1 },
                'لغة عربية': { zankoline: 62.2, parallel: 62.9 },
                'لغة كوردية': { zankoline: 61, parallel: 57.8 },
                'علم النفس': { zankoline: 62.6, parallel: 57.8 },
                'تاريخ': { zankoline: 65, parallel: 59.2 },
                'رياضة – خانقين': { zankoline: 55, parallel: 50 }
            },
            'كلية التربية أساس': {
                'علوم اجتماعيات': { zankoline: 65, parallel: 0.0 },
                'لغة كوردية': { zankoline: 62.6, parallel: 57.9 },
                'لغة عربية': { zankoline: 64.5, parallel: 59.5 },
                'رياضة – كلار': { zankoline: 55, parallel: 50 },
                'روضة أطفال': { zankoline: 61, parallel: 59.8 }
            },
            'كلية اللغات': {
                'لغة إنكليزي': { zankoline: 62.3, parallel: 58.5 },
                'لغة كوردي': { zankoline: 65, parallel: 0.0 },
                'لغة عربي': { zankoline: 65, parallel: 60.6 }
            },
            'كلية العلوم الإنسانية': {
                'تاريخ': { zankoline: 0.0, parallel: 0.0 },
                'جغرافيا': { zankoline: 0.0, parallel: 0.0 },
                'علم النفس': { zankoline: 0.0, parallel: 61 }
            }
        },
        
        // بيانات جامعة جرموو
        'جامعة جرموو': {
            'كلية العلوم': {
                'علوم كومبيوتر': { zankoline: 72.9, parallel: 66.9 },
                'علوم مختبرات طبية': { zankoline: 88, parallel: 82 },
                'علوم كيمياء': { zankoline: 77.7, parallel: 71.4 },
                'علوم فيزياء': { zankoline: 63.9, parallel: 59.8 }
            },
            'كلية التربية': {
                'تربية خاصة': { zankoline: 64.2, parallel: 57.5 },
                'علوم عامة': { zankoline: 65.7, parallel: 60.5 },
                'لغة عربية': { zankoline: 64, parallel: 58.6 },
                'لغة كوردية': { zankoline: 63.7, parallel: 58 }
            },
            'كلية العمل': {
                'إدارة الاعمال': { zankoline: 64.2 },
                'محاسبة': { zankoline: 62.5 }
            }
            
        }
        },
        
        
        'Halabja': { 
          // بيانات جامعة حلبجة
        'جامعة حلبجة': {
            'كلية الهندسة': {
                'هندسة مدني': { zankoline: 85.1, parallel: 80 }
            },
            'كلية العلوم': {
                'كومبيوتر': { zankoline: 76.5, parallel: 70.5 },
                'فيزياء': { zankoline: 64.8, parallel: 59.2 }
            },
            'كلية القانون والاعمال': {
                'قانون': { zankoline: 79, parallel: 75.1 },
                'تسويق دولي – لغة إنكليزية': { zankoline: 60.7, parallel: 60.7 }
            },
            'كلية التربية أساس': {
                'لغة إنكليزية': { zankoline: 75.3, parallel: 69.3 },
                'علم الاجتماعيات': { zankoline: 0.0, parallel: 69.3 },
                'لغة عربية': { zankoline: 64.2, parallel: 59.7 },
                'علوم عامة': { zankoline: 67.9, parallel: 62.1 }
            },
            'كلية العلوم الإنسانية': {
                'مبادئ الأديان': { zankoline: 57.8, parallel: 54 },
                'تاريخ': { zankoline: 65, parallel: 59.8 },
                'إعلام': { zankoline: 62.8, parallel: 58.2 },
                'سياحة': { zankoline: 65, parallel: 61.8 }
            },
            'كلية التربية – شارةزوو': {
                'لغة كوردية': { zankoline: 60.8, parallel: 57.5 },
                'روضة أطفال': { zankoline: 62.2, parallel: 58.6 },
                'تنمية بشرية': { zankoline: 0.0, parallel: 62.2 }
            },
            'كلية التربية رياضة': {
                'تربية رياضة': { zankoline: 55, parallel: 50 }
            }
        }
    },
    
    
    
     'Duhok': {
        "جامعة دهوك": {
            "كلية الطب": {
                "طب اسنان": { zankoline: 94.4, parallel: 93.71 },
                "صيدلة": { zankoline: 93.9, parallel: 93.4 },
                "طب بيطري": { zankoline: 79.1, parallel: 73.6 }
            },
            "كلية الهندسة": {
                "بايوميديكال": { zankoline: 81.3, parallel: 0.0 },
                "معماري": { zankoline: 92.9, parallel: 92.1 },
                "مدني": { zankoline: 91.4, parallel: 90.0 },
                "ميكانيك": { zankoline: 83.3, parallel: 82.5 },
                "كهرباء وكومبيوتر": { zankoline: 88.2, parallel: 83.4 }
            },
            "كلية العلوم الصحية": {
                "تخدير": { zankoline: 92.0, parallel: 90.7 },
                "مختبرات طبية": { zankoline: 91.8, parallel: 90.8 }
            },
            "كلية العلوم الإنسانية": {
                "جغرافيا": { zankoline: 66.4, parallel: 63.5 },
                "دراسات السلام والحقوق": { zankoline: 64.2, parallel: 60.5 },
                "علم النفس": { zankoline: 69.3, parallel: 64.1 },
                "علم الاجتماع": { zankoline: 61.8, parallel: 60.9 },
                "تاريخ": { zankoline: 64.4, parallel: 63.2 }
            },
            "كلية الإدارة والاقتصاد": {
                "الاقتصاد": { zankoline: 70.2, parallel: 64.6 },
                "علوم إدارية وبنوك": { zankoline: 63.4, parallel: 60.8 },
                "إدارة الاعمال": { zankoline: 67.2, parallel: 64.3 },
                "محاسبة": { zankoline: 65.8, parallel: 61.9 }
            },
            "كلية التربية أساس": {
                "جغرافيا": { zankoline: 69.8, parallel: 65.6 },
                "مرشد تربوي": { zankoline: 62.1, parallel: 60.9 },
                "العلوم": { zankoline: 69.0, parallel: 63.7 },
                "اللغة الإنكليزية": { zankoline: 76.3, parallel: 70.7 },
                "اللغة العربية": { zankoline: 72.3, parallel: 66.3 },
                "اللغة الكوردية": { zankoline: 65.9, parallel: 63.0 },
                "رياضيات": { zankoline: 67.1, parallel: 62.7 },
                "تاريخ": { zankoline: 68.1, parallel: 64.7 },
                "تربية خاصة": { zankoline: 61.8, parallel: 61.6 },
                "علوم كومبيوتر": { zankoline: 78.7, parallel: 72.7 },
                "احياء": { zankoline: 84.2, parallel: 78.2 }
            },
            "كلية العلوم": {
                "جيولوجي": { zankoline: 64.7, parallel: 61.2 },
                "فيزياء": { zankoline: 73.8, parallel: 67.8 },
                "رياضيات": { zankoline: 71.0, parallel: 65.0 },
                "كيمياء": { zankoline: 81.4, parallel: 75.6 },
                 "احياء": { zankoline: 84.2, parallel: 78.2 },
                "كومبيوتر": { zankoline: 78.7, parallel: 72.7 }
            },
            "كلية العلوم والهندسة الزراعية": {
                "المحاصيل الحقلية": { zankoline: 58.7, parallel: 53.6 },
                "البستنة": { zankoline: 59.1, parallel: 53.7 },
                "الإنتاج الحيواني": { zankoline: 58.3, parallel: 57.1 },
                "تربة ومياه": { zankoline: 59.8, parallel: 53.8 },
                "الغابات": { zankoline: 58.9, parallel: 55.7 },
                "الارشاد الزراعي والتنمية": { zankoline: 59.4, parallel: 54.5 },
                "حماية النبات": { zankoline: 59.2, parallel: 54.0 },
                "السياحة البيئية": { zankoline: 58.7, parallel: 53.8 }
            },
            "كلية القانون": {
                "قانون": { zankoline: 84.0, parallel: 79.6 }
            },
            "كلية العلوم السياسية": {
                "النظم السياسية": { zankoline: 71.4, parallel: 66.4 },
                "العلاقات الدولية والدبلوماسية": { zankoline: 73.8, parallel: 68.8 }
            },
            "كلية اللغات": {
                "اللغة الإنكليزية": { zankoline: 80.0, parallel: 74.0 },
                "اللغة الكوردية": { zankoline: 61.9, parallel: 61.8 },
                "الترجمة": { zankoline: 77.8, parallel: 71.8 }
            },
            "كلية التربية أساس / عمادية": {
                "اجتماعيات": { zankoline: 64.5, parallel: 60.7 },
                "اللغة الإنكليزية": { zankoline: 71.8, parallel: 65.8 }
            }
        },
        "جامعة دهوك التقنية": {
            "كلية الهندسة التقنية": {
                "طاقة": { zankoline: 80.6, parallel: 0.0 },
                "كيماويات": { zankoline: 83.6, parallel: 82.2 },
                "طرق وجسور": { zankoline: 83.7, parallel: 80.6 }
            },
            "كلية الإدارة التقنية": {
                "تقني اعلام": { zankoline: 62.8, parallel: 59.5 },
                "محاسبة": { zankoline: 62.0, parallel: 58.9 },
                "إدارة اعمال": { zankoline: 63.1, parallel: 61.7 }
            },
            "الكلية التقنية": {
                "تكنولوجيا المعلومات": { zankoline: 72.3, parallel: 66.8 },
                "صناعة اسنان": { zankoline: 91.4, parallel: 91.7 }
            },
            "الكلية التقنية - زاخو": {
                "إدارة الاعمال": { zankoline: 65.0, parallel: 59.9 },
                "جيولوجي بترول": { zankoline: 70.5, parallel: 65.6 }
            },
            "كلية الصحة التقنية - شيخان": {
                "صحة عامة": { zankoline: 83.3, parallel: 77.3 },
                "تكنولوجيا مختبرات طبية": { zankoline: 88.0, parallel: 85.2 }
            },
            "كلية تقنية - عقرة": {
                "شبكات كومبيوتر وحماية": { zankoline: 68.0, parallel: 64.2 },
                "تقنية المعلومات أي تي": { zankoline: 71.2, parallel: 65.6 }
            },
            "المعهد التقني - دهوك": {
                "تمريض": { zankoline: 80.2, parallel: 75.1 },
                "صيدلية": { zankoline: 85.1, parallel: 82.0 },
                "تقنية المعلومات أي تي": { zankoline: 72.3, parallel: 66.8 },
                "مساح": { zankoline: 62.6, parallel: 59.3 },
                "انظمة معلومات الإدارة": { zankoline: 59.5, parallel: 55.9 },
                "إدارة الاعمال": { zankoline: 62.8, parallel: 59.8 },
                "محاسبة": { zankoline: 57.9, parallel: 57.1 },
                "تكنولوجيا بناء": { zankoline: 58.4, parallel: 57.9 },
                "إدارة قوانين": { zankoline: 63.0, parallel: 60.3 }
            },
            "المعهد التقني - زاخو": {
                "تمريض": { zankoline: 78.0, parallel: 73.7 },
                "تكنولوجيا مختبرات طبية": { zankoline: 75.7, parallel: 71.3 },
                "تقنية المعلومات أي تي": { zankoline: 61.3, parallel: 57.7 },
                "إدارة الاعمال": { zankoline: 62.1, parallel: 59.2 },
                "محاسبة": { zankoline: 59.6, parallel: 55.4 },
                "بترول": { zankoline: 63.4, parallel: 60.7 },
                "زراعة محمية": { zankoline: 58.4, parallel: 55.0 }
            },
            "المعهد التقني - عقرة": {
                "تمريض": { zankoline: 77.6, parallel: 72.7 },
                "مساح": { zankoline: 59.8, parallel: 58.7 },
                "تقنية معلومات أي تي": { zankoline: 61.2, parallel: 58.7 },
                "إدارة قوانين": { zankoline: 62.0, parallel: 59.2 }
            },
            "المعهد التقني - عمادية": {
                "تقنية معلومات أي تي": { zankoline: 57.8, parallel: 55.6 },
                "تكنولوجيا مختبرات طبية": { zankoline: 73.0, parallel: 68.9 },
                "إدارة مراكز سياحية": { zankoline: 57.0, parallel: 56.4 },
                "إدارة تسويق": { zankoline: 58.4, parallel: 57.4 },
                "إدارة اعمال": { zankoline: 60.0, parallel: 58.2 }
            },
            "المعهد التقني - بردرش": {
                "تمريض": { zankoline: 76.1, parallel: 71.7 },
                "تقنية المعلومات أي تي": { zankoline: 58.3, parallel: 57.1 },
                "شبكات كومبيوتر": { zankoline: 60.0, parallel: 56.2 },
                "إدارة اعمال": { zankoline: 61.1, parallel: 58.8 },
                "محاسبة": { zankoline: 58.4, parallel: 55.6 }
            },
            "المعهد التقني - شنكال": {
                "إدارة مراكز صحية": { zankoline: 69.9, parallel: 68.4 }
            }
        },
        "جامعة زاخو": {
            "كلية الطب": {
                "طب عام": { zankoline: 95.4, parallel: 94.6 }
            },
            "كلية الهندسة": {
                "هندسة بترول": { zankoline: 88.4, parallel: 84.2 },
                "ميكانيك": { zankoline: 80.2, parallel: 0.0 },
                "مدني وبيئة": { zankoline: 88.2, parallel: 85.0 }
            },
            "كلية العلوم": {
                "كومبيوتر": { zankoline: 76.1, parallel: 70.5 },
                "بايولوجي": { zankoline: 81.8, parallel: 76.2 },
                "فيزياء": { zankoline: 72.7, parallel: 66.7 },
                "رياضيات": { zankoline: 67.0, parallel: 63.6 },
                "كيمياء": { zankoline: 79.5, parallel: 73.5 }
            },
            "كلية التربية": {
                "جغرافيا": { zankoline: 67.9, parallel: 64.0 },
                "علم النفس": { zankoline: 65.8, parallel: 62.0 },
                "رياضيات": { zankoline: 65.7, parallel: 62.0 }
            },
            "كلية العلوم الإنسانية": {
                "اللغة الإنكليزية": { zankoline: 76.5, parallel: 70.0 },
                "اللغة العربية": { zankoline: 69.1, parallel: 63.8 },
                "اللغة الكوردية": { zankoline: 61.4, parallel: 60.0 },
                "التاريخ": { zankoline: 0.0, parallel: 0.0 }
            },
            "كلية التربية أساس": {
                "علوم عامة": { zankoline: 66.8, parallel: 62.6 },
                "علم الاجتماعيات": { zankoline: 64.0, parallel: 61.8 },
                "اللغة الإنكليزية": { zankoline: 75.2, parallel: 69.2 },
                "اللغة العربية": { zankoline: 70.1, parallel: 65.5 },
                "اللغة الكوردية": { zankoline: 63.1, parallel: 61.0 }
            },
            "كلية الإدارة والاقتصاد": {
                "علوم الإدارة": { zankoline: 62.8, parallel: 61.8 },
                "علم الاقتصاد": { zankoline: 66.1, parallel: 63.2 },
                "علوم إدارية وبنوك": { zankoline: 63.7, parallel: 58.8 }
            }
        },
        "جامعة عقرة": {
            "كلية التربية": {
                "اللغة الإنكليزية": { zankoline: 76.7, parallel: 70.7 },
                "اللغة العربية": { zankoline: 72.4, parallel: 66.4 },
                "اللغة الكوردية": { zankoline: 67.6, parallel: 62.9 },
                "رياضيات": { zankoline: 66.8, parallel: 62.5 },
                "احياء": { zankoline: 71.3, parallel: 65.3 },
                "التربية الإسلامية": { zankoline: 65.1, parallel: 61.6 },
                "تاريخ": { zankoline: 69.1, parallel: 64.3 } 
          
          
}
        
}    
 },
 
     'erbil': {
   "جامعة هولير الطبية": {
        "كلية الطب": {
            "طب عام": { zankoline: 96.8, parallel: 95.6 },
            "طب الأسنان": { zankoline: 95.3, parallel: 95.0 },
            "صيدلة": { zankoline: 94.6, parallel: 94.3 }
        },
        "كلية التمريض": {
            "تمريض": { zankoline: 0.0, parallel: 0.0 },
            "توليد": { zankoline: 85.2, parallel: 80.8 }
        },
        "كلية العلوم الصحية": {
            "كيمياء حياتية سريرية": { zankoline: 90.8, parallel: 90.0 },
            "مايكروبيولوجي طبي": { zankoline: 92.8, parallel: 92.8 },
            "علاج طبيعي": { zankoline: 90.0, parallel: 87.4 },
            "صحة مجتمع": { zankoline: 83.6, parallel: 78.2 },
            "التغذية والحميات": { zankoline: 81.2, parallel: 76.4 }
        }
    },

    "جامعة هولير التقنية": {
        "الكلية التقنية الطبية صحية": {
            "تحليلات مرضية": { zankoline: 91.6, parallel: 90.0 },
            "علاج طبيعي": { zankoline: 88.0, parallel: 84.9 }
        },
        "كلية الهندسة التقنية": {
            "هندسة مدني": { zankoline: 87.2, parallel: 85.6 },
            "هندسة أنظمة المعلومات": { zankoline: 90.0, parallel: 88.3 },
            "هندسة الطرق والنقل": { zankoline: 79.0, parallel: 0.0 },
            "هندسة ميكانيك وطاقة": { zankoline: 78.0, parallel: 0.0 }
        },
        "كلية التكنولوجيا": {
            "هندسة المعلومات والاتصالات": { zankoline: 74.6, parallel: 69.7 },
            "هندسة تكنلوجيا السيارات": { zankoline: 62.4, parallel: 58.6 },
            "تكنولوجيا الطاقة - دبلوم": { zankoline: 59.2, parallel: 57.3 },
            "هندسة تكنولوجيا الصناعية": { zankoline: 58.3, parallel: 57.9 },
            "إنشاء الطرق والمواصلات – دبلوم": { zankoline: 59.6, parallel: 58.0 },
            "هندسة تكنلوجيا معدات البناء": { zankoline: 65.5, parallel: 60.4 },
            "مساح – دبلوم": { zankoline: 59.1, parallel: 58.7 },
            "تكنلوجيا البترول – دبلوم": { zankoline: 58.6, parallel: 58.3 }
        },
        "كلية التقنية الإدارية": {
            "تقنية المحاسبة": { zankoline: 66.4, parallel: 63.4 },
            "إدارة الأعمال": { zankoline: 68.2, parallel: 64.3 },
            "إعلام": { zankoline: 64.4, parallel: 58.4 },
            "التسويق الدولي واللغوي": { zankoline: 62.1, parallel: 62.5 }
        },
        "المعهد التقني الطبي – هولير": {
            "أشعة": { zankoline: 74.1, parallel: 71.2 },
            "صيدلة": { zankoline: 85.4, parallel: 83.4 },
            "تحليلات مرضية": { zankoline: 79.0, parallel: 74.5 },
            "تمريض": { zankoline: 82.9, parallel: 78.8 },
            "تخدير": { zankoline: 79.7, parallel: 77.4 },
            "فحص العيون": { zankoline: 74.5, parallel: 71.1 },
            "نسائية وتوليد": { zankoline: 70.4, parallel: 68.2 },
            "مساعد طب أسنان": { zankoline: 76.0, parallel: 73.1 }
        },
        "المعهد التقني – هولير": {
            "إدارة الوكالات السياحية": { zankoline: 57.4, parallel: 56.8 },
            "ترجمة": { zankoline: 61.4, parallel: 59.9 },
            "إعلام": { zankoline: 57.4, parallel: 61.3 },
            "إدارة الأعمال": { zankoline: 62.7, parallel: 60.4 },
            "محاسبة": { zankoline: 61.3, parallel: 59.5 },
            "أنظمة المعلومات الإدارية": { zankoline: 58.9, parallel: 58.4 },
            "إدارة التسويق": { zankoline: 58.88, parallel: 59.2 },
            "المعلومات والمكاتب": { zankoline: 57.0, parallel: 56.6 },
            "الإدارة القانونية": { zankoline: 61.9, parallel: 59.5 }
        },
        "الكلية التقنية – شقلاوة": {
            "التمريض – دبلوم": { zankoline: 78.2, parallel: 73.1 },
            "بيطري": { zankoline: 63.8, parallel: 60.0 },
            "تحليلات مرضية": { zankoline: 76.8, parallel: 72.7 },
            "تقني معماري – دبلوم": { zankoline: 58.2, parallel: 56.8 },
            "تقني بناء – دبلوم": { zankoline: 59.7, parallel: 56.5 },
            "أنظمة إدارة المعلومات – دبلوم": { zankoline: 57.7, parallel: 55.8 },
            "إدارة وكالات سياحية – دبلوم": { zankoline: 57.2, parallel: 55.4 },
            "تقنية المعلومات أي تي – دبلوم": { zankoline: 63.8, parallel: 60.0 },
            "إدارة الأعمال": { zankoline: 60.9, parallel: 59.0 },
            "تقني الجودة الغذائية": { zankoline: 60.0, parallel: 54.8 }
        },
        "الكلية التقنية – سوران": {
            "تمريض – دبلوم سنتان فقط": { zankoline: 74.0, parallel: 69.1 },
            "نسائية وتوليد – دبلوم": { zankoline: 63.5, parallel: 61.8 },
            "تحليلات مرضية – دبلوم": { zankoline: 69.7, parallel: 66.0 },
            "تقنية معلومات أي تي – دبلوم": { zankoline: 59.6, parallel: 57.8 },
            "إدارة أعمال – دبلوم": { zankoline: 58.9, parallel: 57.2 },
            "محاسبة – دبلوم سنتان فقط": { zankoline: 57.4, parallel: 56.6 }
        },
        " المعهد التقني – خةبات": {
            "أمن الغذاء وتحكم بالجودة": { zankoline: 0.0, parallel: 53.9 },
            "إدارة قانونية": { zankoline: 58.5, parallel: 57.4 },
            "حماية النبات": { zankoline: 0.0, parallel: 54.7 },
            "إنتاج النباتات الطبية": { zankoline: 0.0, parallel: 54.0 }
        },
 
    "المعهد التقني – كويه": {
            "تكنلوجيا النفط – تحليل كيميائي": { zankoline: 59.4, parallel: 56.4 },
            "تكنلوجيا النفط – إنتاج وتوزيع": { zankoline: 57.6, parallel: 56.0 },
            "تقنية المعلومات أي تي": { zankoline: 60.4, parallel: 58.2 },
            "إدارة الوكالات السياحية": { zankoline: 0.0, parallel: 55.2 },
            "إدارة الأعمال": { zankoline: 58.1, parallel: 58.1 }
        },
        "المعهد التقني – ميركةسوور": {
            "التمريض": { zankoline: 69.7, parallel: 66.4 },
            "إدارة الأعمال": { zankoline: 60.0, parallel: 55.9 }
        },
        " المعهد التقني – جومان": {
            "إدارة مالية": { zankoline: 57.3, parallel: 55.6 },
            "تقنية المعلومات أي تي": { zankoline: 59.1, parallel: 55.8 },
            "إدارة الأعمال": { zankoline: 60.0, parallel: 56.1 }
        }
        },     
            
 
    "جامعة صلاح الدين": {
            "كلية الطب البيطري": {
                "طب بيطري": { zankoline: 88.0, parallel: 86.9 }
            },
            "كلية الهندسة": {
                "هندسة معماري": { zankoline: 93.8, parallel: 94.3 },
                "هندسة مدني": { zankoline: 90.5, parallel: 88.7 },
                "هندسة كهرباء": { zankoline: 85.7, parallel: 83.2 },
                "هندسة ميكانيك وميكاترونك": { zankoline: 84.2, parallel: 78.2 },
                "هندسة برمجيات": { zankoline: 93.5, parallel: 93 },
                "هندسة موارد المياه": { zankoline: 78.9, parallel: 88.5 },
                "هندسة كيمياء وبتروكيمياء": { zankoline: 86.6, parallel: 82 },
                "هندسة مساحة جيوماتك": { zankoline: 78.6, parallel: 80 },
                "هندسة طيران": { zankoline: 0.0, parallel: 0.0 }
            },
            "كلية العلوم": {
                "بايولوجي عام": { zankoline: 87.7, parallel: 84.6 },
                "بايولوجي طبي": { zankoline: 90.5, parallel: 88.1 },
                "كيمياء": { zankoline: 83.7, parallel: 80.2 },
                "فيزياء عام": { zankoline: 76.3, parallel: 71.7 },
                "فيزياء طبي": { zankoline: 82.1, parallel: 78.1 },
                "رياضيات": { zankoline: 62.4, parallel: 58.2 },
                "النفط والأرض": { zankoline: 66.1, parallel: 62.1 },
                "علوم صحة بيئة": { zankoline: 63.1, parallel: 60.4 },
                "علوم كومبيوتر": { zankoline: 84.6, parallel: 80.2 },
                "تقنية المعلومات": { zankoline: 86.5, parallel: 82.6 }
            },
            "كلية الهندسة الزراعية": {
                "الثروة الحيوانية": { zankoline: 60.0, parallel: 55.2 },
                "محاصيل حقلية": { zankoline: 58.4, parallel: 54.2 },
                "حماية النبات": { zankoline: 59.1, parallel: 54.3 },
                "تغذية صناعية": { zankoline: 58.5, parallel: 54.4 },
                "تربة ومياه": { zankoline: 60.0, parallel: 55.7 },
                "غابات": { zankoline: 59.2, parallel: 54.4 },
                "ثروة سمكية": { zankoline: 60.0, parallel: 54.4 },
                "البستنة": { zankoline: 58.9, parallel: 57.5 }
            },
            "كلية القانون": {
                "قانون": { zankoline: 81.7, parallel: 79 }
            },
            "كلية العلوم السياسية": {
                "علوم سياسية ودبلوماسية": { zankoline: 62.4, parallel: 60.9 },
                "علوم سياسية عامة": { zankoline: 64.2, parallel: 58.2 }
            },
            "كلية اللغات": {
                "لغة إنكليزي": { zankoline: 78.8, parallel: 75.3 },
                "لغة عربية": { zankoline: 62.3, parallel: 59.6 },
                "لغة كوردية": { zankoline: 62.6, parallel: 57.2 },
                "لغة فارسية": { zankoline: 0.0, parallel: 58.1 },
                "لغة تركية": { zankoline: 62.7, parallel: 59.8 },
                "لغة ألمانية": { zankoline: 64.2, parallel: 60.3 },
                "لغة فرنسية": { zankoline: 64.3, parallel: 58.3 },
                "لغة صينية": { zankoline: 63.4, parallel: 58.1 },
                "ترجمة": { zankoline: 0.0, parallel: 0.0 }
            },
            "كلية الإدارة والاقتصاد": {
                "إدارة الأعمال": { zankoline: 71.4, parallel: 66.1 },
                "المحاسبة": { zankoline: 68.7, parallel: 64.5 },
                "الاقتصاد": { zankoline: 64.3, parallel: 62.5 },
                "الإحصاء": { zankoline: 57.0, parallel: 57.6 },
                "علوم مالية وبنوك": { zankoline: 60.7, parallel: 60.9 },
                "إدارة المنظمات السياحية": { zankoline: 64.55, parallel: 57.8 }
            },
            "كلية التربية": {
                "كيمياء": { zankoline: 73.5, parallel: 67.5 },
                "بايولوجي": { zankoline: 76.8, parallel: 69.8 },
                "فيزياء": { zankoline: 70.3, parallel: 65.2 },
                "رياضيات": { zankoline: 67.1, parallel: 63.9 },
                "ارشاد تربوي ونفسي": { zankoline: 63.7, parallel: 60 },
                "تربية خاصة": { zankoline: 62.4, parallel: 58 },
                "لغة كوردية": { zankoline: 67.3, parallel: 63.1 },
                "لغة عربية": { zankoline: 71.5, parallel: 65.5 },
                "لغة إنكليزية": { zankoline: 81.9, parallel: 75.9 },
                "لغة سريانية": { zankoline: 55.0, parallel: 55.1 }
            },
            "كلية التربية أساس": {
                "لغة إنكليزية": { zankoline: 76.6, parallel: 72.1 },
                "لغة كوردية": { zankoline: 62.9, parallel: 61.4 },
                "لغة عربية": { zankoline: 67.3, parallel: 63.3 },
                "علوم عامة": { zankoline: 66.3, parallel: 62.7 },
                "علوم مجتمعات": { zankoline: 64.6, parallel: 62 },
                "رياضيات": { zankoline: 62.4, parallel: 60 },
                "روضة أطفال": { zankoline: 63.2, parallel: 60.3 }
            },
            "كلية الآداب": {
                "تاريخ": { zankoline: 63.8, parallel: 58 },
                "جغرافيا": { zankoline: 63.1, parallel: 58.5 },
                "علم نفس": { zankoline: 64.2, parallel: 58.4 },
                "آثار": { zankoline: 65.0, parallel: 59.3 },
                "علم اجتماع": { zankoline: 65.0, parallel: 58.6 },
                "خدمة المجتمع": { zankoline: 63.0, parallel: 58.4 },
                "فلسفة": { zankoline: 0.0, parallel: 59 }
            },
            "كلية العلوم الإسلامية": {
                "شريعة": { zankoline: 57.9, parallel: 57.1 },
                "دراسة إسلامية": { zankoline: 58.6, parallel: 56.3 },
                "تربية دينية": { zankoline: 57.5, parallel: 57.7 }
            },
            "كلية التربية – مخمور": {
                "لغة كوردية": { zankoline: 62.8, parallel: 58.2 },
                "لغة عربية": { zankoline: 61.8, parallel: 58.8 }
            },
 
     "كلية التربية – شقلاوة": {
                "لغة كوردية": { zankoline: 62.0, parallel: 57.5 },
                "لغة عربية": { zankoline: 61.2, parallel: 60.4 },
                "لغة إنكليزية": { zankoline: 75.0, parallel: 69 },
                "فيزياء": { zankoline: 63.0, parallel: 61.7 },
                 "أحياء": { zankoline: 69.6, parallel: 64.6 },
                "رياضة": { zankoline: 0.0, parallel: 0.0 }
     }
    },
"جامعة كوية": {
        "كلية الطب": {
            "طب عام": { zankoline: 96, parallel: 95.5 }
        },
        "كلية الهندسة": {
            "هندسة معماري": { zankoline: 92.2, parallel: 91.4 },
            "هندسة مدني": { zankoline: 88, parallel: 84.9 },
            "جيوتكنيك": { zankoline: 0.0, parallel: 0.0 },
            "الصناعة": { zankoline: 80, parallel: 0.0 },
            "هندسة برمجيات": { zankoline: 92.5, parallel: 91.4 },
            "هندسة نفط": { zankoline: 81.1, parallel: 79 },
            "هندسة كيمياء": { zankoline: 79.6, parallel: 83 }
        },
        "كلية العلوم والصحة": {
            "كلينيكل سايكولوجي": { zankoline: 66.3, parallel: 64.3 },
            "ميديكال مايكروبيولوجي": { zankoline: 91.3, parallel: 89.9 },
            "بايولوجي": { zankoline: 82.8, parallel: 78.7 },
            "كيمياء": { zankoline: 78.1, parallel: 72.8 },
            "فيزياء": { zankoline: 64.3, parallel: 59 },
            "رياضيات": { zankoline: 65, parallel: 57.9 },
            "علوم كومبيوتر": { zankoline: 78.1, parallel: 74.8 }
        },
        "كلية العلوم الإنسانية والاجتماعية": {
            "قانون": { zankoline: 75.3, parallel: 72.3 },
            "انكليزي": { zankoline: 70.3, parallel: 65.2 },
            "إدارة": { zankoline: 63.6, parallel: 59.7 },
            "محاسبة": { zankoline: 64.4, parallel: 57.7 }
        },
        "كلية التربية": {
            "لغة عربية": { zankoline: 63.2, parallel: 58.8 },
            "لغة كوردية": { zankoline: 62, parallel: 57.7 },
            "لغة إنكليزية": { zankoline: 72.9, parallel: 67.8 },
            "تاريخ": { zankoline: 64.7, parallel: 60.6 },
            "جغرافيا": { zankoline: 64.4, parallel: 59.4},
            "تربية دينية": { zankoline: 57, parallel: 54.5 },
            "تربية و علم النفس": { zankoline: 64.4, parallel: 59.2 }
        }
    },
    "جامعة سوران": {
        "كلية الهندسة": {
            "هندسة مدني وبيئة": { zankoline: 87.3, parallel: 83.1 },
            "هندسة كيمياء": { zankoline: 79.9, parallel: 0.0 },
            "هندسة نفط ومعادن": { zankoline: 78.1, parallel: 80.2 },
            "هندسة ميكاترونك وروبوتك": { zankoline: 79.8, parallel: 87.5 }
        },
        "كلية العلوم": {
            "كيمياء": { zankoline: 78.4, parallel: 72.4 },
            "فيزياء": { zankoline: 69.2, parallel: 63.9 },
            "بايولوجي": { zankoline: 83.6, parallel: 77.6 },
            "علوم كومبيوتر": { zankoline: 77.1, parallel: 72.7 },
            "رياضيات": { zankoline: 64, parallel: 57.7 },
            "جيولوجي نفط": { zankoline: 65, parallel: 60.6 }
        },
        "كلية القانون والعلوم السياسية": {
            "قانون": { zankoline: 74.7, parallel: 70.7 },
            "سياسية وعلاقات دولية": { zankoline: 64, parallel: 58.6 },
            "محاسبة": { zankoline: 61.9, parallel: 57.9 },
            "إدارة أعمال": { zankoline: 62.6, parallel: 59.5 }
        },
        "كلية الآداب": {
            "لغة إنكليزية": { zankoline: 73.3, parallel: 67.3 },
            "لغة عربية": { zankoline: 62.1, parallel: 59.5 },
            "لغة كوردية": { zankoline: 63.1, parallel: 58.1 },
            "علم النفس": { zankoline: 64.5, parallel: 59.2 },
            "علم الاجتماع": { zankoline: 0.0, parallel: 57.4 },
            "تاريخ": { zankoline: 65, parallel: 58.5 },
            "جغرافيا": { zankoline: 64.1, parallel: 61.3 }
        },
        "كلية التربية": {
            "لغة إنكليزية": { zankoline: 72, parallel: 66 },
            "لغة كوردية": { zankoline: 63.3, parallel: 58 },
            "علوم عامة": { zankoline: 64.8, parallel: 59.4 },
            "رياضيات": { zankoline: 62.8, parallel: 58.4 },
            "علوم اجتماعيات": { zankoline: 63.8, parallel: 59.7 },
            "روضة أطفال": { zankoline: 63.4, parallel: 59.4 },
            "رياضة": { zankoline: 0.0, parallel: 0.0 }



 
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
        
        // Display the notification with the selected department
        showNotification(`تم اختيار قسم: ${department}`);
        
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
    notification.classList.add('show'); // Add class to start the animation

    // Remove the class after animation ends
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // Duration of the animation
}




const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    
    // فتح القائمة الجانبية عند الضغط على زر القائمة
    menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    // إغلاق القائمة الجانبية عند النقر في أي مكان داخل الموقع
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && e.target !== menuButton) {
            sideMenu.classList.remove('open');
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



  document.addEventListener("DOMContentLoaded", function() {
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("rememberMe");
            const notification = document.getElementById("notification");

            // استرجاع حالة "تذكرني" وكلمة المرور من localStorage إذا كانت موجودة
            if (localStorage.getItem("rememberMe") === "true") {
                passwordInput.value = localStorage.getItem("password") || "";
                rememberMeCheckbox.checked = true;
            }

            document.getElementById("loginForm").addEventListener("submit", function(event) {
                event.preventDefault(); // منع إرسال النموذج افتراضيًا

                const password = passwordInput.value;

                // إذا كان الخيار "تذكرني" مفعلًا، قم بتخزين كلمة المرور
                if (rememberMeCheckbox.checked) {
                    localStorage.setItem("password", password);
                    localStorage.setItem("rememberMe", "true");
                } else {
                    localStorage.removeItem("password");
                    localStorage.setItem("rememberMe", "false");
                }

                // إذا كانت كلمة المرور صحيحة، أغلق مربع تسجيل الدخول
                if (password === "ali") {
                    document.querySelector(".overlay").style.display = "none";
                } else {
                    // عرض رسالة خطأ
                    notification.textContent = "كلمة المرور غير صحيحة";
                    notification.classList.add("show");
                    setTimeout(() => notification.classList.remove("show"), 3000); // إزالة الرسالة بعد 3 ثوانٍ
                }
            });
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



// Add event listeners
document.getElementById('city').addEventListener('change', updateUniversities);
document.getElementById('university').addEventListener('change', updateColleges);
document.getElementById('college').addEventListener('change', updateDepartments);
document.getElementById('department').addEventListener('change', displayGrades);
