// sum command line args
var final_num = 0
for(i=2;i<process.argv.length;i++) {
    final_num += Number(process.argv[i]);
}
console.log(final_num);