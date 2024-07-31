import Image from "next/image";
import styles from "../../page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Mount Everest</h1>
      </div>
      <div className={styles.cover}>
        <Image
          src={"/mount-everest.jpg"}
          width={1920}
          height={1080}
          alt="Mount Everest"
          title="Mount Everest"
        />
      </div>
      <div className={styles.description}>
        <p>
          Mount Everest, the world's highest peak, stands at 8,848 meters
          (29,029 feet) above sea level, situated in the Himalayas on the border
          between Nepal and the Tibet Autonomous Region of China. Known as
          "Sagarmatha" in Nepali and "Chomolungma" in Tibetan, it is a symbol of
          adventure and a major challenge for climbers worldwide. Sir Edmund
          Hillary and Tenzing Norgay made the first successful ascent in 1953.
          The mountain's extreme altitude poses significant challenges,
          including harsh weather and low oxygen levels. Despite these dangers,
          it continues to attract climbers from around the globe each year.
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
