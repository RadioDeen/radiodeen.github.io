// prayer-data.js
// নামাজের সময়সূচি ডাটা

// আজানের অডিও ফাইলগুলো
const azanAudio = {
    fajr: "Azan/Fajr_Azan.mp3",
    dhuhr: "Azan/Zuhr_Azan.mp3",
    asr: "Azan/Asr_Azan.mp3",
    maghrib: "Azan/Magrib_Azan.mp3",
    isha: "Azan/Isha_Azan.mp3"
};

// নামাজের সময়সূচি ক্যালকুলেটর
const prayerTimeCalculator = {
    // মাসভিত্তিক নামাজের সময়সূচি
    monthlyTimes: {
        1: { // জানুয়ারি
            daysInMonth: 31,
            defaultTimes: {
                
            },
            // নির্দিষ্ট দিনের জন্য অতিরিক্ত সময়
            specificDays: {
                // উদাহরণ: 15 তারিখের জন্য ভিন্ন সময়
                1: {
                fajr: { start: "5:20", end: "6:40" },
                dhuhr: { start: "12:02", end: "15:46" },
                asr: { start: "15:47", end: "17:18" },
                maghrib: { start: "17:23", end: "18:42" },
                isha: { start: "18:43", end: "5:16" }
                },
				2: {
                fajr: { start: "5:21", end: "6:40" },
                dhuhr: { start: "12:02", end: "15:47" },
                asr: { start: "15:48", end: "17:18" },
                maghrib: { start: "17:23", end: "18:43" },
                isha: { start: "18:44", end: "5:16" }
                },
				3: {
                fajr: { start: "5:21", end: "6:40" },
                dhuhr: { start: "12:02", end: "15:47" },
                asr: { start: "15:48", end: "17:19" },
                maghrib: { start: "17:24", end: "18:44" },
                isha: { start: "18:45", end: "5:16" }
                },
				4: {
                fajr: { start: "5:21", end: "6:41" },
                dhuhr: { start: "12:03", end: "15:48" },
                asr: { start: "15:49", end: "17:20" },
                maghrib: { start: "17:25", end: "18:44" },
                isha: { start: "18:45", end: "5:17" }
                },
				5: {
                fajr: { start: "5:22", end: "6:41" },
                dhuhr: { start: "12:03", end: "15:49" },
                asr: { start: "15:50", end: "17:20" },
                maghrib: { start: "17:25", end: "18:45" },
                isha: { start: "18:46", end: "5:17" }
                },
				6: {
                fajr: { start: "5:22", end: "6:41" },
                dhuhr: { start: "12:04", end: "15:49" },
                asr: { start: "15:50", end: "17:21" },
                maghrib: { start: "17:26", end: "18:45" },
                isha: { start: "18:46", end: "5:17" }
                },
				7: {
                fajr: { start: "5:22", end: "6:41" },
                dhuhr: { start: "12:04", end: "15:50" },
                asr: { start: "15:51", end: "17:22" },
                maghrib: { start: "17:27", end: "18:46" },
                isha: { start: "18:47", end: "5:18" }
                },
				8: {
                fajr: { start: "5:22", end: "6:41" },
                dhuhr: { start: "12:05", end: "15:51" },
                asr: { start: "15:52", end: "17:23" },
                maghrib: { start: "17:28", end: "18:47" },
                isha: { start: "18:48", end: "5:18" }
                },
				9: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:05", end: "15:51" },
                asr: { start: "15:52", end: "17:23" },
                maghrib: { start: "17:28", end: "18:47" },
                isha: { start: "18:48", end: "5:18" }
                },
				10: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:06", end: "15:52" },
                asr: { start: "15:53", end: "17:24" },
                maghrib: { start: "17:29", end: "18:48" },
                isha: { start: "18:49", end: "5:18" }
                },
				11: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:06", end: "15:53" },
                asr: { start: "15:54", end: "17:25" },
                maghrib: { start: "17:30", end: "18:49" },
                isha: { start: "18:50", end: "5:18" }
                },
				12: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:06", end: "15:54" },
                asr: { start: "15:55", end: "17:25" },
                maghrib: { start: "17:30", end: "18:49" },
                isha: { start: "18:50", end: "5:18" }
                },
				13: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:07", end: "15:54" },
                asr: { start: "15:55", end: "17:26" },
                maghrib: { start: "17:31", end: "18:50" },
                isha: { start: "18:51", end: "5:18" }
                },
				14: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:07", end: "15:55" },
                asr: { start: "15:56", end: "17:27" },
                maghrib: { start: "17:32", end: "18:50" },
                isha: { start: "18:51", end: "5:18" }
                },
				15: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:07", end: "15:56" },
                asr: { start: "15:57", end: "17:28" },
                maghrib: { start: "17:33", end: "18:51" },
                isha: { start: "18:52", end: "5:18" }
                },
				16: {
                fajr: { start: "5:23", end: "6:42" },
                dhuhr: { start: "12:08", end: "15:56" },
                asr: { start: "15:57", end: "17:28" },
                maghrib: { start: "17:33", end: "18:52" },
                isha: { start: "18:53", end: "5:19" }
                },
				17: {
                fajr: { start: "5:24", end: "6:42" },
                dhuhr: { start: "12:08", end: "15:57" },
                asr: { start: "15:58", end: "17:29" },
                maghrib: { start: "17:34", end: "18:52" },
                isha: { start: "18:53", end: "5:19" }
                },
				18: {
                fajr: { start: "5:24", end: "6:42" },
                dhuhr: { start: "12:08", end: "15:58" },
                asr: { start: "15:59", end: "17:30" },
                maghrib: { start: "17:35", end: "18:53" },
                isha: { start: "18:54", end: "5:19" }
                },
				19: {
                fajr: { start: "5:24", end: "6:42" },
                dhuhr: { start: "12:09", end: "15:59" },
                asr: { start: "16:00", end: "17:30" },
                maghrib: { start: "17:35", end: "18:54" },
                isha: { start: "18:55", end: "5:19" }
                },
				20: {
                fajr: { start: "5:24", end: "6:42" },
                dhuhr: { start: "12:09", end: "15:59" },
                asr: { start: "16:00", end: "17:31" },
                maghrib: { start: "17:36", end: "18:54" },
                isha: { start: "18:55", end: "5:19" }
                },
				21: {
                fajr: { start: "5:24", end: "6:41" },
                dhuhr: { start: "12:09", end: "16:00" },
                asr: { start: "16:01", end: "17:32" },
                maghrib: { start: "17:37", end: "18:55" },
                isha: { start: "18:56", end: "5:18" }
                },
				22: {
                fajr: { start: "5:23", end: "6:41" },
                dhuhr: { start: "12:10", end: "16:01" },
                asr: { start: "16:02", end: "17:33" },
                maghrib: { start: "17:38", end: "18:55" },
                isha: { start: "18:56", end: "5:18" }
                },
				23: {
                fajr: { start: "5:23", end: "6:41" },
                dhuhr: { start: "12:10", end: "16:01" },
                asr: { start: "16:02", end: "17:33" },
                maghrib: { start: "17:38", end: "18:56" },
                isha: { start: "18:57", end: "5:18" }
                },
				24: {
                fajr: { start: "5:23", end: "6:41" },
                dhuhr: { start: "12:10", end: "16:02" },
                asr: { start: "16:03", end: "17:34" },
                maghrib: { start: "17:39", end: "18:57" },
                isha: { start: "18:58", end: "5:18" }
                },
				25: {
                fajr: { start: "5:23", end: "6:41" },
                dhuhr: { start: "12:10", end: "16:03" },
                asr: { start: "16:04", end: "17:35" },
                maghrib: { start: "17:40", end: "18:57" },
                isha: { start: "18:58", end: "5:18" }
                },
				26: {
                fajr: { start: "5:23", end: "6:40" },
                dhuhr: { start: "12:11", end: "16:04" },
                asr: { start: "16:05", end: "17:36" },
                maghrib: { start: "17:41", end: "18:58" },
                isha: { start: "18:59", end: "5:18" }
                },
				27: {
                fajr: { start: "5:23", end: "6:40" },
                dhuhr: { start: "12:11", end: "16:04" },
                asr: { start: "16:05", end: "17:36" },
                maghrib: { start: "17:41", end: "18:58" },
                isha: { start: "18:59", end: "5:18" }
                },
				28: {
                fajr: { start: "5:23", end: "6:40" },
                dhuhr: { start: "12:11", end: "16:05" },
                asr: { start: "16:06", end: "17:37" },
                maghrib: { start: "17:42", end: "18:59" },
                isha: { start: "19:00", end: "5:17" }
                },
				29: {
                fajr: { start: "5:22", end: "6:39" },
                dhuhr: { start: "12:11", end: "16:06" },
                asr: { start: "16:07", end: "17:38" },
                maghrib: { start: "17:43", end: "19:00" },
                isha: { start: "19:01", end: "5:17" }
                },
				30: {
                fajr: { start: "5:22", end: "6:39" },
                dhuhr: { start: "12:11", end: "16:06" },
                asr: { start: "16:07", end: "17:38" },
                maghrib: { start: "17:43", end: "19:00" },
                isha: { start: "19:01", end: "5:17" }
                },
				31: {
                fajr: { start: "5:22", end: "6:39" },
                dhuhr: { start: "12:12", end: "16:07" },
                asr: { start: "16:08", end: "17:39" },
                maghrib: { start: "17:44", end: "19:01" },
                isha: { start: "19:02", end: "5:17" }
                }
            }
        },
        2: { // ফেব্রুয়ারি
            daysInMonth: 29, // লিপ ইয়ার ধরে
            defaultTimes: {
                
            },
            specificDays: {
                1: {
                fajr: { start: "5:22", end: "6:38" },
                dhuhr: { start: "12:12", end: "16:08" },
                asr: { start: "16:09", end: "17:40" },
                maghrib: { start: "17:45", end: "19:01" },
                isha: { start: "19:02", end: "5:16" }
                },
				2: {
                fajr: { start: "5:21", end: "6:38" },
                dhuhr: { start: "12:12", end: "16:08" },
                asr: { start: "16:09", end: "17:40" },
                maghrib: { start: "17:45", end: "19:02" },
                isha: { start: "19:03", end: "5:16" }
                },
				3: {
                fajr: { start: "5:21", end: "6:37" },
                dhuhr: { start: "12:12", end: "16:09" },
                asr: { start: "16:10", end: "17:41" },
                maghrib: { start: "17:46", end: "19:02" },
                isha: { start: "19:03", end: "5:16" }
                },
				4: {
                fajr: { start: "5:21", end: "6:37" },
                dhuhr: { start: "12:12", end: "16:10" },
                asr: { start: "16:11", end: "17:42" },
                maghrib: { start: "17:47", end: "19:03" },
                isha: { start: "19:04", end: "5:15" }
                },
				5: {
                fajr: { start: "5:20", end: "6:36" },
                dhuhr: { start: "12:12", end: "16:10" },
                asr: { start: "16:11", end: "17:42" },
                maghrib: { start: "17:47", end: "19:04" },
                isha: { start: "19:05", end: "5:15" }
                },
				6: {
                fajr: { start: "5:20", end: "6:36" },
                dhuhr: { start: "12:12", end: "16:11" },
                asr: { start: "16:12", end: "17:43" },
                maghrib: { start: "17:48", end: "19:04" },
                isha: { start: "19:05", end: "5:14" }
                },
				7: {
                fajr: { start: "5:19", end: "6:35" },
                dhuhr: { start: "12:12", end: "16:11" },
                asr: { start: "16:12", end: "17:44" },
                maghrib: { start: "17:49", end: "19:05" },
                isha: { start: "19:06", end: "5:14" }
                },
				8: {
                fajr: { start: "5:19", end: "6:35" },
                dhuhr: { start: "12:12", end: "16:12" },
                asr: { start: "16:13", end: "17:44" },
                maghrib: { start: "17:49", end: "19:05" },
                isha: { start: "19:06", end: "5:14" }
                },
				9: {
                fajr: { start: "5:19", end: "6:34" },
                dhuhr: { start: "12:13", end: "16:13" },
                asr: { start: "16:14", end: "17:45" },
                maghrib: { start: "17:50", end: "19:06" },
                isha: { start: "19:07", end: "5:13" }
                },
				10: {
                fajr: { start: "5:18", end: "6:34" },
                dhuhr: { start: "12:13", end: "16:13" },
                asr: { start: "16:14", end: "17:46" },
                maghrib: { start: "17:51", end: "19:06" },
                isha: { start: "19:07", end: "5:13" }
                },
				11: {
                fajr: { start: "5:18", end: "6:33" },
                dhuhr: { start: "12:13", end: "16:14" },
                asr: { start: "16:15", end: "17:46" },
                maghrib: { start: "17:51", end: "19:07" },
                isha: { start: "19:08", end: "5:12" }
                },
				12: {
                fajr: { start: "5:17", end: "6:33" },
                dhuhr: { start: "12:13", end: "16:14" },
                asr: { start: "16:15", end: "17:47" },
                maghrib: { start: "17:52", end: "19:07" },
                isha: { start: "19:08", end: "5:12" }
                },
				13: {
                fajr: { start: "5:17", end: "6:32" },
                dhuhr: { start: "12:13", end: "16:15" },
                asr: { start: "16:16", end: "17:47" },
                maghrib: { start: "17:52", end: "19:08" },
                isha: { start: "19:09", end: "5:11" }
                },
				14: {
                fajr: { start: "5:16", end: "6:31" },
                dhuhr: { start: "12:13", end: "16:15" },
                asr: { start: "16:16", end: "17:48" },
                maghrib: { start: "17:53", end: "19:08" },
                isha: { start: "19:09", end: "5:10" }
                },
				15: {
                fajr: { start: "5:15", end: "6:31" },
                dhuhr: { start: "12:12", end: "16:16" },
                asr: { start: "16:17", end: "17:49" },
                maghrib: { start: "17:54", end: "19:09" },
                isha: { start: "19:10", end: "5:10" }
                },
				16: {
                fajr: { start: "5:15", end: "6:30" },
                dhuhr: { start: "12:12", end: "16:16" },
                asr: { start: "16:17", end: "17:49" },
                maghrib: { start: "17:54", end: "19:09" },
                isha: { start: "19:10", end: "5:09" }
                },
				17: {
                fajr: { start: "5:14", end: "6:29" },
                dhuhr: { start: "12:12", end: "16:17" },
                asr: { start: "16:18", end: "17:50" },
                maghrib: { start: "17:55", end: "19:10" },
                isha: { start: "19:11", end: "5:09" }
                },
				18: {
                fajr: { start: "5:14", end: "6:28" },
                dhuhr: { start: "12:12", end: "16:17" },
                asr: { start: "16:18", end: "17:50" },
                maghrib: { start: "17:55", end: "19:10" },
                isha: { start: "19:11", end: "5:08" }
                },
				19: {
                fajr: { start: "5:13", end: "6:28" },
                dhuhr: { start: "12:12", end: "16:18" },
                asr: { start: "16:19", end: "17:51" },
                maghrib: { start: "17:56", end: "19:11" },
                isha: { start: "19:12", end: "5:07" }
                },
				20: {
                fajr: { start: "5:12", end: "6:27" },
                dhuhr: { start: "12:12", end: "16:18" },
                asr: { start: "16:19", end: "17:51" },
                maghrib: { start: "17:56", end: "19:11" },
                isha: { start: "19:12", end: "5:07" }
                },
				21: {
                fajr: { start: "5:12", end: "6:26" },
                dhuhr: { start: "12:12", end: "16:19" },
                asr: { start: "16:20", end: "17:52" },
                maghrib: { start: "17:57", end: "19:12" },
                isha: { start: "19:13", end: "5:06" }
                },
				22: {
                fajr: { start: "5:12", end: "6:26" },
                dhuhr: { start: "12:17", end: "16:20" },
                asr: { start: "16:21", end: "17:56" },
                maghrib: { start: "18:00", end: "19:12" },
                isha: { start: "19:13", end: "5:08" }
                },
				23: {
                fajr: { start: "5:12", end: "6:25" },
                dhuhr: { start: "12:17", end: "16:20" },
                asr: { start: "16:21", end: "17:56" },
                maghrib: { start: "18:00", end: "19:13" },
                isha: { start: "19:14", end: "5:07" }
                },
				24: {
                fajr: { start: "5:11", end: "6:25" },
                dhuhr: { start: "12:17", end: "16:21" },
                asr: { start: "16:22", end: "17:57" },
                maghrib: { start: "18:01", end: "19:13" },
                isha: { start: "19:14", end: "5:06" }
                },
				25: {
                fajr: { start: "5:10", end: "6:24" },
                dhuhr: { start: "12:17", end: "16:21" },
                asr: { start: "16:22", end: "17:58" },
                maghrib: { start: "18:02", end: "19:14" },
                isha: { start: "19:15", end: "5:05" }
                },
				26: {
                fajr: { start: "5:09", end: "6:23" },
                dhuhr: { start: "12:16", end: "16:21" },
                asr: { start: "16:22", end: "17:58" },
                maghrib: { start: "18:02", end: "19:14" },
                isha: { start: "19:15", end: "5:05" }
                },
				27: {
                fajr: { start: "5:09", end: "6:22" },
                dhuhr: { start: "12:16", end: "16:22" },
                asr: { start: "16:23", end: "17:59" },
                maghrib: { start: "18:03", end: "19:14" },
                isha: { start: "19:15", end: "5:04" }
                },
				28: {
                fajr: { start: "5:06", end: "6:21" },
                dhuhr: { start: "12:11", end: "16:22" },
                asr: { start: "16:23", end: "17:56" },
                maghrib: { start: "18:01", end: "19:15" },
                isha: { start: "19:16", end: "5:01" }
                },
				29: {
                fajr: { start: "5:06", end: "6:20" },
                dhuhr: { start: "12:11", end: "16:22" },
                asr: { start: "16:23", end: "17:56" },
                maghrib: { start: "18:01", end: "19:15" },
                isha: { start: "19:16", end: "5:00" }
                }
            }
        },
        3: { // মার্চ
            daysInMonth: 31,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "5:05", end: "6:19" },
                dhuhr: { start: "12:11", end: "16:22" },
                asr: { start: "16:23", end: "17:56" },
                maghrib: { start: "18:01", end: "19:15" },
                isha: { start: "19:16", end: "4:59" }
                },
				2: {
                fajr: { start: "5:04", end: "6:19" },
                dhuhr: { start: "12:11", end: "16:22" },
                asr: { start: "16:23", end: "17:57" },
                maghrib: { start: "18:02", end: "19:16" },
                isha: { start: "19:17", end: "4:58" }
                },
				3: {
                fajr: { start: "5:03", end: "6:18" },
                dhuhr: { start: "12:10", end: "16:23" },
                asr: { start: "16:24", end: "17:57" },
                maghrib: { start: "18:02", end: "19:16" },
                isha: { start: "19:17", end: "4:58" }
                },
				4: {
                fajr: { start: "5:03", end: "6:17" },
                dhuhr: { start: "12:10", end: "16:23" },
                asr: { start: "16:24", end: "17:58" },
                maghrib: { start: "18:03", end: "19:17" },
                isha: { start: "19:18", end: "4:57" }
                },
				5: {
                fajr: { start: "5:02", end: "6:16" },
                dhuhr: { start: "12:10", end: "16:23" },
                asr: { start: "16:24", end: "17:58" },
                maghrib: { start: "18:03", end: "19:17" },
                isha: { start: "19:18", end: "4:56" }
                },
				6: {
                fajr: { start: "5:01", end: "6:15" },
                dhuhr: { start: "12:10", end: "16:24" },
                asr: { start: "16:25", end: "17:58" },
                maghrib: { start: "18:03", end: "19:18" },
                isha: { start: "19:19", end: "4:55" }
                },
				7: {
                fajr: { start: "5:00", end: "6:14" },
                dhuhr: { start: "12:09", end: "16:24" },
                asr: { start: "16:25", end: "17:59" },
                maghrib: { start: "18:04", end: "19:18" },
                isha: { start: "19:19", end: "4:54" }
                },
				8: {
                fajr: { start: "4:59", end: "6:13" },
                dhuhr: { start: "12:09", end: "16:24" },
                asr: { start: "16:25", end: "17:59" },
                maghrib: { start: "18:04", end: "19:19" },
                isha: { start: "19:20", end: "4:53" }
                },
				9: {
                fajr: { start: "4:58", end: "6:12" },
                dhuhr: { start: "12:09", end: "16:24" },
                asr: { start: "16:25", end: "18:00" },
                maghrib: { start: "18:05", end: "19:19" },
                isha: { start: "19:20", end: "4:52" }
                },
				10: {
                fajr: { start: "4:57", end: "6:11" },
                dhuhr: { start: "12:09", end: "16:25" },
                asr: { start: "16:26", end: "18:00" },
                maghrib: { start: "18:05", end: "19:19" },
                isha: { start: "19:20", end: "4:51" }
                },
				11: {
                fajr: { start: "4:56", end: "6:10" },
                dhuhr: { start: "12:08", end: "16:25" },
                asr: { start: "16:26", end: "18:01" },
                maghrib: { start: "18:06", end: "19:20" },
                isha: { start: "19:21", end: "4:50" }
                },
				12: {
                fajr: { start: "4:55", end: "6:09" },
                dhuhr: { start: "12:08", end: "16:25" },
                asr: { start: "16:26", end: "18:01" },
                maghrib: { start: "18:06", end: "19:20" },
                isha: { start: "19:21", end: "4:49" }
                },
				13: {
                fajr: { start: "4:54", end: "6:08" },
                dhuhr: { start: "12:08", end: "16:25" },
                asr: { start: "16:26", end: "18:02" },
                maghrib: { start: "18:07", end: "19:21" },
                isha: { start: "19:22", end: "4:48" }
                },
				14: {
                fajr: { start: "4:53", end: "6:07" },
                dhuhr: { start: "12:08", end: "16:26" },
                asr: { start: "16:27", end: "18:02" },
                maghrib: { start: "18:07", end: "19:21" },
                isha: { start: "19:22", end: "4:47" }
                },
				15: {
                fajr: { start: "4:52", end: "6:06" },
                dhuhr: { start: "12:07", end: "16:26" },
                asr: { start: "16:27", end: "18:02" },
                maghrib: { start: "18:07", end: "19:22" },
                isha: { start: "19:23", end: "4:46" }
                },
				16: {
                fajr: { start: "4:51", end: "6:05" },
                dhuhr: { start: "12:07", end: "16:26" },
                asr: { start: "16:27", end: "18:03" },
                maghrib: { start: "18:08", end: "19:22" },
                isha: { start: "19:23", end: "4:45" }
                },
				17: {
                fajr: { start: "4:50", end: "6:04" },
                dhuhr: { start: "12:07", end: "16:26" },
                asr: { start: "16:27", end: "18:03" },
                maghrib: { start: "18:08", end: "19:22" },
                isha: { start: "19:23", end: "4:44" }
                },
				18: {
                fajr: { start: "4:49", end: "6:03" },
                dhuhr: { start: "12:06", end: "16:26" },
                asr: { start: "16:27", end: "18:04" },
                maghrib: { start: "18:09", end: "19:23" },
                isha: { start: "19:24", end: "4:43" }
                },
				19: {
                fajr: { start: "4:48", end: "6:02" },
                dhuhr: { start: "12:06", end: "16:27" },
                asr: { start: "16:28", end: "18:04" },
                maghrib: { start: "18:09", end: "19:23" },
                isha: { start: "19:24", end: "4:42" }
                },
				20: {
                fajr: { start: "4:47", end: "6:01" },
                dhuhr: { start: "12:06", end: "16:27" },
                asr: { start: "16:28", end: "18:04" },
                maghrib: { start: "18:09", end: "19:24" },
                isha: { start: "19:25", end: "4:41" }
                },
				21: {
                fajr: { start: "4:46", end: "6:00" },
                dhuhr: { start: "12:06", end: "16:27" },
                asr: { start: "16:28", end: "18:05" },
                maghrib: { start: "18:10", end: "19:24" },
                isha: { start: "19:25", end: "4:40" }
                },
				22: {
                fajr: { start: "4:45", end: "5:59" },
                dhuhr: { start: "12:05", end: "16:27" },
                asr: { start: "16:28", end: "18:05" },
                maghrib: { start: "18:10", end: "19:25" },
                isha: { start: "19:26", end: "4:39" }
                },
				23: {
                fajr: { start: "4:44", end: "5:58" },
                dhuhr: { start: "12:05", end: "16:27" },
                asr: { start: "16:28", end: "18:06" },
                maghrib: { start: "18:11", end: "19:25" },
                isha: { start: "19:26", end: "4:38" }
                },
				24: {
                fajr: { start: "4:43", end: "5:57" },
                dhuhr: { start: "12:05", end: "16:27" },
                asr: { start: "16:28", end: "18:06" },
                maghrib: { start: "18:11", end: "19:26" },
                isha: { start: "19:27", end: "4:37" }
                },
				25: {
                fajr: { start: "4:42", end: "5:56" },
                dhuhr: { start: "12:04", end: "16:28" },
                asr: { start: "16:29", end: "18:06" },
                maghrib: { start: "18:11", end: "19:26" },
                isha: { start: "19:27", end: "4:36" }
                },
				26: {
                fajr: { start: "4:41", end: "5:55" },
                dhuhr: { start: "12:04", end: "16:28" },
                asr: { start: "16:29", end: "18:07" },
                maghrib: { start: "18:12", end: "19:26" },
                isha: { start: "19:27", end: "4:35" }
                },
				27: {
                fajr: { start: "4:40", end: "5:54" },
                dhuhr: { start: "12:04", end: "16:28" },
                asr: { start: "16:29", end: "18:07" },
                maghrib: { start: "18:12", end: "19:27" },
                isha: { start: "19:28", end: "4:34" }
                },
				28: {
                fajr: { start: "4:39", end: "5:53" },
                dhuhr: { start: "12:04", end: "16:28" },
                asr: { start: "16:29", end: "18:08" },
                maghrib: { start: "18:13", end: "19:27" },
                isha: { start: "19:28", end: "4:33" }
                },
				29: {
                fajr: { start: "4:38", end: "5:52" },
                dhuhr: { start: "12:03", end: "16:28" },
                asr: { start: "16:29", end: "18:08" },
                maghrib: { start: "18:13", end: "19:28" },
                isha: { start: "19:29", end: "4:32" }
                },
				30: {
                fajr: { start: "4:37", end: "5:51" },
                dhuhr: { start: "12:03", end: "16:28" },
                asr: { start: "16:29", end: "18:08" },
                maghrib: { start: "18:13", end: "19:28" },
                isha: { start: "19:29", end: "4:31" }
                },
				31: {
                fajr: { start: "4:36", end: "5:51" },
                dhuhr: { start: "12:03", end: "16:28" },
                asr: { start: "16:29", end: "18:09" },
                maghrib: { start: "18:14", end: "19:29" },
                isha: { start: "19:30", end: "4:29" }
                }
			}
        },
        4: { // এপ্রিল
            daysInMonth: 30,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "4:34", end: "5:50" },
                dhuhr: { start: "12:02", end: "16:28" },
                asr: { start: "16:29", end: "18:09" },
                maghrib: { start: "18:14", end: "19:29" },
                isha: { start: "19:30", end: "4:28" }
                },
				2: {
                fajr: { start: "4:33", end: "5:49" },
                dhuhr: { start: "12:02", end: "16:28" },
                asr: { start: "16:29", end: "18:10" },
                maghrib: { start: "18:15", end: "19:30" },
                isha: { start: "19:31", end: "4:27" }
                },
				3: {
                fajr: { start: "4:32", end: "5:48" },
                dhuhr: { start: "12:02", end: "16:29" },
                asr: { start: "16:30", end: "18:10" },
                maghrib: { start: "18:15", end: "19:30" },
                isha: { start: "19:31", end: "4:26" }
                },
				4: {
                fajr: { start: "4:31", end: "5:47" },
                dhuhr: { start: "12:01", end: "16:29" },
                asr: { start: "16:30", end: "18:10" },
                maghrib: { start: "18:15", end: "19:31" },
                isha: { start: "19:32", end: "4:25" }
                },
				5: {
                fajr: { start: "4:30", end: "5:46" },
                dhuhr: { start: "12:01", end: "16:29" },
                asr: { start: "16:30", end: "18:11" },
                maghrib: { start: "18:16", end: "19:31" },
                isha: { start: "19:32", end: "4:24" }
                },
				6: {
                fajr: { start: "4:29", end: "5:45" },
                dhuhr: { start: "12:01", end: "16:29" },
                asr: { start: "16:30", end: "18:11" },
                maghrib: { start: "18:16", end: "19:32" },
                isha: { start: "19:33", end: "4:23" }
                },
				7: {
                fajr: { start: "4:28", end: "5:44" },
                dhuhr: { start: "12:01", end: "16:29" },
                asr: { start: "16:30", end: "18:12" },
                maghrib: { start: "18:17", end: "19:32" },
                isha: { start: "19:33", end: "4:22" }
                },
				8: {
                fajr: { start: "4:27", end: "5:43" },
                dhuhr: { start: "12:00", end: "16:29" },
                asr: { start: "16:30", end: "18:12" },
                maghrib: { start: "18:17", end: "19:33" },
                isha: { start: "19:34", end: "4:21" }
                },
				9: {
                fajr: { start: "4:26", end: "5:42" },
                dhuhr: { start: "12:00", end: "16:29" },
                asr: { start: "16:30", end: "18:12" },
                maghrib: { start: "18:17", end: "19:33" },
                isha: { start: "19:34", end: "4:20" }
                },
				10: {
                fajr: { start: "4:25", end: "5:41" },
                dhuhr: { start: "12:00", end: "16:29" },
                asr: { start: "16:30", end: "18:13" },
                maghrib: { start: "18:18", end: "19:34" },
                isha: { start: "19:35", end: "4:19" }
                },
				11: {
                fajr: { start: "4:24", end: "5:40" },
                dhuhr: { start: "11:59", end: "16:29" },
                asr: { start: "16:30", end: "18:13" },
                maghrib: { start: "18:18", end: "19:35" },
                isha: { start: "19:36", end: "4:18" }
                },
				12: {
                fajr: { start: "4:23", end: "5:39" },
                dhuhr: { start: "11:59", end: "16:29" },
                asr: { start: "16:30", end: "18:14" },
                maghrib: { start: "18:19", end: "19:35" },
                isha: { start: "19:36", end: "4:17" }
                },
				13: {
                fajr: { start: "4:22", end: "5:38" },
                dhuhr: { start: "11:59", end: "16:29" },
                asr: { start: "16:30", end: "18:14" },
                maghrib: { start: "18:19", end: "19:36" },
                isha: { start: "19:37", end: "4:16" }
                },
				14: {
                fajr: { start: "4:21", end: "5:37" },
                dhuhr: { start: "11:59", end: "16:29" },
                asr: { start: "16:30", end: "18:14" },
                maghrib: { start: "18:19", end: "19:36" },
                isha: { start: "19:37", end: "4:14" }
                },
				15: {
                fajr: { start: "4:19", end: "5:36" },
                dhuhr: { start: "11:58", end: "16:29" },
                asr: { start: "16:30", end: "18:15" },
                maghrib: { start: "18:20", end: "19:37" },
                isha: { start: "19:38", end: "4:13" }
                },
				16: {
                fajr: { start: "4:18", end: "5:35" },
                dhuhr: { start: "11:58", end: "16:30" },
                asr: { start: "16:31", end: "18:15" },
                maghrib: { start: "18:20", end: "19:37" },
                isha: { start: "19:38", end: "4:12" }
                },
				17: {
                fajr: { start: "4:17", end: "5:34" },
                dhuhr: { start: "11:58", end: "16:30" },
                asr: { start: "16:31", end: "18:16" },
                maghrib: { start: "18:21", end: "19:38" },
                isha: { start: "19:39", end: "4:11" }
                },
				18: {
                fajr: { start: "4:16", end: "5:34" },
                dhuhr: { start: "11:58", end: "16:30" },
                asr: { start: "16:31", end: "18:16" },
                maghrib: { start: "18:21", end: "19:39" },
                isha: { start: "19:40", end: "4:10" }
                },
				19: {
                fajr: { start: "4:15", end: "5:33" },
                dhuhr: { start: "11:58", end: "16:30" },
                asr: { start: "16:31", end: "18:16" },
                maghrib: { start: "18:21", end: "19:39" },
                isha: { start: "19:40", end: "4:09" }
                },
				20: {
                fajr: { start: "4:14", end: "5:32" },
                dhuhr: { start: "11:57", end: "16:30" },
                asr: { start: "16:31", end: "18:17" },
                maghrib: { start: "18:22", end: "19:40" },
                isha: { start: "19:41", end: "4:08" }
                },
				21: {
                fajr: { start: "4:13", end: "5:31" },
                dhuhr: { start: "11:57", end: "16:30" },
                asr: { start: "16:31", end: "18:17" },
                maghrib: { start: "18:22", end: "19:40" },
                isha: { start: "19:41", end: "4:07" }
                },
				22: {
                fajr: { start: "4:12", end: "5:30" },
                dhuhr: { start: "11:57", end: "16:30" },
                asr: { start: "16:31", end: "18:18" },
                maghrib: { start: "18:23", end: "19:41" },
                isha: { start: "19:42", end: "4:06" }
                },
				23: {
                fajr: { start: "4:11", end: "5:29" },
                dhuhr: { start: "11:57", end: "16:30" },
                asr: { start: "16:31", end: "18:18" },
                maghrib: { start: "18:23", end: "19:42" },
                isha: { start: "19:43", end: "4:05" }
                },
				24: {
                fajr: { start: "4:10", end: "5:29" },
                dhuhr: { start: "11:57", end: "16:30" },
                asr: { start: "16:31", end: "18:19" },
                maghrib: { start: "18:24", end: "19:42" },
                isha: { start: "19:43", end: "4:04" }
                },
				25: {
                fajr: { start: "4:09", end: "5:28" },
                dhuhr: { start: "11:56", end: "16:30" },
                asr: { start: "16:31", end: "18:19" },
                maghrib: { start: "18:24", end: "19:43" },
                isha: { start: "19:44", end: "4:03" }
                },
				26: {
                fajr: { start: "4:08", end: "5:27" },
                dhuhr: { start: "11:56", end: "16:30" },
                asr: { start: "16:31", end: "18:20" },
                maghrib: { start: "18:25", end: "19:43" },
                isha: { start: "19:44", end: "4:02" }
                },
				27: {
                fajr: { start: "4:07", end: "5:26" },
                dhuhr: { start: "11:56", end: "16:30" },
                asr: { start: "16:31", end: "18:20" },
                maghrib: { start: "18:25", end: "19:44" },
                isha: { start: "19:45", end: "4:01" }
                },
				28: {
                fajr: { start: "4:06", end: "5:26" },
                dhuhr: { start: "11:56", end: "16:30" },
                asr: { start: "16:31", end: "18:20" },
                maghrib: { start: "18:25", end: "19:45" },
                isha: { start: "19:46", end: "4:01" }
                },
				29: {
                fajr: { start: "4:06", end: "5:25" },
                dhuhr: { start: "11:56", end: "16:30" },
                asr: { start: "16:31", end: "18:21" },
                maghrib: { start: "18:26", end: "19:45" },
                isha: { start: "19:46", end: "4:00" }
                },
				30: {
                fajr: { start: "4:05", end: "5:24" },
                dhuhr: { start: "11:56", end: "16:31" },
                asr: { start: "16:32", end: "18:21" },
                maghrib: { start: "18:26", end: "19:46" },
                isha: { start: "19:47", end: "3:59" }
                }
			}
        },
        5: { // মে
            daysInMonth: 31,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "4:04", end: "5:23" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:22" },
                maghrib: { start: "18:27", end: "19:47" },
                isha: { start: "19:48", end: "3:58" }
                },
				2: {
                fajr: { start: "4:03", end: "5:23" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:22" },
                maghrib: { start: "18:27", end: "19:47" },
                isha: { start: "19:48", end: "3:57" }
                },
				3: {
                fajr: { start: "4:02", end: "5:22" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:23" },
                maghrib: { start: "18:28", end: "19:48" },
                isha: { start: "19:49", end: "3:56" }
                },
				4: {
                fajr: { start: "4:01", end: "5:21" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:23" },
                maghrib: { start: "18:28", end: "19:49" },
                isha: { start: "19:50", end: "3:55" }
                },
				5: {
                fajr: { start: "4:00", end: "5:21" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:24" },
                maghrib: { start: "18:29", end: "19:49" },
                isha: { start: "19:50", end: "3:54" }
                },
				6: {
                fajr: { start: "3:59", end: "5:20" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:24" },
                maghrib: { start: "18:29", end: "19:50" },
                isha: { start: "19:51", end: "3:54" }
                },
				7: {
                fajr: { start: "3:59", end: "5:19" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:25" },
                maghrib: { start: "18:30", end: "19:51" },
                isha: { start: "19:52", end: "3:53" }
                },
				8: {
                fajr: { start: "3:58", end: "5:19" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:25" },
                maghrib: { start: "18:30", end: "19:51" },
                isha: { start: "19:52", end: "3:52" }
                },
				9: {
                fajr: { start: "3:57", end: "5:18" },
                dhuhr: { start: "11:55", end: "16:31" },
                asr: { start: "16:32", end: "18:26" },
                maghrib: { start: "18:31", end: "19:52" },
                isha: { start: "19:53", end: "3:51" }
                },
				10: {
                fajr: { start: "3:56", end: "5:18" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:26" },
                maghrib: { start: "18:31", end: "19:53" },
                isha: { start: "19:54", end: "3:50" }
                },
				11: {
                fajr: { start: "3:55", end: "5:17" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:27" },
                maghrib: { start: "18:32", end: "19:53" },
                isha: { start: "19:54", end: "3:50" }
                },
				12: {
                fajr: { start: "3:55", end: "5:17" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:27" },
                maghrib: { start: "18:32", end: "19:54" },
                isha: { start: "19:55", end: "3:49" }
                },
				13: {
                fajr: { start: "3:54", end: "5:16" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:28" },
                maghrib: { start: "18:33", end: "19:55" },
                isha: { start: "19:56", end: "3:48" }
                },
				14: {
                fajr: { start: "3:53", end: "5:16" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:28" },
                maghrib: { start: "18:33", end: "19:55" },
                isha: { start: "19:56", end: "3:48" }
                },
				15: {
                fajr: { start: "3:53", end: "5:15" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:29" },
                maghrib: { start: "18:34", end: "19:56" },
                isha: { start: "19:57", end: "3:47" }
                },
				16: {
                fajr: { start: "3:52", end: "5:15" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:29" },
                maghrib: { start: "18:34", end: "19:57" },
                isha: { start: "19:58", end: "3:46" }
                },
				17: {
                fajr: { start: "3:51", end: "5:14" },
                dhuhr: { start: "11:55", end: "16:32" },
                asr: { start: "16:33", end: "18:30" },
                maghrib: { start: "18:35", end: "19:58" },
                isha: { start: "19:59", end: "3:46" }
                },
				18: {
                fajr: { start: "3:51", end: "5:14" },
                dhuhr: { start: "11:55", end: "16:33" },
                asr: { start: "16:34", end: "18:30" },
                maghrib: { start: "18:35", end: "19:58" },
                isha: { start: "19:59", end: "3:45" }
                },
				19: {
                fajr: { start: "3:50", end: "5:13" },
                dhuhr: { start: "11:55", end: "16:33" },
                asr: { start: "16:34", end: "18:30" },
                maghrib: { start: "18:35", end: "19:59" },
                isha: { start: "20:00", end: "3:45" }
                },
				20: {
                fajr: { start: "3:50", end: "5:13" },
                dhuhr: { start: "11:55", end: "16:33" },
                asr: { start: "16:34", end: "18:31" },
                maghrib: { start: "18:36", end: "20:00" },
                isha: { start: "20:01", end: "3:44" }
                },
				21: {
                fajr: { start: "3:49", end: "5:13" },
                dhuhr: { start: "11:55", end: "16:33" },
                asr: { start: "16:34", end: "18:31" },
                maghrib: { start: "18:36", end: "20:00" },
                isha: { start: "20:01", end: "3:44" }
                },
				22: {
                fajr: { start: "3:49", end: "5:12" },
                dhuhr: { start: "11:55", end: "16:33" },
                asr: { start: "16:34", end: "18:32" },
                maghrib: { start: "18:37", end: "20:01" },
                isha: { start: "20:02", end: "3:43" }
                },
				23: {
                fajr: { start: "3:48", end: "5:12" },
                dhuhr: { start: "11:55", end: "16:33" },
                asr: { start: "16:34", end: "18:32" },
                maghrib: { start: "18:37", end: "20:02" },
                isha: { start: "20:03", end: "3:43" }
                },
				24: {
                fajr: { start: "3:48", end: "5:12" },
                dhuhr: { start: "11:55", end: "16:34" },
                asr: { start: "16:35", end: "18:33" },
                maghrib: { start: "18:38", end: "20:02" },
                isha: { start: "20:03", end: "3:42" }
                },
				25: {
                fajr: { start: "3:47", end: "5:11" },
                dhuhr: { start: "11:55", end: "16:34" },
                asr: { start: "16:35", end: "18:33" },
                maghrib: { start: "18:38", end: "20:03" },
                isha: { start: "20:04", end: "3:42" }
                },
				26: {
                fajr: { start: "3:47", end: "5:11" },
                dhuhr: { start: "11:55", end: "16:34" },
                asr: { start: "16:35", end: "18:34" },
                maghrib: { start: "18:39", end: "20:03" },
                isha: { start: "20:04", end: "3:41" }
                },
				27: {
                fajr: { start: "3:46", end: "5:11" },
                dhuhr: { start: "11:55", end: "16:34" },
                asr: { start: "16:35", end: "18:34" },
                maghrib: { start: "18:39", end: "20:04" },
                isha: { start: "20:05", end: "3:41" }
                },
				28: {
                fajr: { start: "3:46", end: "5:11" },
                dhuhr: { start: "11:56", end: "16:34" },
                asr: { start: "16:35", end: "18:35" },
                maghrib: { start: "18:40", end: "20:05" },
                isha: { start: "20:06", end: "3:41" }
                },
				29: {
                fajr: { start: "3:46", end: "5:10" },
                dhuhr: { start: "11:56", end: "16:35" },
                asr: { start: "16:36", end: "18:35" },
                maghrib: { start: "18:40", end: "20:05" },
                isha: { start: "20:06", end: "3:40" }
                },
				30: {
                fajr: { start: "3:45", end: "5:10" },
                dhuhr: { start: "11:56", end: "16:35" },
                asr: { start: "16:36", end: "18:36" },
                maghrib: { start: "18:41", end: "20:06" },
                isha: { start: "20:07", end: "3:40" }
                },
				31: {
                fajr: { start: "3:45", end: "5:10" },
                dhuhr: { start: "11:56", end: "16:35" },
                asr: { start: "16:36", end: "18:36" },
                maghrib: { start: "18:41", end: "20:07" },
                isha: { start: "20:08", end: "3:40" }
                }
			}
        },
        6: { // জুন
            daysInMonth: 30,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "3:45", end: "5:10" },
                dhuhr: { start: "11:56", end: "16:35" },
                asr: { start: "16:36", end: "18:37" },
                maghrib: { start: "18:42", end: "20:07" },
                isha: { start: "20:08", end: "3:39" }
                },
				2: {
                fajr: { start: "3:44", end: "5:10" },
                dhuhr: { start: "11:56", end: "16:35" },
                asr: { start: "16:36", end: "18:37" },
                maghrib: { start: "18:42", end: "20:08" },
                isha: { start: "20:09", end: "3:39" }
                },
				3: {
                fajr: { start: "3:44", end: "5:10" },
                dhuhr: { start: "11:56", end: "16:36" },
                asr: { start: "16:37", end: "18:37" },
                maghrib: { start: "18:42", end: "20:08" },
                isha: { start: "20:09", end: "3:39" }
                },
				4: {
                fajr: { start: "3:44", end: "5:10" },
                dhuhr: { start: "11:57", end: "16:36" },
                asr: { start: "16:37", end: "18:38" },
                maghrib: { start: "18:43", end: "20:09" },
                isha: { start: "20:10", end: "3:39" }
                },
				5: {
                fajr: { start: "3:44", end: "5:10" },
                dhuhr: { start: "11:57", end: "16:36" },
                asr: { start: "16:37", end: "18:38" },
                maghrib: { start: "18:43", end: "20:09" },
                isha: { start: "20:10", end: "3:38" }
                },
				6: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:57", end: "16:36" },
                asr: { start: "16:37", end: "18:39" },
                maghrib: { start: "18:44", end: "20:10" },
                isha: { start: "20:11", end: "3:38" }
                },
				7: {
                fajr: { start: "3:43", end: "5:09" },
                dhuhr: { start: "11:57", end: "16:36" },
                asr: { start: "16:37", end: "18:39" },
                maghrib: { start: "18:44", end: "20:10" },
                isha: { start: "20:11", end: "3:38" }
                },
				8: {
                fajr: { start: "3:43", end: "5:09" },
                dhuhr: { start: "11:57", end: "16:37" },
                asr: { start: "16:38", end: "18:39" },
                maghrib: { start: "18:44", end: "20:11" },
                isha: { start: "20:12", end: "3:38" }
                },
				9: {
                fajr: { start: "3:43", end: "5:09" },
                dhuhr: { start: "11:58", end: "16:37" },
                asr: { start: "16:38", end: "18:40" },
                maghrib: { start: "18:45", end: "20:11" },
                isha: { start: "20:12", end: "3:38" }
                },
				10: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:58", end: "16:37" },
                asr: { start: "16:38", end: "18:40" },
                maghrib: { start: "18:45", end: "20:12" },
                isha: { start: "20:13", end: "3:38" }
                },
				11: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:58", end: "16:37" },
                asr: { start: "16:38", end: "18:41" },
                maghrib: { start: "18:46", end: "20:12" },
                isha: { start: "20:13", end: "3:38" }
                },
				12: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:58", end: "16:38" },
                asr: { start: "16:39", end: "18:41" },
                maghrib: { start: "18:46", end: "20:13" },
                isha: { start: "20:14", end: "3:38" }
                },
				13: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:58", end: "16:38" },
                asr: { start: "16:39", end: "18:41" },
                maghrib: { start: "18:46", end: "20:13" },
                isha: { start: "20:14", end: "3:38" }
                },
				14: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:59", end: "16:38" },
                asr: { start: "16:39", end: "18:42" },
                maghrib: { start: "18:47", end: "20:13" },
                isha: { start: "20:14", end: "3:38" }
                },
				15: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:59", end: "16:38" },
                asr: { start: "16:39", end: "18:42" },
                maghrib: { start: "18:47", end: "20:14" },
                isha: { start: "20:15", end: "3:38" }
                },
				16: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:59", end: "16:39" },
                asr: { start: "16:40", end: "18:42" },
                maghrib: { start: "18:47", end: "20:14" },
                isha: { start: "20:15", end: "3:38" }
                },
				17: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:59", end: "16:39" },
                asr: { start: "16:40", end: "18:42" },
                maghrib: { start: "18:47", end: "20:14" },
                isha: { start: "20:15", end: "3:38" }
                },
				18: {
                fajr: { start: "3:43", end: "5:10" },
                dhuhr: { start: "11:59", end: "16:39" },
                asr: { start: "16:40", end: "18:43" },
                maghrib: { start: "18:48", end: "20:15" },
                isha: { start: "20:16", end: "3:39" }
                },
				19: {
                fajr: { start: "3:44", end: "5:11" },
                dhuhr: { start: "12:00", end: "16:39" },
                asr: { start: "16:40", end: "18:43" },
                maghrib: { start: "18:48", end: "20:15" },
                isha: { start: "20:16", end: "3:39" }
                },
				20: {
                fajr: { start: "3:44", end: "5:11" },
                dhuhr: { start: "12:00", end: "16:39" },
                asr: { start: "16:40", end: "18:43" },
                maghrib: { start: "18:48", end: "20:15" },
                isha: { start: "20:16", end: "3:39" }
                },
				21: {
                fajr: { start: "3:44", end: "5:11" },
                dhuhr: { start: "12:00", end: "16:40" },
                asr: { start: "16:41", end: "18:43" },
                maghrib: { start: "18:48", end: "20:15" },
                isha: { start: "20:16", end: "3:39" }
                },
				22: {
                fajr: { start: "3:44", end: "5:11" },
                dhuhr: { start: "12:00", end: "16:40" },
                asr: { start: "16:41", end: "18:44" },
                maghrib: { start: "18:49", end: "20:15" },
                isha: { start: "20:16", end: "3:39" }
                },
				23: {
                fajr: { start: "3:44", end: "5:11" },
                dhuhr: { start: "12:00", end: "16:40" },
                asr: { start: "16:41", end: "18:44" },
                maghrib: { start: "18:49", end: "20:16" },
                isha: { start: "20:17", end: "3:40" }
                },
				24: {
                fajr: { start: "3:45", end: "5:12" },
                dhuhr: { start: "12:01", end: "16:40" },
                asr: { start: "16:41", end: "18:44" },
                maghrib: { start: "18:49", end: "20:16" },
                isha: { start: "20:17", end: "3:40" }
                },
				25: {
                fajr: { start: "3:45", end: "5:12" },
                dhuhr: { start: "12:01", end: "16:40" },
                asr: { start: "16:41", end: "18:44" },
                maghrib: { start: "18:49", end: "20:16" },
                isha: { start: "20:17", end: "3:40" }
                },
				26: {
                fajr: { start: "3:45", end: "5:12" },
                dhuhr: { start: "12:01", end: "16:41" },
                asr: { start: "16:42", end: "18:44" },
                maghrib: { start: "18:49", end: "20:16" },
                isha: { start: "20:17", end: "3:41" }
                },
				27: {
                fajr: { start: "3:46", end: "5:12" },
                dhuhr: { start: "12:01", end: "16:41" },
                asr: { start: "16:42", end: "18:44" },
                maghrib: { start: "18:49", end: "20:16" },
                isha: { start: "20:17", end: "3:41" }
                },
				28: {
                fajr: { start: "3:46", end: "5:13" },
                dhuhr: { start: "12:02", end: "16:41" },
                asr: { start: "16:42", end: "18:44" },
                maghrib: { start: "18:49", end: "20:16" },
                isha: { start: "20:17", end: "3:41" }
                },
				29: {
                fajr: { start: "3:46", end: "5:13" },
                dhuhr: { start: "12:02", end: "16:41" },
                asr: { start: "16:42", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:42" }
                },
				30: {
                fajr: { start: "3:47", end: "5:13" },
                dhuhr: { start: "12:02", end: "16:41" },
                asr: { start: "16:42", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:42" }
                }
			}
        },
        7: { // জুলাই
            daysInMonth: 31,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "3:47", end: "5:14" },
                dhuhr: { start: "12:02", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:43" }
                },
				2: {
                fajr: { start: "3:48", end: "5:14" },
                dhuhr: { start: "12:02", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:43" }
                },
				3: {
                fajr: { start: "3:48", end: "5:14" },
                dhuhr: { start: "12:03", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:43" }
                },
				4: {
                fajr: { start: "3:48", end: "5:15" },
                dhuhr: { start: "12:03", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:44" }
                },
				5: {
                fajr: { start: "3:49", end: "5:15" },
                dhuhr: { start: "12:03", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:44" }
                },
				6: {
                fajr: { start: "3:49", end: "5:16" },
                dhuhr: { start: "12:03", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:16" },
                isha: { start: "20:17", end: "3:45" }
                },
				7: {
                fajr: { start: "3:50", end: "5:16" },
                dhuhr: { start: "12:03", end: "16:42" },
                asr: { start: "16:43", end: "18:45" },
                maghrib: { start: "18:50", end: "20:15" },
                isha: { start: "20:16", end: "3:45" }
                },
				8: {
                fajr: { start: "3:50", end: "5:16" },
                dhuhr: { start: "12:03", end: "16:43" },
                asr: { start: "16:44", end: "18:44" },
                maghrib: { start: "18:49", end: "20:15" },
                isha: { start: "20:16", end: "3:46" }
                },
				9: {
                fajr: { start: "3:51", end: "5:17" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:44" },
                maghrib: { start: "18:49", end: "20:15" },
                isha: { start: "20:16", end: "3:47" }
                },
				10: {
                fajr: { start: "3:52", end: "5:17" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:44" },
                maghrib: { start: "18:49", end: "20:15" },
                isha: { start: "20:16", end: "3:47" }
                },
				11: {
                fajr: { start: "3:52", end: "5:18" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:44" },
                maghrib: { start: "18:49", end: "20:14" },
                isha: { start: "20:15", end: "3:48" }
                },
				12: {
                fajr: { start: "3:53", end: "5:18" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:44" },
                maghrib: { start: "18:49", end: "20:14" },
                isha: { start: "20:15", end: "3:48" }
                },
				13: {
                fajr: { start: "3:53", end: "5:18" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:44" },
                maghrib: { start: "18:49", end: "20:14" },
                isha: { start: "20:15", end: "3:49" }
                },
				14: {
                fajr: { start: "3:54", end: "5:19" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:43" },
                maghrib: { start: "18:48", end: "20:13" },
                isha: { start: "20:14", end: "3:49" }
                },
				15: {
                fajr: { start: "3:54", end: "5:19" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:43" },
                maghrib: { start: "18:48", end: "20:13" },
                isha: { start: "20:14", end: "3:50" }
                },
				16: {
                fajr: { start: "3:55", end: "5:20" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:43" },
                maghrib: { start: "18:48", end: "20:13" },
                isha: { start: "20:14", end: "3:51" }
                },
				17: {
                fajr: { start: "3:56", end: "5:20" },
                dhuhr: { start: "12:04", end: "16:43" },
                asr: { start: "16:44", end: "18:43" },
                maghrib: { start: "18:48", end: "20:12" },
                isha: { start: "20:13", end: "3:51" }
                },
				18: {
                fajr: { start: "3:56", end: "5:21" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:42" },
                maghrib: { start: "18:47", end: "20:12" },
                isha: { start: "20:13", end: "3:52" }
                },
				19: {
                fajr: { start: "3:57", end: "5:21" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:42" },
                maghrib: { start: "18:47", end: "20:11" },
                isha: { start: "20:12", end: "3:52" }
                },
				20: {
                fajr: { start: "3:57", end: "5:21" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:42" },
                maghrib: { start: "18:47", end: "20:11" },
                isha: { start: "20:12", end: "3:53" }
                },
				21: {
                fajr: { start: "3:58", end: "5:22" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:41" },
                maghrib: { start: "18:46", end: "20:10" },
                isha: { start: "20:11", end: "3:54" }
                },
				22: {
                fajr: { start: "3:59", end: "5:22" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:41" },
                maghrib: { start: "18:46", end: "20:10" },
                isha: { start: "20:11", end: "3:54" }
                },
				23: {
                fajr: { start: "3:59", end: "5:23" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:41" },
                maghrib: { start: "18:46", end: "20:09" },
                isha: { start: "20:10", end: "3:55" }
                },
				24: {
                fajr: { start: "4:00", end: "5:23" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:40" },
                maghrib: { start: "18:45", end: "20:08" },
                isha: { start: "20:09", end: "3:56" }
                },
				25: {
                fajr: { start: "4:01", end: "5:24" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:40" },
                maghrib: { start: "18:45", end: "20:08" },
                isha: { start: "20:09", end: "3:56" }
                },
				26: {
                fajr: { start: "4:01", end: "5:24" },
                dhuhr: { start: "12:05", end: "16:43" },
                asr: { start: "16:44", end: "18:39" },
                maghrib: { start: "18:44", end: "20:07" },
                isha: { start: "20:08", end: "3:57" }
                },
				27: {
                fajr: { start: "4:02", end: "5:25" },
                dhuhr: { start: "12:05", end: "16:42" },
                asr: { start: "16:43", end: "18:39" },
                maghrib: { start: "18:44", end: "20:06" },
                isha: { start: "20:07", end: "3:57" }
                },
				28: {
                fajr: { start: "4:02", end: "5:25" },
                dhuhr: { start: "12:05", end: "16:42" },
                asr: { start: "16:43", end: "18:38" },
                maghrib: { start: "18:43", end: "20:06" },
                isha: { start: "20:07", end: "3:58" }
                },
				29: {
                fajr: { start: "4:03", end: "5:26" },
                dhuhr: { start: "12:05", end: "16:42" },
                asr: { start: "16:43", end: "18:38" },
                maghrib: { start: "18:43", end: "20:05" },
                isha: { start: "20:06", end: "3:59" }
                },
				30: {
                fajr: { start: "4:04", end: "5:26" },
                dhuhr: { start: "12:05", end: "16:42" },
                asr: { start: "16:43", end: "18:37" },
                maghrib: { start: "18:42", end: "20:04" },
                isha: { start: "20:05", end: "3:59" }
                },
				31: {
                fajr: { start: "4:04", end: "5:26" },
                dhuhr: { start: "12:05", end: "16:42" },
                asr: { start: "16:43", end: "18:37" },
                maghrib: { start: "18:42", end: "20:04" },
                isha: { start: "20:05", end: "4:00" }
                }
			}
        },
        8: { // আগস্ট
            daysInMonth: 31,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "4:05", end: "5:27" },
                dhuhr: { start: "12:05", end: "16:42" },
                asr: { start: "16:43", end: "18:36" },
                maghrib: { start: "18:41", end: "20:03" },
                isha: { start: "20:04", end: "4:01" }
                },
				2: {
                fajr: { start: "4:06", end: "5:27" },
                dhuhr: { start: "12:05", end: "16:41" },
                asr: { start: "16:42", end: "18:36" },
                maghrib: { start: "18:41", end: "20:02" },
                isha: { start: "20:03", end: "4:01" }
                },
				3: {
                fajr: { start: "4:06", end: "5:28" },
                dhuhr: { start: "12:05", end: "16:41" },
                asr: { start: "16:42", end: "18:35" },
                maghrib: { start: "18:40", end: "20:01" },
                isha: { start: "20:02", end: "4:02" }
                },
				4: {
                fajr: { start: "4:07", end: "5:28" },
                dhuhr: { start: "12:04", end: "16:41" },
                asr: { start: "16:42", end: "18:34" },
                maghrib: { start: "18:39", end: "20:00" },
                isha: { start: "20:01", end: "4:03" }
                },
				5: {
                fajr: { start: "4:08", end: "5:29" },
                dhuhr: { start: "12:04", end: "16:41" },
                asr: { start: "16:42", end: "18:34" },
                maghrib: { start: "18:39", end: "20:00" },
                isha: { start: "20:01", end: "4:03" }
                },
				6: {
                fajr: { start: "4:08", end: "5:29" },
                dhuhr: { start: "12:04", end: "16:40" },
                asr: { start: "16:41", end: "18:33" },
                maghrib: { start: "18:38", end: "19:59" },
                isha: { start: "20:00", end: "4:04" }
                },
				7: {
                fajr: { start: "4:09", end: "5:29" },
                dhuhr: { start: "12:04", end: "16:40" },
                asr: { start: "16:41", end: "18:32" },
                maghrib: { start: "18:37", end: "19:58" },
                isha: { start: "19:59", end: "4:04" }
                },
				8: {
                fajr: { start: "4:09", end: "5:30" },
                dhuhr: { start: "12:04", end: "16:40" },
                asr: { start: "16:41", end: "18:32" },
                maghrib: { start: "18:37", end: "19:57" },
                isha: { start: "19:58", end: "4:05" }
                },
				9: {
                fajr: { start: "4:10", end: "5:30" },
                dhuhr: { start: "12:04", end: "16:39" },
                asr: { start: "16:40", end: "18:31" },
                maghrib: { start: "18:36", end: "19:56" },
                isha: { start: "19:57", end: "4:06" }
                },
				10: {
                fajr: { start: "4:11", end: "5:31" },
                dhuhr: { start: "12:04", end: "16:39" },
                asr: { start: "16:40", end: "18:30" },
                maghrib: { start: "18:35", end: "19:55" },
                isha: { start: "19:56", end: "4:06" }
                },
				11: {
                fajr: { start: "4:11", end: "5:31" },
                dhuhr: { start: "12:04", end: "16:39" },
                asr: { start: "16:40", end: "18:30" },
                maghrib: { start: "18:35", end: "19:54" },
                isha: { start: "19:55", end: "4:07" }
                },
				12: {
                fajr: { start: "4:12", end: "5:32" },
                dhuhr: { start: "12:03", end: "16:38" },
                asr: { start: "16:39", end: "18:29" },
                maghrib: { start: "18:34", end: "19:53" },
                isha: { start: "19:54", end: "4:08" }
                },
				13: {
                fajr: { start: "4:13", end: "5:32" },
                dhuhr: { start: "12:03", end: "16:38" },
                asr: { start: "16:39", end: "18:28" },
                maghrib: { start: "18:33", end: "19:52" },
                isha: { start: "19:53", end: "4:08" }
                },
				14: {
                fajr: { start: "4:13", end: "5:32" },
                dhuhr: { start: "12:03", end: "16:38" },
                asr: { start: "16:39", end: "18:27" },
                maghrib: { start: "18:32", end: "19:51" },
                isha: { start: "19:52", end: "4:09" }
                },
				15: {
                fajr: { start: "4:14", end: "5:33" },
                dhuhr: { start: "12:03", end: "16:37" },
                asr: { start: "16:38", end: "18:27" },
                maghrib: { start: "18:32", end: "19:50" },
                isha: { start: "19:51", end: "4:09" }
                },
				16: {
                fajr: { start: "4:14", end: "5:33" },
                dhuhr: { start: "12:03", end: "16:37" },
                asr: { start: "16:38", end: "18:26" },
                maghrib: { start: "18:31", end: "19:49" },
                isha: { start: "19:50", end: "4:10" }
                },
				17: {
                fajr: { start: "4:15", end: "5:34" },
                dhuhr: { start: "12:03", end: "16:36" },
                asr: { start: "16:37", end: "18:25" },
                maghrib: { start: "18:30", end: "19:48" },
                isha: { start: "19:49", end: "4:10" }
                },
				18: {
                fajr: { start: "4:15", end: "5:34" },
                dhuhr: { start: "12:02", end: "16:36" },
                asr: { start: "16:37", end: "18:24" },
                maghrib: { start: "18:29", end: "19:47" },
                isha: { start: "19:48", end: "4:11" }
                },
				19: {
                fajr: { start: "4:16", end: "5:34" },
                dhuhr: { start: "12:02", end: "16:35" },
                asr: { start: "16:36", end: "18:23" },
                maghrib: { start: "18:28", end: "19:46" },
                isha: { start: "19:47", end: "4:12" }
                },
				20: {
                fajr: { start: "4:17", end: "5:35" },
                dhuhr: { start: "12:02", end: "16:35" },
                asr: { start: "16:36", end: "18:22" },
                maghrib: { start: "18:27", end: "19:45" },
                isha: { start: "19:46", end: "4:12" }
                },
				21: {
                fajr: { start: "4:17", end: "5:35" },
                dhuhr: { start: "12:02", end: "16:34" },
                asr: { start: "16:35", end: "18:22" },
                maghrib: { start: "18:27", end: "19:44" },
                isha: { start: "19:45", end: "4:13" }
                },
				22: {
                fajr: { start: "4:18", end: "5:35" },
                dhuhr: { start: "12:01", end: "16:34" },
                asr: { start: "16:35", end: "18:21" },
                maghrib: { start: "18:26", end: "19:43" },
                isha: { start: "19:44", end: "4:13" }
                },
				23: {
                fajr: { start: "4:18", end: "5:36" },
                dhuhr: { start: "12:01", end: "16:33" },
                asr: { start: "16:34", end: "18:20" },
                maghrib: { start: "18:25", end: "19:42" },
                isha: { start: "19:43", end: "4:14" }
                },
				24: {
                fajr: { start: "4:19", end: "5:36" },
                dhuhr: { start: "12:01", end: "16:33" },
                asr: { start: "16:34", end: "18:19" },
                maghrib: { start: "18:24", end: "19:41" },
                isha: { start: "19:42", end: "4:14" }
                },
				25: {
                fajr: { start: "4:19", end: "5:37" },
                dhuhr: { start: "12:01", end: "16:32" },
                asr: { start: "16:33", end: "18:18" },
                maghrib: { start: "18:23", end: "19:40" },
                isha: { start: "19:41", end: "4:15" }
                },
				26: {
                fajr: { start: "4:20", end: "5:37" },
                dhuhr: { start: "12:00", end: "16:32" },
                asr: { start: "16:33", end: "18:17" },
                maghrib: { start: "18:22", end: "19:39" },
                isha: { start: "19:40", end: "4:15" }
                },
				27: {
                fajr: { start: "4:20", end: "5:37" },
                dhuhr: { start: "12:00", end: "16:31" },
                asr: { start: "16:32", end: "18:16" },
                maghrib: { start: "18:21", end: "19:38" },
                isha: { start: "19:39", end: "4:16" }
                },
				28: {
                fajr: { start: "4:21", end: "5:38" },
                dhuhr: { start: "12:00", end: "16:30" },
                asr: { start: "16:31", end: "18:15" },
                maghrib: { start: "18:20", end: "19:37" },
                isha: { start: "19:38", end: "4:16" }
                },
				29: {
                fajr: { start: "4:21", end: "5:38" },
                dhuhr: { start: "11:59", end: "16:30" },
                asr: { start: "16:31", end: "18:14" },
                maghrib: { start: "18:19", end: "19:36" },
                isha: { start: "19:37", end: "4:17" }
                },
				30: {
                fajr: { start: "4:22", end: "5:38" },
                dhuhr: { start: "11:59", end: "16:29" },
                asr: { start: "16:30", end: "18:13" },
                maghrib: { start: "18:18", end: "19:35" },
                isha: { start: "19:36", end: "4:17" }
                },
				31: {
                fajr: { start: "4:22", end: "5:39" },
                dhuhr: { start: "11:59", end: "16:28" },
                asr: { start: "16:29", end: "18:12" },
                maghrib: { start: "18:17", end: "19:34" },
                isha: { start: "19:35", end: "4:18" }
                }
			}
        },
        9: { // সেপ্টেম্বর
            daysInMonth: 30,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "4:23", end: "5:39" },
                dhuhr: { start: "11:59", end: "16:28" },
                asr: { start: "16:29", end: "18:11" },
                maghrib: { start: "18:16", end: "19:32" },
                isha: { start: "19:33", end: "4:18" }
                },
				2: {
                fajr: { start: "4:23", end: "5:39" },
                dhuhr: { start: "11:58", end: "16:27" },
                asr: { start: "16:28", end: "18:10" },
                maghrib: { start: "18:15", end: "19:31" },
                isha: { start: "19:32", end: "4:19" }
                },
				3: {
                fajr: { start: "4:24", end: "5:40" },
                dhuhr: { start: "11:58", end: "16:27" },
                asr: { start: "16:28", end: "18:09" },
                maghrib: { start: "18:14", end: "19:30" },
                isha: { start: "19:31", end: "4:19" }
                },
				4: {
                fajr: { start: "4:24", end: "5:40" },
                dhuhr: { start: "11:58", end: "16:26" },
                asr: { start: "16:27", end: "18:08" },
                maghrib: { start: "18:13", end: "19:29" },
                isha: { start: "19:30", end: "4:20" }
                },
				5: {
                fajr: { start: "4:25", end: "5:40" },
                dhuhr: { start: "11:57", end: "16:25" },
                asr: { start: "16:26", end: "18:07" },
                maghrib: { start: "18:12", end: "19:28" },
                isha: { start: "19:29", end: "4:20" }
                },
                6: {
                fajr: { start: "4:25", end: "5:41" },
                dhuhr: { start: "11:57", end: "16:24" },
                asr: { start: "16:25", end: "18:06" },
                maghrib: { start: "18:11", end: "19:27" },
                isha: { start: "19:28", end: "4:21" }
                },
				7: {
                fajr: { start: "4:26", end: "5:41" },
                dhuhr: { start: "11:57", end: "16:24" },
                asr: { start: "16:25", end: "18:05" },
                maghrib: { start: "18:10", end: "19:26" },
                isha: { start: "19:27", end: "4:21" }
                },
				8: {
                fajr: { start: "4:26", end: "5:41" },
                dhuhr: { start: "11:56", end: "16:23" },
                asr: { start: "16:24", end: "18:04" },
                maghrib: { start: "18:09", end: "19:25" },
                isha: { start: "19:26", end: "4:21" }
                },
				9: {
                fajr: { start: "4:26", end: "5:42" },
                dhuhr: { start: "11:56", end: "16:22" },
                asr: { start: "16:23", end: "18:03" },
                maghrib: { start: "18:08", end: "19:23" },
                isha: { start: "19:24", end: "4:22" }
                },
				10: {
                fajr: { start: "4:27", end: "5:42" },
                dhuhr: { start: "11:56", end: "16:22" },
                asr: { start: "16:23", end: "18:02" },
                maghrib: { start: "18:07", end: "19:22" },
                isha: { start: "19:23", end: "4:22" }
                },
				11: {
                fajr: { start: "4:27", end: "5:42" },
                dhuhr: { start: "11:55", end: "16:21" },
                asr: { start: "16:22", end: "18:01" },
                maghrib: { start: "18:06", end: "19:21" },
                isha: { start: "19:22", end: "4:23" }
                },
				12: {
                fajr: { start: "4:28", end: "5:43" },
                dhuhr: { start: "11:55", end: "16:20" },
                asr: { start: "16:21", end: "18:00" },
                maghrib: { start: "18:05", end: "19:20" },
                isha: { start: "19:21", end: "4:23" }
                },
				13: {
                fajr: { start: "4:28", end: "5:43" },
                dhuhr: { start: "11:54", end: "16:19" },
                asr: { start: "16:20", end: "17:59" },
                maghrib: { start: "18:04", end: "19:19" },
                isha: { start: "19:20", end: "4:23" }
                },
				14: {
                fajr: { start: "4:28", end: "5:43" },
                dhuhr: { start: "11:54", end: "16:19" },
                asr: { start: "16:20", end: "17:58" },
                maghrib: { start: "18:03", end: "19:18" },
                isha: { start: "19:19", end: "4:24" }
                },
				15: {
                fajr: { start: "4:29", end: "5:44" },
                dhuhr: { start: "11:54", end: "16:18" },
                asr: { start: "16:19", end: "17:57" },
                maghrib: { start: "18:02", end: "19:17" },
                isha: { start: "19:18", end: "4:24" }
                },
				16: {
                fajr: { start: "4:29", end: "5:44" },
                dhuhr: { start: "11:53", end: "16:17" },
                asr: { start: "16:18", end: "17:56" },
                maghrib: { start: "18:01", end: "19:16" },
                isha: { start: "19:17", end: "4:25" }
                },
				17: {
                fajr: { start: "4:30", end: "5:44" },
                dhuhr: { start: "11:53", end: "16:16" },
                asr: { start: "16:17", end: "17:55" },
                maghrib: { start: "18:00", end: "19:15" },
                isha: { start: "19:16", end: "4:25" }
                },
				18: {
                fajr: { start: "4:30", end: "5:45" },
                dhuhr: { start: "11:53", end: "16:15" },
                asr: { start: "16:16", end: "17:54" },
                maghrib: { start: "17:59", end: "19:13" },
                isha: { start: "19:14", end: "4:25" }
                },
				19: {
                fajr: { start: "4:30", end: "5:45" },
                dhuhr: { start: "11:52", end: "16:15" },
                asr: { start: "16:16", end: "17:53" },
                maghrib: { start: "17:58", end: "19:12" },
                isha: { start: "19:13", end: "4:26" }
                },
				20: {
                fajr: { start: "4:31", end: "5:45" },
                dhuhr: { start: "11:52", end: "16:14" },
                asr: { start: "16:15", end: "17:52" },
                maghrib: { start: "17:57", end: "19:11" },
                isha: { start: "19:12", end: "4:26" }
                },
				21: {
                fajr: { start: "4:31", end: "5:46" },
                dhuhr: { start: "11:52", end: "16:13" },
                asr: { start: "16:14", end: "17:51" },
                maghrib: { start: "17:56", end: "19:10" },
                isha: { start: "19:11", end: "4:27" }
                },
				22: {
                fajr: { start: "4:32", end: "5:46" },
                dhuhr: { start: "11:51", end: "16:12" },
                asr: { start: "16:13", end: "17:50" },
                maghrib: { start: "17:55", end: "19:09" },
                isha: { start: "19:10", end: "4:27" }
                },
				23: {
                fajr: { start: "4:32", end: "5:46" },
                dhuhr: { start: "11:51", end: "16:11" },
                asr: { start: "16:12", end: "17:49" },
                maghrib: { start: "17:54", end: "19:08" },
                isha: { start: "19:09", end: "4:27" }
                },
				24: {
                fajr: { start: "4:32", end: "5:47" },
                dhuhr: { start: "11:51", end: "16:11" },
                asr: { start: "16:12", end: "17:48" },
                maghrib: { start: "17:53", end: "19:07" },
                isha: { start: "19:08", end: "4:28" }
                },
				25: {
                fajr: { start: "4:33", end: "5:47" },
                dhuhr: { start: "11:50", end: "16:10" },
                asr: { start: "16:11", end: "17:47" },
                maghrib: { start: "17:52", end: "19:06" },
                isha: { start: "19:07", end: "4:28" }
                },
				26: {
                fajr: { start: "4:33", end: "5:47" },
                dhuhr: { start: "11:50", end: "16:09" },
                asr: { start: "16:10", end: "17:46" },
                maghrib: { start: "17:51", end: "19:05" },
                isha: { start: "19:06", end: "4:28" }
                },
				27: {
                fajr: { start: "4:33", end: "5:48" },
                dhuhr: { start: "11:49", end: "16:08" },
                asr: { start: "16:09", end: "17:45" },
                maghrib: { start: "17:50", end: "19:04" },
                isha: { start: "19:05", end: "4:29" }
                },
				28: {
                fajr: { start: "4:34", end: "5:48" },
                dhuhr: { start: "11:49", end: "16:07" },
                asr: { start: "16:08", end: "17:44" },
                maghrib: { start: "17:49", end: "19:03" },
                isha: { start: "19:04", end: "4:29" }
                },
				29: {
                fajr: { start: "4:34", end: "5:48" },
                dhuhr: { start: "11:49", end: "16:07" },
                asr: { start: "16:08", end: "17:43" },
                maghrib: { start: "17:48", end: "19:02" },
                isha: { start: "19:03", end: "4:30" }
                },
				30: {
                fajr: { start: "4:35", end: "5:49" },
                dhuhr: { start: "11:48", end: "16:06" },
                asr: { start: "16:07", end: "17:42" },
                maghrib: { start: "17:47", end: "19:01" },
                isha: { start: "19:02", end: "4:30" }
                }
			}
        },
        10: { // অক্টোবর
            daysInMonth: 31,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "4:35", end: "5:49" },
                dhuhr: { start: "11:48", end: "16:05" },
                asr: { start: "16:06", end: "17:41" },
                maghrib: { start: "17:46", end: "19:00" },
                isha: { start: "19:01", end: "4:30" }
                },
				2: {
                fajr: { start: "4:35", end: "5:49" },
                dhuhr: { start: "11:48", end: "16:04" },
                asr: { start: "16:05", end: "17:40" },
                maghrib: { start: "17:45", end: "18:59" },
                isha: { start: "19:00", end: "4:31" }
                },
				3: {
                fajr: { start: "4:36", end: "5:50" },
                dhuhr: { start: "11:48", end: "16:03" },
                asr: { start: "16:04", end: "17:39" },
                maghrib: { start: "17:44", end: "18:58" },
                isha: { start: "18:59", end: "4:31" }
                },
				4: {
                fajr: { start: "4:36", end: "5:50" },
                dhuhr: { start: "11:47", end: "16:02" },
                asr: { start: "16:03", end: "17:38" },
                maghrib: { start: "17:43", end: "18:57" },
                isha: { start: "18:58", end: "4:31" }
                },
				5: {
                fajr: { start: "4:36", end: "5:51" },
                dhuhr: { start: "11:47", end: "16:02" },
                asr: { start: "16:03", end: "17:37" },
                maghrib: { start: "17:42", end: "18:56" },
                isha: { start: "18:57", end: "4:32" }
                },
				6: {
                fajr: { start: "4:37", end: "5:51" },
                dhuhr: { start: "11:47", end: "16:01" },
                asr: { start: "16:02", end: "17:36" },
                maghrib: { start: "17:41", end: "18:55" },
                isha: { start: "18:56", end: "4:32" }
                },
				7: {
                fajr: { start: "4:37", end: "5:51" },
                dhuhr: { start: "11:46", end: "16:00" },
                asr: { start: "16:01", end: "17:35" },
                maghrib: { start: "17:40", end: "18:54" },
                isha: { start: "18:55", end: "4:33" }
                },
				8: {
                fajr: { start: "4:38", end: "5:52" },
                dhuhr: { start: "11:46", end: "15:59" },
                asr: { start: "16:00", end: "17:34" },
                maghrib: { start: "17:39", end: "18:53" },
                isha: { start: "18:54", end: "4:33" }
                },
				9: {
                fajr: { start: "4:38", end: "5:52" },
                dhuhr: { start: "11:46", end: "15:58" },
                asr: { start: "15:59", end: "17:33" },
                maghrib: { start: "17:38", end: "18:52" },
                isha: { start: "18:53", end: "4:33" }
                },
				10: {
                fajr: { start: "4:38", end: "5:53" },
                dhuhr: { start: "11:45", end: "15:58" },
                asr: { start: "15:59", end: "17:32" },
                maghrib: { start: "17:37", end: "18:51" },
                isha: { start: "18:52", end: "4:34" }
                },
				11: {
                fajr: { start: "4:39", end: "5:53" },
                dhuhr: { start: "11:45", end: "15:57" },
                asr: { start: "15:58", end: "17:31" },
                maghrib: { start: "17:36", end: "18:50" },
                isha: { start: "18:51", end: "4:34" }
                },
				12: {
                fajr: { start: "4:39", end: "5:53" },
                dhuhr: { start: "11:45", end: "15:56" },
                asr: { start: "15:57", end: "17:30" },
                maghrib: { start: "17:35", end: "18:49" },
                isha: { start: "18:50", end: "4:34" }
                },
				13: {
                fajr: { start: "4:39", end: "5:54" },
                dhuhr: { start: "11:45", end: "15:55" },
                asr: { start: "15:56", end: "17:29" },
                maghrib: { start: "17:34", end: "18:48" },
                isha: { start: "18:49", end: "4:35" }
                },
				14: {
                fajr: { start: "4:40", end: "5:54" },
                dhuhr: { start: "11:44", end: "15:54" },
                asr: { start: "15:55", end: "17:28" },
                maghrib: { start: "17:33", end: "18:47" },
                isha: { start: "18:48", end: "4:35" }
                },
				15: {
                fajr: { start: "4:40", end: "5:55" },
                dhuhr: { start: "11:44", end: "15:54" },
                asr: { start: "15:55", end: "17:27" },
                maghrib: { start: "17:32", end: "18:47" },
                isha: { start: "18:48", end: "4:36" }
                },
				16: {
                fajr: { start: "4:41", end: "5:55" },
                dhuhr: { start: "11:44", end: "15:53" },
                asr: { start: "15:54", end: "17:26" },
                maghrib: { start: "17:31", end: "18:46" },
                isha: { start: "18:47", end: "4:36" }
                },
				17: {
                fajr: { start: "4:41", end: "5:56" },
                dhuhr: { start: "11:44", end: "15:52" },
                asr: { start: "15:53", end: "17:25" },
                maghrib: { start: "17:30", end: "18:45" },
                isha: { start: "18:46", end: "4:36" }
                },
				18: {
                fajr: { start: "4:41", end: "5:56" },
                dhuhr: { start: "11:44", end: "15:51" },
                asr: { start: "15:52", end: "17:25" },
                maghrib: { start: "17:30", end: "18:44" },
                isha: { start: "18:45", end: "4:37" }
                },
				19: {
                fajr: { start: "4:42", end: "5:56" },
                dhuhr: { start: "11:43", end: "15:51" },
                asr: { start: "15:52", end: "17:24" },
                maghrib: { start: "17:29", end: "18:43" },
                isha: { start: "18:44", end: "4:37" }
                },
				20: {
                fajr: { start: "4:42", end: "5:57" },
                dhuhr: { start: "11:43", end: "15:50" },
                asr: { start: "15:51", end: "17:23" },
                maghrib: { start: "17:28", end: "18:43" },
                isha: { start: "18:44", end: "4:38" }
                },
				21: {
                fajr: { start: "4:43", end: "5:57" },
                dhuhr: { start: "11:43", end: "15:49" },
                asr: { start: "15:50", end: "17:22" },
                maghrib: { start: "17:27", end: "18:42" },
                isha: { start: "18:43", end: "4:38" }
                },
				22: {
                fajr: { start: "4:43", end: "5:58" },
                dhuhr: { start: "11:43", end: "15:48" },
                asr: { start: "15:49", end: "17:21" },
                maghrib: { start: "17:26", end: "18:41" },
                isha: { start: "18:42", end: "4:38" }
                },
				23: {
                fajr: { start: "4:43", end: "5:58" },
                dhuhr: { start: "11:43", end: "15:48" },
                asr: { start: "15:49", end: "17:21" },
                maghrib: { start: "17:26", end: "18:40" },
                isha: { start: "18:41", end: "4:39" }
                },
				24: {
                fajr: { start: "4:44", end: "5:59" },
                dhuhr: { start: "11:43", end: "15:47" },
                asr: { start: "15:48", end: "17:20" },
                maghrib: { start: "17:25", end: "18:40" },
                isha: { start: "18:41", end: "4:39" }
                },
				25: {
                fajr: { start: "4:44", end: "5:59" },
                dhuhr: { start: "11:42", end: "15:46" },
                asr: { start: "15:47", end: "17:19" },
                maghrib: { start: "17:24", end: "18:39" },
                isha: { start: "18:40", end: "4:40" }
                },
				26: {
                fajr: { start: "4:45", end: "6:00" },
                dhuhr: { start: "11:42", end: "15:46" },
                asr: { start: "15:47", end: "17:18" },
                maghrib: { start: "17:23", end: "18:38" },
                isha: { start: "18:39", end: "4:40" }
                },
				27: {
                fajr: { start: "4:45", end: "6:00" },
                dhuhr: { start: "11:42", end: "15:45" },
                asr: { start: "15:46", end: "17:18" },
                maghrib: { start: "17:23", end: "18:38" },
                isha: { start: "18:39", end: "4:41" }
                },
				28: {
                fajr: { start: "4:46", end: "6:01" },
                dhuhr: { start: "11:42", end: "15:44" },
                asr: { start: "15:45", end: "17:17" },
                maghrib: { start: "17:22", end: "18:37" },
                isha: { start: "18:38", end: "4:41" }
                },
				29: {
                fajr: { start: "4:46", end: "6:01" },
                dhuhr: { start: "11:42", end: "15:44" },
                asr: { start: "15:45", end: "17:16" },
                maghrib: { start: "17:21", end: "18:37" },
                isha: { start: "18:38", end: "4:41" }
                },
				30: {
                fajr: { start: "4:46", end: "6:02" },
                dhuhr: { start: "11:42", end: "15:43" },
                asr: { start: "15:44", end: "17:16" },
                maghrib: { start: "17:21", end: "18:36" },
                isha: { start: "18:37", end: "4:42" }
                },
				31: {
                fajr: { start: "4:47", end: "6:03" },
                dhuhr: { start: "11:42", end: "15:43" },
                asr: { start: "15:44", end: "17:15" },
                maghrib: { start: "17:20", end: "18:36" },
                isha: { start: "18:37", end: "4:42" }
                }
			}
        },
        11: { // নভেম্বর
            daysInMonth: 30,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "4:47", end: "6:03" },
                dhuhr: { start: "11:42", end: "15:42" },
                asr: { start: "15:43", end: "17:14" },
                maghrib: { start: "17:19", end: "18:35" },
                isha: { start: "18:36", end: "4:43" }
                },
				2: {
                fajr: { start: "4:48", end: "6:04" },
                dhuhr: { start: "11:42", end: "15:42" },
                asr: { start: "15:43", end: "17:14" },
                maghrib: { start: "17:19", end: "18:34" },
                isha: { start: "18:35", end: "4:43" }
                },
				3: {
                fajr: { start: "4:48", end: "6:04" },
                dhuhr: { start: "11:42", end: "15:41" },
                asr: { start: "15:42", end: "17:13" },
                maghrib: { start: "17:18", end: "18:34" },
                isha: { start: "18:35", end: "4:44" }
                },
				4: {
                fajr: { start: "4:49", end: "6:05" },
                dhuhr: { start: "11:42", end: "15:40" },
                asr: { start: "15:41", end: "17:12" },
                maghrib: { start: "17:17", end: "18:34" },
                isha: { start: "18:35", end: "4:44" }
                },
				5: {
                fajr: { start: "4:49", end: "6:06" },
                dhuhr: { start: "11:42", end: "15:40" },
                asr: { start: "15:41", end: "17:12" },
                maghrib: { start: "17:17", end: "18:33" },
                isha: { start: "18:34", end: "4:45" }
                },
				6: {
                fajr: { start: "4:50", end: "6:06" },
                dhuhr: { start: "11:42", end: "15:39" },
                asr: { start: "15:40", end: "17:11" },
                maghrib: { start: "17:16", end: "18:33" },
                isha: { start: "18:34", end: "4:45" }
                },
				7: {
                fajr: { start: "4:50", end: "6:07" },
                dhuhr: { start: "11:42", end: "15:39" },
                asr: { start: "15:40", end: "17:11" },
                maghrib: { start: "17:16", end: "18:32" },
                isha: { start: "18:33", end: "4:46" }
                },
				8: {
                fajr: { start: "4:51", end: "6:07" },
                dhuhr: { start: "11:42", end: "15:38" },
                asr: { start: "15:39", end: "17:10" },
                maghrib: { start: "17:15", end: "18:32" },
                isha: { start: "18:33", end: "4:46" }
                },
				9: {
                fajr: { start: "4:51", end: "6:08" },
                dhuhr: { start: "11:42", end: "15:38" },
                asr: { start: "15:39", end: "17:10" },
                maghrib: { start: "17:15", end: "18:32" },
                isha: { start: "18:33", end: "4:47" }
                },
				10: {
                fajr: { start: "4:52", end: "6:09" },
                dhuhr: { start: "11:42", end: "15:38" },
                asr: { start: "15:39", end: "17:10" },
                maghrib: { start: "17:15", end: "18:31" },
                isha: { start: "18:32", end: "4:47" }
                },
				11: {
                fajr: { start: "4:52", end: "6:09" },
                dhuhr: { start: "11:42", end: "15:37" },
                asr: { start: "15:38", end: "17:09" },
                maghrib: { start: "17:14", end: "18:31" },
                isha: { start: "18:32", end: "4:48" }
                },
				12: {
                fajr: { start: "4:53", end: "6:10" },
                dhuhr: { start: "11:42", end: "15:37" },
                asr: { start: "15:38", end: "17:09" },
                maghrib: { start: "17:14", end: "18:31" },
                isha: { start: "18:32", end: "4:49" }
                },
				13: {
                fajr: { start: "4:54", end: "6:11" },
                dhuhr: { start: "11:42", end: "15:37" },
                asr: { start: "15:38", end: "17:08" },
                maghrib: { start: "17:13", end: "18:30" },
                isha: { start: "18:31", end: "4:49" }
                },
				14: {
                fajr: { start: "4:54", end: "6:11" },
                dhuhr: { start: "11:43", end: "15:36" },
                asr: { start: "15:37", end: "17:08" },
                maghrib: { start: "17:13", end: "18:30" },
                isha: { start: "18:31", end: "4:50" }
                },
				15: {
                fajr: { start: "4:55", end: "6:12" },
                dhuhr: { start: "11:43", end: "15:36" },
                asr: { start: "15:37", end: "17:08" },
                maghrib: { start: "17:13", end: "18:30" },
                isha: { start: "18:31", end: "4:50" }
                },
				16: {
                fajr: { start: "4:55", end: "6:13" },
                dhuhr: { start: "11:43", end: "15:36" },
                asr: { start: "15:37", end: "17:07" },
                maghrib: { start: "17:12", end: "18:30" },
                isha: { start: "18:31", end: "4:51" }
                },
				17: {
                fajr: { start: "4:56", end: "6:13" },
                dhuhr: { start: "11:43", end: "15:35" },
                asr: { start: "15:36", end: "17:07" },
                maghrib: { start: "17:12", end: "18:30" },
                isha: { start: "18:31", end: "4:51" }
                },
				18: {
                fajr: { start: "4:56", end: "6:14" },
                dhuhr: { start: "11:43", end: "15:35" },
                asr: { start: "15:36", end: "17:07" },
                maghrib: { start: "17:12", end: "18:29" },
                isha: { start: "18:30", end: "4:52" }
                },
				19: {
                fajr: { start: "4:57", end: "6:15" },
                dhuhr: { start: "11:44", end: "15:35" },
                asr: { start: "15:36", end: "17:07" },
                maghrib: { start: "17:12", end: "18:29" },
                isha: { start: "18:30", end: "4:52" }
                },
				20: {
                fajr: { start: "4:57", end: "6:15" },
                dhuhr: { start: "11:44", end: "15:35" },
                asr: { start: "15:36", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:53" }
                },
				21: {
                fajr: { start: "4:58", end: "6:16" },
                dhuhr: { start: "11:44", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:54" }
                },
				22: {
                fajr: { start: "4:59", end: "6:17" },
                dhuhr: { start: "11:44", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:54" }
                },
				23: {
                fajr: { start: "4:59", end: "6:17" },
                dhuhr: { start: "11:45", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:55" }
                },
				24: {
                fajr: { start: "5:00", end: "6:18" },
                dhuhr: { start: "11:45", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:55" }
                },
				25: {
                fajr: { start: "5:00", end: "6:19" },
                dhuhr: { start: "11:45", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:56" }
                },
				26: {
                fajr: { start: "5:01", end: "6:19" },
                dhuhr: { start: "11:45", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:57" }
                },
				27: {
                fajr: { start: "5:02", end: "6:20" },
                dhuhr: { start: "11:46", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:57" }
                },
				28: {
                fajr: { start: "5:02", end: "6:21" },
                dhuhr: { start: "11:46", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:58" }
                },
				29: {
                fajr: { start: "5:03", end: "6:22" },
                dhuhr: { start: "11:46", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:58" }
                },
				30: {
                fajr: { start: "5:03", end: "6:22" },
                dhuhr: { start: "11:47", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:29" },
                isha: { start: "18:30", end: "4:59" }
                }
			}
        },
        12: { // ডিসেম্বর
            daysInMonth: 31,
            defaultTimes: {
                
            },
            specificDays: {
				1: {
                fajr: { start: "5:04", end: "6:23" },
                dhuhr: { start: "11:47", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:30" },
                isha: { start: "18:31", end: "5:00" }
                },
				2: {
                fajr: { start: "5:05", end: "6:24" },
                dhuhr: { start: "11:48", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:30" },
                isha: { start: "18:31", end: "5:00" }
                },
				3: {
                fajr: { start: "5:05", end: "6:24" },
                dhuhr: { start: "11:48", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:30" },
                isha: { start: "18:31", end: "5:01" }
                },
				4: {
                fajr: { start: "5:06", end: "6:25" },
                dhuhr: { start: "11:48", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:30" },
                isha: { start: "18:31", end: "5:01" }
                },
				5: {
                fajr: { start: "5:06", end: "6:26" },
                dhuhr: { start: "11:49", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:30" },
                isha: { start: "18:31", end: "5:02" }
                },
				6: {
                fajr: { start: "5:07", end: "6:26" },
                dhuhr: { start: "11:49", end: "15:34" },
                asr: { start: "15:35", end: "17:06" },
                maghrib: { start: "17:11", end: "18:31" },
                isha: { start: "18:32", end: "5:03" }
                },
				7: {
                fajr: { start: "5:08", end: "6:27" },
                dhuhr: { start: "11:50", end: "15:35" },
                asr: { start: "15:36", end: "17:06" },
                maghrib: { start: "17:11", end: "18:31" },
                isha: { start: "18:32", end: "5:03" }
                },
				8: {
                fajr: { start: "5:08", end: "6:28" },
                dhuhr: { start: "11:50", end: "15:35" },
                asr: { start: "15:36", end: "17:07" },
                maghrib: { start: "17:12", end: "18:31" },
                isha: { start: "18:32", end: "5:04" }
                },
				9: {
                fajr: { start: "5:09", end: "6:28" },
                dhuhr: { start: "11:50", end: "15:35" },
                asr: { start: "15:36", end: "17:07" },
                maghrib: { start: "17:12", end: "18:31" },
                isha: { start: "18:32", end: "5:04" }
                },
				10: {
                fajr: { start: "5:09", end: "6:29" },
                dhuhr: { start: "11:51", end: "15:35" },
                asr: { start: "15:36", end: "17:07" },
                maghrib: { start: "17:12", end: "18:32" },
                isha: { start: "18:33", end: "5:05" }
                },
				11: {
                fajr: { start: "5:10", end: "6:30" },
                dhuhr: { start: "11:51", end: "15:36" },
                asr: { start: "15:37", end: "17:07" },
                maghrib: { start: "17:12", end: "18:32" },
                isha: { start: "18:33", end: "5:06" }
                },
				12: {
                fajr: { start: "5:11", end: "6:30" },
                dhuhr: { start: "11:52", end: "15:36" },
                asr: { start: "15:37", end: "17:08" },
                maghrib: { start: "17:13", end: "18:32" },
                isha: { start: "18:33", end: "5:06" }
                },
				13: {
                fajr: { start: "5:11", end: "6:31" },
                dhuhr: { start: "11:52", end: "15:36" },
                asr: { start: "15:37", end: "17:08" },
                maghrib: { start: "17:13", end: "18:33" },
                isha: { start: "18:34", end: "5:07" }
                },
				14: {
                fajr: { start: "5:12", end: "6:31" },
                dhuhr: { start: "11:53", end: "15:37" },
                asr: { start: "15:38", end: "17:08" },
                maghrib: { start: "17:13", end: "18:33" },
                isha: { start: "18:34", end: "5:07" }
                },
				15: {
                fajr: { start: "5:12", end: "6:32" },
                dhuhr: { start: "11:53", end: "15:37" },
                asr: { start: "15:38", end: "17:09" },
                maghrib: { start: "17:14", end: "18:34" },
                isha: { start: "18:35", end: "5:08" }
                },
				16: {
                fajr: { start: "5:13", end: "6:33" },
                dhuhr: { start: "11:54", end: "15:37" },
                asr: { start: "15:38", end: "17:09" },
                maghrib: { start: "17:14", end: "18:34" },
                isha: { start: "18:35", end: "5:08" }
                },
				17: {
                fajr: { start: "5:13", end: "6:33" },
                dhuhr: { start: "11:54", end: "15:38" },
                asr: { start: "15:39", end: "17:10" },
                maghrib: { start: "17:15", end: "18:34" },
                isha: { start: "18:35", end: "5:09" }
                },
				18: {
                fajr: { start: "5:14", end: "6:34" },
                dhuhr: { start: "11:55", end: "15:38" },
                asr: { start: "15:39", end: "17:10" },
                maghrib: { start: "17:15", end: "18:35" },
                isha: { start: "18:36", end: "5:09" }
                },
				19: {
                fajr: { start: "5:14", end: "6:34" },
                dhuhr: { start: "11:55", end: "15:39" },
                asr: { start: "15:40", end: "17:10" },
                maghrib: { start: "17:15", end: "18:35" },
                isha: { start: "18:36", end: "5:10" }
                },
				20: {
                fajr: { start: "5:15", end: "6:35" },
                dhuhr: { start: "11:56", end: "15:39" },
                asr: { start: "15:40", end: "17:11" },
                maghrib: { start: "17:16", end: "18:36" },
                isha: { start: "18:37", end: "5:11" }
                },
				21: {
                fajr: { start: "5:16", end: "6:35" },
                dhuhr: { start: "11:56", end: "15:40" },
                asr: { start: "15:41", end: "17:11" },
                maghrib: { start: "17:16", end: "18:36" },
                isha: { start: "18:37", end: "5:11" }
                },
				22: {
                fajr: { start: "5:16", end: "6:36" },
                dhuhr: { start: "11:57", end: "15:40" },
                asr: { start: "15:41", end: "17:12" },
                maghrib: { start: "17:17", end: "18:37" },
                isha: { start: "18:38", end: "5:11" }
                },
				23: {
                fajr: { start: "5:16", end: "6:36" },
                dhuhr: { start: "11:57", end: "15:41" },
                asr: { start: "15:42", end: "17:12" },
                maghrib: { start: "17:17", end: "18:37" },
                isha: { start: "18:38", end: "5:12" }
                },
				24: {
                fajr: { start: "5:17", end: "6:37" },
                dhuhr: { start: "11:58", end: "15:41" },
                asr: { start: "15:42", end: "17:13" },
                maghrib: { start: "17:18", end: "18:38" },
                isha: { start: "18:39", end: "5:12" }
                },
				25: {
                fajr: { start: "5:17", end: "6:37" },
                dhuhr: { start: "11:58", end: "15:42" },
                asr: { start: "15:43", end: "17:14" },
                maghrib: { start: "17:19", end: "18:38" },
                isha: { start: "18:39", end: "5:13" }
                },
				26: {
                fajr: { start: "5:18", end: "6:38" },
                dhuhr: { start: "11:59", end: "15:42" },
                asr: { start: "15:43", end: "17:14" },
                maghrib: { start: "17:19", end: "18:39" },
                isha: { start: "18:40", end: "5:13" }
                },
				27: {
                fajr: { start: "5:18", end: "6:38" },
                dhuhr: { start: "11:59", end: "15:43" },
                asr: { start: "15:44", end: "17:15" },
                maghrib: { start: "17:20", end: "18:39" },
                isha: { start: "18:40", end: "5:14" }
                },
				28: {
                fajr: { start: "5:19", end: "6:38" },
                dhuhr: { start: "12:00", end: "15:43" },
                asr: { start: "15:44", end: "17:15" },
                maghrib: { start: "17:20", end: "18:40" },
                isha: { start: "18:41", end: "5:14" }
                },
				29: {
                fajr: { start: "5:19", end: "6:39" },
                dhuhr: { start: "12:00", end: "15:44" },
                asr: { start: "15:45", end: "17:16" },
                maghrib: { start: "17:21", end: "18:41" },
                isha: { start: "18:42", end: "5:15" }
                },
				30: {
                fajr: { start: "5:20", end: "6:39" },
                dhuhr: { start: "12:01", end: "15:45" },
                asr: { start: "15:46", end: "17:17" },
                maghrib: { start: "17:22", end: "18:41" },
                isha: { start: "18:42", end: "5:15" }
                },
				31: {
                fajr: { start: "5:20", end: "6:40" },
                dhuhr: { start: "12:01", end: "15:45" },
                asr: { start: "15:46", end: "17:17" },
                maghrib: { start: "17:22", end: "18:42" },
                isha: { start: "18:43", end: "5:15" }
                }
			}
        }
    },

    // আজকের তারিখ অনুযায়ী সময় পাওয়া
    getTodayTimes() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        return this.getSpecificDayTimes(month, day);
    },

    // নির্দিষ্ট মাসের সময়সূচি পাওয়া
    getMonthTimes(month) {
        return this.monthlyTimes[month] || this.monthlyTimes[1];
    },

    // নির্দিষ্ট দিনের সময়সূচি পাওয়া
    getSpecificDayTimes(month, day) {
        const monthData = this.monthlyTimes[month] || this.monthlyTimes[1];
        const defaultTimes = monthData.defaultTimes;
        const specificDayTimes = monthData.specificDays[day] || {};
        
        // ডিফল্ট এবং স্পেসিফিক সময়কে মার্জ করা
        return {
            fajr: specificDayTimes.fajr || defaultTimes.fajr,
            dhuhr: specificDayTimes.dhuhr || defaultTimes.dhuhr,
            asr: specificDayTimes.asr || defaultTimes.asr,
            maghrib: specificDayTimes.maghrib || defaultTimes.maghrib,
            isha: specificDayTimes.isha || defaultTimes.isha
        };
    }
};

// স্ট্যাটিক ডাটা
const prayerNames = {
    fajr: "ফজর",
    dhuhr: "যোহর",
    asr: "আসর",
    maghrib: "মাগরিব",
    isha: "এশা"
};

const monthNames = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", 
    "মে", "জুন", "জুলাই", "আগস্ট", 
    "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
];

// বাংলা সংখ্যায় কনভার্ট করার ফাংশন
function convertToBanglaNumber(number) {
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().split('').map(digit => banglaNumbers[digit]).join('');
}

// 24 ঘন্টার ফরম্যাট থেকে 12 ঘন্টার ফরম্যাটে কনভার্ট করার ফাংশন
function convertTo12Hour(time24) {
    const [hour, minute] = time24.split(':').map(Number);
    let hour12 = hour;

    if (hour > 12) {
        hour12 = hour - 12;
    }
    if (hour === 0) {
        hour12 = 12;
    }

    return `${hour12}:${minute.toString().padStart(2, '0')}`;
}

// সময় ফরম্যাট করার ফাংশন আপডেট
function formatTimeToBangla(time) {
    return convertTo12Hour(time);
}

// আজকের তারিখ অনুযায়ী সময় পাওয়া
function getTodayTimes() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const times = prayerTimeCalculator.getSpecificDayTimes(month, day);
    
    // সময়গুলো বাংলায় কনভার্ট করা
    return {
        fajr: { 
            start: formatTimeToBangla(times.fajr.start), 
            end: formatTimeToBangla(times.fajr.end) 
        },
        dhuhr: { 
            start: formatTimeToBangla(times.dhuhr.start), 
            end: formatTimeToBangla(times.dhuhr.end) 
        },
        asr: { 
            start: formatTimeToBangla(times.asr.start), 
            end: formatTimeToBangla(times.asr.end) 
        },
        maghrib: { 
            start: formatTimeToBangla(times.maghrib.start), 
            end: formatTimeToBangla(times.maghrib.end) 
        },
        isha: { 
            start: formatTimeToBangla(times.isha.start), 
            end: formatTimeToBangla(times.isha.end) 
        }
    };
}

// নির্দিষ্ট দিনের সময়সূচি পাওয়া
function getSpecificDayTimes(month, day) {
    const monthData = prayerTimeCalculator.monthlyTimes[month];
    const times = monthData.specificDays[day];
    
    // সময়গুলো বাংলায় কনভার্ট করা
    return {
        fajr: { 
            start: formatTimeToBangla(times.fajr.start), 
            end: formatTimeToBangla(times.fajr.end) 
        },
        dhuhr: { 
            start: formatTimeToBangla(times.dhuhr.start), 
            end: formatTimeToBangla(times.dhuhr.end) 
        },
        asr: { 
            start: formatTimeToBangla(times.asr.start), 
            end: formatTimeToBangla(times.asr.end) 
        },
        maghrib: { 
            start: formatTimeToBangla(times.maghrib.start), 
            end: formatTimeToBangla(times.maghrib.end) 
        },
        isha: { 
            start: formatTimeToBangla(times.isha.start), 
            end: formatTimeToBangla(times.isha.end) 
        }
    };
}
