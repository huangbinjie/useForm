import * as React from "react";
import { useState, useCallback } from "react";

export type Props = Pick<React.InputHTMLAttributes<HTMLInputElement>, Exclude<keyof React.InputHTMLAttributes<HTMLInputElement>, "name" | "type">>

export type ReturnUseInput = [
  (props: Props) => JSX.Element,
  boolean
]

export function useRadio(): ReturnUseInput {
  const [value, setValue] = useState(null)
  const [name] = useState(String(Math.random()))
  const Radio = useCallback(
    ({ onChange, ...otherProps }: Props) =>
      <input
        type="radio"
        name={name}
        onChange={event => {
          setValue(event.target.value)
          if (onChange) {
            onChange(event)
          }
        }}
        {...otherProps}
      />
    , [])
  return [Radio, value]
}
