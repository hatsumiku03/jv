export default function Game({className}) {
    return (
        <div className={className}>
            <Square />
        </div>
    );
}


export function Square({value, onClick}) {
    return (
        <div className="w-6 h-6 border-1 flex" onClick={onClick}>
            ad
        </div>
    );
}

// https://es.react.dev/learn/tutorial-tic-tac-toe#