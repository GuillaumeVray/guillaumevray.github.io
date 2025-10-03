const projects = [
  {
    id: "privacy-life-2024",
    title: "Privacy Life — Interactive Narrative",
    year: 2021,
    summary:
      "A Twine-based interactive experience exploring everyday trade-offs in digital privacy, paired with a concise report on design and insights.",
    image: "/projects/privacy/cover.svg",
    tag: "2021",
    links: {
      demoUrl: "/projects/privacy/privacy-life.html",
      reportUrl: "/projects/privacy/Group07_FinalReport.pdf",
    },
  },
  {
    id: "autonomous-driving-2024",
    title: "Reinforcement Learning for Autonomous Driving (DonkeyCar)",
    year: 2023,
    summary:
      "Implemented and evaluated RL agents (PPO) for simulated autonomous driving using DonkeyCar. Includes training, benchmarking, and reproducibility scripts.",
    image: require("../assets/Images/donkeycar.jpeg"),
    tag: "2023",
    links: {
      codeUrl: "https://github.com/GuillaumeVray/EPFL-EE618-Driving-Car",
    },
  },
  {
    id: "jetpack-java-2016",
    title: "Jetpack — Java Platformer Game",
    year: 2016,
    summary:
      "A classic 2D platformer built in Java. Playable in-browser via CheerpJ with a downloadable JAR.",
    image: require("../assets/Images/jetpack.png"),
    tag: "2016",
    links: {
      downloadUrl: "/projects/jetpack/Jeux.jar",
      reportUrl: "/projects/jetpack/report.pdf",
    },
  },
  {
    id: "abracadabra-food-2020",
    title: "Impact of Wealth on Eating Habits (London)",
    year: 2020,
    summary:
      "An exploratory data story examining how median income correlates with food purchasing patterns across Greater London.",
    image: require("../assets/Images/abracadabra.jpg"),
    tag: "2020",
    links: {
      demoUrl: "https://chapattemateo.github.io/ADACADABRA/",
    },
  },
];

export default projects;
