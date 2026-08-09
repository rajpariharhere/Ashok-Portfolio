# Raj Portfolio

This is a React + Vite portfolio project with EmailJS contact form support.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `Potfolio/.env.local`.
3. Add your EmailJS values.
4. Start the frontend app:
   ```bash
   npm run dev
   ```

## EmailJS contact form setup

Create `Potfolio/.env.local` and set:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then restart Vite.

## EmailJS template field names

Make sure the EmailJS template you use includes variables matching the contact form fields:
- `name`
- `email`
- `subject`
- `message`

## Troubleshooting

- Ensure `Potfolio/.env.local` exists and has the `VITE_EMAILJS_*` keys.
- Restart the development server after changing `.env.local`.
- Check the browser console for EmailJS errors.
