"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import SpecialBH from "../component/specialBH";
const SubData = {
  Logo: "/Logo/BHLogo1-min.jpg",
  Alt: "Baja Harapan Group",
  company: "Baja Harapan Group",
  description: "WHOSALE OF FERTILIZER OF AGROCHEMICAL PRODUCT",
  vision:
    "To be a premier company with focus on positive contribution to economic development and agricultural growth of the country.",
  mission:
    "Supporting the development of agriculture through the wholesale of fertilizer and agrochemical products to support agricultural activities for crop production on a fee or contract basis.",
  pdfDownload: "/PDF/Baja Harapan Group Sdn Bhd_Business Profile-min.pdf",
  bgHero: "/BHGroup/BHGroupHero-min.png",
  image1: "/BHGroup/BHGroup1-min.png",
  image2: "/BHGroup/BHGroup2-min.png",
  image3: "/BHGroup/BHGroup3-min.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60138160355?text=Hi,%20I%20want%20to%20know%20more%20about%20Baja%20Harapan%20Group!",
  email: "mailto:marketing@yunfungsang",
};

export default function BHGroup() {
  return (
    <Box>
      <SpecialBH
        Logo={SubData.Logo}
        Alt={SubData.Alt}
        company={SubData.company}
        description={SubData.description}
        vision={SubData.vision}
        mission={SubData.mission}
        pdfDownload={SubData.pdfDownload}
        bgHero={SubData.bgHero}
        image1={SubData.image1}
        image2={SubData.image2}
        image3={SubData.image3}
        address={SubData.address}
        contact={SubData.contact}
        email={SubData.email}
      />
    </Box>
  );
}
