// This is where my new functions will go
var myStupidFunc = function() {
  console.log("Something is happening here; what it is ain't at all clear! ");
};

// Make these global until I can figure more of this out!!
swReg = null;
isSubscribed = false;
// Copied from https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/good-notification
// Here goes nothing, big time!!

console.log(
  "Situation is: " + self.registration ? self.registration.scope : ""
);

self.addEventListener("message", function(event) {
  console.log("SW Received Message: " + event.data);
  event.ports[0].postMessage("SW Says 'Hello back!'");
});

// Let's keep this here for a while just in case we need it
/*
self.addEventListener('activate', function(event) {
  var pushMgr = self.registration.pushManager;
  console.log("Push mgr: " + pushMgr)
  /*
  Notification.requestPermission().then(function(result) {
    if (result === 'denied') {
      console.log('Permission wasn\'t granted. Allow a retry.');
      return;
    }
    if (result === 'default') {
      console.log('The permission request was dismissed.');
      return;
    }
  // Do something with the granted permission.
  });
/*
self.serviceWorker.ready.then(function(serviceWorkerRegistration) {
    serviceWorkerRegistration.pushManager.subscribe()
      .then(function(subscription) {
        // The subscription was successful
        // subscribeButton.disabled = true;
        // return sendSubscriptionToServer(subscription);
        console.log('Service worked subscribed')
      })
      .catch(function(error) {
        if (Notification.permission === 'denied') {
          console.log('Permission for Notifications was denied');
          // subscribeButton.disabled = true;
        } else {
          console.log('Unable to subscribe to push.', error);
          // subscribeButton.disabled = false;
        }
      });
  });
*/

self.addEventListener("push", function(event) {
  var thisMessage = JSON.parse(event.data.text());

  console.log("[Service Worker] Push Received.");
  console.log("This message text: " + thisMessage.text);
  console.log("URL: " + thisMessage.url);
  console.log(`[Service Worker] Push had this data: "${event.data}"`);
  console.log("[Service Worker] as json: " + JSON.stringify(thisMessage));

  const title = "Iandi Gatsby";
  const options = {
    body: thisMessage.text,
    actions: [
      {
        action: "engage-action",
        title: "Engage"
      }
    ]
    // icon: 'images/icon.png',
    // badge: 'images/badge.png'
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", function(event) {
  if (!event.action) {
    // Was a normal notification click
    console.log("Normal Notification Click.");
  } else {
    console.log("Action click on " + event.action);
  }

  console.log("[Service Worker] Notification click Received.");

  event.notification.close();
});

/* We may need this later, so save it for now
function askPermission() {
  console.log('Notification object is ' + Notification)
  // This is the modern way of doing it; save for future modding
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
      resolve(result);
    });
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
  })
}
*/
