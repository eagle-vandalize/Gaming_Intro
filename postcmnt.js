function cmntbox() {
    let more = document.querySelector(".j-commentry-down");
    more.classList.toggle("active");
    let cmnt = document.querySelector(".j-comnt-form");
    cmnt.classList.toggle("active");
    let textare = document.querySelector(".opaci-cmnt");
    textare.classList.toggle("active");
}

let postbutton = document.querySelector('.post-button button');
postbutton.addEventListener('click' , function () {
    
    let texte = document.querySelector('.opaci-cmnt textarea');
    // let placeholdr =  texarea.getAttribute('placeholder');
    let textAreaValue = texte.value;
    if(textAreaValue === "") {
        alert("Message can't be empty.");
        return;
    }else {
        msgs();
        console.log(msgs());
    }
})

function msgs() {
    let cmntPoster = document.getElementById('cmnt-badge');
    let cmntPostBox = document.createElement('div'),
        iconContainer = document.createElement('div'),
        postContainer = document.createElement('div'),
        imgg = document.createElement('img')
        imgg.src = "design.jpg",
        spanT = document.createElement('span');
    
        cmntPostBox.className = "cmnt-Post-box";
        iconContainer.className = "icon-container";
        postContainer.className = "post-container";
        
        cmntPoster.appendChild(cmntPostBox);
        cmntPostBox.appendChild(iconContainer);
        iconContainer.appendChild(imgg);
        cmntPostBox.appendChild(postContainer);
        postContainer.appendChild(spanT);
        let createTextnode = document.createTextNode(textAreaValue.trim());
        console.log(createTextnode);
        spanT.appendChild(createTextnode);
}

// function cmnts() {
//     localStorage.setItem("msgs", innerHeight);
// } 


function cmntbox() {
    let more = document.querySelector(".j-commentry-down");
    more.classList.toggle("active");
    let cmnt = document.querySelector(".j-comnt-form");
    cmnt.classList.toggle("active");
    let textare = document.querySelector(".opaci-cmnt");
    textare.classList.toggle("active");
}

let postbutton = document.querySelector('.post-button input');
postbutton.addEventListener('click' , function () {
    let cmntMainBox = document.getElementById('cmnt-badge'),
    one = document.createElement('div'),
    q = document.createElement('div'),
    q1 = document.createElement('div'),
    wrtBox = document.createElement('div'),
    writecmnt = document.createElement('div'),
    arrow = document.createElement('div');
    p = document.createElement('p'),
    one.className = "cmnt-Post-box";
    q.className = "icon-container";
    q1.className = "circle-nam-icon";
    wrtBox.className = "post-container";
    writecmnt.className = "write-cmnt";
    arrow.className = "focusIcon";
    p.className = "cmnt-text";
    cmntMainBox.appendChild(one);
    one.appendChild(q);
    q.appendChild(q1);
    one.appendChild(wrtBox);
    wrtBox.appendChild(writecmnt);
    writecmnt.appendChild(arrow);
    writecmnt.appendChild(p);
    let texte = document.querySelector('.opaci-cmnt textarea');
    // let placeholdr =  texarea.getAttribute('placeholder');
    let textAreaValue = texte.value;
    let createTextnode = document.createTextNode(textAreaValue);
    p.appendChild(createTextnode);
})
let texarea = document.querySelector('.opaci-cmnt textarea');
let val = texarea.value;
let placehold =  texarea.getAttribute('placeholder');
texarea.onfocus = function () {
    this.setAttribute('placeholder' ,  " ");
}
texarea.onblur = function () {
    this.setAttribute('placeholder' ,  placehold);
}

