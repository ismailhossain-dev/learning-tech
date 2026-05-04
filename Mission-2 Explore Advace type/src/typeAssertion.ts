/**
 * type Assertion => mane holo typescript teke besi buja. mane holo amra typescript er age bole divo type ta ki hobe
 */

//========for example========

//any mans =>undefined
let anything: any;
//anything jei number eta typescript jane na
anything = "Sabbir";

//sure hoye bole dilam anything ta string hobe
//anything as string;

//function er mardome example divo ei function er kaj holo kg teke gram covert korbe

//1kg = 1000 gram

const kgToGMConverter = (input: string | number) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    //[] mordome Destructuring korchi and split er mardome space cut korchi and array te convert korchi
    const [value] = input.split(" ");
    return `Converted output is: ${Number(input) * 1000}`;
  }
};

//kgToGmConverter ta ekbar number return korbe
//KgToGmConverter ta ekbar string return korbe
const result = kgToGMConverter(2);
const result2 = kgToGMConverter("2 kg");
