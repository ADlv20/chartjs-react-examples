import React from "react";
import { TwitterEmbed } from "react-social-media-embed";
import "../index.css";

const TwitterCard = (props) => {
  const tweetData = props.tweetData;
  return (
    <div className="twitter-card">
      <TwitterEmbed
        url="https://twitter.com/NDRFHQ/status/1546010003659599874"
        width={400}
      />
      <div className="twittercard-div-holder">
        <div className="twittercard-div">
          <h1 className="infoplaceholder">Tweet Info</h1>
          <p className="tweet-text">Tweet ID: {tweetData.id}</p>
          <p className="tweet-text">Tweet Date: {tweetData.date}</p>
          <p className="tweet-text">Tweet Time: {tweetData.time}</p>
          <p className="tweet-text">Tweet user: {tweetData.username}</p>
        </div>

        <div className="twittercard-div">
          <h1 className="infoplaceholder">Tweet</h1>
          <p className="tweet-text">{tweetData.tweet}</p>
        </div>
        <div className="twittercard-div">
          <h1 className="infoplaceholder">Tweet Info</h1>
          <p className="tweet-text">
            #AmarnathYatra22 #RescueOps #Update 🔸#Cloudburst leads
            #flashflood/landslide 🔸At Lower Holy Cave of Amarnath (J&amp;K)
            🔸Rescuers save 5 precious lives 🔸Joint Search &amp; Rescue Ops
            continues #आपदा_सेवा_सदैव_सर्वत्र @HMOIndia @BhallaAjay26
            @AtulKarwal @PIBHomeAffairs @PIBSrinagar https://t.co/XhjSjJiOde
          </p>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
