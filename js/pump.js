//variables

const C$ = "ABDABEABFACDACEACFAFDAFECBDCBECBFEBDEBFECDCFDEFD";
const B$ = "203032404243";
const FNFC = x => (Math.log(x) * 1200) / Math.log(2);
//FNSD(X$,X)=ASC(MID$(X$,X,1))-48
/**
 * 
 * @param {string} str 
 * @param {number} i 
 * @returns number
 */
const FNSD = (str, i) => str.charCodeAt(i)-48; 

const D$ = new Array(4095);
const Q = new Array(49);

const R = new Array(11);
const QX = new Array(47);
const QY = new Array(47);
const P = [1, 7, 2, 3, 5]
//R = 
for(var i=0; i<R.length; i++){
    R[i]=FNSD(B$, i+1);
}
//const R = Array.prototype.map((r,i)=>FNSD(B$, i+1));
console.log(R);

