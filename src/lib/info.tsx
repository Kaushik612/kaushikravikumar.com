import me from "../assets/avatar_me.jpeg";

export const avatar = me;

export const name = "Kaushik Ravikumar";
export const about = () => {
  return (
    <>
      A passionate{" "}
      <b>
        Backend Developer with over {new Date().getFullYear() - 2011} years of
        software development experience
      </b>
      &nbsp;and a proven knowledge of advanced technology & Full stack
      application development using{" "}
      <b>Java, Spring Boot, React, JavaScript & PL/SQL programming.</b>
      &nbsp;I have dedicated my career to building powerful, scalable backend
      systems—primarily with Spring Boot. <br />
      <br />
      From designing complex architectures to optimizing performance, I&apos;m
      passionate about creating solutions that scale effortlessly.
    </>
  );
};
export const bio = () => {
  return (
    <>
      I currently work as a Senior Software Engineer at Staples Inc., where I
      help architect and develop scalable backend microservices.
    </>
  );
};

export const passion = () => {
  return (
    <>
      I enjoy balancing backend precision with frontend finesse. Whether
      it&apos;s optimizing a cloud deployment or enhancing a user interface, I’m
      always looking for ways to create seamless experiences. <br />
      <br />
      <b>What I Bring to the Table:</b>
      <br />
      &bull;&nbsp;<b>Backends that Scale:</b> Proven experience in building
      resilient services with Spring Boot
      <br />
      &bull;&nbsp;<b>Cloud Solutions:</b>Extensive hands-on work with AWS,Azure
      & GCP
      <br />
      &bull;&nbsp;<b>Data-Driven:</b>Fluent in all things data—SQL, NoSQL, you
      name it
      <br />
      &bull;&nbsp;<b>Frontends with a Spark:</b> Crafting interactive UIs with
      React, JavaScript, and TypeScript
    </>
  );
};
