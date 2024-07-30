// error-occurrence.process.ts
export async function errorOccurrence(): Promise<void> {
  return new Promise((_, reject) => {
    reject(new Error('An error has occurred.'));
  });
}

(async () => {
  try {
    await errorOccurrence();
  } catch (error) {
    // error를 Error 타입으로 형 변환
    if (error instanceof Error) {
      if (process.send) {
        console.log('Sending error message to parent process'); // 디버깅 로그 추가
        process.send({ status: 'error', error: error.message });
      }
    } else {
      // error가 Error 타입이 아닌 경우의 처리
      console.error('An unexpected error occurred', error);
    }
    process.exit(1); // 에러 발생 시 종료 코드 1
  }
})();
