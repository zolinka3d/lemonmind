import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./MainForm.validation";

function MainForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "loads",
  });

  const onSubmit = (data) => {
    console.log(data);
    // reset();
  };
  return (
    <div className="p-5 bg-dark rounded flex flex-col gap-3 justify-items-center items-center">
      <h1 className="text-2xl text-light">Uzupełnij dane transportu</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 ">
        <div className="grid grid-cols-2 gap-10 ">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <label className="text-light">Transport z</label>
              <input
                className="rounded p-2 "
                type="text"
                {...register("trasportFrom")}
              />{" "}
            </div>
            {errors.trasportFrom && (
              <p className="text-sm text-yellow">
                {errors.trasportFrom.message}
              </p>
            )}
            <div className="flex justify-between items-center">
              <label className="text-light">Transport do</label>
              <input
                className="rounded p-2"
                type="text"
                {...register("transportTo")}
              />{" "}
            </div>
            {errors.transportTo && (
              <p className="text-sm text-yellow">
                {errors.transportTo.message}
              </p>
            )}
            <div className="flex justify-between items-center">
              <label className="text-light">Typ samolotu</label>
              <select className="rounded p-2" {...register("planeType")}>
                <option value="Airbus A380">Airbus A380</option>
                <option value="Boeing 747">Boeing 747</option>
              </select>
            </div>
            {errors.typePlane && (
              <p className="text-sm text-yellow">{errors.typePlane.message}</p>
            )}
            <div className="flex justify-between items-center gap-5">
              <label className="text-light">Dokumenty przewozowe</label>
              <input
                className="text-medium"
                type="file"
                multiple
                {...register("file")}
              />
            </div>
            {errors.file && (
              <p className="text-sm text-yellow">{errors.file.message}</p>
            )}
            <div className="flex justify-between items-center">
              <label className="text-light">Data Transportu</label>
              <input
                className="p-2 rounded"
                type="date"
                {...register("date")}
              />
            </div>
            {errors.date && (
              <p className="text-sm text-yellow">{errors.date.message}</p>
            )}
          </div>

          <ul className="flex flex-col gap-3 overflow-y-auto max-h-72 p-1 ">
            {fields.map((item, index) => (
              <li key={item.id} className="bg-medium p-3 rounded">
                <div className="flex justify-between items-center">
                  <label className="text-light">
                    Nazwa ładunku {index + 1}
                  </label>
                  <input
                    className="rounded p-2 "
                    type="text"
                    {...register(`loads.${index}.loadName`, {
                      required: "Wymagane",
                    })}
                    defaultValue={item.loadName}
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    className="text-red-500"
                    onClick={() => remove(index)}
                  >
                    Usuń ładunek {index + 1}
                  </button>
                  {errors.loads && errors.loads[index] && (
                    <p className="text-sm text-yellow">
                      {errors.loads[index].loadName.message}
                    </p>
                  )}
                </div>
              </li>
            ))}
            <button
              type="button"
              onClick={() => append({ loadName: "" })}
              className="bg-normal text-dark font-bold p-3 rounded"
            >
              Dodaj ładunek
            </button>
            {errors.loads && (
              <p className="text-sm text-yellow">{errors.loads.message}</p>
            )}
          </ul>
        </div>
        <button
          type="submit"
          className="bg-normal text-dark font-bold p-3 rounded"
        >
          Wyślij Formularz
        </button>
      </form>
    </div>
  );
}

export default MainForm;
