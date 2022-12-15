export const isObjOrArr = (
  obj: Record<string | symbol, any>,
  prop: string | symbol
) =>
  ["object", "array"].includes(
    Object.prototype.toString.call(obj[prop]).slice(8, -1).toLowerCase()
  );
