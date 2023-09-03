"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Fade,
  Grid,
  Backdrop,
  Modal,
  Typography,
} from "@mui/material";
import Subdiaries from "../component/subdiaries";
const SubData = {
  Logo: "/YFSLogo-min.png",
  Alt: "YFS Group Sdn Bhd",
  company: "Yun Fung Sang Group Sdn Bhd",
  description: "WHOSALE OF FERTILIZER OF AGROCHEMICAL PRODUCT",
  vision:
    "To be a premier company with focus on positive contribution to economic development and agricultural growth of the country.",
  mission:
    "Supporting the development of agriculture through the wholesale of fertilizer and agrochemical products to support agricultural activities for crop production on a fee or contract basis.",
  pdfDownload: "/PDFDL.jpeg",
  bgHero: "/yfsHero.jpg",
  image1: "/YFS1.png",
  image2: "/YFS2.png",
  image3: "/YFS3.png",
  address:
    "LOT 70 & 71, SIBUGA INDUSTRIAL CENTRE, JALAN LINTAS SIBUGA, 90000 SANDAKAN, SABAH",
  contact:
    "https://wa.me/60138160355?text=Hi,%20I%20want%20to%20know%20more%20about%20YFS%20Group!",
  email: "mailto:marketing@yunfungsang.com",
};

export default function YFSGroup() {
  return (
    <Box>
      <Subdiaries
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
