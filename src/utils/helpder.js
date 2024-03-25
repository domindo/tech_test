import { isNil } from "lodash"

export const exportToCsv = ({ csvData, fileName }) => {
  if (!csvData || !fileName) return;

  try {
    const textEncoder = new TextEncoder('shift_jis', {NONSTANDARD_allowLegacyEncoding: true});
    const csvContentEncoded = textEncoder.encode(csvData);
    const blob = new Blob(["\ufeff", csvContentEncoded], {type: "text/plain;charset=shift_jis"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
  }

}

export const removeEmptyValues = (object) => {
  const keys = Object.keys(object);
  for (const element of keys) {
    const key = element;
    const value = object[key];
    if (value === null || value === undefined || value === '') {
      delete object[key];
    }
  }

  return object;
}

export const showDataTableWithEmpty = (value) => {
  if (isNil(value) || value === "") {
    return "-";
  }

  return value;
}

export const valueConvertFormSearch = (data)=>{
  let valueConvertForm = []
    for (let key of Object.keys(data)) {
      const value = (data[key] ?? "")?.toString()
      const isObjectNotArray =
        typeof data[key] === "object" &&
        !Array.isArray(data[key]) &&
        data[key] !== null &&
        data[key]?.value !== undefined
          ? data[key]?.value?.toString()
          : true
      if (value?.trim() && isObjectNotArray) {
        valueConvertForm[key] = data[key]?.value?.toString() || data[key]
      }
    }
    return valueConvertForm
}

export const convertApiToStringSeconds = (seconds)=>{
  return new Date(seconds * 1000).toISOString().slice(11, 19)
}

export const getScreenGroup = (screenGroup, pathname) => {
  return screenGroup?.find(group => {
    if (
      pathname.split("/").length - 1 > 1 &&
      group?.path.split("/").length - 1 > 1 &&
      group?.path.indexOf(group?.controller) !== -1
    ) {
      return pathname.includes(
        group?.path.slice(
          0,
          group?.path.indexOf(group?.controller) + group?.controller.length
        )
      )
    }
    return pathname === group?.path
  })
}