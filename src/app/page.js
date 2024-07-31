import Card from "@/components/Card";
import styles from "./page.module.scss";

export default function Home() {
  const places = [
    {
      title: "Mount Everest",
      slug: "mount-everest",
      image: "/mount-everest.jpg",
    },
    {
      title: "Niagara Falls",
      slug: "niagara-falls",
      image: "/niagara-falls.jpg",
    },
    {
      title: "Victoria Falls",
      slug: "victoria-falls",
      image: "/victoria-falls.jpg",
    },
    {
      title: "Tahiti",
      slug: "tahiti",
      image: "/tahiti.jpg",
    },
  ];
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Places to visit</h1>
      </div>
      <div className={styles.places}>
        {places.map((place, index) => (
          <Card item={place} key={`place-${index}`} />
        ))}
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
