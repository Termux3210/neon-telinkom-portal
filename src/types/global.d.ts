declare global {
  interface Window {
    B24Form?: (options: { id: string; sec: string }) => void;
  }
}

export {};