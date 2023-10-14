
export function NameTape({ formData, methods, ...props }) {

  const { text, img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);
  const [fontStyle, setFontStyle] = useState(text.primary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);


  return (
    <>
      {formData.img.enabled ? (
        <div className="flex w-full h-full gap-2">
          <div className="flex flex-0  w-1/3 items-center" style={{}}>
            <div id="flag" className="mr-1 flex-1 max-h-full max-w-full w-auto h-auto" style={flagStyle}></div>
          </div>
          <div ref={containerRef} className="flex flex-1 w-2/3 justify-center overflow-y-hidden items-center">
            <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
          </div>
        </div>
      ) : (
        <div ref={containerRef} className="h-full w-full text-center overflow-x-hidden overflow-y-hidden flex items-center justify-center">
          <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </React.Fragment>
          )) :
            formData.text.primary.placeholder.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {index > 0 && <br />}
                {line}
              </React.Fragment>
            ))}</p>
        </div>
      )}
    </>
  );
}