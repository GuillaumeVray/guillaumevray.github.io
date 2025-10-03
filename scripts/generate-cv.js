// Generates an ATS-friendly .docx CV from repository data
// Requires: npm i docx

const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, TabStopType, ExternalHyperlink } = require("docx");
const fs = require("fs");
const path = require("path");

// Data extracted from src/data/*.js
const profile = {
  name: "Guillaume Vray",
  titles: ["Machine Learning Researcher", "Deep Learning Engineer", "Data Scientist"],
  email: "guillaume.vray@gmail.com",
  phone: "+41 77 274 01 42",
  location: "Avenue du 24-janvier, Renens, Vaud, Switzerland",
  linkedin: "https://www.linkedin.com/in/guillaume-vray",
  website: "https://guillaumevray.github.io",
  summary: [
    "Research-driven and analytical problem solver focused on robust computer vision; experienced with test-time adaptation and real-world distribution shift.",
    "Hard-working, reliable and highly motivated; effective communicator with experience collaborating in intercultural research teams and supporting teaching as a TA.",
    "Objective: pursue deep learning research in computer vision applied to industry needs, turning state-of-the-art methods into dependable, real-world systems.",
  ],
};

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    duration: "September 2018 - June 2019",
    bullets: [
      "Built a real-time driver state recognition prototype (95% accuracy in lab evaluations) for the EU ADAS&ME project.",
      "Demonstrated on vehicles with 3 industrial partners (Scania, Valeo, DLR).",
      "Optimized models for embedded constraints (latency, memory) and collaborated with partner engineers for on-vehicle testing.",
    ],
  },
  {
    title: "Deep Learning Engineer",
    company: "Yildiz Technical University",
    location: "Istanbul, Turkey",
    duration: "June 2019 - August 2019",
    bullets: [
      "Delivered a computer vision proof-of-concept to surface the most informative frames for movie summarization.",
      "Prototyped GAN-based saliency estimation and an evaluation pipeline to guide downstream summarization quality.",
    ],
  },
  {
    title: "Deep Learning Engineer",
    company: "Datacie",
    location: "Lausanne, Switzerland",
    duration: "June 2020 - August 2020",
    bullets: [
      "Designed an end-to-end prototype for automated table detection in complex documents (preprocessing → training → evaluation).",
      "Delivered reproducible training/evaluation code and documentation to accelerate internal analytics and iteration (zero-to-run setup).",
      "Aligned model outputs with downstream data workflows via rapid stakeholder feedback loops.",
    ],
  },
  {
    title: "PhD Student & Teacher Assistant",
    company: "EPFL",
    location: "Lausanne, Switzerland",
    duration: "September 2021 - December 2025",
    bullets: [
      "Research focus: test-time adaptation to increase robustness of deep learning vision systems under real-world distribution shift.",
      "Applied across domains—from natural scenes to medical imaging—demonstrating broad transferability.",
      "7+ publications at top AI venues (NeurIPS, ICLR, CVPR) and medical venues (MICCAI; IEEE Transactions on Medical Imaging).",
      "Released open-source research code to enable reproducibility and adoption (GitHub).",
      "Teaching: TA and Head TA for Image Analysis and Pattern Recognition (200 students); Teaching Assistant Award recipient.",
    ],
  },
];

const education = [
  {
    degree: "PhD of Science in Electrical Engineering",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    duration: "2021 - 2025",
    details: [
      "Title: Advancing Test-Time Adaptation for Robust Deep Learning Systems in Dynamic Environments",
      "Supervisors: Prof Jean-Philippe Thiran & Dr. Behzad Bozorgtabar",
    ],
  },
  {
    degree: "Master of Science in Data Science",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    duration: "2019 - 2021",
    details: ["Graduated with a grade of 5.5/6.0"],
  },
  {
    degree: "Bachelor of Science in Communication Systems",
    institution: "EPFL",
    location: "Lausanne, Switzerland",
    duration: "2016 - 2019",
    details: ["Graduated with a grade of 5.1/6.0"],
  },
];

function heading(text) {
  return new Paragraph({ text, heading: HeadingLevel.HEADING_1, spacing: { after: 120 } });
}

function subheading(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true })],
    spacing: { after: 60 },
  });
}

function paragraph(text) {
  return new Paragraph({ text, spacing: { after: 120 } });
}

function bullet(text) {
  return new Paragraph({ text, bullet: { level: 0 } });
}

function line(children, opts = {}) {
  return new Paragraph({ children, spacing: { after: 60 }, ...opts });
}

