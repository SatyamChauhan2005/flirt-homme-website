# How to Deploy the FLIRT HOMME Website

You have two files:

- **flirt-homme-ready-to-deploy.zip** — the finished website, ready to upload as-is. Use this if you just want it live, no coding.
- **flirt-homme-source.zip** — the editable project. Use this only if you want to edit the site's code yourself later (via Vercel/GitHub).

Pick **ONE** option below. Option 1 is the easiest and takes about 5 minutes.

---

## Option 1: Netlify (Easiest — Drag & Drop, Free)

1. **Unzip** `flirt-homme-ready-to-deploy.zip` on your computer. You'll get a folder called `out` containing files like `index.html`, `about.html`, etc.
2. Go to **https://app.netlify.com/drop** in your browser.
3. If asked, sign up free (email or Google login).
4. **Drag the entire `out` folder** from your computer straight onto the Netlify Drop page.
5. Wait ~30 seconds — Netlify uploads and publishes the site automatically.
6. You'll get a live link like `https://random-name-123.netlify.app` — click it to see your site live.
7. (Optional) To use your own domain (e.g. `flirthomme.com`):
   - In Netlify, go to **Site settings → Domain management → Add a domain**.
   - Follow the on-screen instructions to point your domain's DNS to Netlify.

**To update the site later:** make your changes, re-export (see Option 2's build step or ask me to rebuild), and drag the new `out` folder onto your existing Netlify site under **Deploys → Drag and drop**.

---

## Option 2: Vercel (Best if You'll Keep Editing the Code)

Vercel is built by the same team as Next.js (the framework this site uses), so it needs no configuration.

1. Go to **https://github.com** and create a free account if you don't have one.
2. Create a **new repository** (e.g. name it `flirt-homme-website`), keep it Private or Public, don't add a README.
3. **Unzip** `flirt-homme-source.zip` on your computer.
4. Upload the unzipped `flirt-homme-site` folder's contents to your new GitHub repo:
   - Easiest way: on the repo page, click **"uploading an existing file"** and drag in all the files/folders (except `node_modules`, `.next`, `out` — these aren't included in the zip anyway).
5. Go to **https://vercel.com** → sign up free using your GitHub account.
6. Click **Add New → Project**, then select the `flirt-homme-website` repo you just created.
7. Leave all settings as default and click **Deploy**.
8. In ~1 minute you'll get a live link like `https://flirt-homme-website.vercel.app`.
9. (Optional) Add your own domain under **Project → Settings → Domains**.

**To update the site later:** edit files directly on GitHub (or on your computer and push changes) — Vercel automatically re-deploys every time you save changes to the repo.

---

## Option 3: Your Own Web Hosting (cPanel / Shared Hosting)

If your company already pays for hosting (e.g. GoDaddy, Hostinger, BigRock):

1. **Unzip** `flirt-homme-ready-to-deploy.zip` — you'll get the `out` folder.
2. Log in to your hosting provider's **cPanel** (ask your hosting provider for the login link if unsure).
3. Open **File Manager**, and navigate to the `public_html` folder (this is usually the folder that serves your website).
4. **Delete** any default files already there (like a placeholder `index.html`), if this is a fresh domain.
5. **Upload all contents of the `out` folder** (not the folder itself — its *contents*) into `public_html`.
6. Visit your domain (e.g. `www.avicouture.com`) — the site should now be live.

---

## Option 4: GitHub Pages (Free, but Extra Setup)

1. Follow steps 1–4 in **Option 2** to get the code onto GitHub.
2. In your GitHub repo, go to **Settings → Pages**.
3. Under "Build and deployment", choose **GitHub Actions** and pick the **Next.js** template GitHub suggests — it will handle the static export automatically.
4. Your site will be live at `https://yourusername.github.io/flirt-homme-website`.
5. (Optional) Add a custom domain under the same **Settings → Pages** screen.

---

## Which Should You Pick?

| You want... | Use |
|---|---|
| Fastest way to get it live today, no coding | **Option 1 — Netlify** |
| To keep editing the code yourself over time | **Option 2 — Vercel** |
| To use hosting your company already pays for | **Option 3 — cPanel** |
| A completely free option tied to GitHub | **Option 4 — GitHub Pages** |

For most businesses, **Option 1 (Netlify)** to go live today, then **Option 2 (Vercel)** later if you want a developer to keep improving the site, is the simplest path.

---

## Before You Go Live — Don't Forget

These are still placeholders on the site (see the README inside the source zip for exact file locations):

1. Real phone number (currently `+91 XXXXX XXXXX`)
2. Full workshop street address + PIN code
3. Confirm the contact form once (FormSubmit will email `mis@avicouture.com` after the first enquiry — click the link inside to activate it)
4. Replace placeholder "Product Photo" / "Workshop Photo" tiles with real photography
5. Replace example product names with your real SKUs
