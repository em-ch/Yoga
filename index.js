//fetch data
let sanskrit = document.getElementById("sanskrit");
let english = document.getElementById("english");
let image = document.getElementById('image');

function yogaData() {
    fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
    .then(response => response.json())
    .then(yogaObj => renderList(yogaObj));
} 

//sideBar
function renderList(yogaObj) {
    const sideBar = document.getElementById('sidebar');
    for (let i = 0; i < yogaObj.length; i++) {
        let div = document.createElement("div");
        div.classList.add("pose");
        div.addEventListener("click", (e) => {
            
            select(yogaObj[i],e);});
        div.textContent =  yogaObj[i].english_name;
        
        sideBar.append(div);
    }
}

function select(item,e) {
    youtubeData(item.sanskrit_name,item.english_name);
    
    let selected = document.getElementsByClassName("active")[0];
    if (selected) {
        selected.classList.remove("active");
    }
    
    e.target.classList.add("active");
    document.getElementsByClassName("landing")[0].classList.add("is-hidden");
    document.getElementsByClassName("container")[0].classList.remove("is-hidden");

    sanskrit.textContent = `Sanskrit: ${item.sanskrit_name}`;
    english.textContent = `English: ${item.english_name}`;
    image.src = item.img_url;
}
//&safeSearch=morderate
//fetch video from youtube
const youtube_api_key = "AIzaSyCUgaswXyglCQpmRzLcNnAFWMZfRJ9oG5I";
function youtubeData(sanskrit_name, english_name) {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${sanskrit_name}+${english_name}&maxResults=2&key=${youtube_api_key}`)
    .then(response => response.json())
    .then(videoResult => insertVideo(videoResult, english_name));

    console.log(english_name)
}

function insertVideo(videoResult, english_name) {
    let video = document.getElementById('video');
    if (english_name == "Bridge" || english_name == "Pigeon" || english_name == "Crescent Moon") {
        video.src = video.src = `https://www.youtube.com/embed/${videoResult.items[1].id.videoId}`;
    } else {
        video.src = `https://www.youtube.com/embed/${videoResult.items[0].id.videoId}`;
    }
    console.log(english_name);
    console.log(videoResult);
    console.log(video.src);
}



yogaData();


// {
//     "ns": "yt",
//     "el": "embedded",
//     "cpn": "pAIxyCuIUBJlF3Ps",
//     "ver": 2,
//     "cmt": "0",
//     "fs": "0",
//     "rt": "16.608",
//     "euri": "http://127.0.0.1:5501/",
//     "lact": 2,
//     "cl": "427307184",
//     "mos": 0,
//     "state": "80",
//     "volume": 100,
//     "cbrand": "apple",
//     "cbr": "Chrome",
//     "cbrver": "98.0.4758.80",
//     "c": "WEB_EMBEDDED_PLAYER",
//     "cver": "1.20220208.01.00",
//     "cplayer": "UNIPLAYER",
//     "cos": "Macintosh",
//     "cosver": "10_15_4",
//     "cplatform": "DESKTOP",
//     "hl": "zh_TW",
//     "cr": "US",
//     "len": "0",
//     "fexp": "23853953,23858057,23983296,24001373,24002022,24002025,24002922,24004644,24007246,24080738,24082662,24135310,24166123",
//     "size": "700:410",
//     "inview": "0",
//     "muted": "0",
//     "docid": "EZyBkVBUlG4",
//     "vct": "0.000",
//     "vd": "NaN",
//     "vpl": "",
//     "vbu": "",
//     "vpa": "1",
//     "vsk": "0",
//     "ven": "0",
//     "vpr": "1",
//     "vrs": "0",
//     "vns": "0",
//     "vec": "null",
//     "vemsg": "",
//     "vvol": "1",
//     "vdom": "1",
//     "vsrc": "0",
//     "vw": "0",
//     "vh": "0",
//     "debug_error": "{\"errorCode\":\"auth\",\"errorDetail\":\"0\",\"errorMessage\":\"無法播放影片\",\"Bi\":\"\",\"YG\":\"0;a6s.0\",\"zE\":2}",
//     "relative_loudness": "NaN",
//     "user_qual": 0,
//     "release_version": "youtube.player.web_20220208_01_RC00",
//     "debug_videoId": "EZyBkVBUlG4",
//     "0sz": "true",
//     "op": "",
//     "yof": "true",
//     "dis": "",
//     "gpu": "Intel_HD_Graphics_5000_OpenGL_Engine",
//     "debug_playbackQuality": "unknown",
//     "debug_date": "Sun Feb 13 2022 15:48:35 GMT-0800 (Pacific Standard Time)"
//   }