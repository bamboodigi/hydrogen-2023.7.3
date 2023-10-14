// Import React hooks and components
import { useState, useEffect, useRef } from 'react';
import React from 'react';

import { 
  IDPanel,
  NameTape,
  MedicalPatch,
  Flag,
  LightSaber,
  CustomPatch,
  JacketPanel,
  DivisionJacketPanel,
} from './builder';
import { NameTape } from './patches/NameTape';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Patch Visualizer element that shows a tailored patch
export function Visualizer({ formData, className, ...props }) {

  const { canvas, patch, text, img, lightsaber } = initVisualizerStyle(formData);
  // Create a ref to access the container element
  console.log(img.mask);
  //  console.log(lightsaber);
  const containerRef = useRef(null);
  const containerSecondaryRef = useRef(null);

  const [canvasStyle, setCanvasStyle] = useState(canvas);
  const [style, setStyle] = useState(patch);
  const [fontStyle, setFontStyle] = useState(text.primary);
  const [fontSecondaryStyle, setFontSecondaryStyle] = useState(text.secondary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.symbol : img.flag);
  const [hiltStyle, setHiltStyle] = useState(lightsaber.hilt);
  const [bladeStyle, setBladeStyle] = useState(lightsaber.blade);
  const [maskStyle, setMaskStyle] = useState(img.mask);
  console.log(img.mask);
  console.log(maskStyle);

  // A function to load an image and update the state with its URL
  const imageLoader = (obj, setState) => {
    //  console.log(obj);
    // console.log(obj.type);
    let mask = obj.mask ? obj.mask : null;
    let bgImg = obj.src;
    // console.log(mask)
    //  console.log(obj.type.toLowerCase());
    const img = new Image();
    switch (obj.type.toLowerCase()) {
      case "color":
      case 'image':
        console.log(bgImg);
        img.src = bgImg;
        img.onload = () => {
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${bgImg}")`,
          }));
        };
        break;
      case 'mask':
        if (mask) {
          img.src = mask;
          console.log(mask);
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${bgImg}")`,
            WebkitMaskImage: `url("${mask}")`,
            WebkitMaskPosition: 'center',
            WebkitSize: 'cover',
            maskImage: `url("${mask}")`,
            maskSize: `cover`,
            maskPosition: 'center',
          }));
        }
        break;
      case 'light saber':
        if (mask) {
          let newWidth = '';
          let newMarginLeft = '';
          let newColor = '';

          if (setState == setBladeStyle) {
            console.log("ooo");
            setState(prevStyle => ({
              ...prevStyle,
              width: '0%'
            }));
          }


          switch (formData.lightsaber.saberType.toLowerCase()) {
            case 'darth vader':
              newWidth = mask.includes("hilt") ? '27%' : mask.includes("blade") ? '73%' : '';
              newColor = mask.includes("hilt") ? fontColors[7].img : mask.includes("blade") ? fontColors[11].img : '';
              break;
            case 'luke skywalker':
              newWidth = mask.includes("hilt") ? '27%' : mask.includes("blade") ? '71%' : '';
              newColor = mask.includes("hilt") ? fontColors[7].img : mask.includes("blade") ? fontColors[13].img : '';
              newMarginLeft = mask.includes("blade") ? '1%' : '';
              break;
            case 'obi wan kenobi':
              newWidth = mask.includes("hilt") ? '27%' : mask.includes("blade") ? '71%' : '';
              newMarginLeft = mask.includes("blade") ? '1%' : '';
              newColor = mask.includes("hilt") ? fontColors[7].img : mask.includes("blade") ? fontColors[13].img : '';
              break;
            case 'mace windu':
              newWidth = mask.includes("hilt") ? '27%' : mask.includes("blade") ? '71%' : '';
              newMarginLeft = mask.includes("blade") ? '1%' : '';
              newColor = mask.includes("hilt") ? fontColors[7].img : mask.includes("blade") ? fontColors[15].img : '';
              break;
            case 'count dooku':
              newWidth = mask.includes("hilt") ? '33%' : mask.includes("blade") ? '65%' : '';
              newMarginLeft = mask.includes("blade") ? '-1%' : '';
              newColor = mask.includes("hilt") ? fontColors[7].img : mask.includes("blade") ? fontColors[11].img : '';
              break;
          }
          img.src = mask;
          console.log(mask);
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${bgImg}")`,
            WebkitMaskImage: `url("${mask}")`,
            WebkitMaskPosition: 'center',
            WebkitSize: 'cover',
            maskImage: `url("${mask}")`,
            maskSize: `cover`,
            maskPosition: 'center',
          }));
          
          if (newWidth.length > 0) {
            setTimeout(() => {

            setState(prevStyle => ({
              ...prevStyle,
              width: newWidth
            }));
          }, 1000);
          }
          if (newMarginLeft.length > 0) {
            setState(prevStyle => ({
              ...prevStyle,
              marginLeft: newMarginLeft
            }));
          }
          if (newColor.length > 0) {
            setState(prevStyle => ({
              ...prevStyle,
              backgroundImage: `url("${newColor}")`
            }));
          }
        }
        break;

    }
  };



  // // // Custom hook to update the flag style when the flag image changes
  useEffect(() => {
    let obj = {
    };
    if (
      formData.img.markType.toLowerCase() === "symbol" ||
      formData.img.type.toLowerCase() === "lazer cut flag"
    ) {
      obj.type = 'mask';
      obj.src = formData.text.color.img;
      obj.mask = formData.img.color.mask.img;
      imageLoader(obj, setMaskStyle)
    } else {
      obj.type = 'image'
      obj.src = formData.img.img;
      imageLoader(obj, setFlagStyle)
    }
  }, [formData.img.img]);

  useEffect(() => {
    let obj = {
    };
    obj.type = 'mask';
    obj.src = formData.text.color.img;
    obj.mask = formData.img.color.mask.img;
    imageLoader(obj, setMaskStyle)

  }, [formData.img.color.mask.img]);

  // Custom hook to update the background color image style when the background color image changes
  useEffect(() => {
    const obj = {
      type: 'color',
      src: formData.bgColor.img,
    };
    imageLoader(obj, setStyle);
  }, [formData.bgColor.img]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    const obj = {
      type: 'color',
      src: formData.text.color.img,
    };
    if (
      formData.img.markType.toLowerCase() === "symbol" ||
      formData.img.type.toLowerCase() === "lazer cut flag"
    ) {
      imageLoader(obj, setMaskStyle);
    }

    imageLoader(obj, setFontStyle);
    imageLoader(obj, setFontSecondaryStyle);

  }, [formData.text.color.img]);

  useEffect(() => {
    let obj = {
    };
    console.log(formData.img.type)
    console.log(formData.img.markType)
    if (
      formData.img.markType.toLowerCase() === "symbol" ||
      formData.img.type.toLowerCase() === "lazer cut flag"
    ) {
      console.log(formData.img.type)
      obj.type = 'mask';
      obj.src = formData.text.color.img;
      obj.mask = formData.img.color.mask.img;
      imageLoader(obj, setMaskStyle)
    } else {
      console.log(formData.img.type)
      obj.type = 'image'
      obj.src = formData.img.img;
      imageLoader(obj, setFlagStyle)
    }
    // console.log("yes")
  }, [formData.img.type]);



  // Custom hook to update the font style when the text color image changes
  useEffect(() => {

    let objHilt = {
    };
    objHilt.type = 'light saber';
    objHilt.src = formData.lightsaber.hilt.color;
    objHilt.mask = formData.lightsaber.hilt.img;
    imageLoader(objHilt, setHiltStyle)

    let objBlade = {
    };
    objBlade.type = 'light saber';
    objBlade.src = formData.lightsaber.blade.color;
    objBlade.mask = formData.lightsaber.blade.img;
    imageLoader(objBlade, setBladeStyle)

  }, [formData.lightsaber.saberType]);
  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    console.log(formData.lightsaber.hilt.color)
    let objHilt = {
    };
    objHilt.type = 'mask';
    objHilt.src = formData.lightsaber.hilt.color;
    objHilt.mask = formData.lightsaber.hilt.img;
    imageLoader(objHilt, setHiltStyle)

  }, [formData.lightsaber.hilt.color]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    let objBlade = {
    };
    objBlade.type = 'mask';
    objBlade.src = formData.lightsaber.blade.color;
    objBlade.mask = formData.lightsaber.blade.img;
    imageLoader(objBlade, setBladeStyle)
  }, [formData.lightsaber.blade.color]);



  // Custom hook to update the size style when the size changes
  useEffect(() => {
    // An array of objects that represent the different size options
    const values = sizeOptions;

    const value = values.find(item => item.name === formData.size.current);

    if (value) {
      if (value.ratio === "1:1") {
        // Set the style for square sizes
        setStyle(prevStyle => ({ ...prevStyle, width: '200px', height: `200px` }));
      } else {
        // Set the style for non-square sizes
        const [width, height] = value.ratio.split(':').map(Number);
        setStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px` }));
      }
    }
  }, [formData.size.current]);

  // Custom hook to update the canvas style when the size changes
  useEffect(() => {
    // An array of objects that represent the different size options that require a larger canvas
    const arr = [{ name: "3.5” x 4.25”", ratio: "7:8.5" }, { name: "3.5” x 4”", ratio: "7:8" }, { name: "4.6” x 6.2”", ratio: "23:31" }, { name: "3.6” x 5”", ratio: "18:25" }, { name: "4” x 4.5”", ratio: "8:9" }];

    var countSize = true;

    // Check if the current size requires a larger canvas
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === formData.size.current) {
        setCanvasStyle(prevStyle => ({ ...prevStyle, height: '400px' }));
        countSize = false;
        break;
      }
    }

    // If the current size does not require a larger canvas, set the default canvas height
    if (countSize) {
      setCanvasStyle(prevStyle => ({ ...prevStyle, height: '230px' }));
    }
    if (formData.type.toLowerCase().includes("medical patch")) {
      setCanvasStyle(prevStyle => ({ ...prevStyle, height: '230px' }));
      switch (formData.size.current) {
        case '1” x 1”':
          setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scale(1.5)` }));
          break;
        case '2” x 2”':
          setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scale(1.5)` }));
          break;
        case '3.5” x 2”':
          setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scale(1)` }));
          console.log("hi");
          break;
      }
    }

    if (formData.img.type.toLowerCase() === "lazer cut flag") {
      let obj = {
      };
      obj.type = 'mask';
      obj.src = formData.text.color.img;
      obj.mask = formData.img.color.mask.img;
      imageLoader(obj, setMaskStyle)
    }
  }, [formData.size.current]);

  //Use the useEffect hook to manage side effects
  // This useEffect hook adjusts the font size of the text inside a container element
  // based on the size of the container and the text. It also sets the line height to
  // match the font size.
  let count = 0;
  useEffect(() => {
    // console.log(!containerRef.current);
    if (formData.type.toLowerCase().includes("light sabers")) return;
    if (formData.type.toLowerCase().includes("flag")) return;
    if (!containerRef.current) return;
    // Define a function to adjust the font size
    const adjustFontSize = () => {
      // If the containerRef is not set, return
      if (containerRef.current) {
        updateFontSize(containerRef, setFontStyle, formData);
      }

    };

    // Call adjustFontSize() immediately to set the font size on mount
    adjustFontSize();

    // Attach the adjustFontSize() function as an event listener for the window resize event
    window.addEventListener('resize', adjustFontSize());

    // Create a MutationObserver to listen for changes to the container's child nodes,
    // and attach the observer to the containerRef
    const observer = new MutationObserver(adjustFontSize);
    observer.observe(containerRef.current, { childList: true, characterData: true, subtree: true });

    // Return a cleanup function to remove the event listeners and observer when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustFontSize());
      observer.disconnect();
    };
  }, [formData.text.primary.text, formData.size.current]);

  const count2 = 0;
  //Use the useEffect hook to manage side effects
  useEffect(() => {
    if (!containerSecondaryRef.current) return;
    const adjustFontSize = () => {
      // If the containerRef is not set, return

      updateAdditionalFontSize(containerSecondaryRef, setFontSecondaryStyle, formData);
    };

    // Call adjustFontSize() immediately to set the font size on mount
    adjustFontSize();

    // Attach the adjustFontSize() function as an event listener for the window resize event
    window.addEventListener('resize', adjustFontSize());

    // Create a MutationObserver to listen for changes to the container's child nodes,
    // and attach the observer to the containerRef
    const observer = new MutationObserver(adjustFontSize);
    observer.observe(containerRef.current, { childList: true, characterData: true, subtree: true });

    // Return a cleanup function to remove the event listeners and observer when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustFontSize());
      observer.disconnect();
    };
  }, [formData.text.secondary.text, formData.size.current]);


  useEffect(() => {
    if (formData.type.toLowerCase() !== 'medical patch') {
      if (formData.img.reversed) {
        setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(-1)` }));
        setMaskStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(-1)` }));
      } else {
        setFlagStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(1)` }));
        setMaskStyle(prevStyle => ({ ...prevStyle, transform: `scaleX(1)` }));
      }
    }
  }, [formData.img.reversed]);

  useEffect(() => {
    if (formData.upsells.glowBorder) {
      setStyle(prevStyle => ({ ...prevStyle, WebkitTextStroke: `2px white`, textStroke: `2px white` }));
    } else {
      setStyle(prevStyle => ({ ...prevStyle, WebkitTextStroke: `initial`, textStroke: `initial` }));
    }
  }, [formData.upsells.glowBorder]);


  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // format by option
  return (
    <div className="swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 w-full justify-center lg:pr-16">
      <div id="visualizer" className={classNames(
        className,
        "md:col-span-2 aspect-square snap-center flex items-center justify-center overflow-clip rounded-sm w-full max-h-1/2 p-6 py-4 sm:relative"
      )}>
        {/* ${scrollPosition >= 100 ? ' w-100 fixed z-50' : ' transition relative'
          } */}
        <div id="patch" className={classNames(
          formData.type.toLowerCase().includes("flag") ? "justify-center" : "justify-center",
          "flex items-center transform lg:scale-150"
        )} style={style}>

          {formData.type.toLowerCase().includes("id panel") ? (
            <IDPanel formData={formData} />
          ) : formData.type.toLowerCase().includes("name tape") ? (
            <NameTape formData={formData} />
          ) : formData.type.toLowerCase().includes("medical patch") ? (
            <MedicalPatch formData={formData} />
          ) : formData.type.toLowerCase() == ("flag") ? (
            <Flag formData={formData} />
          ) : formData.type.toLowerCase().includes("call sign") ? (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          ) : formData.type.toLowerCase().includes("quote") ? (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          ) : formData.type.toLowerCase().includes("light saber") ? (
            <LightSaber formData={formData} />
          ) : formData.type.toLowerCase() == 'custom printed patch' ? (
            <CustomPatch formData={formData} />
          ) : formData.type.toLowerCase() == "jacket panel" ? (
            <JacketPanel formData={formData} />
          ) : formData.type.toLowerCase() == ("division jacket panel") ? (
            <DivisionJacketPanel formData={formData} />
          ) : formData.type.toLowerCase().includes("ranger tabs") ? (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          ) : (
            <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
            </div>
          )}
        </div>
      </div>
    </div >
  );
}
