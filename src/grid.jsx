import './grid.css'
import { useState, useEffect } from 'react';
import GlareHover from './GlareHover'

function Grid() {

  const [stats, setStats] = useState({
    doctors: 1200,
    patients: 4000,
    cured: 2500
  });

  // Sample progress data

  // const RADIUS = 45;
  // const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  // const progress = {
  //   appointments: {
  //     value: 8,
  //     label: 'sessions',
  //     offset: CIRCUMFERENCE * (1 - 0.44), // 80% filled
  //   },
  //   exerciseTime: {
  //     value: '12h',
  //     label: 'exercise',
  //     offset: CIRCUMFERENCE * (1 - 0.89),
  //   },
  //   gameTime: {
  //     value: '6h',
  //     label: 'games',
  //     offset: CIRCUMFERENCE * (1 - 0.4),
  //   },
  // };

  // Animate rings on load
        document.addEventListener('DOMContentLoaded', function() {
            const rings = document.querySelectorAll('.progress-ring');
            
            setTimeout(() => {
                rings[0].querySelector('.progress-circle').style.strokeDashoffset = '125.6'; // 80%
                rings[1].querySelector('.progress-circle').style.strokeDashoffset = '196';   // 60%  
                rings[2].querySelector('.progress-circle').style.strokeDashoffset = '105.6'; // 70%
            }, 500);
        });

        // Interactive hover effects
        const rings = document.querySelectorAll('.progress-ring');
        const centerTitle = document.querySelector('.center-title');
        const centerSubtitle = document.querySelector('.center-subtitle');

        const metrics = {
            appointments: { title: 'Appointments', subtitle: '12 completed (80%)' },
            exercise: { title: 'Exercise Time', subtitle: '45 hours (60%)' },
            games: { title: 'Cognitive Games', subtitle: '28 hours (70%)' }
        };

        rings.forEach(ring => {
            ring.addEventListener('mouseenter', function() {
                const metric = this.dataset.metric;
                centerTitle.textContent = metrics[metric].title;
                centerSubtitle.textContent = metrics[metric].subtitle;
                
                // Dim other rings
                rings.forEach(r => {
                    if (r !== this) {
                        r.style.opacity = '0.3';
                    }
                });
            });

            ring.addEventListener('mouseleave', function() {
                centerTitle.textContent = 'Health Metrics';
                centerSubtitle.textContent = 'Hover to focus';
                
                // Restore all rings
                rings.forEach(r => {
                    r.style.opacity = '1';
                });
            });
        });

  return (
    <div className="grid">
      <div className="Cured">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="stat-card">
            <h3>Cured</h3>
            <div className="stat-values"><p>{stats.cured}+</p></div>
            {/* <div className="stat-label">Patients</div> */}
          </div>
        </GlareHover>

      </div>
      <div className="App-icon">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <h2>
            App Icon
          </h2>
        </GlareHover>
      </div>
      <div className="Doc">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="stat-card">
            <h3>Doctors</h3>
            <div className="stat-values"><p>{stats.doctors}+</p></div>
            {/* <div className="stat-label">Professionals</div> */}
          </div>
        </GlareHover>
      </div>
      <div className="Rating">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div class="rating_card">
            <h2>
              4.9
            </h2>
            <div class="arrow"><p>↗</p></div>
          </div>
        </GlareHover>

      </div>
      <div className="Wallet">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <h2>
            $5469
          </h2>
        </GlareHover>


      </div>
      <div className="profile">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div className="person-card">
            <div className="person-data">
              <h3>Anant Srivastava</h3>
              <p>19 years</p>
              <p>Kanpur, Uttar Pradesh</p>
            </div>
            <div className="svg">
              <svg className="main-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#9A48D0" fillOpacity="1" d="M0,160L80,144C160,128,320,96,480,85.3C640,75,800,85,960,80C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
              <svg className="overlay-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#be0ec1ff" fillOpacity="30%" d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,160C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
              </svg>
            </div>
          </div>
        </GlareHover>

      </div>
      <div className="Patient-stats">
        <GlareHover
          glareColor="#ffffff"
          glareOpacity={1}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
        >
          <div class="health-progress">
            {/* <h3>Health Progress</h3> */}

            <div class="progress-rings">
              
              <div class="progress-ring ring-1" data-metric="appointments">
                <svg width="280" height="280">
                  <circle class="bg-circle" cx="140" cy="140" r="100"></circle>
                  <circle class="progress-circle" cx="140" cy="140" r="100"></circle>
                </svg>
              </div>

              
              <div class="progress-ring ring-2" data-metric="exercise">
                <svg width="220" height="220">
                  <circle class="bg-circle" cx="110" cy="110" r="78"></circle>
                  <circle class="progress-circle" cx="110" cy="110" r="78"></circle>
                </svg>
              </div>

              
              <div class="progress-ring ring-3" data-metric="games">
                <svg width="160" height="160">
                  <circle class="bg-circle" cx="80" cy="80" r="56"></circle>
                  <circle class="progress-circle" cx="80" cy="80" r="56"></circle>
                </svg>
              </div>

              <div class="center-content">
                <div class="center-title">Health Metrics</div>
                <div class="center-subtitle">Hover to focus</div>
              </div>
            </div>

             <div class="legend">
              <div class="legend-item">
                <div class="legend-dot"></div>
                <span>Appointments (80%)</span>
              </div>
              <div class="legend-item">
                <div class="legend-dot"></div>
                <span>Exercise (60%)</span>
              </div>
              <div class="legend-item">
                <div class="legend-dot"></div>
                <span>Games (70%)</span>
              </div>
            </div>

            <div class="stats">
              <div class="stat">
                <span class="stat-value">12</span>
                <span class="stat-label">Total Visits</span>
              </div>
              <div class="stat">
                <span class="stat-value">45h</span>
                <span class="stat-label">Exercise Time</span>
              </div>
              <div class="stat">
                <span class="stat-value">28h</span>
                <span class="stat-label">Game Time</span>
              </div>
            </div>
          </div>

        </GlareHover>
      </div>

    </div>

  );
}

export default Grid