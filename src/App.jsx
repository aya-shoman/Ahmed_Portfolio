import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X, Mail, Linkedin, Github, Download, ExternalLink, Code, Database, Server, Layers, ChevronRight, Sparkles, Rocket, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      setScrolled(window.scrollY > 50)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

const skills = {
  languages: ['C#', 'C++', 'SQL','html','css','java script'],
  
  frameworks_libraries: [
    'ASP.NET Core Web API', 
    'ASP.NET MVC', 
    'Entity Framework Core', 
    'SignalR', 
    'AutoMapper', 
    'WPF'
  ],
  
  concepts_architecture: [
    'OOP', 
    'SOLID', 
    'RESTful APIs', 
    'MVC Architecture', 
    'Layered Architecture', 
    'Clean Architecture',
    'Database Design', 
    'LINQ', 
    'JWT', 
    'Authentication & Authorization',
    'API',
    'Minimal API',
    'Signal R'
  ],
  
  tools_others: [
    'Git', 
    'GitHub', 
    'Postman', 
    'Linux', 
    'Rider',
    'API Versioning', 
    'Middleware', 
    'Routing',
    'CRM Systems'
  ]
}

const projects = [
  {
    title: 'Law Platform',
    subtitle: 'Freelance Consultation System',
    description: 'Developed a professional freelancing platform connecting lawyers with clients. Implemented Real-time Chat using SignalR, along with a robust Notification system and Full-Text Search. Followed a clean Layered Architecture with EF Core and optimized SQL queries to ensure high performance and seamless legal consultations.',
    technologies: ['.NET Core', 'SQL Server', 'SignalR', 'EF Core', 'RESTful API'],
    github: 'https://github.com/AhmedMyoussif/LawPlatform',
    highlights: ['Real-time Chat (SignalR)', 'Layered Architecture', 'Legal Consultation Flow']
  },
  {
    title: 'E-Commerce Management System',
    subtitle: 'Full-Cycle Commerce Backend',
    description: 'Built a comprehensive e-commerce backend featuring core modules for Products, Orders, Shopping Cart, and Wishlists. Implemented secure Authentication & Authorization using ASP.NET Core Identity and JWT. Applied Code-First EF Core with advanced migrations and lazy/eager loading patterns to manage complex data relationships.',
    technologies: ['ASP.NET Core API', 'Entity Framework Core', 'SQL Server', 'JWT', 'Identity'],
    github: 'https://github.com/E-Commerce-DeepDive/API',
    highlights: ['Secure JWT Auth', 'Order Management', 'Code-First migrations']
  },
  {
    title: 'Investment Platform',
    subtitle: 'Financial Operations Backend',
    description: 'Collaborated within a backend team to develop core financial modules including Categories, Offers, and Project tracking. Leveraged AutoMapper for efficient object mapping and ensured clean, maintainable code. Focused on building a reliable infrastructure to handle investment listings and user offers with high precision.',
    technologies: ['ASP.NET Core Web API', 'SQL Server', 'AutoMapper', 'Layered Architecture'],
    github: 'https://github.com/AhmedMyoussif/InvestoProject',
    highlights: ['Financial Core Modules', 'AutoMapper Integration', 'Team Collaboration']
  },
  {
    title: 'Inventory System',
    subtitle: 'Stock & Resource Management',
    description: 'Developed an efficient inventory management system to track stock levels, products, and resource allocation. Focused on building RESTful endpoints that allow for seamless CRUD operations and real-time stock updates, ensuring data integrity and providing a solid foundation for retail and warehouse management.',
    technologies: ['.NET Core', 'SQL Server', 'Entity Framework', 'RESTful API'],
    github: 'https://github.com/AhmedMyoussif/InventorySystem',
    highlights: ['Stock Tracking', 'Data Integrity', 'Efficient CRUD']
  }
];
const experiences = [
  {
    title: ".NET Backend Developer",
    company: "Freelance",
    period: "Mid 2024 – Present",
    achievements: [
      "Delivered multiple backend projects independently, covering API development, database design, and client requirements.",
      "Built and sold a complete sales management desktop application for a retail client using WPF and MVVM architecture.",
      "Leveraged AI-assisted development tools to accelerate solo project delivery without compromising code quality."
    ]
  },
  {
    title: ".NET Backend Developer (Part-time)",
    company: "SpaceTech",
    period: "Early 2025",
    achievements: [
      "Built and maintained the backend for Servabset, a government services platform operating across New York and New Jersey.",
      "Developed a full CRM system covering core modules: Customers, Leads, and Converters with full lifecycle tracking.",
      "Designed RESTful APIs for service management and user workflows, ensuring reliability and scalability."
    ]
  },
  {
    title: ".NET Backend Development Intern",
    company: "DEPI (Digital Egypt Pioneers Initiative)",
    period: "Oct 2024 – May 2025",
    achievements: [
      "Implemented RESTful APIs with authentication, authorization, and Swagger documentation using .NET Core.",
      "Designed and optimized SQL Server databases following layered architecture (Controller-Service-Repository).",
      "Worked with LINQ and Entity Framework for efficient data access and manipulation."
    ]
  },
  {
    title: ".NET Backend Development Intern",
    company: "ITI (Information Technology Institute)",
    period: "Summer 2025",
    achievements: [
      "Gained hands-on experience with C#, LINQ, SQL Server, and Entity Framework Core.",
      "Built backend modules following best practices in database design and API development."
    ]
  },
  {
    title: ".NET Co-Lead",
    company: "Zag Eng Family",
    period: "2025",
    achievements: [
      "Co-led the .NET track, delivering sessions on SQL Server, C#, LINQ, and EF Core to junior students.",
      "Guided students through hands-on projects from planning to delivery, providing curated resources and mentorship."
    ]
  }
];
  return (
   <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">

{/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-black text-primary tracking-tighter">
  AM
</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary relative group ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-5 w-5 text-primary" /> : <Moon className="h-5 w-5 text-primary" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl shadow-xl">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

{/* Hero Section */}
<section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
  <div className="container mx-auto max-w-6xl relative z-10">
    <div className="text-center space-y-8">
      <div className="space-y-6">
        {/* Title Tag */}
        <div className="inline-block animate-fade-in-up">
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground/80 border-b border-primary/30 pb-1">
            BackEnd .NET Developer
          </span>
        </div>

        {/* Main Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight animate-fade-in-up animation-delay-200 text-primary">
          Ahmed Mohamed
        </h1>
        
        {/* Description */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground animate-fade-in-up animation-delay-400 max-w-3xl mx-auto leading-relaxed">
          Crafting <span className="text-primary font-bold">robust and secure</span> server-side solutions with .NET Core, driven by <span className="text-primary font-bold">Clean Architecture</span>
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 pt-8 animate-fade-in-up animation-delay-800">
       <Button
  variant="ghost"
  size="icon"
 onClick={() => window.open('https://www.linkedin.com/in/ahmed-m-youssif-170838290/', '_blank')}
  className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary w-12 h-12 rounded-full"
>
  <Linkedin className="h-6 w-6" />
</Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open('https://github.com/AhmedMyoussif', '_blank')}
          className="hover:scale-125 transition-all duration-300 hover:bg-primary/10 hover:text-primary w-12 h-12 rounded-full"
        >
          <Github className="h-6 w-6" />
        </Button>
      </div>
    </div>
  </div>
</section>

{/* About Section */}
<section id="about" className="py-24 relative overflow-hidden bg-background">
  <div className="container mx-auto px-4 relative z-10">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 text-white">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
    </div>

    {/* About Card - الرمادي الفاتح والـ Backdrop blur */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center bg-zinc-700/40 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl transition-all duration-300">
      
      <div className="lg:col-span-1 flex justify-center">
        {/* ا) الصورة رجعت اهي، وبالإطار الـ Cyan اللي طلبقيه */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }} // بتبدأ من الشمال وميالة شوية
          whileInView={{ opacity: 1, x: 0, rotate: 0 }} // بترجع لمكانها وتتعدل
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            bounce: 0.4 
          }}
          viewport={{ once: true }}
          // ب) لون الإطار Cyan (border-primary) وزيادة السمك
          // ج) إضافة إضاءة خفيفة (shadow-lg shadow-primary/20)
          className="relative w-64 h-64 md:w-80 md:h-80 lg:w-full lg:h-[450px] rounded-2xl overflow-hidden border-2 border-primary shadow-lg shadow-primary/20"
        >
          <img 
            src="/Ahmed.jpg" // تأكدي إن الصورة موجودة في فولدر public بهذا الاسم
            alt="Ahmed Mohamed Profile Picture"
            className="w-full h-full object-cover transition-all duration-500 rounded-2xl"
          />
        </motion.div>
      </div>

      {/* حركـة الكلام (اختياري) عشان يدخل من اليمين في نفس الوقت */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:col-span-2 space-y-6"
      >
        {/* أ) العنوان بقى "Backend .NET" بس فوق الكلام */}
        <h3 className="text-3xl font-bold tracking-tight text-white mb-6">
          <span className="text-primary"> I am Backend .NET Developer</span>
        </h3>
        
        {/* ب) الكلام المختصر جداً (سطرين ونص لكل فقرة) */}
        {/* الفقرة الأولى: جودة الكود */}
        <p className="text-[18px] text-white/90 leading-[1.7] text-justify font-light">
          I build <span className="text-primary font-bold">Clean & Scalable APIs</span> on SOLID principles and Clean Architecture. My focus is on eliminating technical debt from day one, providing a stable foundation that ensures your system is easy to maintain and ready for future growth.
        </p>

        {/* الفقرة الثانية: الأداء والأمان */}
        <p className="text-[18px] text-white/90 leading-[1.7] text-justify font-light">
          My solutions prioritize <span className="text-primary font-bold">Speed and Security</span>. By optimizing SQL Server performance and implementing robust authentication with JWT and Identity, I ensure your application handles traffic with minimal latency while keeping data protected.
        </p>

        {/* الفقرة الثالثة: القيمة للمشروع */}
        <p className="text-[18px] text-white/90 leading-[1.7] text-justify font-light">
          As a Technical Partner, I translate complex requirements into <span className="text-primary font-bold">Production-Ready Solutions</span>. I focus on high-availability and reliable system design, ensuring that your final product succeeds in challenging production environments and under heavy concurrent load.
        </p>
      </motion.div>

    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
  <div className="container mx-auto max-w-6xl relative z-10">
<div className="text-center mb-16">
  {/* العنوان بنفس ستايل الأبوت بالظبط: أبيض مع لمسة سيان */}
  <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
    Technical <span className="text-primary">Skills</span>
  </h2>
  
  {/* الخط اللي تحت العنوان: نفس عرض وسمك خط الأبوت */}
  <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
</div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      
      {/* 1. Languages Card */}
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-2 border-primary/20 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
              <Code className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-xl">Languages</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill) => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-1 px-3 hover:scale-110">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 2. Frameworks & Libraries Card */}
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-2 border-primary/20 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
              <Server className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-xl">Frameworks & Libraries</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks_libraries.map((skill) => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-1 px-3 hover:scale-110">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 3. Architecture & Concepts Card */}
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-2 border-primary/20 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
              <Layers className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-xl">Architecture & Concepts</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.concepts_architecture.map((skill) => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-1 px-3 hover:scale-110">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 4. Tools & Others Card */}
      <Card className="group hover:shadow-2xl transition-all duration-500 hover:border-primary/50 border-2 border-primary/20 hover:-translate-y-2 backdrop-blur-sm bg-card/50">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
              <Database className="h-7 w-7 text-primary" />
            </div>
            <CardTitle className="text-xl">Tools & Industrial Knowledge</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.tools_others.map((skill) => (
              <Badge key={skill} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default text-sm py-1 px-3 hover:scale-110">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

    </div>
  </div>
</section>



      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
         <div className="text-center mb-16">
  {/* العنوان بنفس ستايل الأبوت بالظبط: أبيض مع لمسة سيان */}
  <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
     <span className="text-primary">Experience</span>
  </h2>
  
  {/* الخط اللي تحت العنوان: نفس عرض وسمك خط الأبوت */}
  <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
</div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-2xl transition-all duration-500 hover:border-primary/80 hover:-translate-x-2 backdrop-blur-sm bg-card/50 border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Award className="w-6 h-6 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        <span className="font-semibold text-foreground">{exp.company}</span> • {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

{/* Projects Section */}
<section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="container mx-auto max-w-6xl relative z-10">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
        Selected <span className="text-primary">Projects</span>
      </h2>
      <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="group hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] transition-all duration-500 hover:border-primary border-2 border-primary/10 flex flex-col hover:-translate-y-2 backdrop-blur-sm bg-zinc-900/40">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-primary/80 font-medium italic">
                  {project.subtitle}
                </CardDescription>
              </div>
              
              {/* التعديل هنا: استخدام asChild للينك الصغير */}
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:scale-125 transition-all duration-300 text-white/50 hover:bg-primary/10 hover:text-primary"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col gap-6">
            <p className="text-white/70 leading-relaxed group-hover:text-white transition-colors">
              {project.description}
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Key Highlights
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.highlights.map((highlight, idx) => (
                  <Badge key={idx} className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 py-1 px-3">
                    {highlight}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-white/60 border-white/10 hover:bg-primary/10 hover:border-primary hover:text-white transition-all duration-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* التعديل هنا: استخدام asChild للزرار الكبير */}
            <Button
              variant="outline"
              asChild
              className="w-full group/btn mt-auto border-primary/30 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-[1.02] py-6 cursor-pointer"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
                <ExternalLink className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Education Section */}
<section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="container mx-auto max-w-6xl relative z-10">
    
    {/* العنوان: مطابق تماماً للأقسام السابقة */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
        Edu<span className="text-primary">cation</span>
      </h2>
      <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
    </div>
    
    {/* الكارت: بنفس ستايل الـ Projects (الرمادي الغامق والبوردر السيان) */}
    <Card className="group border-2 border-primary/10 hover:border-primary transition-all duration-500 max-w-3xl mx-auto shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] backdrop-blur-sm bg-zinc-900/40 hover:-translate-y-2">
      <CardHeader>
        <div className="flex items-start gap-5">
          {/* الأيقونة مع إضاءة خلفية خفيفة */}
          <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
            <Award className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              Bachelor of Computer Science
            </CardTitle>
            <CardDescription className="text-lg text-white/70">
              <span className="font-semibold text-primary/90">Zagazig University</span>
              <span className="mx-2 text-white/30">•</span>
              Faculty of Engineering (ZagEng)
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4 border-t border-white/5 mt-4">
        <div className="flex items-center justify-between">
          <p className="text-white/60 text-lg">
            Expected Graduation:
          </p>
          <Badge className="bg-primary/10 text-primary border border-primary/20 text-lg py-1 px-4 font-bold">
            2027
          </Badge>
        </div>
      </CardContent>
    </Card>
    
  </div>
</section>
{/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="max-w-2xl mx-auto border-2 border-primary/10 hover:border-primary transition-all duration-500 shadow-[0_0_30px_rgba(0,255,255,0.05)] backdrop-blur-sm bg-zinc-900/60">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <p className="text-center text-lg text-white/70 mb-8">
                  I'm currently looking for new opportunities. My inbox is always open!
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href="tel:+201069391275"
                    className="flex items-center gap-4 p-5 rounded-xl border border-white/5 hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:scale-[1.02]"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                      <Mail className="h-6 w-6 text-primary" /> 
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Phone</p>
                      <p className="text-white/50 group-hover:text-primary transition-colors">+20 106 939 1275</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:ahmedhamoudahhh@gmail.com"
                    className="flex items-center gap-4 p-5 rounded-xl border border-white/5 hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:scale-[1.02]"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">Email</p>
                      <p className="text-white/50 group-hover:text-primary transition-colors text-sm sm:text-base">ahmedhamoudahhh@gmail.com</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/ahmed-m-youssif-170838290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 rounded-xl border border-white/5 hover:border-primary hover:bg-primary/5 transition-all duration-300 group hover:scale-[1.02]"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">LinkedIn</p>
                      <p className="text-white/50 group-hover:text-primary transition-colors text-sm sm:text-base italic">ahmed-m-youssif</p>
                    </div>
                  </a>
                </div>
<div className="pt-6">
  <Button
    size="lg"
    asChild
    className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all duration-300 py-7 text-lg font-bold cursor-pointer"
  >
    {/* غيرنا المسار لاسم ملفك اللي في الصورة بالضبط */}
    <a href="/Ahmed_CVpdf" download="Ahmed_CV.pdf">
      <Download className="mr-2 h-6 w-6 group-hover:translate-y-1 transition-transform" />
      Download CV
    </a>
  </Button>
</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-zinc-950">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <p className="text-white font-bold text-lg mb-2">Ahmed Mohamed</p>
          <p className="text-white/40 text-sm mb-6 italic">© 2026 All rights reserved.</p>
          
          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="mailto:ahmedhamoudahhh@gmail.com" className="text-white/40 hover:text-primary transition-all hover:scale-125"><Mail className="h-5 w-5" /></a>
            <a href="https://www.linkedin.com/in/ahmed-m-youssif-170838290/" target="_blank" className="text-white/40 hover:text-primary transition-all hover:scale-125"><Linkedin className="h-5 w-5" /></a>
            <a href="https://github.com/AhmedMyoussif" target="_blank" className="text-white/40 hover:text-primary transition-all hover:scale-125"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </footer>

    </div> // قفلة الـ div الأساسي (أول واحد بعد الـ return)
  );
} // قفلة الـ function App
export default App

