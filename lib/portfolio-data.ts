export const profile = {
  name: "Ahmad Zacki Habibi",
  firstName: "Ahmad Zacki",
  lastName: "Habibi",
  initials: "AZH",
  badge: "S.T. Teknik Elektro • Telkom University",
  location: "Jakarta, Indonesia",
  photo: "/images/profile.jpg",
  portrait: "/images/portrait-casual.jpg",
  resume: "/Resume_Ahmad_Zacki_Habibi.pdf",
  email: "ahmadzackiehabibi@gmail.com",
  phone: "+62 851-1732-0144",
  phoneHref: "tel:+6285117320144",
  linkedin: "https://linkedin.com/in/zackihabibi",
  linkedinLabel: "linkedin.com/in/zackihabibi",
  github: "https://github.com/Zackk009",
  githubLabel: "github.com/Zackk009",
  phrases: [
    "IoT & Embedded Systems Engineer",
    "Electrical Engineering Student",
    "Hardware & Software Integration",
    "Electronic System Maintenance",
  ],
  intro:
    "Mahasiswa S1 Teknik Elektro Telkom University dengan fokus pada IoT dan sistem embedded. Berpengalaman merancang sistem end-to-end, mulai dari mikrokontroler, sensor, hingga komunikasi data dan integrasi hardware-software.",
}

export const stats = [
  { value: "6+", label: "Engineering Projects" },
  { value: "6+", label: "Roles & Experience" },
  { value: "4", label: "Years Study (22-26)" },
]

export const focusAreas = [
  "IoT & Embedded Systems Development",
  "Microcontroller & Sensor Integration",
  "Electronic System Maintenance & Troubleshooting",
  "Machine Learning & Computer Vision Applications",
  "Solar PV System Simulation & Analysis",
]

export const statement = [
  "Lulusan S1 Teknik Elektro Telkom University dengan minat mendalam pada bidang otomasi industri, sistem kelistrikan, Internet of Things (IoT), dan teknologi monitoring cerdas. Berpengalaman merancang dan mengembangkan proyek berbasis embedded system, mikrokontroler (ESP32, Arduino), integrasi sensor, serta aplikasi machine learning.",
  "Melalui Kerja Praktik di PT Angkasa Pura Indonesia, saya berpengalaman langsung dalam pemeliharaan teknis dan troubleshooting sistem elektronik bandara serta infrastruktur jaringan. Saat ini siap berkontribusi penuh untuk posisi di bidang Teknik Elektro, Otomasi Industri, Maintenance, dan Instrumentasi.",
]

export const technicalSkills = [
  "Arduino & ESP32",
  "Python",
  "C / C++",
  "Java",
  "Assembly",
  "MATLAB",
  "Scikit-learn",
  "TensorFlow",
  "YOLOv8",
  "MQTT",
  "GNSS u-blox Neo-M8U",
  "FastAPI",
  "WebSocket",
  "PVsyst",
  "Fusion 360",
  "Ultrasonic / DS18B20 / Load Cell",
  "L298N Motor Driver",
]

export const softSkills = [
  "Komunikasi & Kepemimpinan",
  "Kerja Tim",
  "Adaptabilitas",
  "Manajemen Waktu",
  "Koordinasi Tim",
  "Manajemen Logistik",
]

export type Project = {
  title: string
  tag: string
  description: string
  image: string
  imageFit?: "cover" | "contain"
  tech: string[]
  highlight?: string
}

export type Experience = {
  org: string
  role: string
  dates: string
  type: string
  points: string[]
  image?: string
  imageAlt?: string
}

