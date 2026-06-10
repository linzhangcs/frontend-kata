// components/artifacts/VerticalFlow.tsx
import React from 'react';
import {DiagramNode, DiagramArrow} from "./DiagramNode";

type Step = {
    id: string;
    label: string;
    variant?: "default" | "active" | "muted" | "decision";
};

type VerticalFlowProps = {
    steps: Step[];
    activeStep?: string;
};

export function VerticalFlow({ steps, activeStep }: VerticalFlowProps) {
    return (
        <div className="vertical-flow">
            {steps.map((step, index) => {
                const isActive = step.id === activeStep;

                return (
                    <React.Fragment key={step.id}>
                        <DiagramNode variant={isActive ? "active" : step.variant ?? "default"}>
                            {step.label}
                        </DiagramNode>

                        {index < steps.length - 1 && <DiagramArrow />}
                    </React.Fragment>
                );
            })}
        </div>
    );
}