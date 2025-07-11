import { useEffect, useState } from 'react'

function SparkleCursor() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    function handleMouseMove(e) {
      const sparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setSparkles((prev) => [...prev.slice(-20), sparkle])
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {sparkles.map((s) => (
        <div
          key={s.id}
          style={{
            position: 'fixed',
            left: s.x,
            top: s.y,
            width: '24px',
            height: '24px',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            animation: 'twinkle 0.6s ease-out forwards',
          }}
          dangerouslySetInnerHTML={{
            __html: `
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                <path d="M179.222 296.039C171.929 321.836 117.118 349.829 100.868 317.327C83.9601 283.513 128.707 258.291 155.272 253.461" stroke="#23a6d1" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M154.089 255.235C140.063 256.692 126.178 245.826 114.468 239.268C74.9513 217.139 49.2305 174.06 54.7419 127.208C60.5666 77.6967 120.975 104.935 142.262 123.068C160.693 138.769 174.617 160.101 184.839 181.908C193.152 199.64 200.112 214.666 205.536 233.651" stroke="#23a6d1" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M211.746 221.528C216.22 203.929 220.6 185.643 227.417 168.602C234.927 149.827 243.612 130.546 256.097 114.494C267.281 100.115 309.676 53.8821 331.79 73.9865C338.609 80.1856 341.437 92.7089 343.321 101.189C355.43 155.676 303.486 234.412 246.044 240.156" stroke="#23a6d1" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> 
                <path d="M249.001 238.972C282.8 227.116 321.478 272.606 305.179 305.204C286.258 343.046 248.409 334.476 215.589 283.62" stroke="#23a6d1" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M205.537 171.56C213.34 215.845 203.3 268.936 199.919 312.892" stroke="#23a6d1" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g>
              </svg>
            `,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0% { transform: scale(1); opacity: 1; }
          40% { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(0.5); opacity: 0; }
        }
      `}</style>
    </>
  );
};
export default SparkleCursor