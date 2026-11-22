# Drift Site

This repository contains the source code and assets for the official website of **Drift**, developed for commercial use.
Built with HTML, CSS (Tailwind), and custom assets.

## Features
- Responsive layout for desktop and mobile
- Favicon support
- Project showcase pages
- Optimized images for desktop, mobile, and retina displays

## File Structure
- `index.html` – main landing page
- `projects.html` – list of projects
- `project-*.html` – individual project pages
- `styles/` – CSS files (generated with Tailwind)
- `scripts/` – custom JS (e.g. image processing)
- `images/` – site images (desktop, mobile, retina)
- `.gitignore` – ignored files and folders

## Development
This site uses [Tailwind CSS](https://tailwindcss.com/).

To rebuild the CSS:
```bash
npx tailwindcss -i ./styles/input.css -o ./styles/output.css --watch

## License
All rights reserved.  
This project is proprietary and may not be copied, modified, or distributed 
without explicit permission from [Your Brother’s Business Name].
