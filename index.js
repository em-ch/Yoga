
//fetch data
function yogaData() {
    fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
    .then(response => response.json())
    .then(yogaObj => renderList(yogaObj));
} 

function select(item) {
    let sanskrit = document.getElementById("sanskrit");
    let english = document.getElementById("english");
    let image = document.getElementById('image');
    console.log(item);

    sanskrit.textContent = item.sanskrit_name;
    english.textContent = item.english_name;
    image.src = item.img_url;


}


function renderList(yogaObj) {
    const sideBar = document.getElementById('sidebar');
    for (let i = 0; i < yogaObj.length; i++) {
        let div = document.createElement("div");
        div.classList.add("pose");
        div.addEventListener("click", () => {select(yogaObj[i])} );
        div.textContent =  yogaObj[i].english_name;
        
        sideBar.append(div);
    }
}




yogaData();