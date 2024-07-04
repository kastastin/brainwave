import { brainwaveWhiteSymbol, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => (
  <div className="pointer-events-none absolute -left-40 top-0 size-[56.625rem] opacity-50 mix-blend-color-dodge">
    <img
      src={gradient}
      alt="Gradient"
      width={1417}
      height={1417}
      className="absolute left-1/2 top-1/2 h-[88.5625rem] w-[79.5625rem] max-w-[79.5625rem] -translate-x-1/2 -translate-y-1/2"
    />
  </div>
);

export const PhotoChatMessage = () => (
  <div className="absolute right-8 top-8 max-w-[17.5rem] rounded-t-xl rounded-bl-xl bg-black px-8 py-6 font-code text-base lg:right-[8.75rem] lg:top-16 lg:max-w-[17.5rem]">
    Hey Brainwave, enhance this photo
    <ChatBubbleWing className="absolute bottom-0 left-full" />
  </div>
);

export const VideoChatMessage = () => (
  <div className="absolute left-[3.125rem] top-8 w-full max-w-56 rounded-t-xl rounded-br-xl bg-n-6 pb-7 pl-5 pr-2.5 pt-2.5 font-code text-base md:max-w-[17.5rem]">
    Video generated!
    <div className="absolute bottom-[-1.125rem] left-5 flex size-9 items-center justify-center rounded-xl bg-color-1">
      <img src={brainwaveWhiteSymbol} alt="Brainwave" width={26} height={26} />
    </div>
    <p className="tagline absolute bottom-1 right-2.5 text-[0.625rem] uppercase text-n-3">
      just now
    </p>
    <ChatBubbleWing
      className="absolute bottom-0 right-full -scale-x-100"
      pathClassName="fill-n-6"
    />
  </div>
);

export const VideoBar = () => (
  <div className="absolute bottom-0 left-0 flex w-full items-center p-6">
    <img
      src={play}
      alt="Play"
      width={24}
      height={24}
      className="mr-3 object-contain"
    />

    <div className="flex-1 bg-[#D9D9D9]">
      <div className="h-0.5 w-1/2 bg-color-1"></div>
    </div>
  </div>
);
