document.getElementById("Ritik").style.display = "none";
document.getElementById("Trav").style.display = "none";

const showRahul = () => {
  var x = document.getElementById("Ritik");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("rahulBtn").innerHTML = "Hide Stats";
  } else {
    x.style.display = "none";
    document.getElementById("rahulBtn").innerHTML = "Show Stats";
  }
}

const showRajat = () => {
  var x = document.getElementById("Trav");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("rajatBtn").innerHTML = "Hide Stats";
  } else {
    x.style.display = "none";
    document.getElementById("rajatBtn").innerHTML = "Show Stats";
  }
}