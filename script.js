body, html {
    height: 100%;
    margin: 0;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    
        background: transparent; /* جعل الخلفية شفافة */

    overflow: hidden;
}

.background {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(135deg, #36051b 0%, #200536 50%, #0b1321 100%);
       z-index: 0; /* ضبط z-index أقل من glass-container */
 
}

.stars {
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
}

.glass-container {
    position: relative;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 22px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    text-align: center;
        margin-bottom: 16px; /* المسافة بين الفوتر والمحتوى الذي فوقه */
            direction: rtl; /* اتجاه النصوص بشكل عام من اليمين لليسار */
}
.glass-container label,

.glass-container p {
    margin: 1px 0; /* تقليص المسافة بين العناصر الداخلية */
    padding: 1px; /* تقليص المسافة الداخلية للعناصر */
}



h1 {
    color: #fff;
    margin-bottom: 20px;
}


p {
 font-weight: bold;
  color: white;
}


h2 {
    color: #ff2ea4; /* اللون الأصفر */
    font-size: 14px; /* حجم الخط أصغر */
    background: rgba(0, 0, 0, 0.1); /* خلفية خفيفة */
    padding: 10px; /* إضافة حواف للعنوان */
    border-radius: 5px; /* زوايا دائرية للخلفية */
    margin-bottom: 15px; /* مسافة سفلية */
      margin-top: 0px; /* مسافة سفلية */
}



label {
    display: block;
    color: #fff;
    margin-top: 10px;
}

select {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
}

button:hover {
    background-color: #45a049;
}

.bounce {
    animation: bounce 0.3s ease;
}

.fade-in {
    animation: fadeIn 0.5s ease;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}


/* CSS for notification */
.notification {
    position: fixed;
    top: -100px; /* Start position above the viewport */
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
    color: #fff;
    padding: 15px 25px;
    border-radius: 8px;
    font-size: 18px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    transition: top 0.5s ease; /* Smooth transition for sliding effect */
        backdrop-filter: blur(3px); /* Apply the blur effect */

}

/* Animation for the notification */
@keyframes slideDownUp {
    0% {
        top: -100px;
    }
    20% {
        top: 20px; /* Position the notification slightly below the top */
    }
    80% {
        top: 20px; /* Keep it visible for a moment */
    }
    100% {
        top: -100px;
    }
}

.notification.show {
    animation: slideDownUp 3s ease; /* Apply the sliding animation */
}


body {
    animation: fadeInFromTop 2s ease-out;
}




/* أسلوب جديد لزر القائمة */
.menu-button {
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    z-index: 1000;
    color: white;
}

/* أسلوب القائمة الجانبية */
.side-menu {
    position: fixed;
    top: 0;
    right: -250px; /* تبدأ القائمة مخفية */
    width: 250px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 50px;
    transition: right 0.3s ease;
    z-index: 1000;
}

.side-menu.open {
    right: 0; /* عند فتح القائمة، تظهر من اليمين */
}

.side-menu button {
    display: block;
    width: 100%;
    padding: 15px 20px;
    background-color: transparent;
    color: white;
    font-size: 16px;
    text-align: right;
    border: none;
    border-bottom: 1px solid #555;
    transition: background-color 0.3s ease;
}

.side-menu button:hover {
    background-color: #555;
}





footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    color: #fff; /* لون النص */
    text-align: center;
    padding: 10px 0; /* الحواف العليا والسفلية */
    font-size: 14px; /* حجم الخط */
}

footer a {
    color: #ffcc00; /* لون الرابط */
    text-decoration: none; /* إزالة الخط السفلي من الرابط */
}

footer a:hover {
    text-decoration: underline; /* إضافة خط سفلي عند التمرير فوق الرابط */
}