function dateCompanyLine(dateRange, company, options = {}) {
  // Positions company after a TAB stop, keeping dates clearly on the left
  return new Paragraph({
    tabStops: [{ type: TabStopType.LEFT, position: 5400 }], // ~3.75 in
    children: [
      new TextRun({ text: dateRange, bold: true }),
      new TextRun({ text: "\t" }),
      new TextRun({ text: company, bold: true }),
    ],
    spacing: { after: 40 },
    ...options,
  });
}

function buildDocument() {
  const content = [];

  // Build content into an array first, then assign to sections

  // Header: Name (left-aligned, ATS-friendly)
  content.push(
    new Paragraph({
      children: [new TextRun({ text: profile.name, bold: true, size: 36 })],
      alignment: AlignmentType.LEFT,
      spacing: { after: 60 },
    })
  );

  // Titles under name
  content.push(
    new Paragraph({
      children: [
        new TextRun({ text: profile.titles.join(" | "), italics: true, size: 24 }),
      ],
      alignment: AlignmentType.LEFT,
      spacing: { after: 60 },
    })
  );

  // Contact lines (no explicit labels)
  const phoneLink = profile.phone.replace(/\s+/g, "");
  content.push(
    new Paragraph({
      children: [
        new ExternalHyperlink({ link: `mailto:${profile.email}`, children: [new TextRun({ text: profile.email, style: "Hyperlink" })] }),
        new TextRun({ text: " | " }),
        new ExternalHyperlink({ link: `tel:${phoneLink}`, children: [new TextRun({ text: profile.phone, style: "Hyperlink" })] }),
      ],
      spacing: { after: 20 },
    })
  );
  content.push(new Paragraph({ text: `${profile.location}`, spacing: { after: 20 } }));
  content.push(
    new Paragraph({
      children: [
        new ExternalHyperlink({ link: profile.linkedin, children: [new TextRun({ text: profile.linkedin, style: "Hyperlink" })] }),
        new TextRun({ text: " | " }),
        new ExternalHyperlink({ link: profile.website, children: [new TextRun({ text: profile.website, style: "Hyperlink" })] }),
      ],
      spacing: { after: 200 },
    })
  );

  // Profile
  content.push(heading("PROFILE"));
  profile.summary.forEach((s) => content.push(paragraph(s)));

  // Professional Experience
  content.push(heading("WORK EXPERIENCE"));
  experiences.slice().reverse().forEach((exp) => {
    // Line 1: DATE [TAB] COMPANY
    content.push(dateCompanyLine(exp.duration, exp.company));
    // Line 2: TITLE — LOCATION
    content.push(line([new TextRun({ text: `${exp.title} — ${exp.location}` })]));
    // Bullets
    exp.bullets.forEach((b) => content.push(bullet(b)));
    content.push(new Paragraph({ spacing: { after: 150 } }));
  });

  // Education
  content.push(heading("EDUCATION"));
  education.forEach((ed) => {
    // Line 1: DATE [TAB] INSTITUTION
    content.push(dateCompanyLine(ed.duration, ed.institution));
    // Line 2: DEGREE — LOCATION
    content.push(line([new TextRun({ text: `${ed.degree} — ${ed.location}` })]));
    // Bullets
    ed.details.forEach((d) => content.push(bullet(d)));
    content.push(new Paragraph({ spacing: { after: 150 } }));
  });

  // Computer Skills (from repo skills categories)
  const computerSkills = [
    {
      label: "Machine Learning & Data",
      items: [
        "Python", "PyTorch", "NumPy", "Pandas", "SciPy", "Matplotlib", "Seaborn", "scikit-learn", "TensorFlow", "Keras", "OpenCV", "Hugging Face",
      ],
    },
    {
      label: "Systems & Orchestration",
      items: ["Linux", "Kubernetes", "Slurm"],
    },
    {
      label: "Programming Languages",
      items: ["Python", "C++", "Java", "Scala", "SQL", "Node.js"],
    },
    {
      label: "Tools",
      items: ["Git", "Visual Studio", "LaTeX", "PowerPoint", "ChatGPT", "GitHub Copilot"],
    },
  ];

  content.push(heading("COMPUTER SKILLS"));
  computerSkills.forEach((grp) => {
    content.push(subheading(grp.label));
    content.push(paragraph(grp.items.join(', ')));
  });

  const doc = new Document({
    creator: profile.name,
    title: `${profile.name} - CV`,
    description: "ATS-friendly CV (Profile, Professional Experience, Education)",
    sections: [
      {
        properties: {},
        children: content,
      },
    ],
  });
  return doc;
}

async function main() {
  const outPath = path.resolve(process.cwd(), "Guillaume-Vray-CV.docx");
  const doc = buildDocument();
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outPath, buffer);
  console.log(`Wrote: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
