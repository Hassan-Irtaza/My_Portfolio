function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="avatar-wrap">
          <img
            src={`${import.meta.env.BASE_URL}Images/Photo.jpg`}
            alt="Syed Hassan Irtaza"
            className="avatar"
          />
        </div>
        <p className="hero-line1">Hi! I&apos;m Syed Hassan Irtaza.</p>
        <p className="hero-line2">
          Your go-to <span className="hero-role">full-stack developer</span>.
        </p>
        <a
          href="https://wa.me/923001234567?text=Hello,Hassan%20I%20wanted%20to%20book%20a%20call%20with%20you"
          className="btn-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
      </div>
    </section>
  )
}

export default Hero
