export default function Home() {
  return (
    <>
    <head>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="kirst" />
      <link rel="manifest" href="/site.webmanifest" />
    </head>
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "2rem 1rem" }}>
        <header>
          <h1 style={{ fontSize: "2.5rem" }}><b>Kirsten Michaela</b></h1>
          <h3 style={{ fontSize: "1rem" }}><em>A little bit of Kirsten</em></h3>
        </header>

        <main>
          <section>
            <br></br>
            <p>
             Hi, I&apos;m Kirsten. By profession, I&apos;m a designer, but at heart
             I&apos;m someone who loves learning and exploring. I&apos;m exploring web development and learning how design and code work together to build digital products.
            </p>
            
            <br></br>

            <p>
             At the moment, I&apos;m focused on improving my skills in web development, design, and modern digital tools.
           </p>

          <br></br>
           <p>
              Technology is constantly evolving, and I&apos;m excited to keep
              learning alongside it. Beyond my professional interests, I enjoy spending time outdoors and exploring new places.
           </p>

            <br></br>
           <p>
              Hiking gives me a chance to disconnect from screens and reconnect with nature. I also love reading books, it&apos;s one of my favourite 
              things to do when I want to chill and relax. Reading is really fun. If it&apos;s only possible to read books all day long, I would do it.
              I also love to listen to podcasts. There is actually a lot...
           </p>

            <br></br>

            <p> 
             Want to see some of my motion graphics in action? You can catch a video over on the <a href="https://symphonee.ai/en" style={{ color: "purple" }}><u><b>Symphonee</b></u></a> website.
            </p>
          </section>
          
          <br></br>

          <aside>
            <h2 style={{ fontSize: "1.5rem" }}><b>My Digital Space</b></h2>

            <ul>
              <li>
                <a href="/mountains">- <u>Mountains Hiked</u></a>
              </li>
              <li>
                <a href="/randoms">- <u>Randoms</u></a>
              </li>
            </ul>
          </aside>

          <br></br>

          <footer style={{ marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid #ddd" }}>
            <p>
              <a href="https://github.com/kirst-micha"><u>Github</u></a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}