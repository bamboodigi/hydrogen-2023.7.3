
export function Flag({ formData, methods, ...props }) {

  const { img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);

  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);


  return (
    <>
      <div ref={containerRef} className="h-full w-full overflow-x-hidden flex items-center justify-center">
        <div id="flag" className="flex-1 h-full w-full" style={flagStyle}></div>
      </div>
    </>
  );
}