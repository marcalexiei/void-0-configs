// oxlint-disable no-unused-vars,prefer-const,init-declarations
{
  const array = [1, 2, 3];

  /** array declaration */
  const myNumberDeclared = array[0];

  /** array assignment */
  let myNumber: number | undefined;
  myNumber = array[0];
}

{
  /** object declaration */
  const obj = { what: false };
  const { what } = obj;
}
{
  /** object assignment */
  const obj = { what: false };

  let what: boolean;
  what = obj.what;
}

const alfa = 1;
const beta = { alfa: alfa };

export { beta };
