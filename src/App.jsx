import { useState, useEffect } from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Threads from './Threads';
import Grid from './grid';
import Doctors from './Doctor-section/doctors';

// separate the components and use router, then go for login-page credentials

const PsychoLotusApp = () => {
  const [quote, setQuote] = useState("Keep your face always toward the sunshine—and shadows will fall behind you.");
  const [appointmentDate, setAppointmentDate] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [potentialCause, setPotentialCause] = useState('');
  const [nextAppointmentTime, setNextAppointmentTime] = useState('12:00 pm');
  const [moneyLeft, setMoneyLeft] = useState(0);

  // Sample stats data
  const [stats, setStats] = useState({
    doctors: 1200,
    patients: 4000,
    cured: 2500
  });

  // Sample progress data
  const [progress, setProgress] = useState({
    appointments: { value: 0, label: 'calls', width: '20%' },
    exerciseTime: { value: 0, label: 'Hours', width: '40%' },
    gameTime: { value: 0, label: 'Hours', width: '60%' }
  });

  // Sample motivational quotes
  const quotes = [
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Mental illness is not a personal failure, it's a medical condition.",
    "You are stronger than you think and more resilient than you imagine.",
    "Healing is not linear, but every step forward counts.",
    "Your mental health is just as important as your physical health."
  ];

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  const handleSaveDate = () => {
    if (appointmentDate) {
      alert(`Appointment date saved: ${appointmentDate}`);
    } else {
      alert('Please select a date');
    }
  };

  const handleSOSClick = () => {
    alert('SOS activated! Emergency services have been contacted.');
  };

  const styles = `
    /* General Reset */

  `;

  return (
    <div className="app-container">
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      <header>
        <div className="logo">
          <h1>PsychoLotus</h1>
        </div>
        <nav>
          <ul className="nav-menu">
            <li><a href="#dashboard" className="active">Dashboard</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#games">Games</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Your Journey to Freedom</h2>
            <p>Mental illness is not a personal failure, it's a medical condition. Track your progress, connect with others, and crush your condition.</p>
          </div>
          <div style={{ width: '100vw', height: '600px', position: 'relative', marginTop: '-230px', marginLeft: '-175px' }}>
            <Threads
              amplitude={1}
              distance={0.2}
              enableMouseInteraction={true}
            />
          </div>
        </section>

        <Grid />
      </main>
        {/* <section className="dashboard">
          <div className="stats-container">

          </div>

          <div className="report">


            <div className="health-progress">
              <h3>Health Improvements</h3>
              <div className="progress-container">
                <div className="progress-item">
                  <div className="progress-info">
                    <span>Total appointments</span>
                    <span>{progress.appointments.value} {progress.appointments.label}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: progress.appointments.width}}></div>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-info">
                    <span>Time spent on exercises</span>
                    <span>{progress.exerciseTime.value} {progress.exerciseTime.label}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: progress.exerciseTime.width}}></div>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-info">
                    <span>Time spent on games</span>
                    <span>{progress.gameTime.value} {progress.gameTime.label}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: progress.gameTime.width}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sos">
              <button onClick={handleSOSClick}>SOS</button>
            </div>

            <div className="e-wallet">
              <h3>Money left</h3>
              <div className="value">
                ₹{moneyLeft}
                <p className="e-wallet-label">INR</p>
              </div>
            </div>

            <div className="appointment-countdown">
              <h3>Next Appointment at</h3>
              <div className="time">
                <p>{nextAppointmentTime}</p>
              </div>
            </div>
          </div>

          <div className="appointment-container">
            <h3>Book Your Appointment</h3>
            <div className="settings">
              <label htmlFor="problem-description">Description of your problem:</label>
              <textarea 
                id="problem-description" 
                cols="30" 
                rows="3"
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="Describe your symptoms or concerns..."
              />

              <label htmlFor="potential-cause">Potential Cause:</label>
              <textarea 
                id="potential-cause" 
                cols="30" 
                rows="3"
                value={potentialCause}
                onChange={(e) => setPotentialCause(e.target.value)}
                placeholder="What do you think might be causing this?"
              />

              <div className="date-picker">
                <input 
                  type="date" 
                  id="quit-date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
                <button className="primary-btn save-date" onClick={handleSaveDate}>Save</button>
              </div>

              <button className="primary-btn" onClick={handleSaveSettings}>Save Settings</button>
            </div>
          </div>
        </section> */}

        <Doctors/>

        <section className="motivation">
          <h3>Daily Motivation</h3>
          <div className="quote-container">
            <p id="quote">"{quote}"</p>
          </div>
          <button className="secondary-btn" id="new-quote" onClick={getNewQuote}>New Quote</button>
        </section>
      

      <footer>
        <div className="footer-content">
          <p>&copy; 2025 PsychoLotus. All rights reserved.</p>
          <p>Disclaimer: This website is for informational purposes only. Consult a healthcare professional for medical advice.</p>
        </div>
      </footer>
    </div>
  );
};

// function PsychoLotusApp() {

//   return (
//     <>
      
//     </>
//   );
// }

export default PsychoLotusApp;