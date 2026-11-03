# Fairyland Cake Co.

A website for Fairyland Cake Co., a local artisan bakery that makes custom birthday cakes, wedding cakes, baby shower cakes, cupcakes and dessert spreads.

- **Student:** Itumeleng Joan Ndlovu (ST10515918)
- **Module:** WEDE5020, Part 3: Enhancing Functionality and SEO
- **Live site:** https://tumi87.github.io/Fairyland-Cake-Co-part-2/
- **Repository:** https://github.com/tumi87/Fairyland-Cake-Co-part-2

---

## Project Structure

```
/
├── index.html
├── about.html
├── menu.html
├── gallery.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

## Design

- **Colours:** Pastel Pink `#F4C2C2`, Warm Cream `#FFFDD0`, Deep Charcoal `#2C2C2C`
- **Fonts:** Playfair Display (headings), Open Sans (body)
- **Layout:** Mobile-first, stacked on phones and grid-based on desktop

---

## Part 3 Features

### JavaScript Enhancements

| Feature | Where | Description |
|---|---|---|
| Image slider | Home | Auto-playing hero slider with arrows, dots and pause on hover |
| Lightbox | Home, Menu, Gallery | Click any cake to enlarge it. Previous/next buttons, arrow keys and Esc supported |
| Accordions | Menu, About | FAQ and ordering-timeline panels that expand and collapse |
| Tabs | About | Mission, Vision and Who We Bake For |
| Animated counters | About | Numbers count up when scrolled into view |
| Scroll animations | All | Elements fade in using IntersectionObserver and CSS transitions |
| Interactive maps | Contact | Leaflet.js maps for the pickup point and weekend market |
| Dynamic content | Menu, Home, Gallery | Product cards are generated from a JavaScript data array |
| Search, filter and sort | Menu | Search by name, filter by category and dietary option, sort by price or name, "Load more" |
| Gallery filter | Gallery | Filter photos by category |
| Reviews | Gallery, About, Home | Visitors can post reviews, saved with localStorage and rendered with DOM manipulation |
| Back-to-top button | All | Appears after scrolling |

### Forms and Validation

- **enquiry.html:** Collects name, email, phone, flavour, size, event date, dietary needs and design details. After validation, the page shows an **estimated cost and availability message**, then submits the data with **AJAX (fetch)** to the form endpoint.
- **contact.html:** Collects name, email, phone, message type and message. After validation, the details are **compiled into an email** with a "Send Email" button addressed to hello@fairylandcakeco.co.za.
- **Validation (JavaScript and HTML5):**
  - Required fields, minimum and maximum lengths
  - Email format check
  - South African phone number format (`0821234567` or `+27...`)
  - Event date must be at least 3 days ahead
  - Dropdown selection required
  - Inline error messages that update as the user types

### SEO

- Unique `<title>`, `<meta name="description">` and `<meta name="keywords">` on every page
- Keywords, Open Graph tags and Bakery structured data (JSON-LD) on the home page
- Exactly one H1 per page with a logical H2/H3 structure
- Descriptive alt text on images, hyphenated descriptive image file names (e.g. `two-tier-wedding-cake.jpg`) and `loading="lazy"` for faster loading
- Clean, descriptive page URLs (`menu.html`, `gallery.html`, etc.)
- Internal linking through the header, footer and call-to-action buttons
- Mobile-friendly viewport and responsive CSS
- `robots.txt` and `sitemap.xml` included
- Local SEO: opening hours, location and contact details in structured data

### Security and Performance

- External links use `rel="noopener"`
- User input is escaped before it is inserted into the page
- Scripts are loaded with `defer`
- Respects `prefers-reduced-motion` for users who want less animation

---

## Changelog

### Part 3 additions

