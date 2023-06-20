import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Aplikasi Managemen Barang",
    Svg: require("@site/static/svg/landing-page-task-list.svg").default,
    description: <>Sarpras Manusa adalah aplikasi manajemen barang yang mudah digunakan dan efisien.</>,
  },
  {
    title: "Pelacakan Barang",
    Svg: require("@site/static/svg/landing-page-progress-overview.svg").default,
    description: <>Sarpras Manusa memungkinkan Anda untuk melacak pergerakan Barang, mulai dari Generasi Kode QR Hingga Histori Pemindahan Barang</>,
  },
  {
    title: "Keamanan",
    Svg: require("@site/static/svg/landing-page-lock.svg").default,
    description: <>Sarpras Manusa mendukung adanya role management yang dapat memiliki akses tertentu di berbagai fitur</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
