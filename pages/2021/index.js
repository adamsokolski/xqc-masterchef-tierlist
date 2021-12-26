import HomeHeader from "../../components/HomeHeader";
import { xqc2021 } from "../../data/xqc2021";
import styled from "styled-components";
import Image from "next/image";
import { keyframes } from "styled-components";
import { useState } from "react";
import { FancyLinkStyled } from "../../components/styles/FancyLinkStyled";
import { BiLinkExternal } from "react-icons/bi";
import { xqc2021contributors } from "../../data/xqc2021contributors";
import HamburgerBest from "../../components/HamburgerBest";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 2em;
`;

const ImageContainer = styled.div`
  z-index: 11;
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 4px;
    overflow: hidden;
    object-fit: cover;
    object-position: center center;
    transition: 300ms ease-in-out;
  }
`;

const Categories = styled.div`
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
  width: 100%;
`;
const Option = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.main4};
  margin: 10px;
  padding: 5px;
  border-radius: 4px;

  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.37);
  }

  @media (max-width: 900px) {
    width: 95%;
  }
`;

const OptionName = styled.p`
  font-size: 1.1em;
  font-weight: 600;
`;

const UnderTitle = styled.p`
  text-align: center;
  line-height: 35px;
  margin: 5px 20px;
  font-size: 1.2em;
  max-width: 900px;
`;

const Important = styled.span`
  font-size: 1.4em;
  font-weight: 600;
  margin: 0 10px;
  padding: 5px 10px;
  background-color: rgba(252, 50, 50, 0.5);
  border-radius: 4px;
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  10%,90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const Copied = styled.div`
  margin-left: 5px;
  font-weight: 500;
  display: inline-block;
  position: absolute;
  animation: ${fadeInOut} 1s linear;
`;

const Strong = styled.strong`
  cursor: pointer;
`;

const Contributor = styled.span`
  font-size: 0.8em;
  display: inline-block;
  margin: 3px 5px;
  background-color: #222;
  border-radius: 4px;
  padding: 0 5px;
  transition: 300ms ease-in-out;
  color: ${(props) => (props.platform === "twitch" ? "#b073ff" : "#ff6e38")};
  font-weight: 600;
  &:hover {
    background-color: #111;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: 300ms ease-in-out;
    box-shadow: 0 0px 10px 0 rgba(0, 0, 0, 0.37);
  }
`;

export default function Index({ headerImg }) {
  const [discordName, setDiscordName] = useState("NiceDevTools#0211");
  const [copied, setCopied] = useState(false);

  return (
    <Container>
      <HomeHeader headerImg={headerImg} />
      <HamburgerBest />

      <Title>Best of XQC 2021</Title>
      <UnderTitle>
        <Important>Voting isn&apos;t open yet!</Important>
        When all categories will be completed, a link to the form will be here.
      </UnderTitle>
      <UnderTitle>
        If you want to contribute (categories, options, other...) dm{" "}
        <Strong
          onClick={() => {
            navigator.clipboard.writeText(discordName);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 1000);
          }}
        >
          NiceDevTools#0211
        </Strong>
        {copied ? <Copied>Copied!</Copied> : ""}
      </UnderTitle>

      <UnderTitle>
        <strong>Contributors</strong>:{" "}
        {xqc2021contributors.map((user) => (
          <Contributor key={user.name} platform={user.platform}>
            {user.name}
          </Contributor>
        ))}
      </UnderTitle>
      <Categories>
        {xqc2021.categories.map((category) => (
          <Category key={category.id} className={category.id}>
            <CategoryTitle>{category.name}</CategoryTitle>
            {category.options.map((option) => (
              <Option key={option.id}>
                <ImageContainer>
                  {option.name ? (
                    <Image
                      src={option.thumbnail}
                      height="300px"
                      width="450px"
                      alt={option.name}
                      placeholder="blur"
                      blurDataURL="/images/logo-emotes/xqcSCAREDOFGIRLS-fraserlol.webp"
                    />
                  ) : (
                    ""
                  )}
                </ImageContainer>
                <OptionName>
                  {option.nameImg ? (
                    <Image
                      src={option.nameImg}
                      height="28"
                      width="28"
                      alt={option.name}
                    />
                  ) : (
                    ""
                  )}
                  {option.link ? (
                    <FancyLinkStyled
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {option.name} <BiLinkExternal />
                    </FancyLinkStyled>
                  ) : (
                    option.name
                  )}

                  {}
                </OptionName>
              </Option>
            ))}
          </Category>
        ))}
      </Categories>
    </Container>
  );
}
