import { rounded } from "@davidsouther/jiffies/lib/esm/dom/css/border.js";
import { ReactNode, useCallback, useMemo, useState } from "react";

import {
  Format,
  FORMATS,
  Memory as MemoryChip,
} from "@nand2tetris/simulator/cpu/memory.js";
import { asm } from "@nand2tetris/simulator/util/asm.js";
import { bin, dec, hex } from "@nand2tetris/simulator/util/twos.js";
import InlineEdit from "../inline_edit.js";
import VirtualScroll, { VirtualScrollSettings } from "../virtual_scroll.js";
import { useClockReset } from "../clockface.js";

const ITEM_HEIGHT = 34;

export const MemoryBlock = ({
  memory,
  jmp = { value: 0 },
  highlight = -1,
  editable = false,
  format = dec,
  onChange = () => undefined,
}: {
  jmp?: { value: number };
  memory: MemoryChip;
  highlight?: number;
  editable?: boolean;
  format?: (v: number) => string;
  onChange?: (i: number, value: string, previous: number) => void;
}) => {
  const settings = useMemo<Partial<VirtualScrollSettings>>(
    () => ({
      count: Math.min(memory.size, 20),
      maxIndex: memory.size,
      itemHeight: ITEM_HEIGHT,
      startIndex: jmp.value,
    }),
    [memory.size, jmp]
  );
  const get = useCallback(
    (offset: number, count: number) =>
      memory
        .range(offset, offset + count)
        .map((v, i) => [i + offset, v] as [number, number]),
    [memory]
  );
  const row = useCallback(
    ([i, v]: [number, number]) => (
      <MemoryCell
        index={i}
        value={format(v)}
        editable={editable}
        highlight={i === highlight}
        onChange={onChange}
      />
    ),
    [format, editable, highlight, onChange]
  );

  return (
    <VirtualScroll<[number, number], ReactNode>
      settings={settings}
      get={get}
      row={row}
      rowKey={([i]) => i}
    />
  );
};

export const MemoryCell = ({
  index,
  value,
  highlight = false,
  editable = false,
  onChange = () => undefined,
}: {
  index: number;
  value: string;
  highlight?: boolean;
  editable?: boolean;
  onChange?: (i: number, value: string, previous: number) => void;
}) => (
  <div style={{ display: "flex", height: "100%" }}>
    <code
      style={{
        ...rounded("none"),
        ...(highlight
          ? { background: "var(--code-kbd-background-color)" }
          : {}),
      }}
    >
      {hex(index)}
    </code>
    <code
      style={{
        flex: "1",
        textAlign: "right",
        ...rounded("none"),
        ...(highlight
          ? { background: "var(--code-kbd-background-color)" }
          : {}),
      }}
    >
      {editable ? (
        <InlineEdit
          value={value}
          onChange={(newValue: string) =>
            onChange(index, newValue, Number(value))
          }
        />
      ) : (
        <span>{value}</span>
      )}
    </code>
  </div>
);

export const Memory = ({
  name = "Memory",
  highlight = -1,
  editable = true,
  memory,
  format = "dec",
}: {
  name?: string;
  editable?: boolean;
  highlight?: number;
  memory: MemoryChip;
  format: Format;
}) => {
  const [fmt, setFormat] = useState(format);
  const [jmp, setJmp] = useState("");
  const [goto, setGoto] = useState({ value: 0 });

  const jumpTo = () => {
    setGoto({
      value: !isNaN(parseInt(jmp)) && isFinite(parseInt(jmp)) ? Number(jmp) : 0,
    });
  };

  // const { filePicker, fs } = useContext(AppContext);
  // const doLoad = useCallback(async () => {
  //   try {
  //     const file = await filePicker.select();
  //     await memory.load(fs, file);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [fs, filePicker, memory]);

  const doLoad = () => undefined;

  const doUpdate = useCallback(
    (i: number, v: string) => {
      memory.update(i, v, fmt ?? "dec");
    },
    [memory, fmt]
  );

  useClockReset(() => {
    setJmp("");
    setGoto({ value: 0 });
  });

  return (
    <article className="panel">
      <header>
        <div>{name}</div>
        <fieldset role="group">
          <button onClick={doLoad} className="flex-0">
            {/* <Icon name="upload_file" /> */}
            📂
          </button>
          <input
            style={{ width: "4em", height: "100%" }}
            placeholder="Goto"
            value={jmp}
            onKeyDown={({ key }) => key === "Enter" && jumpTo()}
            onChange={({ target: { value } }) => setJmp(value)}
          />
          <button onClick={jumpTo} className="flex-0">
            {/* <Icon name="move_down" /> */}
            ⤵️
          </button>
          {FORMATS.map((option) => (
            <label
              className="flex-0"
              key={option}
              role="button"
              aria-current={option === fmt}
            >
              <input
                type="radio"
                name={name}
                value={option}
                checked={option === fmt}
                onChange={() => setFormat(option)}
              />
              {option}
            </label>
          ))}
        </fieldset>
      </header>
      <MemoryBlock
        jmp={goto}
        memory={memory}
        highlight={highlight}
        editable={editable}
        format={(v: number) => doFormat(fmt, v)}
        onChange={doUpdate}
      />
    </article>
  );
};

export default Memory;

function doFormat(format: Format, v: number): string {
  switch (format) {
    case "bin":
      return bin(v);
    case "hex":
      return hex(v);
    case "asm":
      return asm(v);
    case "dec":
    default:
      return dec(v);
  }
}
