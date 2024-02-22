const render = () => {
  const App = document.createElement("div");
  App.id = "app-container";
  const contentContainer = document.createElement("div");
  App.append(contentContainer);
  contentContainer.id = "content-container";

  const logoContainer = document.createElement("div");
  logoContainer.className = "logo-container";
  const logoImg = document.createElement("img");
  logoContainer.append(logoImg);
  logoImg.src = "./assets/nd_logo.png";

  const collapseAbout = (element) => {
    aboutContent.remove();
    element.removeEventListener("click", collapseAbout);
    element.addEventListener("click", () => expandAbout(element));
  };

  const expandAbout = (element) => {
    aboutContainer.append(aboutContent);
    element.removeEventListener("click", expandAbout);
    element.addEventListener("click", () => collapseAbout(element));
  };

  const aboutContainer = document.createElement("div");
  aboutContainer.id = "about-container";
  const aboutH2 = document.createElement("h2");
  aboutContainer.append(aboutH2);
  aboutH2.innerText = "Who we are";
  aboutH2.addEventListener("click", () => expandAbout(aboutH2));

  const aboutContent = document.createElement("div");
  aboutContent.className = "content";
  const aboutP = document.createElement("p");
  aboutContent.append(aboutP);
  aboutP.innerText =
    "New Direction is a musical family seeking to manifest God's purpose.";

  const collapseEvents = (element) => {
    eventsContent.remove();
    element.removeEventListener("click", collapseEvents);
    element.addEventListener("click", () => expandEvents(element));
  };

  const expandEvents = (element) => {
    eventsContainer.append(eventsContent);
    element.removeEventListener("click", expandEvents);
    element.addEventListener("click", () => collapseEvents(element));
  };

  const eventsContainer = document.createElement("div");
  eventsContainer.id = "events-container";
  const eventsH2 = document.createElement("h2");
  eventsContainer.append(eventsH2);
  eventsH2.innerText = "events";
  eventsH2.addEventListener("click", () => expandEvents(eventsH2));

  const eventsContent = document.createElement("div");
  eventsContent.className = "content-container";

  let newEvent = document.createElement("div");
  eventsContent.append(newEvent);
  newEvent.className = "content";
  let header = document.createElement("h3");
  header.innerText = "Black History Celebration";
  newEvent.append(header);

  let text = document.createElement("p");
  text.innerText = "Saturday · 2/24/2024 · 5 PM";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "227-11 Linden Blvd.";
  newEvent.append(text);
  text = document.createElement("p");
  text.innerText = "St. Albans, NY";
  newEvent.append(text);

  const instagram = document.createElement("div");
  instagram.id = "instagram-container";
  let a = document.createElement("a");
  instagram.append(a);

  let maxWatch = window.matchMedia("(max-width: 600px)");

  const makeLink = (e, a) => {
    console.log(maxWatch);
    console.log(e);
    let instaUrl;
    if (maxWatch.matches) {
      instaUrl = "instagram://user?username=newdirection.music";
    } else {
      instaUrl = "https://www.instagram.com/newdirection.music";
    }
    a.href = instaUrl;
  };

  makeLink(null, a);
  maxWatch.addEventListener("change", (e) => makeLink(e, a));

  // a.href = "instagram://user?username=newdirection.music";
  // a.href = "https://www.instagram.com/_u/newdirection.music";
  // a.href = "https://www.instagram.com/newdirection.music";
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  let img = document.createElement("img");
  a.append(img);
  img.src = "./assets/instagram.png";

  const footer = document.createElement("div");
  footer.id = "footer";
  let p = document.createElement("p");
  footer.append(p);
  p.innerHTML =
    '<a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icon created by Freepik - Flaticon</a>';

  contentContainer.append(
    logoContainer,
    instagram,
    aboutContainer,
    eventsContainer,
    footer
  );

  App.append(footer);

  const root = document.getElementById("root");
  root.append(App);
};

document.addEventListener("DOMContentLoaded", () => {
  render();
});
