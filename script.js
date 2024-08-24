const mooddrop = document.querySelector('.mooddrop');
const moodchecks = document.querySelector('.moodchecks');

mooddrop.addEventListener('mouseover', function () {
    moodchecks.style.display = 'block';
});

mooddrop.addEventListener('mouseout', function () {
    moodchecks.style.display = 'none';
});

const genredrop = document.querySelector('.genredrop');
const genrechecks = document.querySelector('.genrechecks');

genredrop.addEventListener('mouseover', function () {
    genrechecks.style.display = 'block';
});

genredrop.addEventListener('mouseout', function () {
    genrechecks.style.display = 'none';
});


const art_istdrop = document.querySelector('.art_istdrop');
const art_istchecks = document.querySelector('.art_istchecks');

art_istdrop.addEventListener('mouseover', function () {
    art_istchecks.style.display = 'block';
});

art_istdrop.addEventListener('mouseout', function () {
    art_istchecks.style.display = 'none';
});


let music = [
    'Sunny Sunsite', 'Daylight', 'Believer', 'Mockingbird', 'Eighteen', 'Daydream', 'Bones', 'Mr forgettable', 'Dark Paradice', 'People you Know', 'Night Changes',
    'Another Love', 'Fairytale', 'Love me like You Do', 'Bella Ciao', 'Arcade', 'I wanna die', 'Vampire', 'Mercy', 'Allofus', 'Nothing', 'Older', '1000 reasons', 'Take Me To The Church'
];

let names = [
    'Andrain Brekerynia', 'Joji', 'Imagine Dragons', 'Eminem', 'Khalid', 'The Lovin\' Spoonful', 'Imagine Dragons', 'Joji', 'Lana Del Rey', 'Selena Gomez',
    'One Direction', 'Tom Odell', 'Alexander Rybak', 'Ellie Goulding', 'El Profesor', 'Duncan Laurence', 'Joji', 'Olivia Rodrigo', 'Shawn Mendes', 'Joji',
    'Bruno Mars', 'Sasha Sloan', 'Faouzia', 'Hozier'
];

let urls = [];
urls.push('./assests/istockphoto-1362706206-1024x1024.jpg');


function search() {
    let word = document.querySelector('.searchbar').value;
    word = word.trim().toLowerCase().replace(/\s+/g, '');
    console.log(word);
    if (word == '') { alert("enter something man"); return; }
    let idx = searching();
    if (idx != -1) {
        //alert('we have the music');
        display(idx);
    } else alert("no man we don't have it");

}
function searching() {
    let word = document.querySelector('.searchbar').value;
    word = word.trim().toLowerCase().replace(/\s+/g, '');

    for (let i = 0; i < music.length; i++) {
        let curr = music[i].trim().toLowerCase().replace(/\s+/g, '');
        if (curr == word) return i;
    }
    return -1;
}

function display(i) {
    const centeredDiv = document.createElement('div');
    centeredDiv.id = 'centeredDiv';
    centeredDiv.style.position = 'fixed';
    centeredDiv.style.top = '18%';
    centeredDiv.style.left = '50%';
    centeredDiv.style.transform = 'translate(-50%, -50%)';
    centeredDiv.style.width = '200px';
    centeredDiv.style.height = '50px';
    centeredDiv.style.background = 'rgba(21, 26, 39, 255, 0.7)';
    centeredDiv.style.backdropFilter = 'blur(6px)';
    centeredDiv.style.padding = '20px';
    centeredDiv.style.zIndex = '1000';
    centeredDiv.style.borderRadius = '15px';
    centeredDiv.innerHTML = `
    <button id="closeDiv" style="
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;">x</button>
    <i class="fa-regular fa-circle-play style="top:0; left:0;"></i>
    <p> <span style="color:grey">${music[i]}</span> <span style="color:green">by</span> <span>${names[i]}</span> </p>
          `;


    document.body.appendChild(centeredDiv);

    document.getElementById('closeDiv').addEventListener('click', function () {
        document.body.removeChild(centeredDiv);
    });
}

