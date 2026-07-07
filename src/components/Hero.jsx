import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import logo from "../assets/Logo.png";

// SVG ড্রয়িং অ্যানিমেশনের জন্য নিখুঁত ভেরিয়েন্ট
const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "tween", duration: 0.8, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};

// কন্টেইনার অ্যানিমেশন
const containerVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const WORDS = [
  "Payments Platform.",
  "Booking System.",
  "CRM Software.",
  "Manufacturing Software.",
  "Scheduling App.",
  "Property Management.",
  "Transportation Platform.",
  "Marketplace.",
  "Subscriptions.",
  "ERP Software.",
];

// কাস্টম ব্লুপ্রিন্ট SVG আইকন ম্যাপ
const animatedIconMap = {
  "Payments Platform.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.line
        x1="2"
        y1="9.5"
        x2="22"
        y2="9.5"
        stroke="#00D7A3"
        strokeWidth="1.2"
        variants={pathVariants}
      />
      {/* Chip - white, clean small rectangle */}
      <motion.rect
        x="4.5"
        y="12"
        width="3.5"
        height="2.5"
        rx="0.4"
        stroke="#FFFFFF"
        strokeWidth="1"
        variants={pathVariants}
      />
      {/* Balance line - moved down, clear of chip */}
      <motion.line
        x1="4.5"
        y1="16.3"
        x2="9.5"
        y2="16.3"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      {/* Card number dashes - white */}
      <motion.line
        x1="13"
        y1="14"
        x2="19"
        y2="14"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "Booking System.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <motion.rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        ry="2"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.line
        x1="16"
        y1="2"
        x2="16"
        y2="6"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <motion.line
        x1="8"
        y1="2"
        x2="8"
        y2="6"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      <motion.line
        x1="3"
        y1="10"
        x2="21"
        y2="10"
        stroke="#00D7A3"
        strokeWidth="1.2"
        variants={pathVariants}
      />
      {/* Regular dots - green */}
      <motion.path
        d="M8 14h.01M12 14h.01M8 18h.01M12 18h.01"
        stroke="#00D7A3"
        strokeWidth="2"
        strokeLinecap="round"
        variants={pathVariants}
      />
      {/* Selected/booked date - white filled circle */}
      <motion.circle
        cx="16"
        cy="14"
        r="1.8"
        fill="#FFFFFF"
        stroke="none"
        variants={pathVariants}
      />
      {/* Confirmed booking - white checkmark style dot */}
      <motion.path
        d="M16 18h.01"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "CRM Software.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Main person - white (primary/highlighted contact) */}
      <motion.path
        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.circle
        cx="9"
        cy="7"
        r="4"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        variants={pathVariants}
      />
      {/* Secondary person - green (other contacts) */}
      <motion.path
        d="M23 21v-2a4 4 0 0 0-3-3.87"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "Manufacturing Software.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Outer gear - green */}
      <motion.path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Center circle - white (core/highlighted) */}
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        variants={pathVariants}
      />
    </svg>
  ),
  "Scheduling App.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Outer clock face - green */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Clock hands - white (highlighted current time) */}
      <motion.polyline
        points="12 6 12 12 16 14"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "Property Management.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* House outline - green */}
      <motion.path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Door - white (highlighted entrance) */}
      <motion.polyline
        points="9 22 9 12 15 12 15 22"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "Transportation Platform.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Cargo body - green */}
      <motion.rect
        x="1"
        y="3"
        width="15"
        height="13"
        rx="2"
        ry="2"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Cabin - white (highlighted front) */}
      <motion.polygon
        points="16 8 20 8 23 11 23 16 16 16 16 8"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Wheels - green */}
      <motion.circle
        cx="5.5"
        cy="18.5"
        r="2.5"
        stroke="#00D7A3"
        strokeWidth="1.2"
        variants={pathVariants}
      />
      <motion.circle
        cx="18.5"
        cy="18.5"
        r="2.5"
        stroke="#00D7A3"
        strokeWidth="1.2"
        variants={pathVariants}
      />
    </svg>
  ),
  "Marketplace.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Storefront body - green */}
      <motion.path
        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        stroke="#00D7A3"
        strokeWidth="1.2"
        variants={pathVariants}
      />
      {/* Awning curve / open sign - white (highlighted) */}
      <motion.path
        d="M16 10a4 4 0 0 1-8 0"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "Subscriptions.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Top-right arrow - white (active/renewing) */}
      <motion.path
        d="M17 2.1l4 4-4 4"
        stroke="#FFFFFF"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.path
        d="M3 12a9 9 0 0 1 15-6.7L21 6"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Bottom-left arrow - green */}
      <motion.path
        d="M7 21.9l-4-4 4-4"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      <motion.path
        d="M21 12a9 9 0 0 1-15 6.7L3 18"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </svg>
  ),
  "ERP Software.": (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      {/* Top layer - white (main/active module) */}
      <motion.polygon
        points="12 2 2 7 12 12 22 7 12 2"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Middle layer - green */}
      <motion.polyline
        points="2 12 12 17 22 12"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
      {/* Bottom layer - green */}
      <motion.polyline
        points="2 17 12 22 22 17"
        stroke="#00D7A3"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={pathVariants}
      />
    </svg>
  ),
};

