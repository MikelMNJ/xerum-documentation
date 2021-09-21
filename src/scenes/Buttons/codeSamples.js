export const buttonCode = `<Button
  icon="fab fa-google"
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
  icon="fas fa-pencil-alt"
  text="Edit Profile"
  btnType="transparent"
  callback={editProfile}
/>`;