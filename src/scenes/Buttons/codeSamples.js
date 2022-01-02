export const buttonCode = `<Button
  icon="fa-brands fa-google"
  style={{ backgroundColor: blue }}
  hoverStyle={{ backgroundColor: darkBlue }}
  url="google.com"
/>

<Button
  text="Submit"
  type="submit"
  disabled={isSubmitting}
  btnType="ghost"
  callback={handleSubmit}
/>

<Button
  icon="fa-solid fa-pencil-alt"
  text="Edit Profile"
  btnType="transparent"
  callback={editProfile}
/>`;