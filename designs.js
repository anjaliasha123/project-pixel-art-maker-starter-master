/**
 * @description Utility function to remove table rows of the table element
 * @param {*} tableElement
 */
function removeTableRows(tableElement) {
  try {
    let trElems = document.querySelectorAll("tr");
    for (let i = 0; i < trElems.length; i++) {
      tableElement.removeChild(trElems[i]);
    }
  } catch (error) {
    console.log("removeTableRows function error ", error);
  }
}
/**
 * @description This function is used to create the Grid
 * @param {*} event
 */
function makeGrid(event) {
  try {
    let tableElement = document.querySelector("#pixelCanvas");
    //check if user enetered whole numbers - if yes then empty the grid
    if (height == undefined || width == undefined) {
      alert("Enter positive integers");
      if (tableElement.childNodes.length > 0) {
        removeTableRows(tableElement);
      }
    } else {
      if (tableElement.childNodes.length > 0) {
        removeTableRows(tableElement);
      }
      for (let i = 1; i <= height; i++) {
        let trElem = document.createElement("TR");

        for (let j = 1; j <= width; j++) {
          let tdElem = document.createElement("TD");
          tdElem.setAttribute("class", "table-data");
          trElem.appendChild(tdElem);
        }
        tableElement.appendChild(trElem);
      }
      tableElement.addEventListener("click", (event) => {
        if (event.target.className === "table-data") {
          event.target.style.backgroundColor = colour;
        }
      });
      event.preventDefault();
    }
  } catch (error) {
    console.log("makeGrid function error ", error);
  }
}
/**
 * @description This function is used to check if the value enetered by the user
 * in the height and width fields are positive integers
 * @param {*} event
 * @returns Value entered by the user
 */
function changeValAttribute(event) {
  try {
    let val = event.target.value;
    //check if the number is not a whole number
    if (val - Math.floor(val) !== 0) {
      alert("Enter positive integers");
    } else {
      val = Math.trunc(val);
      event.target.setAttribute("value", val);
      return Math.trunc(val);
    }
  } catch (error) {
    console.log("changeValAttribute ", error);
  }
}

/* 
Main Function execution starts here
*/
var height = 1,
  width = 1,
  colour = "#000";
let inputHeightField = document.querySelector("#inputHeight");
let inputWidthField = document.querySelector("#inputWidth");
let colorField = document.querySelector("#colorPicker");
let submitButton = document.querySelector(".submit");
inputHeightField.addEventListener("input", (event) => {
  height = changeValAttribute(event);
});

inputWidthField.addEventListener("input", (event) => {
  width = changeValAttribute(event);
});

submitButton.addEventListener("click", makeGrid);

colorField.addEventListener("input", (event) => {
  colour = event.target.value;
});
