"use client";

import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

import { Slide, ToastContainer } from "react-toastify";
import type { ToastOptions } from "react-toastify";
import InfoSvg from "@/icons/info-svg";
import RecoilProvider from "./recoil-provider";
import Script from "next/script";

export default function RootProvider({ children }: React.PropsWithChildren) {
  const defaultToastOption: ToastOptions = {
    position: "bottom-center",
    hideProgressBar: false,
    autoClose: 2000,
    closeOnClick: true,
    transition: Slide,
    icon: () => <InfoSvg width="1.125rem" height="1.125rem" transform="rotate(180)" />,
    closeButton: ({ closeToast }) => (
      <button className="Toastify__close-button" type="button" onClick={closeToast}>
        확인
      </button>
    ),
  };
  return (
    <RecoilProvider>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TCX3WBLB');
        `}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TCX3WBLB"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* Google tag (gtag.js) */}
      <Script
        id="gtag"
        strategy="beforeInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-S9CV369E65"
      ></Script>
      <Script id="gtag-data" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || []; function
          gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-S9CV369E65');
        `}
      </Script>

      <Script
        src="https://wcs.naver.net/wcslog.js"
        strategy="beforeInteractive"
        type="text/javascript"
      />
      <Script id="naver-analytics" strategy="afterInteractive">
        {`
          if(!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "b11a86fd040ce8";
          if(window.wcs) {
          wcs.inflow("brandscape.co.kr");
          }
          wcs_do();
        `}
      </Script>

      {children}
      <ToastContainer {...defaultToastOption} limit={3} />
    </RecoilProvider>
  );
}
