import Image from "next/image";
import styles from "../../page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Niagara Falls</h1>
      </div>
      <div className={styles.cover}>
        <Image
          src={"/niagara-falls.jpg"}
          width={1920}
          height={1080}
          alt="Niagara Falls"
          title="Niagara Falls"
        />
      </div>
      <div className={styles.description}>
        <p>
          {` The Niagara Falls, located on the border between the United States and
          Canada, are one of the world's most famous natural wonders. Comprising
          three distinct waterfalls—Horseshoe Falls, American Falls, and Bridal
          Veil Falls—this spectacular destination attracts millions of tourists
          each year. Known for their breathtaking beauty and immense power, the
          falls have a combined flow rate that is among the highest of any
          waterfall globally. The surrounding areas offer a variety of
          attractions, including boat tours, observation towers, and lush parks.
          Niagara Falls is not only a symbol of natural splendor but also a hub
          for adventure and exploration.`}
        </p>
      </div>
      <p className={styles.credit}>
        Images from{" "}
        <a href="https://wallpapercat.com/" target="_blank" rel="nofollow">
          wallapercat.com
        </a>
      </p>
    </main>
  );
}
