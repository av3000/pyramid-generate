window.onload = function() {
    document.getElementById("btn").addEventListener("click", function(event){
        event.preventDefault();

        const pyramidHeight = parseInt(document.getElementById("form").elements[0].value);

        let pyramidString = generatePyramid(pyramidHeight);
        document.getElementById("result").innerHTML = pyramidString;
    });
}

function addSymbol(row, index){
    let j=0;

    while(j<index+1){
        row+= " *";
        j++;
    }
    return row; 
}

function generatePyramid(pyramidHeight){
    let resultsBlock = document.getElementById("result");

    if( isNaN(pyramidHeight) || pyramidHeight < 1 || pyramidHeight > 10) {
            alert("Value is incorrect");
            document.getElementById("form").elements[0].value = 1;
            resultsBlock.innerHTML = "";
    }
    else {
        document.getElementById("form").elements[0].value = pyramidHeight;

        let row="";
        let pyramidString="";
        
        for(let i=0; i<pyramidHeight; i++){
            row = addSymbol(row, i);
            pyramidString += "<p>"+row+"</p>";   
            row="";
        }

        return pyramidString;
    }
}