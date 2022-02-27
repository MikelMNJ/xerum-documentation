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
    icon: "fa-brands fa-twitter" },
  {
    name: "Facebook",
    path: "https://facebook.com",
    icon: "fa-brands fa-facebook" },
  {
    name: "Instagram",
    path: "https://instagram.com",
    icon: "fa-brands fa-instagram"
  },
];

<Social networks={socialNetworks} noText />
<Social networks={socialNetworks} />`;

export const tooltipCode = `// Standard
<Tooltip text="Standard tool tip." />

// Child
<Tooltip position="top">
  <i className="fa-solid fa-smile" />
  Tool tip rendering children.
</Tooltip>`;