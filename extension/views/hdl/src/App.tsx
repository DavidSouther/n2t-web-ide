import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { VSCodeButton, VSCodeCheckbox } from "@vscode/webview-ui-toolkit/react";
import * as Not from "@computron5k/simulator/projects/project_01/01_not.js";
import { makeVisualizationsWithId } from "@computron5k/components/chips/visualizations.js";
import { Clockface } from "@computron5k/components/clockface.js";
import { FullPinout } from "@computron5k/components/pinout.js";
import { useChipPageStore } from "@computron5k/components/stores/chip.store.js";

function App() {
  const { state, actions } = useChipPageStore();

  const [hdl, setHdl] = useState(Not.sol);
  const [loaded, setLoaded] = useState(false);

  const compile = useCallback(
    async (hdl: string) => {
      setHdl(hdl);
      await actions.updateFiles({ hdl, tst: "// No test", cmp: "" });
    },
    [setHdl, actions]
  );

  const onMessage = useCallback(
    (event: MessageEvent<Partial<{ nand2tetris: boolean; hdl: string }>>) => {
      if (!event.data?.nand2tetris) return;
      if (event.data.hdl) compile(event.data.hdl ?? "");
      setLoaded(true);
    },
    [compile]
  );

  useEffect(() => {
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [onMessage]);

  useEffect(() => {
    acquireVsCodeApi().postMessage({ nand2tetris: true, ready: true });
  }, []);

  const [useBuiltin, setUseBuiltin] = useState(false);
  const toggleUseBuiltin = async () => {
    if (useBuiltin) {
      compile(hdl);
      setUseBuiltin(false);
    } else {
      actions.useBuiltin();
      setUseBuiltin(true);
    }
  };

  const clockActions = useMemo(
    () => ({
      toggle() {
        actions.clock();
      },
      reset() {
        actions.reset();
      },
    }),
    [actions]
  );

  const chipButtons = (
    <>
      <VSCodeCheckbox onChange={toggleUseBuiltin}>Use Builtin</VSCodeCheckbox>
      <fieldset role="group">
        <VSCodeButton
          onClick={actions.eval}
          onKeyDown={actions.eval}
          disabled={!state.sim.pending}
        >
          Eval
        </VSCodeButton>
        <VSCodeButton
          onClick={clockActions.toggle}
          style={{ maxWidth: "initial" }}
          disabled={!state.sim.clocked}
        >
          Clock:{"\u00a0"}
          <Clockface />
        </VSCodeButton>
        <VSCodeButton
          onClick={clockActions.reset}
          style={{ maxWidth: "initial" }}
          disabled={!state.sim.clocked}
        >
          Reset
        </VSCodeButton>
      </fieldset>
    </>
  );

  const visualizations: [string, ReactNode][] = makeVisualizationsWithId({
    parts: state.sim.chip,
  });

  const pinsPanel = (
    <>
      <h3>Chip {state.controls.chipName}</h3>
      {chipButtons}
      {state.sim.invalid ? (
        <p>Invalid Chip</p>
      ) : (
        <>
          <FullPinout sim={state.sim} toggle={actions.toggle} />
          <h4>Visualizations</h4>
          {visualizations.length > 0 ? (
            visualizations.map(([p, v]) => <div key={p}>{v}</div>)
          ) : (
            <p>None</p>
          )}
        </>
      )}
      {/* DEBUG  */}
      <textarea style={{ display: "none" }}>{hdl}</textarea>
    </>
  );

  return loaded ? (
    pinsPanel
  ) : (
    <>
      <h3>HDL</h3>
      <p>Open an HDL chip to begin</p>
    </>
  );
}

export default App;