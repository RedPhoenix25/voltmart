import Image from "next/image";
import CartButton from "@/components/CartButton";
import { CartProvider } from "@/components/CartProvider";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import styles from "./page.module.css";

const categories = [
  { name: "Audio", description: "Headphones & speakers", image: "/products/headphones.svg" },
  { name: "Wearables", description: "Smartwatches", image: "/products/smartwatch.svg" },
  { name: "Accessories", description: "Gear for your setup", image: "/products/mouse.svg" },
];

export default function Home() {
  return (
    <CartProvider>
      <div className={styles.page}>
      <header className={styles.header} id="top">
        <div className={`${styles.shell} ${styles.headerMain}`}>
          <a className={styles.brand} href="#top" aria-label="VoltMart home">
            <span className={styles.brandMark} aria-hidden="true">V</span>
            <span>VoltMart</span>
          </a>
          <nav className={styles.navigation} aria-label="Main navigation">
            <a href="#products">Shop all</a>
            <a href="#categories">Audio</a>
            <a href="#categories">Wearables</a>
            <a href="#categories">Accessories</a>
          </nav>
          <CartButton className={styles.cartButton} countClassName={styles.cartCount} />
        </div>
      </header>

      <main>
        <section className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>The everyday tech edit</p>
            <h1>Useful electronics.<br />Straightforward shopping.</h1>
            <p className={styles.heroText}>A focused collection of audio, wearables and accessories for your daily setup.</p>
            <a className={styles.primaryAction} href="#products">Shop the collection</a>
          </div>
          <div className={styles.heroImage} aria-hidden="true">
            <Image src="/products/speaker.svg" alt="" width={800} height={600} priority />
          </div>
        </section>

        <section className={`${styles.shell} ${styles.categorySection}`} id="categories">
          <div className={styles.sectionHeading}>
            <h2>Shop by category</h2>
            <a href="#products">View all products</a>
          </div>
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <a className={styles.categoryCard} href="#products" key={category.name}>
                <div><h3>{category.name}</h3><p>{category.description}</p></div>
                <Image src={category.image} alt="" width={800} height={600} />
              </a>
            ))}
          </div>
        </section>

        <section className={styles.productsSection} id="products">
          <div className={styles.shell}>
            <div className={styles.productsHeader}>
              <div><p className={styles.kicker}>Recommended</p><h2>Featured electronics</h2></div>
              <span>{products.length} products</span>
            </div>
            <div className={styles.productGrid}>
              {products.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer} id="footer">
        <div className={`${styles.shell} ${styles.footerInner}`}>
          <div><strong>VoltMart</strong><p>Electronics for everyday life.</p></div>
          <div className={styles.footerLinks}>
            <a href="#products">Shop all</a><a href="#categories">Categories</a><a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
      </div>
    </CartProvider>
  );
}
