// TradingViewWidget.jsx
import './Grafico.css'
import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function Grafico() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_ed34b') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "GOOG",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: true,
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            details: true,
            hotlist: true,
            calendar: true,
            container_id: "tradingview_ed34b"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_ed34b' />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"></a>
      </div>
    </div>
  );
}
