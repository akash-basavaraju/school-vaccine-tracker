export async function readCSV(file) {
  return new Promise((resolve, reject) => {
    if (file.type && !file.type.startsWith("text/csv")) {
      console.log("File is not an csv.", file.type, file);
      reject(false);
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
}
