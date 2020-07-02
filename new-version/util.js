exports.addSymbol = (row, index) => {
    let j=0;

    while(j<index+1){
        row+= " *";
        j++;
    }

    return row; 
}