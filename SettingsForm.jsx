import { useState } from "react";

const initialState = {
  name: "Priya Osei",
  email: "priya@example.com",
  handle: "priyao",
  bio: "Product designer, occasional woodworker.",
  emailUpdates: true,
  productAnnouncements: false,
  weeklyDigest: true,
  theme: "system",
  language: "en",
};

function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <label style={{
        display: "block",
        fontSize: "14px",
        fontWeight: 600,
        color: "#22201D",
        marginBottom: "6px",
      }}>
        {label}
      </label>
      {children}
      {hint && (
        <p style={{
          fontSize: "13px",
          color: "#8A8378",
          marginTop: "6px",
          lineHeight: 1.4,
        }}>
          {hint}
        </p>
      )}
    </div>
  );
}

function Toggle({ checked, onChange, label, description }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        padding: "14px 0",
        borderTop: "1px solid #E7E2D9",
        background: "transparent",
        border: "none",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "#E7E2D9",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      <span style={{ paddingRight: "24px" }}>
        <span style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#22201D" }}>
          {label}
        </span>
        {description && (
          <span style={{ display: "block", fontSize: "13px", color: "#8A8378", marginTop: "3px", lineHeight: 1.4 }}>
            {description}
          </span>
        )}
      </span>
      <span
        style={{
          flexShrink: 0,
          width: "38px",
          height: "22px",
          borderRadius: "11px",
          background: checked ? "#2B5F5C" : "#DDD8D0",
          position: "relative",
          transition: "background 150ms ease",
          marginTop: "2px",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: checked ? "18px" : "2px",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background: "#FAF9F6",
            transition: "left 150ms ease",
            boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        />
      </span>
    </button>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  fontSize: "14px",
  color: "#22201D",
  background: "#FFFFFF",
  border: "1px solid #DDD8D0",
  borderRadius: "6px",
  outline: "none",
  fontFamily: "inherit",
};

export default function SettingsForm() {
  const [form, setForm] = useState(initialState);
  const [saved, setSaved] = useState(false);

  const set = (key) => (value) => {
    setForm((f) => ({ ...f, [key]: value }));
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
  };

  return (
    <div style={{
      minHeight: "100%",
      background: "#F4F1EA",
      padding: "48px 20px",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          background: "#FAF9F6",
          border: "1px solid #E7E2D9",
          borderRadius: "10px",
          padding: "36px 32px",
        }}
      >
        <h1 style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#22201D",
          margin: "0 0 4px",
        }}>
          Account settings
        </h1>
        <p style={{ fontSize: "14px", color: "#8A8378", margin: "0 0 32px" }}>
          Update your profile, notifications, and how the app looks.
        </p>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#2B5F5C", margin: "0 0 18px" }}>
            Profile
          </h2>

          <Field label="Name">
            <input
              style={inputStyle}
              value={form.name}
              onChange={(e) => set("name")(e.target.value)}
            />
          </Field>

          <Field label="Email">
            <input
              type="email"
              style={inputStyle}
              value={form.email}
              onChange={(e) => set("email")(e.target.value)}
            />
          </Field>

          <Field label="Handle" hint="This appears in your public profile URL.">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "14px", color: "#8A8378", marginRight: "6px" }}>@</span>
              <input
                style={inputStyle}
                value={form.handle}
                onChange={(e) => set("handle")(e.target.value)}
              />
            </div>
          </Field>

          <Field label="Bio">
            <textarea
              style={{ ...inputStyle, minHeight: "72px", resize: "vertical" }}
              value={form.bio}
              onChange={(e) => set("bio")(e.target.value)}
            />
          </Field>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#2B5F5C", margin: "0 0 4px" }}>
            Notifications
          </h2>
          <Toggle
            checked={form.emailUpdates}
            onChange={set("emailUpdates")}
            label="Email updates"
            description="Get notified when someone comments on your work."
          />
          <Toggle
            checked={form.productAnnouncements}
            onChange={set("productAnnouncements")}
            label="Product announcements"
            description="New features and occasional changes worth knowing about."
          />
          <Toggle
            checked={form.weeklyDigest}
            onChange={set("weeklyDigest")}
            label="Weekly digest"
            description="A short summary of activity every Monday morning."
          />
        </section>

        <section style={{ marginBottom: "8px" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 700, color: "#2B5F5C", margin: "0 0 18px" }}>
            Preferences
          </h2>

          <Field label="Theme">
            <select
              style={inputStyle}
              value={form.theme}
              onChange={(e) => set("theme")(e.target.value)}
            >
              <option value="system">Match system</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </Field>

          <Field label="Language">
            <select
              style={inputStyle}
              value={form.language}
              onChange={(e) => set("language")(e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="pt">Português</option>
              <option value="ur">اردو</option>
            </select>
          </Field>
        </section>

        <div style={{ display: "flex", alignItems: "center", marginTop: "28px" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#FAF9F6",
              background: "#2B5F5C",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Save changes
          </button>
          {saved && (
            <span style={{ marginLeft: "14px", fontSize: "13px", color: "#2B5F5C" }}>
              Saved.
            </span>
          )}
        </div>
      </form>
    </div>
  );
}