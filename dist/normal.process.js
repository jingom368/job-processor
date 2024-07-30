"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalCompletion = normalCompletion;
// normal-completion.process.ts
async function normalCompletion() {
    return 'Process completed successfully.';
}
(async () => {
    const result = await normalCompletion();
    if (process.send) {
        console.log('Sending completion message to parent process'); // 디버깅 로그 추가
        process.send({ status: 'completed', result });
    }
    process.exit(0);
})();
