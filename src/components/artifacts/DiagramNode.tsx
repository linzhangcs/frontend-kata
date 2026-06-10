// components/artifacts/DiagramNode.tsx

type DiagramNodeVariant = "default" | "active" | "muted" | "decision";

type DiagramNodeProps = {
    children: React.ReactNode;
    variant?: DiagramNodeVariant;
};

export function DiagramNode({
                                children,
                                variant = "default",
                            }: DiagramNodeProps) {
    return (
        <div className={`diagram-node diagram-node--${variant}`}>
            {children}
        </div>
    );
}

// components/artifacts/DiagramArrow.tsx

export function DiagramArrow() {
    return <div className="diagram-arrow">↓</div>;
}

