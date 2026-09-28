import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    permanentAddress: "",
    currentAddress: "",
  });

  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [sameAddress, setSameAddress] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    let newErrors = {};

    // Username
    if (form.username.length < 3 || form.username.length > 25) {
      newErrors.username =
        "Username must be between 3 and 25 characters.";
    }

    // Email
    if (form.email === "") {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter a valid email.";
    }

    // Password
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must contain 8 characters, lowercase, uppercase, number and special character.";
    }

    // Confirm Password
    if (form.confirmPassword === "") {
      newErrors.confirmPassword =
        "Please enter the password again.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    // Permanent Address
    if (form.permanentAddress.trim() === "") {
      newErrors.permanentAddress =
        "Permanent address is required.";
    }

    // Current Address
    if (form.currentAddress.trim() === "") {
      newErrors.currentAddress =
        "Current address is required.";
    }

    // Photo
    if (!photo) {
      newErrors.photo = "Please upload your photo.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  const handleClear = () => {
    setForm({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      permanentAddress: "",
      currentAddress: "",
    });

    setPhoto(null);
    setErrors({});
    setSameAddress(false);
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>

        {/* Username */}
        <label>Username:</label>

        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          className={
            errors.username
              ? "error-input"
              : form.username
              ? "success-input"
              : ""
          }
        />

        {errors.username && (
          <p className="error">{errors.username}</p>
        )}

        {/* Email */}
        <label>Email:</label>

        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={
            errors.email
              ? "error-input"
              : form.email
              ? "success-input"
              : ""
          }
        />

        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        {/* Password */}
        <label>Password:</label>

        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className={
            errors.password
              ? "error-input"
              : form.password
              ? "success-input"
              : ""
          }
        />

        {errors.password && (
          <p className="error">{errors.password}</p>
        )}

        {/* Confirm Password */}
        <label>Confirm Password:</label>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Reenter your password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={
            errors.confirmPassword
              ? "error-input"
              : form.confirmPassword
              ? "success-input"
              : ""
          }
        />

        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        {/* Permanent Address */}
        <label>Permanent Address:</label>

        <textarea
          name="permanentAddress"
          value={form.permanentAddress}
          onChange={handleChange}
          placeholder="Enter permanent address"
          className={
            errors.permanentAddress
              ? "error-input"
              : form.permanentAddress
              ? "success-input"
              : ""
          }
        ></textarea>

        {errors.permanentAddress && (
          <p className="error">{errors.permanentAddress}</p>
        )}

        {/* Same Address Checkbox */}
        <div className="same-address">
          <input
            type="checkbox"
            checked={sameAddress}
            onChange={(e) => {
              setSameAddress(e.target.checked);

              if (e.target.checked) {
                setForm({
                  ...form,
                  currentAddress: form.permanentAddress,
                });
              } else {
                setForm({
                  ...form,
                  currentAddress: "",
                });
              }
            }}
          />

          <span>Same as Permanent Address</span>
        </div>

        {/* Current Address */}
        <label>Current Address:</label>

        <textarea
          name="currentAddress"
          value={form.currentAddress}
          onChange={handleChange}
          placeholder="Enter current address"
          className={
            errors.currentAddress
              ? "error-input"
              : form.currentAddress
              ? "success-input"
              : ""
          }
        ></textarea>

        {errors.currentAddress && (
          <p className="error">{errors.currentAddress}</p>
        )}

        {/* Photo */}
        <label>Upload Photo:</label>

        <input
          type="file"
          accept="image/*"
          onChange={handlePhoto}
        />

        {photo && (
          <div className="photo-preview">
            <img src={photo} alt="Preview" />
          </div>
        )}

        {errors.photo && (
          <p className="error">{errors.photo}</p>
        )}

        {/* Buttons */}
        <div className="buttons">

          <button
            type="submit"
            className="submit-btn"
          >
            SUBMIT
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={handleClear}
          >
            CLEAR
          </button>

        </div>

      </form>
    </div>
  );
}

export default Signup;