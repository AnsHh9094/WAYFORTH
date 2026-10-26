'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { BrandName } from '@/config/brand.config';
import { ShieldCheck, RefreshCw, Zap } from 'lucide-react';

interface ArchivalMonolith3DProps {
  brandName: BrandName;
  className?: string;
}

export function ArchivalMonolith3D({ brandName, className = '' }: ArchivalMonolith3DProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isWatermarked, setIsWatermarked] = useState<boolean>(true);
  const [lightMode, setLightMode] = useState<'studio' | 'uv'>('studio');
  const [coords, setCoords] = useState<{ x: string; y: string }>({ x: '+0.00', y: '+0.00' });
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const folioGroupRef = useRef<THREE.Group | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const keyLightRef = useRef<THREE.PointLight | null>(null);
  const rimLightRef = useRef<THREE.DirectionalLight | null>(null);
  const bounceLightRef = useRef<THREE.DirectionalLight | null>(null);
  const frontMeshRef = useRef<THREE.Mesh | null>(null);
  const textureCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const frontTextureRef = useRef<THREE.CanvasTexture | null>(null);

  // Rotations for smooth physics
  const targetRotX = useRef<number>(0.05);
  const targetRotY = useRef<number>(-0.08);
  const currentRotX = useRef<number>(0.05);
  const currentRotY = useRef<number>(-0.08);
  const flipAngle = useRef<number>(0);
  const targetFlipAngle = useRef<number>(0);

  // Drag interaction trackers
  const isMouseDown = useRef<boolean>(false);
  const dragStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Procedural Paper Texture Canvas Generator with Studio & UV Modes
  const drawManuscriptTexture = useCallback(
    (canvas: HTMLCanvasElement, showWatermark: boolean, brand: BrandName, mode: 'studio' | 'uv') => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      const isUV = mode === 'uv';

      // Reset shadows
      ctx.shadowBlur = 0;
      ctx.shadowColor = 'transparent';

      // 1. Archival Heavyweight Paper Base
      ctx.fillStyle = isUV ? '#0E0C17' : '#FCFCF9';
      ctx.fillRect(0, 0, w, h);

      // 2. Subtle Micro Paper Grain / Fiber simulation
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const noiseAmp = isUV ? 5 : 7;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * noiseAmp;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imgData, 0, 0);

      // In UV mode: draw embedded fluorescent security fibers scattered across paper
      if (isUV) {
        ctx.lineWidth = 1.5;
        const fiberColors = ['#00FFA3', '#00E5FF', '#D500F9'];
        for (let f = 0; f < 35; f++) {
          const fx = 40 + Math.random() * (w - 80);
          const fy = 40 + Math.random() * (h - 80);
          ctx.strokeStyle = fiberColors[f % fiberColors.length];
          ctx.beginPath();
          ctx.moveTo(fx, fy);
          ctx.quadraticCurveTo(fx + (Math.random() - 0.5) * 16, fy + (Math.random() - 0.5) * 16, fx + (Math.random() - 0.5) * 24, fy + (Math.random() - 0.5) * 24);
          ctx.stroke();
        }
      }

      // 3. Deckled Edge / Inset Border Frame
      ctx.strokeStyle = isUV ? '#2A2345' : '#D8E2EC';
      ctx.lineWidth = 2;
      ctx.strokeRect(36, 36, w - 72, h - 72);

      // 4. Architectural Corner Crop Marks
      ctx.strokeStyle = isUV ? '#5C4E8A' : '#94A3B8';
      ctx.lineWidth = 3;
      const m = 28;
      const len = 22;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(m, m + len); ctx.lineTo(m, m); ctx.lineTo(m + len, m);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(w - m - len, m); ctx.lineTo(w - m, m); ctx.lineTo(w - m, m + len);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(m, h - m - len); ctx.lineTo(m, h - m); ctx.lineTo(m + len, h - m);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(w - m - len, h - m); ctx.lineTo(w - m, h - m); ctx.lineTo(w - m, h - m - len);
      ctx.stroke();

      // 5. Header Monospace Archival Metadata
      ctx.fillStyle = isUV ? '#7A6E99' : '#5A6B7C';
      ctx.font = '600 18px "Courier New", monospace';
      ctx.fillText(`ARCHIVAL NO. 04 // SEC. 3.2`, 54, 76);

      ctx.fillStyle = isUV ? '#00FFA3' : '#12324E';
      ctx.font = '700 18px "Courier New", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(isUV ? `FORENSIC CALIBRATION ACTIVE` : `100% GENUINE HUMAN INQUIRY`, w - 54, 76);
      ctx.textAlign = 'left';

      // Rule line
      ctx.strokeStyle = isUV ? '#2A2345' : '#D8E2EC';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(54, 94);
      ctx.lineTo(w - 54, 94);
      ctx.stroke();

      // 6. Chapter Rubric
      ctx.fillStyle = isUV ? '#B388FF' : '#1D5382';
      ctx.font = '700 16px "Courier New", monospace';
      ctx.fillText(`CHAPTER III: EMPIRICAL CAPITAL ALLOCATION`, 54, 138);

      // 7. Academic Title (Serif)
      ctx.fillStyle = isUV ? '#D6D1E6' : '#12324E';
      ctx.font = '600 32px "Times New Roman", Georgia, serif';
      ctx.fillText(`Econometric Variance in Public Capital Cycles`, 54, 184);

      // 8. Body Text Simulation
      ctx.fillStyle = isUV ? '#887E9C' : '#2C3E50';
      ctx.font = 'normal 19px "Times New Roman", Georgia, serif';
      const textLines = [
        'The primary econometric specification isolates exogenous shocks across',
        'transitional financial regimes (2018–2025). Employing generalized method',
        'of moments (GMM) estimation, the model accounts for endogeneity in capital',
        'expenditure timing while controlling for macroeconomic volatility.',
      ];
      let yOffset = 236;
      for (const line of textLines) {
        ctx.fillText(line, 54, yOffset);
        yOffset += 32;
      }

      // 9. Mathematical Equation Callout Block
      ctx.fillStyle = isUV ? '#171424' : '#F4F7FB';
      ctx.fillRect(54, yOffset + 12, w - 108, 64);
      ctx.fillStyle = isUV ? '#00E5FF' : '#1D5382';
      ctx.fillRect(54, yOffset + 12, 5, 64);

      ctx.fillStyle = isUV ? '#EDE7F6' : '#12324E';
      ctx.font = 'bold 20px "Courier New", monospace';
      ctx.fillText('Y[i,t] = β₀ + β₁CAPEX[i,t] + γX[i,t] + ε[i,t]', 78, yOffset + 50);

      yOffset += 110;

      // 10. Secondary Commentary
      ctx.fillStyle = isUV ? '#6D6582' : '#5A6B7C';
      ctx.font = 'italic 18px "Times New Roman", Georgia, serif';
      ctx.fillText(
        'Empirical variance inflation factors (VIF < 1.84) confirm robust collinear stability.',
        54,
        yOffset
      );

      // 11. Embossed Foil Wax / Seal in bottom corner
      ctx.save();
      const sealX = w - 120;
      const sealY = h - 130;
      ctx.translate(sealX, sealY);

      if (isUV) {
        // Glowing phosphorescent seal
        ctx.shadowBlur = 16;
        ctx.shadowColor = '#00FFA3';
        ctx.strokeStyle = '#00FFA3';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, 0, 48, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 42, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#00E5FF';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#00FFA3';
        ctx.font = '700 13px "Courier New", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(brand.toUpperCase(), 0, -4);
        ctx.fillStyle = '#00E5FF';
        ctx.font = '600 10px "Courier New", monospace';
        ctx.fillText('UV AUTH 2026', 0, 12);
      } else {
        // Standard gold foil seal
        ctx.beginPath();
        ctx.arc(0, 0, 48, 0, Math.PI * 2);
        ctx.strokeStyle = '#9E6728';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 42, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = '#B58849';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#1B362A';
        ctx.font = '700 13px "Courier New", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(brand.toUpperCase(), 0, -4);
        ctx.fillStyle = '#9E6728';
        ctx.font = '600 10px "Courier New", monospace';
        ctx.fillText('VERIFIED 2026', 0, 12);
      }
      ctx.restore();

      // 12. Folio Footer
      ctx.strokeStyle = isUV ? '#2A2345' : '#D8E2EC';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(54, h - 56);
      ctx.lineTo(w - 54, h - 56);
      ctx.stroke();

      ctx.fillStyle = isUV ? '#7A6E99' : '#5A6B7C';
      ctx.font = '600 14px "Courier New", monospace';
      ctx.fillText(`${brand.toUpperCase()} ARCHIVAL FOLIO // AP-2400`, 54, h - 32);
      ctx.textAlign = 'right';
      ctx.fillText('PAGE 14 OF 28 • APA 7TH', w - 54, h - 32);
      ctx.textAlign = 'left';

      // 13. Diagonal Security Watermark Stamp (Milestone Review Safeguard)
      if (showWatermark) {
        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.rotate(-Math.PI / 6.8);

        const pw = w * 0.74;
        const ph = 88;

        if (isUV) {
          // Intense UV Phosphor Glow
          ctx.shadowBlur = 24;
          ctx.shadowColor = '#00FFA3';
          ctx.fillStyle = 'rgba(10, 8, 20, 0.9)';
          ctx.strokeStyle = '#00FFA3';
          ctx.lineWidth = 4;
          ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
          ctx.strokeRect(-pw / 2, -ph / 2, pw, ph);

          ctx.fillStyle = '#00FFA3';
          ctx.font = '800 24px "Courier New", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('SECURITY WATERMARK // 365nm', 0, -8);

          ctx.font = '700 13px "Courier New", monospace';
          ctx.fillStyle = '#00E5FF';
          ctx.fillText(`${brand.toUpperCase()} FORENSIC THREAD • MILESTONE VERIFIED`, 0, 18);
        } else {
          // Clean Champoleon Navy Watermark
          ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
          ctx.strokeStyle = 'rgba(18, 50, 78, 0.75)';
          ctx.lineWidth = 5;
          ctx.fillRect(-pw / 2, -ph / 2, pw, ph);
          ctx.strokeRect(-pw / 2, -ph / 2, pw, ph);

          ctx.fillStyle = '#12324E';
          ctx.font = '800 24px "Courier New", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('ACADEMIC FOLIO // SPECIMEN DRAFT', 0, -8);

          ctx.font = '700 13px "Courier New", monospace';
          ctx.fillStyle = '#1D5382';
          ctx.fillText(`${brand.toUpperCase()} ADVISORY • 100% HUMAN AUTHORED`, 0, 18);
        }

        ctx.restore();
      }
    },
    []
  );

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    if (!mountRef.current) return;
    const container = mountRef.current;
    const width = container.clientWidth || 440;
    const height = container.clientHeight || 560;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      if (!window.WebGLRenderingContext || (!testCanvas.getContext('webgl') && !testCanvas.getContext('experimental-webgl'))) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);
    cameraRef.current = camera;

    // 2. Renderer with Antialiasing & Alpha
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Studio / UV Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    // Key spotlight following cursor
    const keyLight = new THREE.PointLight(0xfff8ee, 3.2, 12, 1.2);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    // Emerald rim light
    const rimLight = new THREE.DirectionalLight(0x1b362a, 1.8);
    rimLight.position.set(-3, -2, -2);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // Warm gold secondary bounce light
    const bounceLight = new THREE.DirectionalLight(0xb58849, 0.8);
    bounceLight.position.set(3, -2, 1);
    scene.add(bounceLight);
    bounceLightRef.current = bounceLight;

    // 4. Create Procedural Texture Canvas
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1350;
    textureCanvasRef.current = canvas;
    drawManuscriptTexture(canvas, isWatermarked, brandName, lightMode);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    frontTextureRef.current = texture;

    // 5. Geometry & Materials
    const folioGroup = new THREE.Group();
    scene.add(folioGroup);
    folioGroupRef.current = folioGroup;

    // Main Dimensional Folio Slab (Realistic 300GSM paper thickness)
    const paperWidth = 2.4;
    const paperHeight = 3.16;
    const paperDepth = 0.04;
    const geometry = new THREE.BoxGeometry(paperWidth, paperHeight, paperDepth, 16, 16, 2);

    // Front material (Manuscript page)
    const frontMat = new THREE.MeshPhysicalMaterial({
      map: texture,
      roughness: 0.85,
      metalness: 0.05,
      clearcoat: 0.12,
      clearcoatRoughness: 0.8,
      reflectivity: 0.2,
    });

    // Paper edge material
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0xeeebe2,
      roughness: 0.95,
      metalness: 0.0,
    });

    // Back material
    const backMat = new THREE.MeshStandardMaterial({
      color: 0xf9f8f4,
      roughness: 0.9,
      metalness: 0.0,
    });

    const materials = [edgeMat, edgeMat, edgeMat, edgeMat, frontMat, backMat];
    const paperMesh = new THREE.Mesh(geometry, materials);
    paperMesh.castShadow = true;
    paperMesh.receiveShadow = true;
    folioGroup.add(paperMesh);
    frontMeshRef.current = paperMesh;

    // 6. Secondary Ghost Layer Underneath for Archival Depth
    const ghostGeom = new THREE.BoxGeometry(paperWidth * 0.98, paperHeight * 0.98, 0.02);
    const ghostMat = new THREE.MeshStandardMaterial({
      color: 0xe5e1d6,
      roughness: 0.95,
    });
    const ghostMesh = new THREE.Mesh(ghostGeom, ghostMat);
    ghostMesh.position.set(0.08, -0.08, -0.05);
    ghostMesh.rotation.z = -0.04;
    folioGroup.add(ghostMesh);

    // 7. Animation Loop with Buttery Damping & Levitation
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle micro-levitation
      const levitation = Math.sin(elapsedTime * 1.6) * 0.035;
      const microFloatX = Math.cos(elapsedTime * 1.1) * 0.015;

      // Smooth damping interpolation (lerp)
      currentRotX.current += (targetRotX.current - currentRotX.current) * 0.07;
      currentRotY.current += (targetRotY.current - currentRotY.current) * 0.07;
      flipAngle.current += (targetFlipAngle.current - flipAngle.current) * 0.08;

      if (folioGroupRef.current) {
        folioGroupRef.current.position.y = levitation;
        folioGroupRef.current.position.x = microFloatX;
        folioGroupRef.current.rotation.x = currentRotX.current;
        folioGroupRef.current.rotation.y = currentRotY.current + flipAngle.current;
      }

      // Smooth dynamic light orbit following current rotation
      if (keyLightRef.current) {
        keyLightRef.current.position.x = 2 + currentRotY.current * 3;
        keyLightRef.current.position.y = 3 + currentRotX.current * 3;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Handle Window Resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !cameraRef.current) return;
      const newW = mountRef.current.clientWidth;
      const newH = mountRef.current.clientHeight;
      cameraRef.current.aspect = newW / newH;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup resources on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      geometry.dispose();
      ghostGeom.dispose();
      materials.forEach((m) => m.dispose());
      ghostMat.dispose();
      texture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [drawManuscriptTexture, brandName, lightMode]);

  // Update lighting and procedural texture whenever lightMode, isWatermarked, or brand changes
  useEffect(() => {
    if (!textureCanvasRef.current || !frontTextureRef.current) return;
    drawManuscriptTexture(textureCanvasRef.current, isWatermarked, brandName, lightMode);
    frontTextureRef.current.needsUpdate = true;

    // Adjust 3D lights dynamically based on studio vs UV mode
    if (ambientLightRef.current && keyLightRef.current && rimLightRef.current && bounceLightRef.current) {
      if (lightMode === 'uv') {
        ambientLightRef.current.color.setHex(0x120c24);
        ambientLightRef.current.intensity = 0.8;

        keyLightRef.current.color.setHex(0x7c4dff);
        keyLightRef.current.intensity = 4.6;

        rimLightRef.current.color.setHex(0x00e5ff);
        rimLightRef.current.intensity = 2.4;

        bounceLightRef.current.color.setHex(0x00ffa3);
        bounceLightRef.current.intensity = 1.2;
      } else {
        ambientLightRef.current.color.setHex(0xffffff);
        ambientLightRef.current.intensity = 1.4;

        keyLightRef.current.color.setHex(0xfff8ee);
        keyLightRef.current.intensity = 3.2;

        rimLightRef.current.color.setHex(0x1b362a);
        rimLightRef.current.intensity = 1.8;

        bounceLightRef.current.color.setHex(0xb58849);
        bounceLightRef.current.intensity = 0.8;
      }
    }
  }, [isWatermarked, brandName, lightMode, drawManuscriptTexture]);

  // Mouse Movement & Drag Orbit Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isMouseDown.current = true;
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mountRef.current) return;

    if (isMouseDown.current) {
      // Free drag orbit
      const deltaX = (e.clientX - dragStartPos.current.x) * 0.005;
      const deltaY = (e.clientY - dragStartPos.current.y) * 0.005;
      targetRotY.current += deltaX;
      targetRotX.current += deltaY;
      dragStartPos.current = { x: e.clientX, y: e.clientY };

      setCoords({
        x: (targetRotY.current > 0 ? '+' : '') + targetRotY.current.toFixed(2),
        y: (targetRotX.current > 0 ? '+' : '') + targetRotX.current.toFixed(2),
      });
      return;
    }

    // Standard mouse parallax when hovering
    const rect = mountRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;

    targetRotY.current = normX * 0.45;
    targetRotX.current = -normY * 0.35;

    setCoords({
      x: (normX > 0 ? '+' : '') + normX.toFixed(2),
      y: (normY > 0 ? '+' : '') + normY.toFixed(2),
    });
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
    setIsDragging(false);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    isMouseDown.current = false;
    setIsDragging(false);
    setIsHovered(false);
    targetRotX.current = 0.05;
    targetRotY.current = -0.08;
    setCoords({ x: '+0.00', y: '+0.00' });
  };

  // Flip 180° rotation trigger
  const handleInspectFlip = () => {
    targetFlipAngle.current = targetFlipAngle.current === 0 ? Math.PI : 0;
  };

  // Toggle watermark state
  const handleToggleWatermark = () => {
    setIsWatermarked((prev) => !prev);
  };

  // Toggle Studio vs UV Light Mode
  const handleToggleLightMode = () => {
    setLightMode((prev) => (prev === 'studio' ? 'uv' : 'studio'));
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* 3D WebGL Canvas Container with Swiss Archival Frame */}
      <div
        ref={mountRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="ORBIT"
        className={`relative w-full aspect-[1/1.28] max-w-md mx-auto overflow-visible transition-colors duration-500 ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        } ${lightMode === 'uv' ? 'rounded-[3px] bg-[#0A0713]/40' : ''}`}
        aria-label="Interactive 3D Archival Paper Specimen"
      >
        {/* Archival Coordinate HUD */}
        <div className="absolute top-2 left-2 z-20 pointer-events-none flex items-center gap-2 text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 border transition-colors duration-300 backdrop-blur-xs bg-[#FFFFFF]/90 text-[#5A6B7C] border-[#D8E2EC]">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              lightMode === 'uv' ? 'bg-[#00FFA3] animate-ping' : 'bg-[#1D5382] animate-pulse'
            }`}
          />
          <span>{lightMode === 'uv' ? 'FORENSIC 365nm UV' : 'SPECIMEN // 300GSM COTTON'}</span>
        </div>

        <div className="absolute top-2 right-2 z-20 pointer-events-none text-[9px] font-mono tracking-widest text-[#5A6B7C] uppercase bg-[#FFFFFF]/90 backdrop-blur-xs px-2.5 py-1 border border-[#D8E2EC]">
          <span>POS: [{coords.x}, {coords.y}]</span>
        </div>

        {/* Fallback if WebGL is disabled */}
        {!webglSupported && (
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-[#FFFFFF] border border-[#D8E2EC] text-center">
            <p className="text-xs font-mono text-[#5A6B7C]">
              WAYFORTH ARCHIVAL FOLIO // 300GSM COTTON SPECIMEN
            </p>
          </div>
        )}
      </div>

      {/* Interactive Micro-Control Bar Below Centerpiece */}
      <div className="w-full max-w-md mt-4 px-2 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
        {/* Left: Security Watermark Milestone Switch */}
        <button
          onClick={handleToggleWatermark}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border transition-all cursor-pointer ${
            isWatermarked
              ? 'bg-[#12324E]/10 border-[#12324E]/30 text-[#12324E] font-semibold'
              : 'bg-[#F4F7FB] border-[#D8E2EC] text-[#5A6B7C] hover:border-[#12324E]'
          }`}
          title="Toggle preview watermark"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{isWatermarked ? 'WATERMARK ON' : 'CLEAN DRAFT'}</span>
        </button>

        {/* Middle: Forensic UV Light Inspection Mode Switch */}
        <button
          onClick={handleToggleLightMode}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] border transition-all cursor-pointer ${
            lightMode === 'uv'
              ? 'bg-[#1D5382]/15 border-[#1D5382]/50 text-[#1D5382] font-bold shadow-xs'
              : 'bg-[#FFFFFF] border-[#D8E2EC] hover:border-[#12324E] text-[#12324E]'
          }`}
          title="Toggle 365nm Forensic UV Light Mode"
        >
          <Zap className={`w-3.5 h-3.5 ${lightMode === 'uv' ? 'text-[#00FFA3] fill-[#00FFA3]' : 'text-[#1D5382]'}`} />
          <span>{lightMode === 'uv' ? 'UV ACTIVE (365nm)' : 'UV FORENSIC'}</span>
        </button>

        {/* Right: Flip & Orbit Action */}
        <button
          onClick={handleInspectFlip}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFFFF] border border-[#D8E2EC] hover:border-[#12324E] text-[#12324E] transition-colors cursor-pointer rounded-[2px]"
          title="Inspect reverse archival folio"
        >
          <RefreshCw className="w-3 h-3 text-[#5A6B7C]" />
          <span>FLIP FOLIO</span>
        </button>
      </div>

      {/* Micro Status Hint */}
      <div className="mt-2 text-center text-[9px] font-mono text-[#5A6B7C] tracking-wider">
        <span>CLICK & DRAG TO ROTATE • FORENSIC INSPECTION ACTIVE</span>
      </div>
    </div>
  );
}
