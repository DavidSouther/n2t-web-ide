import { FileSystem, reset } from "@davidsouther/jiffies/lib/esm/fs.js";

import * as Memory from "./01_memory.js";
import * as CPU from "./02_cpu.js";
import * as Computer from "./03_computer.js";
import * as Screen from "./04_screen.js";
import * as Keyboard from "./05_keyboard.js";
import * as DRegister from "./06_d_register.js";
import * as ARegister from "./07_a_register.js";
import * as ROM32K from "./08_rom32k.js";

export const CHIPS = {
  Memory: {
    "Memory.hdl": Memory.hdl,
    "Memory.tst": Memory.tst,
    "Memory.cmp": Memory.cmp,
  },
  CPU: {
    "CPU.hdl": CPU.hdl,
    "CPU.tst": CPU.tst,
    "CPU.cmp": CPU.cmp,
  },
  Computer: {
    "Computer.hdl": Computer.hdl,
    "Computer.tst": Computer.tst,
    "Computer.cmp": Computer.cmp,
    "Max.hack": Computer.hack,
  },
};

export const BUILTIN_CHIPS = {
  Screen: Screen.hdl,
  Keyboard: Keyboard.hdl,
  DRegister: DRegister.hdl,
  ARegister: ARegister.hdl,
  ROM32K: ROM32K.hdl,
};

export async function resetFiles(fs: FileSystem): Promise<void> {
  await fs.pushd("/projects/05");
  await reset(fs, CHIPS);
  await fs.popd();
}
