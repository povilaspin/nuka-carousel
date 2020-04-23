import React, { useState, useCallback } from 'react';
import Carousel from '../src/index';
import ReactDom from 'react-dom';

export default function App() {
  const colors = [
    '7732bb',
    '047cc0',
    '00884b',
    'e3bc13',
    'db7c00',
    'aa231f',
    'e3bc13',
    'db7c00',
    'aa231f'
  ];
  const [animation, setAnimation] = useState(undefined);
  const [autoplay, setAutoplay] = useState(false);
  const [cellAlign, setCellAlign] = useState('left');
  const [heightMode, setHeightMode] = useState('max');
  const [length, setLength] = useState(colors.length);
  const [scrollMode, setScrollMode] = useState('remainder');
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionMode, setTransitionMode] = useState('scroll');
  const [underlineHeader, setUnderlineHeader] = useState(false);
  const [withoutControls, setWithoutControls] = useState(false);
  const [wrapAround, setWrapAround] = useState(false);
  const [zoomScale, setZoomScale] = useState(0.5);

  const handleImageClick = useCallback(() => {
    console.log('Slide clicked');
  }, []);

  const handleZoomScaleChange = useCallback(event => {
    setZoomScale(event.target.value);
  }, []);

  const renderTopControls = currentSlide => {
    return (
      <div
        style={{
          fontFamily: 'Helvetica',
          color: '#fff',
          textDecoration: underlineHeader ? 'underline' : 'none'
        }}
      >
        Nuka Carousel: Slide {Math.ceil(currentSlide) + 1}
      </div>
    );
  };

  const slides = colors.slice(0, length).map((color, index) => (
    <>
      <input
        style={{ position: 'absolute', top: '50%', left: '25%' }}
        type="text"
      />
      <img
        src={`https://via.placeholder.com/400/${color}/ffffff/&text=slide${index +
          1}`}
        alt={`Slide ${index + 1}`}
        key={color}
        draggable="false"
        onClick={() => handleImageClick()}
        style={{
          height: heightMode === 'current' ? 100 * (index + 1) : 400
        }}
      />
    </>
  ));

  return (
    <div style={{ width: '50%', margin: 'auto' }}>
      <Carousel
        animation={animation}
        autoplay={autoplay}
        cellAlign={cellAlign}
        heightMode={heightMode}
        scrollMode={scrollMode}
        slideIndex={slideIndex}
        slideListMargin={0}
        slidesToScroll={slidesToScroll}
        slidesToShow={slidesToShow}
        transitionMode={transitionMode}
        withoutControls={withoutControls}
        wrapAround={wrapAround}
      >
        {slides}
      </Carousel>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('content'));
