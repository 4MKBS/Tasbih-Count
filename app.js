let num1 = 0, num2 = 0, num3 = 0, num4 = 0;

let show1 = document.getElementById('show1');
let show2 = document.getElementById('show2');
let show3 = document.getElementById('show3');
let show4 = document.getElementById('show4');


function add(n) {
	if (n === 1) {
		num1++;
		show1.textContent = num1;
	} else if (n === 2) {
		num2++;
		show2.textContent = num2;
	} else if (n === 3) {
		num3++;
		show3.textContent = num3;
	} else {
		num4++;
		show4.textContent = num4;
	}
	if (num1 === 100) { num1 = 0; }
	if (num2 === 100) { num2 = 0; }
	if (num3 === 100) { num3 = 0; }
	if (num4 === 100) { num4 = 0; }

}