import fetch from "node-fetch";
import { RootObject } from "./types/reddit";
import onoff from "onoff";
const Gpio = onoff.Gpio;
// const getData = async <T>(url: string): Promise<T> => {
//   const resposne = await fetch(url);
//   if (resposne.ok) {
//     return resposne.json();
//   } else {
//     throw new Error("woops");
//   }
// };

// const test = async () => {
//   const {
//     data: { children }
//   } = await getData<RootObject>("https://www.reddit.com/r/all.json");
//   children.forEach(({ data: { author, title, ups } }) =>
//     console.log(ups + " " + author + " " + title)
//   );
// };

// test();
const led = new Gpio(13, "out");

const blinkLED = () => {
  if (led.readSync() === 0) {
    led.writeSync(1);
  } else {
    led.writeSync(0);
  }
};

const interval = setInterval(blinkLED, 250);

const endBlink = () => {
  clearInterval(interval);
  led.writeSync(0);
  led.unexport(); // Unexport GPIO to free resources
};

setTimeout(endBlink, 5000);
