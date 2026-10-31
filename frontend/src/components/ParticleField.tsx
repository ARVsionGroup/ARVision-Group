import { useEffect, useRef } from 'react'

const COLORS = ['#2563eb', '#8b5cf6', '#38bdf8', '#ec4899', '#22d3ee', '#a855f7']

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
  pulse: number
  pulseSpeed: number
}

export function ParticleField({ count = 46 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    let particles: Particle[] = []
    let width = 0
    let height = 0
    let raf = 0

    function spawn() {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      }))
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = parent!.clientWidth
      height = parent!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(parent)
    resize()

    function frame() {
      ctx!.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.pulse += p.pulseSpeed

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        p.x = Math.max(0, Math.min(width, p.x))
        p.y = Math.max(0, Math.min(height, p.y))
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 70
          if (dist < maxDist) {
            ctx!.strokeStyle = a.color
            ctx!.globalAlpha = (1 - dist / maxDist) * 0.35
            ctx!.lineWidth = 0.7
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      ctx!.globalAlpha = 1
      for (const p of particles) {
        const scale = 1 + Math.sin(p.pulse) * 0.35
        ctx!.beginPath()
        ctx!.fillStyle = p.color
        ctx!.globalAlpha = 0.75
        ctx!.arc(p.x, p.y, p.r * scale, 0, Math.PI * 2)
        ctx!.fill()
      }
      ctx!.globalAlpha = 1

      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [count])

  return <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
}
