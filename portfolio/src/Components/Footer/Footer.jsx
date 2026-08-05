import { SiInstagram, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/gonzalo-juan-diez-7188851a5/",
    label: "LinkedIn",
    Icon: FaLinkedinIn,
  },
  {
    href: "https://www.instagram.com/gonzalodiezbuch/?hl=es-la",
    label: "Instagram",
    Icon: SiInstagram,
  },
  {
    href: "https://github.com/Gonzalo-diez",
    label: "GitHub",
    Icon: SiGithub,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-heading text-xl font-semibold tracking-tight">
          Gonzalo<span className="text-primary">.</span>
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-background/80 transition-colors hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <p className="font-mono text-xs text-background/60">
          © {year} Gonzalo Diez Buchanan
        </p>
      </div>
    </footer>
  );
}

export default Footer;