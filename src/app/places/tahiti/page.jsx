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
          src={"/tahiti.jpg"}
          width={1920}
          height={1080}
          alt="Tahiti"
          title="Tahiti"
        />
      </div>
      <div className={styles.description}>
        <p>
          Tahiti, the largest island in French Polynesia, is a tropical paradise
          located in the heart of the South Pacific Ocean. Known for its
          stunning black sand beaches, lush rainforests, and vibrant coral
          reefs, Tahiti offers an idyllic escape for travelers seeking natural
          beauty and tranquility. The island's rich cultural heritage is
          reflected in its traditional music, dance, and art, providing visitors
          with a glimpse into the unique Polynesian way of life. With its warm
          climate, crystal-clear lagoons, and welcoming locals, Tahiti is a
          dream destination for those looking to experience the serene beauty
          and hospitality of the South Pacific. Whether exploring its rugged
          landscapes or relaxing in luxury resorts, Tahiti promises an
          unforgettable adventure.
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
