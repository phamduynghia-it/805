// ============================
// DATA SLIDE
// ============================
const memoryData = [
    {
        img: "images/a1.jpg",
        wish: "Chúc mừng sinh nhật chồng yêu! Cảm ơn anh vì luôn là điểm tựa vững chắc của em. Chúc anh thêm tuổi mới mạnh khỏe, vui vẻ và luôn thành công. Em yêu anh rất nhiều! ❤️🎂",
    },
    {
        img: "images/a2.jpg",
        wish: "mình đã đi qua nhiều nơi cùng nhau . Có nhiều kỷ niệm thật là tuyệt vời",
    },
    {
        img: "images/a3.jpg",
        wish: "Hãy viết tiếp hành trình đó cùng nhau bằng tình yêu và sự cảm thông này chồng nhé .",
    },
    {
        img: "images/a4.jpg",
        wish: "Lần đầu được cùng chồng đi công tác, những trải nghiệm thật  đáng nhớ . Không khí ở đây cũng rất tuyệt vời.",
    },
    {
        img: "images/a5.jpg",
        wish: "Sinh nhật này, em chỉ muốn nói: Em biết ơn vũ trụ vì đã đưa anh đến bên em. Chúc anh tuổi mới tràn đầy niềm vui và những điều tốt đẹp nhất! 💫💖",
    },
    {
        img: "images/a6.jpg",
        wish: "Chồng yêu! Chúc chồng luôn mạnh khỏe, công việc thuận lợi và lúc nào cũng giữ được nụ cười đẹp trai mà em mê mãi. 😘🎉",
    },
    {
        img: "images/a7.jpg",
        wish: "Chồng của em! Anh là người bạn đồng hành tuyệt vời nhất. Chúc chồng luôn hạnh phúc, bình an và được yêu thương như cách anh xứng đáng. 💗🌟",
    },
    {
        img: "images/a8.jpg",
        wish: " Cái Tết đầu tiên mà chúng ta đã đón cùng nhau, thật vui và hạnh phúc chồng nhỉ .",
    },
    {
        img: "images/a9.jpg",
        wish: " Mong mọi dự định của chồng đều thành công. Dù thế nào, vợ vẫn luôn tin tưởng và ở bên cạnh chồng. 💞🎂",
    },
    {
        img: "images/a10.jpg",
        wish: "2 mẹ con yêu ba Tường nhiều ❤️",
    }
];
const birthdayWishes = [
    "Chúc mừng sinh nhật chồng yêu! Chúc anh luôn mạnh khỏe, vui vẻ và tràn đầy năng lượng. Em yêu anh rất nhiều! ❤️🎂",
    "Sinh nhật vui vẻ nhé chồng! Cảm ơn anh vì đã luôn bên em. Chúc anh tuổi mới nhiều hạnh phúc và thành công. 💕✨",
    "Happy Birthday my husband! Chúc anh thêm một năm tuyệt vời với thật nhiều niềm vui và bình an. 💝🎈",
    "Chúc mừng sinh nhật người đàn ông tuyệt vời nhất cuộc đời em! Em luôn biết ơn vì có anh. ❤️🎁",
    "Chúc anh tuổi mới ngập tràn may mắn và thành công. Dù thế nào em vẫn luôn bên anh. 🌸💗",
    "Happy Birthday chồng yêu! Chúc anh luôn giữ nụ cười rạng rỡ và tâm hồn ấm áp như hiện tại. 🎂🎈",
    "Chúc chồng yêu sinh nhật thật ấm áp và ý nghĩa! Em mong mọi điều tốt đẹp nhất sẽ đến với anh. 💕🌺",
    "Sinh nhật vui vẻ anh yêu! Em chúc anh một năm mới nhiều niềm vui, nhiều sức khỏe và thật nhiều yêu thương. 🎉🌟",
];


// ============================
// GENERATE SLIDE HTML
// ============================
const slider = document.getElementById("memorySlider");

memoryData.forEach((item, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";

    slide.innerHTML = `
        <img src="${item.img}" alt="${item.title}" loading="lazy" />
        <button class="nav-arrow left" aria-label="Previous" style="display: ${
            i === 0 ? "flex" : "none"
        };">
            <svg viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"/>
            </svg>
        </button>
        <button class="nav-arrow right" aria-label="Next" style="display: ${
            i === 0 ? "flex" : "none"
        };">
            <svg viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z"/>
            </svg>
        </button>
    `;
    slider.appendChild(slide);
});

// Thêm event listeners cho navigation arrows sau khi tất cả slides được tạo
setTimeout(() => {
    document.querySelectorAll(".nav-arrow.left").forEach((arrow) => {
        arrow.addEventListener("click", (e) => {
            e.stopPropagation();
            index--;
            if (index < 0) index = total - 1;
            updateSlide();
        });
    });

    document.querySelectorAll(".nav-arrow.right").forEach((arrow) => {
        arrow.addEventListener("click", (e) => {
            e.stopPropagation();
            index++;
            if (index >= total) index = 0;
            updateSlide();
        });
    });
}, 0);

