import Image from "next/image";
import styles from "../../page.module.scss";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Victoria Falls</h1>
      </div>
      <div className={styles.cover}>
        <Image
          src={"/victoria-falls.jpg"}
          width={1920}
          height={1080}
          alt="Victoria Falls"
          title="Victoria Falls"
        />
      </div>
      <div className={styles.description}>
        <p>
          Victoria Falls, one of the most majestic natural wonders in the world,
          is located on the border between Zambia and Zimbabwe in Southern
          Africa. Known locally as "Mosi-oa-Tunya," meaning "The Smoke that
          Thunders," the falls are renowned for their breathtaking size and
          dramatic beauty. As the Zambezi River plunges over the edge, it
          creates a stunning spectacle of mist and rainbows, visible from miles
          away. The surrounding area is rich in wildlife and offers a variety of
          activities for adventure seekers, including bungee jumping,
          white-water rafting, and helicopter tours. Victoria Falls is not only
          a UNESCO World Heritage Site but also a vital part of the region's
          cultural and natural heritage, drawing visitors from around the globe.
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
