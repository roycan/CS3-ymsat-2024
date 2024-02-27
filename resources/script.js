document.body.onload=dispProj(); // assign event handler to body
document.getElementById("shuffle").addEventListener("click",dispProj); // placing functionality on the shuffle button

function dispProj(){
  let links = defineLinks(); // from data.js
  //console.log("disproj()",links);
  var x;
  var genNum=[];
  var numProj = Math.floor(Math.random() * links.length);
  // randomizing access to the links
  for (i=0;i<links.length;i++) {	
    // update list of used number
    genNum.push(numProj);
    // check if the generated random number is already used.	
    numProj = Math.floor(Math.random() * links.length)
    x = genNum.indexOf(numProj)
    if (genNum.length == links.length)
      break;
    while (x >= 0) {
      numProj = Math.floor(Math.random() * links.length)
      x = genNum.indexOf(numProj)
    }		
  }
  // construct content of the body
  var tobeDisp = "";
  document.getElementById("pHolder").innerHTML = ""
  for (i=0;i<links.length;i++) {
    if (i == 0 || i % 2 == 0) {
      tobeDisp += '<div class="w3-row w3-margin">'; // to start a row
    }
    tobeDisp +=
    `<div class="w3-half">
      <a href="${links[genNum[i]].url}" target="_blank">
      <div class="w3-row w3-margin">
          <div class="w3-col s11 m8 l5">
              <img src="${links[genNum[i]].icon}" style="width:100%; min-height:200px">
          </div>
          <div class="w3-col s11 m8 l5 w3-margin ">
              <h3> ${links[genNum[i]].title} </h3>
              <p> ${links[genNum[i]].desc}
              </p>
          </div>
      </div> 
    </a>
    </div>`;
    if (i % 2 == 1 || i == links.length-1)  {
      // to end a row
      tobeDisp +="</div><br/>";
      document.getElementById("pHolder").innerHTML += tobeDisp;
      tobeDisp = "";
    }
   
  }

//  document.getElementById("pHolder").innerHTML = tobeDisp;
  //myVar = setTimeout(dispProj, 20000);
}
/* Template
<div class="w3-row w3-margin">
    
    <div class="w3-half">
        <a href="science/index.html" target="_blank">
        <div class="w3-row w3-margin">
            <div class="w3-col s11 m8 l5">
                <img src="images/science.png" style="width:100%; min-height:200px">
            </div>
            <div class="w3-col s11 m8 l5 w3-margin">
                <h2> WHIZ BANG SCIENCE GAMES!</h2>
                <p> Welcome to our science games! Here, you can play games that will test your knowledge of science! Click on the games below to play!</p>
            </div>
        </div> 
        </a>
    </div>
</div>
*/