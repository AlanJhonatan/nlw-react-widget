import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  handleClose: () => void
}

export function FeedbackContentStep({ feedbackType, handleClose }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  console.log({feedbackTypeInfo, feedbackType})
  
  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={handleClose}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
         <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
      </header>

      <div className="fex py-8 gap-2 w-full">
        <textarea
          name=""
          id=""
          cols={30}
          rows={5}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-500 border-zinc-600 bg-transparent rounded-md 
            focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none 
            scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer>
          
        </footer>
      </div>
    </>
  )
}