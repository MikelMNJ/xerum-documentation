export const messagesCode = `const newMessage = "You've been notified!";

// 1. Ready action/selector array in app state.
const [ messages, setMessages ] = useState([]);

// 2. Place Messages component in root component
// and pass the messages array action/selector.
<Messages
  time={3000}
  messages={messages}
  setMessages={setMessages}
/>

// 3. Trigger message action from any
// component event or API callback.
<Button
  text="Click to Notify"
  callback={() => (
    setMessages([ ...messages, newMessage ])
  )}
/>`;

export const notFoundCode = `// Default
<NotFound />

// Custom
<NotFound
  className="customNotFound"
  icon="fa-solid fa-frown-open"
  title="Well, shucks!"
  message="Something's missing."
/ >
`;

export const loadingCode = `const customMsg = "Couldn't fetch resource :/";

<Loading
  isLoading={contentLoading}
  hasData={contentData}
  onFail={customMsg || <YourComponent />}
>
  {/*
    Your content after loading has finished
    and 200 response data set in app state.
  */}
</Loading>
`;

export const bannerCode = ``;

export const badgeCode = ``;