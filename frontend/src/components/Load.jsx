import _ from "lodash";
import { useEffect } from "react";

function Load({ index, item, remove, errors, register, typePlane }) {
  return (
    <li className="bg-medium p-3 rounded flex flex-col gap-3">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label className="text-light">Nazwa ładunku</label>
          <input
            className="rounded p-2 "
            type="text"
            {...register(`loads.${index}.loadName`)}
            defaultValue={item.loadName}
          />
        </div>

        {_.get(errors, `loads.${index}.loadName.message`) && (
          <p className="text-sm text-yellow self-end">
            {_.get(errors, `loads.${index}.loadName.message`)}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label className="text-light">Ciężar ładunku (kg)</label>
          <input
            className="rounded p-2 "
            type="number"
            min="0"
            max={typePlane === "Airbus A380" ? "35000" : "38000"}
            {...register(`loads.${index}.loadWeight`, {
              required: "Pole wymagane",
            })}
            defaultValue={item.loadWeight}
          />
        </div>

        {_.get(errors, `loads.${index}.loadWeight.message`) && (
          <p className="text-sm text-yellow self-end">
            {_.get(errors, `loads.${index}.loadWeight.message`)}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label className="text-light">Typ ładunku</label>
          <select
            className="rounded p-2"
            {...register(`loads.${index}.loadType`)}
          >
            <option value="normalny">ładunek zwykły</option>
            <option value="niebezpieczny">ładunek niebezpieczny</option>
          </select>
        </div>

        {_.get(errors, `loads.${index}.loadType.message`) && (
          <p className="text-sm text-yellow self-end">
            {_.get(errors, `loads.${index}.loadType.message`)}
          </p>
        )}
      </div>

      <button className="text-red-500" onClick={() => remove(index)}>
        Usuń ładunek
      </button>
    </li>
  );
}

export default Load;
