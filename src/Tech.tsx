

export default function Tech() {
  const technologies = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      color: "#E34F26"
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB"
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777BB4"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032"
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED"
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      color: "#FCC624"
    }
  ];

  return (
    <div className="w-full bg-black rounded-lg p-3 flex items-center justify-center">
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-3 w-full">
        {technologies.map((tech, idx) => (
          <div 
            key={idx}
            className="relative flex items-center justify-center group cursor-pointer"
            style={{
              animation: `float ${3 + (idx % 3)}s ease-in-out infinite`,
              animationDelay: `${idx * 0.2}s`
            }}
          >
            <div 
              className="absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${tech.color}40 0%, transparent 70%)`
              }}
            />
            
            <div 
              className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              style={{
                border: `2px solid ${tech.color}`,
                boxShadow: `0 0 20px ${tech.color}60, inset 0 0 20px ${tech.color}20`
              }}
            />
            
            <div className="relative w-10 h-10 flex items-center justify-center bg-gray-900 rounded-full border border-gray-800 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-4 h-4 object-contain"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
                }}
              />
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="text-white text-xs font-medium whitespace-nowrap bg-gray-900 px-2 py-1 rounded border border-gray-700">
                {tech.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}