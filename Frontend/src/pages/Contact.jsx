export default function Contact() {
  return (
    <>
      <div className="text-center">
        <h2>Contact</h2>
        <p id="contactp">
          The htmlForm below is a way htmlFor you to send a message to the
          website's owner. Enter your name, email address, and a message and we
          will get back to you!
        </p>
      </div>
      <section>
        <article>
          <form action="/contact" method="POST">
            <fieldset id="conhtmlForm" className="d-flex flex-column">
              <legend className="text-center">Contact Us</legend>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Jack Smith"
                required
                autoFocus
              />
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="jacksmith@hotlook.com"
                pattern="[^ @]+@[^ @]+.[a-z]+"
                required
              />
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                placeholder="Hi, I love your webiste"
                required
              ></textarea>
              <label htmlFor="topic">Message topic</label>
              <select name="subject" required>
                <option>Site Issue</option>
                <option>cudos</option>
                <option>Other</option>
              </select>
              <div>
                Do you want to offer Brenden a job?
                <label htmlFor="job">
                  <input type="radio" name="joboffer" id="yes" />
                  Yes
                </label>
                <label htmlFor="job">
                  <input type="radio" name="joboffer" id="no" />
                  No
                </label>
                <label htmlFor="job">
                  <input type="radio" name="joboffer" id="maybe" />
                  Maybe
                </label>
              </div>
              <div>
                if yes, select the job pay range
                <br />
                <label htmlFor="jobpay">
                  <input type="checkbox" name="payrange" />
                  Over 100k
                </label>
                <br />
                <label htmlFor="jobpay">
                  <input type="checkbox" name="payrange" />
                  70K - 100k
                </label>
                <br />
                <label htmlFor="jobpay">
                  <input type="checkbox" name="payrange" />
                  Under 70k
                </label>
              </div>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
}
