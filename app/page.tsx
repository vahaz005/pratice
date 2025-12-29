import Image from "next/image";

export default function Vahaz() {
  return (
    <main>
      <section className="hero">
        <div className="l-container">
          <div className="copy">
            <h1>Learnio — Build skills, measure progress, empower teams</h1>
            <p>
              A modern learning management platform for schools and teams. Create
              beautiful courses, track learner progress, and deliver engaging
              experiences at scale.
            </p>
            <div className="cta">
              <a className="btn primary" href="#signup">Get started — it's free</a>
              <a className="btn ghost" href="#features">See features</a>
            </div>
            <div style={{marginTop:18}}>
              <small style={{color:'var(--muted)'}}>Trusted by instructors and teams worldwide</small>
            </div>
          </div>

          <div className="hero-visual">
            <div className="card" style={{width:360}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:12,alignItems:'center'}}>
                <strong>Intro to Product Design</strong>
                <span style={{color:'var(--muted)',fontSize:12}}>12 lessons</span>
              </div>
              <div style={{height:8,background:'#fee2e2',borderRadius:8,overflow:'hidden',marginBottom:12}}>
                <div style={{width:'52%',height:'100%',background:'linear-gradient(90deg,#dc2626,#f87171)'}} />
              </div>
              <p style={{margin:0,color:'var(--muted)',fontSize:14}}>Engaging videos, quizzes and hands-on projects. Track completions and certifications.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="l-container">
        <h2 style={{marginTop:0}}>Features that scale learning</h2>
        <div className="features">
          <div className="feature card">
            <h3>Authoring tools</h3>
            <p>Create interactive lessons, quizzes and assignments quickly.</p>
          </div>
          <div className="feature card">
            <h3>Analytics & reporting</h3>
            <p>Monitor learner progress and measure outcomes with built-in analytics.</p>
          </div>
          <div className="feature card">
            <h3>Integrations</h3>
            <p>Connect to your LMS, SSO, calendar, and content libraries.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="l-container">
        <div className="cta-section card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:20,flexWrap:'wrap'}}>
            <div>
              <h3 style={{margin:'0 0 6px'}}>Simple transparent pricing</h3>
              <p style={{margin:0,color:'var(--muted)'}}>Start free — upgrade when your team grows.</p>
            </div>
            <div style={{display:'flex',gap:12}}>
              <a className="btn ghost" href="#">Try free</a>
              <a className="btn primary" href="#signup">Contact sales</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="l-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}}>
          <div style={{fontWeight:700}}>Learnio</div>
          <div style={{color:'var(--muted)'}}>© {new Date().getFullYear()} Learnio — built with care</div>
        </div>
      </footer>
    </main>
  );
}
