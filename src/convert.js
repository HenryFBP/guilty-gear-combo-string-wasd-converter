// Guilty Gear:Strive convert weird "conventional" control notation to Default WASD Keyboard
// Because I'm too lazy to use numpad or mentally convert :3

/*
7 8 9 
4 5 6
1 2 3
*/

//conversion table according to the community

class GenericButtonMap {
    constructor() {
        this.foo = "bar";
    }

    generateConversionTable() {
        return {
            "1": this.LEFTDOWN,
            "2": this.DOWN,
            "3": this.RIGHTDOWN,
    
            "4": this.LEFT,
            "5": this.NEUTRAL,
            "6": this.RIGHT,
    
            "7": this.LEFTUP,
            "8": this.UP,
            "9": this.RIGHTUP,
    
            "P": this.PUNCH,
            "K": this.KICK,
            "S": this.SLASH,
            "H": this.HEAVYSLASH,
            "D": this.DUST
        };
    }
    
    
}

class DefaultWASDButtonMap extends GenericButtonMap {
    constructor() {
        super();
    }

    UP = "W";
    LEFT = "A";
    DOWN = "S";
    RIGHT = "D";
    NEUTRAL = "";

    LEFTDOWN=this.LEFT+this.DOWN;
    LEFTUP=this.LEFT+this.UP;
    RIGHTDOWN=this.RIGHT+this.DOWN;
    RIGHTUP=this.RIGHT+this.UP;

    PUNCH = "U";
    KICK = "J";
    SLASH = "I";
    HEAVYSLASH = "K";

    DUST = "O";

    DASH = "Q";

    ROMANCANCEL = "E"; //custom, added by me
    PSYCHBURST = "R"; //custom, added by me
}

function convert_combostring(combostring, buttonMap) {
    ret = "";

    keymap=buttonMap.generateConversionTable();

    // console.log(combostring);

    for (let char of combostring) {
        if (char in keymap) {
            let converted = keymap[char];

            if (converted != "") { //not empty, i.e. "5" (neutral position)
                ret += "[" + converted + "]";
            }
        }
        else {
            // console.log("Not converting '" + char + "' as it is not in keymap...");
            ret += char;
        }
    }

    return ret;

}
