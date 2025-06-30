const courseSlidesVI = [
    {
        video: 'vid_course_1.mp4',
        title: 'Video ngắn "Speak Up"',
        group: 'Nhóm sinh viên: Khóa D20',
        subject: 'Môn học: Quản lý dự án truyền thông',
        desc: 'Với sức mạnh của Truyền thông Đa phương tiện, sinh viên hôm nay không chỉ học, mà còn kiến tạo tương lai. Đừng ngại thử thách, hãy sáng tạo không ngừng để biến ước mơ thành hiện thực và lan tỏa thông điệp của chính mình.',
        poster: 'thumb_speakup.png'
    },
    {
        video: 'vid_course_2.mp4',
        title: 'Video ngắn "Tôi sẽ là ai khi chọn truyền thông Đa phương tiện PTIT"',
        group: 'Nhóm sinh viên: Khóa D21',
        subject: 'Môn học: Kịch bản đa phương tiện',
        desc: 'Bước vào một hành trình mới, bạn mong muốn mình sẽ trở thành ai? Với chương trình đào tạo chất lượng, giàu thực tiễn và đội ngũ giảng viên giàu kinh nghiệm, Truyền thông Đa phương tiện PTIT chính là nơi ươm mầm những giấc mơ sáng tạo.',
        poster: 'thumb_toiselaai.png'
    },
    {
        video: 'vid_course_3.mp4',
        title: 'Dự án "Ngày đọng trên giấy"',
        group: 'Nhóm sinh viên: Khóa D21',
        subject: 'Môn học: Ứng dụng đồ hoạ đa phương tiện',
        desc: 'Dự án "Ngày đọng trên giấy" ra đời với mong muốn tăng cường nhận thức và truyền tải đến mọi người, đặc biệt là các bạn trẻ những thông điệp ý nghĩa về yêu bản thân. Khi bạn sống một cách trọn vẹn, những giá trị, kỷ niệm, những niềm hạnh phúc ấy sẽ mãi "đọng" lại trong ký ức, trong cuộc đời này.',
        poster: 'thumb_ngaydongtrengiay.png'
    },
    {
        video: 'vid_course_4.mp4',
        title: 'Dự án "Những cánh chim đêm không mỏi"',
        group: 'Nhóm sinh viên: Khóa D21',
        subject: 'Môn học: Ứng dụng sản xuất Audio & Video',
        desc: 'Khi thành phố đã ngủ yên, ở chợ Long Biên vẫn có những con người lặng thầm miệt mài mưu sinh – những người phụ nữ cửu vạn mang trong mình sức mạnh phi thường của sự bền bỉ. Sản phẩm là lời tri ân, là góc nhìn nhân văn về vẻ đẹp lao động – mộc mạc nhưng xúc động.',
        poster: 'thumb_nhuncanhchim.png'
    }
];

const courseSlidesEN = [
    {
        video: 'vid_course_1.mp4',
        title: 'Short video "Speak Up"',
        group: 'Student group: Class of D20',
        subject: 'Subject: Media Project Management',
        desc: 'With the power of multimedia communication, students today don\'t just learn - they create the future. Don\'t fear challenges - keep creating, turn dreams into reality, and spread your own message to the world.',
        poster: 'thumb_speakup.png'
    },
    {
        video: 'vid_course_2.mp4',
        title: 'Short video "Who Will I Become If I Choose Multimedia Communication at PTIT?"',
        group: 'Student group: Class of D21',
        subject: 'Subject: Multimedia Scriptwriting',
        desc: 'As you begin a new journey, who do you want to become? With a high-quality, practice-oriented program and a team of experienced lecturers, PTIT’s Multimedia Communication program is where creative dreams are nurtured and brought to life.',
        poster: 'thumb_toiselaai.png'
    },
    {
        video: 'vid_course_3.mp4',
        title: 'Project "A Day Pressed on Paper"',
        group: 'Student group: Class of D21',
        subject: 'Subject: Multimedia Graphic Design Applications',
        desc: 'The project "A Day Pressed on Paper" was created to raise awareness and spread meaningful messages about self-love — especially to young people. When you live fully, those values, memories, and moments of happiness will be gently pressed into your life’s journey, staying with you forever.',
        poster: 'thumb_ngaydongtrengiay.png'
    },
    {
        video: 'vid_course_4.mp4',
        title: 'Project "The Tireless Wings of the Night"',
        group: 'Student group: Class of D21',
        subject: 'Subject: Audio & Video Production Applications',
        desc: 'While the city sleeps, life continues quietly at Long Biên Market — where hardworking women porters carry the extraordinary strength of resilience. This project is a heartfelt tribute and a deeply human perspective on the beauty of labor — raw, humble, yet profoundly moving.',
        poster: 'thumb_nhuncanhchim.png'
    }
];

