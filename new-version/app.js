const { generatePyramid } = require('./Pyramid');

const initApp = () => {
    document.getElementById("btn").addEventListener("click", addPyramid);
}

const addPyramid = (event) => {
    event.preventDefault();
    const pyramidHeight = parseInt(document.getElementById("form").elements[0].value);
    let pyramidString = generatePyramid(pyramidHeight);
    document.getElementById("result").innerHTML = pyramidString ? pyramidString : "";
}

initApp();