// ============================
// AUTO-SLIDE + SWIPE
// ============================

let index = 0;
const total = memoryData.length;

function updateSlide() {
    slider.style.transform = `translateX(${-index * 100}%)`;

    // Cập nhật hiển thị navigation arrows cho slide hiện tại
    document.querySelectorAll(".slide").forEach((slide, i) => {
        const leftArrow = slide.querySelector(".nav-arrow.left");
        const rightArrow = slide.querySelector(".nav-arrow.right");

        if (i === index) {
            // Ẩn arrows khi ở slide cuối cùng (ảnh 10, index = total - 1)
            if (index === total - 1) {
                if (leftArrow) leftArrow.style.display = "none";
                if (rightArrow) rightArrow.style.display = "none";
            } else {
                if (leftArrow) leftArrow.style.display = "flex";
                if (rightArrow) rightArrow.style.display = "flex";
            }
        } else {
            if (leftArrow) leftArrow.style.display = "none";
            if (rightArrow) rightArrow.style.display = "none";
        }
    });

    // Cập nhật câu chúc sinh nhật
    const wishTitle = document.getElementById("wishTitle");
    const wishSubtitle = document.getElementById("wishSubtitle");
    if (wishTitle && wishSubtitle && memoryData[index]) {
        // Sử dụng wish từ data hoặc random từ danh sách
        const wish =
            memoryData[index].wish ||
            birthdayWishes[index % birthdayWishes.length];
        
        // Tách wish thành title và subtitle (có thể tùy chỉnh logic này)
        // Giữ nguyên text cho title, dùng wish cho subtitle
        wishTitle.textContent = "Best Moments with You";
        wishSubtitle.textContent = wish;
        
        wishTitle.style.opacity = "0";
        wishSubtitle.style.opacity = "0";
        setTimeout(() => {
            wishTitle.style.opacity = "1";
            wishSubtitle.style.opacity = "1";
        }, 100);
    }
}

// Khởi tạo hiển thị arrows và câu chúc cho slide đầu tiên
setTimeout(() => {
    updateSlide();
}, 100);

// Auto chuyển slide
setInterval(() => {
    index = (index + 1) % total;
    updateSlide();
}, 5000);

// Vuốt trái/phải - cải thiện cho mobile
let startX = 0;
let startY = 0;
let isDragging = false;

const sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener(
    "touchstart",
    (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = true;
    },
    { passive: true }
);

sliderContainer.addEventListener(
    "touchmove",
    (e) => {
        if (!isDragging) return;
        // Không preventDefault để cho phép scroll tự nhiên nếu vuốt dọc
    },
    { passive: true }
);

sliderContainer.addEventListener(
    "touchend",
    (e) => {
        if (!isDragging) return;
        isDragging = false;

        let endX = e.changedTouches[0].clientX;
        let endY = e.changedTouches[0].clientY;
        let diffX = endX - startX;
        let diffY = Math.abs(endY - startY);

        // Chỉ xử lý swipe ngang nếu vuốt ngang nhiều hơn vuốt dọc
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 50) {
                // vuốt phải - slide trước
                index--;
                if (index < 0) index = total - 1;
                updateSlide();
            } else if (diffX < -50) {
                // vuốt trái - slide sau
                index++;
                if (index >= total) index = 0;
                updateSlide();
            }
        }
    },
    { passive: true }
);

// Hỗ trợ click để chuyển slide (cho desktop)
let mouseDownX = 0;
let mouseUpX = 0;

sliderContainer.addEventListener("mousedown", (e) => {
    mouseDownX = e.clientX;
});

sliderContainer.addEventListener("mouseup", (e) => {
    mouseUpX = e.clientX;
    let diff = mouseUpX - mouseDownX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            index--;
            if (index < 0) index = total - 1;
        } else {
            index++;
            if (index >= total) index = 0;
        }
        updateSlide();
    }
});

// ============================
// MUSIC CONTROL
// ============================
const musicControl = document.getElementById("musicControl");
const backgroundMusic = document.getElementById("backgroundMusic");
let isPlaying = false;

// Autoplay music (bị chặn bởi browser, cần user interaction)
musicControl.addEventListener("click", () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicControl.classList.remove("playing");
        musicControl.classList.add("paused");
        isPlaying = false;
    } else {
        backgroundMusic
            .play()
            .then(() => {
                musicControl.classList.remove("paused");
                musicControl.classList.add("playing");
                isPlaying = true;
            })
            .catch((err) => {
                console.log("Autoplay bị chặn, cần user interaction");
            });
    }
});

// Thử autoplay khi user tương tác lần đầu
document.addEventListener(
    "click",
    () => {
        if (!isPlaying && backgroundMusic.paused) {
            backgroundMusic
                .play()
                .then(() => {
                    musicControl.classList.remove("paused");
                    musicControl.classList.add("playing");
                    isPlaying = true;
                })
                .catch(() => {});
        }
    },
    { once: true }
);
