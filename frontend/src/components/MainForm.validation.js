import * as yup from "yup";

const validFileExtensions = { image: ["jpg", "png", "doc", "docx", "pdf"] };

function areValidFiles(files, fileType) {
  return Array.from(files).every((file) => {
    const extension = file.name.split(".").pop().toLowerCase();
    return validFileExtensions[fileType].includes(extension);
  });
}

const validationSchema = yup.object({
  trasportFrom: yup
    .string()
    .required("Pole wymagane")
    .min(3, "To pole nie może być krótsze niż 3 znaki"),

  transportTo: yup
    .string()
    .required("Pole wymagane")
    .min(3, "To pole nie może być krótsze niż 3 znaki"),

  planeType: yup.string().required("Pole wymagane"),

  file: yup
    .mixed()
    .test("is-valid-type", "Zły typ pliku", (value) =>
      value ? areValidFiles(value, "image") : false
    ),
  date: yup
    .mixed()
    .test(
      "is-date",
      "Wybierz prawidłową datę",
      (value) => !value || !isNaN(Date.parse(value))
    )
    .test("required", "Pole wymagane", (value) => value !== "")

    .test("is-future-date", "Wybierz datę z przyszłości", (value) => {
      const inputDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // resetuje czas dzisiejszej daty do północy
      return inputDate >= today;
    })
    .test(
      "is-business-day",
      "Transport może odbyć się tylko w dni robocze",
      (value) => {
        if (!value) return false;
        const weekday = new Date(value).getDay();
        return weekday >= 1 && weekday <= 5;
      }
    ),
});

export default validationSchema;
