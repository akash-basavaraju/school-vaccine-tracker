export const downloadCsv = function (data) {
  const blob = new Blob([data], { type: "text/csv" });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.setAttribute("href", url);

  a.setAttribute("download", "StudentFormData.csv");

  a.click();
};

export const makeCsv = function (objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var index in array[0]) {
    if (typeof array[0][index] !== "object") {
      if (str !== "") str += ",";

      str += index;
    }
  }

  str += "\r\n";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (typeof array[i][index] !== "object") {
        if (line !== "") line += ",";

        line += array[i][index];
      }
    }

    str += line + "\r\n";
  }

  return str;
};
