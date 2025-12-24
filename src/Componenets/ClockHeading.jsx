let ClockHeading = () => {
  return (
    <div style={styles.container}>
      <div style={styles.clockIcon}>🕒</div>

      <h1 style={styles.heading}>Bharat Clock</h1>

      <p style={styles.tagline}>India’s Time, Perfectly Presented</p>

      <div style={styles.divider}></div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginBottom: "25px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  clockIcon: {
    fontSize: "3rem",
    marginBottom: "5px",
    color: "#ff6f00",
    textShadow: "0 2px 4px rgba(0,0,0,0.15)",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "800",
    letterSpacing: "1px",
    color: "#1a1a1a",
    marginBottom: "5px",
  },
  tagline: {
    fontSize: "1.1rem",
    color: "#555",
    fontStyle: "italic",
  },
  divider: {
    width: "80px",
    height: "4px",
    backgroundColor: "#ff6f00",
    margin: "15px auto",
    borderRadius: "2px",
  },
};

export default ClockHeading;
