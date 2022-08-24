export const encodeFileBase64 = (
  file: any,
  setFileBase64: (arg: any) => void
) => {
  const reader = new FileReader();
  if (file) {
    reader.readAsDataURL(file);
    reader.onload = () => {
      const Base64 = reader.result as string;
      setFileBase64(Base64);
    };
    reader.onerror = (error) => {
      console.log('error: ', error);
    };
  }
};

// function getBase64(file: any) {
//   console.log(file);
//   var reader = new FileReader();
//   reader.onloadend = function () {
//     console.log('RESULT', reader.result);
//   };
//   reader.onerror = (error) => {
//     console.log('error: ', error);
//   };
//   reader.readAsDataURL(file);
// }
