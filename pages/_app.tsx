import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        id="m-clarity"
        type="text/javascript"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "gngfcg14ur");
        `,
        }}
      />
      <script
        id={"chatbox"}
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener('DOMContentLoaded', function() {
          // setting global variables
          window.botId = 1258
          
          // create div with id = sarufi-chatbox
          const div = document.createElement("div")
          div.id = "sarufi-chatbox"
          document.body.appendChild(div)
      
          // create and attach script tag
          const script = document.createElement("script")
          script.crossOrigin = true
          script.type = "module"
          script.src = "https://cdn.jsdelivr.net/gh/flexcodelabs/sarufi-chatbox/example/vanilla-js/script.js"
          document.head.appendChild(script)
      
          // create and attach css
          const style = document.createElement("link")
          style.crossOrigin = true
          style.rel = "stylesheet"
          style.href = "https://cdn.jsdelivr.net/gh/flexcodelabs/sarufi-chatbox/example/vanilla-js/style.css"
          document.head.appendChild(style)
        });`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
