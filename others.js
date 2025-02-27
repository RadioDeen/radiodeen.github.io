// বিভিন্ন সময়ে বিভিন্ন অডিও প্লে করার জন্য ডেটা স্ট্রাকচার
const dailySchedule = {
    // প্রতিদিনের নির্দিষ্ট সময়ে প্লে হবে
    daily: {
        "4:30": {
            title: "তাহাজ্জুদের গুরুত্ব",
            url: "Islamic_Lectures/tahajjud.mp3"
        },
        "7:00": {
            title: "সকালের যিকির",
            url: "Islamic_Lectures/morning_zikir.mp3"
        },
        "13:00": {
            title: "দুপুরের দরস",
            url: "Islamic_Lectures/afternoon_lesson.mp3"
        },
        "17:30": {
            title: "আসরের পরের আমল",
            url: "Islamic_Lectures/asr_amal.mp3"
        },
        "21:00": {
            title: "রাতের যিকির",
            url: "Islamic_Lectures/night_zikir.mp3"
        }
    },

    // বিশেষ তারিখে প্লে হবে
    special: {
        // ফেব্রুয়ারি মাস (শাবান)
        "2": {
            "27": { // শবে বরাত
                "17:26": {
                    title: "শবে বরাতের ফজিলত",
                    url: "Azan/Magrib_Azan.mp3"
                }
            }
        },

        // মার্চ মাস (রমজান)
        "3": { 
            "12": { // রমজানের প্রথম দিন
                "5:00": {
                    title: "রমজানের প্রথম দিন",
                    url: "Islamic_Lectures/ramadan_day1.mp3"
                }
            },
            "26": { // ১৫ই রমজান
                "21:30": {
                    title: "রমজানের মধ্যম দশক",
                    url: "Islamic_Lectures/ramadan_middle.mp3"
                }
            }
        },
        
        // জুন মাস (জিলহজ্জ)
        "6": {
            "17": { // আরাফার দিন
                "16:30": {
                    title: "আরাফার দিনের গুরুত্ব",
                    url: "Islamic_Lectures/arafah_day.mp3"
                }
            },
            "18": { // ঈদুল আযহা
                "8:00": {
                    title: "কুরবানির মাসআলা",
                    url: "Islamic_Lectures/qurbani_rules.mp3"
                }
            }
        }
    }
};

// সময় চেক করে অডিও প্লে করার ফাংশন
function checkAndPlayScheduledAudio() {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ":" + 
                       now.getMinutes().toString().padStart(2, '0');
    
    const currentMonth = now.getMonth() + 1; // 1-12
    const currentDate = now.getDate();
    
    console.log('Current Time:', currentTime);
    console.log('Current Date:', currentDate);
    console.log('Current Month:', currentMonth);

    // প্রতিদিনের শিডিউল চেক
    if (dailySchedule.daily[currentTime]) {
        const audio = dailySchedule.daily[currentTime];
        playScheduledAudio(audio);
    }

    // বিশেষ তারিখের শিডিউল চেক
    if (dailySchedule.special[currentMonth] && 
        dailySchedule.special[currentMonth][currentDate] && 
        dailySchedule.special[currentMonth][currentDate][currentTime]) {
        
        const audio = dailySchedule.special[currentMonth][currentDate][currentTime];
        playScheduledAudio(audio);
    }
}

// অডিও প্লে করার ফাংশন
async function playScheduledAudio(audio) {
    if (!isAzanPlaying) { // আজান না বাজলে
        audioPlayer.pause();
        audioPlayer.src = audio.url;
        document.getElementById('currentTrack').textContent = audio.title;
        
        // প্লে করার আগে ৩ সেকেন্ড অপেক্ষা
        await wait(3);
        
        try {
            await audioPlayer.load();
            await audioPlayer.play();
        } catch (error) {
            console.error("অডিও প্লে করতে সমস্যা:", error);
        }

        // অডিও শেষে
        audioPlayer.onended = async () => {
            await wait(3); // ৩ সেকেন্ড অপেক্ষা
            playRandomTrack();
        };
    }
}

// প্রতি মিনিটে শিডিউল চেক
setInterval(checkAndPlayScheduledAudio, 60000);

// পেইজ লোড হওয়ার সময় একবার চেক
window.addEventListener('load', checkAndPlayScheduledAudio);

// হিজরী তারিখ ক্যালকুলেশনের ফাংশন
function getHijriDate() {
    const today = new Date();
    const gregorianDate = today.getDate();
    const gregorianMonth = today.getMonth() + 1;
    const gregorianYear = today.getFullYear();

    // জুলিয়ান ডে ক্যালকুলেশন
    let jd = intPart((gregorianYear + intPart((gregorianMonth - 8) / 6) + 100100) * 1461 / 4)
        + intPart(153 * mod(gregorianMonth + 9, 12) + 2 / 5)
        + gregorianDate - 34840408;
    jd = jd - intPart((intPart((gregorianYear + 100100 + intPart((gregorianMonth - 8) / 6)) / 100) * 3) / 4) + 752;

    // হিজরী তারিখ ক্যালকুলেশন
    let l = jd - 1948440 + 10632;
    let n = intPart((l - 1) / 10631);
    l = l - 10631 * n + 354;
    let j = (intPart((10985 - l) / 5316)) * (intPart((50 * l) / 17719))
        + (intPart(l / 5670)) * (intPart((43 * l) / 15238));
    l = l - (intPart((30 - j) / 15)) * (intPart((17719 * j) / 50))
        - (intPart(j / 16)) * (intPart((15238 * j) / 43)) + 29;
    
    const hijriMonth = intPart((24 * l) / 709);
    const hijriDate = l - intPart((709 * hijriMonth) / 24);
    const hijriYear = 30 * n + j - 30 + 1446; // 1446 হিজরী সাল

    return {
        year: hijriYear,
        month: hijriMonth + 1,
        date: hijriDate
    };
}

// সহায়ক ফাংশন
function intPart(floatNum) {
    if (floatNum < -0.0000001) {
        return Math.ceil(floatNum - 0.0000001);
    }
    return Math.floor(floatNum + 0.0000001);
}

function mod(a, b) {
    return a - (b * Math.floor(a / b));
} 