| Date | File(s) | Change |
|---|---|---|
| 2026-11-03 | `js/main.js` | Added the missing enquiry form submit handler: validates all fields, calculates an estimated cost (size + dietary option), shows an availability message based on the event date and lead time, then sends the data with AJAX (`fetch`) and shows a success or error message. |
| 2026-11-03 | `js/main.js` | Added the missing contact form submit handler: validates all fields, compiles the details into an email preview (to, subject, body) and provides a "Send Email" button that opens the visitor's email app addressed to hello@fairylandcakeco.co.za. |
| 2026-11-03 | `js/main.js` | Fixed the "How Ordering Works" section: the steps array was malformed (cards did not render). Rebuilt as four clean `[title, text]` entries. |
| 2026-11-03 | `enquiry.html`, `netlify.toml` | Updated the Content-Security-Policy (`connect-src`, `form-action`) so the AJAX request to Formspree is not blocked. |
| 2026-11-03 | `contact.html`, `about.html`, `gallery.html` | Fixed invalid HTML: removed duplicate `<head>` blocks, stray `<li></ul></nav>` fragments and the leftover "Get in touch" hero on the gallery page; added the missing `<body>` tag on the contact page. |
| 2026-11-03 | all pages | Navigation now highlights the correct current page (the enquiry and about pages wrongly highlighted "Contact"). |
| 2026-11-03 | all pages, `css/style.css`, `js/main.js` | Added a hamburger menu and extra breakpoints (900px, 800px, 480px) so the navigation, layout, typography and images adapt to phones and tablets. |
| 2026-11-03 | `Index.html` renamed to `index.html` | GitHub Pages is case-sensitive, so the home page link would otherwise return a 404. |
| 2026-11-03 | `Images/` renamed to `images/`, all image files | Renamed to lowercase, hyphenated, descriptive file names (removed spaces and double extensions such as `.jpg.jpeg`); fixed the `Mini Heart Cake` image pointing to the wrong extension; updated every reference in HTML and JavaScript. |
| 2026-11-03 | `index.html` | Replaced the remaining weak alt text (`alt="cake"`) on the store photo with a descriptive alt and added lazy loading. |
| 2026-11-03 | `index.html`, `about.html` | Replaced weak alt text ("CAKE", "cake") with descriptive alt text; corrected typos in the About page copy. |
| 2026-11-03 | `index.html`, `js/main.js`, `css/style.css` | Home page had three H1 headings (one per slide). Slides now use H2 and the page has a single H1. |
| 2026-11-03 | `about.html`, `menu.html`, `gallery.html`, `enquiry.html`, `contact.html` | Added page-specific `<meta name="keywords">` tags. |
| 2026-11-03 | all pages | Added a favicon to stop the browser logging a 404 for `favicon.ico`. |
| 2026-11-03 | `sitemap.xml` | Updated the last-modified dates. |
| 2026-11-02 | `style.css`, all pages | Redesigned the header: near-white bar, gradient circle logo, "Fairyland" in charcoal and "Cake Co." in rose italic, underlined active link. |
| 2026-11-02 | `js/main.js` | Removed emoji icons from the "How Ordering Works" cards and the star ratings from the customer quotes for a cleaner look. |
| 2026-11-02 | `style.css` | Removed the decorative star dividers under section headings. |
| 2026-11-02 | `robots.txt`, `sitemap.xml` | Added crawler instructions and a sitemap listing every page. |

### Part 2 feedback corrections

> Replace the rows below with the actual feedback from your Part 2 marks, one row per point, and describe each change in detail.

| Feedback received | What I changed | File(s) |
|---|---|---|
| *(feedback point 1)* | *(detailed description of the edit)* | *(files)* |
| *(feedback point 2)* | *(detailed description of the edit)* | *(files)* |
| *(feedback point 3)* | *(detailed description of the edit)* | *(files)* |

---

## Deployment

The website is deployed on GitHub Pages.

1. Push all files to the GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Set the source to the `main` branch and the root folder.
4. Open the published link and test every page.
5. Enquiry emails are delivered through a Formspree form endpoint set in the `action` attribute of the form in `enquiry.html`.

File names are case-sensitive on GitHub Pages, so `index.html`, `robots.txt` and the `images/` folder name must match the code exactly.

---

## References

> Add the full Harvard-style reference for every source you used. Examples of what to list are below; replace the details with your own.

- Google Fonts (n.d.) *Playfair Display and Open Sans*. Available at: https://fonts.google.com (Accessed: 2 November 2026).
- Agafonkin, V. (2023) *Leaflet: an open-source JavaScript library for mobile-friendly interactive maps*. Available at: https://leafletjs.com (Accessed: 2 November 2026).
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org (Accessed: 2 November 2026).
- Formspree (n.d.) *Formspree documentation*. Available at: https://formspree.io (Accessed: 2 November 2026).
- MDN Web Docs (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2 November 2026).
- Schema.org (n.d.) *Bakery*. Available at: https://schema.org/Bakery (Accessed: 2 November 2026).
- Anthropic (2026) *Claude* [AI assistant]. Used for coding guidance and debugging. Available at: https://claude.ai (Accessed: 2 November 2026).
- Images: *(list the source of every photo you did not take yourself)*.