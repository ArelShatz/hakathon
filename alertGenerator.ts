const generateRandomRange = (max: number) => {
    return Math.floor(Math.random() * max);
}

export const generateAlert = () => {
    return {
        id: generateRandomRange(Number.MAX_SAFE_INTEGER),
        areaId: generateRandomRange(5),
        timestamp: Date.now(),
    }
}