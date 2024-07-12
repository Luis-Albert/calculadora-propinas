import type { Dispatch } from "react"
import { OrderActions } from "../reducers/order-reducers"

type TipPorcentageFormProps = {
  dispatch: Dispatch<OrderActions>
  tip: number
}

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%"
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%"
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%"
  }
]

export default function TipPorcentageForm({
  dispatch,
  tip
}: TipPorcentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map((tipOptions) => (
          <div key={tipOptions.id} className="flex gap-2">
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              type="radio"
              id={tipOptions.id}
              name="tip"
              value={tipOptions.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { value: +e.target.value }
                })
              }
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
