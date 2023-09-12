"use client";
import React from "react";
import {
  Box, CardMedia, Grid,
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
    "To be the preferred choice for individuals seeking a second home in Malaysia, offering unparalleled hospitality, enriching experiences, and personalized services that exceed expectations.",
  pdfDownload: "/PDF/Future Home (MM2H)_Company Profile-min.pdf",
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
        address={SubData.address}
        contact={SubData.contact}
        email={SubData.email}
      />
      <Grid container justifyContent="center" sx={{ padding: "20px" }} spacing="10px">
        <Grid item xs={12} md={4}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image1}
            alt={SubData.Alt}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image2}
            alt={SubData.Alt}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CardMedia
            sx={{
              borderRadius: "5px",
              aspectRatio: "16/9",
            }}
            component="img"
            image={SubData.image3}
            alt={SubData.Alt}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
