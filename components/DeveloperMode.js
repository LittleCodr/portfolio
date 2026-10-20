import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { SITE_MODE } from '../lib/modeConfig';

export default function DeveloperMode() {
  const canvasRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [pingRunning, setPingRunning] = useState(false);
  const [latency, setLatency] = useState(null);
  const [logs, setLogs] = useState([
    { text: 'SYSTEM INITIATION: Developer Mode activated.', type: 'info', time: '12:00:01' },
    { text: 'ROUTER: Diverting all incoming traffic to maintenance gateway.', type: 'warn', time: '12:00:02' },
    { text: 'VERIFIED ROUTE: /app-ads.txt is LIVE and untouched [HTTP 200 OK].', type: 'success', time: '12:00:03' },
    { text: 'AdMob Crawler: google.com, pub-9556932057990725, DIRECT, f08c47fec0942fa0 verified.', type: 'success', time: '12:00:04' },
    { text: 'BUILD ENGINE: Refactoring core architecture and AI pipelines...', type: 'info', time: '12:00:05' },
    { text: 'STATUS: System under active developer upgrades. Crafting new experience.', type: 'accent', time: '12:00:06' },
  ]);

  // Audio synthesizer tone for interactive feedback
  const playPingSound = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      // Ignore audio failure
    }
  };

  // Run interactive diagnostic test
  const handleRunDiagnostic = () => {
    if (pingRunning) return;
    setPingRunning(true);
    playPingSound();

    const timestamp = new Date().toTimeString().split(' ')[0];
    setLogs((prev) => [
      ...prev,
      { text: `> Running interactive telemetry scan [${timestamp}]...`, type: 'info', time: timestamp },
    ]);

    setTimeout(() => {
      const measuredLatency = Math.floor(Math.random() * 15) + 12;
      setLatency(measuredLatency);
      setPingRunning(false);

      const now = new Date().toTimeString().split(' ')[0];
      setLogs((prev) => [
        ...prev,
        { text: `✔ DIAGNOSTIC PASS: Latency ${measuredLatency}ms | Core engine responsive`, type: 'success', time: now },
        { text: `✔ ENDPOINT CHECK: /app-ads.txt is ACCESSIBLE (direct pub-9556932057990725)`, type: 'success', time: now },
        { text: `✔ UPGRADE STATUS: 88% completed. Neural modules loading...`, type: 'accent', time: now },
      ]);
    }, 900);
  };

  // Handle email copy
  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(SITE_MODE.CONTACT_EMAIL);
      setCopied(true);
      playPingSound();
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Interactive Particle Constellation Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates for interactive attraction
    const mouse = { x: null, y: null, radius: 140 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles = [];
    const colors = ['#E95420', '#77216F', '#38BDF8', '#818CF8', '#34D399'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.5 + 0.3,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x += (dx / dist) * force * 1.5;
            p.y += (dy / dist) * force * 1.5;
          }
        }

        // Draw particle dot with glow
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.save();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 110) * 0.22;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Connect to mouse if close
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.save();
            ctx.strokeStyle = '#38BDF8';
            ctx.globalAlpha = (1 - dist / 130) * 0.45;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Mayank Agrawal | Developer Mode (Under Maintenance)</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Mayank Agrawal | Developer Mode (Under Maintenance)" />
        <meta
          name="description"
          content="Mayank Agrawal's portfolio is currently undergoing scheduled developer maintenance and system upgrades. Endpoint /app-ads.txt is live and verified."
        />
        <meta name="robots" content="noindex, follow" />
        <meta name="theme-color" content="#0B0D17" />
        <link rel="icon" href="/themes/Yaru/system/user-home.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@400;500;600;700;800&family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="relative min-h-screen w-full bg-[#07090E] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#E95420] selection:text-white font-['Outfit',sans-serif]">
        {/* Background interactive canvas */}
        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

        {/* Ambient Radial Glowing Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-gradient-to-br from-[#E95420]/20 via-[#77216F]/15 to-transparent rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-slow" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] bg-gradient-to-tl from-[#38BDF8]/20 via-[#6366F1]/15 to-transparent rounded-full blur-[140px] pointer-events-none z-0 animate-pulse-slow" />

        {/* Top Navigation Bar */}
        <header className="relative z-10 w-full px-6 py-4 md:px-12 flex items-center justify-between border-b border-white/[0.07] backdrop-blur-md bg-[#07090E]/60">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E95420] to-[#77216F] p-[1px] shadow-lg shadow-[#E95420]/20">
              <div className="w-full h-full bg-[#0F111A] rounded-[11px] flex items-center justify-center text-xs font-mono font-bold text-[#E95420]">
                &lt;/&gt;
              </div>
            </div>
            <div>
              <div className="font-bold tracking-tight text-sm md:text-base flex items-center gap-2">
                <span>{SITE_MODE.OWNER_NAME}</span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-mono font-semibold tracking-wider bg-white/10 text-gray-300 rounded-full border border-white/10">
                  Engineer
                </span>
              </div>
              <div className="text-[11px] text-gray-400 font-mono hidden sm:block">
                portfolio // v2.5-dev
              </div>
            </div>
          </div>

          {/* Quick status pill and audio toggle */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>DEV MODE</span>
            </div>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Mute SFX' : 'Enable SFX'}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-colors duration-150 text-xs"
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 max-w-6xl mx-auto w-full px-5 py-8 md:py-12 flex flex-col items-center justify-center">
          {/* Hero Hologram / Graphic Animation */}
          <div className="relative my-4 flex items-center justify-center">
            {/* Holographic Glowing Orbital Rings */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Outer Counter-Rotating Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#E95420]/40 animate-spin-slow" />
              
              {/* Middle Neon Ring */}
              <div className="absolute inset-4 rounded-full border border-cyan-400/30 animate-spin-reverse">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#38BDF8]" />
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E95420] shadow-[0_0_10px_#E95420]" />
              </div>

              {/* Inner Pulsing Radar Shield */}
              <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#E95420]/15 via-[#77216F]/20 to-cyan-500/15 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(233,84,32,0.25)] animate-pulse-gentle">
                {/* 3D-styled Developer Core Isometric Icon */}
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#141824] to-[#1E2333] border border-white/20 shadow-2xl flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 group">
                    <svg
                      className="w-8 h-8 text-[#E95420] group-hover:scale-110 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Tech Badges */}
              <div className="absolute -top-1 -right-2 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#E95420]/20 text-[#FFA07A] border border-[#E95420]/40 backdrop-blur-md shadow-lg animate-float">
                DEV_MODE
              </div>
              <div className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-lg animate-float-delay">
                ADS_TXT: 200 OK
              </div>
            </div>
          </div>

          {/* Heading and Core Announcement */}
          <div className="text-center max-w-2xl mx-auto mt-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300 mb-4 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E95420] animate-ping" />
              <span>SCHEDULED SYSTEM MAINTENANCE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Under Active <br />
              <span className="bg-gradient-to-r from-[#E95420] via-[#FF8A65] to-[#38BDF8] bg-clip-text text-transparent">
                Developer Maintenance
              </span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Our web infrastructure is temporarily offline while we re-architect core systems, deploy
              cutting-edge AI features, and refresh the user experience. All regular pages are under maintenance.
            </p>
          </div>

          {/* Critical Endpoint Status Banner: app-ads.txt LIVE */}
          <div className="w-full max-w-2xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 mb-8 backdrop-blur-md shadow-[0_0_25px_rgba(16,185,129,0.1)] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                ✓
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-300 flex items-center gap-2">
                  <span>Endpoint Active: /app-ads.txt</span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-500/30 text-emerald-200 font-mono">
                    LIVE
                  </span>
                </div>
                <div className="text-xs text-emerald-400/80 font-mono">
                  AdMob & ad network verification crawler remains 100% operational.
                </div>
              </div>
            </div>

            <a
              href={SITE_MODE.APP_ADS_TXT_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs tracking-wide transition-all duration-150 shadow-md shadow-emerald-500/20 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>View app-ads.txt</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Interactive Developer Terminal Window */}
          <div className="w-full max-w-3xl bg-[#0B0E17]/85 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden mb-8">
            {/* Terminal Title Bar */}
            <div className="px-4 py-3 bg-[#111624]/90 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                <span className="ml-2 text-xs font-mono text-gray-400">
                  mayank@workstation: ~/portfolio (main:dev-mode)
                </span>
              </div>

              <button
                onClick={handleRunDiagnostic}
                disabled={pingRunning}
                className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#E95420]/20 hover:bg-[#E95420]/30 text-[#FFA07A] border border-[#E95420]/40 transition-all duration-150 flex items-center gap-1.5 disabled:opacity-50"
              >
                <span>{pingRunning ? '⏳ Scanning...' : '⚡ Run Diagnostic Ping'}</span>
              </button>
            </div>

            {/* Terminal Logs Body */}
            <div className="p-4 sm:p-5 font-['JetBrains_Mono',monospace] text-xs sm:text-[13px] leading-relaxed max-h-56 overflow-y-auto space-y-2 select-text">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-gray-500 text-[11px] shrink-0">[{log.time}]</span>
                  <span
                    className={
                      log.type === 'success'
                        ? 'text-emerald-400'
                        : log.type === 'warn'
                        ? 'text-amber-400'
                        : log.type === 'accent'
                        ? 'text-[#FF8A65]'
                        : 'text-gray-300'
                    }
                  >
                    {log.text}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1 text-[#E95420] pt-1">
                <span>$</span>
                <span className="w-2 h-4 bg-[#E95420] animate-pulse" />
              </div>
            </div>

            {/* Terminal Footer Telemetry */}
            <div className="px-4 py-2.5 bg-[#090C14] border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[11px] font-mono text-gray-400 gap-2">
              <div className="flex items-center gap-4">
                <span>
                  STATUS: <strong className="text-emerald-400">ONLINE (DEV)</strong>
                </span>
                <span>
                  LATENCY:{' '}
                  <strong className="text-cyan-400">{latency ? `${latency}ms` : '18ms (stable)'}</strong>
                </span>
              </div>
              <div>
                BUILD PROGRESS: <strong className="text-[#FF8A65]">88% COMPLETED</strong>
              </div>
            </div>
          </div>

          {/* Progress Shimmer Bar */}
          <div className="w-full max-w-xl mb-10">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-2">
              <span>UPGRADE PROGRESS</span>
              <span className="text-[#E95420] font-bold">88%</span>
            </div>
            <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/10">
              <div className="h-full bg-gradient-to-r from-[#E95420] via-[#77216F] to-[#38BDF8] rounded-full w-[88%] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-shimmer" />
              </div>
            </div>
          </div>

          {/* Socials & Contact Glass Section */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="text-xs uppercase font-mono text-gray-400 tracking-wider">
              Need urgent reach? Connect directly with Mayank
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* GitHub */}
              <a
                href={SITE_MODE.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-gray-200 transition-all duration-150 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_MODE.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-gray-200 transition-all duration-150 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* Twitter / X */}
              <a
                href={SITE_MODE.TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-xs font-medium text-gray-200 transition-all duration-150 flex items-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Twitter</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-xl bg-[#E95420]/15 hover:bg-[#E95420]/25 border border-[#E95420]/30 hover:border-[#E95420]/50 text-xs font-medium text-[#FFA07A] transition-all duration-150 flex items-center gap-2 relative group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{copied ? '✓ Copied to clipboard!' : SITE_MODE.CONTACT_EMAIL}</span>
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full px-6 py-4 text-center border-t border-white/[0.06] text-xs text-gray-500 font-mono flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto">
          <div>
            © {new Date().getFullYear()} {SITE_MODE.OWNER_NAME}. All rights reserved.
          </div>
          <div className="mt-2 sm:mt-0 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span>All systems standby — Developer Mode engaged</span>
          </div>
        </footer>
      </div>
    </>
  );
}
