# VoltMart

VoltMart is a simple, responsive electronics product listing page built with Next.js for the Week 2 ecommerce assignment.

## Assignment requirements completed

- Four electronics products with an image, name, description and price.
- An Add to Cart button on every product card.
- A shared cart count that updates whenever a product is added.
- Responsive layouts for desktop, tablet and mobile screens.
- Reusable product data and product card components.
- Accessible labels, keyboard focus states and cart-count announcements.

## Technology

- Next.js App Router
- React and TypeScript
- CSS Modules
- Local SVG product artwork

## Run locally

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Project structure

- `src/app/page.tsx` contains the storefront page structure.
- `src/data/products.ts` contains the reusable product information.
- `src/components/ProductCard.tsx` renders each product.
- `src/components/CartProvider.tsx` manages the shared cart count.
- `src/components/CartButton.tsx` displays the current cart count.
- CSS Module files contain the responsive presentation styles.

## Three things I understood from building this

1. Product information can be stored in one data array and rendered with `map()`, which avoids repeating the same product-card markup.
2. CSS Grid and media queries can change one layout from four columns on desktop to two columns on tablets and one column on phones.
3. React Context can hold shared state so buttons in separate product cards can update the same cart count in the header.

## One problem I solved

The cart count originally existed only as static text in the header. I solved this by creating a shared cart provider, placing it around the page, and connecting every Add to Cart button to the provider. Now each click updates one consistent count across the storefront.

## Final checks

```bash
npm run lint
npm run build
```

Both commands should pass before the project is submitted to GitHub and deployed with Vercel.
