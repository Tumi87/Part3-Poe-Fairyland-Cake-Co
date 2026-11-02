# Part3-Poe-Fairyland-Cake-Co
Fairyland Cake Co.
## Project Overview
A six-page marketing and order-enquiry website for Fairyland Cake Co., a boutique home bakery in Johannesburg offering fully custom cakes, cupcakes and dessert spreads for birthdays, weddings, baby showers and other celebrations. The site replaces the business's reliance on social media DMs with a structured enquiry form that gives an instant price estimate, a searchable menu, a filterable photo gallery and clear, published pricing.

A website for Fairyland Cake Co., a local artisan bakery that makes custom birthday cakes, wedding cakes, baby shower cakes, cupcakes and dessert spreads.
 * Student: Itumeleng Joan Ndlovu (ST10515918)
 * Module: WEDE5020, Part 3: Enhancing Functionality and SEO
 * Live site: https://tumi87.github.io/Fairyland-Cake-Co-part-2/
 * Repository: https://github.com/Tumi87/Fairyland-Cake-Co-part-2
Project Structure
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
└── Images/

Design
 * Colours: Pastel Pink #F4C2C2, Warm Cream #FFFDD0, Deep Charcoal #2C2C2C
 * Fonts: Playfair Display (headings), Open Sans (body)
 * Layout: Mobile-first, stacked on phones and grid-based on desktop
Part 3 Features
JavaScript Enhancements
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
Forms and Validation
 * enquiry.html: Collects name, email, phone, flavour, size, event date, dietary needs and design details. After validation, the page shows an estimated cost and availability message, then submits the data with AJAX (fetch) to the form endpoint.
 * contact.html: Collects name, email, phone, message type and message. After validation, the details are compiled into an email with a "Send Email" button addressed to hello@fairylandcakeco.co.za.
 * Validation (JavaScript and HTML5):
   * Required fields, minimum and maximum lengths
   * Email format check
   * South African phone number format (0821234567 or +27...)
   * Event date must be at least 3 days ahead
   * Dropdown selection required
   * Inline error messages that update as the user types
SEO
 * Unique <title> and <meta name="description"> on every page
 * Keywords, Open Graph tags and Bakery structured data (JSON-LD) on the home page
 * One H1 per page with a logical H2/H3 structure
 * Descriptive alt text on images and loading="lazy" for faster loading
 * Clean, descriptive page URLs (menu.html, gallery.html, etc.)
 * Internal linking through the header, footer and call-to-action buttons
 * Mobile-friendly viewport and responsive CSS
 * robots.txt and sitemap.xml included
 * Local SEO: opening hours, location and contact details in structured data
Security and Performance
 * External links use rel="noopener"
 * User input is escaped before it is inserted into the page
 * Scripts are loaded with defer
 * Respects prefers-reduced-motion for users who want less animation
Changelog
Part 3 additions
| Date | File(s) | Change |
|---|---|---|
| 2026-11-02 | style.css, all pages | Redesigned the header: near-white bar, gradient circle logo, "Fairyland" in charcoal and "Cake Co." in rose italic, underlined active link. |
| 2026-11-02 | js/main.js | Removed emoji icons from the "How Ordering Works" cards and the star ratings from the customer quotes for a cleaner look. |
| 2026-11-02 | style.css | Removed the decorative star dividers under section headings. |
| 2026-11-02 | js/main.js | Rebuilt the "How Ordering Works" steps as a correctly structured array of four steps (number, title, text). |
| 2026-11-02 | js/main.js, enquiry.html | Added enquiry form submit handler: validation, estimated cost, availability message and AJAX submission. |
| 2026-11-02 | js/main.js, contact.html | Added contact form submit handler: validation and a compiled email with a "Send Email" button. |
| 2026-11-02 | robots.txt, sitemap.xml | Added crawler instructions and a sitemap listing every page. |
| 2026-11-02 | contact.html, about.html, gallery.html, enquiry.html | Fixed HTML structure problems (duplicate <head>, leftover markup, wrong active navigation link, leftover banner). |
Part 2 feedback corrections
| Feedback received | What I changed | File(s) |
|---|---|---|
| (feedback point 1) | (detailed description of the edit) | (files) |
| (feedback point 2) | (detailed description of the edit) | (files) |
| (feedback point 3) | (detailed description of the edit) | (files) |
Deployment
The website is deployed on GitHub Pages.
 * Push all files to the GitHub repository.
 * In the repository, open Settings → Pages.
 * Set the source to the main branch and the root folder.
 * Open the published link and test every page.
File names are case-sensitive on GitHub Pages, so index.html, robots.txt and the Images/ folder name must match the code exactly.
## References
 * Google Fonts (n.d.) Playfair Display and Open Sans. Available at: https://fonts.google.com (Accessed: 2 November 2026).
 * Agafonkin, V. (2023) Leaflet: an open-source JavaScript library for mobile-friendly interactive maps. Available at: https://leafletjs.com (Accessed: 2 November 2026).
 * OpenStreetMap contributors (n.d.) OpenStreetMap. Available at: https://www.openstreetmap.org (Accessed: 2 November 2026).
 * Formspree (n.d.) Formspree documentation. Available at: https://formspree.io (Accessed: 2 November 2026).
 * MDN Web Docs (n.d.) Fetch API. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2 November 2026).
 * Schema.org (n.d.) Bakery. Available at: https://schema.org/Bakery (Accessed: 2 November 2026).
 * Images: Pinterest<img width="1893" height="915" alt="1111" src="https://github.com/user-attachments/assets/882acf2d-7fc2-49b6-ac8e-59ac2c2b27fc" />
<img width="965" height="922" alt="SFFS" src="https://github.com/user-attachments/assets/453e9bc7-6aed-4ebb-b243-2048ad3cdcec" />
<img width="1015" height="810" alt="RSdg" src="https://github.com/user-attachments/assets/1af41fc2-2ca5-4fcc-b26e-28066a5e03ba" />
<img width="962" height="856" alt="MENU" src="https://github.com/user-attachments/assets/66b1b6a2-ea2d-4d73-9a9a-cf3b17d11687" />
<img width="1160" height="939" alt="V" src="https://github.com/user-attachments/assets/22127a90-d52f-4772-991f-b0db5f90e69b" />
<img width="1832" height="922" alt="GVVDG" src="https://github.com/user-attachments/assets/35cded86-7daa-404f-8bd6-9b9f27113ef1" />
<img width="1920" height="1080" alt="Capture0" src="https://github.com/user-attachments/assets/40281422-5626-4f59-bf2b-16b02025aa32" />
<img width="1871" height="734" alt="VVVVV" src="https://github.com/user-attachments/assets/09fb4634-ffff-4a78-88ef-3cf63f77383f" />
<img width="1909" height="827" alt="FFD" src="https://github.com/user-attachments/assets/75a1b71b-0cd8-4a50-9e2d-813e72bb9feb" />

 * <img width="1015" height="810" alt="RSdg" src="https://github.com/user-attachments/assets/a7e749f8-56aa-4c43-9b41-82c394c7cd0a" />
