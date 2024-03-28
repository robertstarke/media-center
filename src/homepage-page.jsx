import { Page } from "@nakedjsx/core/page";

const tiles = [
  {
    id: "hulu",
    name: "HULU",
    url: "https://www.hulu.com",
    image: "hulu.svg",
    accesskey: "1",
    index: 0,
  },
  {
    id: "disney",
    name: "Disney+",
    url: "https://www.disneyplus.com/",
    image: "disney.svg",
    accesskey: "2",
    index: 1,
  },
  {
    id: "netflix",
    name: "Netflix",
    url: "https://www.netflix.com",
    image: "netflix.svg",
    accesskey: "3",
    index: 2,
  },
  {
    id: "amazon",
    name: "Amazon Prime Video",
    url: "https://www.amazon.com/gp/video/storefront/",
    image: "amazon_prime.svg",
    accesskey: "4",
    index: 3,
  },
  {
    id: "sling",
    name: "Sling TV",
    url: "https://watch.sling.com/dashboard/home",
    image: "sling_tv.svg",
    accesskey: "5",
    index: 4,
  },
  {
    id: "paramount",
    name: "Paramount+",
    url: "https://www.paramountplus.com",
    image: "paramount_plus.svg",
    accesskey: "6",
    index: 5,
  },
  {
    id: "peacock",
    name: "Peacock",
    url: "https://www.peacocktv.com",
    image: "peacock.svg",
    accesskey: "7",
    index: 6,
  },
  {
    id: "max",
    name: "Max",
    url: "https://www.max.com",
    image: "max.svg",
    accesskey: "8",
    index: 7,
  },
  {
    id: "appletv",
    name: "Apple TV+",
    url: "https://www.apple.com/apple-tv-plus/",
    image: "appletv.svg",
    accesskey: "9",
    index: 8,
  },
  {
    id: "britbox",
    name: "BritBox",
    url: "https://www.britbox.com/us/account/watchlist",
    image: "britbox.svg",
    accesskey: "a",
    index: 9,
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com",
    image: "youtube.svg",
    accesskey: "b",
    index: 10,
  },
  {
    id: "pbs",
    name: "PBS",
    url: "https://www.pbs.org/livestream/",
    image: "pbs.svg",
    accesskey: "c",
    index: 11,
  },
];

const getTiles = (tiles) =>
  tiles.reduce((acc, tile) => {
    acc.push(Tile(tile));
    return acc;
  }, []);

const Tile = (tile) => (
  <a
    id={tile.id}
    class="tile"
    href={tile.url}
    title={tile.name}
    data-accessKey={tile.accesskey}
    target="_blank"
    tabIndex={tile.index}
    style={`order: ${tile.index};`}
  >
    <img src={`./img/${tile.image}`} alt={tile.name} />
    <span class="key-hint">{tile.accesskey}</span>
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
