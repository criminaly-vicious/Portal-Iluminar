import * as React from "react"
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { DoodleUnderline } from '@/components/ui/doodles'
import { motion, useScroll, useTransform } from 'framer-motion'

const menuItems = [
    { name: 'Solução', href: '#solucao' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Contato', href: '#contato' },
]

// Interactive 3D Tilt Component
const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const [transform, setTransform] = React.useState('')
    const [glare, setGlare] = React.useState({ x: 50, y: 50, opacity: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -6
        const rotateY = ((x - centerX) / centerX) * 6
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`)
        setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.12 })
    }

    const handleMouseLeave = () => {
        setTransform('perspective(1000px) rotateX(6deg) rotateY(0deg) scale3d(1, 1, 1)')
        setGlare({ x: 50, y: 50, opacity: 0 })
    }

    return (
        <div
            ref={cardRef}
            className={cn("transition-transform duration-300 ease-out", className)}
            style={{ transform: transform || 'perspective(1000px) rotateX(6deg) rotateY(0deg)' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className="absolute inset-0 pointer-events-none rounded-2xl z-50 transition-opacity duration-300"
                style={{ background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)` }}
            />
            {children}
        </div>
    )
}

// Fade in animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
    })
}

export const HeroSection = () => {
    const [menuState, setMenuState] = React.useState(false)
    const heroRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
    const dashboardY = useTransform(scrollYProgress, [0, 1], [0, 150])
    const dashboardScale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
    const textY = useTransform(scrollYProgress, [0, 1], [0, 80])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    
    return (
        <div ref={heroRef}>
            <header>
                <nav
                    data-state={menuState && 'active'}
                    className="group fixed z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">
                    <div className="m-auto max-w-6xl px-4 sm:px-6">
                        <div className="flex items-center justify-between py-3 lg:py-4">
                            <a href="/" aria-label="home" className="flex items-center">
                                <Logo />
                            </a>

                            {/* Desktop Nav */}
                            <div className="hidden lg:flex items-center gap-8">
                                {menuItems.map((item, index) => (
                                    <a key={index} href={item.href} className="text-sm font-medium text-gray-600 hover:text-orange transition-colors">
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            {/* Desktop CTAs */}
                            <div className="hidden lg:flex items-center gap-3">
                                <Button asChild variant="outline" size="sm" className="border-gray-200 text-graphite hover:border-orange hover:text-orange">
                                    <a href="#como-funciona">Ver Demo</a>
                                </Button>
                                <Button asChild size="sm" className="bg-orange hover:bg-orange-dark text-white">
                                    <a href="#contato">Agendar</a>
                                </Button>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                className="lg:hidden p-2 text-graphite"
                                aria-label="Menu"
                            >
                                {menuState ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {menuState && (
                            <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="lg:hidden pb-6 border-t border-gray-100 pt-4"
                            >
                                <div className="flex flex-col gap-4">
                                    {menuItems.map((item, index) => (
                                        <a key={index} href={item.href} onClick={() => setMenuState(false)} className="text-base font-medium text-gray-600 hover:text-orange">
                                            {item.name}
                                        </a>
                                    ))}
                                    <div className="flex gap-3 pt-4">
                                        <Button asChild variant="outline" size="sm" className="flex-1">
                                            <a href="#como-funciona">Ver Demo</a>
                                        </Button>
                                        <Button asChild size="sm" className="flex-1 bg-orange">
                                            <a href="#contato">Agendar</a>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </nav>
            </header>

            <main>
                <section className="min-h-screen overflow-hidden bg-white relative">
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-light/30 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-28 sm:pt-32 lg:pt-40 pb-12">
                        <motion.div 
                            style={{ y: textY, opacity }}
                            className="relative z-10 mx-auto max-w-3xl text-center"
                        >
                            {/* Badge */}
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={0}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-light text-orange text-[11px] sm:text-[12px] font-semibold tracking-wider uppercase rounded-full mb-6 sm:mb-8 border border-orange/10"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
                                Inteligência Emocional Escolar
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.1}
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-graphite tracking-tight leading-[1.1]"
                            >
                                <span className="text-gray-400 block mb-1 sm:mb-2">A escola não vê.</span>
                                <span>
                                    O Iluminar{' '}
                                    <span className="relative inline-block text-orange">
                                        revela
                                        <DoodleUnderline className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-orange opacity-60" />
                                    </span>
                                    .
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.2}
                                className="mx-auto mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-gray-600 font-light leading-relaxed px-4"
                            >
                                Transforme sinais invisíveis em dados claros. O primeiro radar emocional preventivo para escolas que se importam de verdade.
                            </motion.p>

                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.3}
                                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 px-4"
                            >
                                <Button asChild size="lg" className="bg-orange hover:bg-orange-dark text-white shadow-lg shadow-orange/20 w-full sm:w-auto">
                                    <a href="#contato">Agendar demonstração</a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-gray-200 text-graphite hover:border-orange hover:text-orange w-full sm:w-auto">
                                    <a href="#solucao">Saiba mais</a>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Interactive 3D Dashboard */}
                        <motion.div 
                            style={{ y: dashboardY, scale: dashboardScale }}
                            className="mt-12 sm:mt-16 lg:mt-20 px-2 sm:px-0"
                        >
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                custom={0.5}
                            >
                                <TiltCard className="relative cursor-pointer max-w-4xl mx-auto">
                                    {/* Glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange/15 via-orange/5 to-transparent rounded-2xl blur-3xl scale-95 translate-y-8 -z-10" />
                                    
                                    {/* MacBook Frame */}
                                    <div className="relative">
                                        <div className="relative bg-[#1a1a1a] rounded-t-xl sm:rounded-t-2xl p-1.5 sm:p-2 pb-0">
                                            <div className="hidden sm:block absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3a3a3a]" />
                                            
                                            <div className="bg-white rounded-t-lg sm:rounded-t-xl overflow-hidden shadow-inner">
                                                {/* Browser Chrome */}
                                                <div className="h-8 sm:h-10 bg-gray-50 border-b border-gray-100 flex items-center px-3 sm:px-4 gap-2">
                                                    <div className="flex gap-1 sm:gap-1.5">
                                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
                                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]" />
                                                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#28CA41]" />
                                                    </div>
                                                    <div className="hidden sm:flex flex-1 max-w-[200px] h-6 bg-white rounded-md items-center px-3 border border-gray-100 ml-3">
                                                        <span className="text-[9px] text-gray-400">portal.iluminar.app</span>
                                                    </div>
                                                </div>

                                                {/* Dashboard Content */}
                                                <div className="flex min-h-[280px] sm:min-h-[340px]">
                                                    {/* Mini Sidebar */}
                                                    <div className="hidden sm:flex w-14 border-r border-gray-100 bg-white flex-col items-center py-4">
                                                        <div className="w-8 h-8 bg-gradient-to-br from-orange to-orange-dark rounded-lg flex items-center justify-center mb-6 shadow-sm shadow-orange/20">
                                                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                                            </svg>
                                                        </div>
                                                        <div className="space-y-4">
                                                            {[
                                                                { active: true, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
                                                                { active: false, icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
                                                                { active: false, icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', badge: true },
                                                            ].map((item, i) => (
                                                                <div key={i} className="relative">
                                                                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${item.active ? 'bg-gray-100' : 'hover:bg-gray-50'}`}>
                                                                        <svg className={`w-4 h-4 ${item.active ? 'text-graphite' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                                                                        </svg>
                                                                    </div>
                                                                    {item.badge && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange rounded-full border-2 border-white" />}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Main Content */}
                                                    <div className="flex-1 p-3 sm:p-5 bg-[#fafafa]">
                                                        {/* Header */}
                                                        <div className="flex justify-between items-start mb-4 sm:mb-5">
                                                            <div>
                                                                <p className="text-[9px] sm:text-[10px] text-gray-400 mb-0.5">Segunda, 2 de Dezembro</p>
                                                                <p className="text-sm sm:text-base font-bold text-graphite">Bom dia, Maria Clara</p>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span className="hidden sm:flex items-center gap-1 px-2 py-1 bg-emerald-100 text-emerald-700 text-[9px] font-bold rounded-full">
                                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                                    Ao vivo
                                                                </span>
                                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-[9px] font-bold">MC</div>
                                                            </div>
                                                        </div>

                                                        {/* Stats Grid */}
                                                        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
                                                            {[
                                                                { label: 'Bem-estar', value: '8.4', suffix: '/10', change: '+0.3', changeColor: 'text-emerald-600' },
                                                                { label: 'Resposta', value: '94', suffix: '%', change: '+2%', changeColor: 'text-blue-600' },
                                                                { label: 'Ativos', value: '847', suffix: '', change: '100%', changeColor: 'text-violet-600' },
                                                                { label: 'Radar', value: '3', suffix: '', change: 'casos', changeColor: 'text-orange/70', highlight: true },
                                                            ].map((stat, i) => (
                                                                <div key={i} className={`p-2 sm:p-3 rounded-xl bg-white border ${stat.highlight ? 'border-orange/30 ring-1 ring-orange/10' : 'border-gray-100'}`}>
                                                                    <p className={`text-[7px] sm:text-[9px] font-bold uppercase mb-1 ${stat.highlight ? 'text-orange' : 'text-gray-400'}`}>{stat.label}</p>
                                                                    <p className={`text-base sm:text-xl font-bold ${stat.highlight ? 'text-orange' : 'text-graphite'}`}>
                                                                        {stat.value}<span className="text-[8px] sm:text-[10px] font-normal text-gray-400">{stat.suffix}</span>
                                                                    </p>
                                                                    <p className={`text-[7px] sm:text-[9px] font-medium ${stat.changeColor}`}>{stat.change}</p>
                                                                </div>
                                                            ))}
                                                        </div>

                                                        {/* Chart */}
                                                        <div className="p-3 sm:p-4 rounded-xl bg-white border border-gray-100">
                                                            <div className="flex justify-between items-center mb-3">
                                                                <p className="text-[9px] sm:text-xs font-bold text-graphite">Evolução Semanal</p>
                                                                <div className="flex gap-2 text-[8px] text-gray-400">
                                                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange" />2025</span>
                                                                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-200" />2024</span>
                                                                </div>
                                                            </div>
                                                            <div className="h-20 sm:h-28 flex items-end justify-between gap-1">
                                                                {[
                                                                    { cur: 65, prev: 55 }, { cur: 70, prev: 60 }, { cur: 68, prev: 58 },
                                                                    { cur: 75, prev: 65 }, { cur: 72, prev: 62 }, { cur: 80, prev: 70 },
                                                                    { cur: 78, prev: 68 }, { cur: 85, prev: 75 }, { cur: 82, prev: 72 },
                                                                    { cur: 88, prev: 78 }, { cur: 90, prev: 80 }, { cur: 92, prev: 82 },
                                                                ].map((data, i) => (
                                                                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full group">
                                                                        <div className="w-full relative h-full flex items-end">
                                                                            <div className="absolute bottom-0 w-full bg-gray-100 rounded-t-sm" style={{ height: `${data.prev}%` }} />
                                                                            <div className="absolute bottom-0 w-[55%] left-[22.5%] bg-gradient-to-t from-orange to-orange/70 rounded-t-sm z-10 group-hover:from-orange-dark transition-colors" style={{ height: `${data.cur}%` }} />
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="h-3 sm:h-4 bg-[#1a1a1a] rounded-b-xl sm:rounded-b-2xl" />
                                        <div className="relative mx-auto w-[90%]">
                                            <div className="h-2 sm:h-3 bg-gradient-to-b from-[#d4d4d4] to-[#a3a3a3] rounded-b-lg" />
                                        </div>
                                        <div className="mx-auto w-[94%] h-1 bg-gradient-to-b from-[#e5e5e5] to-[#d4d4d4] rounded-b-xl" />
                                    </div>
                                </TiltCard>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Social Proof */}
                <motion.section 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-cream relative z-10 py-8 sm:py-12 border-y border-gray-100"
                >
                    <div className="m-auto max-w-6xl px-4 sm:px-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                            <div className="flex gap-6 sm:gap-12">
                                {[
                                    { value: "+1 ano", label: "de pesquisa" },
                                    { value: "+50", label: "escolas" },
                                    { value: "847", label: "alunos" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center sm:text-left">
                                        <p className="text-xl sm:text-2xl font-bold text-graphite">{stat.value}</p>
                                        <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-right max-w-xs">
                                Desenvolvido para escolas brasileiras.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </main>
        </div>
    )
}

export const Logo = ({ className }: { className?: string }) => (
    <div className={cn("flex items-center gap-2", className)}>
        <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
            <svg width="24" height="12" viewBox="0 0 28 14" fill="none" className="absolute bottom-0">
                <path d="M1 13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13" stroke="#101010" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="absolute bottom-1 w-1.5 h-1.5 bg-orange rounded-full shadow-[0_0_8px_rgba(255,138,61,0.6)] animate-pulse" />
        </div>
        <div className="flex flex-col">
            <span className="text-sm sm:text-base font-semibold leading-none tracking-tight text-graphite">Portal Iluminar</span>
            <span className="text-[8px] sm:text-[9px] font-medium tracking-wider uppercase text-gray-400">by Centra</span>
        </div>
    </div>
)
