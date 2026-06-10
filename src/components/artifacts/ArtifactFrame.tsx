// components/artifacts/ArtifactFrame.tsx

type ArtifactFrameProps = {
    title: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
};

export function ArtifactFrame({ title, children, footer }: ArtifactFrameProps) {
    return (
        <section className="artifact-frame">
            <header className="artifact-frame__header">
                <h2>{title}</h2>

                <div className="artifact-frame__controls">
                    <button aria-label="Pause">Ⅱ</button>
                    <button aria-label="Reset">↻</button>
                </div>
            </header>

            <div className="artifact-frame__body">{children}</div>

            {footer && <footer className="artifact-frame__footer">{footer}</footer>}
        </section>
    );
}

// components/artifacts/ArtifactExplanation.tsx

type ArtifactExplanationProps = {
    label: string;
    value?: string;
    children: React.ReactNode;
};

export function ArtifactExplanation({
                                        label,
                                        value,
                                        children,
                                    }: ArtifactExplanationProps) {
    return (
        <div className="artifact-explanation">
            <div className="artifact-explanation__meta">
                {label}
                {value && <span> · {value}</span>}
            </div>
            <p>{children}</p>
        </div>
    );
}