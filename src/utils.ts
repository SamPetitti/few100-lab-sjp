export function ready(cb: () => void) {
    document.onreadystatechange = () => {
        if (document.readyState === 'interactive') {
            cb();
        }
    };
}
