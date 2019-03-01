import * as React from "react";
import { useState, useCallback } from "react";

export type Props = Pick<React.InputHTMLAttributes<HTMLTextAreaElement>, Exclude<keyof React.InputHTMLAttributes<HTMLInputElement>, "value">>

export type ReturnUseInput = [
  (props: Props) => JSX.Element,
  string
]

export function useTextArea(): ReturnUseInput {
  const [value, setValue] = useState(null)
  const TextArea = useCallback(({ children, onChange, ...otherProps }: Props) => <textarea {...otherProps} onChange={event => {
    setValue(event.target.value)
    if (onChange) {
      onChange(event)
    }
  }} />, [])
  return [TextArea, value]
}
