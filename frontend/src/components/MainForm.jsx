import { useForm } from "react-hook-form";

function MainForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="p-5 bg-dark rounded flex flex-col gap-3 justify-items-center items-center">
      <h1 className="text-2xl text-light">Uzupełnij dane transportu</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 ">
        <div className="flex gap-5 items-center">
          <label className="text-light">Transport z</label>
          <input
            className="rounded p-2 "
            type="text"
            {...register("trasportFrom")}
          />{" "}
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-light">Transport do</label>
          <input
            className="rounded p-2"
            type="text"
            {...register("trasportTo")}
          />{" "}
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-light">Typ samolotu</label>
          <select className="rounded p-2" {...register("planeType")}>
            <option value="Airbus A380">Airbus A380</option>
            <option value="Boeing 747">Boeing 747</option>
          </select>
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-light">Dokumenty przewozowe</label>
          <input type="file" {...register("documents")} />
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-light">Data Transportu</label>
          <input type="date" {...register("date")} />
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
