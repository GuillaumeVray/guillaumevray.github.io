import epflLogo from "../assets/Logos/epfl.svg";
import yildizLogo from "../assets/Logos/yildiz.svg";
import datacieLogo from "../assets/Logos/datacie-vkick.png";

const ExperienceData = [
  {
    title: "Undergraduate Research Assistant",
    company: "EPFL",
    logo: epflLogo,
    duration: "September 2018 - June 2019",
    location: "Lausanne, Switzerland",
    description: [
      "Built a real-time driver state recognition prototype (95% accuracy in lab evaluations) for the EU ADAS&ME project.",
      "Demonstrated on vehicles with 3 industrial partners (Scania, Valeo, DLR).",
      "Optimized models for embedded constraints (latency, memory) and collaborated with partner engineers for on-vehicle testing."
    ],
  },
  {
    title: "Deep Learning Engineer",
    company: "Yildiz Technical University",
    logo: yildizLogo,
    duration: "June 2019 - August 2019",
    location: "Istanbul, Turkey",
    description: [
      "Delivered a computer vision proof‑of‑concept to surface the most informative frames for movie summarization.",
      "Prototyped GAN‑based saliency estimation and an evaluation pipeline to guide downstream summarization quality."
    ],
  },
  {
    title: "Deep Learning Engineer",
    company: "Datacie",
    logo: datacieLogo,
    duration: "June 2020 - August 2020",
    location: "Lausanne, Switzerland",
    description: [
      "Designed an end‑to‑end prototype for automated table detection in complex documents (preprocessing → training → evaluation).",
      "Delivered reproducible training/evaluation code and documentation to accelerate internal analytics and iteration (zero‑to‑run setup).",
      "Aligned model outputs with downstream data workflows via rapid stakeholder feedback loops.",
    ],
  },
  {
    title: "PhD Student & Teacher Assistant",
    company: "EPFL",
    logo: epflLogo,
    duration: "September 2021 - December 2025",
    location: "Lausanne, Switzerland",
    description: [
      "Research focus: test‑time adaptation to increase robustness of deep learning vision systems under real‑world distribution shift.",
      "Applied across domains—from natural scenes to medical imaging—demonstrating broad transferability.",
      "7+ publications at top AI venues (NeurIPS, ICLR, CVPR) and medical venues (MICCAI; IEEE Transactions on Medical Imaging).",
      "Released open‑source research code to enable reproducibility and adoption (GitHub).",
      "Teaching: TA and Head TA for Image Analysis and Pattern Recognition (200 students); Teaching Assistant Award recipient.",
    ],
  },
];

export default ExperienceData;
