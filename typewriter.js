const sentence = 'hello there from lighthouse labs';
let timer = 0;
for (const char of (sentence + '\n')) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer += 50);
}