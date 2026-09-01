import { useState } from "react";

export default function UserSettingsForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ username: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const validate = (fieldValues = { username, email }) => {
    const newErrors = { username: "", email: "" };

    if (!fieldValues.username.trim()) {
      newErrors.username = "Username cannot be blank.";
    }

    if (!fieldValues.email.includes("@")) {
      newErrors.email = "Email must include '@'.";
    }

    setErrors(newErrors);
    return !newErrors.username && !newErrors.email;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    setSubmitted(isValid);
    if (isValid) {
      // Replace with real save logic (API call, etc.)
      console.log("Saved settings:", { username, email });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center p-6">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-6 space-y-5"
      >
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Account settings
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Update your username and email address.
          </p>
        </div>

        {submitted && (
          <div className="rounded-md bg-green-50 border border-green-200 text-green-800 text-sm px-3 py-2">
            Settings saved successfully.
          </div>
        )}

        {/* Username field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setSubmitted(false);
            }}
            aria-invalid={!!errors.username}
            aria-describedby={errors.username ? "username-error" : undefined}
            className={`w-full rounded-md border px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 ${
              errors.username
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-300 focus:ring-blue-300"
            }`}
          />
          {errors.username && (
            <p id="username-error" className="mt-1 text-sm text-red-600">
              {errors.username}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitted(false);
            }}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full rounded-md border px-3 py-2 text-sm text-slate-900 outline-none focus:ring-2 ${
              errors.email
                ? "border-red-400 focus:ring-red-300"
                : "border-slate-300 focus:ring-blue-300"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 text-white text-sm font-medium py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
        >
          Save changes
        </button>
      </form>
    </div>
  );
}