// Links
import { socialMediaLinks } from "../../utils/Links";
// Icons
import { cloneElement } from "react";
import { FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { SiInstagram } from "react-icons/si";

const socialMediaAnchors = [
  {
    icon: <SiInstagram />,
    link: socialMediaLinks.instagram,
  },
  {
    icon: <FaTiktok />,
    link: socialMediaLinks.tiktok,
  },
  {
    icon: <FaYoutube />,
    link: socialMediaLinks.youtube,
  },
  {
    icon: <FaSpotify />,
    link: socialMediaLinks.spotify,
  },
  {
    icon: <IoLogoFacebook />,
    link: socialMediaLinks.facebook,
  },
];

const iconsStyling = { height: '100%', width: 'auto', marginRight: '0.7rem' };
const containerStyling = { height: '2rem', display:'flex' }
const SocialNetworks = () => (
  <div id="socialNetworks" style={containerStyling}>
    {socialMediaAnchors.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {cloneElement(socialMedia.icon, { style: iconsStyling })}
        </a>
    ))}
  </div>
);

export default SocialNetworks;