"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
}

export default function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return // canvas might be null, so we return early

    const ctx = canvas.getContext("2d")
    if (!ctx) return // ctx might be null, so we return early

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const particleCount = 100
    const interactionRadius = 100

    function createParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
        })
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.speedX
        p.y += p.speedY

        // Interaction with mouse
        const dx = p.x - mousePosition.x
        const dy = p.y - mousePosition.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < interactionRadius) {
          const angle = Math.atan2(dy, dx)
          const force = (interactionRadius - distance) / interactionRadius
          p.speedX += Math.cos(angle) * force * 0.2
          p.speedY += Math.sin(angle) * force * 0.2
        }

        // Boundary check
        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height

        // Speed limit
        const maxSpeed = 3
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (speed > maxSpeed) {
          p.speedX = (p.speedX / speed) * maxSpeed
          p.speedY = (p.speedY / speed) * maxSpeed
        }
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "rgba(0, 0, 128, 0.5)"
      ctx.strokeStyle = "rgba(0, 0, 128, 0.5)"
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()

        // Draw lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      updateParticles()
      drawParticles()
      requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        setMousePosition({ x: event.touches[0].clientX, y: event.touches[0].clientY })
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [mousePosition])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