// Xác định ngôn ngữ hiện tại dựa trên URL hoặc thuộc tính lang
function getCurrentLanguage() {
    const currentPath = window.location.pathname;
    const htmlLang = document.documentElement.lang;

    // Kiểm tra từ URL trước
    if (currentPath.includes('doipho_en') || currentPath.includes('/en/')) {
        return 'en';
    } else if (currentPath.includes('index.html') || htmlLang === 'vi') {
        return 'vi';
    }

    // Mặc định là tiếng Việt
    return 'vi';
}

// Chọn dữ liệu phù hợp dựa trên ngôn ngữ
const currentLang = getCurrentLanguage();
const courseSlides = currentLang === 'en' ? courseSlidesEN : courseSlidesVI;

// ======================================
// LANGUAGE SWITCHING LOGIC
// ======================================

function toggleDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    const arrow = document.getElementById('dropdown-arrow');

    if (!dropdown || !arrow) return;

    // Toggle trạng thái hiển thị
    const isVisible = !dropdown.classList.contains('opacity-0');

    if (isVisible) {
        // Đóng dropdown
        dropdown.classList.add('opacity-0', 'invisible');
        dropdown.classList.remove('opacity-100', 'visible');
        arrow.style.transform = 'rotate(0deg)';
    } else {
        // Mở dropdown
        dropdown.classList.remove('opacity-0', 'invisible');
        dropdown.classList.add('opacity-100', 'visible');
        arrow.style.transform = 'rotate(180deg)';
    }
}

// Hàm chuyển đổi ngôn ngữ chính
function switchLanguage(targetLang) {
    // Hiện loading
    const loading = document.getElementById('page-loading');
    if (loading) loading.style.display = 'flex';

    // Lưu vị trí cuộn
    localStorage.setItem('scrollY', window.scrollY);
    localStorage.setItem('lang', targetLang);

    let targetUrl;
    if (targetLang === 'en') {
        targetUrl = 'index-eng.html';
    } else {
        targetUrl = 'index.html';
    }

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 300);
}

// Wrapper functions cho các nút trong dropdown
function setLang(lang) {
    if (lang === 'ENG') {
        switchLanguage('en');
    } else if (lang === 'VI') {
        switchLanguage('vi');
    }
}

// Deprecated - giữ lại để tương thích
function setLangWithStorage(lang) {
    setLang(lang);
}

// Xử lý sự kiện click bên ngoài dropdown
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('lang-dropdown');
    const langButton = event.target.closest('.group');
    const dropdownContent = event.target.closest('#lang-dropdown');

    // Nếu click vào dropdown content thì không đóng
    if (dropdownContent) return;

    // Nếu click bên ngoài dropdown và dropdown đang mở thì đóng
    if (!langButton && dropdown && !dropdown.classList.contains('opacity-0')) {
        dropdown.classList.add('opacity-0', 'invisible');
        dropdown.classList.remove('opacity-100', 'visible');

        const arrow = document.getElementById('dropdown-arrow');
        if (arrow) {
            arrow.style.transform = 'rotate(0deg)';
        }
    }
});

// Xử lý hover cho dropdown (tùy chọn)
document.addEventListener('DOMContentLoaded', function () {
    const langGroup = document.querySelector('.group');
    const dropdown = document.getElementById('lang-dropdown');

    if (langGroup && dropdown) {
        // Thêm hover effect nếu muốn
        langGroup.addEventListener('mouseenter', function () {
            // Có thể thêm hiệu ứng hover ở đây nếu cần
        });

        langGroup.addEventListener('mouseleave', function () {
            // Có thể thêm hiệu ứng khi rời chuột nếu cần
        });
    }
});

// ======================================
// COURSE SLIDER LOGIC
// ======================================

let currentCourse = 0;
let isSliding = false;

