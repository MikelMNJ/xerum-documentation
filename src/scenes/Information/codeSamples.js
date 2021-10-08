export const copyrightCode = `<Copyright name="Your Name" />

<Copyright name="Company, LLC" rights trade />

<Copyright
  name="Organization"
  rights="made with love."
/>`;

export const socialCode = `const socialNetworks = [
  {
    name: "Twitter",
    path: "https://twitter.com",
    icon: "fa-brand fa-twitter" },
  {
    name: "Facebook",
    path: "https://facebook.com",
    icon: "fa-brand fa-facebook" },
  {
    name: "Instagram",
    path: "https://instagram.com",
    icon: "fa-brand fa-instagram"
  },
];

<Social networks={socialNetworks} noText />
<Social networks={socialNetworks} />`;

export const tooltipCode = `Standard
<Tooltip text="Standard tool tip." />

Child
<Tooltip position="top">
  <i className="fa-solid fa-smile" />
  Tool tip rendering children.
</Tooltip>

Custom
<Tooltip
  icon="fa-solid fa-question-circle"
  text="Customized tool tip."
  position="top"
  className="customTooltip"
/>`;