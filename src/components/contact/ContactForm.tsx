"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-beige/80 bg-white px-4 py-3.5 text-charcoal placeholder:text-charcoal/35 outline-none transition-all focus:border-forest focus:ring-2 focus:ring-forest/15";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value={`Nouveau message — ${site.name}`} />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-charcoal">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputClass}
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-charcoal">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={inputClass}
            placeholder="06 12 34 56 78"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="jean@email.fr"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Décrivez votre projet (surface, type de travaux, délais souhaités…)"
        />
      </div>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl bg-forest/10 px-4 py-3 text-sm text-forest">
          <CheckCircle size={18} />
          Message envoyé ! Nous vous recontactons sous 48h.
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle size={18} />
          Erreur d&apos;envoi. Vérifiez votre configuration Formspree ou contactez-nous par téléphone.
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        <Send size={18} />
        {status === "loading" ? "Envoi en cours…" : "Envoyer"}
      </Button>

      <p className="text-xs text-charcoal/45">
        En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
      </p>
    </form>
  );
}
