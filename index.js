const flattenDeep = arr1 => {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
};

const css = (...resArray) => {
  const workingArray = JSON.parse(JSON.stringify(resArray));
  const strings = workingArray[0];
  workingArray.splice(0, 1);
  const interpolations = workingArray;
  const result = strings.map((string, index) => {
    if (interpolations[index]) {
      return [string, interpolations[index]];
    }
    return string;
  });
  return flattenDeep(result).join("");
};

export default css;
