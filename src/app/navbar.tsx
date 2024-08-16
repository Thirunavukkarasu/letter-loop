import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          LetterLoop.
        </a>
        <div className="space-x-4">
          <aside className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {user ? "Dashboard" : "Get Started"}
              </span>
            </Link>
            {user ? <UserButton afterSignOutUrl="/" /> : null}
            <MenuIcon className="md:hidden" />
          </aside>
        </div>
      </div>
    </nav>
  );
}
