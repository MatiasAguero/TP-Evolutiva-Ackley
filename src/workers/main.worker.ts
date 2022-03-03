import { Runner } from '../classes/Runner'

self.onmessage = ($event) => {
  if ($event && $event.data.runnerParams) {
    const { runnerParams } = $event.data
    const runner = new Runner(runnerParams)
    const result = runner.run()
    
    self.postMessage(result)
  }
};

