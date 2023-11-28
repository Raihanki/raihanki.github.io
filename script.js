const cursorArea = document.querySelector(".cursor-area");

document.addEventListener("mousemove", (e) => {
  cursorArea.style.left = e.pageX + "px";
  cursorArea.style.top = e.pageY + "px";
});

document.addEventListener("scroll", () => {
  const isAtBottom =
    window.innerHeight + window.scrollY >= document.body.offsetHeight;

  const isAtRight =
    window.innerWidth + window.scrollX >= document.body.offsetWidth;

  const isScrollable = document.body.offsetHeight > window.innerHeight;

  if (isAtBottom && isScrollable) {
    window.scrollTo(0, document.body.offsetHeight - window.innerHeight - 1);
  }

  if (isAtRight) {
    window.scrollTo(
      document.body.offsetWidth - window.innerWidth - 1,
      window.scrollY
    );
  }
});

const iconGithub = document.querySelector("#icon-github");
iconGithub.addEventListener("click", () => {
  window.open("https://github.com/raihanki");
});

const iconInstagram = document.querySelector("#icon-instagram");
iconInstagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/raihanki1/");
});

const iconLinkedin = document.querySelector("#icon-linkedin");
iconLinkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/raihanki");
});

const iconMail = document.querySelector("#icon-mail");
iconMail.addEventListener("click", () => {
  window.open("mailto:raihanki02@gmail.com");
});
