// // Import the required packages
// EpnsSDK, { InfuraSettings, NetWorkSettings, EPNSSettings } = require("'@epnsproject/backend-sdk-staging");
// const ethers = require('ethers');

// // Define the parameters we would need in order to initialize the SDK
// const CHANNEL_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff'; // the private key of the channel


// // Initialise the SDK
// const epnsSdk = new EpnsSDK(CHANNEL_PK);

// // get the subscribers to your channel
// const allSubscribers = await epnsSdk.getSubscribers()

// // send a notification to your subscribers
// const response = await epnsSdk.sendNotification(
//     recipients, //the recipients of the notification
//     pushNotificationTitle, // push notification title
//     pushNotificationBody, //push notification body
//     notificationTitle, //the title of the notification
//     notificationBody, //the body of the notification
//     notificationType, //1 - for broadcast, 3 - for direct message, 4 - for subset.
//     link, //the CTA of the notification, the link which should be redirected to when they click on the notification
// );
// console.log(response)