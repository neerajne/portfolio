import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiAws } from "react-icons/di";
import { SiNetlify } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
export const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsLine className="text-7xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiFirebase className="text-7xl" style={{ color: "#EB5B00" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJavascript className="text-7xl" style={{ color: "#F7DF1E" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiNetlify className="text-7xl" style={{ color: "#B0E0E6" }} />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-7xl" style={{ color: "#36578E" }} />
        </div>
      </div>
    </div>
  );
};
