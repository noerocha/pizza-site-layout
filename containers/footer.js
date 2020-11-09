import React from "react";
import Footer from "../components/footer";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.SocialMedia>
          <Footer.SocialMediaWrap>
            <Footer.SocialLogo href="/">Pizza</Footer.SocialLogo>
            <Footer.SocialIcons>
              <Footer.SocialIconLink
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="/"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </Footer.SocialIconLink>
              <Footer.SocialIconLink
                href="/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </Footer.SocialIconLink>
            </Footer.SocialIcons>
          </Footer.SocialMediaWrap>
        </Footer.SocialMedia>
      </Footer.Wrapper>
    </Footer>
  );
};

export default FooterContainer;
