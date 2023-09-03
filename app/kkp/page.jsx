"use client";
import React, { useState } from "react";
import {
  Box,
} from "@mui/material";
import Subsidiaries from "../component/subsidiaries";
const SubData = {
  Logo: "/Logo/KKPLogo-min.png",
  Alt: "Kang Ke Palm Sdn Bhd",
  company: "Kang Ke Palm Sdn Bhd",
  description: "DEALER FRUIT, PLANTATION MANAGEMENT & MANPOWER SERVICES",
  vision:
    "To be a premier company with focus on positive contribution to economic development and agricultural growth of the country.",
  mission:
    "Supporting the development of agriculture through the wholesale of fertilizer and agrochemical products to support agricultural activities for crop production on a fee or contract basis.",
  pdfDownload: "/PDF/Kang Ke Palm Sdn Bhd Profile-min.pdf",
  bgHero: "/KKP/KKPHero-min.png",
  image1: "/KKP/KKP1-min.png",
  image2: "/KKP/KKP2-min.png",
  image3: "/KKP/KKP3-min.png",
  address:
    "LOT 69, 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60108818233?text=Hi,%20I%20want%20to%20know%20more%20about%20Kang%20Ke%20Palm%20Sdn%20Bhd!",
  email: "mailto:financekangkepalmsdnbhd@gmail.com",
};

export default function YFSGroup() {
  return (
    <Box>
      <Subsidiaries
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
