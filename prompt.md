
====================================================
ADD NOISE OVERLAY
====================================================

Create a subtle animated grain texture overlay across entire website.

Opacity:
0.03 to 0.05

Blend:
soft-light
====================================================
SCROLL ANIMATION SYSTEM
====================================================

Add:
- parallax movement
- stagger reveals
- scale transitions
- blur reveals
- fade transforms

Sections should NOT just fade in.

Use:
- y transforms
- opacity transforms
- scale transforms
- layered motion

Example:
background typography moves slower than foreground.

====================================================
NAVBAR IMPROVEMENTS
====================================================

Navbar should:
- blur on scroll
- slightly shrink on scroll
- glow subtly when hovering links
- animate active section indicator smoothly

Add:
- magnetic Hire Me button
- animated underline tracking

====================================================
HERO SECTION
====================================================

Enhance current hero dramatically.

KEEP:
- current typography
- current image
- floating stat cards

IMPROVE:
- depth
- cinematic layering
- interaction

Add:
- parallax image movement
- floating glow behind portrait
- animated holographic rings
- subtle mouse movement
- animated background word

Background word:
CREATE

Opacity:
0.03

Very large:
18vw

Add:
- animated radial glow
- floating blur layers
- mouse reactive lighting

Stat cards should:
- float slowly
- react slightly to cursor
- glow softly on hover

====================================================
PROJECT SECTION
====================================================

Make projects immersive product showcases.

Each project should feel like:
entering a product universe.

Add:
- live dashboard motion
- fake terminal logs
- AI processing indicators
- scan animations
- metric counters
- floating UI overlays

Use:
- alternating asymmetrical layouts
- overlapping panels
- cinematic image reveals

Hover interactions:
- subtle tilt
- image zoom
- glow borders
- moving gradients

Add:
- fake system diagnostics
- real-time AI feed animation
- glowing active states

====================================================
AGRI AI PROJECT
====================================================

Make this the signature project.

Add:
- animated crop scan line
- fake AI analysis
- blinking live indicators
- floating metric cards
- moving diagnostic bars
- subtle dashboard transitions
- live system logs

Style:
high-end futuristic agricultural AI dashboard.

====================================================
SKILLS SECTION REBUILD
====================================================

Replace conventional cards.

Turn into:
Capability Matrix

Create:
interactive horizontal rows.

Hovering category:
- activates glow
- reveals tools
- animates nearby nodes
- highlights connected skills

Add:
- neural network visual feel
- floating particles
- interactive skill chips

Motion:
smooth and premium.

====================================================
DESIGN SECTION
====================================================

Enhance editorial aesthetic.

Use:
- masonry layout
- varying image sizes
- hover zoom
- cinematic image reveals
- soft glow borders
- image distortion hover

Hovering design:
- slight scale
- animated overlay
- motion blur reveal
- subtle tilt

====================================================
ABOUT SECTION
====================================================

Add:
- oversized background typography
- floating accent elements
- animated line reveals
- cinematic spacing

Typography should feel:
editorial and premium.

====================================================
CONTACT SECTION
====================================================

Keep:
LET'S BUILD SOMETHING UNIQUE

Enhance:
- glowing form focus states
- magnetic button
- subtle gradient animations
- cinematic lighting

Add:
- animated glow behind form
- floating blurred shapes
- mouse reactive lighting

====================================================
SECTION TRANSITIONS
====================================================

Sections should flow together cinematically.

Add:
- gradient fade transitions
- glow dividers
- blur transitions
- layered scroll movement

Avoid:
hard section cuts.

====================================================
MICRO INTERACTIONS
====================================================

Add everywhere:
- magnetic buttons
- hover lift
- glow transitions
- smooth scaling
- subtle tilt
- soft shadows
- animated borders

Hover transitions:
500ms to 800ms.

====================================================
3D DEPTH
====================================================

Use subtle perspective only.

NOT heavy 3D.

Add:
- card tilt
- layered transforms
- depth movement
- parallax perspective

Very subtle and premium.

====================================================
FINAL GOAL
====================================================

This should feel like:
- premium AI creative studio
- cinematic interactive portfolio
- futuristic but minimal
- modern and immersive

NOT:
- generic developer portfolio
- template website
- overdone cyberpunk
- gaming UI

The experience should feel:
alive, immersive, cinematic, premium.



## ###########################################################################################################################################################################################################


ADDITIONAL CODE BLOCKS FOR ANTIGRAVITY
1. SMOOTH SCROLL CONFIG
import Lenis from '@studio-freight/lenis'

useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}, [])

Install:

npm install @studio-freight/lenis
2. MAGNETIC BUTTON
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  transition={{
    type: "spring",
    stiffness: 200,
    damping: 15
  }}
>
3. CARD HOVER EFFECT
whileHover={{
  y: -10,
  scale: 1.02,
  rotateX: 2,
  rotateY: 2
}}
4. PREMIUM GLOW
box-shadow:
0 0 40px rgba(0,255,255,0.08),
0 0 80px rgba(0,255,255,0.03);
5. GLASSMORPHISM STYLE
background: rgba(255,255,255,0.03);
backdrop-filter: blur(20px);
border: 1px solid rgba(255,255,255,0.08);
6. NOISE OVERLAY
<div className="pointer-events-none fixed inset-0 opacity-[0.03] mix-blend-soft-light z-[999]">
  <div className="w-full h-full bg-[url('/noise.png')]" />
</div>
7. PARALLAX MOTION
const y = useTransform(scrollYProgress, [0, 1], [100, -100])
8. STAGGER REVEAL
initial={{ opacity: 0, y: 60 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
9. LARGE BACKGROUND TYPOGRAPHY
<h1 className="absolute text-[18vw] font-black text-white/[0.03] pointer-events-none">
  CREATE
</h1>
10. FLOATING ANIMATION
animate={{
  y: [0, -10, 0]
}}

transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
}}