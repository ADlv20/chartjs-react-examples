import React from "react";
import { TwitterEmbed } from "react-social-media-embed";
import "../index.css";

const TwitterCard = () => {
  return (
    <div className="twitter-card">
      <TwitterEmbed
        url="https://twitter.com/NDRFHQ/status/1545619306289176577"
        width={400}
      />
      <div className="twittercard-div">
        <h1 className="infoplaceholder">Tweet</h1>
        <p className="tweet-textt">
          #AmarnathYatra22 #RescueOps #Update 🔸#Cloudburst leads
          #flashflood/landslide 🔸At Lower Holy Cave of Amarnath (J&amp;K)
          🔸Rescuers save 5 precious lives 🔸Joint Search &amp; Rescue Ops
          continues #आपदा_सेवा_सदैव_सर्वत्र @HMOIndia @BhallaAjay26 @AtulKarwal
          @PIBHomeAffairs @PIBSrinagar https://t.co/XhjSjJiOde
        </p>
      </div>
    </div>
  );
};

export default TwitterCard;
