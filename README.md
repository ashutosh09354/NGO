# Jan Manav Kalyan Foundation — Website

React + Vite + Tailwind + React Router + Framer Motion + Lucide.

## Run
    npm install
    npm run dev        # development
    npm run build      # production build in /dist

## Add real content
1. Edit `src/data/siteData.js` (contact, social links, donation details, impact numbers, captions, dates).
2. Drop real photos into `public/images/` using the filenames listed in that file:
   - brand/logo.png            (official logo)
   - hero/hero.jpg             (group photo — focal point is set in Hero.jsx)
   - about/about.jpg, about/featured.jpg
   - causes/education|healthcare|food|blood|welfare|environment.jpg
   - work/work-1..8.jpg
   - media/newspaper-1.jpg, newspaper-2.jpg   (full clipping, shown with object-contain)
   - volunteers/v-1..3.jpg
   - instagram/post-1..6.jpg  (only posts the NGO has permission to reuse)
   Missing photos show a neutral "Photo to be added" placeholder.
3. Impact numbers: set `value` in IMPACT to a verified number to enable the count-up; `null` shows "XX+".
4. Contact form: wire `submit` in ContactForm.jsx to your email/backend service.
5. For SPA hosting, redirect all routes to index.html.
