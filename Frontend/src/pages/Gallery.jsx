import ImageGallery from "react-image-gallery";
import Website from "../images/website.png";
import A from "../images/A.png";
import CAP from "../images/CAP.png";
import CCP from "../images/CCP.png";
import SAA from "../images/SAA.png";
import CYSA from "../images/cysa.png";
import Linux from "../images/linux.png";
import Network from "../images/network.png";
import Project from "../images/project.png";
import Sec from "../images/sec.png";

const images = [
  {
    original: Website,
    thumbnail: Website,
    description: `A portfolio website`,
    originalHeight: "400px",
  },
  {
    original: CCP,
    thumbnail: CCP,
    description: `A flask API`,
    originalHeight: "400px",
  },
  {
    original: CAP,
    thumbnail: CAP,
    description: `A Cloud Architect Pathway certificate`,
    originalHeight: "400px",
  },
  {
    original: CYSA,
    thumbnail: CYSA,
    description: `A CompTIA CySA+ certificate`,
    originalHeight: "400px",
  },
  {
    original: Network,
    thumbnail: Network,
    description: `A CompTIA Network+ certificate`,
    originalHeight: "400px",
  },
  {
    original: A,
    thumbnail: A,
    description: `A CompTIA A+ certificate`,
    originalHeight: "400px",
  },
  {
    original: SAA,
    thumbnail: SAA,
    description: `A AWS Solutions Architect certificate`,
    originalHeight: "400px",
  },
  {
    original: Linux,
    thumbnail: Linux,
    description: `A LPI Linux Essentials certificate`,
    originalHeight: "400px",
  },
  {
    original: Project,
    thumbnail: Project,
    description: `A CompTIA Project+ certificate`,
    originalHeight: "400px",
  },
  {
    original: Sec,
    thumbnail: Sec,
    description: `A CompTIA Security+ certificate`,
    originalHeight: "400px",
  },
];

export default function Gallery() {
  return (
    <>
      <h2 className="text-center">gallery</h2>
      <article id="gallery">
        <ImageGallery items={images} />
      </article>
    </>
  );
}
