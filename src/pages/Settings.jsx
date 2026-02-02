export default function Settings() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Settings</h2>
      <p style={styles.subtitle}>
        Manage your profile, AI preferences, and security options
      </p>

      <div style={styles.grid}>
        {/* Profile */}
        <div style={styles.card}>
          <h4>Profile Information</h4>
          <p>
            <b>Name:</b> {user.name || "User"}
          </p>
          <p>
            <b>Email:</b> {user.email || "user@email.com"}
          </p>
          <p>
            <b>Role:</b> Employee
          </p>
        </div>

        {/* AI Preferences */}
        <div style={styles.card}>
          <h4>AI Preferences</h4>
          <label style={styles.checkbox}>
            <input type="checkbox" defaultChecked /> Context-aware answers
          </label>
          <label style={styles.checkbox}>
            <input type="checkbox" defaultChecked /> Document priority
          </label>
          <label style={styles.checkbox}>
            <input type="checkbox" /> Verbose responses
          </label>
        </div>

        {/* Security */}
        <div style={styles.card}>
          <h4>Security</h4>
          <button style={styles.button}>Change Password</button>
          <button style={styles.button}>Enable 2FA</button>
        </div>

        {/* System */}
        <div style={styles.card}>
          <h4>System</h4>
          <p>Version: v1.0.0</p>
          <p>Status: Operational</p>
          <p>Last Sync: Just now</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(180deg,#020617,#020617)",
    color: "#e5e7eb",
  },
  title: {
    fontSize: 28,
    marginBottom: 6,
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: 30,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },
  card: {
    background: "rgba(255,255,255,0.06)",
    padding: 20,
    borderRadius: 16,
    backdropFilter: "blur(10px)",
  },
  checkbox: {
    display: "block",
    marginTop: 8,
    fontSize: 14,
  },
  button: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    border: "none",
    background: "#1e293b",
    color: "#e5e7eb",
    cursor: "pointer",
  },
};
