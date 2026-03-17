const a: string[] = [];

console.info('asd');
for (const a in []) {
  console.info('ciao');
}

if (true) {
  // @ts-ignore: Unreachable code error
  console.log('hello');
}
