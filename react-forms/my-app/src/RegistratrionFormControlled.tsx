import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(username, password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="username"
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
