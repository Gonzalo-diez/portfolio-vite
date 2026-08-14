import { useState } from "react";
import { Menu as MenuIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/Components/ui/sheet";
import { ToggleGroup, ToggleGroupItem } from "@/Components/ui/toggle-group";

const NAV_LINKS = [
  { href: "/", es: "Inicio", en: "Home" },
  { href: "/#about", es: "Sobre", en: "About" },
  { href: "/#skills", es: "Habilidades", en: "Skills" },
  { href: "/#tech-stack", es: "Stack", en: "Stack" },
  { href: "/#education", es: "Educación", en: "Education" },
  { href: "/#works", es: "Proyectos", en: "Projects" },
  { href: "/#contact", es: "Contacto", en: "Contact" },
  { href: "/#curriculum", es: "CV", en: "CV" },
];

function Menu({ changeLanguage, language }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a href="/" className="font-heading text-lg font-semibold tracking-tight">
          Gonzalo<span className="text-primary">.</span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {language === "es" ? link.es : link.en}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ToggleGroup
            type="single"
            value={language}
            onValueChange={(value) => value && changeLanguage(value)}
            className="hidden sm:flex"
          >
            <ToggleGroupItem value="es" className="font-mono text-xs px-3">
              ES
            </ToggleGroupItem>
            <ToggleGroupItem value="en" className="font-mono text-xs px-3">
              EN
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Menu mobile */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="mt-10 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  return (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="px-3 py-2 text-sm text-foreground hover:bg-secondary"
                      >
                        {language === "es" ? link.es : link.en}
                      </a>
                    </SheetClose>
                  );
                })}
              </nav>
              <div className="mt-6 flex gap-2 px-3">
                <Button
                  variant={language === "es" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeLanguage("es")}
                  className="font-mono"
                >
                  ES
                </Button>
                <Button
                  variant={language === "en" ? "default" : "outline"}
                  size="sm"
                  onClick={() => changeLanguage("en")}
                  className="font-mono"
                >
                  EN
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Menu;