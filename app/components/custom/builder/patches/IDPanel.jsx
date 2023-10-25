import { useState, useRef } from 'react';
import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function IDPanel({ formData, methods, containerRef, secondaryContainerRef, fontStyle, secondaryFontStyle, flagStyle, maskStyle, ...props }) {

  const { text, img } = initVisualizerStyle(formData);
  // Create a ref to access the container element

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


function initVisualizerStyle(formData) {
  const bgColor = 'url("' + formData.bgColor.img + '")';
  const textColor = 'url("' + formData.text.color.img + '")';
  const hiltColor = 'url("' + formData.lightsaber.hilt.color + '")';
  const bladeColor = 'url("' + formData.lightsaber.blade.color + '")';
  const symbolColor = 'url("' + formData.img.color.color + '")';
  const img = formData.type.toLowerCase() === "medical patch" ? 'url("' + formData.img.symbol + '")' : 'url("' + formData.img.img + '")';
  const mask = 'url("' + formData.img.color.mask.img + '")';
  const hiltImg = 'url("' + formData.lightsaber.hilt.img + '")';
  const bladeImg = 'url("' + formData.lightsaber.blade.img + '")';
  // console.log(symbolColor);
  // console.log(mask);
  // console.log(bladeColor);
  // console.log(hiltColor);
  // console.log(bladeImg);
  // console.log(hiltImg);
  let obj = {
    canvas: {
      height: '230px'
    },
    patch: {
      backgroundImage: bgColor,
      width: '290px',
      height: 'calc(290px/3)',
      textTransform: 'uppercase',
      padding: '10px',
      WebkitTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
      MozTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
      msTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
      OTransition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
      transition: 'background-image 0.3s ease-in-out, height 0.2s ease-in-out, width 0.4s ease-in-out !important',
    },
    text: {
      primary: {
        backgroundImage: textColor,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'WMIStencil-Black',
        backgroundClip: 'text',
        width: 'auto',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        lineHeight: '96.66px',
        fontSize: '96.66px',
        marginTop: '8.3333px'
      },
      secondary: {
        backgroundImage: textColor,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'WMIStencil-Black',
        backgroundClip: 'text',
        lineHeight: '34px',
        fontSize: '32px',
      },
    },
    img: {
      flag: {
        // backgroundImage: textColor,
        // maskImage: img,
        // maskSize: 'cover',
        // WebkitMaskImage: img,
        // WebkitMaskSize: 'cover',
        // // aspectRatio: '2/1',
        backgroundImage: img,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      mask: {
        backgroundImage: textColor,
        maskImage: mask,
        maskSize: 'cover',
        WebkitMaskImage: mask,
        WebkitMaskSize: 'cover',
      },
      symbol: {
        backgroundImage: symbolColor,
        maskImage: mask,
        maskSize: 'cover',
        WebkitMaskImage: mask,
        WebkitMaskSize: 'cover',
      },
    },
    lightsaber: {
      hilt: {
        backgroundImage: hiltColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: hiltImg,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: hiltImg,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        width: '27%',
        height: '100%',
      },
      blade: {
        backgroundImage: bladeColor,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: bladeImg,
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: bladeImg,
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        height: '100%',
      }
    }
  };

  switch (formData.type.toLowerCase()) {
    case 'id panel':
      obj.patch.height = 'calc(290px*3)/2)';
      obj.text.primary.fontSize = '96px';
      obj.text.primary.lineHeight = '96px';
      obj.text.primary.marginTop = 'calc(96px/9)';
      obj.text.secondary.lineHeight = '30.8475px';
      obj.text.secondary.fontSize = '36.6316px';
      obj.text.secondary.width = 'auto';
      obj.text.secondary.textAlign = 'center';
      break;
    case 'name tape':
      obj.text.primary.fontSize = '48.6397px';
      obj.text.primary.lineHeight = '48.6397px';
      obj.text.primary.marginTop = '6.07996px';
      break;
    case 'medical patch':
      obj.patch.maskImage = 'none';
      obj.patch.WebkitMaskImage = 'none';
      obj.text.secondary.width = 'auto';
      obj.text.secondary.textAlign = 'center';
      break;
    case 'light sabers':
      obj.patch.height = '58px';
      break;
    case 'flag':
      obj.patch.padding = '0';
      obj.patch.background = 'none';
      obj.text.secondary.width = 'auto';
      obj.text.secondary.textAlign = 'center';
      break;
    case 'jacket panel':
      obj.text.secondary.fontSize = '34px';
      obj.patch.borderRadius = '.5rem'
      break;
    case 'division jacket panel':
      obj.text.secondary.fontSize = '27px';
      obj.text.secondary.lineHeight = '29px';
      obj.text.primary.fontSize = '52px';
      obj.text.primary.lineHeight = '52px';
  }


  return obj;
}
