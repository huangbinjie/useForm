import * as React from "react";
import { useState, useCallback } from "react";

export type ReturnUseInput = [
  () => JSX.Element,
  boolean
]

export function useCheckbox(checked = false): ReturnUseInput {
  const [value, setValue] = useState(checked)
  const Input = useCallback(() => <input type="checkbox" checked={checked} onChange={event => setValue(event.target.checked)} />, [])
  return [Input, value]
}