function renderCourseSlide(idx, direction = 0) {
    if (isSliding) return;
    isSliding = true;

    const wrap = document.querySelector('.course-slide-wrap');
    if (!wrap) {
        isSliding = false;
        return;
    }

    const oldSlide = document.getElementById('course-slide');
    const newSlide = document.createElement('div');
    newSlide.className = 'flex items-center justify-center gap-12 rounded-3xl course-slide-anim';
    newSlide.id = 'course-slide';

    if (direction === 1) newSlide.classList.add('slide-in-right');
    else if (direction === -1) newSlide.classList.add('slide-in-left');
    else newSlide.classList.add('slide-active');

    const data = courseSlides[idx];
    newSlide.innerHTML = `
        <div class='flex-shrink-0 w-[622px] h-[350px] flex items-center justify-center bg-black rounded-2xl'>
            <video controls class='w-full h-full object-contain rounded-2xl' poster='${data.poster}'>
                <source src='${data.video}' type='video/mp4'>
                ${currentLang === 'en' ? 'Your browser does not support video.' : 'Trình duyệt của bạn không hỗ trợ video.'}
            </video>
        </div>
        <div class='text-left max-w-xl'>
            <h3 class='text-white text-4xl font-extrabold mb-4'>${data.title}</h3>
            <div class='text-white text-xl font-semibold mb-2'>${data.group}</div>
            <div class='text-white text-lg mb-2'>${data.subject}</div>
            <p class='text-white text-lg leading-relaxed font-base'>${data.desc}</p>
        </div>
    `;

    wrap.appendChild(newSlide);

    setTimeout(() => {
        if (direction === 1) {
            newSlide.classList.remove('slide-in-right');
            newSlide.classList.add('slide-active');
            if (oldSlide) oldSlide.classList.add('slide-out-left');
        } else if (direction === -1) {
            newSlide.classList.remove('slide-in-left');
            newSlide.classList.add('slide-active');
            if (oldSlide) oldSlide.classList.add('slide-out-right');
        }
    }, 10);

    setTimeout(() => {
        if (oldSlide && wrap.contains(oldSlide)) {
            wrap.removeChild(oldSlide);
        }
        isSliding = false;
    }, 500);
}

// Course navigation
document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('course-prev');
    const nextBtn = document.getElementById('course-next');

    if (prevBtn) {
        prevBtn.onclick = function () {
            const prev = (currentCourse - 1 + courseSlides.length) % courseSlides.length;
            renderCourseSlide(prev, -1);
            currentCourse = prev;
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function () {
            const next = (currentCourse + 1) % courseSlides.length;
            renderCourseSlide(next, 1);
            currentCourse = next;
        };
    }
});

// ======================================
// HEADER SCROLL LOGIC
// ======================================

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const header = document.querySelector('header');
    if (!header) return;

    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop && st > header.offsetHeight) {
        header.style.top = `-${header.offsetHeight}px`;
    } else {
        header.style.top = "0";
    }

    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// ======================================
// CLUB SLIDER LOGIC
// ======================================

const clubVideos = [
    { src: 'vid_club_1.mp4', poster: 'thumb_1.png' },
    { src: 'vid_club_2.mp4', poster: 'thumb_2.png' },
    { src: 'vid_club_3.mp4', poster: 'thumb_3.png' },
    { src: 'vid_club_4.mp4', poster: 'thumb_4.png' },
    { src: 'vid_club_5.mp4', poster: 'thumb_5.png' }
];

let clubCurrent = 0;
let isClubSliding = false;

function renderClubSlide(idx) {
    const total = clubVideos.length;
    const getIdx = (offset) => (idx + offset + total) % total;
    const indices = [getIdx(-1), idx, getIdx(1)];

    const wrap = document.getElementById('club-slide');
    if (!wrap) return;

    wrap.innerHTML = indices.map((i, pos) => {
        let size = '', opacity = '', extra = '';

        if (pos === 0 || pos === 2) {
            size = 'w-[320px] h-[180px]';
            opacity = 'opacity-60 scale-95';
        } else {
            size = 'w-[533px] h-[300px]';
            opacity = 'opacity-100 scale-100';
            extra = 'border border-orange-200 shadow-2xl';
        }

        return `
            <div class="club-flex-slide ${size} ${opacity} bg-white/80 rounded-2xl shadow-lg flex items-center justify-center mx-2 ${extra}">
                <video src="${clubVideos[i].src}" poster="${clubVideos[i].poster}" ${pos === 1 ? 'controls' : ''} class="w-full h-full object-contain rounded-2xl ${pos !== 1 ? 'pointer-events-none' : ''}" ${pos !== 1 ? 'tabindex="-1"' : ''}></video>
            </div>
        `;
    }).join('');
}

