import React, { useRef, useEffect, useState } from 'react';

interface ComponentProps {
  className?: string;
}

const FOURIER_DATA = [
  {
    "name": "P",
    "color": "#94ccff",
    "glowColor": "rgba(148, 204, 255, 0.36)",
    "lineWidth": 5, "scale": 6.7, "xShift": 2.1, "yShift": -0.04,
    "F": [-1,2,1,-2,-3,-4,3,-5,4,7,6,5,-9,-6,9,8,-7,-10,-12,-11,10,14,12,18,11,-16,-20,15,-21,-23,-13,23,25,19,-15,13,17,20,-22,26,21,-28,-18,-8,-14,24,-27,22,-39,-17,-25,34,-32,37,36,30,-24,-31,-34,16,-26,28,41,35,42,-40,-37,-38,29,-36,39,-50,53,-35,-29,-19,-42,44,-30,52,-51,33,55,48,-41,45,-55,-57,-47,-58,-44,-53,32,64,43,-69,-33,-66,27,-46],
    "Ax": [-0.75159,0.0811,-0.0117,-0.00044,-0.0327,0.0431,0.0317,0.0181,0.00548,-0.0157,-0.00961,0.0111,-0.00656,-0.00636,0.00593,-0.000918,-0.000303,-0.00456,0.00376,0.00322,0.00193,-0.00251,0.00207,0.00191,0.000933,-0.00163,0.00134,-0.00149,0.0013,-0.00111,0.001,-0.000979,0.00104,0.000623,-0.000968,-0.000502,0.000758,-0.000824,-0.000589,0.000734,-0.00026,0.000703,-0.000133,0.000326,0.000368,-0.000282,0.000419,-0.000159,-0.000519,-0.000505,-0.0000565,0.000443,-0.000471,-0.000407,-0.000432,-0.000448,-0.000142,-0.000405,0.00034,-0.000351,-0.000286,-0.000204,0.000242,0.000221,0.000296,-0.00016,0.00026,-0.000096,-0.000268,0.000098,0.0000283,0.000255,-0.000249,0.000124,0.000171,-0.0000358,0.00016,-0.000212,-0.000211,-0.000143,0.000158,0.000192,0.000198,0.000184,0.000195,-0.000183,-0.000151,0.00015,-0.000155,0.000151,0.00015,-0.0000581,0.000125,0.000155,-0.0000948,-0.000138,0.0000526,0.000124,-0.000101,-0.000139],
    "Ay": [0.0195,0.0293,-0.0691,-0.0621,0.0441,-0.00173,0.017,-0.0151,-0.0222,-0.00218,0.011,-0.000272,-0.00429,0.00424,0.00227,-0.00564,0.00486,0.00157,-0.00126,0.00208,0.00257,0.000232,-0.00109,0.000106,-0.00148,0.000249,0.0007,-0.0000596,-0.000357,0.000506,-0.00065,0.000491,-0.000275,0.000747,0.0000303,0.000804,-0.000533,-0.000328,-0.00065,0.000409,-0.000711,0.0000284,-0.000654,-0.000564,0.00049,-0.000506,0.00036,0.000505,-0.0000601,-0.00000622,-0.00049,-0.000184,0.0000563,-0.000226,0.000129,0.0000474,0.000422,-0.0000483,-0.000127,0.0000495,-0.000194,-0.000235,-0.000191,0.000211,0.0000265,0.000248,0.000116,-0.000253,-0.0000128,0.000246,0.000259,0.0000276,-0.0000341,-0.000194,-0.000152,0.00022,-0.00015,-0.0000393,0.0000175,0.000155,-0.000139,-0.0000857,0.0000482,0.0000723,-0.000033,-0.0000268,-0.0000959,0.000065,-0.0000371,-0.0000465,0.0000507,0.000145,0.0000926,0.00000867,0.000116,0.0000574,0.000139,0.0000695,0.0000983,0.0000103]
  },
  {
    "name": "M",
    "color": "#ffb3b1",
    "glowColor": "rgba(255, 179, 177, 0.36)",
    "lineWidth": 5, "scale": 8.7, "xShift": 0, "yShift": 0.037,
    "F": [-1,-4,1,-2,-3,-6,4,3,-5,5,8,9,11,6,2,-8,7,-10,-7,-9,-15,13,-18,-21,-11,21,20,23,-19,10,15,18,-24,-31,36,-16,24,26,-20,-33,-25,12,-30,-12,-39,38,29,-22,-46,34,-14,25,27,33,-13,-36,51,49,-44,28,50,39,-48,22,65,-29,53,-60,-23,44,-53,16,19,-54,47,-38,-47,-81,-59,48,58,54,35,-66,62,-75,-63,-61,-57,-55,68,-34,-62,43,71,40,-51,46,-37,-68],
    "Ax": [-0.587,-0.132,-0.137,-0.0549,-0.0791,0.0735,0.0555,0.0459,-0.0163,0.0122,0.0226,0.0123,-0.0185,-0.0199,0.00848,0.00921,0.00099,0.00528,0.000657,-0.00331,-0.0054,-0.00569,-0.00511,0.00167,0.00462,-0.00137,0.00421,0.00279,0.000644,0.00235,-0.00284,0.00273,0.00131,-0.000975,0.00153,0.00114,-0.000924,0.000112,-0.0017,-0.0000621,0.00161,-0.000448,-0.00126,-0.000392,0.00139,-0.000439,-0.00103,0.00109,-0.00121,0.00116,-0.000227,-0.000992,-0.00101,0.0000359,0.000978,-0.000711,0.000749,0.000507,-0.000621,-0.000278,0.000383,-0.000656,0.000568,-0.000527,0.000575,-0.000461,-0.000566,-0.000539,0.000362,-0.000445,0.000472,0.000284,-0.0000747,0.000148,-0.000104,0.00014,0.000101,0.000348,0.0000108,-0.000339,-0.00036,-0.000125,0.000181,-0.0000269,0.000279,-0.000214,0.000267,-0.000138,-0.000156,0.000264,-0.000166,0.000295,-0.000236,-0.000196,-0.0000865,-0.0000402,-0.000262,0.000274,0.000229,0.00014],
    "Ay": [0.143,-0.0937,-0.0335,-0.105,0.069,0.01,-0.0391,0.0401,0.0415,0.031,0.00807,-0.0187,0.0104,0.00273,-0.0163,-0.00328,-0.00958,-0.00566,0.00636,-0.00504,0.00257,0.000189,-0.00221,0.00523,0.00259,0.0043,0.000295,-0.00278,-0.00377,0.00252,-0.00135,-0.00118,-0.00216,0.00206,0.00144,0.0014,-0.00152,0.0017,0.000119,-0.00169,0.000507,-0.0016,-0.00102,0.0014,0.000138,-0.00125,-0.000788,-0.000668,0.000004,0.000329,-0.00109,0.000312,-0.000177,-0.000988,0.0000323,0.000668,-0.000291,-0.000576,-0.000318,0.000639,0.000548,0.0000655,-0.000297,-0.000321,-0.0000954,0.000352,-0.0000617,0.00114,0.000362,0.000227,-0.0000511,-0.000348,-0.000434,0.000411,0.000422,-0.000401,0.000406,-0.000199,-0.000384,-0.000176,0.000099,0.00035,-0.000321,-0.000367,0.000229,-0.000279,0.0002,-0.00029,0.00028,-0.000175,0.000269,-0.0000829,0.000195,-0.000228,-0.000281,0.00028,-0.000102,0.000001,0.000148,0.000228]
  },
  {
    "name": "T",
    "color": "#90d792",
    "glowColor": "rgba(144, 215, 146, 0.36)",
    "lineWidth": 5, "scale": 6.27, "xShift": -2.1, "yShift": -0.15,
    "F": [-1,2,-3,-4,1,-2,-5,5,4,8,3,-7,7,-10,9,-13,10,-9,20,11,-17,15,-15,-16,22,17,16,-21,-25,-22,-19,-20,-29,27,-6,32,34,-32,14,6,-37,-33,23,-11,-23,-8,46,-41,-44,-50,26,-38,37,25,45,-35,19,-62,29,21,33,38,39,-18,49,35,-34,28,57,44,-47,-74,-49,47,-26,-39,-53,58,-51,61,-24,59,-12,-56,67,52,-31,55,-36,-45,50,79,64,-59,-30,-28,71,69,-86,-65],
    "Ax": [-0.52,0.169,-0.0567,0.0165,0.0483,0.0349,-0.0283,0.0283,0.00674,-0.0107,-0.0100,0.00606,-0.00355,0.00777,-0.00874,-0.00587,0.00487,0.00544,-0.00355,-0.000558,-0.00346,0.000319,0.000284,0.00185,0.000608,0.00206,0.0017,0.00171,-0.00144,0.000455,-0.000523,0.00121,-0.000762,0.000886,0.0011,-0.0011,-0.000471,0.000891,0.000598,-0.000771,-0.000144,0.000293,0.000341,-0.000128,0.000333,-0.0003,-0.000532,0.0000214,0.000277,-0.000518,-0.0000076,-0.000299,-0.0000893,-0.000385,-0.000142,0.000447,0.000118,-0.000387,0.000275,-0.00039,0.000175,0.000278,0.000426,0.000199,0.000194,0.000349,-0.000147,0.000338,-0.000282,-0.000179,0.000283,-0.000109,0.000142,0.000274,0.0000434,-0.000279,0.000175,-0.000254,-0.000191,0.000224,-0.000233,0.00011,-0.000147,-0.000037,-0.000001,-0.0000171,-0.000173,0.000136,-0.000175,-0.0000605,0.000195,-0.000125,0.00011,0.0000843,-0.0000336,0.000178,-0.0000392,-0.000164,0.0000508,0.000147],
    "Ay": [-0.463,0.0201,0.0816,0.0693,-0.0423,-0.00373,-0.0152,-0.0151,-0.0276,0.0211,-0.0144,-0.0154,-0.00885,-0.0052,0.00224,-0.000143,0.00318,0.0014,0.00148,-0.00363,0.000736,-0.00306,0.00277,0.00138,0.00209,0.000439,-0.0012,-0.000849,0.00116,-0.00162,-0.00153,0.000504,0.000985,-0.000834,-0.000406,-0.000341,0.00103,-0.000294,0.00063,-0.000282,0.000765,-0.000694,-0.000586,0.000637,0.00055,-0.000525,0.00025,0.000545,-0.000461,-0.000112,-0.000528,-0.000407,-0.000485,-0.000303,0.00046,0.000144,-0.000446,0.00021,0.000342,-0.000199,0.000401,-0.000335,-0.0000184,-0.000352,-0.00033,-0.000125,-0.000325,0.000039,0.000178,-0.000261,-0.000118,0.000281,0.000259,0.000106,-0.00029,-0.00000685,0.000197,-0.0000667,0.000157,-0.0000773,-0.0000392,0.000209,-0.000177,-0.000224,0.000225,-0.00022,-0.000112,0.000154,0.000105,-0.000188,-0.0000312,0.000143,-0.000149,-0.000163,-0.000179,0.0000115,0.000173,-0.000022,0.000155,0.0000239]
  }
];

