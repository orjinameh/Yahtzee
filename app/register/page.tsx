import Link from "next/link";
import RegistrationForm from "@/components/RegistrationForm";
import Die from "@/components/Die";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-felt felt-weave">
      <div className="max-w-2xl mx-auto px-6 py-14">
        <Link
          href="/"
          className="font-mono text-gold text-sm tracking-widest uppercase focus-ring"
        >
          ← Back
        </Link>

        <div className="flex items-center gap-3 mt-6 mb-8">
          <Die value={5} size={40} />
          <h1 className="font-display text-4xl text-ivory tracking-wide">
            REGISTER TO PLAY
          </h1>
        </div>

        <RegistrationForm />
      </div>
    </main>
  );
}
