import { useEffect, useRef } from 'react';
import { Curtains, Plane } from 'curtainsjs';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const DistortedImage = ({ image, height = "600px", width = "70%" }) => {
  const containerRef = useRef(null);
  const planeRef = useRef(null);
  const scrollEffect = useRef(0);
  const targetScrollEffect = useRef(0);
  const lastScroll = useRef(window.scrollY);
  const rafID = useRef(null);

  useEffect(() => {
    const curtains = new Curtains({
      container: containerRef.current,
      watchScroll: false,
      pixelRatio: Math.min(1.5, window.devicePixelRatio),
    });

    // Enhanced vertex shader with parabolic distortion
    const vertexShader = `
    precision mediump float;

    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    uniform float uScrollEffect;

    varying vec2 vTextureCoord;

    void main() {
        vec3 vertexPosition = aVertexPosition;
        
        // Normalize x position to [0,1] range
        float normalizedX = (vertexPosition.x + 1.0) * 0.5;
        
        // Calculate parabolic distortion (parabola shape for vertical bend)
        // When scrolling down (uScrollEffect > 0): apply upward distortion
        // When scrolling up (uScrollEffect < 0): apply downward distortion
        float parabola = normalizedX * (1.0 - normalizedX); // Basic parabola shape
        float distortion = parabola * 3.8 * uScrollEffect; // Apply scroll effect scaling
        
        // Apply distortion to the y-axis for the upward/downward bend effect
        vertexPosition.y += distortion;
        
        // Slight horizontal compression to enhance the 3D look based on distortion
        vertexPosition.x *= 1.0 - abs(distortion) * 0.3;

        // Set final position after distortion
        gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
        vTextureCoord = aTextureCoord;
    }
`;



    const fragmentShader = `
    precision mediump float;

    varying vec2 vTextureCoord;
    uniform sampler2D uSampler;

    void main() {
        // Simple texture sampling with optional distortion
        vec2 uv = vTextureCoord;
        
        // Add slight chromatic aberration for more interesting effect
        float r = texture2D(uSampler, uv * 0.995).r;
        float g = texture2D(uSampler, uv).g;
        float b = texture2D(uSampler, uv * 1.005).b;
        
        gl_FragColor = vec4(r, g, b, 1.0);
    }
`;



    const params = {
      vertexShader,
      fragmentShader,
      widthSegments: 40, // Higher for smoother parabola
      heightSegments: 20,
      uniforms: {
        uScrollEffect: {
          name: 'uScrollEffect',
          type: '1f',
          value: 0,
        },
      },
    };

    const plane = new Plane(curtains, containerRef.current, params);
    planeRef.current = plane;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = (currentScroll - lastScroll.current) * 0.02; // Increased sensitivity
      lastScroll.current = currentScroll;

      // Set target effect with direction preservation
      targetScrollEffect.current = Math.max(Math.min(delta, 1.0), -1.0);
    };

    const animate = () => {
      // Smooth interpolation with directional preservation
      scrollEffect.current += (targetScrollEffect.current - scrollEffect.current) * 0.08;

      // Apply to shader
      if (planeRef.current?.uniforms?.uScrollEffect) {
        planeRef.current.uniforms.uScrollEffect.value = scrollEffect.current;
      }

      // Decay effect when not scrolling
      targetScrollEffect.current *= 0.92;

      rafID.current = requestAnimationFrame(animate);
    };

    rafID.current = requestAnimationFrame(animate);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafID.current);
      window.removeEventListener('scroll', handleScroll);
      if (plane?.remove) plane.remove();
      if (curtains?.dispose) curtains.dispose();
    };
  }, [image]);
  
  useGSAP(() => {
    // Keep the scale animation
    gsap.fromTo(
      containerRef.current,
      { scale: 0.8 },
      {
        scale: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
        ease: 'none',
      }
    );
  }, []);

  return (
    <div className='py-[250px] max-w-[88vw] relative overflow-hidden -rotate-12 left-20'>
      <div
        ref={containerRef}
        style={{
          width: width,
          height: height,
          margin: "0 auto",
          position: "relative",
          perspective: "1200px",
          transformStyle: "preserve-3d"
        }}
      >
        <img
          src={image}
          alt="Parabolic distortion effect"
          crossOrigin="anonymous"
          data-sampler="uSampler"
          id='distorted-image'
          className='opacity-0 absolute w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default DistortedImage;