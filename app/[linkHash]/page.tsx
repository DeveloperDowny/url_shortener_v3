import { postgresLinkRepository } from "@/repositories/implementations/postgres/link-repository";
import { redirect } from "next/navigation";
import APIRequests from "../_utils/api";

interface IRedirectToLongLinkProps {
  params: {
    linkHash: string;
  };
}

export default async function RedirectToLongLink({
  params,
}: IRedirectToLongLinkProps) {
  // with the redirect also store the analytics
  const ipData = await APIRequests.getLocation();
  console.log("ipData", ipData.data);

  const linkHash = params.linkHash;
  const saveAnalytics = await APIRequests.storeAnalytics(
    linkHash,
    ipData.data
  ).catch((e) => console.log("e from store", e));
  const link = await postgresLinkRepository.queryLinkByHash(linkHash);
  if (!link) return <h1>URL `{linkHash}` Not found!</h1>;
  redirect(link.longLink);
}
