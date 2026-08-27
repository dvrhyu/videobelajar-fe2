import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function PasswordField({
  id,
  label,
  value,
  onChange,
  placeholder = "",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Form.Group className="mb-3">
      <Form.Label htmlFor={id}>
        {label} <span className="required">*</span>
      </Form.Label>

      <div className="password-wrapper">
        <Form.Control
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
        >
          <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
        </button>
      </div>
    </Form.Group>
  );
}