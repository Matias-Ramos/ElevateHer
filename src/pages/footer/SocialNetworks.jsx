// Icons
import { cloneElement } from "react";
import { FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { SiInstagram } from "react-icons/si";

const socialMediaLinks = [
  {
    icon: <SiInstagram />,
    link: 'https://instagram.com/anarestrepofit?igshid=YmMyMTA2M2Y=',
  },
  {
    icon: <FaTiktok />,
    link: 'https://www.tiktok.com/@anarestrepofit?_t=8ijdBceZNJe&_r=1',
  },
  {
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/@anarestrepofit',
  },
  {
    icon: <FaSpotify />,
    link: 'https://open.spotify.com/show/27ZZG6ouX6a8hADG4E8q22?si=9AzS2HO9S7indK1JbAWg8w&dd=1',
  },
  {
    icon: <IoLogoFacebook />,
    link: 'https://www.facebook.com/share/Gm8d7n7QBi7wSYrB/?mibextid=K35XfP',
  },
];

const iconsStyling = { height: '100%', width: 'auto', marginRight: '0.7rem' };
const containerStyling = { height: '2rem', display:'flex' }
const SocialNetworks = () => (
  <div id="socialNetworks" style={containerStyling}>
    {socialMediaLinks.map((socialMedia, index) => (
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