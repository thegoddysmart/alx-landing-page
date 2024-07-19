import Goddy from './../assets/images/goddywork.jpg'

const About = () => {
  return (
    <div>
        <section className="about">
            <div className="container">

                <img src={ Goddy } className='Godfred Awudi' alt="About Goddy Smart Labs" />

                <div className="about-content">
                    <h2 className="h2 about-title">
                        About Section
                    </h2>

                    <p className="section-text">
                        The inspiration for the Goddy Smart Labs Website stems from my passion for helping startups. Witnessing the struggles that many small businesses face in establishing a strong online presence, I wanted to create a platform that not only showcases the capabilities of a branding agency but also provides a seamless and interactive user experience for clients. This project is also a Portfolio Project for my ALX School, aiming to demonstrate my skills and expertise in web development.
                    </p>

                    <p className="section-text">
                        <b>Name:</b> Godfred Awudi
                    </p>

                    <a href="https://www.linkedin.com/in/godfred-awudi/" className="section-text">
                        My LinkedIn Profile: https://www.linkedin.com/in/godfred-awudi/
                    </a>
                    
                    <a href="https://youtu.be/OiFRtpdGf74">
                        <button className="btn btn-primary">
                            YouTube Video
                        </button>
                    </a>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default About;
