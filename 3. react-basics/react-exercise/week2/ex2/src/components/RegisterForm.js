import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "Nati",
    lastName: "Bebe",
    email: "natnaelbebe@gmail.com",
  });

  return (
    <>
      <label>
        firstName:
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({ ...form, firstName: e.target.value });
          }}
        ></input>
      </label>

      <label>
        lastName:
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value });
          }}
        ></input>
      </label>
      <label>
        email:
        <input
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        ></input>
      </label>
      <p>
        {form.firstName} {form.lastName} ({form.email})
      </p>
    </>
  );
}
