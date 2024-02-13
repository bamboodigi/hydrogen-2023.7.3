// Import React hooks and components
import { useState, useEffect, useRef } from 'react';
import React from 'react';

import ReactCurvedText from 'react-curved-text';

import {
  IDPanel,
  NameTape,
  MedicalPatch,
  Flag,
  LightSaber,
  CustomPatch,
  JacketPanel,
  DivisionJacketPanel,
} from '~/components';

// Patch Visualizer element that shows a tailored patch
export function Visualizer({ formData, className, methods, ...props }) {

  const {
    sizeOptions,
    fontColors,
  } = methods.data;


  const initVisualizerStyle = methods.init.visualizer;
  const updateFontSize = methods.helpers.update.fontSize;
  const updateAdditionalFontSize = methods.helpers.update.fontSizeAdditional;

  const classNames = methods.helpers.utility.classNames;

  const { canvas, patch, backPatch, text, img, lightsaber } = initVisualizerStyle(formData);

  //console.log(img);

  // console.log(patch);

  // console.log(img);
  // Create a ref to access the container element
  // console.log(img.mask);
  //  console.log(lightsaber);
  const containerRef = useRef(null);
  const containerSecondaryRef = useRef(null);

  const [canvasStyle, setCanvasStyle] = useState(canvas);
  const [style, setStyle] = useState(patch.patch);
  const [backStyle, setBackStyle] = useState(backPatch.patch);
  const [fontStyle, setFontStyle] = useState(text.primary);
  const [backFontStyle, setBackFontStyle] = useState(text.back);
  const [textureStyle, setTextureStyle] = useState(patch.texture);
  const [backTextureStyle, setBackTextureStyle] = useState(backPatch.texture);
  const [fontWrapperStyle, setFontWrapperStyle] = useState({});
  const [fontSecondaryStyle, setFontSecondaryStyle] = useState(text.secondary);
  const [flagStyle, setFlagStyle] = useState(formData.type.toLowerCase() === "medical patch" ? img.mask : img.flag);
  const [hiltStyle, setHiltStyle] = useState(lightsaber.hilt);
  const [bladeStyle, setBladeStyle] = useState(lightsaber.blade);
  const [maskStyle, setMaskStyle] = useState(img.mask);
  const [rodStyle, setRodStyle] = useState(img.rod);
  const [ringStyle, setRingStyle] = useState(img.division.ring);
  const [birdStyle, setBirdStyle] = useState(img.division.bird);



  // A function to load an image and update the state with its URL
  const imageLoader = (obj, setState, type) => {
    console.log(obj);
    console.log(type);
    console.log(obj.type);
    let mask = obj.mask ? obj.mask : null;
    let bgImg = obj.src;
    let height = obj.height ? obj.height : null;
    console.log(mask)
    //  console.log(obj.type.toLowerCase());
    const img = new Image();
     console.log(obj.type.toLowerCase());
    switch (obj.type.toLowerCase()) {
      case "color":
      case "texture":
      case 'image':
        //   console.log(bgImg);
        img.src = bgImg;
        console.log(img.src);
        img.onload = () => {
          setState(prevStyle => ({
            ...prevStyle,
            backgroundImage: `url("${bgImg}")`,
            minHeight: height,
          }));
        };
        break;
      case 'mask':
        console.log('ok');
        if (mask) {
          console.log('ok');
          if (type.toLowerCase() == "flag") {
            img.src = mask;
            img.onload = () => {
              // setStyle(prevStyle => ({
              //   ...prevStyle,
              //   padding: height,
              // }));
              //  console.log(mask);
              //   console.log(setState);
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
            };
          } else if (!type.toLowerCase().includes("light sabers")) {
            img.src = mask;
            console.log('ok');
            img.onload = () => {
              console.log(mask);
              //   console.log(setState);
              setState(prevStyle => ({
                ...prevStyle,
                backgroundImage: `url("${bgImg}")`,
                WebkitMaskImage: `url("${mask}")`,
                WebkitMaskPosition: 'center',
                WebkitSize: 'cover',
                maskImage: `url("${mask}")`,
                maskSize: `cover`,
                maskPosition: 'center',
                minHeight: height,
                maxHeight: height,
              }));
            };
          }
        }
        break;
      case 'light saber':
        if (mask) {
          let newWidth = '';
          let newMarginLeft = '';
          let newColor = '';
          if (setState == setBladeStyle) {
            // console.log("ooo");
            setState(prevStyle => ({
              ...prevStyle,
              width: '0%'
            }));
          }
          console.log(mask);

          switch (formData.lightsaber.saberType.toLowerCase()) {
            case 'kylo ren':
              newWidth = mask.includes("hilt") ? '18.5%' : mask.includes("blade") ? '58%' : '';
              newColor = mask.includes("hilt") ? fontColors[7].img : mask.includes("blade") ? fontColors[11].img : '';
              break;
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
          //   console.log(mask);
          console.log(img);
          console.log(mask);
          img.onload = () => {
            setState(prevStyle => ({
              ...prevStyle,
              backgroundImage: `url("${bgImg}")`,
              WebkitMaskImage: `url("${mask}")`,
              WebkitMaskPosition: 'center',
              WebkitSize: 'contain',
              maskImage: `url("${mask}")`,
              maskSize: `contain`,
              maskPosition: 'center',
            }));
          };

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


  useEffect(() => {

    const values = sizeOptions;

    const value = values.find(item => item.name === formData.size.current);
    const [width, height] = value.ratio.split(':').map(Number);
    console.log(formData.sides.current);
    console.log(typeof formData.sides.current);
    console.log('ok');
    let obj = {
    };

    if (methods.helpers.is.callSign.double(formData)) {
      setTextureStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px` }));
      setStyle(prevStyle => ({ ...prevStyle, width: '100%', height: '100%', padding: '0' }));
    } else {
      setStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px`, padding: '10px' }));
    }
  }, [formData.sides.current]);


  // // // Custom hook to update the flag style when the flag image changes
  useEffect(() => {
    let obj = {
    };
    if (
      formData.img.markType.toLowerCase() === "symbol" ||
      formData.img.type.toLowerCase() === "laser cut flag"
    ) {
      obj.type = 'mask';
      obj.src = formData.text.color.img;
      obj.mask = formData.img.color.mask.img;
      //  console.log(obj);
      imageLoader(obj, setMaskStyle, formData.type)
    } else {
      //  console.log("ahh")
      obj.type = 'image'
      obj.src = formData.img.img;
      imageLoader(obj, setFlagStyle, formData.type)
    }

    // console.log(obj)
  }, [formData.img.img]);


  useEffect(() => {
    let obj = {
    };
    obj.type = 'mask';
    obj.src = formData.text.color.img;
    obj.mask = formData.img.color.mask.img;
    obj.height = methods.helpers.get.flagHeight(formData.size.current, formData.type);
    //   console.log(obj);
    imageLoader(obj, setMaskStyle, formData.type)

  }, [formData.img.color.mask.img]);



  // Custom hook to update the background color image style when the background color image changes
  useEffect(() => {
    const obj = {
      type: 'color',
      src: formData.bgColor.img,
    };
    imageLoader(obj, setStyle, formData.type);

    const textureObj = {
      type: 'texture',
      src: methods.helpers.get.patch.callSign.texture(formData.bgColor),
    };
    if (methods.helpers.is.callSign.double(formData)) {
      imageLoader(textureObj, setTextureStyle, formData.type);
    }
  }, [formData.bgColor.img]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    const obj = {
      type: 'color',
      src: formData.text.color.img,
    };
    if (
      formData.img.markType.toLowerCase() === "symbol" ||
      formData.img.type.toLowerCase() === "laser cut flag"
    ) {
      imageLoader(obj, setMaskStyle, formData.type);
    }

    if (formData.type.toLowerCase() === "division jacket panel") {
      imageLoader(obj, setBirdStyle);
    }

    imageLoader(obj, setFontStyle, formData.type);
    imageLoader(obj, setFontSecondaryStyle, formData.type);

  }, [formData.text.color.img]);

  useEffect(() => {
    let obj = {
    };
    // console.log(formData.img.type)
    //  console.log(formData.img.markType)
    if (
      formData.img.markType.toLowerCase() === "symbol" ||
      formData.img.type.toLowerCase() === "laser cut flag"
    ) {
      //  console.log(formData.img.type)
      obj.type = 'mask';
      obj.src = formData.text.color.img;
      obj.mask = formData.img.color.mask.img;
      obj.height = methods.helpers.get.flagHeight(formData.size.current, formData.type);
      //   console.log(obj);
      imageLoader(obj, setMaskStyle, formData.type)
    } else {
      //  console.log(formData.img.type)
      obj.type = 'image'
      obj.src = formData.img.img;
      obj.height = methods.helpers.get.flagHeight(formData.size.current, formData.type);
      imageLoader(obj, setFlagStyle)
    }
    // console.log("yes")
  }, [formData.img.type]);


  // Custom hook to update the background color image style when the background color image changes
  useEffect(() => {
    const obj = {
      type: 'color',
      src: formData.img.division.ring.color.img,
    };
    imageLoader(obj, setRingStyle);
  }, [formData.img.division.ring.color.img]);

  useEffect(() => {
    const obj = {
      type: 'color',
      src: formData.rod.color,
    };
    imageLoader(obj, setRodStyle);
  }, [formData.rod.color]);


  // Custom hook to update the font style when the text color image changes
  useEffect(() => {

    let objHilt = {
    };
    objHilt.type = 'mask';
    objHilt.src = formData.lightsaber.hilt.color;
    objHilt.mask = formData.lightsaber.hilt.img;
    imageLoader(objHilt, setHiltStyle, formData.type)

    let objBlade = {
    };
    objBlade.type = 'mask';
    objBlade.src = formData.lightsaber.blade.color;
    objBlade.mask = formData.lightsaber.blade.img;
    imageLoader(objBlade, setBladeStyle, formData.type)

  }, [formData.lightsaber.saberType]);
  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    // console.log(formData.lightsaber.hilt.color)
    let objHilt = {
    };
    objHilt.type = 'light saber';
    objHilt.src = formData.lightsaber.hilt.color;
    objHilt.mask = formData.lightsaber.hilt.img;
    console.log(objHilt);
    imageLoader(objHilt, setHiltStyle, formData.type)

  }, [formData.lightsaber.hilt.color]);

  // Custom hook to update the font style when the text color image changes
  useEffect(() => {
    let objBlade = {
    };
    objBlade.type = 'light saber';
    objBlade.src = formData.lightsaber.blade.color;
    objBlade.mask = formData.lightsaber.blade.img;
    imageLoader(objBlade, setBladeStyle, formData.type)
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
        if (methods.helpers.is.callSign.double(formData)) {
          setTextureStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px` }));
          setStyle(prevStyle => ({ ...prevStyle, width: '100%', height: '100%', padding: '0' }));
        } else {
          setStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px`, padding: '10px' }));
        }
        setBackTextureStyle(prevStyle => ({ ...prevStyle, width: '290px', height: `${290 * height / width}px` }));
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

    // if(formData.type.toLowerCase() == "name tape"){
    //   console.log(formData.size.current);

    //   if(formData.size.current  == "4” x 1”" || formData.size.current  == "5” x 1”"){
    //     setCanvasStyle(prevStyle => ({ ...prevStyle, height: '100px' }));
    //   } else {

    //   }
    // }

    // If the current size does not require a larger canvas, set the default canvas height
    // if (countSize) {
    //   setCanvasStyle(prevStyle => ({ ...prevStyle, height: '230px' }));
    // }
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
          //    console.log("hi");
          break;
      }
    }
    if (formData.type.toLowerCase() == ("flag")) {

    }

    if (formData.img.type.toLowerCase() === "laser cut flag") {
      let obj = {
      };
      obj.type = 'mask';
      obj.src = formData.text.color.img;
      obj.mask = formData.img.color.mask.img;
      obj.height = methods.helpers.get.flagHeight(formData.size.current, formData.type);
      //   console.log(obj);
      imageLoader(obj, setMaskStyle, formData.type)
    }

    if (methods.helpers.is.patchType.jacketPanel(formData)) {
      methods.helpers.set.jacketPanel.patch(formData.size.current, setStyle);
    }
    if (methods.helpers.is.patchType.nameTape(formData)) {
      methods.helpers.set.nameTape.patch(formData.size.current, setStyle);
    }

    if (methods.helpers.is.patchType.flagPatch(formData)) {
      methods.helpers.set.flag.patch(formData.size.current, setStyle);
    }

    if (methods.helpers.is.patchType.medicalPatch(formData)) {
      methods.helpers.set.medical.patch(formData.size.current, setStyle);
    }


    if (methods.helpers.is.patchType.cover(formData)) {
      methods.helpers.set.cover.patch(formData.size.current, setStyle);
    }

    if (methods.helpers.is.patchType.idPanel(formData)) {
      methods.helpers.set.idPanel.patch(formData.size.current, setStyle);
    }
  }, [formData.size.current]);

  //Use the useEffect hook to manage side effects
  // This useEffect hook adjusts the font size of the text inside a container element
  // based on the size of the container and the text. It also sets the line height to
  // match the font size.
  let count = 0;
  useEffect(() => {
    // console.log(containerRef);
    if (formData.type.toLowerCase().includes("light sabers")) return;
    if (formData.type.toLowerCase().includes("flag")) return;
    if (formData.type.toLowerCase().includes("cover")) return;
    if (!containerRef.current) return;
    // Define a function to adjust the font size
    const adjustFontSize = () => {
      // If the containerRef is not set, return
      if (containerRef.current) {
        if (methods.helpers.is.patchType.jacketPanel(formData)) {
          updateFontSize(containerRef, setFontStyle, formData, setFontWrapperStyle);
        } else {
          updateFontSize(containerRef, setFontStyle, formData);
          updateFontSize(containerRef, setBackFontStyle, formData);
        }
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
  }, [formData.text.primary.text, formData.size.current, formData.img.enabled]);

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

  return (
    <div className="swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 w-full justify-center lg:pr-16">

      <div id="visualizer" className={classNames(
        className,
        formData.sides.current == 2 ? "flex-col" : "",
        "md:col-span-2 aspect-square snap-center flex items-center justify-center overflow-clip rounded-sm w-full max-h-1/2 p-6 py-4 sm:relative"
      )}>
        {/* ${scrollPosition >= 100 ? ' w-100 fixed z-50' : ' transition relative'
        } */}
        <div
        style={methods.helpers.is.callSign.double(formData) ? textureStyle : null}
          className={classNames(
            methods.helpers.is.callSign.double(formData) ? "flex items-center" : "",
            ""
          )}>
          <div id="patch" className={classNames(
            formData.type.toLowerCase().includes("flag") ? "justify-center" : "justify-center",
            methods.helpers.is.jacketPanel.hazard(formData) ? "rounded-[2rem]" : "",
            methods.helpers.is.jacketPanel.defense(formData) ? "rounded-[2rem]" : "",
            !methods.helpers.is.callSign.double(formData) ? "shadow-medium" : "",
            "flex items-center transform lg:scale-150"
          )} style={style}>
            {formData.type.toLowerCase().includes("id panel") && formData.size.current == '6” x 2”' ? (
              <div className="w-full h-full flex">
                <div className="w-1/2 flex items-center px-2">
                  {formData.img.type.toLowerCase() === "laser cut flag" ? (
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
                    <div id="flag"
                      className="flex-1 max-h-full max-w-full h-full w-full"
                      style={flagStyle}></div>
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
            ) : formData.type.toLowerCase().includes("id panel") ? (
              <div className={classNames(
                formData.size.current === '3.5” x 2”' ? "gap-2" :
                  formData.size.current === '4” x 2”' ? "gap-2" : "",
                "flex flex-col w-full h-full"
              )}>
                <div ref={containerRef} className={classNames(
                  methods.helpers.is.idPanel.ac1Front(formData) ? "h-[40%] w-[70%] ml-[15%]" : "h-1/2",
                  "justify-center overflow-y-hidden flex items-center"
                )}>
                  <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                </div>
                <div className={classNames(
                  formData.size.current === '3.5” x 2”' ? "px-1 h-1/2" : "",
                  methods.helpers.is.idPanel.ac1Front(formData) ? "h-[60%]" : "h-1/2",
                  "flex items-center"
                )}>
                  {formData.img.type.toLowerCase() === "laser cut flag" ? (
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
            ) : formData.type.toLowerCase().includes("name tape") && formData.img.enabled ? (
              <div className={classNames(
                methods.helpers.is.nameTape.tacTec(formData) ? "w-[90%] gap-1" : "",
                methods.helpers.is.nameTape.ac1NameTape(formData) ? "w-[76%] gap-1" : "",
                methods.helpers.is.nameTape.tacTecTrainer(formData) ? "w-[88%] gap-1" : "",
                !methods.helpers.is.nameTape.tacTec(formData) && !methods.helpers.is.nameTape.tacTecTrainer(formData) && !methods.helpers.is.nameTape.ac1NameTape(formData) ? "w-full" : "",
                "flex h-full gap-2"
              )}>
                <div className={classNames(
                  methods.helpers.is.nameTape.tacTec(formData) ? "w-[26%]" : "",
                  methods.helpers.is.nameTape.ac1NameTape(formData) ? "w-[33%]" : "",
                  methods.helpers.is.nameTape.tacTecTrainer(formData) ? "w-[21.25%]" : "",
                  formData.size.current == '5” x 1”' ? "w-[25%]" : "",
                  "flex flex-0  w-1/3 items-center"
                )}>
                  <div id="flag" className="mr-1 flex-1 max-h-full max-w-full w-auto h-auto" style={flagStyle}></div>
                </div>
                <div ref={containerRef} className="flex flex-1 w-2/3 justify-center overflow-y-hidden items-center">
                  <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                </div>
              </div>
            ) : formData.type.toLowerCase().includes("name tape") ? (
              <div ref={containerRef} className={classNames(
                methods.helpers.is.nameTape.tacTec(formData) ? "w-[95%]" : "",
                methods.helpers.is.nameTape.tacTecTrainer(formData) ? "w-[90%]" : "",
                methods.helpers.is.nameTape.ac1NameTape(formData) ? "w-[70%] gap-1" : "",
                !methods.helpers.is.nameTape.tacTec(formData) && !methods.helpers.is.nameTape.tacTecTrainer(formData) && !methods.helpers.is.nameTape.ac1NameTape(formData) ? "w-full" : "",
                "h-full text-center overflow-x-hidden overflow-y-hidden flex items-center justify-center"
              )}>
                {methods.helpers.is.nameTape.ranger(formData) ? (
                  <>
                    {/* <ReactCurvedText
                  width={260}
                  height={70}
                  cx={120}
                  cy={-185}
                  rx={240}
                  ry={240}
                  startOffset={380}
                  reversed={true}
                  text={formData.text.primary.text?.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}
                  textProps={
                    { style: { ...fontStyle },
                    className: "text-center w-screen",
                    id : "main-text",
                    textAnchor: "middle",
                    }
                  }
                  textPathProps={null}
                  tspanProps={null}
                  textAnchor="middle"
                  ellipseProps={null}
                  svgProps={
                    { 
                    className: "curved-text",
                    }
                  }
                  />  */}
                    {/* <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={100}
            ry={100}
            startOffset={50}
            reversed={false}
            text="react-curved-text"
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        /> */}
                    <svg height="70" width="260" className="curved-text">
                      <path id="ellipse-id-rv" style={{ fill: 'none' }} d="M-215 375A340 340 0 1 1 465 375A340 340 0 1 1 -215 375"></path>
                      <defs>
                        <pattern id="image" patternUnits="userSpaceOnUse" width="430" height="216">
                          <image xlinkHref={formData.text.color.img} width="430" height="216"></image>
                        </pattern>
                      </defs>
                      <text className="text-center w-screen" style={fontStyle} id="main-text" textAnchor="middle" fill="url(#image)" >
                        <textPath xlinkHref="#ellipse-id-rv" startOffset="530">
                          <tspan>{formData.text.primary.text?.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</tspan>
                        </textPath>
                      </text>
                    </svg>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            ) : formData.type.toLowerCase().includes("medical patch") && formData.size.current == '3.5” x 2”' ? (
              <div className="flex w-full h-full gap-2">
                <div className="flex flex-0  w-[45%] items-center" style={{}}>
                  <div id="icon" className="h-[83%] w-full relative" style={maskStyle}>
                    <div id="glow"
                      className={classNames(
                        formData.upsells.glowBorder ? "block" : "hidden",
                        "h-full w-full"
                      )}
                      style={{ backgroundImage: `url("${formData.img.color.mask.glow}")`, backgroundSize: 'cover', position: 'absolute', backgroundPosition: 'center' }}
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
            ) : methods.helpers.is.medical.hex(formData) ? (
              <div className="flex w-full h-full justify-center">
                <div className="flex flex-col gap-1  w-[75%] justify-center items-center" style={{}}>
                  <div id="icon" className="h-[52%] w-[82%] relative" style={maskStyle}>
                    <div id="glow"
                      className={classNames(
                        formData.upsells.glowBorder ? "block" : "hidden",
                        "h-full w-full"
                      )}
                      style={{ backgroundImage: `url("${formData.img.color.mask.glow}")`, backgroundSize: 'cover', position: 'absolute', backgroundPosition: 'center' }}
                    ></div>
                  </div>
                  <div ref={containerRef} className="flex justify-center overflow-y-hidden items-center">
                    {/* <ReactCurvedText
                  width={260}
                  height={70}
                  cx={120}
                  cy={-185}
                  rx={240}
                  ry={240}
                  startOffset={380}
                  reversed={false}
                  text={formData.text.primary.text?.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}
                  textProps={
                    { style: { ...fontStyle },
                    className: "text-center w-screen",
                    id : "main-text",
                    textAnchor: "middle",
                  //  fill: "url(#image-background)",
                    }
                  }
                  textPathProps={null}
                  tspanProps={null}
                  defsProps={
                    {
                      children: (
                        <pattern id="image-background" patternUnits="userSpaceOnUse" width="430" height="216">
                          <image xlinkHref="https://cdn.shopify.com/s/files/1/2242/5805/files/flat-spice-brown.jpg?v=1692905056" width="430" height="216" />
                        </pattern>
                      )
                    }
                  }
                  textAnchor="middle"
                  ellipseProps={null}
                  svgProps={
                    { 
                    className: "curved-text",
                    }
                  }
                  />
                  {/* <svg height="70" width="260" className="curved-text">
                    <path id="ellipse-id-rv" style={{ fill: 'none' }} d="M-115 -185a240 240 0 1 0 480 0a240 240 0 1 0 -480 0"></path>
                    <defs>
                      <pattern id="image" patternUnits="userSpaceOnUse" width="430" height="216">
                        <image xlinkHref={formData.text.color.img} width="430" height="216"></image>
                      </pattern>
                    </defs>
                    <text className="text-center w-screen" style={fontStyle} id="main-text" textAnchor="middle" fill="url(#image)" >
                      <textPath xlinkHref="#ellipse-id-rv" startOffset="380">
                        <tspan>{formData.text.primary.text?.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</tspan>
                      </textPath>
                    </text>
                  </svg> */}
                  </div>
                </div>
              </div>
            ) : formData.type.toLowerCase().includes("medical patch") ? (
              <div className="h-full w-full text-center overflow-x-hidden overflow-y-hidden flex items-center justify-center">
                <div id="icon" className="h-4/5 w-4/5 relative" style={maskStyle}>
                  <div id="glow"
                    className={classNames(
                      formData.upsells.glowBorder ? "block" : "hidden",
                      "h-full w-full"
                    )}
                    style={{ backgroundImage: `url("${formData.img.color.mask.glow}")`, backgroundSize: 'cover', position: 'absolute' }}
                  ></div>
                </div>
              </div>
            ) : formData.type.toLowerCase() == ("flag") ? (
              <div ref={containerRef}
                className={classNames(
                  methods.helpers.is.flagPatch.ac1Front(formData) ? "w-[90%]" : "w-full",
                  "h-full overflow-x-hidden flex items-center justify-center"
                )}>
                {formData.img.type.toLowerCase() === "laser cut flag" ? (
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
            ) : formData.type.toLowerCase().includes("call sign") ? (
              <>
                <div ref={containerRef} className="h-full w-full text-center overflow-x-hidden flex items-center justify-center">
                  <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                </div>
                {/* <div  className="h-full w-full text-center overflow-x-hidden flex items-center justify-center">
                <p id="back-main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
              </div> */}
              </>

            ) : formData.type.toLowerCase().includes("quote") ? (
              <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
                <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
              </div>
            ) : formData.type.toLowerCase().includes("light saber") ? (
              <div ref={containerRef} className="h-full w-full text-center overflow-x-hidden flex items-center justify-start">
                <div id="hilt" className="w-0 transition-background duration-[.75s]" style={{ ...hiltStyle }}></div>
                <div id="blade" className="w-0 transition-width transition-background duration-[.75s]" style={{ ...bladeStyle }}></div>
              </div>
            ) : formData.type.toLowerCase() == 'custom printed patch' ? (
              <></>
              // <div ref={containerRef} className="h-full w-full overflow-x-hidden flex items-center justify-center">
              //   <div id="flag" className="flex-1 h-full w-full" style={flagStyle}></div>
              // </div>
            ) : formData.type.toLowerCase() == "jacket panel" ? (
              <div ref={containerRef} className="h-full w-full overflow-x-hidden flex flex-col items-center justify-between">
                <div className={classNames(
                  formData.size.current == '3.5” x 4.25”' && !formData.img.flagTop ? "" : "",
                  formData.img.flagTop ? "order-2" : "", ""
                )}>
                  <div className="flex items-center" style={{ ...fontWrapperStyle }}>
                    <p id="main-text" className={classNames(
                      formData.size.current == '3.5” x 4.25”' && !formData.img.flagTop ? "" : "",
                      formData.img.flagTop ? "order-1" : "",
                      methods.helpers.is.jacketPanel.hazard(formData) ? "mb-6" : "",
                      methods.helpers.is.jacketPanel.tad(formData) ? "mb-2" : "",
                      methods.helpers.is.jacketPanel.massif(formData) ? "" : "",
                      "text-center w-screen"
                    )}
                      style={{ ...fontStyle }}>{formData.text.primary.text?.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                  </div>
                  <div ref={containerSecondaryRef} className="flex flex-wrap">
                    <p id="text2" className="w-1/2 mb-1" style={{ ...fontSecondaryStyle }}>{formData.text.secondary.text?.length > 0 ? formData.text.secondary.text : formData.text.secondary.placeholder}</p>
                    <p id="text3" className="w-1/2 mb-1 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.third.text?.length > 0 ? formData.text.third.text : formData.text.third.placeholder}</p>
                    <p id="text4" className="w-1/2 mb-1" style={{ ...fontSecondaryStyle }}>{formData.text.fourth.text?.length > 0 ? formData.text.fourth.text : formData.text.fourth.placeholder}</p>
                    <p id="text5" className="w-1/2 mb-1 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.fifth.text?.length > 0 ? formData.text.fifth.text : formData.text.fifth.placeholder}</p>
                    <p id="text6" className="w-1/2" style={{ ...fontSecondaryStyle }}>{formData.text.sixth.text?.length > 0 ? formData.text.sixth.text : formData.text.sixth.placeholder}</p>
                    <p id="text7" className="w-1/2 text-right" style={{ ...fontSecondaryStyle }}>{formData.text.seventh.text?.length > 0 ? formData.text.seventh.text : formData.text.seventh.placeholder}</p>
                  </div>
                </div>
                {formData.img.type.toLowerCase() === "laser cut flag" ? (
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
            ) : formData.type.toLowerCase() == ("division jacket panel") ? (
              <div className="h-full w-full overflow-x-hidden flex flex-col items-center justify-between">
                <div ref={containerRef} className="w-full h-auto">
                  <p id="main-text" className="text-center" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                  <div className="flex flex-wrap text-center">
                    <p id="text2" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.secondary.text.length > 0 ? formData.text.secondary.text : formData.text.secondary.placeholder}</p>
                    <p id="text3" className="w-1/2 mb-3" style={{ ...fontSecondaryStyle }}>{formData.text.third.text.length > 0 ? formData.text.third.text : formData.text.third.placeholder}</p>
                  </div>
                </div>
                <div id="division" className="h-full w-full flex justify-center">
                  <div id="bird" className="h-[100%] w-[84%]" style={birdStyle}></div>
                  <div id="ring" className="h-[58%] w-[67%] absolute z-100" style={ringStyle}></div>
                </div>
              </div>
            ) : formData.type.toLowerCase() == "cover" ? (
              <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
              </div>
            ) : (
              <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
                <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
              </div>
            )}
          </div>
        </div>
        {
          formData.sides.current == 2 && (
            <>
              <div style={backTextureStyle} className="mt-6 flex items-center">
                <div id="back-patch" className="flex items-center transform lg:scale-150"
                  style={backStyle}>
                  <div className="h-full w-full text-center overflow-x-hidden flex items-center justify-center">
                    <p id="back-main-text" className="inline-block" style={{ ...backFontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
                  </div>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  );
  // // format by option
  // return (
  //   <div className="swimlane md:grid-flow-row hiddenScroll md:p-0 md:overflow-x-auto md:grid-cols-2 w-full justify-center lg:pr-16">
  //     <div id="visualizer" className={classNames(
  //       className,
  //       "md:col-span-2 aspect-square snap-center flex items-center justify-center overflow-clip rounded-sm w-full max-h-1/2 p-6 py-4 sm:relative"
  //     )}>
  //       {/* ${scrollPosition >= 100 ? ' w-100 fixed z-50' : ' transition relative'
  //         } */}
  //       <div id="patch" className={classNames(
  //         formData.type.toLowerCase().includes("flag") ? "justify-center" : "justify-center",
  //         "flex items-center transform lg:scale-150"
  //       )} style={style}>

  //         { formData.type.toLowerCase().includes("id panel") ? (
  //           <IDPanel
  //           formData={formData}
  //           containerRef={containerRef}
  //           secondaryContainerRef={secondaryContainerRef || null}
  //           fontStyle={fontStyle}
  //           secondaryFontStyle={secondaryFontStyle || null}
  //           flagStyle={flagStyle}
  //           maskStyle={maskStyle}
  //         />
  //         ) : formData.type.toLowerCase().includes("name tape") ? (
  //           <NameTape formData={formData} />
  //         ) : formData.type.toLowerCase().includes("medical patch") ? (
  //           <MedicalPatch formData={formData} />
  //         ) : formData.type.toLowerCase() == ("flag") ? (
  //           <Flag formData={formData} />
  //         ) : formData.type.toLowerCase().includes("call sign") ? (
  //           <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
  //             <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
  //           </div>
  //         ) : formData.type.toLowerCase().includes("quote") ? (
  //           <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
  //             <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
  //           </div>
  //         ) : formData.type.toLowerCase().includes("light saber") ? (
  //           <LightSaber formData={formData} />
  //         ) : formData.type.toLowerCase() == 'custom printed patch' ? (
  //           <CustomPatch formData={formData} />
  //         ) : formData.type.toLowerCase() == "jacket panel" ? (
  //           <JacketPanel formData={formData} />
  //         ) : formData.type.toLowerCase() == ("division jacket panel") ? (
  //           <DivisionJacketPanel formData={formData} />
  //         ) : formData.type.toLowerCase().includes("ranger tabs") ? (
  //           <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
  //             <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
  //           </div>
  //         ) : (
  //           <div ref={containerRef} className="h-full text-center overflow-x-hidden flex items-center justify-center">
  //             <p id="main-text" className="inline-block" style={{ ...fontStyle }}>{formData.text.primary.text.length > 0 ? formData.text.primary.text : formData.text.primary.placeholder}</p>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   </div >
  // );
}