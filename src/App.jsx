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
                Start Enquiry
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
        {/* moved hero-content out of the standard container so it sits flush left */}
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
                src='https://iig.sa/wp-content/uploads/2026/01/piqsels.com-id-zjpde-1-scaled.jpg'
                alt='Premium advisory and investment environment'
                className='who-we-are-image'
              />
            </div>

            <div className='who-we-are-points'>
              <div className='who-we-are-point'>
                <div className='point-icon'>⚖️</div>
                <div className='point-copy'>
                  <h3>Legal & Market Context</h3>
                  <p>
                    We map each case against current Saudi regulations and Vision 2030 pathways
                    before any transaction.
                  </p>
                </div>
              </div>

              <div className='who-we-are-point'>
                <div className='point-icon'>🕌</div>
                <div className='point-copy'>
                  <h3>Shariah-Compliant Structuring</h3>
                  <p>
                    Structures are designed around Shariah principles with clear governance and
                    documentation.
                  </p>
                </div>
              </div>

              <div className='who-we-are-point'>
                <div className='point-icon'>🧩</div>
                <div className='point-copy'>
                  <h3>A Complete One-Stop Process</h3>
                  <p>
                    From sourcing to execution, we handle due diligence, legal documentation, and
                    coordination end to end.
                  </p>
                </div>
              </div>

              <div className='who-we-are-point'>
                <div className='point-icon'>🌐</div>
                <div className='point-copy'>
                  <h3>
                    <a href='https://iig.sa' target='_blank' rel='noreferrer' className='iig-link'>
                      IIG
                    </a>
                    -Backed Cross-Border Expertise
                  </h3>
                  <p>
                    Saudi and UK-facing expertise supports overseas buyers through each stage.
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
              <h3>👨‍👩‍👧‍👦 Seeking Relocation</h3>
              <p>
                Families relocating to Saudi Arabia who want a compliant home near the Haramain.
              </p>
            </div>

            <div className='audience-card'>
              <h3>🏡 Second Home Owners</h3>
              <p>
                Buyers seeking a second or retirement home for regular Umrah and Hajj stays.
              </p>
            </div>

            <div className='audience-card'>
              <h3>💼 Investors & Entrepreneurs</h3>
              <p>
                Investors seeking faith-aligned, long-term residential exposure rather than
                speculative plays.
              </p>
            </div>

            <div className='audience-card'>
              <h3>🌍 Diaspora & Global Muslims</h3>
              <p>
                UK and global Muslims who want secure ownership in a high-demand Saudi market.
              </p>
            </div>

            <div className='audience-card'>
              <h3>🎓 Career Professionals</h3>
              <p>
                Professionals building a long-term life in Saudi Arabia.
              </p>
            </div>

            <div className='audience-card'>
              <h3>✨ Vision 2030 Believers</h3>
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
              <h3>Initial Enquiry & Consultation (£25)</h3>
              <p>
                Submit your details. We review fit and schedule a confidential consultation.
              </p>
            </div>

            <div className='step'>
              <div className='step-number'>2</div>
              <h3>Project Match & Due Diligence</h3>
              <p>
                We present vetted options with documentation, legal checks, and risk review.
              </p>
            </div>

            <div className='step'>
              <div className='step-number'>3</div>
              <h3>Formal Documentation & Compliance</h3>
              <p>
                After property selection, we coordinate permits, contracts, and required filings.
              </p>
            </div>

            <div className='step'>
              <div className='step-number'>4</div>
              <h3>Completion & Aftercare</h3>
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
                In designated areas, non-Saudis may buy residential property under Saudi regulations;
                requirements vary by case.
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
                is an established cross-border Saudi investment firm whose expertise underpins our
                advisory process.
              </p>
            </div>

            <div className='faq-item'>
              <h3>What are the typical costs involved?</h3>
              <p>
                Beyond purchase price, expect legal, administrative, documentation, and advisory
                costs.
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
                Most journeys take 6 to 12 weeks, depending on selection, documentation, and
                regulatory timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id='enquiry' className='section enquiry'>
        <div className='container'>
          <h2>Start Your Enquiry</h2>
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
                <li><a href='#enquiry'>Start Enquiry</a></li>
              </ul>
            </div>

            <div className='footer-col'>
              <h4>Get Started</h4>
              <p>
                Submit your enquiry to begin your eligibility and project-matching review.
              </p>
              <a href='#enquiry' style={{ color: '#b8956a', fontWeight: '600' }}>
                Start Your Journey →
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
              <a href='#' style={{ color: 'inherit', marginLeft: '10px' }}>Privacy Policy</a> | 
              <a href='#' style={{ color: 'inherit', marginLeft: '10px' }}>Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
