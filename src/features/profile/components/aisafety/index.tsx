import { CollapsibleList } from "@/components/collapsible-list";

import { AISafetyProjects } from "../../data/aisafety";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { AISafetyItem } from "./aisafety-item";

export function AISafety() {
  return (
    <Panel id="aisafety">
      <PanelHeader>
        <PanelTitle>
          AI Safety
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({AISafetyProjects.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <CollapsibleList
        items={AISafetyProjects}
        max={4}
        renderItem={(item) => <AISafetyItem project={item} />}
      />
    </Panel>
  );
}
