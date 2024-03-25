export const replaceString = (
    str = "",
    replaceArr = []
  ) => {
    const reg = new RegExp(/{\d}/g);
    const cloneArr = [...replaceArr];
  
    return str.replace(reg, () => cloneArr.shift()?.toString() || "");
  };