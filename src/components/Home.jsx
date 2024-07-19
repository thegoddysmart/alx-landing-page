import aboutBanner from './../assets/images/about-banner.png'

const About = () => {
  return (
    <div>
        <section className="about">
            <div className="container">

                {/* <figure className="about-banner"> */}
                <img src={ aboutBanner } className='about-banner' alt="About Goddy Smart Labs" />
                {/* </figure> */}

                <div className="about-content">
                    <h2 className="h2 about-title">
                        Goddy Smart Labs Website
                    </h2>

                    <p className="section-text">
                        Goddy Smart Labs Website is designed to offer an engaging online presence for a media branding agency that provides startup branding services, business consultation, and design services. This project aims to create a dynamic and user-friendly web application that allows potential clients to explore services.
                    </p>

                    <p className="section-text">
                    Hero Page: The landing page with a compelling hero section has been fully implemented.
                    About Us Page: This page provides detailed information about the company and its mission.
                    Services Page: A comprehensive list of services offered by the company, including detailed descriptions.
                    User Authentication: Only the signup and login pages have been implemented for now
                    Service Booking System: Users can see the various services provided by the agency.
                    </p>


                    <a href="https://project-portfolio-l6gomnng8-goddysmarts-projects.vercel.app/">
                        <button className="btn btn-primary">
                            Go to Deployed Application
                        </button>
                    </a>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default About;
