'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-pink-900">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
            &lt;/&gt; Aysel
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-pink-400 transition">About</a>
            <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
            <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
            <a href="#education" className="hover:text-pink-400 transition">Education</a>
            <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pink-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-pink-900">
            <div className="flex flex-col p-4 gap-4">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">About</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Skills</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Projects</a>
              <a href="#education" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Education</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-pink-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Sol tərəf - Mətn */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              Aysel Mohbaliyeva
            </h1>
            <p className="text-3xl text-gray-400 mb-6">
              <span className="inline-block animate-pulse">Junior Frontend Developer</span>
            </p>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Junior Frontend Developer passionate about building responsive web apps with HTML, and CSS <span className="text-pink-400 font-semibold">JavaScript</span>, <span className="text-pink-400 font-semibold">React</span>, and clean code practices, focusing on smooth UX and high-performance solutions.
            </p>

            {/* Tech Stack Badges */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">I use</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-xs">HTML/CSS</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-xs">JavaScript</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-xs">Bootstrap</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">...and more !</p>
            </div>

            <div className="flex gap-4">
              <a href="resume.pdf"
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform font-semibold">
                View Resume
              </a>
              <a href="#contact"
                className="px-8 py-4 border-2 border-pink-500 rounded-full hover:bg-pink-500 transition font-semibold">
                Contact Me
              </a>
            </div>
          </div>

          {/* Sağ tərəf - Şəkil */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-pink-500 hover:scale-105 transition transform">
                <img
                  src="/profile.png"
                  alt="Aysel Mohbaliyeva"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-ping opacity-20"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              Expertise Area
            </h2>
            <p className="text-gray-400">Technologies I work with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Frontend */}
            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-pink-900 hover:border-pink-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">⚛️</div>
              <h3 className="font-bold mb-1 text-pink-400">React</h3>
              <p className="text-xs text-gray-500">Frontend Library</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-pink-900 hover:border-pink-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">▲</div>
              <h3 className="font-bold mb-1 text-pink-400">Next.js <br />(currently learning)</h3>
              <p className="text-xs text-gray-500">React Framework</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-pink-900 hover:border-pink-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">📜</div>
              <h3 className="font-bold mb-1 text-pink-400">JavaScript</h3>
              <p className="text-xs text-gray-500">ES6+</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-pink-900 hover:border-pink-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">🎨</div>
              <h3 className="font-bold mb-1 text-pink-400">Bootstrap</h3>
              <p className="text-xs text-gray-500">Styling</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-purple-900 hover:border-purple-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">🌐</div>
              <h3 className="font-bold mb-1 text-purple-400">HTML</h3>
              <p className="text-xs text-gray-500">Markup</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-purple-900 hover:border-purple-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">💅</div>
              <h3 className="font-bold mb-1 text-purple-400">CSS</h3>
              <p className="text-xs text-gray-500">Styling</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-purple-900 hover:border-purple-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">🔧</div>
              <h3 className="font-bold mb-1 text-purple-400">Git & GitHub</h3>
              <p className="text-xs text-gray-500">Version Control</p>
            </div>

            <div className="bg-black p-6 rounded-xl hover:scale-105 transition transform border border-purple-900 hover:border-purple-500 group">
              <div className="text-4xl mb-3 group-hover:scale-110 transition">🚀</div>
              <h3 className="font-bold mb-1 text-purple-400">Responsive</h3>
              <p className="text-xs text-gray-500">Design</p>
            </div>
          </div>

          {/* Skills List */}
          <div className="mt-12 bg-black p-8 rounded-xl border border-pink-900">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-pink-400">Frontend</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  HTML, CSS, JavaScript, React, Bootstrap
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Tools & Other</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Git, GitHub, VS Code, REST API, Responsive Design
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-purple-400">Soft Skills</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Team Collaboration, Adaptability, Fast Learner, Problem Solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              Recent Works
            </h2>
            <p className="text-gray-400">Check out my latest projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition transform border border-pink-900 hover:border-pink-500 group">
              <div className="aspect-video bg-gradient-to-br from-pink-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="text-6xl">🐴</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition">Karabakh Horse's</h3>
                <div className="text-xs text-gray-500 mb-3">Complete</div>
                <p className="text-gray-400 mb-4 text-sm">
                  A modern website showcasing the uniqueness, beauty, and strength of Karabakh horses to the world.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">HTML</span>
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">CSS</span>
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">JavaScript</span>
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">React</span>
                </div>
                <div className="flex gap-4">
                  <p>https://karabakh-horses.vercel.app/</p>
                  <a href="#" className="text-pink-400 hover:underline text-sm font-semibold">Demo | GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition transform border border-purple-900 hover:border-purple-500 group">
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                <div className="text-6xl">⚖️</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition">Ays Law</h3>
                <div className="text-xs text-gray-500 mb-3">Complete</div>
                <p className="text-gray-400 mb-4 text-sm">
                  A fully responsive portfolio website with modern design, showcasing legal services with elegant layout.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded text-xs border border-purple-600">HTML</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded text-xs border border-purple-600">CSS</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded text-xs border border-purple-600">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded text-xs border border-purple-600">React</span>
                </div>
                <div className="flex gap-4">
                  <p>https://ays-law.vercel.app/</p>
                  <a href="#" className="text-purple-400 hover:underline text-sm font-semibold">Demo | GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 - Portfolio */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition transform border border-pink-900 hover:border-pink-500 group">
              <div className="aspect-video bg-gradient-to-br from-pink-900/20 to-purple-900/20 flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition">Portfolio Website</h3>
                <div className="text-xs text-gray-500 mb-3">In Progress</div>
                <p className="text-gray-400 mb-4 text-sm">
                  Modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">React</span>
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">Next.js</span>
                  <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded text-xs border border-pink-600">Tailwind</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-pink-400 hover:underline text-sm font-semibold">Demo | GitHub</a>
                </div>
              </div>
            </div>

            {/* Future Project Placeholder */}
            <div className="bg-zinc-900 rounded-xl overflow-hidden border border-purple-900 hover:border-purple-500 group opacity-60">
              <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                <div className="text-xs text-gray-500 mb-3">Planned</div>
                <p className="text-gray-400 mb-4 text-sm">
                  More exciting projects are on the way. Stay tuned!
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-600/20 text-gray-400 rounded text-xs border border-gray-600">TBA</span>
                </div>
              </div>
            </div>

          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <a href="https://github.com/aisel-mohbaliyeva"
              target="_blank"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform font-semibold">
              See all projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              Education & Certifications
            </h2>
            <p className="text-gray-400">My academic and professional journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
                <span>🎓</span> Education
              </h3>
              <div className="space-y-6">
                <div className="bg-black p-6 rounded-xl border-l-4 border-pink-500 hover:scale-105 transition transform">
                  <h4 className="text-xl font-bold mb-2">Azerbaijan Technical University</h4>
                  <p className="text-gray-400 mb-2">Process Automation Engineering</p>
                  <p className="text-sm text-gray-500">Oct 2020 - Jul 2024</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-xs">
                    Grade: 78/100
                  </div>
                </div>

                <div className="bg-black p-6 rounded-xl border-l-4 border-pink-500 hover:scale-105 transition transform">
                  <h4 className="text-xl font-bold mb-2">Baku College of Management and Technology</h4>
                  <p className="text-gray-400 mb-2">Automation of information processing and management</p>
                  <p className="text-sm text-gray-500">Sept 2014 - Jun 2017</p>
                  <div className="mt-3 inline-block px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-xs">
                    Grade: 75/100
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
                <span>📜</span> Certifications
              </h3>
              <div className="space-y-6">
                <div className="bg-black p-6 rounded-xl border-l-4 border-purple-500 hover:scale-105 transition transform">
                  <h4 className="text-xl font-bold mb-2">Meta Front-End Developer</h4>
                  <p className="text-gray-400 mb-2"> ~ by Meta</p>
                  <p className="text-sm text-gray-500 mb-3">Mar 2026</p>
                  <a href="#" className="text-purple-400 hover:underline text-sm font-semibold">
                    View Credential →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              Github Activity
            </h2>
            <p className="text-gray-400">My coding journey visualized</p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-xl border border-pink-900">
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-400 mb-4">Contribution graph coming soon</p>
              <a href="https://github.com/aisel-mohbaliyeva"
                target="_blank"
                className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform font-semibold">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400">
              I'm always open to new opportunities and collaborations 💗
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-black p-6 rounded-xl border-l-4 border-pink-500">
                <h3 className="font-bold mb-2 text-pink-400">📧 Email</h3>
                <a href="mailto:ayselmohbaliyeva22@gmail.com" className="text-gray-300 hover:text-pink-400 transition">
                  ayselmohbaliyeva22@gmail.com
                </a>
              </div>

              <div className="bg-black p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="font-bold mb-2 text-purple-400">📱 Phone</h3>
                <a href="tel:+994505380240" className="text-gray-300 hover:text-purple-400 transition">
                  +994 50 538 02 40
                </a>
              </div>

              <div className="bg-black p-6 rounded-xl border-l-4 border-pink-500">
                <h3 className="font-bold mb-2 text-pink-400">📍 Location</h3>
                <p className="text-gray-300">Sumgait, Azerbaijan</p>
              </div>

              <div className="bg-black p-6 rounded-xl border-l-4 border-purple-500">
                <h3 className="font-bold mb-4 text-purple-400">🔗 Social Links</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/ayselmohbaliyeva8/"
                    target="_blank"
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform text-sm font-semibold">
                    LinkedIn
                  </a>
                  <a href="https://github.com/aisel-mohbaliyeva"
                    target="_blank"
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform text-sm font-semibold">
                    GitHub
                  </a>
                  <a href="https://aysel-portfolio.vercel.app/"
                    target="_blank"
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform text-sm font-semibold">
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-black p-8 rounded-xl border border-pink-900">
              <h3 className="text-2xl font-bold mb-6 text-pink-400">Send Message</h3>
              <form onSubmit={async (e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)

                try {
                  await emailjs.send(
                    'service_4d3ndsm',
                    'template_i62k6fe',
                    {
                      from_name: formData.get('from_name'),
                      user_email: formData.get('user_email'),
                      message: formData.get('message')
                    },
                    'CelHTIF0lvVpVvsma'
                  )
                  alert('Message sent successfully! 💗')
                  e.currentTarget.reset()
                } catch (error) {
                  // Sadəcə konsola yaz, alert göstərmə
                  console.error('Error:', error)
                }
              }} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-pink-900 rounded-lg focus:border-pink-500 focus:outline-none text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-pink-900 rounded-lg focus:border-pink-500 focus:outline-none text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-pink-900 rounded-lg focus:border-pink-500 focus:outline-none text-white h-32 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-105 transition transform font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center border-t border-pink-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 text-transparent bg-clip-text">
            &lt;/&gt; Aysel Mohbaliyeva
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-pink-400 transition">About</a>
            <a href="#skills" className="text-gray-400 hover:text-pink-400 transition">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-pink-400 transition">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-pink-400 transition">Contact</a>
          </div>

          <p className="text-gray-500 text-sm">© 2026 Aysel Mohbaliyeva. All rights reserved. 💗</p>
        </div>
      </footer>

    </main>
  )
}