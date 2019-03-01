# useForm

## Usage.

```tsx
function Form() {
  const [Username, username] = useInput()
  const [Password, password] = useInput()
  return (
    <form onSubmit={() => submit(username,password)}>
      <label>用户名</label><Username />
      <label>密码</label><Password />
    </form>
  )
}
```
