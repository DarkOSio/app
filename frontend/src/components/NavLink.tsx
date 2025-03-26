interface NavLinkProps {
  text: string;
  active: boolean;
}

export const NavLink = ({ text, active }: NavLinkProps) => {
  return (
    <div className={`flex items-center space-x-3 cursor-pointer group transition-all duration-200 py-2 ${active ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}>
      <div className={`h-6 w-1.5 rounded-full transition-all duration-300 ${active ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/30'}`}></div>
      <span className={`text-lg transition-colors duration-300 ${active ? 'text-primary font-medium' : 'text-secondary group-hover:text-white/80'}`}>{text}</span>
    </div>
  );
}; 