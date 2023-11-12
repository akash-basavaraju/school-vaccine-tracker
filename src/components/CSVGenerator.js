export const downloadCsv = function (data) {
  const blob = new Blob([data], { type: "text/csv" });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.setAttribute("href", url);

  a.setAttribute("download", "StudentFormData.csv");

  a.click();
};

export const makeCsv = function (objArray) {
  let array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  let str = "";

  for (let index in array[0]) {
    if (typeof array[0][index] !== "object") {
      if (str !== "") str += ",";

      str += index;
    }
  }

  str += "\n";

  for (let i = 0; i < array.length; i++) {
    let line = "";
    for (let index in array[i]) {
      if (typeof array[i][index] !== "object") {
        if (line !== "") line += ",";

        line += array[i][index];
      }
    }

    str += line + "\n";
  }

  return str;
};
