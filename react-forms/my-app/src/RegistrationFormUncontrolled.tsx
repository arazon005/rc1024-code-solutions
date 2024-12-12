import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const { username, password } = Object.fromEntries(data.entries());
    console.log(username, password);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="username" name="username"></input>
      </label>
      <label>
        Password:
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
