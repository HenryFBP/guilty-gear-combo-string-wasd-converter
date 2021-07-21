DEFAULT_COMBOSTRING = '5K > 6S > 236K';

DEFAULT_KEYMAP = new DefaultWASDButtonMap();

function selection() {
    return window.getSelection().toString()
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

        localStorage['comboString'] = getComboString();
    })

    // if we don't have one stored, set default
    if (!localStorage['comboString']) {
        setComboString(DEFAULT_COMBOSTRING);
        localStorage['comboString'] = DEFAULT_COMBOSTRING;
    } else {
        console.log('non-default value from storage');
        setComboString(localStorage['comboString']);
    }

    //convert regardless
    doConvert(); //convert

});