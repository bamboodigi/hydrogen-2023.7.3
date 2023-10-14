
export function DivisionJacketPanel({ formData, methods, ...props }) {

  const { text, img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);

  const [fontStyle, setFontStyle] = useState(text.primary);
  const [fontSecondaryStyle, setFontSecondaryStyle] = useState(text.secondary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);

  return (
    <>
      <div className="h-full w-full overflow-x-hidden flex flex-col items-center justify-between">
        <div ref={containerRef} className="w-full h-auto">
          <p id="main-text" className="text-center" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
          <div className="flex flex-wrap text-center">
            <p id="text2" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.secondary.text.length > 0 ? formData.text.secondary.text : formData.text.secondary.placeholder}</p>
            <p id="text3" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.third.text.length > 0 ? formData.text.third.text : formData.text.third.placeholder}</p>
          </div>
        </div>
        <div id="flag" className="w-full" style={flagStyle}></div>
      </div>
    </>
  );
}