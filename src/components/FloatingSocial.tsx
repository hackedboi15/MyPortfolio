
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function FloatingSocial() {
  const profiles = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/itsankitgupta1510/",
      hoverColor: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/hackedboi15", 
      hoverColor: "hover:text-grey-600"
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="w-6 h-6" />,
      url: "https://leetcode.com/u/hackedboi/", 
      hoverColor: "hover:text-yellow-500"
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces className="w-6 h-6" />,
      url: "https://codeforces.com/profile/itsankitgupta1510", 
      hoverColor: "hover:text-blue-500"
    }
  ];

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 flex flex-col gap-3">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 flex items-center justify-center text-slate-400 ${profile.hoverColor} hover:border-cyan-400 hover:scale-110 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/30`}
          title={profile.name}
        >
          {profile.icon}
        </a>
      ))}
    </div>
  );
}
