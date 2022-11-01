const parseTemplate = (obj: any, path: string, defaultValue?: undefined) => {
  const keys = path.split('.');

  let result = obj;
  for (const key of keys) {
    const value = result[key];

    if (!value) {
      result = defaultValue;
      break;
    }

    result = value;
  }

  return result;
};

export default parseTemplate;
