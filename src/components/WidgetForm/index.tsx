
import { useState } from "react";
import bugImageUrl from '../../assets/bug.png';
import ideiaImageUrl from '../../assets/ideia.png';
import thoughtImageUrl from '../../assets/thought.png';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideiaImageUrl,
      alt: 'Imagem de uma ideia'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>();
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        { feedbackSent ? (
          <FeedbackSuccessStep />
        ) : (
          <>
            {!feedbackType
              ? (<FeedbackTypeStep setFeedbackType={setFeedbackType} />)
              : (
                <FeedbackContentStep
                  feedbackType={feedbackType}
                  handleClose={handleRestartFeedback}
                  onFeedbackSent={() => setFeedbackSent(true)}
                />
            )}
          </>
        )}
        
        <footer className="text-xs text-neutral-400">
          Feito com ♥ pela <a href="http://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
        </footer>
      </div>
  )
}