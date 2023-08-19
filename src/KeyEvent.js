function OnKeyEvent(event, callback) {
    const onEvent = (e) => {
        callback(e);
    }

    window.addEventListener(event, callback);
    return () => {
        window.removeEventListener(event, callback);
    }
}

export default OnKeyEvent;