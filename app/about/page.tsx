import Image from 'next/image';

const socialLinks = [
  {
    href: 'mailto:hamidovaslon1@gmail.com',
    icon: '/icons/mail.svg',
    alt: 'Gmail',
  },
  {
    href: 'https://t.me/aslon13',
    icon: '/icons/brand-telegram.svg',
    alt: 'Telegram',
  },
  {
    href: 'https://twitter.com/aslon1213',
    icon: '/icons/brand-x.svg',
    alt: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/aslonkhuja-khamidov-4a8131202/',
    icon: '/icons/brand-linkedin.svg',
    alt: 'LinkedIn',
  },
];

const languages = [
  {
    icon: '/icons/Python-Dark.svg',
    alt: 'Python',
  },
  {
    icon: '/icons/Bash-Dark.svg',
    alt: 'Bash',
  },
  {
    icon: '/icons/GoLang.svg',
    alt: 'Go',
  },
  {
    icon: '/icons/CPP.svg',
    alt: 'C++',
  },
];

const frameworks = [
  {
    icon: '/icons/FastAPI.svg',
    alt: 'FastAPI',
  },
  {
    icon: '/icons/Django.svg',
    alt: 'Django',
  },
  {
    icon: '/icons/pandas.svg',
    alt: 'Pandas',
  },
  {
    icon: '/icons/numpy.svg',
    alt: 'Numpy',
  },
];

const databases = [
  {
    icon: '/icons/MySQL-Dark.svg',
    alt: 'MySQL',
  },
  {
    icon: '/icons/MongoDB.svg',
    alt: 'MongoDB',
  },
  {
    icon: '/icons/Redis-Dark.svg',
    alt: 'Redis',
  },
  {
    icon: '/icons/PostgreSQL-Dark.svg',
    alt: 'Postgres',
  },
];

