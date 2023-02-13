const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
let sen = expr;
let arr = [];
let str = '';
let bin = '';
let fin = '';
let s = 0;
let y = 0;
let g = 9;
let o = 1;
let mor = [];
    /*for(let i = 0; i<expr.length; i++){
        str+=expr[i];
       //console.log(str);
        if(i==g){
            
            g=g+10;
            arr[y] = str;
            y++
            str = '';
            //console.log(arr);
            
        }
       //console.log(arr);  
    }*/
    for(let i = 0; i<sen.length; i++){
        //console.log(str);
        str+=sen[i];
        if (i==o){
            if(str=='00'){
             //str='' ;  
            } else if(str=='10'){
                bin+='.';
            } else if(str=='11'){ 
                bin+='-';
            }
             //console.log(bin);
               o+=2;  
               str = '';
               if(i==g)  {
                  g=g+10;
                  mor[s]=bin;
                  //console.log(mor); 
                  s++;
                  bin='';
               }
              }
            }
            //console.log(mor); 
            for(let el of mor){
                if(el=='')
                fin+=' ';
            for (let key in MORSE_TABLE){
                if (el == key){
                    fin += MORSE_TABLE[key];
                } 
              }
            }
            console.log(fin); 
            return fin;
            //console.log(mor); 
            //console.log(bin); 
    //console.log(arr)
 }

module.exports = {
    decode
}