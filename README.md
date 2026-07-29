# Boxcars Yahtzee Open — Registration Site

Next.js (App Router) + TypeScript + Tailwind. Registration emails go straight to the
organizer via **EmailJS** (no backend/server required), and the confirmation screen
shows payment instructions for the $50 entry fee.

## 1. Install

```bash
npm install
```

## 2. Set up EmailJS (free tier is fine)

1. Create an account at https://www.emailjs.com
2. **Email Services** → add your Gmail/Outlook/etc → copy the **Service ID**
3. **Email Templates** → create a template. Use these variable names so they match
   the form fields sent from `RegistrationForm.tsx`:
   - `{{player_name}}`
   - `{{reply_to}}`
   - `{{player_phone}}`
   - `{{experience}}`
   - `{{notes}}`
   - `{{entry_fee}}`
   - `{{prize_pool}}`
   - `{{to_email}}` — set the template's "To email" field to this variable
   Copy the **Template ID**.
4. **Account → General** → copy your **Public Key**.

## 3. Configure environment variables

```bash
cp .env.example .env.local
```

Fill in:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
NEXT_PUBLIC_ORGANIZER_EMAIL=you@example.com
```

Payment isn't handled on-site: once someone registers, you (the organizer) get their
email and reply directly to arrange whichever payment method they prefer (Venmo, Zelle,
PayPal, Cash App, cash in person, etc). The confirmation screen tells players to expect
that reply.

## 4. Run

```bash
npm run dev
```

Visit http://localhost:3000, then http://localhost:3000/register to test the form.
Since keys live in `NEXT_PUBLIC_*` env vars, this deploys as a fully static/serverless
site to Vercel, Netlify, or any static host — just set the same env vars there.

## Notes

- All EmailJS keys are public-safe by design (that's how EmailJS's client-side SDK works);
  restrict abuse via EmailJS's dashboard rate limits / domain allowlist.
- Payment isn't processed on this site at all — registering just sends an email. You
  reply to that email to ask the player's preferred payment method and send them the
  matching details (Venmo handle, Zelle info, PayPal link, etc).
