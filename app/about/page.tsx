import Image from 'next/image';

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
          <a href="mailto:hamidovaslon1@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
          </a>
          <a href="https://t.me/aslon13" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/aslonkhuja-khamidov-4a8131202/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
        </div>

        {/* GitHub Stats */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Skills:</h2>
          <img 
            src="https://github-readme-stats.vercel.app/api?username=aslon1213&show_icons=true&theme=radical" 
            alt="GitHub Stats"
            className="w-full max-w-2xl"
          />
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Languages</h2>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
            <img src="https://img.shields.io/badge/bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Bash" />
            <img src="https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&logo=go&logoColor=white" alt="Go" />
            <img src="https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++" />
          </div>
        </section>

        {/* Frameworks */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Frameworks</h2>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" alt="FastAPI" />
            <img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray" alt="DjangoREST" />
            <img src="https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
            <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
            <img src="https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white" alt="Pandas" />
            <img src="https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white" alt="Numpy" />
          </div>
        </section>

        {/* Databases */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Databases</h2>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
            <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
            <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" alt="Redis" />
            <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres" />
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <img src="https://img.shields.io/badge/warp-01A4FF?style=for-the-badge&logo=warp&logoColor=white" alt="Warp" />
            <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
            <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            <img src="https://img.shields.io/badge/nginx-%230096D8.svg?style=for-the-badge&logo=nginx&logoColor=white" alt="Nginx" />
            <img src="https://img.shields.io/badge/-HuggingFace-FDEE21?style=for-the-badge&logo=HuggingFace&logoColor=black" alt="HuggingFace" />
            <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" alt="TensorFlow" />
            <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" alt="PyTorch" />
            <img src="https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=Jupyter&logoColor=white" alt="Jupyter" />
            <img src="https://img.shields.io/badge/Google_Colab-F9AB00?style=for-the-badge&logo=google-colab&logoColor=white" alt="Google Colab" />
            <img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code" />
            <img src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=Keras&logoColor=white" alt="Keras" />
          </div>
        </section>

      
      </section>
    </div>
  );
};

export default AboutMe;
