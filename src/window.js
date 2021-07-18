DEFAULT_COMBOSTRING = '5K > 6S > 236K';

DEFAULT_KEYMAP= new DefaultWASDButtonMap();

function selection() {
    return window.getSelection().toString()
}

function getStoredComboString() {
    return chrome.storage.sync.get('combostring').value
}

function getComboString() {
    return this.document.getElementById('inputString').value;
}

function setComboString(s) {
    this.document.getElementById('inputString').value = s;
}

function setConvertedComboString(s) {
    document.getElementById('output').innerText = s;
}

function doConvert() {
    let converted = convert_combostring(getComboString(), DEFAULT_KEYMAP);
    console.log(converted);

    setConvertedComboString(converted);
}

window.addEventListener('load', function () {

    // when "input data" changes
    this.document.getElementById('inputString').addEventListener('input', function (e) {
        doConvert(); //convert

        //store current input string value 
        chrome.storage.sync.set({ "combostring": getComboString() }, function(result){
            console.log('changed text');
            console.log(result);
        });

    })

    //show example combo string if data not set
    chrome.storage.sync.get('combostring', function (result) {
        console.log('Value retrieved from storage is ' + result.combostring);

        // if we don't have one stored, set default
        if (!result.combostring) {

            setComboString(DEFAULT_COMBOSTRING);
            chrome.storage.sync.set({ "combostring": DEFAULT_COMBOSTRING }, 
                function (result) { });
        } else {
            console.log('non-default value from storage')
            setComboString(result.combostring);
        }

        //convert regardless
        doConvert(); //convert

    });


doConvert();


});
// let cs = "5K > 6S > 236K";

// console.log("hello chrome :3");
// console.log(cs);
// console.log(convert_combostring(cs));


// setTimeout(function(){ 

//     console.log(convert_combostring(selection()));

// }, 300);