function computePoint(
  letterData: (typeof FOURIER_DATA)[0],
  t: number,
  termsLimit: number,
  scaleMultiplier: number
) {
  let x = 0;
  let y = 0;
  // Calculate sum up to termsLimit
  const maxTerms = Math.min(termsLimit, letterData.F.length);
  for (let n = 0; n < maxTerms; n++) {
    const fn = letterData.F[n];
    const ax = letterData.Ax[n];
    const ay = letterData.Ay[n];
    const angle = 2 * Math.PI * fn * t;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    x += ax * cosA - ay * sinA;
    y += ax * sinA + ay * cosA;
  }

  // Apply scaling and shifting transforms from the raw X/Y points.
  // Invert Y coordinate so it renders rightside-up.
  const finalX = letterData.scale * (x - letterData.xShift) * scaleMultiplier;
  const finalY = -letterData.scale * (y - letterData.yShift) * scaleMultiplier;

  return { x: finalX, y: finalY };
}

export function FourierWidget({ className = '' }: ComponentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [terms, setTerms] = useState(100);
  const [progress, setProgress] = useState(0);
  const [resizeCounter, setResizeCounter] = useState(0);

  // Initial animation
  useEffect(() => {
    let rafId: number;
    const startTime = Date.now();
    const durationMs = 1500;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      let p = elapsed / durationMs;
      if (p > 1) p = 1;

      // Smooth ease-out cubic
      const ease = 1 - Math.pow(1 - p, 3);
      setProgress(ease);

      if (p < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Drawing effect directly driven by terms and progress state
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays implicitly by using ResizeObserver/client dimensions
    // but for simplicity in a quick hook, we set resolution here:
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    // Check if we need to resize the backing store
    if (
      canvas.width !== width * window.devicePixelRatio ||
      canvas.height !== height * window.devicePixelRatio
    ) {
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
    }

    ctx.save();
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, width, height);

    // Center the origin
    ctx.translate(width / 2, height / 2);

    // Robust dynamic scale: assuming overall horizontal span is ~ 44 units, and height span is ~ 20 units.
    const scaleMultiplier = Math.min(width / 42, height / 20) * 1.1875;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const drawStep = 0.002;

    FOURIER_DATA.forEach((letter) => {
      if (progress <= 0) return;
      
      ctx.beginPath();
      // Draw standard steps
      for (let t = 0; t <= progress; t += drawStep) {
        const pt = computePoint(letter, t, terms, scaleMultiplier);
        if (t === 0) {
          ctx.moveTo(pt.x, pt.y);
        } else {
          ctx.lineTo(pt.x, pt.y);
        }
      }
      // Guarantee extending line directly to the exact progress coordinate if not a clean multiple
      const ptEnd = computePoint(letter, progress, terms, scaleMultiplier);
      ctx.lineTo(ptEnd.x, ptEnd.y);

      ctx.lineWidth = letter.lineWidth * Math.min(width, height) / 800; // Responsive line weight
      ctx.strokeStyle = letter.color;
      ctx.shadowBlur = 12 * Math.min(width, height) / 800; // Responsive glow radius
      ctx.shadowColor = letter.glowColor;
      ctx.stroke();
    });

    ctx.restore();
  }, [terms, progress, resizeCounter]);

  // Optional: Handle window resize updates to properly re-draw
  useEffect(() => {
    const handleResize = () => setResizeCounter((prev) => prev + 1);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative w-full ${className}`}>
      {/* Absolute Translucent Control Pill */}
      <div className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-1.5 glass-panel rounded-full z-20 border border-white/10 text-[10px] md:text-xs whitespace-nowrap overflow-visible">
        <div className="flex items-center gap-2">
          <span className="font-mono text-surface-variant uppercase tracking-widest opacity-80 text-[10px] md:text-[11px]">
            Terms
          </span>
          <input
            type="range"
            min="1"
            max="100"
            value={terms}
            onChange={(e) => setTerms(Number(e.target.value))}
            className="w-16 md:w-24 h-[2px] bg-white/20 rounded-lg cursor-pointer appearance-none text-blue-300"
            style={{
              background: `linear-gradient(to right, currentColor ${(terms - 1) / 99 * 100}%, var(--color-slider-track, rgba(255,255,255,0.2)) ${(terms - 1) / 99 * 100}%)`
            }}
          />
          <span className="w-6 md:w-8 font-mono text-blue-300 text-right text-[10px] md:text-[11px]">{terms}</span>
        </div>

        <div className="flex items-center gap-2 border-l border-white/10 pl-3">
          <span className="font-mono text-surface-variant uppercase tracking-widest opacity-80 text-[10px] md:text-[11px]">
            Progress
          </span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-16 md:w-24 h-[2px] bg-white/20 rounded-lg cursor-pointer appearance-none text-green-300"
            style={{
              background: `linear-gradient(to right, currentColor ${progress * 100}%, var(--color-slider-track, rgba(255,255,255,0.2)) ${progress * 100}%)`
            }}
          />
          <span className="w-8 font-mono text-green-300 text-right text-[10px] md:text-[11px]">
            {Math.round(progress * 100)}%
          </span>
          <a
            href="https://www.desmos.com/calculator/ygiosj8eb1"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-mono text-[10px] md:text-[11px] text-outline hover:text-white underline uppercase tracking-widest transition-colors"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
