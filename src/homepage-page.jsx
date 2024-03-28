import { Page } from "@nakedjsx/core/page";

const tiles = {
  "Amazon Prime Video": {
    id: "amazon",
    link: "https://www.amazon.com/gp/video/storefront/",
    image: "./img/amazon_prime.svg",
    accesskey: "7",
    index: 7,
  },
  "Britbox": {
    id: "britbox",
    link: "https://www.britbox.com/us/account/watchlist",
    image: "./img/britbox.svg",
    accesskey: "9",
    index: 9,
  },
  "Google Play Movies": {
    id: "google_movies",
    link: "https://www.youtube.com/feed/storefront?bp=ogUCKAQ%3D",
    image: "./img/google_movies.png",
    accesskey: "b",
    index: 11,
  },
  "Google Photos": {
    id: "google_photos",
    link: "https://photos.google.com/share/AF1QipOId0QwF_z6l5G8NsGeVGkEk-dCi_ks4bRNtaZ9zjNqHlTdOMx1CQUaoi7U1BZeMw?key=ZVduN0VjNm93R29La1M2QmFxclN3SkxnZHlQRHh3",
    image: "./img/google_photos.svg",
    accesskey: "c",
    index: 12,
  },
  KiKa: {
    id: "kika",
    link: "https://www.kika.de/die-sendung-mit-dem-elefanten/die-sendung-mit-dem-elefanten-104",
    image: "./img/kika.svg",
    accesskey: "4",
    index: 4,
  },
  Netflix: {
    id: "netflix",
    link: "https://www.netflix.com",
    image: "./img/netflix.svg",
    accesskey: "8",
    index: 8,
  },
  "Paramount +": {
    id: "paramount",
    link: "https://www.paramountplus.com",
    image: "./img/paramount_plus.svg",
    accesskey: "1",
    index: 1,
  },
  "PBS": {
    id: "pbs",
    link: "https://www.pbs.org/livestream/",
    image: "./img/pbs.svg",
    accesskey: "a",
    index: 10,
  },
  "PBS Kids": {
    id: "pbs-kids",
    link: "https://www.pbskids.org/video",
    image: "./img/pbs_kids.svg",
    accesskey: "3",
    index: 3,
  },
  "Sling TV": {
    id: "sling",
    link: "https://watch.sling.com/dashboard/home",
    image: "./img/sling_tv.svg",
    accesskey: "6",
    index: 6,
  },
  Emby: {
    id: "emby",
    link: "http://localhost:8080",
    image: "./img/emby.png",
    accesskey: "5",
    index: 5,
  },
  YouTube: {
    id: "youtube",
    link: "https://www.youtube.com",
    image: "./img/youtube.svg",
    accesskey: "2",
    index: 2,
  },
};

const getTiles = (tiles) =>
  Object.entries(tiles).reduce((acc, [section, attributes]) => {
    acc.push(Section(section, attributes));
    return acc;
  }, []);

const Section = (section, attributes) => (
  <a
    id={attributes.id}
    class="tile"
    href={attributes.link}
    title={section}
    data-accessKey={attributes.accesskey}
    target="_blank"
    tabIndex={attributes.index}
    style={`order: ${attributes.index};`}
  >
    <img src={attributes.image} alt={section} />
    <span class="key-hint">{attributes.accesskey}</span>
  </a>
);

const BodyContent = () => (
  <>
    <header>
      <div id="time"></div>
    </header>
    <section id="tiles">{getTiles(tiles)}</section>
  </>
);

Page.Create("en");
Page.AppendHead(<title>Homepage</title>);
Page.AppendHead(<link rel="stylesheet" href="./css/normalize.css" />);
Page.AppendHead(<link rel="stylesheet" href="./css/style.css" />);
Page.AppendHead(<script src="./js/day.js"></script>);
Page.AppendBody(<BodyContent />);
Page.Render();
