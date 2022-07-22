import React, { useState } from "react";
import TwitterChakra from "./Components/TwitterChakra";
import "./index.css";

function App() {
  const [tweetData, setTweetData] = useState({
    id: 1545619306289176600,
    conversation_id: "1545619306289176577",
    created_at: "2022-07-09 09:32:13 IST",
    date: "2022-07-09",
    time: "09:32:13",
    timezone: "+0530",
    user_id: 2791137282,
    username: "ndrfhq",
    name: "NDRF 🇮🇳",
    place: "",
    tweet:
      "#AmarnathYatra22 #RescueOps #Update  🔸#Cloudburst leads #flashflood/landslide 🔸At Lower Holy Cave of Amarnath (J&amp;K) 🔸Rescuers save 5 precious lives 🔸Joint Search &amp; Rescue Ops continues  #आपदा_सेवा_सदैव_सर्वत्र  @HMOIndia @BhallaAjay26 @AtulKarwal @PIBHomeAffairs @PIBSrinagar  https://t.co/XhjSjJiOde",
    language: "en",
    mentions: [
      {
        screen_name: "hmoindia",
        name: "गृहमंत्री कार्यालय, hmo india",
        id: "2541363451",
      },
      {
        screen_name: "bhallaajay26",
        name: "ajay bhalla",
        id: "741892853362630658",
      },
      {
        screen_name: "atulkarwal",
        name: "atul karwal",
        id: "4824143321",
      },
      {
        screen_name: "pibhomeaffairs",
        name: "spokesperson, ministry of home affairs",
        id: "753189526152081408",
      },
      {
        screen_name: "pibsrinagar",
        name: "pib in jammu kashmir & ladakh",
        id: "902109287480037376",
      },
    ],
    urls: [],
    photos: [],
    replies_count: 2,
    retweets_count: 21,
    likes_count: 60,
    hashtags: [
      "amarnathyatra22",
      "rescueops",
      "update",
      "cloudburst",
      "flashflood",
      "आपदा_सेवा_सदैव_सर्वत्र",
    ],
    cashtags: [],
    link: "https://twitter.com/NDRFHQ/status/1545619306289176577",
    retweet: false,
    quote_url: "",
    video: 1,
    thumbnail:
      "https://pbs.twimg.com/ext_tw_video_thumb/1545619226710675456/pu/img/V7xtbj-kdxnRzs15.jpg",
    near: "",
    geo: "",
    source: "",
    user_rt_id: "",
    user_rt: "",
    retweet_id: "",
    reply_to: [],
    retweet_date: "",
    translate: "",
    trans_src: "",
    trans_dest: "",
  });
  return (
    <div className="App">
      <TwitterChakra tweetData={tweetData} />
    </div>
  );
}

export default App;
