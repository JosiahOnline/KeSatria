"use client";
import React, { useState } from "react";
import {
  Box,
} from "@mui/material";
import Subsidiaries from "../component/subsidiaries";
const SubData = {
  Logo: "/Logo/FutureHome-min.png",
  Alt: "Future Home (MM2H)",
  company: "Future Home (MM2H)",
  description: "HOME STAY, TOOUR OPERATOR ACTIVITIES & REAL ESTATE SERVICES",
  vision:
    "To establish Future Home (MM2H) Sdn Bhd as a prominent player in the MM2H industry, renowned for its exceptional customer-centric approach, innovative offerings, and ethical business practices.",
  mission:
    "Our mission is to be the preferred choice for individuals seeking a second home in Malaysia, offering unparalleled hospitality, enriching experiences, and personalized services that exceed expectations.",
  pdfDownload: "",
  bgHero: "/FH/FHHero-min.png",
  image1: "/FH/FH1-min.png",
  image2: "/FH/FH2-min.png",
  image3: "/FH/FH3-min.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60108818233?text=Hi,%20I%20want%20to%20know%20more%20about%20Future%20Home!",
  email: "mailto:futurehome.mm2h@gmail.com",
};

export default function FutureHome() {
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
