import Link from 'next/link';

const Logo = ({ isLogoFooter = false }: { isLogoFooter?: boolean }) => {
  return (
    <Link
      href="/"
      className={`text-code font-bold uppercase ${
        isLogoFooter ? 'text-3xl' : 'text-2xl'
      }`}
    >
      <span className="text-valencia">C</span>
      <span className="text-supernova">H</span>
      <span className="text-cerise">A</span>
      <span className="text-azureradiance"></span>
      <span className="text-azureradiance"></span>
      <span className="text-oceangreen">P</span>
      <span className="text-roseofsharon">A</span>
      <span className="text-brickred">L</span>
      <span className="text-tanhide">U</span>
    </Link>
  );
};
export default Logo;
