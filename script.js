function makeid(l) {
  // write your code here
	let str="ABCDEFGHIJKLMNOPQR12345678";
	let randomString="";
	let index;
	for(let i=0;i<l;i++){
		index=Math.floor(Math.random()*str.length);
		randomString+=str[index];
	}
	return randomString;
}
const l = prompt("Enter a number.");
alert(makeid(l));


// Do not change the code below.
