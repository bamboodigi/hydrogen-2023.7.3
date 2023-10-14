
export function JacketPanel({ formData, methods, ...props }) {

  const { text, img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);

  const [fontStyle, setFontStyle] = useState(text.primary);
  const [fontSecondaryStyle, setFontSecondaryStyle] = useState(text.secondary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);


  return (
    <>
      <div ref={containerRef} className="h-full w-full overflow-x-hidden flex flex-col items-center justify-between">
        <div className="mt-2">
          <p id="main-text" className="text-center" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
          <div className="flex flex-wrap">
            <p id="text2" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.secondary.text.length > 0 ? formData.text.secondary.text : formData.text.secondary.placeholder}</p>
            <p id="text3" className="w-1/2 mb-3 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.third.text.length > 0 ? formData.text.third.text : formData.text.third.placeholder}</p>
            <p id="text4" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.fourth.text.length > 0 ? formData.text.fourth.text : formData.text.fourth.placeholder}</p>
            <p id="text5" className="w-1/2 mb-3 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.fifth.text.length > 0 ? formData.text.fifth.text : formData.text.fifth.placeholder}</p>
            <p id="text6" className="w-1/2" style={{ ...fontSecondaryStyle }}>{formData.text.sixth.text.length > 0 ? formData.text.sixth.text : formData.text.sixth.placeholder}</p>
            <p id="text7" className="w-1/2 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.seventh.text.length > 0 ? formData.text.seventh.text : formData.text.seventh.placeholder}</p>
          </div>
        </div>
        <div id="flag" className="w-full" style={flagStyle}></div>
      </div>
    </>
  );
}
