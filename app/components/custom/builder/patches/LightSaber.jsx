
export function LightSaber({ formData, methods, ...props }) {
  const { lightsaber } = initVisualizerStyle(formData);
  // Create a ref to access the container element

  const containerRef = useRef(null);

  const [hiltStyle, setHiltStyle] = useState(lightsaber.hilt);
  const [bladeStyle, setBladeStyle] = useState(lightsaber.blade);

  return (
    <>
      <div ref={containerRef} className="h-full w-full text-center overflow-x-hidden flex items-center justify-start">
        <div id="hilt" className="w-0 transition-background duration-[.75s]" style={{ ...hiltStyle }}></div>
        <div id="blade" className="w-0 transition-width transition-background duration-[.75s]" style={{ ...bladeStyle }}></div>
      </div>
    </>
  );
}
