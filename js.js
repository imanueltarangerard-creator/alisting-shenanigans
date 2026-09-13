function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("listInput").value;

    if (inputValue === '') {
        alert("you skibidi have to write something!");
        return;
    }

    //buat box
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

  //make text
    let text = document.createTextNode(" " + inputValue);

    li.appendChild(checkbox);
    li.appendChild(text);

    document.getElementById("myUL").appendChild(li);

    document.getElementById("listInput").value = "";

    //close button
    let span = document.createElement("SPAN");
    span.textContent = "\u00D7";
    span.className = "close";
    li.appendChild(span);

    span.onclick = function() {
        this.parentElement.style.display = "none";
    };
}

// this is where i put all the close and shenanigans
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
    myNodelist[i].onclick = function() {
        this.classList.toggle("checked");
    };
}

function showCompleted() {
    let list = document.getElementsByTagName("li");

    for (let i = 0; i < list.length; i++) {
        let checkbox = list[i].querySelector("input[type='checkbox']");

        if (checkbox.checked) {
            list[i].style.display = "";
        } else {
            list[i].style.display = "none";
        }
    }
}

function showAll() {
    let list = document.getElementsByTagName("li");

    for (let i = 0; i < list.length; i++) {
        list[i].style.display = "";
    }
}
