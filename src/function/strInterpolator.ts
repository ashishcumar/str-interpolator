function strInterpolator<T extends Record<string, any>>(
  str: string,
  values: T
): string {
  return str.replace(/\${(.*?)}/g, (match: string, p1: string) => {
    if (p1.includes(".")) {
      const keyPath = p1.split(".");
      let currentObj: any = values;

      for (let i = 0; i < keyPath.length; i++) {
        const key = keyPath[i];

        if (
          currentObj[key] !== undefined &&
          typeof currentObj[key] === "object"
        ) {
          currentObj = currentObj[key];
        } else {
          return currentObj[key] !== undefined ? currentObj[key] : "";
        }
      }
    } else {
      return values[p1] !== undefined ? values[p1] : "";
    }
  });
}

export {
  strInterpolator
}