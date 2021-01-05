export const eventsToListen = {
  HOST_THEME_CHANGED: 'HOST_THEME_CHANGED'
};

export const eventsToDispatch = {
  HOST_THEME_CHECK: 'HOST_THEME_CHECK'
}

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;