export default function Hero() {
  const [text] = useTypewriter({
    words: WORDS,
    loop: {},
    delaySpeed: 1800,
  });

  const currentWord = WORDS.find((w) => w.startsWith(text)) || WORDS[0];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071018] text-white flex items-center py-16 sm:py-20 lg:py-0">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:35px_35px] sm:bg-[size:55px_55px]" />

      {/* Decorative Glows */}
      <div className="absolute -left-24 top-10 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] lg:-left-44 lg:top-20 lg:h-[500px] lg:w-[500px] rounded-full bg-[#00D7A3]/10 blur-[100px] lg:blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px] rounded-full bg-[#00D7A3]/10 blur-[100px] lg:blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
        {/* RIGHT COLUMN (visual panel) — shown FIRST on mobile/tablet, RIGHT on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex lg:col-span-5 items-center justify-center"
        >
          <div className="relative w-full flex justify-center">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-none lg:h-[560px] lg:w-[560px] xl:h-[620px] xl:w-[620px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#00D7A3]/20 bg-gradient-to-br from-[#0c1a29] to-[#122e4a] shadow-[0_0_60px_rgba(0,215,163,.12)] sm:shadow-[0_0_100px_rgba(0,215,163,.15)] flex items-center justify-center"
            >
              {/* Tech UI Markings */}
              <div className="absolute top-3 left-4 sm:top-5 sm:left-6 font-mono text-[7px] sm:text-[9px] tracking-wider text-slate-500 flex gap-4">
                <span>SPEC NO. 0001 — UNRESTRICTED</span>
              </div>
              <div className="absolute bottom-3 left-4 sm:bottom-5 sm:left-6 font-mono text-[7px] sm:text-[9px] tracking-wider text-slate-500">
                CANVAS — <span className="text-[#00D7A3]">LIVE</span>
              </div>
              <div className="absolute bottom-3 right-4 sm:bottom-5 sm:right-6 font-mono text-[7px] sm:text-[9px] tracking-wider text-slate-500 hidden sm:block">
                RENDERED BY CODEBUDDY
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-15 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:18px_18px] sm:bg-[size:25px_25px]" />

              {/* Scanning line effect */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00D7A3]/60 to-transparent"
                animate={{ top: ["10%", "90%", "10%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              {/* Corner accent dots */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex gap-1.5">
                <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#00D7A3]/70 animate-pulse" />
                <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#00D7A3]/40" />
                <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#00D7A3]/20" />
              </div>

              {/* Blueprint Container Window */}
              <div className="relative z-20 h-[62%] w-[62%] sm:h-72 sm:w-72 xl:h-80 xl:w-80 rounded-xl sm:rounded-2xl border-2 border-[#00D7A3]/30 bg-[#071320]/95 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-8 backdrop-blur-md">
                {/* HUD Tech Borders */}
                <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[#00D7A3]" />
                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[#00D7A3]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[#00D7A3]" />
                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-[#00D7A3]" />

                {/* Smooth Blueprint Icon Line Switcher */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWord}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex flex-col items-center gap-3 sm:gap-6 text-center w-full h-full justify-center"
                  >
                    <div className="flex items-center justify-center h-16 w-16 sm:h-32 sm:w-32 xl:h-36 xl:w-36">
                      {animatedIconMap[currentWord]}
                    </div>

                    <span className="text-[7px] sm:text-[10px] font-mono tracking-widest text-[#00D7A3] opacity-80 uppercase block px-2">
                      {currentWord}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Laser Tracking Connection Lines */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none opacity-25"
                viewBox="0 0 560 560"
              >
                <motion.path
                  d="M 80 150 L 280 150 L 280 240"
                  stroke="#00D7A3"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="5 5"
                  animate={{ strokeDashoffset: [40, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
                <motion.path
                  d="M 280 340 L 280 440 L 480 440"
                  stroke="#00D7A3"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="5 5"
                  animate={{ strokeDashoffset: [-40, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* LEFT COLUMN (text content) — shown SECOND on mobile/tablet, LEFT on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-2 lg:order-1 lg:col-span-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <img
            src={logo}
            className="mb-6 sm:mb-10 h-8 sm:h-11 object-contain mx-auto lg:mx-0"
            alt="CodeBuddy Logo"
          />

          <p className="mb-3 sm:mb-4 tracking-[3px] sm:tracking-[4px] uppercase text-[#00D7A3] font-semibold text-[10px] sm:text-xs md:text-sm">
            CodeBuddy Studio & Solutions
          </p>

          <h1 className="font-['Space_Grotesk'] font-black tracking-tight text-[42px] sm:text-[52px] lg:text-[72px] leading-[1.05]">
            Breaking Down
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            Barriers
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            to <span className="text-[#00D7A3]">Software</span>
            <br className="hidden lg:block" />
            <span className="lg:hidden"> </span>
            Development
          </h1>

          <p className="font-['Space_Grotesk'] mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
            You bring the ideas and the business know-how. We provide the blank
            canvas, development tools, and professional engineers—so what you
            build ships faster, costs less, and scales better.
          </p>

          <div className="font-['Space_Grotesk'] mt-6 sm:mt-8 text-base sm:text-xl font-semibold text-[#00D7A3] h-8 flex items-center justify-center lg:justify-start flex-wrap">
            <span>You could build&nbsp;</span>
            <span className="text-white">{text}</span>
            <Cursor cursorColor="#00D7A3" />
          </div>

          <div className="mt-8 sm:mt-10 flex gap-4 sm:gap-5 flex-wrap items-center justify-center lg:justify-start">
            <button className="font-['Space_Grotesk'] group relative overflow-hidden rounded-xl bg-[#00D7A3] px-6 sm:px-8 py-3 sm:py-4 text-black font-bold hover:scale-105 duration-300 cursor-pointer flex items-center gap-3 shadow-lg shadow-[#00D7A3]/20 text-sm sm:text-base">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="relative z-10 flex items-center gap-3">
                Schedule a Meeting
                <FaArrowRight className="group-hover:translate-x-2 duration-300" />
              </span>
            </button>

            <button className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
              <motion.span
                className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-slate-600 group-hover:border-[#00D7A3] transition-colors duration-300 bg-slate-900/40"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <FaPlay className="text-[#00D7A3] ml-1 text-sm sm:text-base" />
              </motion.span>
              <span className="font-['Space_Grotesk'] font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                Watch 45 Second Overview
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
