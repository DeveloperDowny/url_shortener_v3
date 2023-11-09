import { storeLinkRequestVaidator } from "@/lib/validators/storeLinkRequestValidator";
import { postgresLinkRepository } from "@/repositories/implementations/postgres/link-repository";
import { NextRequest, NextResponse } from "next/server";
import Link from "@/entities/Link";
import APIRequests from "@/app/_utils/api";

export async function POST(request: NextRequest) {
  const body = await request.json();

  let userID, longLink;

  try {
    const parsedBody = storeLinkRequestVaidator.parse(body);
    userID = parsedBody.userID;
    longLink = parsedBody.longLink;
  } catch (err) {
    console.error("ERROR: Failed to parse link data:", err);
    return new Response(null, { status: 422 });
  }

  try {
    const link = new Link({ userID, longLink });
    // check how to get shortcode
    const mshortCode = link.longLinkHash;
    console.log("mshortCode", mshortCode);

    // save from front end not here
    // const res = await APIRequests.storeLink(mshortCode, longLink);

    await postgresLinkRepository.storeLink(link);
    return NextResponse.json({ link }, { status: 201 });
  } catch (err) {
    console.error("ERROR: Failed to save link:", err);
    return new Response(null, { status: 500 });
  }
}
