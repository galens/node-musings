//console.log(process.argv);
var finaltotal = 0;
for(var i=2;i<process.argv.length;i++){
	//console.log(process.argv[i]);
	finaltotal += +process.argv[i];
}
console.log(finaltotal);