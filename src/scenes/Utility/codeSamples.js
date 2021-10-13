export const heartbeatCode = `import process from 'process';

const { env: { NODE_ENV } } = process;
const dev = NODE_ENV !== "production";

// Wrap your main App with Heartbeat.
<Heartbeat disabled={dev}>
  <App />
</Heartbeat>`;

export const authRouteCode = ``;

export const toTopCode = `<ToTop />`;

export const countdownCode = ``;

export const statusCode = `const color = serviceStatus => {
  switch(serviceStatus) {
    case "online":
      return colors.green;
    case "degraded":
      return colors.yellow;
    case "offline":
      return colors.red;

    default:
      null;
  };
};

<Status color={color(serviceStatus)} />`;