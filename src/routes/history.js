import { createBrowserHistory } from "history";

const history = createBrowserHistory();

history.listen(function (e) {
    console.log('e', e)
});

export default history;