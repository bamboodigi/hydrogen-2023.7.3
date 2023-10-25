import { useState, useRef } from 'react';

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
  console.log(symbolColor);
  console.log(mask);
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
