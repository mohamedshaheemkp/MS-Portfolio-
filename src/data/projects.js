import agriDash from '../assets/Agri Ai/agri-dash.webp'
import agriLive from '../assets/Agri Ai/agri-live.webp'
import heroImage from '../assets/hero.webp'
import sfoImage from '../assets/SFO.webp'

export const projects = [
  {
    id: 'agri-ai',
    number: '01',
    route: '/systems/agriai',
    title: 'AgriAI',
    category: 'AI / Computer Vision',
    subtitle: 'Real-Time Crop Disease Detection & Advisory Engine',
    role: 'AI & Frontend Engineer',
    year: '2026',
    status: 'ACTIVE',
    statusType: 'REAL IMPLEMENTATION + DEMO',
    description:
      'Engineered a computer vision application pairing YOLOv9 object detection with a FastAPI service and React dashboard to deliver real-time leaf anomaly detection and automated advisory feedback.',
    tech: ['YOLOv9', 'PyTorch', 'OpenCV', 'FastAPI', 'React', 'Tailwind', 'Vite'],
    images: [agriLive, agriDash],
    github: 'https://github.com/mohamedshaheemkp/Agri-Ai.git',
    live: '#',
    featured: true,
    accent: '#14B8C4',
    challenge:
      'Manual field inspection is labor-intensive and often detects crop pathology only after visual symptoms become widespread. Modern precision agriculture requires automated edge monitoring.',
    solution:
      'AgriAI bridges computer vision model output with an accessible web dashboard, mapping bounding boxes to disease definitions and offering targeted treatment recommendations.',
    metrics: [
      { label: 'YOLO Architecture', value: 'v9-c', suffix: '' },
      { label: 'Target Latency (GPU)', value: '~12', suffix: 'ms' },
      { label: 'Validation Framework', value: 'PyTorch', suffix: '' },
    ],
    timeline: [
      {
        step: 'System Objective',
        desc: 'Define real-time leaf anomaly detection requirements for small-farm deployment.',
      },
      {
        step: 'Model Pipeline',
        desc: 'Configure YOLOv9 instance in PyTorch with custom class definitions for common foliage diseases.',
      },
      {
        step: 'API Integration',
        desc: 'Build FastAPI endpoint to receive image frames, run model inference, and return bounding boxes.',
      },
      {
        step: 'Dashboard Sync',
        desc: 'Develop React telemetry interface displaying bounding overlays and treatment advisories.',
      },
    ],
    features: [
      {
        title: 'Real-Time Inference Stream',
        desc: 'Processes camera frames and streams detection coordinates to the UI.',
      },
      {
        title: 'Bounding Box Overlays',
        desc: 'Renders class labels and confidence overlays directly on detected leaf anomalies.',
      },
      {
        title: 'Agronomic Advisory Logic',
        desc: 'Maps detected disease classes directly to recommended chemical or organic interventions.',
      },
    ],
    architecture:
      'Input frames are ingested via an OpenCV stream, normalized, and evaluated through a PyTorch YOLOv9 model instance. Inference results—including bounding box coordinates, class IDs, and confidence ratios—are formatted as JSON telemetry by FastAPI and rendered via React canvas layers.',
    results:
      'Successfully validated end-to-end detection pipeline from camera feed to browser dashboard, proving low-latency edge AI feasibility for field agricultural diagnostics.',

    // Detailed 12-Section Metadata for AgriAI Case Study
    details: {
      problem:
        'Crop disease outbreaks lead to severe agricultural yield losses when diagnosed late. Small and mid-scale farming operations lack access to continuous automated field telemetry.',
      context:
        'Developed as an applied computer vision project exploring how lightweight object detection models can run on edge devices or central microservices to assist agronomic decision-making.',
      systemObjective:
        'Build a responsive web application and inference pipeline that ingests crop imagery, identifies foliage pathologies (such as Foliar Rust or Aphid infestations), and displays real-time actionable advisories.',
      architecture:
        'Microservice design separating frame capture (OpenCV), model inference (PyTorch YOLOv9), backend orchestration (FastAPI), and visual telemetry (React + Tailwind + Vite).',
      detectionWorkflow: [
        {
          stage: '01 — CAMERA CAPTURE',
          name: 'Frame Ingestion',
          desc: 'Raw video stream or static camera upload ingested at native resolution.',
        },
        {
          stage: '02 — EDGE INFERENCE',
          name: 'YOLOv9 Neural Net',
          desc: 'PyTorch model evaluates feature maps to generate bounding box predictions and confidence scores.',
        },
        {
          stage: '03 — ADVISORY SYNC',
          name: 'Telemetry Dashboard',
          desc: 'Frontend parses payload, overlays target reticles, and presents prioritized treatment guidance.',
        },
      ],
      dashboard:
        'The dashboard displays live feed telemetry, anomaly counts, confidence indicators, and historically logged detection sessions for seasonal tracking.',
      advisoryLogic:
        'Rule-based lookup table connecting identified plant pathogens (e.g. Puccinia graminis) to recommended fungicides, water management changes, or isolation strategies.',
      technicalStack: [
        { category: 'Computer Vision', items: 'YOLOv9, OpenCV, PyTorch' },
        { category: 'Backend API', items: 'Python, FastAPI, Uvicorn' },
        { category: 'Frontend UI', items: 'React 19, Tailwind CSS v4, Motion, Vite' },
      ],
      challenges:
        'Handling natural lighting variations in field photography, reducing false positives on healthy leaf veins, and maintaining 30+ FPS stream processing without frame drop.',
      limitations:
        'Current dataset validation is tuned primarily for foliage pathogens under controlled daylight conditions; extreme low-light or occluded leaves require further model fine-tuning.',
      lessons:
        'Optimizing tensor shapes before sending data to edge models yields significant latency improvements over raw image array transfers.',
      futureDirection:
        'Integration with drone flight paths, automated IoT irrigation triggers, and offline ONNX WebAssembly client-side inference for connectivity-constrained remote fields.',
    },
  },
  {
    id: 'smart-folder-organizer',
    number: '02',
    route: '/systems/smart-folder',
    title: 'Smart Folder Organizer',
    category: 'Python / Automation',
    subtitle: 'Intelligent File System Management Tool',
    role: 'Python Automation Engineer',
    year: '2025',
    status: 'SHIPPED',
    statusType: 'REAL IMPLEMENTATION',
    description:
      'Created an efficient Python background utility that monitors target directories using system event hooks (Watchdog) and automatically routes incoming files to structured directories based on custom rule triggers.',
    tech: ['Python', 'Watchdog', 'OS Module', 'File Handling', 'Tkinter'],
    images: [sfoImage],
    github: 'https://github.com/mohamedshaheemkp/smart-folder-organizer',
    live: '#',
    featured: true,
    accent: '#A8D5BA',
    challenge:
      'Unstructured download folders clutter workspace drives, decreasing operational efficiency and leading to lost documents or accidental overwrites.',
    solution:
      'Built a low-overhead daemon utilizing Watchdog filesystem event listeners to immediately catch new file events, extract extensions, and apply rule-based sorting with duplicate hash checking.',
    metrics: [
      { label: 'Event Engine', value: 'Watchdog', suffix: '' },
      { label: 'Supported Formats', value: '40', suffix: '+' },
      { label: 'CPU Overhead', value: '<0.1', suffix: '%' },
    ],
    timeline: [
      {
        step: 'Requirement Analysis',
        desc: 'Identified key bottlenecks in daily file organization and directory maintenance.',
      },
      {
        step: 'Event Binding',
        desc: 'Integrated Watchdog library to hook OS-level file system events without CPU-intensive polling.',
      },
      {
        step: 'Rule Router',
        desc: 'Designed regex mapping for auto-routing images, documents, archives, and dev assets.',
      },
      {
        step: 'GUI Control',
        desc: 'Built a light Tkinter configuration dashboard for defining custom directory paths.',
      },
    ],
    features: [
      {
        title: 'Zero-Polling Daemon',
        desc: 'Uses OS native filesystem events (inotify/FSEvents) to trigger instantly without polling overhead.',
      },
      {
        title: 'Duplicate Protection',
        desc: 'Appends SHA-256 short hashes to duplicate filenames to prevent silent data overwrites.',
      },
      {
        title: 'Custom Extension Rules',
        desc: 'Supports user-defined mapping for specialized project assets and file types.',
      },
    ],
    architecture:
      'Threaded Python application utilizing Watchdog filesystem event handlers. File creation and move events push paths to a queue worker, which applies classification logic, verifies destination locks, and moves files safely.',
    results:
      'Streamlined personal workspace organization, reducing daily directory clutter and serving as a robust daily automation utility.',
  },
  {
    id: 'project-context-exporter',
    number: '03',
    route: '/systems/context-exporter',
    title: 'Project Context Exporter',
    category: 'Developer Tooling',
    subtitle: 'CLI Context Synthesizer for AI Workflows',
    role: 'Tooling Developer',
    year: '2026',
    status: 'ACTIVE',
    statusType: 'REAL IMPLEMENTATION',
    description:
      'Developed a lightweight developer CLI tool designed to traverse codebase structures, apply ignore filters, and synthesize formatted project context files for LLM prompt engineering and code review.',
    tech: ['Node.js', 'JavaScript', 'CLI', 'File System API'],
    images: [heroImage],
    github: 'https://github.com/mohamedshaheemkp',
    live: '#',
    featured: false,
    accent: '#FF3B30',
    challenge:
      'Preparing multi-file codebase contexts for LLMs requires tedious manual copy-pasting or inclusion of irrelevant binary/build noise.',
    solution:
      'Engineered an automated script that scans directory trees, honors gitignore patterns, and bundles source files into clean markdown output.',
    metrics: [
      { label: 'Parse Speed', value: '<50', suffix: 'ms' },
      { label: 'Memory Footprint', value: '<15', suffix: 'MB' },
      { label: 'Filter Compliance', value: '100', suffix: '%' },
    ],
    timeline: [
      {
        step: 'Problem Identification',
        desc: 'Faced repetitive friction when copying multi-file structures into AI tools.',
      },
      {
        step: 'Parser Construction',
        desc: 'Wrote recursive directory crawler with gitignore parsing rules.',
      },
      {
        step: 'Markdown Exporter',
        desc: 'Formatted output with clear file path headings and language tag codeblocks.',
      },
    ],
    features: [
      {
        title: 'Smart Gitignore Filtering',
        desc: 'Automatically skips node_modules, build output, binaries, and dotfiles.',
      },
      {
        title: 'Structure Tree Visualizer',
        desc: 'Prepends a high-level file tree directory map to the exported context document.',
      },
    ],
    architecture:
      'Node.js CLI executable built around recursive directory reading, streaming file contents into memory buffers, filtering through pattern matchers, and dumping formatted Markdown.',
    results:
      'Accelerated prompt preparation workflow, ensuring complete file context availability without unnecessary token inflation.',
  },
  {
    id: 'portfolio-os',
    number: '04',
    route: '/systems/portfolio',
    title: 'Portfolio OS',
    category: 'React / Motion',
    subtitle: 'Editorial Creative Technologist Architecture',
    role: 'Frontend Architect',
    year: '2026',
    status: 'ACTIVE',
    statusType: 'REAL IMPLEMENTATION',
    description:
      'Architected a highly responsive, editorial portfolio system combining micro-interactions, spring physics, and restrained typography to showcase dual expertise in AI engineering and graphic design.',
    tech: ['React 19', 'Tailwind CSS v4', 'Motion', 'Vite', 'GSAP'],
    images: [heroImage],
    github: 'https://github.com/mohamedshaheemkp/MS-Portfolio-.git',
    live: 'https://ms-portfolio-fawn.vercel.app/',
    featured: true,
    accent: '#4A7CFF',
    challenge:
      'A personal website for a hybrid AI engineer and graphic designer requires balancing technical depth with refined aesthetic restraint.',
    solution:
      'Built a modular React architecture focused on editorial typography, whitespace rhythm, lazy-loaded interactive modules, and spring-based interactions.',
    metrics: [
      { label: 'Lighthouse Performance', value: '95', suffix: '+' },
      { label: 'Bundle Render Time', value: '<1', suffix: 's' },
      { label: 'Design System Tokens', value: '100', suffix: '%' },
    ],
    timeline: [
      {
        step: 'Design Language',
        desc: 'Established editorial black/grey/white color system and typographic hierarchy.',
      },
      {
        step: 'Component Library',
        desc: 'Developed modular sections (CoreEngine, SystemsArchive, DesignCabinet).',
      },
      {
        step: 'Performance Tuning',
        desc: 'Implemented lazy loading, GPU transform animations, and strict single-video rules.',
      },
    ],
    features: [
      {
        title: 'Editorial Layout System',
        desc: 'Calculated typographic scale and generous negative space for unhurried reading.',
      },
      {
        title: 'File System Lab Log',
        desc: 'Structured systems archive with explicit metadata tags and status indicators.',
      },
      {
        title: 'Flagship Case Study Engine',
        desc: 'Comprehensive 12-section technical documentation layout for deep project reviews.',
      },
    ],
    architecture:
      'Vite-powered React 19 single page app with route-level code splitting via Suspense and React Router v7. Styling driven by Tailwind CSS v4 design tokens and Motion micro-interactions.',
    results:
      'Created a distinct, quiet, confident web identity that presents engineering and design capabilities with equal clarity.',
  },
]
