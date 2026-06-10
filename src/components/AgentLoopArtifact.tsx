import React = require("react");
import {ArtifactFrame, ArtifactExplanation} from "./artifacts/ArtifactFrame";
import {VerticalFlow} from "./artifacts/VerticalFlow";

export function AgentLoopArtifact() {
    return (
        <ArtifactFrame
            title="Agent loop"
            footer={
                <ArtifactExplanation label="decision" value="yes">
                    Is the task done? If no, plan the next step. If yes, hand the diff back to the human.
                </ArtifactExplanation>
            }
        >
            <VerticalFlow
                activeStep="observe"
                steps={[
                    { id: "prompt", label: "prompt" },
                    { id: "plan", label: "plan" },
                    { id: "tool", label: "tool" },
                    { id: "observe", label: "observe" },
                    { id: "done", label: "done?", variant: "decision" },
                ]}
            />
        </ArtifactFrame>
    );
}