export const projects: Project[] = [
  {
    title: "Sistem Pelacakan Logistik Real-time Berbasis IoT dengan Evaluasi Rute",
    tag: "Tugas Akhir",
    highlight: "100% detection rate",
    description:
      "Prototipe fleet monitoring yang mengintegrasikan ESP32, GNSS u-blox Neo-M8U, dan SIM800L. Telemetri GPS real-time via MQTT ke backend FastAPI dengan deteksi deviasi Haversine, adaptive rerouting OSRM (<1s), serta dashboard Route Guard berbasis Leaflet.js & WebSocket.",
    image: "/projects/smart-logistics.png",
    imageFit: "contain",
    tech: ["ESP32", "GNSS", "SIM800L", "MQTT", "FastAPI", "OSRM", "Leaflet.js", "WebSocket"],
  },
  {
    title: "Robot Sumo Semi-Otonom",
    tag: "Robotics",
    description:
      "Robot sumo berbasis ESP32-U dengan 3 sensor ultrasonik untuk deteksi objek. Menggabungkan obstacle avoidance otonom dengan kontrol manual Bluetooth via aplikasi Dabble dan motor driver L298N.",
    image: "/projects/robot-sumo-real.jpg",
    tech: ["ESP32-U", "Ultrasonic", "L298N", "Arduino IDE", "C++"],
  },
  {
    title: "Smart Coffee Dryer — Pengering Kopi Hybrid IoT",
    tag: "IoT",
    highlight: "45–50°C auto control",
    description:
      "Kontrol suhu otomatis menggunakan PTC heater 500W, sensor DS18B20 real-time, dan load cell monitoring berat biji kopi yang otomatis berhenti saat kadar air ~12%.",
    image: "/projects/coffee-dryer.png",
    tech: ["Arduino Mega", "ESP32", "DS18B20", "Load Cell", "PTC Heater"],
  },
  {
    title: "Deteksi & Klasifikasi Gangguan Kelistrikan dengan ML",
    tag: "Machine Learning",
    highlight: "~83% accuracy",
    description:
      "Klasifikasi 5 jenis gangguan jaringan listrik 3-fasa (Normal, LG, LL, LLG, LLL) dari data arus & tegangan menggunakan Random Forest dan CNN 1D, di-deploy sebagai web app Gradio.",
    image: "/projects/fault-detection.png",
    tech: ["Python", "Scikit-Learn", "TensorFlow", "CNN 1D", "Gradio"],
  },
  {
    title: "Desain & Simulasi Panel Surya: On-Grid vs Off-Grid",
    tag: "Energy",
    highlight: "PR 0.897",
    description:
      "Simulasi teknis dan ekonomi sistem PV 4.1 kWp untuk hunian di Tangerang menggunakan PVsyst. Sistem On-Grid Microinverter menghasilkan 5.174 kWh/tahun dengan biaya yang jauh lebih ekonomis.",
    image: "/projects/pvsyst.png",
    imageFit: "contain",
    tech: ["PVsyst", "Solar PV", "On/Off-Grid", "Economic Analysis"],
  },
  {
    title: "Sistem Deteksi Kebakaran dengan YOLOv8",
    tag: "Computer Vision",
    highlight: "2.500+ images",
    description:
      "Deteksi kebakaran real-time berbasis deep learning YOLOv8 dengan custom dataset dari Roboflow, mencakup preprocessing, training model, dan evaluasi performa.",
    image: "/projects/fire-detection-real.png",
    tech: ["YOLOv8", "Computer Vision", "Roboflow", "Google Colab"],
  },
]

