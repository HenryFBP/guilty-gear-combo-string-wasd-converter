function selection() {
    return window.getSelection().toString()
}

function doConvert() {
    let e = document.getElementById('outputString');
    let converted = convert_combostring(document.getElementById('inputString').value)
    console.log(converted);

    document.getElementById('output').innerText = converted;
}

window.addEventListener('load', function () {

    this.document.getElementById('inputString').addEventListener('input', function (e) {
        doConvert();
    })

    //show example
    this.document.getElementById('inputString').value = '5K > 6S > 236K';
    doConvert();

});
// let cs = "5K > 6S > 236K";

// console.log("hello chrome :3");
// console.log(cs);
// console.log(convert_combostring(cs));


// setTimeout(function(){ 

//     console.log(convert_combostring(selection()));

// }, 300);
