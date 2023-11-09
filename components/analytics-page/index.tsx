// "use client";
import { Session } from "next-auth";
import { FiEdit3 } from "react-icons/fi";
import { UserLinkList } from "./links";
// import { useEffect } from "react";
import APIRequests from "@/app/_utils/api";
import TableComponent from "../Table";
import Maps from "../Maps";

export async function AnalyticsPage({ session }: { session: Session }) {
  const analyticsRes = await APIRequests.getAnalytics().catch((err) => {
    console.log(err);
    return null;
  });

  // this data is availabe at server only
  // check how does fs is used by postgre client

  if (!analyticsRes) return <></>;
  console.log("analyticsRes.data", analyticsRes.data);
  // useEffect(() => {
  //   console.log("analytics page");
  //   return () => {};
  // }, []);

  // const fetchAna = async () => {
  //   console.log("in anal page fetc");

  //   const res = await APIRequests.getAnalytics().catch((err) => {
  //     console.log(err);
  //     return null;
  //   });
  //   if (!res) return;
  //   console.log(res.data);
  // };
  // useEffect(() => {
  //   console.log("analytics page");
  //   fetchAna();

  //   return () => {};
  // }, []);

  return (
    // <main className="z-10 min-h-screen max-w-xs md:max-w-md mx-auto text-center text-slate-500 pt-16 md:pt-[15%]">
    // <main className="z-10 min-h-screen  text-center text-slate-500 pt-16 md:pt-[15%] w-full">
    <main className="z-10 min-h-screen  text-center text-slate-500  w-full">
      {/* <div className="shadow-lg pb-4 border border-2 rounded-lg"> */}

      <h1 className="text-left indent-2 font-bold text-slate-700 text-lg pt-[2rem] ml-[4rem]">
        Analytics
      </h1>

      <div className="shadow-lg pb-4  rounded-lg mx-[4rem]">
        {/* <div className="w-fit mx-auto mt-32"> */}

        {/* <div className="my-4 border-t border-slate-200 border-1 w-11/12 mx-auto" /> */}
        <div className="my-4   w-11/12 mx-auto" />

        <div className="px-[1rem]">
          {/* @ts-ignore: Unsing an async component */}

          {/* {session.user?.email && <UserLinkList userID={session.user._id} />} */}
          {session.user?.email && (
            <TableComponent analyticsData={analyticsRes.data} />
          )}
        </div>
      </div>
      <h1 className="text-left indent-2 font-bold text-slate-700 text-lg pt-[2rem] ml-[4rem]">
        View On Map
      </h1>

      <div className="shadow-lg pb-4  rounded-lg mx-[4rem] mb-4">
        {/* <div className="w-fit mx-auto mt-32"> */}

        {/* <div className="my-4 border-t border-slate-200 border-1 w-11/12 mx-auto" /> */}
        <div className="my-4   w-11/12 mx-auto" />

        <div className="px-[1rem]">
          {/* @ts-ignore: Unsing an async component */}

          {/* {session.user?.email && <UserLinkList userID={session.user._id} />} */}
          {session.user?.email && <Maps analyticsData={analyticsRes.data} />}
        </div>
      </div>
    </main>
  );
}
