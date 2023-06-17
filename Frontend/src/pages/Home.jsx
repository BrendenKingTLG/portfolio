import SectionCard from "../components/SectionCard";
export default function Home() {
  return (
    <>
      <div className="container">
        <section>
          <h2 className="mt-2">Web Development Concepts</h2>
          <nav className="navbar navbar-expand-lg" id="globalnav">
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#images">
                    Optimizing Images
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#css">
                    CSS
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#forms">
                    Forms
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#express">
                    Express
                  </a>{" "}
                </li>
              </ul>
            </div>
          </nav>
          <article id="webserver">
            <SectionCard
              cardTitle="Web Servers"
              cardBody={
                <>
                  <p>
                    <strong>
                      Does index in relation to websites and servers?
                    </strong>
                    <br />
                    Web servers are configured by default to map requests (GET,
                    POST, etc.) for/to the root or "/" resource path to the
                    /index.html file. This file is the designated homepage on
                    the web server.
                  </p>
                  <p>
                    <strong>
                      What you see in the browser's Web Dev/Inspector tools.
                      What is different about the file's details on the web
                      server versus the local computer?
                    </strong>
                    <br />
                    The dev tools network tab contains more information such as
                    HTTP general, response and requests headers, the initiator
                    chain (requested resources) and timing metrics and cookie
                    information. The local system only shows HTML.
                  </p>
                  <p>
                    <strong>
                      Explain why the favicon.ico file has a status 200, but the
                      main.css and main.js files do not.
                    </strong>
                    <br />
                    The Favicon.ico is inherited from the previous domain and
                    therefore loaded into the browser. The CSS and JS files
                    return 404 (not found error) because they are not available
                    on the server.
                  </p>
                  <p>
                    <strong>
                      What are the scheme, subdomain, host domain, and
                      resources?
                    </strong>
                    <br />
                    Scheme: https://
                    <br />
                    subdomain: web.engr <br />
                    host domain: oregonstate.edu <br />
                    resources: ~kingbren/m1/a1-kingbren/index.html
                  </p>
                </>
              }
            />
          </article>
          <article id="design">
            <SectionCard
              cardTitle="Frontend Design"
              cardBody={
                <>
                  <p>
                    Frontend Design is the practice of creating the best user
                    experience for a website
                  </p>
                  <p>
                    To create a successful website that users will enjoy, there
                    are several key factors to consider. First and foremost, the
                    website should be effective and help users accomplish their
                    desired tasks. It should also be efficient, allowing users
                    to complete tasks in a minimal number of steps. The website
                    should be easy to navigate, with clear labeling and
                    intuitive links that are easy to interpret. It's important
                    to ensure the website is error-free and thoroughly tested
                    for common use cases. Finally, to encourage users to revisit
                    the webpage, it should be designed in an enjoyable and
                    engaging way. By focusing on these factors, website owners
                    can create a positive user experience that will keep
                    visitors coming back.
                  </p>
                  <p>
                    <strong>Page layout tags</strong> gives meaning to HTML by
                    sectioning content
                  </p>
                  <p>
                    <strong>Anchor tags</strong> can be used to navigate to a
                    specific part of an HTML page through the use of an ID or to
                    a separate HTML entirely
                  </p>
                </>
              }
            />
          </article>
          <article id="images">
            <SectionCard
              cardTitle="Optimizing images"
              cardBody={
                <>
                  <p>
                    What are the 6 major specifications of images for the web
                  </p>
                  <p>
                    Optimizing images for the web involves several
                    specifications that can improve website performance and user
                    experience. The six major specifications for web images
                    include having a descriptive file name, a small file size,
                    exact dimensions, correct file format, reduced resolution,
                    and the right color mode. Descriptive file names help with
                    SEO and make it easier for developers to understand the
                    content of an image. Smaller file sizes lead to faster load
                    times and exact dimensions prevent longer load times due to
                    large images being served in small boxes. The correct file
                    format for photos is usually .JPG, while line-art is usually
                    .GIF, and graphics with true transparency need 24-bit .PNG.
                    Providing multiple image sizes can accommodate varying
                    screen sizes, and the recommended color mode is RGB for
                    .PNG, .JPG, .SVG, and .WebP, and Indexed for .GIF.
                  </p>
                </>
              }
            />
          </article>
          <article id="css">
            <SectionCard
              cardTitle="Cascading stylesheets"
              cardBody={
                <>
                  <p>
                    Cascading Style Sheets (CSS) improve the usability,
                    readability, legibility of a web page.
                  </p>
                  <p>What are the 5 ways to incorporate styles</p>
                  <ul>
                    <li>External</li>
                    <li>Embedded</li>
                    <li>Inline</li>
                    <li>JavaScript template literals</li>
                    <li>regular JavaScript</li>
                  </ul>
                </>
              }
            />
          </article>
          <article id="forms">
            <SectionCard
              cardTitle="Form"
              cardBody={
                <>
                  <p>
                    The form tag is used to create a form on a webpage. The
                    input tag is used to create various form controls, such as
                    text boxes, radio buttons, checkboxes, and buttons. The
                    label tag description of what the input does. The for
                    attribute is used to link the label to the corresponding
                    control.
                  </p>
                </>
              }
            />
          </article>
          <article id="express">
            <SectionCard
              cardTitle="Express"
              cardBody={
                <>
                  <p>
                    Beyond the front end, delving into backend technologies,
                    Node, NPM, and Express or used to handle server-side code.
                    Node is a JavaScript runtime environment that allows a
                    server to run JavaScript code outside a browser. NPM is a
                    package manager to add additional functionality to node.
                    Finally, Express is a node framework for handling website
                    routing.
                  </p>
                </>
              }
            />
          </article>
        </section>
      </div>
    </>
  );
}
