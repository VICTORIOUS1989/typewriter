const sentence = "hello there from lighthouse labs";
let count = 1000;
for (const char of sentence) {
setTimeout(() => {
  process.stdout.write(char);
}, count) ;
count+= 50;

}

setTimeout(() => {
  process.stdout.write("\n");
}, count) ;