function clubSlide(direction) {
    if (isClubSliding) return;
    isClubSliding = true;

    setTimeout(() => {
        clubCurrent = direction === 1
            ? (clubCurrent + 1) % clubVideos.length
            : (clubCurrent - 1 + clubVideos.length) % clubVideos.length;
        renderClubSlide(clubCurrent);
        isClubSliding = false;
    }, 400);
}

// Club navigation
document.addEventListener('DOMContentLoaded', function () {
    const clubPrevBtn = document.getElementById('club-prev');
    const clubNextBtn = document.getElementById('club-next');

    if (clubPrevBtn) {
        clubPrevBtn.onclick = function () {
            clubSlide(-1);
        };
    }

    if (clubNextBtn) {
        clubNextBtn.onclick = function () {
            clubSlide(1);
        };
    }
});

// Button back to top
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ======================================
// INITIALIZATION
// ======================================

window.addEventListener('DOMContentLoaded', () => {
    renderCourseSlide(currentCourse, 0);
    renderClubSlide(clubCurrent);
});

document.addEventListener('DOMContentLoaded', function () {
    var menuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var navLinks = document.querySelectorAll('#mobile-menu .mobile-nav-link');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('show');
        });
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('show');
            });
        });
    }
});

// === TESTIMONIAL SLIDER MOBILE ===
function isMobileTestiSlider() {
    return window.innerWidth >= 350 && window.innerWidth <= 450;
}

let testiCards = [];
let testiIndex = 0;
let testiInterval = null;

function showTestiSlide(idx, direction = 1) {
    const slideContent = document.getElementById('testi-slide-content');
    if (!slideContent) return;
    // Xóa slide cũ với animation
    const oldSlide = slideContent.querySelector('.testi-card');
    if (oldSlide) {
        oldSlide.classList.remove('slide-in');
        if (direction === 1) {
            oldSlide.classList.add('slide-out-left');
        } else {
            oldSlide.classList.add('slide-out-right');
        }
        setTimeout(() => {
            if (oldSlide.parentNode) oldSlide.parentNode.removeChild(oldSlide);
        }, 700); // Thời gian khớp với CSS
    }
    // Thêm slide mới với animation
    if (testiCards[idx]) {
        const newSlide = testiCards[idx].cloneNode(true);
        // Đặt trạng thái ban đầu cho slide mới
        if (direction === 1) {
            newSlide.style.transform = 'translateX(100%)';
        } else {
            newSlide.style.transform = 'translateX(-100%)';
        }
        newSlide.style.opacity = '0';
        newSlide.classList.add('testi-card');
        slideContent.appendChild(newSlide);
        // Kích hoạt animation sau 1 tick
        setTimeout(() => {
            newSlide.classList.add('slide-in');
            newSlide.style.transform = '';
            newSlide.style.opacity = '';
        }, 10);
    }
}

function nextTestiSlide() {
    const prevIndex = testiIndex;
    testiIndex = (testiIndex + 1) % testiCards.length;
    showTestiSlide(testiIndex, 1);
}

function prevTestiSlide() {
    const prevIndex = testiIndex;
    testiIndex = (testiIndex - 1 + testiCards.length) % testiCards.length;
    showTestiSlide(testiIndex, -1);
}

function startTestiAutoSlide() {
    if (testiInterval) clearInterval(testiInterval);
    testiInterval = setInterval(nextTestiSlide, 4500);
}

function stopTestiAutoSlide() {
    if (testiInterval) clearInterval(testiInterval);
}

function setupTestiSliderMobile() {
    const grid = document.querySelector('.testi-grid');
    const slider = document.querySelector('.testi-slider-mobile');
    testiCards = Array.from(document.querySelectorAll('.testi-grid .testi-card'));
    if (isMobileTestiSlider()) {
        if (grid) grid.style.display = 'none';
        if (slider) slider.style.display = 'flex';
        showTestiSlide(testiIndex);
        startTestiAutoSlide();
    } else {
        if (grid) grid.style.display = '';
        if (slider) slider.style.display = 'none';
        stopTestiAutoSlide();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setupTestiSliderMobile();
    const prevBtn = document.getElementById('testi-prev');
    const nextBtn = document.getElementById('testi-next');
    if (prevBtn) prevBtn.onclick = function () { prevTestiSlide(); startTestiAutoSlide(); };
    if (nextBtn) nextBtn.onclick = function () { nextTestiSlide(); startTestiAutoSlide(); };
});
window.addEventListener('resize', setupTestiSliderMobile);

