import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";

const COPY = {
  es: {
    title: "Contacto",
    subtitle: "¿Tenés una propuesta o querés charlar? Escribime.",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    send: "Enviar",
    sending: "Enviando...",
    successTitle: "¡Mensaje enviado!",
    successBody: "Te voy a responder a la brevedad.",
    errorTitle: "Hubo un error al enviar el mensaje. Probá de nuevo.",
  },
  en: {
    title: "Contact",
    subtitle: "Have a proposal or want to chat? Write to me.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    sending: "Sending...",
    successTitle: "Message sent!",
    successBody: "I'll get back to you shortly.",
    errorTitle: "There was an error sending the message. Try again.",
  },
};

const initialState = { name: "", email: "", message: "" };

function Contact({ language }) {
  const copy = COPY[language] ?? COPY.es;
  const [formData, setFormData] = useState(initialState);
  const [sending, setSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    // Leemos directo del form real (incluye form-name y el honeypot bot-field
    // automáticamente, tal como recomienda la documentación de Netlify).
    const form = event.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      toast.success(copy.successTitle, { description: copy.successBody });
      setFormData(initialState);
    } catch (error) {
      toast.error(copy.errorTitle);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-lg px-4">
        <h2 className="text-center font-heading text-3xl font-bold tracking-tight">
          {copy.title}
        </h2>
        <p className="mt-3 text-center text-muted-foreground">
          {copy.subtitle}
        </p>

        <Card className="mt-10">
          <CardContent className="p-6">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {/* Campo requerido por Netlify para vincular el form estático con este */}
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot anti-spam, invisible para personas */}
              <p className="hidden">
                <label>
                  No completar: <input name="bot-field" tabIndex="-1" autoComplete="off" />
                </label>
              </p>

              <Input
                name="name"
                type="text"
                placeholder={copy.name}
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
              <Input
                name="email"
                type="email"
                placeholder={copy.email}
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
              <Textarea
                name="message"
                placeholder={copy.message}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" className="w-full" disabled={sending}>
                {sending ? copy.sending : copy.send}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Contact;