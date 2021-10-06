import React from "react";

const BackgroundAnimation = () => (
  <div
    style={{
      height: "150px",
      width: "400px",
      // borderRadius: "25px",
      // backgroundImage:
      // "linear-gradient(323deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.01) 16.667%,rgba(46, 46, 46, 0.01) 16.667%, rgba(46, 46, 46, 0.01) 33.334%,rgba(226, 226, 226, 0.01) 33.334%, rgba(226, 226, 226, 0.01) 50.001000000000005%,rgba(159, 159, 159, 0.01) 50.001%, rgba(159, 159, 159, 0.01) 66.668%,rgba(149, 149, 149, 0.01) 66.668%, rgba(149, 149, 149, 0.01) 83.33500000000001%,rgba(43, 43, 43, 0.01) 83.335%, rgba(43, 43, 43, 0.01) 100.002%),linear-gradient(346deg, rgba(166, 166, 166, 0.03) 0%, rgba(166, 166, 166, 0.03) 25%,rgba(240, 240, 240, 0.03) 25%, rgba(240, 240, 240, 0.03) 50%,rgba(121, 121, 121, 0.03) 50%, rgba(121, 121, 121, 0.03) 75%,rgba(40, 40, 40, 0.03) 75%, rgba(40, 40, 40, 0.03) 100%),linear-gradient(347deg, rgba(209, 209, 209, 0.01) 0%, rgba(209, 209, 209, 0.01) 25%,rgba(22, 22, 22, 0.01) 25%, rgba(22, 22, 22, 0.01) 50%,rgba(125, 125, 125, 0.01) 50%, rgba(125, 125, 125, 0.01) 75%,rgba(205, 205, 205, 0.01) 75%, rgba(205, 205, 205, 0.01) 100%),linear-gradient(84deg, rgba(195, 195, 195, 0.01) 0%, rgba(195, 195, 195, 0.01) 14.286%,rgba(64, 64, 64, 0.01) 14.286%, rgba(64, 64, 64, 0.01) 28.572%,rgba(67, 67, 67, 0.01) 28.572%, rgba(67, 67, 67, 0.01) 42.858%,rgba(214, 214, 214, 0.01) 42.858%, rgba(214, 214, 214, 0.01) 57.144%,rgba(45, 45, 45, 0.01) 57.144%, rgba(45, 45, 45, 0.01) 71.42999999999999%,rgba(47, 47, 47, 0.01) 71.43%, rgba(47, 47, 47, 0.01) 85.71600000000001%,rgba(172, 172, 172, 0.01) 85.716%, rgba(172, 172, 172, 0.01) 100.002%),linear-gradient(73deg, rgba(111, 111, 111, 0.03) 0%, rgba(111, 111, 111, 0.03) 16.667%,rgba(202, 202, 202, 0.03) 16.667%, rgba(202, 202, 202, 0.03) 33.334%,rgba(57, 57, 57, 0.03) 33.334%, rgba(57, 57, 57, 0.03) 50.001000000000005%,rgba(197, 197, 197, 0.03) 50.001%, rgba(197, 197, 197, 0.03) 66.668%,rgba(97, 97, 97, 0.03) 66.668%, rgba(97, 97, 97, 0.03) 83.33500000000001%,rgba(56, 56, 56, 0.03) 83.335%, rgba(56, 56, 56, 0.03) 100.002%),linear-gradient(132deg, rgba(88, 88, 88, 0.03) 0%, rgba(88, 88, 88, 0.03) 20%,rgba(249, 249, 249, 0.03) 20%, rgba(249, 249, 249, 0.03) 40%,rgba(2, 2, 2, 0.03) 40%, rgba(2, 2, 2, 0.03) 60%,rgba(185, 185, 185, 0.03) 60%, rgba(185, 185, 185, 0.03) 80%,rgba(196, 196, 196, 0.03) 80%, rgba(196, 196, 196, 0.03) 100%),linear-gradient(142deg, rgba(160, 160, 160, 0.03) 0%, rgba(160, 160, 160, 0.03) 12.5%,rgba(204, 204, 204, 0.03) 12.5%, rgba(204, 204, 204, 0.03) 25%,rgba(108, 108, 108, 0.03) 25%, rgba(108, 108, 108, 0.03) 37.5%,rgba(191, 191, 191, 0.03) 37.5%, rgba(191, 191, 191, 0.03) 50%,rgba(231, 231, 231, 0.03) 50%, rgba(231, 231, 231, 0.03) 62.5%,rgba(70, 70, 70, 0.03) 62.5%, rgba(70, 70, 70, 0.03) 75%,rgba(166, 166, 166, 0.03) 75%, rgba(166, 166, 166, 0.03) 87.5%,rgba(199, 199, 199, 0.03) 87.5%, rgba(199, 199, 199, 0.03) 100%),linear-gradient(238deg, rgba(116, 116, 116, 0.02) 0%, rgba(116, 116, 116, 0.02) 20%,rgba(141, 141, 141, 0.02) 20%, rgba(141, 141, 141, 0.02) 40%,rgba(152, 152, 152, 0.02) 40%, rgba(152, 152, 152, 0.02) 60%,rgba(61, 61, 61, 0.02) 60%, rgba(61, 61, 61, 0.02) 80%,rgba(139, 139, 139, 0.02) 80%, rgba(139, 139, 139, 0.02) 100%),linear-gradient(188deg, rgba(227, 227, 227, 0.01) 0%, rgba(227, 227, 227, 0.01) 20%,rgba(105, 105, 105, 0.01) 20%, rgba(105, 105, 105, 0.01) 40%,rgba(72, 72, 72, 0.01) 40%, rgba(72, 72, 72, 0.01) 60%,rgba(33, 33, 33, 0.01) 60%, rgba(33, 33, 33, 0.01) 80%,rgba(57, 57, 57, 0.01) 80%, rgba(57, 57, 57, 0.01) 100%),linear-gradient(90deg, hsl(237,0%,13%),hsl(237,0%,13%))",
      // backgroundImage:
      // "linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff);",
      // "linear-gradient(161deg, rgba(121, 121, 121, 0.02) 0%, rgba(121, 121, 121, 0.02) 16.667%,rgba(193, 193, 193, 0.02) 16.667%, rgba(193, 193, 193, 0.02) 33.334%,rgba(177, 177, 177, 0.02) 33.334%, rgba(177, 177, 177, 0.02) 50.001000000000005%,rgba(5, 5, 5, 0.02) 50.001%, rgba(5, 5, 5, 0.02) 66.668%,rgba(229, 229, 229, 0.02) 66.668%, rgba(229, 229, 229, 0.02) 83.33500000000001%,rgba(211, 211, 211, 0.02) 83.335%, rgba(211, 211, 211, 0.02) 100.002%),linear-gradient(45deg, rgba(223, 223, 223, 0.02) 0%, rgba(223, 223, 223, 0.02) 14.286%,rgba(70, 70, 70, 0.02) 14.286%, rgba(70, 70, 70, 0.02) 28.572%,rgba(109, 109, 109, 0.02) 28.572%, rgba(109, 109, 109, 0.02) 42.858%,rgba(19, 19, 19, 0.02) 42.858%, rgba(19, 19, 19, 0.02) 57.144%,rgba(180, 180, 180, 0.02) 57.144%, rgba(180, 180, 180, 0.02) 71.42999999999999%,rgba(63, 63, 63, 0.02) 71.43%, rgba(63, 63, 63, 0.02) 85.71600000000001%,rgba(87, 87, 87, 0.02) 85.716%, rgba(87, 87, 87, 0.02) 100.002%),linear-gradient(337deg, rgba(142, 142, 142, 0.02) 0%, rgba(142, 142, 142, 0.02) 20%,rgba(164, 164, 164, 0.02) 20%, rgba(164, 164, 164, 0.02) 40%,rgba(203, 203, 203, 0.02) 40%, rgba(203, 203, 203, 0.02) 60%,rgba(228, 228, 228, 0.02) 60%, rgba(228, 228, 228, 0.02) 80%,rgba(54, 54, 54, 0.02) 80%, rgba(54, 54, 54, 0.02) 100%),linear-gradient(314deg, rgba(187, 187, 187, 0.02) 0%, rgba(187, 187, 187, 0.02) 12.5%,rgba(170, 170, 170, 0.02) 12.5%, rgba(170, 170, 170, 0.02) 25%,rgba(214, 214, 214, 0.02) 25%, rgba(214, 214, 214, 0.02) 37.5%,rgba(187, 187, 187, 0.02) 37.5%, rgba(187, 187, 187, 0.02) 50%,rgba(190, 190, 190, 0.02) 50%, rgba(190, 190, 190, 0.02) 62.5%,rgba(6, 6, 6, 0.02) 62.5%, rgba(6, 6, 6, 0.02) 75%,rgba(206, 206, 206, 0.02) 75%, rgba(206, 206, 206, 0.02) 87.5%,rgba(171, 171, 171, 0.02) 87.5%, rgba(171, 171, 171, 0.02) 100%),linear-gradient(300deg, rgba(243, 243, 243, 0.01) 0%, rgba(243, 243, 243, 0.01) 12.5%,rgba(209, 209, 209, 0.01) 12.5%, rgba(209, 209, 209, 0.01) 25%,rgba(179, 179, 179, 0.01) 25%, rgba(179, 179, 179, 0.01) 37.5%,rgba(3, 3, 3, 0.01) 37.5%, rgba(3, 3, 3, 0.01) 50%,rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%,rgba(151, 151, 151, 0.01) 62.5%, rgba(151, 151, 151, 0.01) 75%,rgba(16, 16, 16, 0.01) 75%, rgba(16, 16, 16, 0.01) 87.5%,rgba(242, 242, 242, 0.01) 87.5%, rgba(242, 242, 242, 0.01) 100%),linear-gradient(6deg, rgba(31, 31, 31, 0.02) 0%, rgba(31, 31, 31, 0.02) 20%,rgba(193, 193, 193, 0.02) 20%, rgba(193, 193, 193, 0.02) 40%,rgba(139, 139, 139, 0.02) 40%, rgba(139, 139, 139, 0.02) 60%,rgba(14, 14, 14, 0.02) 60%, rgba(14, 14, 14, 0.02) 80%,rgba(122, 122, 122, 0.02) 80%, rgba(122, 122, 122, 0.02) 100%),linear-gradient(279deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 14.286%,rgba(160, 160, 160, 0.02) 14.286%, rgba(160, 160, 160, 0.02) 28.572%,rgba(23, 23, 23, 0.02) 28.572%, rgba(23, 23, 23, 0.02) 42.858%,rgba(60, 60, 60, 0.02) 42.858%, rgba(60, 60, 60, 0.02) 57.144%,rgba(149, 149, 149, 0.02) 57.144%, rgba(149, 149, 149, 0.02) 71.42999999999999%,rgba(4, 4, 4, 0.02) 71.43%, rgba(4, 4, 4, 0.02) 85.71600000000001%,rgba(50, 50, 50, 0.02) 85.716%, rgba(50, 50, 50, 0.02) 100.002%),linear-gradient(109deg, rgba(124, 124, 124, 0.03) 0%, rgba(124, 124, 124, 0.03) 12.5%,rgba(61, 61, 61, 0.03) 12.5%, rgba(61, 61, 61, 0.03) 25%,rgba(187, 187, 187, 0.03) 25%, rgba(187, 187, 187, 0.03) 37.5%,rgba(207, 207, 207, 0.03) 37.5%, rgba(207, 207, 207, 0.03) 50%,rgba(206, 206, 206, 0.03) 50%, rgba(206, 206, 206, 0.03) 62.5%,rgba(118, 118, 118, 0.03) 62.5%, rgba(118, 118, 118, 0.03) 75%,rgba(89, 89, 89, 0.03) 75%, rgba(89, 89, 89, 0.03) 87.5%,rgba(96, 96, 96, 0.03) 87.5%, rgba(96, 96, 96, 0.03) 100%),linear-gradient(329deg, rgba(35, 35, 35, 0.02) 0%, rgba(35, 35, 35, 0.02) 20%,rgba(246, 246, 246, 0.02) 20%, rgba(246, 246, 246, 0.02) 40%,rgba(118, 118, 118, 0.02) 40%, rgba(118, 118, 118, 0.02) 60%,rgba(245, 245, 245, 0.02) 60%, rgba(245, 245, 245, 0.02) 80%,rgba(140, 140, 140, 0.02) 80%, rgba(140, 140, 140, 0.02) 100%),linear-gradient(90deg, hsl(314,0%,31%),hsl(314,0%,31%))",
    }}
  >
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 302 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill="#46737"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="5s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#945DD6"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)"
      >
        <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)"
      >
        <animateMotion
          dur="10s"
          begin="1"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill="#F46737"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </ellipse>
      <path
        d="M333.667 382.335L359.42 356.551"
        transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)"
      >
        <animateMotion
          dur="5s"
          begin="0"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
      <ellipse
        cx="165.524"
        cy="93.9596"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-165.524 -93.9596)"
        fill="#F46737"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M165.182 94.3159L139.429 120.1"
        transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
        stroke="url(#paint7_linear)"
      >
        <animateMotion
          dur="10s"
          begin="3"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill="#13ADC7"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint11_linear)"
      >
        <animateMotion
          dur="12s"
          begin="4"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor="#FBFBFB" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="382.168"
          y1="155.027"
          x2="357.1"
          y2="129.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.309"
          y1="382.693"
          x2="358.376"
          y2="357.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="165.54"
          y1="93.9578"
          x2="140.472"
          y2="118.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F46737" />
          <stop offset="1" stopColor="#F46737" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="414.367"
          y1="301.156"
          x2="439.435"
          y2="276.118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="515.943"
          y1="288.238"
          x2="541.339"
          y2="291.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="117.001"
          y1="230.619"
          x2="117.36"
          y2="258.193"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#945DD6" />
          <stop offset="1" stopColor="#945DD6" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13ADC7" />
          <stop offset="1" stopColor="#13ADC7" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default BackgroundAnimation;
