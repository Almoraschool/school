// @ts-nocheck
"use client";
import { client_query_function } from "@/lib/graphql";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useWindowSize } from "react-use";

const Page = () => {
  console.log("hiiiii");
  const { width, height } = useWindowSize();

  const getPlayerDimensions = () => {
    if (width >= 1024) {
      return { width: 400, height: 220 };
    } else if (width >= 768) {
      return { width: 400, height: 200 };
    } else {
      return { width: 320, height: 180 };
    }
  };

  const query = `
query MyQuery {
  almoraVideoGalleries {
    haldwaniVideo {
      id
      url
    }
  }
}
  
  `;

  useEffect(() => {
    getVideos();
  }, []);

  const [videos, setVideos] = useState();

  async function getVideos() {
    const videos = await client_query_function(query);
    setVideos(videos?.almoraVideoGalleries[0]?.haldwaniVideo?.url);
    console.log(
      videos?.almoraVideoGalleries[0]?.haldwaniVideo?.url,
      "🟢🟢🟢🟢🟢"
    );
  }

  const { width: playerWidth, height: playerHeight } = getPlayerDimensions();

  return (
    <section className="container py-10 grid gap-4 grid-cols-1 md:grid-cols-2 ">
      {videos?.map((u, i) => (
        <div style={{ width: playerWidth, height: playerHeight }} key={i}>
          <ReactPlayer url={u} width="100%" height="100%" />
        </div>
      ))}
    </section>
  );
};

export default Page;
