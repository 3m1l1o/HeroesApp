//import { useEffect } from "react";
import { useForms } from "../Hooks/useForms";

export const FormWithCustomHook = () => {
  const { formState, onInputChange } = useForms({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password, onResetForm } = formState;

  return (
    <>
      <h1>Formulario con custom Hooks</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        name="username"
        placeholder="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="@emilioGallo"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};
