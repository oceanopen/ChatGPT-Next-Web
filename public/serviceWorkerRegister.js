if ("serviceWorker" in navigator) {
  window.addEventListener("DOMContentLoaded", function () {
    navigator.serviceWorker
      .register("/chat/serviceWorker.js", {
        scope: "/chat/",
      })
      .then(
        function (registration) {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope,
          );
          const sw = registration.installing || registration.waiting;
          if (sw) {
            sw.onstatechange = function () {
              if (sw.state === "installed") {
                // SW installed.  Reload for SW intercept serving SW-enabled page.
                console.log("ServiceWorker installed reload page");
                window.location.reload();
              }
            };
          }
          registration.update().then((res) => {
            console.log("ServiceWorker registration update: ", res);
          });
          window._SW_ENABLED = true;
        },
        function (err) {
          console.warn(
            "ServiceWorker registration failed, registration.scope:",
            registration.scope,
          );
          console.error("ServiceWorker registration failed, error: ", err);
        },
      );
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      console.log("ServiceWorker controllerchange ");
      window.location.reload(true);
    });
  });
}