// === COURSES SECTION MOBILE RENDER ===
function renderCourseMobile(idx) {
    const data = courseSlides[idx];
    // Render video/ảnh
    const videoWrap = document.getElementById('course-video-mb');
    if (videoWrap) {
        videoWrap.innerHTML = `
            <video controls poster='${data.poster}' style="width:100%;height:100%;object-fit:contain;border-radius:18px;">
                <source src='${data.video}' type='video/mp4'>
                Trình duyệt của bạn không hỗ trợ video.
            </video>
        `;
    }
}

// Thêm sự kiện cho mobile slider
function setupCourseMobileSlider() {
    let idx = 0;
    renderCourseMobile(idx);
    const prevBtn = document.getElementById('course-prev-mb');
    const nextBtn = document.getElementById('course-next-mb');
    if (prevBtn) prevBtn.onclick = function() {
        idx = (idx - 1 + courseSlides.length) % courseSlides.length;
        renderCourseMobile(idx);
    };
    if (nextBtn) nextBtn.onclick = function() {
        idx = (idx + 1) % courseSlides.length;
        renderCourseMobile(idx);
    };
}
document.addEventListener('DOMContentLoaded', setupCourseMobileSlider);

// === CLUB VIDEO MOBILE SLIDER ===
const clubSlides = [
    {
        video: 'vid_club_1.mp4',
        poster: 'thumb_speakup.png',
        title: 'SPEAK UP - Cuộc thi MC sinh viên',
    },
    {
        video: 'vid_club_2.mp4',
        poster: 'thumb_nhuncanhchim.png',
        title: 'Những cánh chim truyền thông',
    },
    {
        video: 'vid_club_3.mp4',
        poster: 'thumb_1.png',
        title: 'CLB Podcast PTIT',
    },
    {
        video: 'vid_club_4.mp4',
        poster: 'thumb_2.png',
        title: 'CLB Sản xuất video',
    },
    {
        video: 'vid_club_5.mp4',
        poster: 'thumb_3.png',
        title: 'CLB Truyền thông PTV'
    }
];

function renderClubMobile(idx, direction = 1) {
    const data = clubSlides[idx];
    const videoWrap = document.getElementById('club-video-mb');
    if (videoWrap) {
        // Xóa video cũ với animation
        const oldVideo = videoWrap.querySelector('video');
        if (oldVideo) {
            oldVideo.classList.remove('slide-in');
            oldVideo.classList.add(direction === 1 ? 'slide-out-left' : 'slide-out-right');
            setTimeout(() => {
                if (oldVideo.parentNode) oldVideo.parentNode.removeChild(oldVideo);
            }, 500);
        }
        // Thêm video mới với animation
        const newVideo = document.createElement('video');
        newVideo.controls = true;
        newVideo.poster = data.poster;
        newVideo.style.width = '100%';
        newVideo.style.height = '100%';
        newVideo.style.objectFit = 'contain';
        newVideo.style.borderRadius = '18px';
        newVideo.innerHTML = `<source src='${data.video}' type='video/mp4'>Trình duyệt của bạn không hỗ trợ video.`;
        newVideo.classList.add('slide-in');
        videoWrap.appendChild(newVideo);
        setTimeout(() => {
            newVideo.classList.add('slide-in');
        }, 10);
    }
}

function setupClubMobileSlider() {
    let idx = 0;
    renderClubMobile(idx, 1);
    const prevBtn = document.getElementById('club-prev-mb');
    const nextBtn = document.getElementById('club-next-mb');
    if (prevBtn) prevBtn.onclick = function() {
        const prev = (idx - 1 + clubSlides.length) % clubSlides.length;
        renderClubMobile(prev, -1);
        idx = prev;
    };
    if (nextBtn) nextBtn.onclick = function() {
        const next = (idx + 1) % clubSlides.length;
        renderClubMobile(next, 1);
        idx = next;
    };
}
document.addEventListener('DOMContentLoaded', setupClubMobileSlider);

document.addEventListener('DOMContentLoaded', function () {
    const y = localStorage.getItem('scrollY');
    if (y) {
        window.scrollTo(0, parseInt(y));
        localStorage.removeItem('scrollY');
    }
});