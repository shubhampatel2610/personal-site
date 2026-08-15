const GridBackdrop = () => {
  const wrapperClasses = "fixed inset-0 pointer-events-none z-0";
  const dotGridStyle: React.CSSProperties = {
    backgroundImage: "radial-gradient(var(--border-visible) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
    opacity: 0.6,
  };

  return (
    <div className={wrapperClasses} style={{ backgroundColor: "var(--site-bg)" }}>
      <div className="absolute inset-0" style={dotGridStyle} />
    </div>
  );
};

export default GridBackdrop;
