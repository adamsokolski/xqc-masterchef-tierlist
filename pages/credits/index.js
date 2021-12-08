import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Todo: Credit list - 7tv emotes

const CreditListStyled = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  a {
    border-bottom: 2px solid ${(props) => props.theme.main1};
  }
`;

const AuthorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  li {
    padding: 5px 10px;
    list-style-type: none;
  }
`;

export default function credits() {
  return (
    <CreditListStyled>
      <div>
        <h2>xqc.best</h2>
        <ul>
          <li>
            xQcOW - Concept Creator{"  "}
            <Image
              src="/images/emotes/pepe5Head.webp"
              width="50"
              height="50"
              alt="emote of pepe the frog with huge head"
            />{" "}
          </li>
          <li>
            NiceDevTools - Front End Developer{"  "}
            <Image
              src="/images/HACKERMANS_Greekgodx.gif"
              width="50"
              height="50"
              alt="emote of streamer GreekGodx typing"
            />{" "}
          </li>
        </ul>
        <h2>Emotes</h2>

        <Link href="/credits/all-emotes">
          <a>All emotes</a>
        </Link>

        <h3>7tv.app</h3>
        <AuthorsList>
          <li>xqc by MegaKill3 </li>
          <li>xqcCheer by Lilbint</li>
          <li>xqcBAT by Lilbint</li>
          <li>xQcOW by Mouzah_</li>
          <li>xQcOW by nanna666</li>
          <li>KEKW by kaedtn</li>
          <li>xqcWeird by mr_revil</li>
          <li>xqcStare by adam7600</li>
          <li>xQcHuggingYou by VeryPogftxQcOnT</li>
          <li>xqcWhat by Kolers</li>
          <li>xqcWut by SkapYT</li>
          <li>xqcStare by KOZABYTE_</li>
          <li>xqc420 by Erkyn_</li>
          <li>xqcJam by Pogli</li>
          <li>Kissahomie by RadicalCj</li>
          <li>xqcDespair by RaghNat</li>
          <li>xqcShower by snortexx</li>
          <li>xqcCancel by VeryPogftxQcOnT</li>
          <li>xqcCoomer by ShiroOrochi_</li>
          <li>MaldCheck by 8jiffy</li>
          <li>Tryhard7 by widepeepoLeo</li>
          <li>SUSSYftxQc by brokeNCYDEEE</li>
          <li>xqcBOOBA by yodaqw</li>
          <li>xqcHUHH by TheCreativeNick </li>
          <li>xqcSCAREDOFGIRLS by fraserlol</li>
          <li>xQcController by tPur</li>
          <li>xQcOW by KafieneOW</li>
          <li>xqcLftPopsicle by hyruverse</li>
          <li>NoWayReally by kasywasy</li>
          <li>xqcTalk by Enzo_SuperCraftZ</li>
          <li>xqcBOOBA by Geeeps</li>
          <li>xqcSleeper by Enzo_SuperCraftZ</li>
          <li>Chatting by VeryPogftxQcOnT</li>
          <li>xqcL by Subcents</li>
          <li>GIGACHADftxQcOW by smonk96024</li>
          <li>xqcL by PosturelessHobo</li>
          <li>XQCL by novapapa</li>
          <li>xqcFuel by snortexx</li>
          <li>xqcValid by okayaim</li>
          <li>xqcPls3 by AsianMaNz1</li>
          <li>xqcL by snoopadillios</li>
          <li>CouldntResist by VVKoo1</li>
          <li>xqcSturdy by Genero</li>
          <li>xqcAlienPls by Zexov</li>
          <li>VeryPogftxQcTalkingAboutSpiderman by n1ghtzlol</li>
          <li>xQcOW by Mouzah_</li>
          <li>xqcBased by AtypicalLUL</li>
          <li>xqcExplainingHow by VoidMakesVids</li>
          <li>VeryPogftxQcInTheShower by Zoil</li>
          <li>JUICED by KafieneOW</li>
          <li>VeryPogftxQcOnTheToilet by BasedBidoof</li>
          <li>xqcSearch by jeerby</li>
          <li>xqcBAT by Lilbint</li>
          <li>pepe5Head by bartolomeo_x </li>
        </AuthorsList>
        <h3>BetterTTV.com</h3>
        <AuthorsList>
          <li>XQCJUMPSINTOBED by ThePharoan</li>
          <li>xQcOW by frocasso</li>
          <li>xQcree by Booloon_</li>
          <li>xqCOOM by broadWayy__</li>
          <li>xqChomp by burmINC</li>
          <li>xqClap by dinolawls</li>
          <li>xqCut by Weboski</li>
          <li>xqcAddict by offlineow</li>
          <li>xqcAgony by sharqq2</li>
          <li>xqcAware by mopolo</li>
          <li>xqcBack by 7ony_2</li>
          <li>xqcBite by nickisokatemotes</li>
          <li>xqcBitrate by donneh09</li>
          <li>xqcBonk by 1Roxie</li>
          <li>xqcBoo by grandvii</li>
          <li>xqcBounce by Drumbeat</li>
          <li>xqcCheck by Eexuaa</li>
          <li>xqcCheck by Vortrux</li>
          <li>xqcClown by BadnewzLUL</li>
          <li>xqcCowboy by CharonTheFerrym8</li>
          <li>xqcCrab by emil6006</li>
          <li>xqcCreep by Siguantu</li>
          <li>xqcCry by emil6006</li>
          <li>xqcDJ by Teebo__</li>
          <li>xqcDance by rosepberry</li>
          <li>xqcDead by eggnogeggs</li>
          <li>xqcDead by funtimedanieI</li>
          <li>xqcDead by Cooldiamonds578</li>
          <li>xqcDitch by southTXgoat</li>
          <li>xqcDrip by bushshotjfk</li>
          <li>xqcDriving by magicalhobo3000</li>
          <li>xqcEat by headchogg</li>
          <li>xqcFinger by iDini</li>
          <li>xqcHeart by rhiiaa</li>
          <li>xqcHmm by Simbyx</li>
          <li>xqcHungry by jehmeme</li>
          <li>xqcHump by CharonTheFerrym8</li>
          <li>xqcJAM by funny_wee</li>
          <li>xqcJoy by ZAPPY____</li>
          <li>xqcJuicer by ZOOMSAMA</li>
          <li>xqcKiss by Jeffboys123</li>
          <li>xqcKool by merkurgran</li>
          <li>xqcL by gardenchomp</li>
          <li>xqcL by Eimlur</li>
          <li>xqcL by peepoJaiden</li>
          <li>xqcLeave by Jeffboys123</li>
          <li>xqcLick by onyi</li>
          <li>xqcLeave by terminallywell</li>
          <li>xqcMald by mommymilkies77</li>
          <li>xqcMald2 by 743982371289</li>
          <li>xqcMald2 by headchogg</li>
          <li>xqcMald by emil6006</li>
          <li>xqcModCheck by g_casta</li>
          <li>xqcOO by becksG0D</li>
          <li>xqcOmege by NlLKY</li>
          <li>xqcOops by Norro</li>
          <li>xqcPlease by SleepyBoio</li>
          <li>xqcPls by novapapa</li>
          <li>xqcPunch by Mavro</li>
          <li>xqcSIGMA by Wheeliex</li>
          <li>xqcSeizure by oreosarequitegood</li>
          <li>xqcShave by JAVAsvp</li>
          <li>xqcSourPls by cheesypotat0e</li>
          <li>xqcThrow by notdhruvil</li>
          <li>xqcType by manydinosaur131</li>
          <li>xqcVibin by EpicDonutDude_</li>
          <li>xqcWave by MildSalt_</li>
          <li>xqcZZZ by kobwmoose</li>
          <li>xqcZoom by CharlieJesper</li>
          <li>SillyChamp by siiva8805 </li>
        </AuthorsList>
        <h3>frankerfacez.com</h3>
        <AuthorsList>
          <li> WeirdChamp by sundizzle</li>
          <li>OkayChamp by Dr_Scrubbington</li>
        </AuthorsList>
      </div>
    </CreditListStyled>
  );
}
