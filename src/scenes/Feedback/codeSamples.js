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
  icon="fa-solid fa-face-frown-open"
  title="Well, shucks!"
  message="Something's missing."
/ >
`;

export const loadingCode = `// General use
<Loading
  isLoading={contentLoading}
  hasData={contentData}
>
  {/*
    Your content after loading has finished
    and 200 response data set in app state.
  */}

  <i className="fa-solid fa-thumbs-up" />
  All good.
</Loading>
`;

export const badgeCode = `// Default
<Button icon="fa-solid fa-bell">
  <Badge className="pos" count={4} />
</Button>

// Square
<Button icon="fa-solid fa-envelope">
  <Badge className="pos" count={1296} square />
</Button>`;

export const bannerCode = `<Banner
  text="The floggings will continue until
    morale improves..."
  callback={handleClose}
/>

<Banner
  noIcon
  center
  className="customBanner"
  callback={handleClose}
>
  <i className="fa-solid fa-exclamation" />
  <strong>Reminder</strong>:
  Servers will be down.
</Banner>`;