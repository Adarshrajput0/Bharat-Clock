import { useEffect, useState } from "react";

const ClockSlogan = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup (important)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={styles.container}>
      {/* Subtitle */}
      <p style={styles.subtitle}>
        Stay connected with the current time of India 🇮🇳
      </p>

      {/* Date & Time */}
      <div style={styles.timeBox}>
        <p style={styles.timeTitle}>
          ⏰ <strong>Current Date & Time (India)</strong>
        </p>

        <p style={styles.time}>
          📅 {time.toLocaleDateString()} <br />
          🕒 {time.toLocaleTimeString()}
        </p>
      </div>

      {/* Description */}
      <p style={styles.description}>
        This clock always shows the current Indian Standard Time (IST) based on
        your system clock, helping you stay punctual and organized.
      </p>

      {/* Quote */}
      <p style={styles.quote}>“Time is precious. Use it wisely.”</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "#f0f8ff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "20px",
  },
  timeBox: {
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  timeTitle: {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "8px",
  },
  time: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    color: "#00796b",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  quote: {
    marginTop: "20px",
    fontStyle: "italic",
    color: "#00796b",
  },
};

export default ClockSlogan;
