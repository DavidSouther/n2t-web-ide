import { t } from "@lingui/macro";
import { lazy } from "react";

const Chip = lazy(() => import("./pages/chip"));
const CPU = lazy(() => import("./pages/cpu"));
const ASM = lazy(() => import("./pages/asm"));
const BITMAP = lazy(() => import("./pages/bitmap"));
const VM = lazy(() => import("./pages/vm"));
const Util = lazy(() => import("./pages/util"));
const Guide = lazy(() => import("./pages/user_guide"));
const About = lazy(() => import("./pages/about"));

export const LAST_ROUTE_KEY = "lastRoute";

export const TOOLS: Record<string, string> = {
  chip: "Hardware Simulator",
  cpu: "CPU Emulator",
  asm: "Assembler",
  VM: "VM Emulator",
  bitmap: "Bitmap Editor",
};

const URLs = {
  chip: {
    href: "/chip",
    tooltip: TOOLS["chip"],
    icon: "memory",
    target: <Chip />,
  },
  cpu: {
    href: "/cpu",
    tooltip: TOOLS["cpu"],
    icon: "developer_board",
    target: <CPU />,
  },
  asm: {
    href: "/asm",
    tooltip: TOOLS["asm"],
    icon: "list_alt",
    target: <ASM />,
  },
  // { href: "/vm", link: `VM`, icon: "computer", target: <VM /> },
  bitmap: {
    href: "/bitmap",
    tooltip: TOOLS["bitmap"],
    icon: "grid_on",
    target: <BITMAP />,
  },
  util: {
    href: "/util",
    tooltip: t`Converter Tool`,
    icon: "function",
    target: <Util />,
  },
  guide: {
    href: "/guide",
    tooltip: t`Guide`,
    icon: "menu_book",
    target: <Guide />,
  },
  vm: { href: "/vm", link: `VM`, icon: "computer", target: <VM /> },
  about: { href: "/about", tooltip: t`About`, icon: "info", target: <About /> },
};

export default URLs;