export const experiences: Experience[] = [
  {
    org: "PT Angkasa Pura II",
    role: "Intern, SSES (Safety, Security & Electronic System)",
    dates: "Jul 2025 – Agu 2025",
    type: "Work",
    image: "/experience/intern.png",
    imageAlt: "Ahmad melakukan troubleshooting wiring panel perangkat keamanan bandara",
    points: [
      "Menangani sistem keamanan bandara: x-ray body scanner, HHMD, WTMD, fingerprint access control, dan intercom.",
      "Technical troubleshooting dan basic maintenance komponen elektronik serta jaringan (switch, control panel).",
      "Bekerja sama dengan tim maintenance untuk menjaga keandalan perangkat keamanan bandara.",
    ],
  },
  {
    org: "uPCI — Mikroprosesor dan Antarmuka",
    role: "Asisten Laboratorium & Staff Praktikum",
    dates: "2024 – 2026",
    type: "Lab",
    image: "/experience/upci.jpg",
    imageAlt: "Ahmad mengenakan jaket uPCI Laboratory sebagai staff praktikum",
    points: [
      "Membimbing praktikan dalam penggunaan mikrokontroler dan antarmuka I/O dengan Arduino.",
      "Pemrograman Assembly dan C/C++ serta implementasi sistem minimum mikrokontroler.",
      "Berperan aktif dalam pelaksanaan dan evaluasi praktikum.",
    ],
  },
  {
    org: "QUOTE 2024 — Quality Time of Teknik Elektro",
    role: "Wakil Koordinator Divisi Logistik & Equipment",
    dates: "2025 – 2026",
    type: "Organization",
    points: [
      "Mengelola alat dan perlengkapan kegiatan dari persiapan hingga pelaksanaan.",
      "Mengkoordinasi anggota divisi dalam distribusi logistik dan kebutuhan teknis acara.",
      "Mengurus perizinan peminjaman tempat, alat, dan fasilitas.",
    ],
  },
  {
    org: "QUOTE 2023 — Quality Time of Teknik Elektro",
    role: "Mentor",
    dates: "2024 – 2025",
    type: "Organization",
    image: "/experience/mentor.jpg",
    imageAlt: "Foto bersama kelompok mentoring QUOTE di hutan pinus",
    points: [
      "Memberikan bimbingan dan dukungan berkelanjutan kepada peserta.",
      "Berkontribusi langsung dalam acara dan evaluasi peserta.",
    ],
  },
  {
    org: "Parade Wisuda",
    role: "Staff Divisi Humas",
    dates: "2024",
    type: "Organization",
    image: "/experience/paeris.jpg",
    imageAlt: "Foto bersama panitia Parade Wisuda Teknik Elektro di aula",
    points: [
      "Mengelola komunikasi eksternal dan strategi promosi untuk meningkatkan partisipasi.",
      "Membangun hubungan baik dengan berbagai pihak.",
    ],
  },
  {
    org: "WJSSO — West Java Student Sport Olympiade 2024",
    role: "Staff Divisi Humas",
    dates: "2024",
    type: "Organization",
    image: "/experience/wjsso.jpg",
    imageAlt: "Foto bersama panitia West Java Student Sport Olympiad 2024",
    points: [
      "Mengoordinasikan strategi komunikasi agar informasi acara tersebar luas.",
      "Meningkatkan jumlah peserta dan keterlibatan stakeholder.",
    ],
  },
]

export const education = {
  degree: "S1 Teknik Elektro",
  institution: "Telkom University",
  location: "Bandung, Indonesia",
  years: "2022 – 2026",
  thesis: "Sistem Pelacakan Logistik Real-time Berbasis IoT dengan Evaluasi Rute",
  competencies: [
    "Mikroprosesor & Antarmuka",
    "IoT & Embedded Systems",
    "Machine Learning & Computer Vision",
    "Simulasi Panel Surya (PVsyst)",
    "Electronic System Maintenance",
  ],
}

export const certifications = [
  {
    name: "WECON PLC Training",
    issuer: "Fakultas Teknik Elektro, Telkom University & CEIS Research Division",
    date: "Februari 2026",
    file: "/certificates/wecon-plc.pdf",
  },
  {
    name: "Certificate of Appreciation — Internship Program",
    issuer: "PT Angkasa Pura Indonesia (InJourney Airports) • Nilai rata-rata 7.96 (Baik)",
    date: "Juli – Agustus 2025",
    file: "/certificates/angkasa-pura-intern.pdf",
  },
  {
    name: "General K3 (Occupational Health & Safety)",
    issuer: "PT Mita Indonesia Berdaya (Mita Training)",
    date: "Oktober 2025",
    file: "/certificates/k3-mitatraining.pdf",
  },
  {
    name: "English Proficiency Test (EPrT) — Score 527",
    issuer: "Telkom University Language Center • Listening 57, Grammar 49, Reading 52",
    date: "Agustus 2026",
    file: "/certificates/eprt.pdf",
  },
]

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
]
