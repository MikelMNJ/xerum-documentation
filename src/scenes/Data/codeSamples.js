
export const labelCode = `const white = #ffffff;
const blue = #0d97ff;

<Label>
  <i className="fa-solid fa-child" />&nbsp;
  child...
</Label>

<Label text="Removable"
  useClose
  callback={() => console.log("Closed")}
/>

<Label text="Custom"
  useClose
  closeIcon="fa-solid fa-xmark"
  color={white}
  bgColor={blue}
/>`;

export const progressCode = `<Progress
  current={4354.432}
  total={7200}
  pctColor="#ffffff"
/>`;

export const priceCode = `const blue = "#0d97ff";

<Price
  value={1024.76623496782}
  symbol={
    <Fragment>
      <i className="fa-brands fa-ethereum" />
    </Fragment>
  }
  currency="ETH"
  limit={8}
  positiveColor={blue}
/>`;

export const percentCode = `const blue = "#0d97ff";

<Percent
  current={3483.432}
  total={60}
  positiveColor={blue}
  usePlus
/>`;