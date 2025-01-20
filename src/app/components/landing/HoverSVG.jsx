'use client'
import React, { useState, useEffect, useRef } from 'react';
import senlocs from "../../../../public/map/Group 108.svg"
import Image from 'next/image';

const HoverSVG = () => {
  // Track which section is being hovered using its index
  const [hoveredSection, setHoveredSection] = useState(null);
  const [visiblePins, setVisiblePins] = useState([]);
  const containerRef = useRef(null);

  const getGradientColor = (baseColor, sectionIndex) => {
    // Only transform color if this specific section is being hovered
    if (hoveredSection === sectionIndex) {
      if (baseColor === '#33B34A' || baseColor === '#5df575') return '#9ACD32';  // Yellow Green
      if (baseColor === '#3EBD52') return '#5df575';  // Yellow Green
      if (baseColor === '#48C659') return '#5df575';  // Yellow Green
      if (baseColor === '#4CC95C') return '#5df575';  // Yellow Green
      if (baseColor === '#43C155') return '#5df575';  // Yellow Green
    }
    return baseColor;
  };

  // Array of position classes for each image
  const markerPositions = [
    { x: 111, y: 254 },    // Marker 1
    { x: 222, y: 238 },    // Marker 2
    { x: 92, y: 356 },    // Marker 3
    { x: 202, y: 362 },    // Marker 4
    { x: 302, y: 434 },    // Marker 5
    { x: 277, y: 308 },    // Marker 6
    { x: 157, y: 455 },    // Marker 7
    { x: 69, y: 482 },    // Marker 8
    { x: 231, y: 536 },    // Marker 9
    { x: 307, y: 566 },    // Marker 10
    { x: 87, y: 560 },    // Marker 11
    { x: 181, y: 617 },    // Marker 12
    { x: 102, y: 647 },    // Marker 13
    { x: 279, y: 710 },    // Marker 14
    { x: 163, y: 740 },    // Marker 15
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Faster stagger animation (100ms between pins)
          markerPositions.forEach((_, index) => {
            setTimeout(() => {
              setVisiblePins(prev => [...prev, index]);
            }, index * 100); // Reduced from 200ms to 100ms
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div className="relative" ref={containerRef}>
      {markerPositions.map((position, index) => (
        <Image
          key={index}
          src={senlocs}
          width={40}
          height={40}
          alt={`location-${index}`}
          className="absolute transition-all duration-500" // Reduced from 500ms to 300ms
          style={{
            transform: `translate(-50%, -50%) scale(${visiblePins.includes(index) ? 1 : 0})`,
            opacity: visiblePins.includes(index) ? 1 : 0,
            left: `${position.x}px`,
            top: `${position.y}px`,
            transitionDelay: `${index * 1}ms` // Reduced from 200ms to 100ms
          }}
        />
      ))}

      <svg
        width="463"
        height="834"
        viewBox="0 0 463 834"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0_651_25247" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="463" height="834">
          <path d="M462.15 607.876C460.498 620.212 453.889 632.011 451.979 644.303C450.155 656.038 446.401 665.219 439.942 675.366L441.423 680.537C436.316 693.945 427.09 705.808 419.473 717.907C416.533 722.627 410.89 726.188 406.427 729.384C401.535 732.881 395.463 734.318 390.85 737.965C378.427 747.769 366.003 757.573 353.559 767.356C343.689 775.164 330.043 778.061 318.435 782.201L318.048 778.983L316.504 777.782L314.873 778.211C314.079 779.863 313.671 781.665 313.693 783.509L312.491 784.883C307.921 785.934 304.016 789.087 299.789 790.954C294.232 793.399 287.087 793.828 281.186 795.115C270.801 797.347 259.193 800.092 249.366 803.911L246.191 808.438L240.462 807.279C230.828 811.033 221.688 818.07 214.95 825.9C204.823 825.321 199.952 826.415 191.799 832.55L188.859 833.194C185.684 832.1 181.135 828.474 177.723 828.861C172.896 829.418 167.124 831.156 162.361 829.59C160.258 827.895 159.4 825.299 157.898 823.111L154.293 825.235C150.688 825.814 146.397 825.235 143.05 823.991C142.578 823.283 142.02 822.618 141.419 822.039L139.788 821.545L138.802 821.867C138.308 822.339 137.772 822.789 137.214 823.176L136.119 823.111C135.261 822.425 134.553 821.588 134.038 820.601C128.545 817.748 122.366 816.225 116.358 814.981C113.912 813.007 111.681 810.883 108.72 809.725L107.132 811.312C98.5493 804.404 92.0265 795.33 83.9375 787.907C83.6371 787.028 83.5727 786.105 83.7015 785.183C80.8263 780.27 78.1657 775.701 75.6982 770.445C74.1748 767.227 72.6514 764.009 71.128 760.791C70.0766 758.582 71.0851 756.2 70.3341 754.034C66.3003 742.556 62.3094 731.143 59.4343 719.173C58.1254 718.594 57.117 717.585 56.5377 716.298L56.7522 715.032L57.7821 714.711C58.3185 714.839 58.8764 714.904 59.4128 714.818C57.5461 702.29 53.4694 692.1 48.8562 680.193C44.2216 668.266 37.0123 655.351 34.7594 642.694C33.5793 636.172 31.97 629.737 31.97 623.108V612.017C31.97 609.206 34.6736 606.568 34.8667 603.65C35.2529 597.922 32.0559 591.293 30.5325 585.887C28.6014 578.958 26.6488 572.007 24.7178 565.057L26.091 559.844C25.4259 564.091 29.7386 573.809 31.9915 577.413H33.3003L33.6222 575.397L34.223 574.517L34.7808 574.41L34.8881 574.517C34.8452 570.549 35.3387 566.322 33.3003 562.74C31.6482 561.86 29.9317 561.538 28.2795 560.616L27.3998 558.75C27.786 557.119 28.3225 555.553 28.9876 554.009C27.0995 540.343 25.2542 526.678 23.3661 513.034C22.186 504.453 21.0273 495.872 19.8472 487.312C19.3108 483.429 19.4395 478.602 17.2939 475.127L18.1521 474.183L18.7529 474.076L20.2763 475.127C20.3622 470.987 21.8641 467.125 22.1859 463.006C21.1131 459.231 18.7958 456.463 18.8172 452.387C18.8387 448.483 18.8602 445.093 18.0877 441.296C16.0923 431.578 14.0539 422.461 10.8998 413.193C9.67681 409.546 10.063 405.32 8.62545 401.737C7.14496 398.069 5.51428 394.551 4.67748 390.689C2.61767 381.271 0 372.218 0 362.543C0.343303 362.672 0.686587 362.844 0.986977 363.037V363.273L1.43761 364.045C3.2614 358.124 2.14564 349.393 0 343.622C4.26983 341.605 8.26071 336.242 9.31207 331.651C10.7067 325.473 13.9037 321.054 17.2939 315.712C15.1268 320.839 12.8095 325.559 10.0845 330.386C11.093 333.561 13.9896 335.448 17.2939 334.934C16.0279 338.473 14.9551 343.021 12.2087 345.724L11.2217 345.789L10.4064 346.454C9.61248 350.294 10.4922 353.962 9.31207 357.759C7.53119 363.487 6.54423 367.113 6.86608 373.055L11.6723 378.719L7.4239 387.557L14.1827 392.47L23.9454 393.242L28.9662 389.681C28.301 384.983 25.2971 379.469 21.0487 377.152L20.3836 374.857L27.4857 361.277C27.5929 357.845 24.7607 355.829 24.5676 352.546C24.3531 349.285 25.2756 346.175 23.9239 343.107C23.366 342.699 22.9798 342.185 22.7867 341.52C22.9369 338.366 24.9538 335.813 26.9278 333.496C28.6228 326.889 29.7386 319.724 30.4038 312.923C31.1333 305.372 30.1248 297.542 35.7249 291.942C36.8406 286.429 35.5747 281.023 37.3556 275.638C40.1235 272.571 43.8355 270.79 46.4102 267.572L48.8133 259.978L49.2425 259.549C51.4096 250.539 52.7184 242.108 53.5981 232.604L48.47 219.346C50.208 210.122 50.2938 198.73 46.1742 190.214C48.2769 188.905 50.6801 189.141 52.8471 188.047C55.2932 186.781 57.6534 183.735 59.6917 181.912C64.0689 177.986 70.3556 175.755 74.1105 171.507C76.9212 161.617 80.1826 151.813 83.9375 142.181C85.8256 137.354 87.113 132.785 88.3575 127.765C89.4947 123.002 87.628 117.811 88.9583 113.027L88.5721 111.826C84.8601 111.461 80.4401 108.951 77.9941 106.162C76.5136 102.107 75.1189 98.01 75.2047 93.6337C79.7964 87.1764 87.7782 88.7854 93.7645 85.3315C97.0903 80.9337 99.6221 76.5359 105.651 76.1712C98.6566 62.8276 83.9375 60.9398 75.2047 49.9345C85.2034 50.2349 91.6832 54.6112 100.223 59.5668C107.926 64.0504 118.375 61.9909 122.731 71.9021L120.177 73.2107C120.564 74.219 120.993 75.2058 121.486 76.1712L120.177 77.5871L124.597 80.569C134.918 78.059 144.294 74.3477 154.186 70.4219C168.261 71.7734 180.084 79.3033 193.837 81.942C187.744 77.7587 181.586 72.2882 174.526 69.7783C168.583 67.6545 162.682 62.3985 156.138 65.123L155.43 66.26L154.679 66.6462L151.847 64.5653C148.543 64.2435 145.11 65.0801 141.913 64.0289C136.463 59.3093 131.227 53.8389 125.198 49.9131C118.268 45.408 110.393 43.0267 103.334 38.7577H100.716L101.21 43.9278C102.884 45.9014 105.136 46.8668 106.274 49.2909L104.965 52.0154L103.334 52.5088C96.8542 48.3256 90.9752 42.5548 83.9161 39.5729C86.5552 42.7908 90.0955 45.0433 92.6917 48.3041C78.4876 45.5796 68.1455 35.218 55.4219 29.297L55.143 30.8416L52.8686 29.1898C51.71 26.6798 51.7743 23.7193 50.3797 21.3381C48.7275 18.5063 46.4532 16.1251 44.9512 13.229C51.0448 10.1827 55.1001 3.57524 61.5799 1.55869C66.7295 2.00919 71.9004 2.48114 77.05 2.9531C81.3413 3.33925 85.5467 1.45143 89.838 2.43825L91.0825 5.26999C90.7606 7.32945 90.6963 9.41038 91.4687 11.3197C94.7086 12.1778 98.1416 12.5639 101.188 14.0013L102.111 15.9105C104.343 16.0393 106.488 15.2669 108.655 14.8164C117.882 19.3001 125.756 32.2789 132.601 39.723C139.295 47.0169 148.993 50.2134 157.812 54.2679V52.7019C146.483 46.9955 135.926 38.7148 127.623 29.0825C122.58 23.2259 118.504 17.1762 111.681 13.5507C105.995 10.5259 97.9699 11.4055 93.3139 6.77168L92.8633 3.48941C99.6865 0.550395 108.805 -1.20872 116.122 0.979453L119.062 3.03893C122.795 16.5541 134.446 26.4653 143.393 36.9771C150.495 45.3436 158.499 49.484 166.845 56.2845C180.813 67.6115 194.781 78.9386 208.749 90.3085C217.675 97.5381 226.043 104.811 232.716 114.228L230.141 115.58L228.489 114.829C226.837 111.847 224.541 110.817 221.194 110.689L219.563 111.225C221.623 117.296 230.463 123.045 235.935 126.006C234.819 124.483 233.875 122.788 233.231 121.007L233.725 119.205L236.664 118.497L238.037 119.441C241.213 128.773 245.955 137.333 250.375 146.171C247.5 145.099 244.625 143.554 241.492 143.876L240.29 146.922C243.058 148.317 245.912 147.973 248.401 150.14L248.959 155.053H250.375C251.019 153.787 252.048 152.843 253.379 152.264C255.632 161.317 259.151 167.71 266.467 173.33L266.403 174.789L265.416 176.312L263.442 177.042C262.348 175.69 261.425 174.189 260.567 172.665C257.069 170.306 252.606 170.391 248.959 168.311C251.426 172.494 255.46 175.519 258.936 178.779L259.065 182.834L261.511 184.636C259.944 185.966 258.485 187.468 257.262 189.12L260.588 191.737L264.193 191.479C267.476 189.034 269.364 185.194 270.737 181.44C273.462 184.765 276.745 187.961 278.912 191.673C281.53 196.199 283.804 201.691 287.838 205.166C290.455 205.531 293.052 206.882 294.833 208.835C298.051 216.729 299.059 221.148 306.934 224.71C309.509 230.18 310.946 235.543 312.513 241.4L313.049 239.34L313.693 238.59C314.851 238.804 315.946 239.276 316.911 239.941L316.31 242.001C319.078 245.025 322.275 247.879 324.163 251.59V255.408C322.254 257.253 319.872 258.069 318.392 260.321C319.894 260.085 321.353 259.592 322.704 258.841C325.129 264.097 327.253 268.323 327.983 274.072L322.704 274.909L323.799 271.455L322.383 268.731L320.087 268.302L318.392 272.013L318.928 274.845C320.044 276.046 320.816 277.462 321.288 279.028L319.679 282.31C316.504 279.736 313.049 276.84 308.822 276.411L305.303 277.955L302.557 281.602L303.501 283.576L306.784 283.04L311.182 279.435C314.465 282.718 316.761 286.644 320.237 289.711C325.215 291.17 329.399 290.956 334.591 290.848L337.874 288.767L335.707 283.812C338.84 282.375 342.187 280.122 345.792 280.787C352.186 283.597 352.808 289.668 353.902 295.74C354.996 301.768 357.228 306.702 357.485 312.902L354.825 311.035L352.035 305.35L349.589 304.149C349.439 307.882 349.847 312.516 351.714 315.819C354.245 317.493 356.992 316.634 359.566 318.115C362.098 333.389 367.334 347.912 369.973 363.165L366.154 368.507C364.566 361.985 362.764 355.893 360.489 349.586H358.901C358.816 352.525 358.515 355.507 358.901 358.403L358.794 358.36C358.537 359.347 358.558 360.377 358.901 361.363L359.609 362.179L361.476 362.736C362.227 364.388 362.849 366.126 363.493 367.863L367.248 370.588L370.788 370.309L372.054 365.718H373.363C376.045 369.708 375.616 374.664 378.062 378.719C380.594 382.859 383.04 385.97 385.035 390.603C386.151 389.681 387.159 388.673 388.039 387.557L388.962 389.574L388.039 390.625C388.404 391.268 388.812 391.848 389.219 392.427L389.348 393.414C390.786 392.491 392.223 391.569 393.639 390.646L394.734 393.306C394.498 394.508 394.09 395.666 393.532 396.739L393.639 399.356L395.163 402.231C397.416 403.968 399.84 405.363 401.02 408.066L400.033 408.109C399.39 408.538 398.767 408.945 398.124 409.353L396.815 414.051C398.682 419.393 400.033 422.139 403.745 426.344C405.676 425.915 407.672 425.593 409.624 425.571C412.199 434.796 420.417 439.966 425.352 447.839L425.824 451.937L421.189 453.353C415.632 450.349 414.388 442.991 407.565 441.639L404.711 441.918L402.479 444.149L401.02 448.89C402.565 449.791 404.217 450.263 405.977 450.349L408.058 449.577L409.624 447.389C411.985 448.161 414.302 448.976 415.761 451.057L415.439 453.353C419.323 456.999 423.035 460.239 425.524 465.023L424.451 466.288L424.172 467.49C424.451 468.734 424.901 469.893 425.524 470.965L426.854 469.399L426.081 466.46C434.106 468.584 435.844 475.813 438.526 482.614C437.947 484.502 437.539 486.475 437.131 488.449C437.582 489.65 438.076 490.873 438.526 492.053L437.711 493.533C436.681 494.134 435.844 494.949 435.243 496C436.96 498.36 437.754 501.063 439.942 503.037L437.711 504.667L438.097 506.319L439.792 506.705L441.551 504.517H442.86C443.59 508.357 444.856 512.369 444.448 516.295H445.929C445.843 512.734 446.422 508.808 448.761 505.997C448.847 504.903 448.675 503.874 448.203 502.887L448.589 502.179C449.791 502.672 450.842 503.466 451.657 504.517C452.451 506.491 452.73 508.615 452.795 510.738C462.364 526.12 461.141 541.738 460.819 559.114C460.669 567.288 459.575 576.062 460.326 584.214C461.163 593.095 463.416 598.888 462.193 608.026L462.15 607.876Z" fill="white" />
        </mask>


        <g mask="url(#mask0_651_25247)">
          <path d="M1002.08 380.134L718.875 -259.135L525.553 -326.604L-229.777 99.726L-405.076 230.716L-557.159 474.676L-594.407 807.086L-533.771 797.883L-397.223 810.432L-258.421 857.435L-199.094 869.62L498.668 1040.49L863.77 963.905L1050.33 717.735L1002.08 380.134Z"
            fill="#33B34A"
            onMouseEnter={() => setHoveredSection(0)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M465.925 446.423L490.278 327.747L331.951 391.118L465.925 446.423Z"
            fill="url(#paint0_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(1)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M415.675 -213.097L347.336 -19.5075L505.405 148.446L415.675 -213.097Z"
            fill="url(#paint1_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(2)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M718.875 -259.135L415.675 -213.097L505.406 148.445L718.875 -259.135Z"
            fill="url(#paint2_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(3)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M465.925 446.423L331.951 391.118L408.422 512.927L465.925 446.423Z"
            fill="url(#paint3_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(4)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M6.67285 92.5605L11.0929 161.488L116.937 199.931L6.67285 92.5605Z"
            fill="url(#paint4_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(5)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M505.405 148.445L347.336 -19.5078L343.581 198.752L505.405 148.445Z"
            fill="url(#paint5_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(6)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M347.336 -19.5083L139.209 -41.0254L343.581 198.751L347.336 -19.5083Z"
            fill="url(#paint6_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(7)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M505.405 148.445L343.581 198.752L490.278 327.747L505.405 148.445Z"
            fill="url(#paint7_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(8)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M6.67313 92.5606L139.209 -41.0254L-74.0459 79.0883L6.67313 92.5606Z"
            fill="url(#paint8_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(9)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M11.0931 161.488L-130.262 157.219L8.13211 281.451L11.0931 161.488Z"
            fill="url(#paint9_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(10)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M343.581 198.751L139.209 -41.0254L216.903 138.019L343.581 198.751Z"
            fill="url(#paint10_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(11)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M490.278 327.747L333.689 321.097L331.951 391.118L490.278 327.747Z"
            fill="url(#paint11_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(12)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M6.67313 92.5612L-74.0459 79.0889L11.0931 161.489L6.67313 92.5612Z"
            fill="url(#paint12_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(13)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M343.581 198.752L216.902 138.02L333.69 321.097L343.581 198.752Z"
            fill="url(#paint13_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(14)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M139.209 -41.0254L6.67285 92.5606L116.937 199.931L139.209 -41.0254Z"
            fill="url(#paint14_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(15)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M216.902 138.019L139.208 -41.0254L116.937 199.931L216.902 138.019Z"
            fill="url(#paint15_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(16)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M116.937 199.932L11.0928 161.488L8.13184 281.452L116.937 199.932Z"
            fill="url(#paint16_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(17)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M465.926 446.423L408.423 512.926L516.22 608.198L465.926 446.423Z"
            fill="url(#paint17_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(18)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M490.278 327.747L343.581 198.752L333.689 321.097L490.278 327.747Z"
            fill="url(#paint18_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(19)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M295.991 624.437L163.133 415.252L49.3926 592.859L295.991 624.437Z"
            fill="url(#paint19_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(20)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M-74.0458 79.0883L139.209 -41.0254L-229.776 99.7258L-74.0458 79.0883Z"
            fill="url(#paint20_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(21)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M139.21 -41.0252L525.554 -326.604L-229.776 99.726L139.21 -41.0252Z"
            fill="url(#paint21_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(22)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M11.0931 161.489L-74.0459 79.0889L-130.262 157.22L11.0931 161.489Z"
            fill="url(#paint22_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(23)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M408.422 512.927L331.952 391.118L163.133 415.252L408.422 512.927Z"
            fill="url(#paint23_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(24)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M216.902 138.02L116.937 199.932L163.132 415.253L216.902 138.02Z"
            fill="url(#paint24_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(25)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M333.69 321.097L216.903 138.02L163.133 415.253L333.69 321.097Z"
            fill="url(#paint25_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(26)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M331.952 391.118L333.69 321.097L163.133 415.253L331.952 391.118Z"
            fill="url(#paint26_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(27)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M116.937 199.932L8.13184 281.452L163.133 415.252L116.937 199.932Z"
            fill="url(#paint27_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(28)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M163.133 415.252L-61.5371 440.266L49.3925 592.859L163.133 415.252Z"
            fill="url(#paint28_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(29)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M8.13179 281.451L-130.262 157.219L-161.975 326.931L8.13179 281.451Z"
            fill="url(#paint29_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(30)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M8.13179 281.452L-161.975 326.932L-61.5372 440.266L8.13179 281.452Z"
            fill="url(#paint30_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(31)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M163.133 415.253L8.13185 281.452L-61.5371 440.266L163.133 415.253Z"
            fill="url(#paint31_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(32)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M76.0842 718.894L49.3924 592.859L-15.127 666.185L76.0842 718.894Z"
            fill="url(#paint32_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(33)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M262.519 745.581L295.991 624.438L168.604 750.236L262.519 745.581Z"
            fill="url(#paint33_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(34)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M516.22 608.198L408.423 512.927L295.991 624.438L516.22 608.198Z"
            fill="url(#paint34_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(35)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M408.422 512.926L163.133 415.252L295.991 624.437L408.422 512.926Z"
            fill="url(#paint35_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(36)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M295.991 624.438L49.3926 592.859L168.604 750.236L295.991 624.438Z"
            fill="url(#paint36_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(37)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M528.171 836.326L385.679 773.855L389.026 866.531L528.171 836.326Z"
            fill="url(#paint37_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(38)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M385.679 773.855L295.992 624.438L262.52 745.581L385.679 773.855Z"
            fill="url(#paint38_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(39)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M528.171 836.326L516.219 608.198L385.679 773.856L528.171 836.326Z"
            fill="url(#paint39_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(40)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M516.22 608.198L295.991 624.438L385.679 773.856L516.22 608.198Z"
            fill="url(#paint40_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(41)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M385.679 773.856L262.52 745.581L389.026 866.531L385.679 773.856Z"
            fill="url(#paint41_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(42)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M168.604 750.236L49.3926 592.859L76.0844 718.894L168.604 750.236Z"
            fill="url(#paint42_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(43)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M49.3925 592.859L-61.5371 440.266L-15.1269 666.184L49.3925 592.859Z"
            fill="url(#paint43_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(44)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M389.026 866.531L262.519 745.581L257.091 911.153L389.026 866.531Z"
            fill="url(#paint44_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(45)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M262.519 745.581L168.604 750.236L257.091 911.153L262.519 745.581Z"
            fill="url(#paint45_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(46)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M168.604 750.236L76.0842 718.894L-18.0879 786.148L168.604 750.236Z"
            fill="url(#paint46_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(47)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M76.0842 718.894L-15.1269 666.185L-18.0879 786.148L76.0842 718.894Z"
            fill="url(#paint47_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(48)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M257.091 911.153L168.605 750.236L-87.3916 867.776L257.091 911.153Z"
            fill="url(#paint48_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(49)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
          <path d="M168.605 750.236L-18.0874 786.148L-87.3916 867.776L168.605 750.236Z"
            fill="url(#paint49_linear_651_25247)"
            onMouseEnter={() => setHoveredSection(50)}
            onMouseLeave={() => setHoveredSection(null)}
            style={{ transition: 'all 0.3s ease' }}
          />
        </g>

        <defs>
          <linearGradient id="paint0_linear_651_25247" x1="461.165" y1="310.638" x2="394.07" y2="426.729" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 0 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 0 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 0 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 0 + 1)} />
          </linearGradient>

          <linearGradient id="paint1_linear_651_25247" x1="527.591" y1="-148.73" x2="393.412" y2="83.4332" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 1 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 1 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 1 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 1 + 1)} />
          </linearGradient>

          <linearGradient id="paint2_linear_651_25247" x1="623.47" y1="-314.569" x2="393.437" y2="83.4469" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 2 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 2 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 2 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 2 + 1)} />
          </linearGradient>

          <linearGradient id="paint3_linear_651_25247" x1="403.641" y1="410.133" x2="360.433" y2="484.896" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 3 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 3 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 3 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 3 + 1)} />
          </linearGradient>

          <linearGradient id="paint4_linear_651_25247" x1="71.207" y1="129.517" x2="42.4475" y2="179.278" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 4 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 4 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 4 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 4 + 1)} />
          </linearGradient>

          <linearGradient id="paint5_linear_651_25247" x1="442.907" y1="35.4221" x2="347.407" y2="200.662" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 5 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 5 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 5 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 5 + 1)} />
          </linearGradient>

          <linearGradient id="paint6_linear_651_25247" x1="310.496" y1="-41.1052" x2="214.997" y2="124.134" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 6 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 6 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 6 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 6 + 1)} />
          </linearGradient>

          <linearGradient id="paint7_linear_651_25247" x1="488.766" y1="138.542" x2="407.297" y2="279.505" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 7 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 7 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 7 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 7 + 1)} />
          </linearGradient>

          <linearGradient id="paint8_linear_651_25247" x1="85.2696" y1="-72.5309" x2="-20.1603" y2="109.89" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 8 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 8 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 8 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 8 + 1)} />
          </linearGradient>

          <linearGradient id="paint9_linear_651_25247" x1="-17.988" y1="144.349" x2="-70.6975" y2="235.55" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 9 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 9 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 9 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 9 + 1)} />
          </linearGradient>

          <linearGradient id="paint10_linear_651_25247" x1="267.706" y1="32.9081" x2="209.586" y2="133.471" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 10 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 10 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 10 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 10 + 1)} />
          </linearGradient>

          <linearGradient id="paint11_linear_651_25247" x1="430.068" y1="292.666" x2="362.973" y2="408.757" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 11 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 11 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 11 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 11 + 1)} />
          </linearGradient>

          <linearGradient id="paint12_linear_651_25247" x1="-9.95201" y1="82.6114" x2="-38.7115" y2="132.373" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 12 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 12 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 12 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 12 + 1)} />
          </linearGradient>

          <linearGradient id="paint13_linear_651_25247" x1="305.679" y1="176.545" x2="250.2" y2="272.538" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 13 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 13 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 13 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 13 + 1)} />
          </linearGradient>

          <linearGradient id="paint14_linear_651_25247" x1="162.286" y1="-28.0191" x2="52.3045" y2="162.277" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 14 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 14 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 14 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 14 + 1)} />
          </linearGradient>

          <linearGradient id="paint15_linear_651_25247" x1="207.073" y1="-2.13444" x2="97.0909" y2="188.162" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 15 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 15 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 15 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 15 + 1)} />
          </linearGradient>

          <linearGradient id="paint16_linear_651_25247" x1="68.8645" y1="171.848" x2="6.32152" y2="280.064" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 16 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 16 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 16 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 16 + 1)} />
          </linearGradient>

          <linearGradient id="paint17_linear_651_25247" x1="512.61" y1="473.111" x2="455.102" y2="572.615" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 17 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 17 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 17 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 17 + 1)} />
          </linearGradient>

          <linearGradient id="paint18_linear_651_25247" x1="426.443" y1="246.34" x2="370.963" y2="342.333" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 18 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 18 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 18 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 18 + 1)} />
          </linearGradient>

          <linearGradient id="paint19_linear_651_25247" x1="210.616" y1="426.643" x2="171.943" y2="612.276" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 19 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 19 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 19 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 19 + 1)} />
          </linearGradient>
          <linearGradient id="paint20_linear_651_25247" x1="31.3616" y1="-103.687" x2="-122.001" y2="161.669" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 20 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 20 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 20 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 20 + 1)} />
          </linearGradient>

          <linearGradient id="paint21_linear_651_25247" x1="334.789" y1="-437.157" x2="-39.0195" y2="209.628" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 21 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 21 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 21 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 21 + 1)} />
          </linearGradient>

          <linearGradient id="paint22_linear_651_25247" x1="-28.4726" y1="105.086" x2="-76.4051" y2="188.022" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 22 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 22 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 22 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 22 + 1)} />
          </linearGradient>

          <linearGradient id="paint23_linear_651_25247" x1="328.869" y1="389.046" x2="276.149" y2="480.266" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 23 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 23 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 23 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 23 + 1)} />
          </linearGradient>

          <linearGradient id="paint24_linear_651_25247" x1="232.697" y1="146.829" x2="99.1198" y2="377.953" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 24 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 24 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 24 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 24 + 1)} />
          </linearGradient>

          <linearGradient id="paint25_linear_651_25247" x1="226.279" y1="142.439" x2="253.198" y2="417.056" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 25 + 1)} />
            <stop offset="0.54" stopColor={getGradientColor('#43C155', 25 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 25 + 1)} />
          </linearGradient>

          <linearGradient id="paint26_linear_651_25247" x1="304.614" y1="303.986" x2="221.116" y2="448.459" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 26 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 26 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 26 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 26 + 1)} />
          </linearGradient>

          <linearGradient id="paint27_linear_651_25247" x1="157.714" y1="223.199" x2="75.9984" y2="364.589" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 27 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 27 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 27 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 27 + 1)} />
          </linearGradient>

          <linearGradient id="paint28_linear_651_25247" x1="84.2622" y1="369.364" x2="-21.157" y2="551.767" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 28 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 28 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 28 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 28 + 1)} />
          </linearGradient>

          <linearGradient id="paint29_linear_651_25247" x1="-51.5443" y1="202.39" x2="-133.013" y2="343.352" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 29 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 29 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 29 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 29 + 1)} />
          </linearGradient>

          <linearGradient id="paint30_linear_651_25247" x1="-37.5345" y1="254.718" x2="-123.791" y2="403.964" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 30 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 30 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 30 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 30 + 1)} />
          </linearGradient>

          <linearGradient id="paint31_linear_651_25247" x1="95.1552" y1="331.406" x2="8.89824" y2="480.652" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 31 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 31 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 31 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 31 + 1)} />
          </linearGradient>

          <linearGradient id="paint32_linear_651_25247" x1="78.3282" y1="609.265" x2="30.4065" y2="692.181" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 32 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 32 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 32 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 32 + 1)} />
          </linearGradient>

          <linearGradient id="paint33_linear_651_25247" x1="300.926" y1="635.121" x2="225.545" y2="734.76" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 33 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 33 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 33 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 33 + 1)} />
          </linearGradient>

          <linearGradient id="paint34_linear_651_25247" x1="456.155" y1="529.266" x2="379.688" y2="661.572" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 34 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 34 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 34 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 34 + 1)} />
          </linearGradient>

          <linearGradient id="paint35_linear_651_25247" x1="295.238" y1="447.216" x2="218.782" y2="579.504" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 35 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 35 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 35 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 35 + 1)} />
          </linearGradient>

          <linearGradient id="paint36_linear_651_25247" x1="196.639" y1="566.707" x2="110.231" y2="716.213" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 36 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 36 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 36 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 36 + 1)} />
          </linearGradient>

          <linearGradient id="paint37_linear_651_25247" x1="461.128" y1="797.324" x2="413.206" y2="880.241" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 37 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 37 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 37 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 37 + 1)} />
          </linearGradient>

          <linearGradient id="paint38_linear_651_25247" x1="361.893" y1="662.214" x2="301.014" y2="767.551" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 38 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 38 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 38 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 38 + 1)} />
          </linearGradient>

          <linearGradient id="paint39_linear_651_25247" x1="543.09" y1="655.557" x2="438.648" y2="836.269" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 39 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 39 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 39 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 39 + 1)} />
          </linearGradient>

          <linearGradient id="paint40_linear_651_25247" x1="437.105" y1="562.214" x2="332.663" y2="742.926" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 40 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 40 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 40 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 40 + 1)} />
          </linearGradient>

          <linearGradient id="paint41_linear_651_25247" x1="354.631" y1="755.622" x2="315.308" y2="823.66" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 41 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 41 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 41 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 41 + 1)} />
          </linearGradient>

          <linearGradient id="paint42_linear_651_25247" x1="128.075" y1="638.016" x2="80.1537" y2="720.933" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 42 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 42 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 42 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 42 + 1)} />
          </linearGradient>
          <linearGradient id="paint43_linear_651_25247" x1="13.0184" y1="483.033" x2="-73.2386" y2="632.279" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 43 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 43 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 43 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 43 + 1)} />
          </linearGradient>

          <linearGradient id="paint44_linear_651_25247" x1="272.561" y1="746.053" x2="324.641" y2="893.331" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 44 + 1)} />
            <stop offset="0.45" stopColor={getGradientColor('#3ABA50', 44 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 44 + 1)} />
          </linearGradient>
          <linearGradient id="paint45_linear_651_25247" x1="262.062" y1="745.039" x2="188.977" y2="871.495" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 45 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 45 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 45 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 45 + 1)} />
          </linearGradient>

          <linearGradient id="paint46_linear_651_25247" x1="106.308" y1="713.945" x2="44.0117" y2="821.734" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 46 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 46 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 46 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 46 + 1)} />
          </linearGradient>

          <linearGradient id="paint47_linear_651_25247" x1="30.3941" y1="692.174" x2="-22.3262" y2="783.394" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 47 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 47 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 47 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 47 + 1)} />
          </linearGradient>

          <linearGradient id="paint48_linear_651_25247" x1="166.049" y1="748.473" x2="51.033" y2="947.481" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 48 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 48 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 48 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 48 + 1)} />
          </linearGradient>

          <linearGradient id="paint49_linear_651_25247" x1="98.0234" y1="709.157" x2="-16.9931" y2="908.165" gradientUnits="userSpaceOnUse">
            <stop stopColor={getGradientColor('#32B34A', 49 + 1)} />
            <stop offset="0.25" stopColor={getGradientColor('#3EBD52', 49 + 1)} />
            <stop offset="0.58" stopColor={getGradientColor('#48C659', 49 + 1)} />
            <stop offset="1" stopColor={getGradientColor('#4CC95C', 49 + 1)} />
          </linearGradient>
        </defs>

      </svg>
    </div>
  );
};

export default HoverSVG;