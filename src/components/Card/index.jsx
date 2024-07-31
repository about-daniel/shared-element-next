"use client";
import Image from "next/image";
import styles from "./card.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export default function Card({ item }) {
  const imageRef = useRef();
  const router = useRouter();

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch(item.slug);
  }, [router]);

  const handleClick = (e) => {
    const placeHolder = document.querySelector("#placeholder");
    const allCards = document.querySelectorAll("[data-card]");
    const title = document.querySelector("h1");

    // Cloning the element to share between pages
    const wrapperRect = imageRef.current.getBoundingClientRect();
    const { left, top } = wrapperRect;
    const width = imageRef.current.offsetWidth;
    const height = imageRef.current.offsetHeight;
    gsap.set(placeHolder, {
      width,
      height,
      left,
      top,
    });
    const newImage = imageRef.current.cloneNode(true);
    placeHolder.appendChild(newImage);

    // Animation
    const endWidth = window.innerWidth / 2;
    const endHeight = 500;
    const endLeft = window.innerWidth / 2;
    const endTop = 180;
    const tl = gsap.timeline({
      delay: 0.05,
      onComplete: () => {
        router.push(`/places/${e.slug}`);
        setTimeout(() => {
          placeHolder.innerHTML = "";
          gsap.set(placeHolder, { clearProps: "all" });
        }, 500);
      },
    }); // a minimal delay to be sure of cloning
    tl.to([allCards, title], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
    }).to(placeHolder, {
      width: endWidth,
      height: endHeight,
      left: endLeft,
      top: endTop,
      x: -endWidth / 2,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className={styles.card} onClick={() => handleClick(item)} data-card>
      <div className={styles.image}>
        <Image
          src={item.image}
          width={1920}
          height={1080}
          alt={item.title}
          title={item.title}
          priority={true}
          ref={imageRef}
        />
      </div>
      <div className={styles.name}>
        <h2>{item.title}</h2>
      </div>
    </div>
  );
}
