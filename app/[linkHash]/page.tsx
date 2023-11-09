"use client";

// import { postgresLinkRepository } from "@/repositories/implementations/postgres/link-repository";
import { redirect, useParams, useRouter } from "next/navigation";
import APIRequests from "../_utils/api";

interface IRedirectToLongLinkProps {
  params: {
    linkHash: string;
  };
}

// export default async function RedirectToLongLink() {
//   // with the redirect also store the analytics
//   const ipData = await APIRequests.getLocation();
//   console.log("ipData", ipData.data);

//   const params = useParams();

//   const linkHash = params.linkHash;
//   console.log("linkHash", linkHash);

//   const saveAnalytics = await APIRequests.storeAnalytics(
//     linkHash,
//     ipData.data
//   ).catch((e) => console.log("e from store", e));

//   if (!saveAnalytics) return <h1>URL `{linkHash}` Not found!</h1>;
//   const link = saveAnalytics.data.link;
//   // const link = await postgresLinkRepository.queryLinkByHash(linkHash);
//   if (!link) return <h1>URL `{linkHash}` Not found!</h1>;
//   redirect(link.longLink);
// }

import React, { useEffect } from "react";

const page = () => {
  const params = useParams();
  const router = useRouter();

  const onAsyncf = async () => {
    // with the redirect also store the analytics
    const ipData = await APIRequests.getLocation();
    console.log("ipData", ipData.data);

    const linkHash = params.linkHash;
    console.log("linkHash", linkHash);

    const saveAnalytics = await APIRequests.storeAnalytics(
      linkHash,
      ipData.data
    ).catch((e) => console.log("e from store", e));

    if (!saveAnalytics) return <h1>URL `{linkHash}` Not found!</h1>;
    const link = saveAnalytics.data.link;
    // const link = await postgresLinkRepository.queryLinkByHash(linkHash);
    if (!link) return <h1>URL `{linkHash}` Not found!</h1>;
    console.log("link", link);

    // redirect(link);
    router.replace(link);
  };

  useEffect(() => {
    onAsyncf();
  }, []);
  return <div>Redirecting...</div>;
};

export default page;
