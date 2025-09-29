const researchPapers = [
  {
    id: "reservoirtta-2025",
    title: "ReservoirTTA: Prolonged Test-time Adaptation for Evolving and Recurring Domains",
    authors:
      "Guillaume Vray, Devavrat Tomar, Xufeng Gao, Jean-Philippe Thiran, Evan Shelhamer, Behzad Bozorgtabar",
    venue: "Neural Information Processing Systems",
    tag: "NeurIPS 2025",
    type: "Conference",
    presentation: "Poster",
    year: 2025,
    paperUrl: "https://arxiv.org/abs/2505.14511",
    codeUrl: "https://github.com/LTS5/ReservoirTTA",
    image: require("../assets/Images/reservoirtta.png"),
    summary:
      "A plug-in TTA framework that keeps a reservoir of domain-specialized models to handle evolving and recurring shifts, improving accuracy and stability over long data streams.",
  },
  {
    id: "slip-2025",
    title:
      "Slide-Level Prompt Learning with Vision Language Models for Few-Shot Multiple Instance Learning in Histopathology",
    authors:
      "Devavrat Tomar, Guillaume Vray, Dwarikanath Mahapatra, Sudipta Roy, Jean-Philippe Thiran, Behzad Bozorgtabar",
    venue: "IEEE International Symposium on Biomedical Imaging",
    tag: "ISBI 2025",
    type: "Conference",
    presentation: "Poster",
    year: 2025,
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10980748/",
    codeUrl: "https://github.com/LTS5/SLIP",
    image: require("../assets/Images/slide_level.png"),
    summary:
      "Uses vision–language models with slide-level prompts to learn from very few labeled examples in whole-slide histopathology.",
  },
  {
    id: "distill-soda-2024",
    title:
      "Distill-SODA: Distilling Self-Supervised Vision Transformer for Source-Free Open-Set Domain Adaptation in Computational Pathology",
    authors: "Guillaume Vray, Devavrat Tomar, Behzad Bozorgtabar, Jean-Philippe Thiran",
    venue: "IEEE Transactions on Medical Imaging 43(5): 2021-2032",
    tag: "IEEE T-MI 2024",
    type: "Journal",
    year: 2024,
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/10403873/",
    codeUrl: "https://github.com/LTS5/Distill-SODA",
    image: require("../assets/Images/distillsoda.png"),
    summary:
      "Distills a self-supervised ViT to enable source‑free open‑set domain adaptation in computational pathology.",
  },
  {
    id: "unmix-ttns-2024",
    title: "Un-Mixing Test-Time Normalization Statistics: Combatting Label Temporal Correlation",
    authors: "Devavrat Tomar, Guillaume Vray, Jean-Philippe Thiran, Behzad Bozorgtabar",
    venue: "International Conference on Learning Representations",
    tag: "ICLR 2024",
    type: "Conference",
    presentation: "Poster",
    year: 2024,
    paperUrl: "https://arxiv.org/abs/2401.08328",
    codeUrl: "https://github.com/devavratTomar/unmixtns",
    image: require("../assets/Images/unmixtns.png"),
    summary:
      "Fixes biased batch‑norm at test time by unmixing normalization statistics, handling temporally correlated data and tiny batches.",
  },
  {
    id: "tesla-2023",
    title: "TeSLA: Test-Time Self-Learning with Automatic Adversarial Augmentation",
    authors: "Devavrat Tomar, Guillaume Vray, Behzad Bozorgtabar, Jean-Philippe Thiran",
    venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    tag: "CVPR 2023",
    type: "Conference",
    presentation: "Poster",
    year: 2023,
    paperUrl:
      "http://openaccess.thecvf.com/content/CVPR2023/html/Tomar_TeSLA_Test-Time_Self-Learning_With_Automatic_Adversarial_Augmentation_CVPR_2023_paper.html",
    codeUrl: "https://github.com/devavratTomar/TeSLA",
    image: require("../assets/Images/tesla.png"),
    summary:
      "Adapts models at test time via self‑learning and automatic adversarial augmentation to boost robustness under shift.",
  },
  {
    id: "opttta-2022",
    title:
      "OptTTA: Learnable Test-Time Augmentation for Source-Free Medical Image Segmentation Under Domain Shift",
    authors: "Devavrat Tomar, Guillaume Vray, Jean-Philippe Thiran, Behzad Bozorgtabar",
    venue: "Medical Imaging with Deep Learning",
    tag: "MIDL 2022",
    type: "Conference",
    presentation: "Oral",
    year: 2022,
    paperUrl:
      "https://www.researchgate.net/profile/Devavrat-Tomar-2/publication/373166842_OptTTA_Learnable_Test-Time_Augmentation_for_Source-Free_Medical_Image_Segmentation_Under_Domain_Shift/links/64dde3df66f0e0067da18174/OptTTA-Learnable-Test-Time-Augmentation-for-Source-Free-Medical-Image-Segmentation-Under-Domain-Shift.pdf",
    codeUrl: "https://github.com/devavratTomar/OptTTA",
    image: require("../assets/Images/opttta.png"),
    summary:
      "Learns test‑time augmentations to improve segmentation under domain shift without access to source data.",
  },
  {
    id: "sst-2022",
    title:
      "Self-Supervised Generative Style Transfer for One-Shot Medical Image Segmentation",
    authors:
      "Devavrat Tomar, Behzad Bozorgtabar, Manana Lortkipanidze, Guillaume Vray, Mohammad Saeed Rad, Jean-Philippe Thiran",
    venue: "IEEE/CVF Winter Conference on Applications of Computer Vision",
    tag: "WACV 2022",
    type: "Conference",
    presentation: "Poster",
    year: 2022,
    paperUrl:
      "http://openaccess.thecvf.com/content/WACV2022/html/Tomar_Self-Supervised_Generative_Style_Transfer_for_One-Shot_Medical_Image_Segmentation_WACV_2022_paper.html",
    codeUrl: "https://github.com/devavratTomar/SST",
    image: require("../assets/Images/oneshot.png"),
    summary:
      "Performs self‑supervised style transfer to enable one‑shot medical image segmentation.",
  },
  {
    id: "sasan-2021",
    title: "Self-Attentive Spatial Adaptive Normalization for Cross-Modality Domain Adaptation",
    authors: "Devavrat Tomar, Manana Lortkipanidze, Guillaume Vray, Behzad Bozorgtabar, Jean-Philippe Thiran",
    venue: "IEEE Transactions on Medical Imaging 40(10): 2926-2938",
    tag: "IEEE T-MI 2021",
    type: "Journal",
    year: 2021,
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/9354186/",
    codeUrl: "https://github.com/devavratTomar/SASAN",
    image: require("../assets/Images/self_attentive.png"),
    summary:
      "Introduces self‑attentive normalization for cross‑modality domain adaptation in medical imaging.",
  },
  {
    id: "sood-2021",
    title:
      "SOoD: Self-Supervised Out-of-Distribution Detection Under Domain Shift for Multi-Class Colorectal Cancer Tissue Types",
    authors: "Behzad Bozorgtabar, Guillaume Vray, Dwarikanath Mahapatra, Jean-Philippe Thiran",
    venue: "IEEE/CVF International Conference on Computer Vision Workshops",
    tag: "ICCVW 2021",
    type: "Workshop",
    presentation: "Oral",
    year: 2021,
    paperUrl:
      "https://openaccess.thecvf.com/content/ICCV2021W/CVAMD/html/Bozorgtabar_SOoD_Self-Supervised_Out-of-Distribution_Detection_Under_Domain_Shift_for_Multi-Class_Colorectal_ICCVW_2021_paper.html",
    codeUrl: "https://github.com/BehzadBozorgtabar/SOoD",
    image: require("../assets/Images/sood.png"),
    summary:
      "Detects out‑of‑distribution colorectal tissue types under domain shift using self‑supervision.",
  },
  {
    id: "salad-2020",
    title: "SALAD: Self-Supervised Aggregation Learning for Anomaly Detection on X-Rays",
    authors: "Behzad Bozorgtabar, Dwarikanath Mahapatra, Guillaume Vray, Jean-Philippe Thiran",
    venue: "Medical Image Computing and Computer-Assisted Intervention",
    tag: "MICCAI 2020",
    type: "Conference",
    presentation: "Poster",
    year: 2020,
    paperUrl: "https://link.springer.com/chapter/10.1007/978-3-030-59710-8_46",
    codeUrl: "https://github.com/GuillaumeVray/Salad",
    image: require("../assets/Images/salad.png"),
    summary:
      "Aggregates self‑supervised features for anomaly detection in chest X‑rays.",
  },
  {
    id: "g2ver-2019",
    title:
      "G2-VER: Geometry Guided Model Ensemble for Video-Based Facial Expression Recognition",
    authors:
      "Tanguy Albrici, Mandana Fasounaki, Saleh Bagher Salimi, Guillaume Vray, Behzad Bozorgtabar, Hazım Kemal Ekenel, Jean-Philippe Thiran",
    venue: "IEEE International Conference on Automatic Face & Gesture Recognition",
    tag: "ICAFGR 2019",
    type: "Conference",
    presentation: "Oral",
    year: 2019,
    paperUrl: "https://ieeexplore.ieee.org/abstract/document/8756600/",
    codeUrl: null,
    image: require("../assets/Images/g2ver.png"),
    summary:
      "Combines geometry and appearance models for robust video‑based facial expression recognition.",
  },
];

export default researchPapers;
