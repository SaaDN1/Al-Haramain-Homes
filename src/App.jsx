import './styles/reset.css';
import './styles/theme.css';
import './styles/header-footer.css';
import { useState, useEffect, useMemo } from 'react';
import logo from '../images/logo.png';
import iigLogo from '../images/IIG logo.png';

export default function HaramainHomesPage() {
  const HERO_TRANSITION_MS = 2000;
  const HERO_HOLD_MS = 4000;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHeroReady, setIsHeroReady] = useState(false);

  const heroSlides = useMemo(
    () => [
      { image: 'https://iig.sa/wp-content/uploads/2026/01/piqsels.com-id-zjpde-1-scaled.jpg' },
      { image: 'https://iig.sa/wp-content/uploads/2026/01/piqsels.com-id-olvma-1-scaled.jpg' },
      { image: 'https://iig.sa/wp-content/uploads/2026/01/piqsels.com-id-zyuvc-1-scaled.jpg' },
    ],
    []
  );

  const currentSlide = heroSlides[currentImageIndex];
  const nextSlide = heroSlides[nextImageIndex];

  useEffect(() => {
    let loadedCount = 0;

    const markLoaded = () => {
      loadedCount += 1;
      if (loadedCount === heroSlides.length) {
        setIsHeroReady(true);
      }
    };

    heroSlides.forEach((slide) => {
      const img = new Image();
      img.onload = markLoaded;
      img.onerror = markLoaded;
      img.src = slide.image;
    });
  }, [heroSlides]);

  useEffect(() => {
    if (!isHeroReady) {
      return undefined;
    }

    let transitionTimer;

    const holdTimer = setTimeout(() => {
      const upcomingIndex = (currentImageIndex + 1) % heroSlides.length;
      setNextImageIndex(upcomingIndex);
      setIsTransitioning(true);

      transitionTimer = setTimeout(() => {
        setCurrentImageIndex(upcomingIndex);
        setIsTransitioning(false);
      }, HERO_TRANSITION_MS);
    }, HERO_HOLD_MS);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(transitionTimer);
    };
  }, [currentImageIndex, heroSlides.length, HERO_HOLD_MS, HERO_TRANSITION_MS, isHeroReady]);

  return (
    <div className='haramain-site' id='top'>
      {/* Header */}
      <header className='site-header'>
        <div className='container'>
          <div className='header-content'>
            <div className='logo-section'>
              <a href='#top' aria-label='Back to top'>
                <img
                  src={logo}
                  alt='Al-Haramain Homes by IIG'
                  className='logo'
                />
              </a>
            </div>
            <nav className='nav-menu'>
              <a href='#what-we-do'>What We Do</a>
              <a href='#who-for'>Who It's For</a>
              <a href='#process'>Process</a>
              <a href='#faq'>FAQ</a>
              <a href='#enquiry' className='cta-button'>
                Check Eligibility
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className='hero'
        style={{
          '--hero-transition-duration': isHeroReady ? `${HERO_TRANSITION_MS}ms` : '0ms',
        }}
      >
        <div
          className='hero-bg-layer hero-bg-current'
          style={{
            backgroundImage: `url('${currentSlide.image}')`,
            opacity: isHeroReady && isTransitioning ? 0 : 1,
          }}
        ></div>
        <div
          className='hero-bg-layer hero-bg-next'
          style={{
            backgroundImage: `url('${nextSlide.image}')`,
            opacity: isHeroReady && isTransitioning ? 1 : 0,
          }}
        ></div>
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1>
            Own a Home Near the <span className='highlight'>Haramain</span>
          </h1>
          <p className='hero-subtitle'>
            Legally secure your future in Saudi Arabia
            <br />
            with expert guidance backed by{' '}
            <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
              IIG
            </a>
          </p>
          <a href='#enquiry' className='hero-cta'>
            Begin Your Journey
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section id='what-we-do' className='section what-we-do'>
        <div className='container'>
          <h2>What We Do</h2>
          <p className='section-intro'>
            Al-Haramain Homes helps Muslims secure compliant residential ownership opportunities in
            Makkah and Madinah, backed by{' '}
            <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
              IIG
            </a>
            .
          </p>

          <div className='who-we-are-layout'>
            <div className='who-we-are-image-wrap'>
              <img
                src='https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1800&q=80'
                alt='Professional property advisory consultation with clients'
                className='who-we-are-image'
              />
            </div>

            <div className='who-we-are-points'>
              <div className='who-we-are-point'>
                <div className='point-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12 3L18 6V11C18 15 15.4 18.4 12 19.5C8.6 18.4 6 15 6 11V6L12 3Z'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.5 11.8L11.1 13.4L14.8 9.7'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='point-copy'>
                  <h3>Legal & Market Context</h3>
                  <p>
                    We map each case against current Saudi regulations and Vision 2030 pathways
                    before any transaction.
                  </p>
                </div>
              </div>

              <div className='who-we-are-point'>
                <div className='point-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 19H20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M7 19V11C7 8.8 8.8 7 11 7H13C15.2 7 17 8.8 17 11V19'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M10 13H14'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M12 4V7'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M9.5 6H14.5'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <div className='point-copy'>
                  <h3>Shariah-Compliant Structuring</h3>
                  <p>
                    Structures are designed around Shariah principles with clear governance and
                    documentation.
                  </p>
                </div>
              </div>

              <div className='who-we-are-point'>
                <div className='point-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect
                      x='3.5'
                      y='6'
                      width='5'
                      height='5'
                      rx='1.2'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <rect
                      x='15.5'
                      y='6'
                      width='5'
                      height='5'
                      rx='1.2'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <rect
                      x='9.5'
                      y='14'
                      width='5'
                      height='5'
                      rx='1.2'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <path
                      d='M8.5 8.5H15.5'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M18 11V13.5H12'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='point-copy'>
                  <h3>A Complete One-Stop Process</h3>
                  <p>
                    From sourcing to execution, we handle due diligence, legal documentation, and
                    coordination end to end.
                  </p>
                </div>
              </div>

              <div className='who-we-are-point'>
                <div className='point-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle
                      cx='12'
                      cy='12'
                      r='8'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <path
                      d='M4 12H20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M12 4C10 6.1 9 9 9 12C9 15 10 17.9 12 20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M12 4C14 6.1 15 9 15 12C15 15 14 17.9 12 20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <div className='point-copy'>
                  <h3>
                    <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
                      IIG
                    </a>{' '}
                    Backed Cross-Border Expertise
                  </h3>
                  <p>
                    Saudi, UK, and US-facing expertise supports overseas buyers through each
                    stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section id='who-for' className='section who-for'>
        <div className='container'>
          <h2>Who It's For</h2>
          <p className='section-intro'>
            Built for committed buyers with clear budgets and long-term intent.
          </p>

          <div className='audience-grid'>
            <div className='audience-card'>
              <div className='audience-card-title'>
                <span className='audience-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M4 10.5L12 4L20 10.5V19H4V10.5Z'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.5 19V14.5H14.5V19'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <h3>Relocating Families</h3>
              </div>
              <p>
                Families relocating to Saudi Arabia who want a compliant home near the Haramain.
              </p>
            </div>

            <div className='audience-card'>
              <div className='audience-card-title'>
                <span className='audience-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5 8H16V19H5V8Z'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9 5H20V16H16'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M8.5 11.5H12.5'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                  </svg>
                </span>
                <h3>Second Home Buyers</h3>
              </div>
              <p>
                Buyers seeking a second or retirement home for regular Umrah and Hajj stays.
              </p>
            </div>

            <div className='audience-card'>
              <div className='audience-card-title'>
                <span className='audience-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M5 18.5H19'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M7 15L10 12L13 13.5L17 9'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15 9H17V11'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <h3>Investors and Entrepreneurs</h3>
              </div>
              <p>
                Investors seeking faith-aligned, long-term residential exposure rather than
                speculative plays.
              </p>
            </div>

            <div className='audience-card'>
              <div className='audience-card-title'>
                <span className='audience-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle
                      cx='12'
                      cy='12'
                      r='8'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <path
                      d='M4 12H20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M12 4C10 6.1 9 9 9 12C9 15 10 17.9 12 20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M12 4C14 6.1 15 9 15 12C15 15 14 17.9 12 20'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                  </svg>
                </span>
                <h3>Diaspora and Global Muslims</h3>
              </div>
              <p>
                UK and global Muslims who want secure ownership in a high-demand Saudi market.
              </p>
            </div>

            <div className='audience-card'>
              <div className='audience-card-title'>
                <span className='audience-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect
                      x='5'
                      y='8'
                      width='14'
                      height='10'
                      rx='1.8'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <path
                      d='M9 8V6.5C9 5.7 9.7 5 10.5 5H13.5C14.3 5 15 5.7 15 6.5V8'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                    <path
                      d='M5 12H19'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                    />
                  </svg>
                </span>
                <h3>Career Professionals</h3>
              </div>
              <p>
                Professionals building a long-term life in Saudi Arabia.
              </p>
            </div>

            <div className='audience-card'>
              <div className='audience-card-title'>
                <span className='audience-icon' aria-hidden='true'>
                  <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <circle
                      cx='12'
                      cy='12'
                      r='7.5'
                      stroke='currentColor'
                      strokeWidth='1.9'
                    />
                    <circle cx='12' cy='12' r='2.2' stroke='currentColor' strokeWidth='1.9' />
                    <path
                      d='M14 10L18.5 5.5'
                      stroke='currentColor'
                      strokeWidth='1.9'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <h3>Vision 2030 Aligned Buyers</h3>
              </div>
              <p>
                Buyers who want to participate in Vision 2030 through real residential ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='process' className='section process'>
        <div className='container'>
          <h2>How It Works</h2>
          <p className='section-intro'>
            Four clear steps from enquiry to completion.
          </p>

          <div className='process-steps'>
            <div className='step'>
              <div className='step-number'>1</div>
              <h3>Initial Consultation (£25)</h3>
              <p>
                Submit your details for the enquiry review, then we confirm fit and schedule a
                confidential consultation call.
              </p>
            </div>

            <div className='step'>
              <div className='step-number'>2</div>
              <h3>Project Matching</h3>
              <p>
                We present suitable options and complete due-diligence checks across
                documentation, legal status, and risk.
              </p>
            </div>

            <div className='step'>
              <div className='step-number'>3</div>
              <h3>Legal Compliance</h3>
              <p>
                After selection, we coordinate legal documentation, permits, contracts, and all
                required compliance filings.
              </p>
            </div>

            <div className='step'>
              <div className='step-number'>4</div>
              <h3>Completion and Aftercare</h3>
              <p>
                Purchase completes with title transfer, followed by practical aftercare support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id='faq' className='section faq'>
        <div className='container'>
          <h2>Frequently Asked Questions</h2>

          <div className='faq-grid'>
            <div className='faq-item'>
              <h3>Can non-Saudis buy property in Makkah and Madinah?</h3>
              <p>
                Rules in and around Makkah and Madinah are specific and can change. We assess
                eligibility case by case and only proceed where current regulations allow.
              </p>
            </div>

            <div className='faq-item'>
              <h3>What is Vision 2030 and how does it affect property ownership?</h3>
              <p>
                Vision 2030 has expanded opportunities and improved frameworks for qualified foreign
                property buyers.
              </p>
            </div>

            <div className='faq-item'>
              <h3>
                What is{' '}
                <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
                  IIG
                </a>{' '}
                and why should I trust it?
              </h3>
              <p>
                <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
                  International Investment Gate (IIG)
                </a>{' '}
                is a Shariah-compliant cross-border advisory and investment firm whose expertise
                underpins our process.
              </p>
            </div>

            <div className='faq-item'>
              <h3>What are the typical costs involved?</h3>
              <p>
                Beyond purchase price, clients should budget for legal, administrative,
                documentation, and advisory costs. A clear fee outline is shared after eligibility
                review so you can make an informed decision before proceeding.
              </p>
            </div>

            <div className='faq-item'>
              <h3>What happens if something goes wrong?</h3>
              <p>
                We use legal safeguards, due-diligence controls, and clear escalation pathways.
              </p>
            </div>

            <div className='faq-item'>
              <h3>How long does the full process take?</h3>
              <p>
                Timelines vary by buyer profile, documentation readiness, and regulatory review.
                We provide a case-specific timeline after your initial assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id='enquiry' className='section enquiry'>
        <div className='container'>
          <h2>Check Your Eligibility</h2>
          <p className='section-intro'>
            Complete the secure form below and we will respond within one business day.
          </p>

          <div className='tally-embed-wrapper'>
            <iframe
              src='https://tally.so/embed/obAZp1?alignLeft=0&hideTitle=1&transparentBackground=1'
              title='Al-Haramain Homes Enquiry Form'
              className='tally-embed'
              frameBorder='0'
              marginHeight='0'
              marginWidth='0'
            ></iframe>
          </div>

          <p className='enquiry-fallback'>
            If the form does not load,{' '}
            <a href='https://tally.so/r/obAZp1' target='_blank' rel='noreferrer'>
              open it directly here
            </a>
            .
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className='site-footer'>
        <div className='container'>
          <div className='footer-content'>
            <div className='footer-col'>
              <h4>About Al-Haramain Homes</h4>
              <p>
                Al-Haramain Homes is an{' '}
                <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
                  IIG-backed
                </a>{' '}
                advisory service for compliant residential ownership in Makkah and Madinah.
              </p>
            </div>

            <div className='footer-col'>
              <h4>Our Services</h4>
              <ul>
                <li><a href='#what-we-do'>Legal Structuring</a></li>
                <li><a href='#what-we-do'>Project Vetting & Due Diligence</a></li>
                <li><a href='#what-we-do'>End-to-End Advisory</a></li>
                <li>
                  <a href='https://iig.sa' target='_blank' rel='noreferrer'>
                    IIG-Backed Support
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-col'>
              <h4>Resources</h4>
              <ul>
                <li><a href='#faq'>FAQ</a></li>
                <li><a href='#process'>How It Works</a></li>
                <li><a href='#enquiry'>Check Eligibility</a></li>
              </ul>
            </div>

            <div className='footer-col'>
              <h4>Get Started</h4>
              <p>
                Submit your enquiry to begin your eligibility and project-matching review.
              </p>
              <a href='#enquiry' className='footer-journey-link'>
                Check Eligibility →
              </a>
            </div>
          </div>

          <div className='footer-bottom'>
            <a href='https://iig.sa' target='_blank' rel='noreferrer' className='footer-brand-link'>
              <img
                src={iigLogo}
                alt='International Investment Gate'
                className='footer-brand-logo'
              />
            </a>
            <p>
              © 2026 Al-Haramain Homes by{' '}
              <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
                International Investment Gate
              </a>
              . All rights reserved. |
              <a href='/privacy-policy.html' className='footer-legal-link'>Privacy Policy</a> |
              <a href='/terms-of-service.html' className='footer-legal-link'>Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
