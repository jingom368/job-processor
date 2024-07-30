"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infiniteLoop = infiniteLoop;
// infinite-loop.process.ts
async function infiniteLoop() {
    return new Promise(() => {
        while (true) {
            console.log('This is an infinite loop.');
        }
    });
}
(async () => {
    await infiniteLoop();
    if (process.send) {
        console.log('Sending completion message to parent process'); // 디버깅 로그 추가
        process.send({ status: 'completed', result: 'Infinite loop completed' });
    }
    process.exit(0);
})();
