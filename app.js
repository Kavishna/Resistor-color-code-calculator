//change color of bands
function changeColor(select, dot, band) {
  const selectedInput = document.getElementById(select);
  const refBand = document.getElementById(dot);
  const resistorBand = document.getElementById(band);

  let sValue = selectedInput.value;

  console.log(sValue);
  switch (sValue) {
    case "black":
      refBand.style.backgroundColor = "black";
      resistorBand.style.backgroundColor = "black";
      break;
    case "brown":
      refBand.style.backgroundColor = "brown";
      resistorBand.style.backgroundColor = "brown";
      break;
    case "red":
      refBand.style.backgroundColor = "red";
      resistorBand.style.backgroundColor = "red";
      break;
    case "orange":
      refBand.style.backgroundColor = "orange";
      resistorBand.style.backgroundColor = "orange";
      resistorBand.style.color = "black";
      break;
    case "yellow":
      refBand.style.backgroundColor = "yellow";
      resistorBand.style.backgroundColor = "yellow";
      resistorBand.style.color = "black";
      break;
    case "green":
      refBand.style.backgroundColor = "green";
      resistorBand.style.backgroundColor = "green";
      break;
    case "blue":
      refBand.style.backgroundColor = "blue";
      resistorBand.style.backgroundColor = "blue";
      resistorBand.style.color = "white";
      break;
    case "violet":
      refBand.style.backgroundColor = "violet";
      resistorBand.style.backgroundColor = "violet";
      resistorBand.style.color = "black";
      break;
    case "grey":
      refBand.style.backgroundColor = "grey";
      resistorBand.style.backgroundColor = "grey";
      break;
    case "white":
      refBand.style.backgroundColor = "white";
      resistorBand.style.backgroundColor = "white";
      resistorBand.style.color = "black";
      break;
    case "silver":
      refBand.style.backgroundColor = "silver";
      resistorBand.style.backgroundColor = "silver";
      break;
    case "gold":
      refBand.style.backgroundColor = "gold";
      resistorBand.style.backgroundColor = "gold";
      break;
  }
}

//change tabs and resistor values

function changeTabs(resistor, bands, values) {
  const tabs = document.querySelectorAll(".tabcon");
  const tablinks = document.querySelectorAll(".tablink");
  const psqs = document.querySelectorAll(".psq"); //ref paeagraphs
  const squres = document.querySelectorAll(".squre"); //ref color squres
  const selects = document.querySelectorAll("select");

  //change select

  for (let select of selects) {
    select.style.display = "none";
  }

  for (let value of values) {
    const rows = document.querySelectorAll(`.${value}`);

    for (let row of rows) {
      row.style.display = "block";
    }
  }

  // change ref values

  for (let tablink of tablinks) {
    tablink.classList.remove("active");
  }
  for (let squre of squres) {
    squre.style.display = "none";
  }
  for (let psq of psqs) {
    psq.style.display = "none";
  }

  for (let band of bands) {
    const selected = document.querySelectorAll(`.${band}`);

    for (let select of selected) {
      select.style.display = "block";
    }
  }

  //change resistors

  for (let tab of tabs) {
    tab.style.display = "none";
  }

  document.getElementById(`${resistor}`).style.display = "block";
}

// document
//   .getElementById("band1form")
//   .addEventListener("change", changeColor("band1form", "col1", "band1"));

document.getElementById("4band").addEventListener("click", function () {
  changeTabs(
    "r1",
    ["col1", "col2", "col4", "col5"],
    ["band1form", "band2form", "mlform", "tform"]
  );
  this.classList.add("active");
});
document.getElementById("5band").addEventListener("click", function () {
  changeTabs(
    "r2",
    ["col1", "col2", "col3", "col4", "col5"],
    ["band1form", "band2form", "band3form", "mlform", "tform"]
  );
  this.classList.add("active");
});
document.getElementById("6band").addEventListener("click", function () {
  changeTabs(
    "r3",
    ["col1", "col2", "col3", "col4", "col5", "col6"],
    ["band1form", "band2form", "band3form", "mlform", "tform", "tc"]
  );
  this.classList.add("active");
});

// set a default tab
document.getElementById("4band").click();
