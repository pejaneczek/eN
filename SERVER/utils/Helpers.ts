export class Helpers {
    
    public countWordsInText = (text: string): Array<Object> => {
        let countedWords = text.replace(/[^\w\s]/g, "").split(/\s+/).reduce(function (map, word) {
            map[word] = (map[word] || 0) + 1;
            return map;
        }, Object.create(null));

        return countedWords
    }
}