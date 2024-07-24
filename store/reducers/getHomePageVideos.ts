import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { HomePageVideos } from "@/Types";
import { parseData } from "@/utils/parseData";
import { YOUTUBE_API_URL } from "@/utils/constants";


const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtubeApp/homePageVidoes",
    async (isNext: boolean, { getState }) => {
      const {
        youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
      } = getState() as RootState;
      const {
        data: { items, nextPageToken },
      } = await axios.get(
        `${YOUTUBE_API_URL}/search?maxResults=200&q="reactjs projects"&key=${API_KEY}&part=snippet&type=video&${
          isNext ? `pageToken=${nextPageTokenFromState}` : ""
        }`
      );
      console.log({ items, nextPageTokenFromState, nextPageToken });
      const parsedData: HomePageVideos[] = await parseData(items);
      return { parsedData: [...videos, ...parsedData], nextPageToken };
    }
  );