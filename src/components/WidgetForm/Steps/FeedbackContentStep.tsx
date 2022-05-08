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

      </div>
    </>
  )
}