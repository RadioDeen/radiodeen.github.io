// app.js
// মূল অ্যাপ্লিকেশন লজিক

const audioPlayer = document.getElementById('audioPlayer');
const statusMessage = document.getElementById('statusMessage');
let currentTrackIndex = 0;
let isAzanPlaying = false;
let waitingTimeout = null;

// স্ট্যাটাস আপডেট করা
function updateStatus(message) {
    statusMessage.textContent = message;
}

// নির্দিষ্ট সময় অপেক্ষা করা
function wait(seconds) {
    return new Promise(resolve => {
        waitingTimeout = setTimeout(resolve, seconds * 1000);
    });
}

// রেন্ডম গান বাজানো
async function playRandomTrack() {
    if (!isAzanPlaying) {
        currentTrackIndex = Math.floor(Math.random() * musicPlaylist.length);
        audioPlayer.src = musicPlaylist[currentTrackIndex].url;
        document.getElementById('currentTrack').textContent = musicPlaylist[currentTrackIndex].title;
        try {
            await audioPlayer.play();
        } catch (error) {
        }
    }
}

// পরবর্তী গানে যাওয়া
async function skipTrack() {
    if (!isAzanPlaying) {
        audioPlayer.pause();
        await wait(3);
        playRandomTrack();
    }
}

// গান চালানো/বন্ধ করা
function togglePlayback() {
    const playPauseIcon = document.getElementById('playPauseIcon');
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseIcon.className = 'fas fa-pause';
    } else {
        audioPlayer.pause();
        playPauseIcon.className = 'fas fa-play';
    }
}

// আজান বাজানো
async function playAzan(prayerName) {
    try {
        isAzanPlaying = true;
        audioPlayer.pause();
        
        // আজানের অডিও লোড করা
        audioPlayer.src = azanAudio[prayerName];
        updateStatus("আজান চলছে");
        
        // আজান প্লে করা
        await audioPlayer.load();
        await audioPlayer.play();
        
        // আজান শেষে
        audioPlayer.onended = async () => {
            await wait(3);
            isAzanPlaying = false;
            playRandomTrack();
        };
    } catch (error) {
        console.error("আজান প্লে করতে সমস্যা:", error);
        isAzanPlaying = false;
    }
}

// আজকের নামাজের সময়সূচি প্রদর্শন
function displayTodaySchedule() {
    const scheduleDiv = document.getElementById('todaySchedule');
    const times = prayerTimeCalculator.getTodayTimes();

    scheduleDiv.innerHTML = '';
    for (const [prayer, time] of Object.entries(times)) {
        scheduleDiv.innerHTML += `
            <p>${prayerNames[prayer]}: ${time.start} - ${time.end}</p>
        `;
    }
}

// তারিখের ড্রপডাউন আপডেট করা
function updateDateDropdown() {
    const month = parseInt(document.getElementById('monthSelect').value);
    const dateSelect = document.getElementById('dateSelect');
    const daysInMonth = prayerTimeCalculator.monthlyTimes[month].daysInMonth;
    
    dateSelect.innerHTML = '';
    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dateSelect.appendChild(option);
    }
    
    // বর্তমান তারিখ সিলেক্ট করা
    const today = new Date();
    if (month === today.getMonth() + 1 && today.getDate() <= daysInMonth) {
        dateSelect.value = today.getDate();
    }
}

// নির্দিষ্ট দিনের নামাজের সময়সূচি প্রদর্শন
function displaySpecificDaySchedule() {
    const month = parseInt(document.getElementById('monthSelect').value);
    const day = parseInt(document.getElementById('dateSelect').value);
    const times = prayerTimeCalculator.getSpecificDayTimes(month, day);
    const container = document.getElementById('prayerTableContainer');

    let tableHTML = `
        <h3>${day} ${monthNames[month-1]}, ২০২৫ এর নামাজের সময়সূচি</h3>
        <table class="prayer-table">
            <tr>
                <th>নামাজ</th>
                <th>শুরু</th>
                <th>শেষ</th>
            </tr>
    `;

    for (const [prayer, time] of Object.entries(times)) {
        tableHTML += `
            <tr>
                <td>${prayerNames[prayer]}</td>
                <td>${time.start}</td>
                <td>${time.end}</td>
            </tr>
        `;
    }

    tableHTML += '</table>';
    container.innerHTML = tableHTML;
}

// সম্পূর্ণ মাসের সময়সূচি প্রদর্শন
function showMonthView() {
    const month = parseInt(document.getElementById('monthSelect').value);
    const monthData = prayerTimeCalculator.getMonthTimes(month);
    const container = document.getElementById('prayerTableContainer');

    let tableHTML = `
        <h3>${monthNames[month-1]} ২০২৫ এর নামাজের সময়সূচি</h3>
        <table class="prayer-table">
            <tr>
                <th>তারিখ</th>
                <th>ফজর</th>
                <th>যোহর</th>
                <th>আসর</th>
                <th>মাগরিব</th>
                <th>এশা</th>
            </tr>
    `;

    for (let day = 1; day <= monthData.daysInMonth; day++) {
        const times = prayerTimeCalculator.getSpecificDayTimes(month, day);
        
        tableHTML += `
            <tr>
                <td><strong>${convertToBanglaNumber(day)}</strong></td>
                <td>${times.fajr.start}-${times.fajr.end}</td>
                <td>${times.dhuhr.start}-${times.dhuhr.end}</td>
                <td>${times.asr.start}-${times.asr.end}</td>
                <td>${times.maghrib.start}-${times.maghrib.end}</td>
                <td>${times.isha.start}-${times.isha.end}</td>
            </tr>
        `;
    }

    tableHTML += '</table>';
    container.innerHTML = tableHTML;
}

// মাসিক সময়সূচি আপডেট
function updatePrayerTable() {
    updateDateDropdown();
    displaySpecificDaySchedule();
}

// নামাজের সময় চেক করা
function checkPrayerTimes() {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ":" + 
                      now.getMinutes().toString().padStart(2, '0');
    
    const times = prayerTimeCalculator.getTodayTimes();
    
    for (const [prayer, time] of Object.entries(times)) {
        if (currentTime === time.start) {
            playAzan(prayer);
            break;
        }
    }
}

// প্রতি মিনিটে নামাজের সময় চেক
setInterval(checkPrayerTimes, 60000);

// গান শেষ হলে
audioPlayer.onended = async () => {
    if (!isAzanPlaying) {
        await wait(3);
        playRandomTrack();
    }
};

// অডিও প্লেয়ারের স্টেট পরিবর্তনের সময় আইকন আপডেট করা
audioPlayer.addEventListener('play', () => {
    document.getElementById('playPauseIcon').className = 'fas fa-pause';
});

audioPlayer.addEventListener('pause', () => {
    document.getElementById('playPauseIcon').className = 'fas fa-play';
});

// পেইজ লোড হওয়ার সময়
window.onload = () => {
    const currentMonth = new Date().getMonth() + 1;
    document.getElementById('monthSelect').value = currentMonth;
    updateDateDropdown();
    displayTodaySchedule();
    displaySpecificDaySchedule();
    playRandomTrack();
};