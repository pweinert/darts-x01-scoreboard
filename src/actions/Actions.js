export function insertScore(num, mod, id) {
    return {
            type: 'INSERT_SCORE',
            num: Number(num),
            mod: Number(mod),
            id: id
        };
}
export function editScore(num, mod, id) {
    return {
            type: 'EDIT_SCORE',
            num: Number(num),
            mod: Number(mod),
            id: id
        };
}
export function startGame(config) {
    return {
            type: 'START_GAME',
            config: config
        };
}
