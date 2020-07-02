const { addSymbol } = require('./util');

exports.generatePyramid = (pyramidHeight) => {
    if( isNaN(pyramidHeight) || pyramidHeight < 1 || pyramidHeight > 10) {
            alert("Value is incorrect");
            document.getElementById("form").elements[0].value = 1;
    }
    else {
        document.getElementById("form").elements[0].value = pyramidHeight;
        let row = "";
        let pyramidString = "";
        
        for(let i=0; i<pyramidHeight; i++){
            row = addSymbol(row, i);
            pyramidString += "<p>"+row+"</p>";   
            row="";
        }

        return pyramidString;
    }
}