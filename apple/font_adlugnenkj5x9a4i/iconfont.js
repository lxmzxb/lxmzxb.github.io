;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-apple" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M791.487729 544.095473c-1.279999-129.695874 105.759898-191.871814 110.527893-194.975811-60.159942-88.031915-153.855851-100.063903-187.231819-101.471902-79.743923-8.063992-155.583849 46.943955-196.06381 46.943955-40.351961 0-102.8159-45.759956-168.959836-44.543957-86.911916 1.279999-167.071838 50.527951-211.807795 128.383876-90.303913 156.703848-23.135978 388.831623 64.895937 515.9355 43.007958 62.20794 94.303909 132.063872 161.631843 129.567874 64.831937-2.591997 89.375913-41.951959 167.743837-41.951959s100.415903 41.951959 169.055836 40.671961c69.759932-1.311999 113.98389-63.391939 156.703848-125.791878 49.375952-72.15993 69.727932-142.047862 70.911931-145.631859-1.535999-0.703999-136.063868-52.223949-137.407867-207.135799zM662.559854 163.519842c35.743965-43.359958 59.871942-103.5199 53.279948-163.519842-51.48795 2.111998-113.88789 34.303967-150.815854 77.535925-33.151968 38.367963-62.14394 99.615903-54.367947 158.431847 57.471944 4.479996 116.127888-29.215972 151.903853-72.44793z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M983.549 932.362l-256.468-256.468c56.669-68.138 90.751-155.728 90.751-251.278 0-217.167-176.049-393.216-393.216-393.216s-393.216 176.049-393.216 393.216 176.049 393.216 393.216 393.216c90.131 0 173.179-30.325 239.499-81.329l257.647 257.647c17.062 17.062 44.725 17.062 61.788 0 17.062-17.062 17.062-44.725 0-61.788zM560.628 746.634c-21.070 8.912-43.121 15.757-65.538 20.345-23.025 4.711-46.736 7.101-70.475 7.101s-47.451-2.389-70.475-7.101c-22.417-4.588-44.467-11.431-65.538-20.345-20.698-8.754-40.665-19.593-59.344-32.212-18.514-12.508-35.925-26.874-51.75-42.699-15.825-15.825-30.191-33.236-42.699-51.75-12.62-18.681-23.458-38.646-32.212-59.344-8.912-21.070-15.757-43.121-20.345-65.538-4.711-23.025-7.101-46.736-7.101-70.475s2.389-47.451 7.101-70.475c4.587-22.417 11.431-44.467 20.345-65.538 8.754-20.698 19.593-40.665 32.212-59.344 12.508-18.514 26.874-35.925 42.699-51.75 15.825-15.825 33.236-30.191 51.75-42.699 18.681-12.62 38.646-23.458 59.344-32.212 21.070-8.912 43.121-15.757 65.538-20.345 23.025-4.711 46.736-7.101 70.475-7.101s47.451 2.389 70.475 7.101c22.417 4.587 44.467 11.431 65.538 20.345 20.698 8.754 40.665 19.593 59.344 32.212 18.514 12.508 35.925 26.874 51.75 42.699 15.825 15.825 30.191 33.236 42.699 51.75 12.62 18.681 23.458 38.646 32.212 59.344 8.912 21.070 15.757 43.121 20.345 65.538 4.711 23.025 7.101 46.736 7.101 70.475s-2.389 47.451-7.101 70.475c-4.588 22.417-11.431 44.467-20.345 65.538-8.754 20.698-19.593 40.665-32.212 59.344-12.508 18.514-26.874 35.925-42.699 51.75-15.825 15.825-33.236 30.191-51.75 42.699-18.681 12.62-38.646 23.458-59.344 32.212z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianchi_battery" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M510.045091 791.272727L605.090909 480.488727l-95.045818 12.241455V279.272727L418.909091 580.887273l91.136-28.672zM558.545455 0H465.454545C418.909091 0 418.909091 69.957818 417.512727 69.957818H605.090909S605.090909 0 558.545455 0z" fill="" ></path>' +
    '' +
    '<path d="M232.727273 191.069091v734.952727C232.727273 1023.208727 334.289455 1024 334.289455 1024h355.42109S791.272727 1024 791.272727 926.021818V191.069091C791.272727 93.090909 689.710545 93.090909 689.710545 93.090909H334.289455S232.727273 93.090909 232.727273 191.069091zM693.015273 139.636364S744.727273 139.636364 744.727273 188.928v739.234909C744.727273 977.454545 693.015273 977.454545 693.015273 977.454545H330.984727S279.272727 977.454545 279.272727 928.162909V188.928C279.272727 138.100364 330.984727 139.636364 330.984727 139.636364h362.030546z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)