
//fetch data
function yogaData() {
    fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
    .then(response => response.json())
    .then(yogaObj => renderList(yogaObj));
} 


function renderList(yogaObj) {
    const sideBar = document.getElementById('sidebar');
    for (let i = 0; i < yogaObj.length; i++) {
        let div = document.createElement("div");
        sideBar.append(yogaObj[i].english_name, div);
    }
}

yogaData();