const tools = [
  {
    icon: '/icons/warp.png',
    alt: 'Warp',
  },
  {
    icon: '/icons/Postman.svg',
    alt: 'Postman',
  },
  {
    icon: '/icons/Docker.svg',
    alt: 'Docker',
  },
  {
    icon: '/icons/Git.svg',
    alt: 'Git',
  },
  {
    icon: '/icons/Github-Dark.svg',
    alt: 'GitHub',
  },
  {
    icon: '/icons/Nginx.svg',
    alt: 'Nginx',
  },
  {
    icon: '/icons/hf-logo.svg',
    alt: 'HuggingFace',
  },
  {
    icon: '/icons/TensorFlow-Dark.svg',
    alt: 'TensorFlow',
  },
  {
    icon: '/icons/PyTorch-Dark.svg',
    alt: 'PyTorch',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
    alt: 'Jupyter',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg',
    alt: 'Google Colab',
  },
  {
    icon: '/icons/VSCode-Dark.svg',
    alt: 'VS Code',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
    alt: 'Keras',
  },
  // for logging 
  {
    icon: '/icons/structlog.svg',
    alt: 'Structlog',
  },
  // for logging
  {
    icon: '/icons/zerolog.svg',
    alt: 'Zerolog',
  },
  // for web frameworks
  {
    icon: '/icons/fiber.svg',
    alt: 'Fiber v2',
  },
  {
    icon: '/icons/gin.svg',
    alt: 'Gin',
  },
  // for analytics
  {
    icon: '/icons/google-adk.svg',
    alt: 'Google ADK',
  },
  // for LLM orchestration
  {
    icon: '/icons/langchain.svg',
    alt: 'LangChain',
  },
  // for LLM observability
  {
    icon: '/icons/langfuse.svg',
    alt: 'Langfuse',
  },
  // for logging/observability
  {
    icon: '/icons/logfire.svg',
    alt: 'Logfire',
  },
  // for data validation
  {
    icon: '/icons/pydantic.svg',
    alt: 'Pydantic',
  },
  // for web frameworks
  {
    icon: '/icons/fastapi.svg',
    alt: 'FastAPI',
  },
];

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <section className="space-y-6">
        {/* Profile Image and Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden md:ml-4 flex-shrink-0 border-2 border-gray-200">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image
                src="/images/profile.jpeg"
                alt="Aslonkhuja Khamidov"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-2">
            <p>👋 Hi, I&apos;m @aslon1213</p>
            <p>👀 Passionate about backend development, automation, science, AI and exploring new technologies.</p>
            <p>🌱 I&apos;m currently learning data science</p>
            <p>💞️ I&apos;m looking to collaborate on any project</p>
            <p>📫 How to reach me:</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-2">
          {socialLinks.map((link, idx) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Image
                src={link.icon}
                alt={link.alt}
                width={40}
                height={40}
                className="rounded"
              />
            </a>
          ))}
        </div>

        {/* GitHub Stats */}
        <section>
          <h2 className="text-2xl font-bold mb-4">GitHub Stats</h2>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=aslon1213&show_icons=true&theme=radical" 
            alt="GitHub Stats"
            className="w-full max-w-2xl"
          />
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/50 dark:bg-black/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Carwon</h3>
                <span className="text-sm text-gray-500">May 2022 — Sep 2022</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                <li>Strengthened collaboration through cross-functional projects and brainstorming sessions.</li>
                <li>Supported a new wireless product launch: QA processes, customer feedback collection, and resolving technical issues.</li>
                <li>Worked with REST services and networking protocols (HTTP, JSON, etc.).</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/50 dark:bg-black/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Goods For Home</h3>
                <span className="text-sm text-gray-500">May 2023 — Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                <li>Delivered automation projects across finance, management, workflows, inventory, and HR.</li>
                <li>Deployed applications on DigitalOcean cloud servers.</li>
                <li>Designed and built REST APIs for multiple services.</li>
                <li>Contributed to CRM and ERP system development.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/50 dark:bg-black/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Consultant AI — Guide Me</h3>
                <span className="text-sm text-gray-500">2023 — 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                <li>Built automated CI/CD pipelines.</li>
                <li>Worked with cutting-edge industry technologies.</li>
                <li>Developed microservices and used gRPC for inter-service communication.</li>
                <li>Leveraged TCP/IP and WebSocket for high-speed client–server messaging.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/50 dark:bg-black/20">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">Smart Bank</h3>
                <span className="text-sm text-gray-500">2024 — Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                <li>Developed customer service chatbots and a ChatBot Assistant to improve support and automate responses.</li>
                <li>Built speech-to-text (STT) models using Transformers and the Conformer architecture.</li>
                <li>Developing text-to-speech (TTS) systems with XTTS and VALL-E for natural-sounding speech.</li>
                <li>Shipped LLM-based chatbots with RAG, an MCP server, and advanced tool use.</li>
                <li>Created server-driven UI (SDUI) for dynamic, scalable interfaces.</li>
                <li>Implemented image search using image embeddings and vector databases (ImageBind, CLIP, Qdrant, Milvus).</li>
                <li>Built image enhancement pipelines to improve quality and user experience.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/50 dark:bg-black/20">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold">Inha University in Tashkent</h3>
                <span className="text-sm text-gray-500">BSc in Computer Science</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                <li>Applied advanced programming in OOP (Java, C++), systems, and Unix programming through hands-on projects.</li>
                <li>Built AI-driven solutions in courses on Artificial Intelligence, Big Data Analytics, and Multimedia Computing.</li>
                <li>Developed mobile apps, IoT prototypes, and blockchain-based platforms in electives.</li>
                <li>Strengthened foundations in data structures, algorithms, linear algebra, discrete math, probability, and statistics.</li>
                <li>Contributed to systems projects in OS, networks, and software engineering, including a Capstone Design project.</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/50 dark:bg-black/20">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold">EPAM Systems</h3>
                <span className="text-sm text-gray-500">Golang Training Program (2022 — 2023)</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Core Go competencies developed:</p>
              <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
                <li>Concurrency with goroutines and channels</li>
                <li>Interfaces and polymorphism</li>
                <li>Testing frameworks</li>
                <li>Databases</li>
                <li>Web programming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Image
                key={lang.alt}
                src={lang.icon}
                alt={lang.alt}
                width={60}
                height={60}
                className="rounded"
              />
            ))}
          </div>
        </section>

        {/* Frameworks */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((fw, idx) => (
              <Image
                key={fw.alt + idx}
                src={fw.icon}
                alt={fw.alt}
                width={60}
                height={60}
                className="rounded"
              />
            ))}
          </div>
        </section>

        {/* Databases */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Databases</h2>
          <div className="flex flex-wrap gap-2">
            {databases.map((db) => (
              <Image
                key={db.alt}
                src={db.icon}
                alt={db.alt}
                width={60}
                height={60}
                className="rounded"
              />
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Image
                key={tool.alt}
                src={tool.icon}
                alt={tool.alt}
                width={60}
                height={60}
                className="rounded"
              />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
