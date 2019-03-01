import * as React from "react";
import { useState, useCallback } from "react";

export type Props = Pick<React.InputHTMLAttributes<HTMLSelectElement>, Exclude<keyof React.InputHTMLAttributes<HTMLInputElement>, "value">>

export type ReturnUseInput = [
  (props: Props) => JSX.Element,
  string
]

export function useSelect(): ReturnUseInput {
  const [value, setValue] = useState(null)
  const Select = useCallback(({ children, onChange, ...otherProps }: Props) => <select {...otherProps} onChange={event => {
    setValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }}>{children}</select>, [])
  return [Select, value]
}
