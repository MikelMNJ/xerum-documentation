export const heartbeatCode = `import process from 'process';

const { env: { NODE_ENV } } = process;
const dev = NODE_ENV !== "production";

// Wrap your main App with Heartbeat.
<Heartbeat disabled={dev}>
  <App />
</Heartbeat>`;

export const authRouteCode = ``;

export const toTopCode = `<ToTop />
<ToTop sharp />
<ToTop circle />`;

export const countdownCode = `<Countdown timeframe="minutes" aggregate={5} />`;

export const statusCode = `const green = "#50b990";
const yellow = "#f0b800";
const red = "#c93434";

<Status color={green} text="App servers" />
<Status color={yellow} text="Media servers" />
<Status color={red} text="Email sending" />`;