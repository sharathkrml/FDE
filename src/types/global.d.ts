export {};

declare global {
  interface Window {
    YT:
      | {
          Player: new (
            el: HTMLElement | string,
            options: Record<string, unknown>
          ) => unknown;
        }
      | undefined;
    onYouTubeIframeAPIReady?: () => void;
  }
}
