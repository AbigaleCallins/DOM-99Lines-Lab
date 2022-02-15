document.addEventListener('DOMContentLoaded', function () {

  let btn = document.createElement("button");
  btnText = document.createTextNode("Sing!!!");
  btn.appendChild(btnText)
  document.body.appendChild(btn);

  btn.addEventListener('click', function () {
    let friends = ["Abbie", "Lisa", "Paula", "Brad", "Josie"];
    for (let j = 0; j < friends.length; j++) {
      let friendDiv = document.createElement("div");
      friendDiv.className = ("friend");
      document.body.appendChild(friendDiv);

      let friendNameH2 = document.createElement("h2");
      let h2Text = document.createTextNode(friends[j]);
      friendNameH2.appendChild(h2Text)
      friendDiv.appendChild(friendNameH2)
      friendDiv.innerHTML = ("<h2 class='name'>" + friends[j].toUpperCase() + "</h2>");

      // let song = document.createElement("p")
      // let songText = document.createTextNode(

      // // song.innerText(friends[countD].toUpperCase());


      for (let i = 99; i > 0; i--) {

        if (i >= 2) {
          let p = document.createElement("p")
          p.innerText = (i + " lines of code in the file, " + i + " lines of code, " + friends[j] + " strikes one out, clears it all out, " + i + " lines of code in the file, ");
          friendDiv.appendChild(p)
        } else if (i == 1) {
          let p = document.createElement("p")
          p.innerText = (i + " line of code in the file, " + i + " line of code, " + friends[j] + " strikes one out, clears it all out, no more lines of code in the file.");
          friendDiv.appendChild(p)
        } else {
          let p = document.createElement("p")
          p.innerText = (i + " lines of code in the file, " + i + " lines of code, " + friends[j] + " strikes one out, clears it all out, " + i + " lines of code in the file.");
          friendDiv.appendChild(p)
        }


      }
    }

  })
})
