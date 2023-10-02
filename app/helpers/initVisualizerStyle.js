export function initVisualizerStyle(formData) {
  const bgColorImg = 'url("' + formData.bgColor.img + '")';
  const textColorImg = 'url("' + formData.text.color.img + '")';
  const hiltImg = 'url("' + formData.lightsaber.hilt.img + '")';
  const bladeImg = 'url("' + formData.lightsaber.blade.img + '")';
  const img = 'url("' + formData.img.img + '")';
  const symbolColor = 'url("' + formData.img.color.img + '")';

  let obj = {
    canvas: {
      height: '230px'
    },
    patch: {
      backgroundImage: bgColorImg,
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
        backgroundImage: textColorImg,
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
        backgroundImage: textColorImg,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontFamily: 'WMIStencil-Black',
        backgroundClip: 'text',
        width: 'auto',
        textAlign: 'center',
        lineHeight: '38px',
        fontSize: '32px',
      },
    },
    img: {
      flag: {
        backgroundImage: img,
        aspectRatio: '2/1',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      symbol: {
        backgroundImage: symbolColor,
        maskImage: img,
        maskSize: 'cover',
        WebkitMaskImage: img,
        WebkitMaskSize: 'cover',
        transform: 'scale(1.5)',
      },
    },
    lightsaber: {
      hilt: {
        backgroundImage: hiltImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: 'url("' + formData.hiltImg + '")',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: 'url("' + formData.hiltImg + '")',
        WebkitMaskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        width: '27%',
        height: '100%',
      },
      blade: {
        backgroundImage: bladeImg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: 'url("' + formData.bladeImg + '")',
        maskSize: 'contain',
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskImage: 'url("' + formData.bladeImg + '")',
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
      break;
    case 'name tape':
      obj.text.primary.fontSize = '48.6397px';
      obj.text.primary.lineHeight = '48.6397px';
      obj.text.primary.marginTop = '6.07996px';
      break;
    case 'medical patch':
      obj.patch.maskImage = 'none';
      obj.patch.WebkitMaskImage = 'none';
      break;
    case 'light sabers':
      obj.patch.height = '58px';
      break;
    case 'flag':
      obj.patch.padding = '0';
      obj.patch.background = 'none';
      break;
  }


  return obj;
}

var obj2 = {
  canvas: {
    height: '230px'
  },
  patch: {
    backgroundImage: bgColorImg,
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
  font: {
    backgroundImage: textColorImg,
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
  font2: {
    backgroundImage: textColorImg,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: 'WMIStencil-Black',
    backgroundClip: 'text',
    width: 'auto',
    textAlign: 'center',
    lineHeight: '38px',
    fontSize: '32px',
  },
  flag: {
    backgroundImage: flagImg,
    aspectRatio: '2/1',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  hilt: {
    backgroundImage: hiltImg,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maskImage: 'url("' + formData.hiltImg + '")',
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskImage: 'url("' + formData.hiltImg + '")',
    WebkitMaskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    width: '27%',
    height: '100%',
  },
  blade: {
    backgroundImage: bladeImg,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maskImage: 'url("' + formData.bladeImg + '")',
    maskSize: 'contain',
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    WebkitMaskImage: 'url("' + formData.bladeImg + '")',
    WebkitMaskSize: 'contain',
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskPosition: 'center',
    height: '100%',
  }
};
