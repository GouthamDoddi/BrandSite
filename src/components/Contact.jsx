import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="full name" required />
        <input type="email" placeholder="email" required />
        <textarea placeholder="Write your query"> </textarea>
        <input type="submit" value="send" />
      </form>
    </div>
  );
}

export default Contact;
