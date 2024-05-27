import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

type Props = {};

export default function navbar({}: Props) {
  return (
    <div className="navbar bg-neutral-content">
      <div className="flex-1">
        <a className="text-xl">Registration Portal</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-3xl btn-circle avatar"
          >
            <IoMdSettings />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>New linkweb</a>
            </li>
            <li>
              <a>Edit linkweb</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
