abstract class JobProcessor<TInput, TOutput> {
  abstract run(param: TInput): Promise<void>;

  abstract getInputClassConstructor(): ClassConstructor<TInput> {}

  abstract process<TInput, TOutput>(param: TInput): Promise<TOutput> {}
}
