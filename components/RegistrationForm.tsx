"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
const ORGANIZER_EMAIL = process.env.NEXT_PUBLIC_ORGANIZER_EMAIL ?? "organizer@example.com";

export default function RegistrationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg(
        "Email isn't configured yet. Add your EmailJS Service ID, Template ID, and Public Key to .env.local."
      );
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("That entry didn't go through. Check your connection and roll again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="paper-texture rounded-md p-8 shadow-card">
        <h3 className="font-display text-3xl text-felt mb-3 tracking-wide">ENTRY RECORDED</h3>
        <p className="font-body text-graphite mb-6 leading-relaxed">
          We&apos;ve emailed your registration to the tournament desk. Your seat is held
          for 48 hours — reply to the confirmation email in your inbox and we&apos;ll sort
          out your preferred way to pay the $50 entry fee from there.
        </p>
        <div className="border-2 border-dashed border-graphite/40 rounded p-5 font-mono text-graphite bg-ivory">
          <p className="text-sm uppercase tracking-widest text-graphite/60 mb-1">
            What happens next
          </p>
          <p className="text-graphite/80 leading-relaxed">
            Check your inbox for a confirmation from {ORGANIZER_EMAIL}. Reply with the
            payment method you&apos;d like to use (Venmo, Zelle, PayPal, Cash App, or
            cash in person) and we&apos;ll send the details to match.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="paper-texture rounded-md p-8 shadow-card"
    >
      <input type="hidden" name="to_email" value={ORGANIZER_EMAIL} />
      <input type="hidden" name="entry_fee" value="$50" />
      <input type="hidden" name="prize_pool" value="$2,000" />

      <h3 className="font-display text-3xl text-felt mb-6 tracking-wide">SCORE YOUR SEAT</h3>

      <div className="grid gap-5">
        <Field label="Full name" name="player_name" type="text" required autoComplete="name" />
        <Field label="Email" name="reply_to" type="email" required autoComplete="email" />
        <Field label="Phone" name="player_phone" type="tel" required autoComplete="tel" />
        <Field
          label="Yahtzee with Buddies username"
          name="ywb_username"
          type="text"
          required
          autoComplete="off"
        />

        <label className="block">
          <span className="block font-mono text-sm uppercase tracking-widest text-graphite/70 mb-1">
            Experience level
          </span>
          <select
            name="experience"
            required
            defaultValue=""
            className="focus-ring w-full bg-ivory border border-graphite/30 rounded px-3 py-2 font-body text-graphite"
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="First-timer">First-timer</option>
            <option value="Casual roller">Casual roller</option>
            <option value="Club regular">Club regular</option>
            <option value="Tournament veteran">Tournament veteran</option>
          </select>
        </label>

        <label className="block">
          <span className="block font-mono text-sm uppercase tracking-widest text-graphite/70 mb-1">
            Notes for the tournament desk (optional)
          </span>
          <textarea
            name="notes"
            rows={3}
            className="focus-ring w-full bg-ivory border border-graphite/30 rounded px-3 py-2 font-body text-graphite"
            placeholder="Dietary needs, accessibility, teammate requests..."
          />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-pip font-mono text-sm">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="focus-ring mt-7 w-full bg-pip text-ivory font-display text-2xl tracking-wide py-3 rounded shadow-[0_5px_0_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-none transition disabled:opacity-60"
      >
        {status === "sending" ? "ROLLING..." : "SUBMIT ENTRY — $50"}
      </button>
      <p className="text-xs text-graphite/60 mt-3 font-body">
        Submitting sends your entry by email. We&apos;ll reply to arrange your $50 payment
        by whichever method you prefer — your seat is confirmed once payment is received.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-sm uppercase tracking-widest text-graphite/70 mb-1">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="focus-ring w-full bg-ivory border border-graphite/30 rounded px-3 py-2 font-body text-graphite"
      />
    </label>
  );
}
