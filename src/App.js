import React, { useEffect, useState, useRef } from "react";
import Rotate from 'react-reveal/Rotate';
import RubberBand from 'react-reveal/RubberBand';
import Jump from 'react-reveal/Jump';
import Tada from 'react-reveal/Tada';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import Footer from './components/Footer';

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;


export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 0px;
  border: none;
  padding: 10px;
  font-weight: bold;
  width: 250px;
  cursor: pointer;
  box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledConnectButton = styled.button`
  padding: 10px;
  border-radius: 0px;
  border: none;
  background-repeat: no-repeat;
  padding: 10px;
  font-weight: bold;
  width: 275px;
  height: 316px;
  cursor: pointer;
  box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledMintButton = styled.button`
  padding: 10px;
  border-radius: 0px;
  border: none;
  background-repeat: no-repeat;
  padding: 10px;
  font-weight: bold;
  width: 250px;
  height: 276px;
  cursor: pointer;
  box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: black;
  padding: 10px;
  font-weight: bold;
  font-size: 40px;
  color: yellowgreen;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -0px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 0px 0px -0px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  width: 100px;
  @media (min-width: 900px) {
    width: 100px;
  }
  @media (min-width: 1000px) {
    width: 250px;
  }
  transition: width 0.5s;
`;

export const StyledImgOpensea = styled.img`
  width: 200px;
  @media (min-width: 900px) {
    width: 300px;
  }
  @media (min-width: 1000px) {
    width: 100px;
  }
  transition: width 0.5s;
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Choose amount and click mint to get your Cool Kids!`);
  const [mintAmount, setMintAmount] = useState(1);
  const [isChecked, setIsChecked] = React.useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false
    });

    const TEXT_COLLAPSE_OPTIONS = {
      collapse: true, // default state when component rendered
      collapseText: '... show more', // text to show when collapsed
      expandText: 'show less', // text to show when expanded
      minHeight: 350, // component height when closed
      maxHeight: 350, // expanded to
      textStyle: ({ // pass the css for the collapseText and expandText here
        color: "black",
        fontSize: "50px",
      })
    };

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Price: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong :(");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
          setFeedback(
          `WOW, you minted a ${CONFIG.NFT_NAME}! Go to opensea TESTNET see it!`
          );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={2}
        ai={"center"}
        style={{ padding: 1, backgroundColor: "black" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg-gif.gif" : null}
      >
        <s.SpacerMedium />
        <s.SpacerLarge />
        <RubberBand>
        <StyledImg
                onClick={(e) => {
                  window.open("https://testnets.opensea.io/collection/cool-kids-test", "_blank");
                }}
                style={{ border: "none", background: "none", transform: "scale(2)"}} alt={"logo"} src={"/config/images/logo-test.png"}/>
        </RubberBand>
                <Zoom bottom>
                             <StyledImgOpensea
                                    onClick={(e) => {
                                     window.open(CONFIG.MARKETPLACE_LINK, "_blank");
                                     }}
                                    style={{ background: "none", transform: "scale(1)"}} alt={"example"} src={"/config/images/opensea.png"}/>
                            
                </Zoom>
              <s.SpacerLarge />
        <ResponsiveWrapper flex={0} style={{ padding: 10 }} test>
          <s.ContainerInstagram ai={"flex-end"} jc={"flex-start"}>
            <Rotate top left>
          <StyledImg
                onClick={(e) => {
                  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley", "_blank");
                }}
                style={{ border: "none", background: "none", transform: "scale(2)"}} alt={"twitterbox"} src={"/config/images/insta-phone.png"}/>
            </Rotate>
                </s.ContainerInstagram>
          <s.mintContainer
            flex={1}
            ai={"center"}
            jc={"flex-start"}
            style={{ padding: 10, backgroundImage: 'url("")'}}
          >
{/* THIS IS AUDIO PLAYER [Currently: Disabled]
                <audio controls autoplay>
  <source src="./config/song.ogg" allow= "autoplay" type="audio/ogg"/>
  <source src="./config/song.mp3" allow= "autoplay" type="audio/mpeg"/>
Your browser does not support the audio element.
</audio>
END OF AUDIO PLAYER */}

            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 60,
                fontWeight: "bold",
                color: "#66ff33",
              }}
            >
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </s.TextTitle>
            <s.TextDescription
              style={{
                textAlign: "center",
                color: "var(--primary-text)",
              }}
            >
            </s.TextDescription>
            <span
              style={{
                textAlign: "center",
                color: "#66ff33"
              }}
            >
            </span>
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "purple" }}
                >
                  The sale has ended.
                </s.TextTitle>
                <s.TextDescription
                  style={{ textAlign: "center", color: "purple" }}
                >
                  You can still find {CONFIG.NFT_NAME} on
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledLink target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                  {CONFIG.MARKETPLACE}
                </StyledLink>
              </>
            ) : (
              <>
                <s.TextTitle
                  style={{ textAlign: "center", color: "#66ff33" }}
                >
                  1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                  {CONFIG.NETWORK.SYMBOL}.
                </s.TextTitle>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <s.Container ai={"center"} jc={"center"}>
                    <s.SpacerXSmall />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      This is  TESTNET project. Connect to {CONFIG.NETWORK.NAME} Testnet network
                    </s.TextDescription>
                    <Jump>
                      <s.SpacerLarge />
                      <s.SpacerLarge />
                    <StyledConnectButton
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                      style={{ background: "none", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",   backgroundImage: 'url("https://raw.githubusercontent.com/0xZeroBaby/Cool-Kids-NFT/main/public/config/images/metamask.png")'}}
                    >
                    </StyledConnectButton>
                    </Jump>
                    <s.SpacerLarge />
                    <s.SpacerMedium />
                    <s.SpacerLarge />
                    <s.SpacerMedium />
                    <s.SpacerLarge />
                    <s.SpacerMedium />
                {/*}    <s.ContainerCollapseText>
<div style={{ display: 'block', padding: 30 }}>
      <center><h1>What it an NFT?</h1></center>
      <FormControlLabel
      label="Open me!"
        control={<Switch checked={isChecked} onChange={() => {
          setIsChecked((prev) => !prev);
        }} />}
      />
      <div style={{ display: 'flex' }}>
        <Collapse in={isChecked}>
          <Paper
            elevation={5}
            style={{ margin: 5 }} >
            <svg style={{ width: 100, height: 100 }}>
              <polygon points="0,80 45,00, 80,70"
                style={{
                  fill: 'orange',
                  stroke: 'dimgrey',
                  strokeWidth: 1,
                }} />
            </svg>
          </Paper>
        </Collapse>
      </div>
    </div>
  );
               </s.ContainerCollapseText>
              {*/} 
                    {blockchain.errorMsg !== "" ? (
                      <>
                        <s.TextDescription
                          style={{
                            textAlign: "center",
                            color: "white",
                            fontSize: 18
                          }}
                        >
                          {blockchain.errorMsg}
                        </s.TextDescription>
                      </>
                    ) : null}
                  </s.Container>
                ) : (
                  <>
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 20,
                      }}
                    >
                      {feedback}
                    </s.TextDescription>
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 1.0, color: "yellowgreen"}}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.SpacerXSmall />
                      <s.TextDescription
                        style={{
                          textAlign: "center",
                          color: "yellowgreen",
                          fontSize: 100,
                        }}
                      >
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <s.SpacerXSmall />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                         +
                      </StyledRoundButton>
                    </s.Container>
                    <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <Tada>
                      <StyledMintButton
                        disabled={claimingNft ? 1 : 0}
                        style={{
                          background: "none",
                          backgroundImage: 'url("https://raw.githubusercontent.com/0xZeroBaby/Cool-Kids-NFT/main/public/config/images/mint.png")',
                          backgroundRepeat: "no",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "" : ""}
                      </StyledMintButton>
                      </Tada>
                    </s.Container>
                  </>
                )}
              </>
            )}
            <s.SpacerLarge />
            <s.SpacerLarge />
            <s.SpacerLarge />
            <s.SpacerLarge />
            <s.SpacerLarge />
            </s.mintContainer>
          <s.ContainerTwitter ai={"flex-start"} jc={"flex-start"}>
          <Rotate top right>
          <StyledImg
                onClick={(e) => {
                  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley", "_blank");
                }}
                style={{ background: "none", transform: "scale(1.8)"}} alt={"instagram"} src={"/config/images/bird-twitter.png"}/>
          </Rotate>
                </s.ContainerTwitter>
        </ResponsiveWrapper>
        <s.SpacerMedium />
{/*// FOOTER PLACE */}
      </s.Container>
    </s.Screen>
  );
}

export default App;
