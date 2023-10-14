
export function IDPanel({ formData, methods, ...props }) {

  const { text, img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);
  const containerSecondaryRef = useRef(null);

  const [fontStyle, setFontStyle] = useState(text.primary);
  const [fontSecondaryStyle, setFontSecondaryStyle] = useState(text.secondary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);
  const [maskStyle, setMaskStyle] = useState(img.mask);


  return (
    <>
      {formData.size.current == '6” x 2”' ? (
        <div className="w-full h-full flex">
          <div className="w-1/2 flex items-center px-2">
            {formData.img.type.toLowerCase() === "lazer cut flag" ? (
              <div id="mask" className="h-full w-full" style={maskStyle}>
                <div id="glow"
                  className={classNames(
                    formData.upsells.glowBorder ? "block" : "hidden",
                    "h-full w-full"
                  )}
                  style={{ backgroundImage: `url("${formData.img.color.mask.glow}")`, backgroundSize: 'cover', position: 'absolute', backgroundPosition: 'center' }}
                ></div>
              </div>
            ) : (
              <div id="flag" className="w-full" style={flagStyle}></div>
            )}
          </div>
          <div className="flex flex-col w-1/2 gap-2" style={{}}>
            <div ref={containerRef} className=" h-3/5 text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="pt-2.5 inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
            <div ref={containerSecondaryRef} className="h-2/5 text-center overflow-x-hidden flex items-end justify-center">
              <p id="secondary-text" className="inline-block h-full whitespace-nowrap" style={{ ...fontSecondaryStyle }}>
                {formData.text.secondary.text.length > 0 ? formData.text.secondary.text : 'APOS  NKDA'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={classNames(
          formData.size.current === '3.5” x 2”' ? "gap-2" :
            formData.size.current === '4” x 2”' ? "gap-2" : "",
          "flex flex-col w-full h-full"
        )}>
          <div ref={containerRef} className="h-1/2 justify-center overflow-y-hidden flex items-center">
            <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
          </div>
          <div className={classNames(
            formData.size.current === '3.5” x 2”' ? "px-1" : "",
            "flex h-1/2 items-center"
          )}>
            {formData.img.type.toLowerCase() === "lazer cut flag" ? (
              <div id="mask"
                className={classNames(
                  formData.size.current === '3” x 2”' ? "min-w-3/5" : "min-w-1/2",
                  "flex-1 max-h-full max-w-full h-full w-full"
                )}
                style={maskStyle}>
                <div id="glow"
                  className={classNames(
                    formData.upsells.glowBorder ? "block" : "hidden",
                    "h-full w-full"
                  )}
                  style={{ backgroundImage: `url("${formData.img.color.mask.glow}")`, backgroundSize: 'cover', position: 'absolute', backgroundPosition: 'center' }}
                ></div>
              </div>
            ) : (
              <div id="flag"
                className={classNames(
                  formData.size.current === '3” x 2”' ? "min-w-3/5" : "min-w-1/2",
                  "flex-1 max-h-full max-w-full h-full"
                )}
                style={flagStyle}></div>
            )}
            <div ref={containerSecondaryRef} className={classNames(
              formData.size.current === '3” x 2”' ? "w-2/5" :
                formData.size.current === '3.5” x 2”' ? "w-1/2" : "w-1/2",
              "flex items-center justify-center h-full"
            )}>
              <p id="secondary-text" className={classNames(
                formData.size.current === '6” x 3”' ? "pt-3" :
                  formData.size.current === '4” x 2”' ? "pt-3" :
                    formData.size.current === '3.5” x 2”' ? "pt-2" : "pt-2 pl-2",
                ""
              )}
                style={{ ...fontSecondaryStyle }}>
                {formData.text.secondary.text.length > 0 ? formData.text.secondary.text.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />}
                    {line}
                  </React.Fragment>
                )) :
                  formData.text.secondary.placeholder.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <br />}
                      {line}
                    </React.Fragment>
                  ))
                }
              </p>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}