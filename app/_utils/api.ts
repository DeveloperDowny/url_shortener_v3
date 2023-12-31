import Link from "@/entities/Link";
import axios from "axios";

// const isTestMode = true;
const isTestMode = false;

const API = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  baseURL: "https://linkly-back.onrender.com/api/v1",
});

API.interceptors.request.use((req) => {
  req.headers.Authorization = `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDljMzYyZTk1ZDNhMWYxNGZmYTNiNCIsImlhdCI6MTY5OTMzMjk2MiwiZXhwIjoxNzAxOTI0OTYyfQ.uK4GEM7pzKjEkEZtzNUJashcH35udpBnz0Tt6Y-H-ik"}`;
  return req;
});

class APIRequests {
  static saveLink = (longUrl, mshortCode) => {
    return API.post("/shorturls", {
      longUrl: longUrl,
      description: "test",
      mshortCode: mshortCode,
    });
  };

  static storeLink = (mshortCode: string, link: string) =>
    API.post("/shorturls", {
      longUrl: link,
      description: "",
      mshortCode,
    });
  static getLocation = () =>
    axios.get("https://ipinfo.io?token=9c2da51b4c1229");

  static storeAnalytics = (linkHash, ipData) => {
    console.log("linkHash", linkHash);

    return API.post(`/analytics/store_a_v2/${linkHash}`, {
      data: ipData,
    });
  };
  static getAnalytics = () => API.get(`/analytics/get_a_v2`);
}

export default APIRequests;
