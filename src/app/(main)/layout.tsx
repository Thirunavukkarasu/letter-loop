import Link from "next/link";
import {
  FileX2Icon,
  Home,
  Package2,
  Settings2Icon,
  SparkleIcon,
  Users2Icon,
} from "lucide-react";

import { UserButton } from "@clerk/nextjs";

export default function MainLayout({ children }: any) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Letter Loop</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="audiences"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users2Icon className="h-4 w-4" />
                Audiences
              </Link>
              <Link
                href="newsletters"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <FileX2Icon className="h-4 w-4" />
                Newsletters
              </Link>
              <Link
                href="workflows"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <SparkleIcon className="h-4 w-4" />
                Workflows
              </Link>
              <Link
                href="settings"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings2Icon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <UserButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
