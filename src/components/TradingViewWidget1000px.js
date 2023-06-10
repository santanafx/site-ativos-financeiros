// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget1000px({ ticker }) {
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
        if (document.getElementById('tradingview_98da4') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: ticker,
            interval: "D",
            timezone: "America/Sao_Paulo",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: true,
            withdateranges: true,
            hide_side_toolbar: false,
            allow_symbol_change: true,
            watchlist: ["NASDAQ:TSLA", "NASDAQ:AAPL", "NASDAQ:NVDA", "NASDAQ:AMZN", "NASDAQ:AMD", "NASDAQ:MSFT", "NASDAQ:META", "NASDAQ:NFLX", "NASDAQ:GOOGL"],
            details: true,
            hotlist: true,
            calendar: true,
            studies: ["STD;SMA"],
            container_id: "tradingview_98da4"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_98da4' style={{ height: '70vh', marginLeft: '30px', marginRight: '30px' }} />
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a>
      </div>
    </div>
  );
}
