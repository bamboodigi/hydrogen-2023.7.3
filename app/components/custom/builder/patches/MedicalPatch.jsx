
export function MedicalPatch({ formData, methods, ...props }) {

  const { text, img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);

  const [fontStyle, setFontStyle] = useState(text.primary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);


  return (
    <>
      {formData.size.current == '3.5” x 2”' ? (
        <div className="flex w-full h-full gap-2">
          <div className="flex flex-0  w-[45%] items-center" style={{}}>
            <div id="icon" className="h-full w-full" style={flagStyle}>
              <div id="glow"
                className={classNames(
                  formData.upsells.glowBorder ? "block" : "hidden",
                  "h-full w-full"
                )}
                style={{ backgroundImage: `url("${formData.img.glow}")`, backgroundSize: 'cover', position: 'absolute', backgroundPosition: 'center' }}
              ></div>
            </div>
          </div>
          <div ref={containerRef} className="flex flex-1 w-[55%] justify-center overflow-y-hidden items-center">
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
        </div>
      ) : (
        <div className="h-full w-full text-center overflow-x-hidden overflow-y-hidden flex items-center justify-center">
          <div id="icon" className="h-4/5 w-4/5" style={flagStyle}>
            <div id="glow"
              className={classNames(
                formData.upsells.glowBorder ? "block" : "hidden",
                "h-full w-full"
              )}
              style={{ backgroundImage: `url("${formData.img.glow}")`, backgroundSize: 'cover', position: 'absolute' }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}