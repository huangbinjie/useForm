import * as React from "react";
import { useState, useCallback } from "react";

export type Props = Pick<React.InputHTMLAttributes<HTMLInputElement>, Exclude<keyof React.InputHTMLAttributes<HTMLInputElement>, "value">>

export type ReturnUseInput = [
  (props: Props) => JSX.Element,
  string
]

export function useInput(): ReturnUseInput {
  const [value, setValue] = useState(null)
  const Input = useCallback(({ onChange, ...otherProps }: Props) => <input {...otherProps} onChange={event => {
    setValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }} />, [])
  return [Input, value]
}
