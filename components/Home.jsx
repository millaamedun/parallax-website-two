import React from "react";

import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import TextBlock from "./Text";

import artback from "../public/assets/background.png";
import jungle1 from "../public/assets/jungle1.png";
import jungle2 from "../public/assets/jungle2.png";
import jungle3 from "../public/assets/jungle3.png";
import jungle4 from "../public/assets/jungle4.png";
import jungle5 from "../public/assets/jungle5.png";
import logo from "../public/assets/logo_land.png";
import man from "../public/assets/man_on_mountain.png";
import mountain from "../public/assets/mountains.png";

const Home = () => {
  return (
    <div>
      <Parallax pages={1.713} style={{ top: "0", left: "0" }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <Image className="animation_layer parallax" src={artback} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <Image className="animation_layer parallax" src={mountain} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          <Image className="animation_layer parallax" src={logo} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <Image className="animation_layer parallax" src={jungle1} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <Image className="animation_layer parallax" src={jungle2} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <Image className="animation_layer parallax" src={jungle3} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <Image className="animation_layer parallax" src={jungle4} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <Image className="animation_layer parallax" src={man} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <Image className="animation_layer parallax" src={jungle5} alt="" />
        </ParallaxLayer>
        <ParallaxLayer offset={.95} speed={0.3}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
